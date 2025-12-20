import { NavLink } from 'react-router-dom'

function Header() {
  const linkClassName = ({ isActive }) =>
    [
      'inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-semibold transition',
      isActive
        ? 'border-leaf-700 bg-leaf-700 text-white'
        : 'border-leaf-200 text-leaf-900 hover:bg-leaf-100',
    ].join(' ')

  return (
    <header className="border-b border-leaf-200 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <span className="text-lg font-semibold text-leaf-700">HRnet</span>
        <nav className="flex gap-2">
          <NavLink end to="/" className={linkClassName}>
            Create
          </NavLink>
          <NavLink to="/employees" className={linkClassName}>
            Employees
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
