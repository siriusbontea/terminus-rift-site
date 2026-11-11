import { useEffect, useId, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { site } from '../content/site'
import { navCta, navLinks } from '../content/nav'
import logoMark from '../assets/art/logo-mark.webp'

function NavItems({ onPick }: { onPick?: () => void }) {
  return (
    <ul className="nav-list">
      {navLinks.map((l) => (
        <li key={l.to}>
          <NavLink to={l.to} end={l.end} onClick={onPick}>
            {l.label}
          </NavLink>
        </li>
      ))}
      <li className="nav-cta">
        <Link to={navCta.to} onClick={onPick}>
          {navCta.label}
        </Link>
      </li>
    </ul>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const panelId = useId()
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Close the phone menu with Escape or a tap outside it.
  useEffect(() => {
    if (!open) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }
    function onPointer(e: PointerEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointer)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointer)
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className="site-header">
      <div className="wrap header-row">
        <Link to="/" className="brand" aria-label={`${site.name}, home`} onClick={close}>
          <img src={logoMark} alt="" width={36} height={36} />
          {site.name}
        </Link>

        <div className="menu" ref={menuRef}>
          <button
            ref={buttonRef}
            type="button"
            className="menu-button"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="bars" aria-hidden="true">
              <span />
            </span>
            {open ? 'Close' : 'Menu'}
          </button>
          {open && (
            <nav className="menu-panel" id={panelId} aria-label="Main">
              <NavItems onPick={close} />
            </nav>
          )}
        </div>

        <nav className="nav-wide" aria-label="Main">
          <NavItems />
        </nav>
      </div>
    </header>
  )
}
