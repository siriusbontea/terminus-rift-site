import ContactForm from '../components/ContactForm'
import { otherProfiles } from '../content/site'

export default function About() {
  return (
    <>
      <h1>About</h1>
      <p className="lede">
        Terminus Rift is a personal tabletop roleplaying game project — rule
        system, setting, and supporting research authored by Sirius T. Bontea.
      </p>

      <h2>The project</h2>
      <p>
        Three rulebooks form the canon: the Core Rulebook, the Rift Master's
        Guide, and the Bestiary. Supporting them is a body of physics
        verification documents that anchor the Astralis system to real
        astrophysics. Everything is in active development.
      </p>

      <h2>License</h2>
      <p>
        This is a private playtest project. All content is &copy; Sirius T.
        Bontea — all rights reserved. Not currently licensed for
        redistribution. License terms for any external release will be set at
        that time.
      </p>

      <h2>Elsewhere</h2>
      <ul className="link-list">
        {otherProfiles.map((p) => (
          <li key={p.key}>
            <a href={p.href} target="_blank" rel="noopener noreferrer">
              {p.label}
            </a>
          </li>
        ))}
      </ul>

      <h2>Get in touch</h2>
      <p>
        Questions, feedback, or playtest interest? Use the form below.
      </p>
      <ContactForm />
    </>
  )
}
