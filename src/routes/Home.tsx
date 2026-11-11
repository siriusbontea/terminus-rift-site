import type { CSSProperties, FormEvent, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import BookCard from '../components/BookCard'
import { books } from '../content/books'
import { quickStartPdf } from '../content/nav'
// Art slots. Drop replacement files in at the same paths; nothing else changes.
import heroArt from '../assets/art/hero.jpg'
import hero640avif from '../assets/art/hero-640.avif'
import hero960avif from '../assets/art/hero-960.avif'
import hero1280avif from '../assets/art/hero-1280.avif'
import hero640webp from '../assets/art/hero-640.webp'
import hero960webp from '../assets/art/hero-960.webp'
import hero1280webp from '../assets/art/hero-1280.webp'
import worldImg from '../assets/img/vellmir-day-night.jpg'
import worldImg800 from '../assets/img/vellmir-day-night-800.jpg'

const accent = (c: string) => ({ '--c': c }) as CSSProperties

const jumpLinks = [
  { id: 'what', label: 'What is it?' },
  { id: 'create', label: 'Make a hero' },
  { id: 'magic', label: 'Magic' },
  { id: 'combat', label: 'Combat' },
  { id: 'world', label: 'The world' },
  { id: 'quickstart', label: 'Quick start' },
]

function SectionHead({
  id,
  kicker,
  title,
  children,
}: {
  id: string
  kicker: string
  title: string
  children: ReactNode
}) {
  return (
    <div className="section-head">
      <div className="art-strip" aria-hidden="true" />
      <p className="kicker">{kicker}</p>
      <h2 id={id}>{title}</h2>
      <p className="lede">{children}</p>
    </div>
  )
}

export default function Home() {
  const noSubmit = (e: FormEvent) => e.preventDefault()

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="hero" id="top" aria-labelledby="hero-title">
        <picture className="hero__art">
          <source
            type="image/avif"
            srcSet={`${hero640avif} 640w, ${hero960avif} 960w, ${hero1280avif} 1280w`}
            sizes="100vw"
          />
          <source
            type="image/webp"
            srcSet={`${hero640webp} 640w, ${hero960webp} 960w, ${hero1280webp} 1280w`}
            sizes="100vw"
          />
          <img
            src={heroArt}
            alt="Four travellers cross the twilight band of Vellmir. Svartisol eclipses Astralis low over the dayside glow, a storm towers over the Twilight Sea, and the Watcher and Blodmåne shine over the nightside ice."
            width={1280}
            height={720}
            fetchPriority="high"
            decoding="async"
          />
        </picture>
        <div className="hero__shade" aria-hidden="true" />
        <div className="wrap">
          <div className="hero__content">
            <p className="kicker">A tabletop roleplaying game in development</p>
            <h1 id="hero-title">Terminus Rift</h1>
            <p className="tagline">Vellmir, world of fire and ice</p>
            <p className="lede">
              One side of the world faces its star forever. The other never sees it. Between them
              runs the Twilight Sea, a narrow ribbon of life under a storm that never ends. Gather
              your friends, roll a d20, and go where civilised people avoid.
            </p>
            <div className="btn-row">
              <a className="btn btn-primary" href="#updates">
                Get updates
              </a>
              <a className="btn btn-ghost" href="#what">
                What is Terminus Rift?
              </a>
            </div>
          </div>
        </div>
      </section>

      <nav className="jump" aria-label="On this page">
        <ul className="wrap">
          {jumpLinks.map((j) => (
            <li key={j.id}>
              <a href={`#${j.id}`}>{j.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* ================= WHAT IS IT ================= */}
      <section className="band" id="what" aria-labelledby="what-title">
        <div className="wrap">
          <SectionHead id="what-title" kicker="What is it?" title="A story you tell together">
            A tabletop roleplaying game is collaborative storytelling shared amongst friends around
            a table. One player is the <b>Rift Master</b>, who describes the world and plays everyone
            in it. Everyone else plays one hero. The story belongs to everyone at the table.
          </SectionHead>

          <div className="cards cards-3">
            <article className="card">
              <svg className="icon" viewBox="0 0 44 44" aria-hidden="true">
                <circle cx="22" cy="22" r="18" fill="#141B30" stroke="#F2B85B" strokeWidth="2" />
                <path d="M22 4a18 18 0 0 1 0 36z" fill="#E8743B" />
                <path d="M22 4a18 18 0 0 0 0 36" fill="#2B2547" />
                <path d="M22 4v36" stroke="#E9EEF6" strokeWidth="2" />
              </svg>
              <h3>A world that never turns</h3>
              <p>
                Vellmir is tidally locked: one side always faces its star. The dayside roars with
                heat, the nightside is locked in frost, and most great cities cling to the narrow
                Twilight Sea between them.
              </p>
            </article>
            <article className="card">
              <svg className="icon" viewBox="0 0 44 44" aria-hidden="true">
                <path d="M22 3l17 10v18L22 41 5 31V13z" fill="#141B30" stroke="#5AB8FF" strokeWidth="2" />
                <text
                  x="22"
                  y="27"
                  textAnchor="middle"
                  fontFamily="Cygnus, Georgia, serif"
                  fontWeight="700"
                  fontSize="13"
                  fill="#E9EEF6"
                >
                  20
                </text>
              </svg>
              <h3>One core rule</h3>
              <p>
                When the outcome is uncertain, roll a d20, add a modifier, and compare it with a
                Difficulty Class. Meet or beat it and you succeed. Everything else builds on that.
              </p>
            </article>
            <article className="card">
              <svg className="icon" viewBox="0 0 44 44" aria-hidden="true">
                <circle cx="22" cy="22" r="6" fill="#F2B85B" />
                <ellipse cx="22" cy="22" rx="19" ry="7" fill="none" stroke="#5AB8FF" strokeWidth="2" />
                <ellipse
                  cx="22"
                  cy="22"
                  rx="19"
                  ry="7"
                  fill="none"
                  stroke="#B3344A"
                  strokeWidth="2"
                  transform="rotate(60 22 22)"
                />
              </svg>
              <h3>Real physics, real magic</h3>
              <p>
                Every feature of the Astralis system is grounded in real astrophysics, yet shaped by
                story. Optional sidebars show the maths behind the myth for those who want it.
              </p>
            </article>
          </div>

          <div className="card card--spaced">
            <h3>What you need to play</h3>
            <ul className="chips" aria-label="What you need">
              <li>A set of polyhedral dice</li>
              <li>A character sheet</li>
              <li>Pencil and eraser</li>
              <li>The Core Rulebook</li>
              <li>3–6 friends</li>
            </ul>
            <p className="cite">From the Core Rulebook, chapter 1: Introduction.</p>
          </div>
        </div>
      </section>

      {/* ================= CHARACTER CREATION ================= */}
      <section className="band band-alt" id="create" aria-labelledby="create-title">
        <div className="wrap">
          <SectionHead id="create-title" kicker="Make a hero" title="Heroes with a past">
            Every adventurer on Vellmir has a story: not just where they are going, but where they
            have been. <i>Terminus Rift</i> builds your hero step by step with a life path, from the
            people they come from to the moment they step into the unknown.
          </SectionHead>

          <ol className="steps">
            <li><div><strong>Ancestry</strong><span>One of eight playable families.</span></div></li>
            <li><div><strong>Attributes</strong><span>Point buy, standard array, or 4d6 drop lowest.</span></div></li>
            <li><div><strong>Origin</strong><span>Dayside, Terminator, Nightside, Djupheim, or Veil-touched.</span></div></li>
            <li><div><strong>Background</strong><span>Skills, an ability and starting gear.</span></div></li>
            <li><div><strong>Career terms</strong><span>One to three four-year chapters of your life before adventure.</span></div></li>
            <li><div><strong>Class</strong><span>One of twelve classes.</span></div></li>
            <li><div><strong>Rift Mark</strong><span>One extraordinary fact true of no one else in the world.</span></div></li>
            <li><div><strong>Finishing touches</strong><span>Alignment, equipment, personality.</span></div></li>
          </ol>

          <div className="paths">
            <div className="path">
              <span className="time">15 minutes</span>
              <h3>Quick-Start</h3>
              <p className="muted">Pick a career archetype such as Soldier, Scholar or Outlaw and start playing tonight.</p>
            </div>
            <div className="path">
              <span className="time">60–90 minutes</span>
              <h3>Full life path</h3>
              <p className="muted">Qualify, survive and narrate your career terms. You come out with friends, enemies, scars and secrets.</p>
            </div>
          </div>

          <h3 className="subhead">The eight families of Vellmir</h3>
          <ul className="ancestries">
            <li><b>Human</b><i>Adaptable, ambitious, endlessly diverse.</i></li>
            <li><b>Dwarf</b><i>Enduring as the mountain, patient as the stone.</i></li>
            <li><b>Elf</b><i>Weavers of light, keepers of the long memory.</i></li>
            <li><b>Halfling</b><i>Swift as the current, lucky as the tide.</i></li>
            <li><b>Dragonborn</b><i>Heirs of dragonfire, forged in the crucible of the dayside.</i></li>
            <li><b>Lycanthrope</b><i>Beast-clad hunters of the crimson night.</i></li>
            <li><b>Pridefolk</b><i>Proud hunters, silent as shadow, fierce as flame.</i></li>
            <li><b>Chitinfolk</b><i>Builders, hunters, and keepers of the terminator’s living cities.</i></li>
          </ul>

          <h3 className="subhead">Twelve classes</h3>
          <ul className="chips" aria-label="Classes">
            {['Warrior', 'Rogue', 'Wizard', 'Priest', 'Ranger', 'Sorcerer', 'Bard', 'Psionicist', 'Druid', 'Artificer', 'Paladin', 'Shaman'].map(
              (c) => (
                <li key={c}>{c}</li>
              ),
            )}
          </ul>
          <p className="cite">From the Core Rulebook, chapter 3: Character Creation, and chapter 4: Ancestries.</p>
        </div>
      </section>

      {/* ================= MAGIC ================= */}
      <section className="band" id="magic" aria-labelledby="magic-title">
        <div className="wrap">
          <SectionHead id="magic-title" kicker="Magic" title="Magic permeates Vellmir">
            The rift energy that scars the world amplifies and distorts every power a caster wields.
            Spells come from four traditions, and psionicists bend reality with willpower alone.
          </SectionHead>

          <div className="traditions">
            <div className="tradition" style={accent('#5AB8FF')}>
              <div><h3>Arcane</h3><p>The fundamental laws of reality, learnt through study or inherited through bloodline. Wizard, Sorcerer, Artificer.</p></div>
            </div>
            <div className="tradition" style={accent('#F2B85B')}>
              <div><h3>Divine</h3><p>Channelled from cosmic entities, deities or ideals. Heals, protects and smites. Priest.</p></div>
            </div>
            <div className="tradition" style={accent('#B3344A')}>
              <div><h3>Occult</h3><p>Emotion, symbol and the hidden connections between all things. Bard.</p></div>
            </div>
            <div className="tradition" style={accent('#3d8f6a')}>
              <div><h3>Primal</h3><p>Vellmir’s forests, storms, beasts and elements. Druid, Ranger.</p></div>
            </div>
          </div>

          <div className="two-col">
            <div className="card">
              <h3>No spell preparation</h3>
              <p className="muted">You know your spells and can cast any of them at any time. Cantrips are at will, encounter spells come back after a rest, and your mightiest daily spells are saved for when it matters.</p>
            </div>
            <div className="card">
              <h3>Rift Surges</h3>
              <p className="muted">Cast near an active rift and the Rift Master may call for a Rift Surge check. Your spell might be dampened to half strength, or amplified far beyond what you planned.</p>
            </div>
          </div>
          <p className="cite">From the Core Rulebook, chapter 8: Magic &amp; Psionics.</p>
        </div>
      </section>

      {/* ================= COMBAT ================= */}
      <section className="band band-alt" id="combat" aria-labelledby="combat-title">
        <div className="wrap">
          <SectionHead id="combat-title" kicker="Combat" title="Tactical and decisive">
            When negotiation fails and blades are drawn, every turn is a real choice. Fights on
            Vellmir are rarely tidy: volcanic vents erupt, sandstorms blind, and rift energy
            crackles through the air.
          </SectionHead>

          <div className="cards cards-3">
            <article className="card">
              <h3>Three actions, one reaction</h3>
              <div className="actions" aria-label="Three actions and one reaction">
                <span className="pip" aria-hidden="true">1</span>
                <span className="pip" aria-hidden="true">2</span>
                <span className="pip" aria-hidden="true">3</span>
                <span className="pip react" aria-hidden="true">R</span>
              </div>
              <p className="muted">Stride, Strike, cast, raise a shield. Spend your actions in any order you like.</p>
            </article>
            <article className="card">
              <h3>Wounded, then Desperate</h3>
              <div className="meter" aria-hidden="true" />
              <div className="meter-labels" aria-hidden="true">
                <span>10% Desperate</span>
                <span>50% Wounded</span>
                <span>Full</span>
              </div>
              <p className="muted" style={{ marginTop: '0.75rem' }}>
                Drop to half your Hit Points and your best moves come back. Drop to a tenth and they
                come back again. A losing fight can still become a dramatic victory.
              </p>
            </article>
            <article className="card">
              <h3>Five range bands</h3>
              <ul className="bands">
                <li><span>Melee</span><span>5 ft</span></li>
                <li><span>Close</span><span>30 ft</span></li>
                <li><span>Medium</span><span>60 ft</span></li>
                <li><span>Long</span><span>120 ft</span></li>
                <li><span>Extreme</span><span>240+ ft</span></li>
              </ul>
            </article>
          </div>

          <h3 className="subhead">Play it your way</h3>
          <p className="muted">
            Every power uses the same range bands, so you can switch between theatre-of-the-mind
            zones, a square grid or hexes, even in the middle of a session.
          </p>
          <div className="triad">
            <div style={accent('#5AB8FF')}><b>Zones</b><small>Fast and cinematic</small></div>
            <div style={accent('#F2B85B')}><b>Squares</b><small>Precise duels</small></div>
            <div style={accent('#E8743B')}><b>Hexes</b><small>Big battles</small></div>
          </div>
          <p className="cite">From the Core Rulebook, chapter 9: Combat.</p>
        </div>
      </section>

      {/* ================= THE WORLD ================= */}
      <section className="band" id="world" aria-labelledby="world-title">
        <div className="wrap">
          <SectionHead id="world-title" kicker="The world" title="Vellmir and the Astralis system">
            A super-Earth twice Earth’s diameter, locked in place beneath a blazing star. Here the
            journey is the adventure: Vellmir is vast, and Environmental Pressure makes its heat,
            cold and storms a real threat.
          </SectionHead>

          <div className="world-grid">
            <figure className="world-figure">
              <img
                src={worldImg}
                srcSet={`${worldImg800} 800w, ${worldImg} 1299w`}
                sizes="(min-width: 1024px) 40rem, 100vw"
                width={1299}
                height={623}
                loading="lazy"
                decoding="async"
                alt="Two views of the planet Vellmir as globes: on the left the dayside, brown deserts and green land around blue seas; on the right the nightside, covered in pale ice."
              />
              <figcaption>
                Vellmir’s dayside (left) and nightside (right), from the working world map. Draft
                terrain model; coastlines are not final canon.
              </figcaption>
            </figure>

            <ul className="facts">
              <li>
                <svg viewBox="0 0 44 44" aria-hidden="true"><circle cx="22" cy="22" r="18" fill="#F2B85B" /><circle cx="22" cy="22" r="11" fill="#0A0E1A" /></svg>
                <div><b>Svartisol, the Black Sun</b><p>A frozen world held between Vellmir and its star, casting a permanent eclipse. Beneath it lies a shadow about 730 km across: a cold refuge in the heart of the dayside.</p></div>
              </li>
              <li>
                <svg viewBox="0 0 44 44" aria-hidden="true"><circle cx="22" cy="22" r="12" fill="#B3344A" /><circle cx="22" cy="22" r="19" fill="none" stroke="#B3344A" strokeOpacity="0.4" strokeWidth="3" /></svg>
                <div><b>Blodmåne, the Blood Moon</b><p>Forever eclipsed by the world it orbits, it glows crimson over the nightside. The lycanthropes draw their power from it.</p></div>
              </li>
              <li>
                <svg viewBox="0 0 44 44" aria-hidden="true"><path d="M22 4l4 14 14 4-14 4-4 14-4-14-14-4 14-4z" fill="#5AB8FF" /></svg>
                <div><b>The Celestial Watcher</b><p>A distant blue star that bathes the ice in sapphire light. It flares on a 227-day clock, and when a Sapphire Peak comes the nightside dreads <i>Blárvakt</i>, the Blue Vigil.</p></div>
              </li>
              <li>
                <svg viewBox="0 0 44 44" aria-hidden="true"><path d="M8 6l10 14-6 4 14 16-4-12 6-4L16 6z" fill="none" stroke="#E9EEF6" strokeWidth="2" strokeLinejoin="round" /></svg>
                <div><b>The Rifts</b><p>Long ago the Sundering tore the Veil of Aetheris, opening the first rifts and letting the Outsiders in.</p></div>
              </li>
              <li>
                <svg viewBox="0 0 44 44" aria-hidden="true"><path d="M4 16h36M8 16v22h28V16" fill="none" stroke="#F2B85B" strokeWidth="2" /><path d="M14 38V26a8 8 0 0 1 16 0v12" fill="#2B2547" stroke="#F2B85B" strokeWidth="2" /></svg>
                <div><b>Djupheim</b><p>Caverns and underground seas, and sealed vaults left by a lost civilisation.</p></div>
              </li>
            </ul>
          </div>
          <p className="cite">From the Core Rulebook, chapters 1 and 10, and the Rift Master’s Guide, chapters 10 and 12.</p>
          <p>
            <Link className="back-link" to="/setting">More about the setting →</Link>
          </p>
        </div>
      </section>

      {/* ================= THE BOOKS ================= */}
      <section className="band band-alt" id="books" aria-labelledby="books-title">
        <div className="wrap">
          <div className="section-head">
            <div className="art-strip" aria-hidden="true" />
            <p className="kicker">The books</p>
            <h2 id="books-title">The books</h2>
            <p className="lede">
              Three rulebooks form the canon — currently in pre-release while playtesting continues.
            </p>
          </div>
          <div className="book-grid">
            {books.map((book) => (
              <BookCard key={book.slug} book={book} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= QUICK START + UPDATES ================= */}
      <section className="band" aria-label="Quick start and updates">
        <div className="wrap end-grid">
          <div className="quickstart" id="quickstart">
            <p className="kicker">Play free</p>
            <h2>The quick start</h2>
            <p>
              A short, free booklet: how the check works, how to make a character step by step, and
              a character sheet to fill in.
            </p>
            <div className="btn-row">
              <a className="btn btn-primary" href={quickStartPdf} type="application/pdf">
                Download the quick start (PDF)
              </a>
            </div>
            <p className="cite">PDF, about 120 KB.</p>
          </div>

          {/* PLACEHOLDER: mailing list provider not chosen yet. Not wired to anything. */}
          <div className="signup" id="updates">
            <p className="kicker">Get updates</p>
            <h2>Hear about new chapters first</h2>
            <p className="muted">News on playtests, previews and release dates. No spam.</p>
            <form aria-describedby="signup-note" onSubmit={noSubmit} noValidate>
              <div className="full">
                <label htmlFor="email">Your email address</label>
              </div>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                inputMode="email"
                placeholder="you@example.com"
              />
              <button className="btn btn-primary" type="button" aria-disabled="true">
                Sign me up
              </button>
              <label className="check full">
                <span className="check-hit">
                  <input type="checkbox" name="consent" />
                </span>
                <span>I agree to receive emails about Terminus Rift. I can unsubscribe at any time.</span>
              </label>
            </form>
            <span className="placeholder-note" id="signup-note">
              Placeholder form: not connected to any mailing list.
            </span>
          </div>
        </div>
      </section>
    </>
  )
}
