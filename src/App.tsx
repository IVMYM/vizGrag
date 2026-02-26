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
                    技术演进：<br />
                    <span className="gradient-text">Graph RAG</span>
                  </h2>
                  <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                    传统 RAG 系统在处理复杂关系和长程上下文时往往力不从心。
                    通过集成知识图谱，我们可以显式地建模实体及其复杂的互联关系，从而实现更深层次的语义理解。
                  </p>
                  
                  <div className="space-y-8">
                    <div className="flex gap-6">
                      <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0">
                        <Zap className="text-brand-primary w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">多跳推理能力</h4>
                        <p className="text-slate-500 text-sm">
                          沿着复杂的语义路径进行导航，回答需要跨文档、跨章节整合多个知识点的问题。
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-6">
                      <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0">
                        <Shield className="text-brand-primary w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">显著降低幻觉</h4>
                        <p className="text-slate-500 text-sm">
                          结构化知识提供了坚实的“事实锚点”，大幅提升回答的事实一致性和可解释性。
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
                <h3 className="text-2xl font-display font-bold">主流框架对比</h3>
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
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">准备好构建<br />智能系统了吗？</h2>
                <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
                  加入数千名开发者的行列，通过 Datawhale 的开源课程掌握 RAG 技术的最前沿。
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a 
                    href="https://datawhalechina.github.io/all-in-rag/#/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-brand-primary text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform"
                  >
                    阅读完整指南
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://github.com/datawhalechina/all-in-rag" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white px-10 py-5 rounded-2xl font-bold transition-colors"
                  >
                    在 GitHub 上点赞
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
            © 2026 Datawhale. 基于 Apache-2.0 协议开源。
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
