import { changelog } from '../content/changelog'

export default function Changelog() {
  return (
    <>
      <h1>Changelog</h1>
      <p className="lede">
        A curated, public-facing summary of substantive changes. Routine
        fixes (typos, formatting, build tooling) are not listed here — they
        live in the canonical LaTeX changelog instead.
      </p>

      {changelog.length === 0 ? (
        <p className="muted" style={{ marginTop: '2rem' }}>
          The public-facing changelog is not yet populated. Substantive
          updates worth surfacing here will be added as the books progress.
        </p>
      ) : (
        <div style={{ marginTop: '2rem' }}>
          {changelog.map((entry, i) => (
            <article key={`${entry.date}-${entry.book}-${i}`} className="changelog__entry">
              <div className="changelog__date">{entry.date}</div>
              <div className="changelog__book">
                {entry.book} — v{entry.version}
              </div>
              <ul style={{ marginTop: '0.4rem' }}>
                {entry.changes.map((c, j) => (
                  <li key={j}>
                    <strong>{c.kind}.</strong> {c.text}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      )}
    </>
  )
}
