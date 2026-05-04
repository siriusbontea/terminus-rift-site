import { site, socials } from '../content/site'
import SocialIcon from './SocialIcons'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__legal">
          <div>
            Copyright &copy; {site.author} {new Date().getFullYear()}. All rights reserved.
          </div>
          <div className="muted">Private playtest project — not licensed for redistribution.</div>
        </div>
        <ul className="social-row" aria-label="Social links">
          {socials.map((s) => (
            <li key={s.key}>
              <a
                className="social-link"
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                title={s.label}
              >
                <SocialIcon kind={s.key} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
