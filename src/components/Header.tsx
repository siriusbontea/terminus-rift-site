import { NavLink, Link } from 'react-router-dom'
import { site } from '../content/site'

const links = [
  { to: '/books', label: 'Books' },
  { to: '/setting', label: 'Setting' },
  { to: '/physics', label: 'Physics' },
  { to: '/changelog', label: 'Changelog' },
  { to: '/about', label: 'About' },
]

export default function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/" className="header__brand">
          {site.name}
        </Link>
        <nav className="header__nav" aria-label="Primary">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to}>
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
