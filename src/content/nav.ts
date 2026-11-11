// Site navigation. Pages first, then the one call to action.
export const navLinks: Array<{ to: string; label: string; end?: boolean }> = [
  { to: '/', label: 'The game', end: true },
  { to: '/books', label: 'Books' },
  { to: '/setting', label: 'Setting' },
  { to: '/physics', label: 'Physics' },
  { to: '/changelog', label: 'Changelog' },
  { to: '/about', label: 'About' },
]

export const navCta = { to: '/#quickstart', label: 'Free quick start' }

// Read from QuickStart/TerminusRiftQuickStart.pdf (pdfinfo) and QuickStart/src/preamble.tex.
export const quickStart = { pages: 17, size: '121 KB', version: '0.1.0' }

export const quickStartPdf = `${import.meta.env.BASE_URL}TerminusRiftQuickStart.pdf`
