'use client';

import { motion } from 'framer-motion';
import ToolCard from './ToolCard';

const tools = [
  {
    title: 'AI Text Generator',
    endpoint: '/text-generator'
  },
  {
    title: 'AI Code Assistant',
    endpoint: '/code-assistant'
  },
  {
    title: 'AI Summarizer',
    endpoint: '/summarizer'
  },
  {
    title: 'AI Email Generator',
    endpoint: '/email-generator'
  }
];

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-red-500 drop-shadow-lg mb-4"
        >
          AI Tools Hub
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 mb-10 text-lg"
        >
          ✨ Powered by{' '}
          <span className="text-red-400 font-semibold">
            Shigosag
          </span>
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tools.map((tool) => (
            <motion.div
              key={tool.title}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              <ToolCard tool={tool} />
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  );
}
