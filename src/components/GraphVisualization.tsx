import React, { useEffect, useRef, useState, useMemo } from 'react';
import * as d3 from 'd3';
import { motion, AnimatePresence } from 'motion/react';
import { Info, MousePointer2, Maximize2, Minimize2 } from 'lucide-react';

interface Node extends d3.SimulationNodeDatum {
  id: string;
  group: number;
  label: string;
  description: string;
  parentId?: string;
  isSubNode?: boolean;
}

const mainNodes: Node[] = [
  { id: 'query', group: 1, label: 'User Query', description: 'The natural language input from the user that initiates the retrieval process.' },
  { id: 'retriever', group: 2, label: 'Retriever', description: 'The engine that coordinates searching across both vector and graph databases.' },
  { id: 'vector_db', group: 3, label: 'Vector DB', description: 'Stores high-dimensional embeddings of text chunks for semantic similarity search.' },
  { id: 'kg', group: 3, label: 'Knowledge Graph', description: 'A network of entities and relationships (triplets) providing structured context.' },
  { id: 'extraction', group: 4, label: 'Entity Extraction', description: 'The process of using LLMs to identify nodes and edges from raw unstructured text.' },
  { id: 'community', group: 4, label: 'Community Summary', description: 'Hierarchical summaries of node clusters, enabling global-scale reasoning (Microsoft GraphRAG).' },
  { id: 'llm', group: 5, label: 'LLM', description: 'The Large Language Model that performs reasoning and generates the final response.' },
];

const subNodesMap: Record<string, Node[]> = {
  kg: [
    { id: 'kg_entities', group: 3, label: 'Entities', description: 'Real-world objects or concepts represented as nodes in the graph.', isSubNode: true, parentId: 'kg' },
    { id: 'kg_rels', group: 3, label: 'Relationships', description: 'The semantic connections between entities, represented as edges.', isSubNode: true, parentId: 'kg' },
    { id: 'kg_triplets', group: 3, label: 'Triplets', description: 'The core data unit: (Subject, Predicate, Object).', isSubNode: true, parentId: 'kg' },
  ],
  vector_db: [
    { id: 'vdb_embed', group: 3, label: 'Embeddings', description: 'Numerical representations of text captured in high-dimensional space.', isSubNode: true, parentId: 'vector_db' },
    { id: 'vdb_sim', group: 3, label: 'Similarity', description: 'Mathematical distance (e.g., Cosine) used to find relevant chunks.', isSubNode: true, parentId: 'vector_db' },
  ],
  llm: [
    { id: 'llm_reason', group: 5, label: 'Reasoning', description: 'The model\'s ability to synthesize retrieved facts into a logical answer.', isSubNode: true, parentId: 'llm' },
    { id: 'llm_gen', group: 5, label: 'Generation', description: 'Producing human-like text based on the provided context.', isSubNode: true, parentId: 'llm' },
  ],
  retriever: [
    { id: 'ret_hybrid', group: 2, label: 'Hybrid Search', description: 'Combining keyword search with semantic vector search.', isSubNode: true, parentId: 'retriever' },
    { id: 'ret_rank', group: 2, label: 'Re-ranking', description: 'Refining the order of retrieved results for maximum relevance.', isSubNode: true, parentId: 'retriever' },
  ],
};

const initialLinks: any[] = [
  { source: 'query', target: 'retriever', value: 2 },
  { source: 'retriever', target: 'vector_db', value: 1 },
  { source: 'retriever', target: 'kg', value: 1 },
  { source: 'kg', target: 'community', value: 1 },
  { source: 'extraction', target: 'kg', value: 1 },
  { source: 'retriever', target: 'llm', value: 2 },
  { source: 'community', target: 'llm', value: 1 },
  { source: 'vector_db', target: 'llm', value: 1 },
];

