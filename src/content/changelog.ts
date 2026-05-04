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

export const changelog: ChangelogEntry[] = []
