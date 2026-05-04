import { useParams, Link } from 'react-router-dom'
import { bookBySlug } from '../content/books'
import CalloutBox from '../components/CalloutBox'

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

  return (
    <>
      <p className="muted" style={{ marginBottom: 0 }}>
        <Link to="/books">← All books</Link>
      </p>
      <h1>{book.title}</h1>
      <div className="tag-row">
        <span className="badge badge--soon">Pre-release</span>
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
        The {book.title} PDF will be available here when it reaches the next
        playtest milestone. Until then, this page is a preview.
      </CalloutBox>
    </>
  )
}
