import { useParams, Link } from 'react-router-dom'
import { bookBySlug, type Book } from '../content/books'
import CalloutBox from '../components/CalloutBox'

const statusLabel: Record<Book['status'], string> = {
  'pre-release': 'Pre-release',
  draft: 'Draft',
  released: 'Released',
}
const statusClass: Record<Book['status'], string> = {
  'pre-release': 'badge--soon',
  draft: 'badge--draft',
  released: 'badge--released',
}

export default function BookDetail() {
  const { slug } = useParams<{ slug: string }>()
  const book = bookBySlug(slug)

  if (!book) {
    return (
      <>
        <h1>Book not found</h1>
        <p>
          That book doesn't exist. <Link to="/books">Back to all books</Link>.
        </p>
      </>
    )
  }

  const downloadCopy =
    book.status === 'released'
      ? `The ${book.title} has reached its first complete edition. PDF download will be linked here once the public release URL is set.`
      : `The ${book.title} PDF will be available here when it reaches the next playtest milestone. Until then, this page is a preview.`

  return (
    <>
      <p className="muted" style={{ marginBottom: 0 }}>
        <Link className="back-link" to="/books">← All books</Link>
      </p>
      <h1>{book.title}</h1>
      <div className="tag-row">
        <span className={`badge ${statusClass[book.status]}`}>{statusLabel[book.status]}</span>
        <span className="badge badge--draft">v{book.version}</span>
      </div>
      <p className="lede">{book.blurb}</p>

      <h2>Contents</h2>
      <ul className="list-clean">
        {book.contents.map((c) => (
          <li key={c}>— {c}</li>
        ))}
      </ul>

      <CalloutBox variant="tip" title="Download">
        {downloadCopy}
      </CalloutBox>
    </>
  )
}
