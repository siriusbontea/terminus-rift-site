import { Link } from 'react-router-dom'
import { gameChannels, site } from '../content/site'
import { navLinks } from '../content/nav'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <p className="footer-title">{site.name}</p>
          <p className="muted">
            A high fantasy tabletop roleplaying game with a touch of sci-fi, in development. Inspired
            by Norse and Greek mythology, popular science fiction and classic tabletop roleplaying
            games.
          </p>
          <p className="muted">Core Rulebook v0.16.0 and Rift Master’s Guide v0.12.0: in playtest.</p>
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
          </ul>
        </nav>
        <nav aria-label="Follow development">
          <p className="footer-head">Follow development</p>
          <ul className="footer-links">
            {gameChannels.map((s) => (
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
