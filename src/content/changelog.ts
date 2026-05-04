// Curated, public-facing summary of the canonical changelog
// (Changelog/src/entries/YYYY-MM-DD.tex in the TTRPG repo). Mirror only
// the entries that are interesting to a public audience — not every
// typo fix in the LaTeX log.

export type ChangelogChange = {
  kind: 'Added' | 'Changed' | 'Fixed' | 'Removed'
  text: string
}

export type ChangelogEntry = {
  date: string // YYYY-MM-DD
  book: string
  version: string
  changes: ChangelogChange[]
}

export const changelog: ChangelogEntry[] = [
  {
    date: '2026-05-03',
    book: 'Core Rulebook',
    version: '0.3.0',
    changes: [
      { kind: 'Added', text: 'Playtester credits across all three books.' },
      { kind: 'Fixed', text: 'Margin overflow regressions across every chapter.' },
    ],
  },
  {
    date: '2026-05-03',
    book: "Rift Master's Guide",
    version: '0.2.0',
    changes: [
      { kind: 'Fixed', text: 'Margin overflow regressions across every chapter.' },
    ],
  },
  {
    date: '2026-05-03',
    book: 'Bestiary',
    version: '0.2.0',
    changes: [
      { kind: 'Fixed', text: 'Table and prose overflow defects across every chapter.' },
    ],
  },
]
