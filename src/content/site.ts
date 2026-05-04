export const site = {
  name: 'Terminus Rift',
  tagline: 'A custom tabletop roleplaying game grounded in real astrophysics.',
  author: 'Sirius T. Bontea',
  // Source canonical TTRPG repo (private). The site does not link out to
  // it directly; this is here so a future release-asset link can use the
  // same constant.
  ttrpgRepoUrl: 'https://github.com/siriusbontea/terminus-rift-TTRPG',
  siteRepoUrl: 'https://github.com/siriusbontea/terminus-rift-site',
  // Wired by Vite at build time from .env.local. Empty when unconfigured.
  contactEndpoint: import.meta.env.VITE_CONTACT_ENDPOINT ?? '',
} as const

export type SocialKey = 'linkedin' | 'github' | 'osm' | 'x' | 'facebook' | 'youtube'

export const socials: Array<{ key: SocialKey; label: string; href: string }> = [
  { key: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/siriusbontea/' },
  { key: 'github', label: 'GitHub', href: 'https://github.com/siriusbontea' },
  {
    key: 'osm',
    label: 'OpenStreetMap',
    href: 'https://www.openstreetmap.org/user/Sirius%20T%20Bontea/history#map=3/43.94/-68.94',
  },
  { key: 'x', label: 'X', href: 'https://x.com/SiriusBontea' },
  { key: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/sirius.t.bontea' },
  { key: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/@siriusbontea/about' },
]
