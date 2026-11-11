import { Link } from 'react-router-dom'
import { site, socials } from '../content/site'
import { navLinks, quickStartPdf } from '../content/nav'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <p className="footer-title">{site.name}</p>
          <p className="muted">
            A high fantasy tabletop roleplaying game in development, inspired by Norse and Greek
            mythology, science fiction, and the classic games of yesteryear.
          </p>
          <p className="muted">Copyright © {site.author} 2026.</p>
        </div>
        <nav aria-label="Site">
          <p className="footer-head">Site</p>
          <ul className="footer-links">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
            <li>
              <a href={quickStartPdf}>Quick start (PDF)</a>
            </li>
          </ul>
        </nav>
        <nav aria-label="Elsewhere">
          <p className="footer-head">Elsewhere</p>
          <ul className="footer-links">
            {socials.map((s) => (
              <li key={s.key}>
                <a href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}
