import React from 'react';
import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import GraphVisualization from './components/GraphVisualization';
import ComparisonTable from './components/ComparisonTable';
import ArchitectureDiagram from './components/ArchitectureDiagram';
import UseCases from './components/UseCases';
import { Share2, Zap, Shield, Search, Info, ExternalLink, Github, Globe } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-brand-primary selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        
        <FeatureGrid />

        {/* Graph RAG Deep Dive Section */}
        <section id="graph-rag" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-5xl font-display font-bold mb-8">
                    The Evolution: <br />
                    <span className="gradient-text">Graph RAG</span>
                  </h2>
                  <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                    Traditional RAG systems often struggle with relationship loss and context fragmentation. 
                    By integrating Knowledge Graphs, we can explicitly model entities and their complex interconnections.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="flex gap-6">
                      <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0">
                        <Zap className="text-brand-primary w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">Multi-hop Reasoning</h4>
                        <p className="text-slate-500 text-sm">
                          Navigate through complex relationship paths to answer questions that require connecting multiple pieces of information across documents.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-6">
                      <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0">
                        <Shield className="text-brand-primary w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">Reduced Hallucination</h4>
                        <p className="text-slate-500 text-sm">
                          Structured knowledge provides a "ground truth" anchor, significantly improving factual consistency and explainability.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="lg:sticky lg:top-32"
              >
                <GraphVisualization />
              </motion.div>
            </div>

            <div className="bg-white rounded-[3rem] p-8 md:p-12 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <Info className="text-brand-primary w-6 h-6" />
                <h3 className="text-2xl font-display font-bold">Framework Comparison</h3>
              </div>
              <ComparisonTable />
            </div>
          </div>
        </section>

        <ArchitectureDiagram />

        <UseCases />

        {/* Product Sharing / Call to Action */}
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <div className="bg-linear-to-br from-slate-900 to-slate-800 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Ready to Build <br />Intelligent Systems?</h2>
                <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
                  Join thousands of developers learning the cutting edge of RAG technology with Datawhale's open-source curriculum.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a 
                    href="https://datawhalechina.github.io/all-in-rag/#/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-brand-primary text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform"
                  >
                    Read the Full Guide
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://github.com/datawhalechina/all-in-rag" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white px-10 py-5 rounded-2xl font-bold transition-colors"
                  >
                    Star on GitHub
                  </a>
                </div>
              </div>
              
              {/* Decorative glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 rounded-full blur-[100px]" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px]" />
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-brand-primary rounded flex items-center justify-center">
              <Share2 className="text-white w-4 h-4" />
            </div>
            <span className="font-display font-bold text-lg tracking-tighter">
              All-in-<span className="text-brand-primary">RAG</span>
            </span>
          </div>
          
          <p className="text-slate-400 text-sm">
            © 2026 Datawhale. Open source under Apache-2.0 License.
          </p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-400 hover:text-brand-primary transition-colors"><Github className="w-5 h-5" /></a>
            <a href="#" className="text-slate-400 hover:text-brand-primary transition-colors"><Globe className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
