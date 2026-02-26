import React from 'react';
import { motion } from 'motion/react';
import { Share2, BookOpen, Github, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-slate-200/50 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
              <Share2 className="text-white w-5 h-5" />
            </div>
            <span className="font-display font-bold text-xl tracking-tighter">
              All-in-<span className="text-brand-primary">RAG</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-slate-600 hover:text-brand-primary transition-colors">核心功能</a>
            <a href="#graph-rag" className="text-sm font-medium text-slate-600 hover:text-brand-primary transition-colors">图 RAG</a>
            <a href="#use-cases" className="text-sm font-medium text-slate-600 hover:text-brand-primary transition-colors">应用场景</a>
            <a href="#architecture" className="text-sm font-medium text-slate-600 hover:text-brand-primary transition-colors">系统架构</a>
            <div className="h-4 w-px bg-slate-200 dark:bg-white/10" />
            <a 
              href="https://github.com/datawhalechina/all-in-rag" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-slate-900 hover:opacity-70 transition-opacity"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <button className="bg-brand-primary text-white px-4 py-2 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-brand-primary/20 transition-all">
              立即开始
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-slate-200 p-4 space-y-4"
        >
          <a href="#features" className="block text-sm font-medium py-2">核心功能</a>
          <a href="#graph-rag" className="block text-sm font-medium py-2">图 RAG</a>
          <a href="#use-cases" className="block text-sm font-medium py-2">应用场景</a>
          <a href="#architecture" className="block text-sm font-medium py-2">系统架构</a>
          <button className="w-full bg-brand-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
            立即开始
          </button>
        </motion.div>
      )}
    </nav>
  );
}
