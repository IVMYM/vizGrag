import React from 'react';
import { Check, X, Minus } from 'lucide-react';

const frameworks = [
  {
    name: 'Microsoft GraphRAG',
    weight: 'Heavyweight',
    focus: 'Global/Community Summaries',
    cost: 'High (Pre-processing)',
    useCase: 'Exploratory Analysis, Global View',
  },
  {
    name: 'LightRAG',
    weight: 'Lightweight',
    focus: 'Dual-layer Retrieval',
    cost: 'Low',
    useCase: 'Resource-constrained, Fast Iteration',
  },
  {
    name: 'FRAG (Flexible RAG)',
    weight: 'Modular',
    focus: 'Query Classification',
    cost: 'Medium',
    useCase: 'Adaptive Complexity, Multi-task',
  },
  {
    name: 'GraphIRAG',
    weight: 'Iterative',
    focus: 'Multi-round Retrieval',
    cost: 'Variable',
    useCase: 'Time-sensitive, Deep Reasoning',
  },
];

export default function ComparisonTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-slate-200">
            <th className="text-left py-4 px-6 font-display text-sm font-bold uppercase tracking-wider text-slate-400">Framework</th>
            <th className="text-left py-4 px-6 font-display text-sm font-bold uppercase tracking-wider text-slate-400">Weight</th>
            <th className="text-left py-4 px-6 font-display text-sm font-bold uppercase tracking-wider text-slate-400">Core Focus</th>
            <th className="text-left py-4 px-6 font-display text-sm font-bold uppercase tracking-wider text-slate-400">Build Cost</th>
            <th className="text-left py-4 px-6 font-display text-sm font-bold uppercase tracking-wider text-slate-400">Best For</th>
          </tr>
        </thead>
        <tbody>
          {frameworks.map((f, i) => (
            <tr key={i} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
              <td className="py-6 px-6 font-bold text-slate-900">{f.name}</td>
              <td className="py-6 px-6 text-sm">
                <span className={`px-2 py-1 rounded-md text-xs font-bold ${
                  f.weight === 'Heavyweight' ? 'bg-red-100 text-red-600' :
                  f.weight === 'Lightweight' ? 'bg-emerald-100 text-emerald-600' :
                  'bg-blue-100 text-blue-600'
                }`}>
                  {f.weight}
                </span>
              </td>
              <td className="py-6 px-6 text-sm text-slate-600">{f.focus}</td>
              <td className="py-6 px-6 text-sm text-slate-600">{f.cost}</td>
              <td className="py-6 px-6 text-sm text-slate-600 italic">{f.useCase}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
