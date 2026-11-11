// Site navigation. Pages first, then the one call to action.
export const navLinks: Array<{ to: string; label: string; end?: boolean }> = [
  { to: '/', label: 'The game', end: true },
  { to: '/books', label: 'Books' },
  { to: '/setting', label: 'Setting' },
  { to: '/physics', label: 'Physics' },
  { to: '/changelog', label: 'Changelog' },
  { to: '/about', label: 'About' },
]

export const navCta = { to: '/#follow', label: 'Follow development' }
