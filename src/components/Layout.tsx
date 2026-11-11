import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

// Scroll to the #section in the URL, or to the top on a new page.
// Smooth or instant follows the CSS scroll-behavior, which honours
// prefers-reduced-motion.
function useScrollOnNavigate() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)))
      if (el) {
        el.scrollIntoView()
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
}

export default function Layout() {
  useScrollOnNavigate()
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <div className="page">
      <a className="skip" href="#main">
        Skip to the content
      </a>
      <Header />
      <main id="main" className="page__main" tabIndex={-1}>
        {isHome ? (
          <Outlet />
        ) : (
          <div className="page-wrap">
            <Outlet />
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
