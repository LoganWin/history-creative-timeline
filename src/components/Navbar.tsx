import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()
  const links = [
    { label: 'Timeline', to: '/timeline' },
    { label: 'More Details', to: '/about' },
    { label: 'References', to: '/contact' }
  ]

  return (
    <header className="backdrop-blur-sm bg-white/5 border-b border-white/6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-lg shadow-md flex items-center justify-center font-bold text-white">
            LW
          </div>
          <span className="text-lg font-semibold tracking-tight text-white">History Creative Timeline</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-200/90">
          {links.map(link => {
            const isActive = location.pathname.startsWith(link.to)
            return (
            <Link
              key={link.to}
              to={link.to}
              className={`group relative px-1 py-0.5 transition ${
                isActive ? 'text-white' : 'text-gray-200/90 hover:text-white'
              }`}
            >
              {link.label}
              <span
                className={`pointer-events-none absolute inset-x-0 bottom-0 h-0.5 bg-white/80 origin-center transition-transform duration-300 ${
                  isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}
              />
            </Link>
            )})}
        </nav>
      </div>
    </header>
  )
}
