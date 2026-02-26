import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Stethoscope, Scale, ShoppingCart, ShieldAlert } from 'lucide-react';

const useCases = [
  {
    title: '金融情报',
    problem: '传统 RAG 难以追踪数千份报告中复杂的所有权链或投资历史。',
    solution: 'Graph RAG 对实体（公司、投资者）及其关系进行建模，通过多跳推理追踪资金流向。',
    icon: Briefcase,
    color: 'bg-blue-500',
  },
  {
    title: '医疗诊断辅助',
    problem: '医学文献是碎片化的；症状和治疗方案往往跨越不同的研究论文。',
    solution: '通过将症状与知识图谱中的疾病和治疗方案链接，Graph RAG 提供事实性的、交叉引用的诊断支持。',
    icon: Stethoscope,
    color: 'bg-emerald-500',
  },
  {
    title: '法律取证与合规',
    problem: '在海量法律数据集中识别实体之间的隐藏联系是一项耗时且易出错的工作。',
    solution: '知识图谱揭示了非直观的联系（如共同董事、壳公司），允许 LLM 总结复杂的法律风险。',
    icon: Scale,
    color: 'bg-purple-500',
  },
  {
    title: '复杂产品客户支持',
    problem: '工业设备的各种技术手册具有深层的组件层级，向量搜索往往会将其割裂。',
    solution: 'Graph RAG 保留了“属于”层级关系，确保 LLM 理解大型系统中子组件的准确上下文。',
    icon: ShoppingCart,
    color: 'bg-orange-500',
  },
  {
    title: '网络安全威胁情报',
    problem: '威胁行为者使用的基础设施在不断演变，跨越多个域名、IP 和恶意软件家族。',
    solution: '映射基础设施图谱允许 Graph RAG 识别攻击模式，并根据历史链接预测未来的漏洞。',
    icon: ShieldAlert,
    color: 'bg-red-500',
  },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-display font-bold mb-6">行业 <span className="gradient-text">应用场景</span></h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Graph RAG 不仅仅是理论——它正在解决各行各业最复杂的数据挑战。
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
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1">面临问题</span>
                  <p className="text-slate-500 text-sm leading-relaxed">{uc.problem}</p>
                </div>
                <div className="pt-4 border-t border-slate-200/50">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary block mb-1">解决方案</span>
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
