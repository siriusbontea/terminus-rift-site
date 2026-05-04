import { Link } from 'react-router-dom'
import BookCard from '../components/BookCard'
import { books } from '../content/books'
import logo from '../assets/img/TerminusRift_logo.webp'

export default function Home() {
  return (
    <>
      <section className="hero">
        <img className="hero__logo" src={logo} alt="Terminus Rift" />
        <h1 className="sr-only">Terminus Rift</h1>
        <p className="hero__lede">
          Embark on an epic journey with <em>Terminus Rift</em>, a high fantasy
          tabletop RPG in development, infused with whispers of cosmic mystery.
        </p>
        <p className="hero__body">
          Unleash your imagination through an innovative character creation
          process, wield a boundless array of magic, and dive into thrilling
          combat that blends strategy and heroism.
        </p>
        <p className="hero__tease">
          Stay tuned for a world of lore, secrets, and adventure.
        </p>
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
        <h2>Grounded in real physics</h2>
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