export default function GraphVisualization() {
  const svgRef = useRef<SVGSVGElement>(null);
  const simulationRef = useRef<d3.Simulation<any, any> | null>(null);
  const [hoveredNode, setHoveredNode] = useState<Node | null>(null);
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());

  const { currentNodes, currentLinks } = useMemo(() => {
    const nodes = [...mainNodes.map(n => ({ ...n }))];
    const links = [...initialLinks.map(l => ({ ...l }))];

    expandedNodes.forEach(parentId => {
      const subs = subNodesMap[parentId];
      if (subs) {
        subs.forEach(sub => {
          nodes.push({ ...sub });
          links.push({ source: parentId, target: sub.id, value: 0.5, isSubLink: true });
        });
      }
    });

    return { currentNodes: nodes, currentLinks: links };
  }, [expandedNodes]);

  useEffect(() => {
    if (!svgRef.current) return;

    const width = 800;
    const height = 550;

    const svg = d3.select(svgRef.current)
      .attr('viewBox', [0, 0, width, height]);

    // Initialize or update simulation
    if (!simulationRef.current) {
      simulationRef.current = d3.forceSimulation<any>()
        .force('link', d3.forceLink<any, any>().id(d => d.id).distance(d => d.isSubLink ? 60 : 120))
        .force('charge', d3.forceManyBody().strength(-800))
        .force('center', d3.forceCenter(width / 2, height / 2))
        .force('collision', d3.forceCollide().radius(d => d.isSubNode ? 30 : 60));
    }

    const simulation = simulationRef.current;

    // Update simulation with new data
    simulation.nodes(currentNodes);
    (simulation.force('link') as d3.ForceLink<any, any>).links(currentLinks);
    simulation.alpha(0.3).restart();

    // Render links
    const link = svg.selectAll<SVGLineElement, any>('line')
      .data(currentLinks, d => `${d.source.id || d.source}-${d.target.id || d.target}`)
      .join(
        enter => enter.append('line')
          .attr('stroke', '#cbd5e1')
          .attr('stroke-opacity', 0)
          .attr('stroke-width', d => d.value * 2)
          .call(enter => enter.transition().duration(500).attr('stroke-opacity', d => d.isSubLink ? 0.2 : 0.4)),
        update => update,
        exit => exit.transition().duration(500).attr('stroke-opacity', 0).remove()
      );

    // Render nodes
    const node = svg.selectAll<SVGGElement, any>('g.node')
      .data(currentNodes, d => d.id)
      .join(
        enter => {
          const g = enter.append('g')
            .attr('class', 'node cursor-pointer')
            .on('mouseenter', (event, d) => setHoveredNode(d))
            .on('mouseleave', () => setHoveredNode(null))
            .on('click', (event, d) => {
              if (subNodesMap[d.id]) {
                setExpandedNodes(prev => {
                  const next = new Set(prev);
                  if (next.has(d.id)) next.delete(d.id);
                  else next.add(d.id);
                  return next;
                });
              }
            })
            .call(d3.drag<SVGGElement, any>()
              .on('start', dragstarted)
              .on('drag', dragged)
              .on('end', dragended) as any);

          g.append('circle')
            .attr('r', d => d.isSubNode ? 16 : 24)
            .attr('fill', d => {
              const colors = ['#42b883', '#3b82f6', '#8b5cf6', '#f59e0b', '#ef4444', '#10b981'];
              return colors[d.group % colors.length];
            })
            .attr('class', 'transition-all duration-300 hover:scale-110 shadow-lg');

          g.append('text')
            .text(d => d.label)
            .attr('text-anchor', 'middle')
            .attr('dy', d => d.isSubNode ? 30 : 40)
            .attr('font-size', d => d.isSubNode ? '10px' : '12px')
            .attr('font-weight', '600')
            .attr('font-family', 'Space Grotesk')
            .attr('fill', '#475569');

          // Add expand icon if expandable
          g.filter(d => !!subNodesMap[d.id])
            .append('circle')
            .attr('class', 'expand-indicator')
            .attr('r', 6)
            .attr('cx', 18)
            .attr('cy', -18)
            .attr('fill', 'white')
            .attr('stroke', '#42b883')
            .attr('stroke-width', 1.5);

          return g;
        },
        update => {
          update.select('circle')
            .attr('stroke', d => expandedNodes.has(d.id) ? '#42b883' : 'none')
            .attr('stroke-width', 3);
          return update;
        },
        exit => exit.transition().duration(500).attr('opacity', 0).remove()
      );

    simulation.on('tick', () => {
      link
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y);

      node
        .attr('transform', d => `translate(${d.x},${d.y})`);
    });

    function dragstarted(event: any) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }

    function dragged(event: any) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }

    function dragended(event: any) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }

    return () => {
      // We don't stop simulation here because it's in a ref and we want it to persist across data updates
    };
  }, [currentNodes, currentLinks, expandedNodes]);

  return (
    <div className="w-full bg-white rounded-[3rem] border border-slate-200 overflow-hidden relative shadow-xl shadow-slate-200/50">
      <div className="absolute top-8 left-8 z-10 pointer-events-none">
        <div className="flex items-center gap-2 mb-2">
          <MousePointer2 className="w-4 h-4 text-brand-primary" />
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Interactive Core Concepts</h4>
        </div>
        <p className="text-sm text-slate-500 max-w-[200px]">Click nodes with green rings to expand sub-concepts.</p>
      </div>

      <div className="absolute top-8 right-8 z-10 flex flex-col gap-2">
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
          <div className="w-3 h-3 rounded-full border-2 border-brand-primary bg-white" />
          Expandable
        </div>
      </div>

      <svg ref={svgRef} className="w-full h-[550px]" />

      <AnimatePresence>
        {hoveredNode && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute bottom-8 left-8 right-8 bg-slate-900 text-white p-6 rounded-3xl shadow-2xl border border-white/10 backdrop-blur-xl z-20"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-brand-primary/20 flex items-center justify-center shrink-0">
                <Info className="text-brand-primary w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h5 className="font-display font-bold text-lg">{hoveredNode.label}</h5>
                  {hoveredNode.isSubNode && (
                    <span className="px-2 py-0.5 rounded-full bg-white/10 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Sub-concept
                    </span>
                  )}
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{hoveredNode.description}</p>
                {subNodesMap[hoveredNode.id] && (
                  <div className="mt-3 flex items-center gap-2 text-xs font-bold text-brand-primary">
                    {expandedNodes.has(hoveredNode.id) ? <Minimize2 className="w-3 h-3" /> : <Maximize2 className="w-3 h-3" />}
                    {expandedNodes.has(hoveredNode.id) ? 'Click to collapse' : 'Click to expand sub-concepts'}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
