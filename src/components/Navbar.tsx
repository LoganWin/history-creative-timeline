import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="backdrop-blur-sm bg-white/5 border-b border-white/6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-lg shadow-md flex items-center justify-center font-bold text-white">
            LW
          </div>
          <span className="text-lg font-semibold tracking-tight text-white">History Creative</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-200/90">
          <Link className="hover:text-white transition-colors" to="/timeline">Timeline</Link>
          <Link className="hover:text-white transition-colors" to="/projects">Projects</Link>
          <Link className="hover:text-white transition-colors" to="/about">About</Link>
          <Link className="hover:text-white transition-colors" to="/contact">Contact</Link>
        </nav>

        {/* CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <Link className="text-sm text-gray-200/90 hover:text-white" to="/signin">Sign in</Link>
          <Link to="/get-started" className="rounded-md bg-indigo-500 hover:bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow">
            Get started
          </Link>
        </div>
      </div>
    </header>
  )
}