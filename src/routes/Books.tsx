import BookCard from '../components/BookCard'
import { books } from '../content/books'

export default function Books() {
  return (
    <>
      <h1>Books</h1>
      <p className="lede">
        Three pre-release rulebooks. All three are in playtest, not yet
        available.
      </p>
      <div className="book-grid" style={{ marginTop: '2rem' }}>
        {books.map((book) => (
          <BookCard key={book.slug} book={book} />
        ))}
      </div>
    </>
  )
}
