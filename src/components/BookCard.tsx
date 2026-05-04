import { Link } from 'react-router-dom'
import type { Book } from '../content/books'

const statusLabel: Record<Book['status'], string> = {
  'pre-release': 'Pre-release',
  draft: 'Draft',
  published: 'Published',
}

const statusClass: Record<Book['status'], string> = {
  'pre-release': 'badge--soon',
  draft: 'badge--draft',
  published: '',
}

export default function BookCard({ book }: { book: Book }) {
  return (
    <Link to={`/books/${book.slug}`} className="book-card">
      <div className="book-card__title">{book.title}</div>
      <div className="book-card__meta">
        <span className={`badge ${statusClass[book.status]}`}>{statusLabel[book.status]}</span>
        <span>v{book.version}</span>
      </div>
      <p className="book-card__blurb">{book.blurb}</p>
    </Link>
  )
}
