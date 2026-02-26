import React from 'react';
import { motion } from 'motion/react';
import { Search, Database, Cpu, MessageSquare, Link2, Share2 } from 'lucide-react';

const features = [
  {
    title: '数据准备',
    desc: '先进的文本分块和多模态嵌入策略，确保高质量的索引构建。',
    icon: Database,
    color: 'bg-blue-500',
  },
  {
    title: '混合检索',
    desc: '结合向量相似度、关键词搜索和结构化查询生成的强大检索能力。',
    icon: Search,
    color: 'bg-emerald-500',
  },
  {
    title: '图 RAG',
    desc: '利用知识图谱捕捉复杂关系，实现多跳推理和深层语义关联。',
    icon: Share2,
    color: 'bg-purple-500',
  },
  {
    title: '系统评估',
    desc: '全面的评估指标和工具，用于测试 RAG 系统的准确性、性能和幻觉。',
    icon: Cpu,
    color: 'bg-orange-500',
  },
];

export default function FeatureGrid() {
  return (
    <div id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">核心能力</h2>
          <p className="text-slate-600 max-w-2xl">
            我们的框架涵盖了 RAG 的整个生命周期，从原始数据处理到生产级智能系统。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all"
            >
              <div className={`w-12 h-12 ${f.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-current/20`}>
                <f.icon className="text-white w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
