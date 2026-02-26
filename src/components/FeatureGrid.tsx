import React from 'react';
import { motion } from 'motion/react';
import { Search, Database, Cpu, MessageSquare, Link2, Share2 } from 'lucide-react';

const features = [
  {
    title: 'Data Preparation',
    desc: 'Advanced text chunking and multi-modal embedding strategies for high-quality indexing.',
    icon: Database,
    color: 'bg-blue-500',
  },
  {
    title: 'Hybrid Retrieval',
    desc: 'Combining vector similarity with keyword search and structured query generation.',
    icon: Search,
    color: 'bg-emerald-500',
  },
  {
    title: 'Graph RAG',
    desc: 'Leveraging knowledge graphs to capture complex relationships and enable multi-hop reasoning.',
    icon: Share2,
    color: 'bg-purple-500',
  },
  {
    title: 'System Evaluation',
    desc: 'Comprehensive metrics and tools to assess RAG performance, accuracy, and hallucination.',
    icon: Cpu,
    color: 'bg-orange-500',
  },
];

export default function FeatureGrid() {
  return (
    <div id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">Core Capabilities</h2>
          <p className="text-slate-600 max-w-2xl">
            Our framework covers the entire RAG lifecycle, from raw data to production-ready intelligent systems.
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
