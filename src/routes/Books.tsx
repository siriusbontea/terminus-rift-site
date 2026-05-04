import BookCard from '../components/BookCard'
import { books } from '../content/books'

export default function Books() {
  return (
    <>
      <h1>Books</h1>
      <p className="lede">
        Three pre-release rulebooks. PDF downloads will be made available once
        each book reaches a stable playtest version.
      </p>
      <div className="book-grid" style={{ marginTop: '2rem' }}>
        {books.map((book) => (
          <BookCard key={book.slug} book={book} />
        ))}
      </div>
    </>
  )
}
