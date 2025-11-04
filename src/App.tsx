import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="backdrop-blur-sm bg-white/5 border-b border-white/6 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-lg shadow-md flex items-center justify-center font-bold text-white">LW</div>
            <span className="text-lg font-semibold tracking-tight">History Creative</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-200/90">
            <a className="hover:text-black transition-colors" href="#">Timeline</a>
            <a className="hover:text-black transition-colors" href="#">Projects</a>
            <a className="hover:text-black transition-colors" href="#">About</a>
            <a className="hover:text-black transition-colors" href="#">Contact</a>
          </nav>

          {/* CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <a className="text-sm text-gray-200/90 hover:text-white" href="#">Sign in</a>
            <button className="rounded-md bg-indigo-500 hover:bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow">Get started</button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-16">
        <section className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-12 shadow-xl">
          <h1 className="text-4xl font-extrabold mb-4">Create beautiful timelines</h1>
          <p className="text-gray-300 max-w-2xl">Design, organize, and present historical events with creative layouts. Use this area to briefly explain what your project does and invite users to explore or get started.</p>
        </section>
      </main>
    </div>
  )
}

export default App
