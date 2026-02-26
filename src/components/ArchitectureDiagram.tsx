import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Code, Database, Globe, Layers, Cpu } from 'lucide-react';

export default function ArchitectureDiagram() {
  return (
    <div id="architecture" className="py-24 bg-slate-900 text-white rounded-[4rem] mx-4 my-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-display font-bold mb-8">System <br /><span className="text-brand-primary">Architecture</span></h2>
            <p className="text-slate-400 text-lg mb-12 leading-relaxed">
              A modular, scalable architecture designed for high-performance retrieval and generation. 
              Integrating knowledge graphs with vector databases for the ultimate context awareness.
            </p>
            
            <div className="space-y-6">
              {[
                { title: 'Data Ingestion', desc: 'ETL pipelines for structured and unstructured data.' },
                { title: 'Graph Construction', desc: 'Entity extraction and relationship mapping using LLMs.' },
                { title: 'Hybrid Indexing', desc: 'Dual-indexing in Neo4j (Graph) and Milvus (Vector).' },
                { title: 'Intelligent Routing', desc: 'Dynamic query routing based on intent complexity.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-brand-primary/20 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-brand-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{item.title}</h4>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between p-4 bg-white/10 rounded-2xl border border-white/10">
                  <div className="flex items-center gap-3">
                    <Globe className="text-brand-primary w-5 h-5" />
                    <span className="font-mono text-xs uppercase tracking-widest">User Interface</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-brand-primary/20 rounded-2xl border border-brand-primary/30 flex flex-col gap-2">
                    <Database className="text-brand-primary w-5 h-5" />
                    <span className="font-bold text-sm">Vector DB</span>
                    <span className="text-[10px] text-slate-400 uppercase">Milvus</span>
                  </div>
                  <div className="p-4 bg-blue-500/20 rounded-2xl border border-blue-500/30 flex flex-col gap-2">
                    <Layers className="text-blue-400 w-5 h-5" />
                    <span className="font-bold text-sm">Graph DB</span>
                    <span className="text-[10px] text-slate-400 uppercase">Neo4j</span>
                  </div>
                </div>
                
                <div className="p-6 bg-white/10 rounded-2xl border border-white/10 text-center">
                  <Cpu className="text-emerald-400 w-8 h-8 mx-auto mb-3" />
                  <span className="block font-bold mb-1">LLM Orchestrator</span>
                  <span className="text-xs text-slate-500">Reasoning & Generation</span>
                </div>
              </div>
            </div>
            
            {/* Background glow */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-primary/30 rounded-full blur-[100px] -z-10" />
          </div>
        </div>
      </div>
    </div>
  );
}
