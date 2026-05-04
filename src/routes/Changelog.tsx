import { changelog } from '../content/changelog'

export default function Changelog() {
  return (
    <>
      <h1>Changelog</h1>
      <p className="lede">
        A curated, public-facing summary of recent substantive changes.
        Routine fixes are not listed.
      </p>

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
    </>
  )
}
