export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-slate-50 text-slate-900">
      <h1 className="text-5xl font-extrabold mb-6 tracking-tight">
        Next.js DevOps Practice 🚀
      </h1>
      <p className="text-xl text-slate-600 mb-8 border-l-4 border-blue-500 pl-4">
        TypeScript + App Router project successfully initialized.
      </p>
      <div className="flex gap-4">
        <a href="https://nextjs.org/docs" target="_blank" rel="noreferrer" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Read Docs
        </a>
      </div>
    </main>
  );
}
