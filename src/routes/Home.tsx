import { Link } from 'react-router-dom'
import BookCard from '../components/BookCard'
import { books } from '../content/books'
import { site } from '../content/site'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero__eyebrow">A Tabletop Roleplaying Game</div>
        <h1 className="hero__title">{site.name}</h1>
        <p className="hero__lede">{site.tagline}</p>
      </section>

      <section>
        <h2>The books</h2>
        <p className="lede">
          Three rulebooks form the canon — currently in pre-release while
          playtesting continues.
        </p>
        <div className="book-grid" style={{ marginTop: '1.25rem' }}>
          {books.map((book) => (
            <BookCard key={book.slug} book={book} />
          ))}
        </div>
      </section>

      <hr className="divider" />

      <section>
        <h2>What makes Terminus Rift different</h2>
        <p>
          The Astralis system — the in-world setting — is grounded in real
          astrophysics. Stellar parameters, orbital mechanics, and biological
          constraints are derived from peer-reviewed literature and standard
          reference data, not hand-waved. Where in-world phenomena (the Rift,
          magic) diverge from physics, the divergence is marked explicitly —
          fiction is fiction, science is science.
        </p>
        <p>
          <Link to="/physics">Read more about the physics backing →</Link>
        </p>
      </section>
    </>
  )
}
