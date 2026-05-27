export default function CodeAssistantPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold text-red-500 mb-4">
        AI Code Assistant
      </h1>

      <p className="text-gray-400 mb-6">
        Powered by Shigosag
      </p>

      <textarea
        placeholder="Enter your prompt..."
        className="w-full max-w-2xl h-40 bg-zinc-900 border border-red-500/30 rounded-xl p-4"
      />

      <button className="mt-4 bg-red-600 hover:bg-red-500 px-6 py-3 rounded-xl">
        Generate
      </button>
    </main>
  );
}