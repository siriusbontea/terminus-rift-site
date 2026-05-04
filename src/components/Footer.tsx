import { site } from '../content/site'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <span>
          &copy; {new Date().getFullYear()} {site.author}. All rights reserved.
        </span>
        <span className="muted">Private playtest project — not licensed for redistribution.</span>
      </div>
    </footer>
  )
}
