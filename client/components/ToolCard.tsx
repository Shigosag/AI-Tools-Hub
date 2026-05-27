'use client';

import Link from 'next/link';

interface ToolCardProps {
  tool: {
    title: string;
    endpoint: string;
  };
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <div className="bg-zinc-900 border border-red-500/30 rounded-2xl p-6 hover:border-red-500 transition-all shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 text-red-400">
        {tool.title}
      </h2>

      <Link href={tool.endpoint}>
        <button className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded-xl font-medium transition-all">
          Open Tool
        </button>
      </Link>
    </div>
  );
}