import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Code, Database, Globe, Layers, Cpu } from 'lucide-react';

export default function ArchitectureDiagram() {
  return (
    <div id="architecture" className="py-24 bg-slate-900 text-white rounded-[4rem] mx-4 my-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-display font-bold mb-8">系统 <br /><span className="text-brand-primary">架构设计</span></h2>
            <p className="text-slate-400 text-lg mb-12 leading-relaxed">
              模块化、可扩展的架构，专为高性能检索和生成而设计。
              将知识图谱与向量数据库集成，实现极致的上下文感知。
            </p>
            
            <div className="space-y-6">
              {[
                { title: '数据摄入', desc: '针对结构化和非结构化数据的 ETL 流水线。' },
                { title: '图谱构建', desc: '使用大模型进行实体抽取和关系映射。' },
                { title: '混合索引', desc: '在 Neo4j（图）和 Milvus（向量）中进行双重索引。' },
                { title: '智能路由', desc: '根据意图复杂度进行动态查询路由。' },
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
                    <span className="font-mono text-xs uppercase tracking-widest">用户界面</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-brand-primary/20 rounded-2xl border border-brand-primary/30 flex flex-col gap-2">
                    <Database className="text-brand-primary w-5 h-5" />
                    <span className="font-bold text-sm">向量数据库</span>
                    <span className="text-[10px] text-slate-400 uppercase">Milvus</span>
                  </div>
                  <div className="p-4 bg-blue-500/20 rounded-2xl border border-blue-500/30 flex flex-col gap-2">
                    <Layers className="text-blue-400 w-5 h-5" />
                    <span className="font-bold text-sm">图数据库</span>
                    <span className="text-[10px] text-slate-400 uppercase">Neo4j</span>
                  </div>
                </div>
                
                <div className="p-6 bg-white/10 rounded-2xl border border-white/10 text-center">
                  <Cpu className="text-emerald-400 w-8 h-8 mx-auto mb-3" />
                  <span className="block font-bold mb-1">LLM 编排器</span>
                  <span className="text-xs text-slate-500">推理与生成</span>
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
