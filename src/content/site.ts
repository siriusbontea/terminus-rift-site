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
