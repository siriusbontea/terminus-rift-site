import type { CSSProperties, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { gameChannels } from '../content/site'
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
  { id: 'different', label: 'What’s different' },
  { id: 'what', label: 'What is it?' },
  { id: 'create', label: 'Make a hero' },
  { id: 'magic', label: 'Magic' },
  { id: 'combat', label: 'Combat' },
  { id: 'world', label: 'The world' },
  { id: 'follow', label: 'Follow development' },
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
            <p className="kicker">A high fantasy tabletop roleplaying game in development</p>
            <h1 id="hero-title">Terminus Rift</h1>
            <p className="tagline">Vellmir, world of fire and ice</p>
            {/* CRB ch01 (core rule), ch10 (Environmental Pressure), ch03 (life path), ch08 (Rift Surges) */}
            <p className="lede">
              A d20 tabletop roleplaying game of survival and discovery on Vellmir, a tidally locked
              world of scorching day, frozen night and a narrow twilight between. Your party crosses
              deserts, ice and storm, where the land itself wears you down. Heroes are built from a
              life story, and magic can surge out of control near the rifts.
            </p>
            <div className="btn-row">
              <a className="btn btn-primary" href="#follow">
                Follow development
              </a>
              <a className="btn btn-ghost" href="#what">
                What is Terminus Rift?
              </a>
            </div>
            <p className="hero__newcomer">
              <a href="#what">New to roleplaying? Start here</a>
            </p>
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

      {/* ================= WHAT IS DIFFERENT ================= */}
      <section className="band band-tight" id="different" aria-labelledby="different-title">
        <div className="wrap">
          <div className="section-head">
            <div className="art-strip" aria-hidden="true" />
            <p className="kicker">What’s different here</p>
            <h2 id="different-title">Built for Vellmir</h2>
          </div>
          <ul className="features">
            <li>
              <b>The land fights back.</b> Environmental Pressure rates every hazard from 1 to 5, and
              each hour of exposure to heat, cold or storm means another Fortitude check.
              <span className="cite">Core Rulebook, chapter 10</span>
            </li>
            <li>
              <b>Heroes with a life story.</b> Serve one to three career terms before play, then give
              your hero a Rift Mark: one extraordinary fact true of no one else in the world.
              <span className="cite">Core Rulebook, chapter 3</span>
            </li>
            <li>
              <b>Rift Surges bend fate.</b> Start each session with one, hold up to three, and spend
              them to reroll a d20, cling to life at 0 HP, or add 1d6 damage.
              <span className="cite">Core Rulebook, chapter 2</span>
            </li>
            <li>
              <b>The Wounded cascade.</b> Drop to half your Hit Points and your spent Exploits
              refresh. Drop to a tenth and they refresh again, and your Desperate ability unlocks.
              <span className="cite">Core Rulebook, chapter 2</span>
            </li>
            <li>
              <b>Universal range bands.</b> Every power uses the same five bands, so your group can
              switch between zones, squares and hexes, even mid-session.
              <span className="cite">Core Rulebook, chapter 9</span>
            </li>
          </ul>

          <aside className="card card--spaced coming-from" aria-labelledby="coming-title">
            <h3 id="coming-title">Already play d20 games?</h3>
            <p>The core is a d20 plus a modifier against a Difficulty Class. Around it, Terminus Rift does its own thing:</p>
            <ul className="tick-list">
              <li><b>Eight attributes</b>, four Facets of Form and four Facets of Mind.</li>
              <li><b>Techniques, Exploits and Gambits:</b> powers at will, once per encounter, and once per day. Exploits refresh after a short rest, and again at Wounded and Desperate.</li>
              <li><b>Spell Reserve and Effort:</b> no spell preparation, and psionicists run on Effort instead of spells (see Magic).</li>
              <li><b>Archetypes</b> replace multiclassing.</li>
              <li><b>Cosmic bonds</b> tie your hero to Vellmir’s factions, deities and cosmic entities.</li>
            </ul>
            <p className="cite">Core Rulebook, chapters 1, 2, 3 and 8.</p>
          </aside>
        </div>
      </section>

      {/* ================= WHAT IS IT ================= */}
      <section className="band" id="what" aria-labelledby="what-title">
        <div className="wrap">
          <SectionHead id="what-title" kicker="What is it?" title="A story you tell together">
            One player is the <b>Rift Master</b>: the narrator and referee who describes the world
            and plays everyone in it. Everyone else plays one hero and decides what they say and
            do. If you have enjoyed choose-your-own-adventure books, improv or co-operative video
            games, you already understand the appeal.
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
                Built on real astrophysics, then shaped by story. Optional sidebars show the maths
                behind the myth for those who want it.
              </p>
            </article>
          </div>

          <div className="card card--spaced">
            <h3>What you need to play</h3>
            <ul className="chips" aria-label="What you need">
              <li>A set of polyhedral dice</li>
              <li>A character sheet</li>
              <li>Pencil and eraser</li>
              <li>The Core Rulebook (in playtest, not yet available)</li>
              <li>3–6 friends</li>
            </ul>
            <p className="cite">From the Core Rulebook, chapter 1: Introduction. Core Rulebook: in playtest, not yet available.</p>
          </div>
        </div>
      </section>

      {/* ================= CHARACTER CREATION ================= */}
      <section className="band band-alt" id="create" aria-labelledby="create-title">
        <div className="wrap">
          <SectionHead id="create-title" kicker="Make a hero" title="Heroes built from a life story">
            <i>Terminus Rift</i> builds your hero with a life path: the people they come from, the
            years they served before adventure, and the moment they step into the unknown. Each step
            gives real skills, gear and abilities.
          </SectionHead>

          <div className="rift-mark card">
            <p className="kicker">The Rift Mark</p>
            <h3>One extraordinary fact true of no one else in the world</h3>
            <p className="muted">
              It creates story hooks, not combat bonuses. A career event can become your Rift Mark.
            </p>
            <blockquote>
              “I am the only person to have walked into the Singing Rift and walked back out with my
              mind intact.”
            </blockquote>
            <p className="cite">Example hero from the Core Rulebook, chapter 3.</p>
          </div>

          <div className="paths">
            <div className="path">
              <span className="time">60–90 minutes</span>
              <h3>Full life path</h3>
              <p className="muted">Qualify, survive and narrate one to three career terms. You come out with friends, enemies, scars and secrets.</p>
            </div>
            <div className="path">
              <span className="time">15 minutes</span>
              <h3>Quick-Start</h3>
              <p className="muted">Pick a career archetype such as Soldier, Scholar or Outlaw and skip the career terms.</p>
            </div>
          </div>

          <details className="disclosure">
            <summary>Show all eight steps</summary>
            <ol className="steps">
              <li><div><strong>Ancestry</strong><span>One of eight playable ancestries.</span></div></li>
              <li><div><strong>Attributes</strong><span>Eight attributes: four Facets of Form and four Facets of Mind.</span></div></li>
              <li><div><strong>Origin</strong><span>Dayside, Terminator, Nightside, Djupheim, or Veil-touched.</span></div></li>
              <li><div><strong>Background</strong><span>Skills, an ability and starting gear.</span></div></li>
              <li><div><strong>Career terms</strong><span>One to three four-year chapters of your life before adventure.</span></div></li>
              <li><div><strong>Class</strong><span>One of twelve classes.</span></div></li>
              <li><div><strong>Rift Mark</strong><span>One extraordinary fact true of no one else in the world.</span></div></li>
              <li><div><strong>Finishing touches</strong><span>Alignment (it sets how strangers react to you), cosmic bonds, equipment, personality.</span></div></li>
            </ol>
          </details>

          <h3 className="subhead">The eight ancestries of Vellmir</h3>
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

          <details className="disclosure">
            <summary>Show the twelve classes</summary>
            <ul className="chips" aria-label="Classes">
              {['Warrior', 'Rogue', 'Wizard', 'Priest', 'Ranger', 'Sorcerer', 'Bard', 'Psionicist', 'Druid', 'Artificer', 'Paladin', 'Shaman'].map(
                (c) => (
                  <li key={c}>{c}</li>
                ),
              )}
            </ul>
          </details>
          <p className="cite">From the Core Rulebook, chapter 3: Character Creation, chapter 4: Ancestries, and chapter 5: Classes.</p>
        </div>
      </section>

      {/* ================= MAGIC ================= */}
      <section className="band" id="magic" aria-labelledby="magic-title">
        <div className="wrap">
          <SectionHead id="magic-title" kicker="Magic" title="Near a rift, a spell can fizzle or blow wide open">
            The rift energy that scars the world amplifies and distorts every power a caster wields.
            Spells belong to four traditions, Arcane, Divine, Occult and Primal, and psionicists
            bend reality with willpower alone.
          </SectionHead>

          <div className="cards cards-3">
            <article className="card">
              <h3>The Rift Surge check</h3>
              <p className="muted">Cast near an active rift and the Rift Master may call for a flat d20 roll.</p>
              <ul className="bands">
                <li><span>1–5</span><span>Dampened: half effect</span></li>
                <li><span>6–15</span><span>Normal casting</span></li>
                <li><span>16–19</span><span>Amplified: +50%</span></li>
                <li><span>20</span><span>Cascade: auto-crit, plus a random rift effect</span></li>
              </ul>
            </article>
            <article className="card">
              <h3>Spell Reserve</h3>
              <p className="muted">You know your spells and can cast any of them at any time. A Spell Reserve lets you keep casting beyond your Exploits and Gambits, and it refills by 2 when you become Wounded.</p>
            </article>
            <article className="card">
              <h3>Effort</h3>
              <p className="muted">Psionicists don’t cast spells. They commit Effort for a scene, a day or indefinitely, and it floods back when they become Wounded or Desperate.</p>
            </article>
          </div>

          <details className="disclosure">
            <summary>Which classes use which tradition</summary>
            <ul className="trad-list">
              <li style={accent('#5AB8FF')}><b>Arcane</b> Wizard, Sorcerer, Artificer</li>
              <li style={accent('#F2B85B')}><b>Divine</b> Priest, Paladin</li>
              <li style={accent('#B3344A')}><b>Occult</b> Bard</li>
              <li style={accent('#3d8f6a')}><b>Primal</b> Druid, Ranger, Shaman</li>
              <li style={accent('#E9EEF6')}><b>Psionic</b> Psionicist (Effort, not spells)</li>
            </ul>
          </details>
          <p className="cite">From the Core Rulebook, chapter 2: Core Mechanics, chapter 8: Magic &amp; Psionics, and the class table in chapter 5.</p>
        </div>
      </section>

      {/* ================= COMBAT ================= */}
      <section className="band band-alt" id="combat" aria-labelledby="combat-title">
        <div className="wrap">
          <SectionHead id="combat-title" kicker="Combat" title="The battlefield fights back">
            Fights on Vellmir are rarely tidy: volcanic vents erupt, sandstorms blind, and rift
            energy crackles through the air.
          </SectionHead>

          <div className="cards cards-2">
            <article className="card">
              <h3>Wounded, then Desperate</h3>
              <div className="meter" aria-hidden="true" />
              <div className="meter-labels" aria-hidden="true">
                <span>10% Desperate</span>
                <span>50% Wounded</span>
                <span>Full</span>
              </div>
              <p className="muted" style={{ marginTop: '0.75rem' }}>
                At half your Hit Points you are Wounded: your spent Exploits refresh, your Strikes deal
                bonus damage and you gain a Rift Surge. At a tenth you are Desperate: your Exploits
                refresh again and your class’s Desperate ability unlocks.
              </p>
            </article>
            <article className="card">
              <h3>Five range bands</h3>
              <ul className="bands">
                <li><span>Melee</span><span>5 ft · adjacent</span></li>
                <li><span>Close</span><span>30 ft · 6 sq · 5 hex</span></li>
                <li><span>Medium</span><span>60 ft · 12 sq · 10 hex</span></li>
                <li><span>Long</span><span>120 ft · 24 sq · 20 hex</span></li>
                <li><span>Extreme</span><span>240+ ft · 48+ sq · 40+ hex</span></li>
              </ul>
              <p className="cite">Ranges are in feet, as in the Core Rulebook, with square and hex equivalents.</p>
            </article>
          </div>

          <p className="cite">From the Core Rulebook, chapter 2: Core Mechanics, and chapter 9: Combat.</p>
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

      {/* ================= QUICK START + UPDATES ================= */}
      <section className="band" aria-label="Coming soon and following development">
        <div className="wrap end-grid">
          <div className="quickstart" id="quickstart">
            <p className="kicker">Quick Start</p>
            <h2>Free Quick Start coming soon</h2>
            <p className="cite">Core Rulebook: in playtest, not yet available. <Link to="/books">About the books</Link></p>
          </div>

          <div className="follow" id="follow">
            <p className="kicker">Elsewhere</p>
            <h2>Follow development</h2>
            <p className="muted">Follow along on YouTube and X while the books are in playtest.</p>
            <div className="btn-row">
              {gameChannels.map((c, i) => (
                <a
                  key={c.key}
                  className={i === 0 ? 'btn btn-primary' : 'btn btn-ghost'}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {c.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
