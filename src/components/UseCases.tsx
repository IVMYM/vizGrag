import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Stethoscope, Scale, ShoppingCart, ShieldAlert } from 'lucide-react';

const useCases = [
  {
    title: 'Financial Intelligence',
    problem: 'Traditional RAG fails to track complex ownership chains or investment history across thousands of reports.',
    solution: 'Graph RAG models entities (companies, investors) and their relationships, enabling multi-hop reasoning to trace capital flow.',
    icon: Briefcase,
    color: 'bg-blue-500',
  },
  {
    title: 'Medical Diagnosis Support',
    problem: 'Medical literature is fragmented; symptoms and treatments are often linked across different research papers.',
    solution: 'By linking symptoms to diseases and treatments in a knowledge graph, Graph RAG provides factual, cross-referenced diagnostic support.',
    icon: Stethoscope,
    color: 'bg-emerald-500',
  },
  {
    title: 'Legal Discovery & Compliance',
    problem: 'Identifying hidden connections between entities in massive legal datasets is manually intensive and error-prone.',
    solution: 'Knowledge graphs reveal non-obvious links (e.g., shared directors, shell companies), allowing LLMs to summarize complex legal risks.',
    icon: Scale,
    color: 'bg-purple-500',
  },
  {
    title: 'Customer Support for Complex Products',
    problem: 'Technical manuals for industrial equipment have deep component hierarchies that vector search often fragments.',
    solution: 'Graph RAG preserves the "part-of" hierarchy, ensuring the LLM understands the exact context of a sub-component within a larger system.',
    icon: ShoppingCart,
    color: 'bg-orange-500',
  },
  {
    title: 'Cybersecurity Threat Intelligence',
    problem: 'Threat actors use evolving infrastructure that spans multiple domains, IPs, and malware families.',
    solution: 'Mapping the infrastructure graph allows Graph RAG to identify patterns of attack and predict future vulnerabilities based on historical links.',
    icon: ShieldAlert,
    color: 'bg-red-500',
  },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-display font-bold mb-6">Real-World <span className="gradient-text">Use Cases</span></h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Graph RAG isn't just a theory—it's solving the most complex data challenges across industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((uc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-[2.5rem] border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500"
            >
              <div className={`w-14 h-14 ${uc.color} rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-current/20 group-hover:scale-110 transition-transform duration-500`}>
                <uc.icon className="text-white w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-primary transition-colors">{uc.title}</h3>
              
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1">The Problem</span>
                  <p className="text-slate-500 text-sm leading-relaxed">{uc.problem}</p>
                </div>
                <div className="pt-4 border-t border-slate-200/50">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary block mb-1">The Solution</span>
                  <p className="text-slate-700 text-sm leading-relaxed font-medium">{uc.solution}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
