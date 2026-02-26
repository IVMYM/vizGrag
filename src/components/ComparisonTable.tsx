import React from 'react';
import { Check, X, Minus } from 'lucide-react';

const frameworks = [
  {
    name: 'Microsoft GraphRAG',
    weight: '重量级',
    focus: '全局/社区摘要',
    cost: '高 (预处理成本)',
    useCase: '探索性分析、全局视角',
  },
  {
    name: 'LightRAG',
    weight: '轻量级',
    focus: '双层检索',
    cost: '低',
    useCase: '资源受限、快速迭代',
  },
  {
    name: 'FRAG (Flexible RAG)',
    weight: '模块化',
    focus: '查询分类',
    cost: '中',
    useCase: '自适应复杂度、多任务',
  },
  {
    name: 'GraphIRAG',
    weight: '迭代式',
    focus: '多轮检索',
    cost: '可变',
    useCase: '时间敏感、深度推理',
  },
];

export default function ComparisonTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-slate-200">
            <th className="text-left py-4 px-6 font-display text-sm font-bold uppercase tracking-wider text-slate-400">框架名称</th>
            <th className="text-left py-4 px-6 font-display text-sm font-bold uppercase tracking-wider text-slate-400">体量</th>
            <th className="text-left py-4 px-6 font-display text-sm font-bold uppercase tracking-wider text-slate-400">核心重点</th>
            <th className="text-left py-4 px-6 font-display text-sm font-bold uppercase tracking-wider text-slate-400">构建成本</th>
            <th className="text-left py-4 px-6 font-display text-sm font-bold uppercase tracking-wider text-slate-400">适用场景</th>
          </tr>
        </thead>
        <tbody>
          {frameworks.map((f, i) => (
            <tr key={i} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
              <td className="py-6 px-6 font-bold text-slate-900">{f.name}</td>
              <td className="py-6 px-6 text-sm">
                <span className={`px-2 py-1 rounded-md text-xs font-bold ${
                  f.weight === '重量级' ? 'bg-red-100 text-red-600' :
                  f.weight === '轻量级' ? 'bg-emerald-100 text-emerald-600' :
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
