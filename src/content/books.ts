export type BookStatus = 'pre-release' | 'draft' | 'published'

export type Book = {
  slug: string
  title: string
  short: string
  version: string
  status: BookStatus
  blurb: string
  contents: string[]
}

// Versions mirror each book's \bookversion in <Book>/src/preamble.tex.
// Update here when a book's version bumps.
export const books: Book[] = [
  {
    slug: 'core-rulebook',
    title: 'Core Rulebook',
    short: 'CRB',
    version: '0.3.0',
    status: 'pre-release',
    blurb:
      'The player-facing core. Character creation, ancestries, classes, the action economy, magic, and the foundational rules of play.',
    contents: [
      'Character creation and progression',
      'Ancestries and classes',
      'Action economy and combat',
      'Skills, checks, and difficulty',
      'Magic and the Astralis system',
      'Equipment and treasure',
    ],
  },
  {
    slug: 'rift-masters-guide',
    title: "Rift Master's Guide",
    short: 'RMG',
    version: '0.2.0',
    status: 'pre-release',
    blurb:
      'The GM-facing volume. Encounter design, optional rule modules, factions, the Rift, and running campaigns in the Astralis system.',
    contents: [
      'Running the game',
      'Encounter and challenge design',
      'Optional rule modules',
      'Factions and politics',
      'The Rift and the cosmology',
      'Campaign frameworks',
    ],
  },
  {
    slug: 'bestiary',
    title: 'Bestiary',
    short: 'BST',
    version: '0.2.0',
    status: 'pre-release',
    blurb:
      'The creature compendium. Stat blocks, habitats, tactics, and the ecology of the Astralis system.',
    contents: [
      'Stat block format',
      'Creatures by habitat',
      'Tactics and morale',
      'Treasure and rewards',
      'Building original creatures',
    ],
  },
]

export function bookBySlug(slug: string | undefined): Book | undefined {
  return books.find((b) => b.slug === slug)
}
