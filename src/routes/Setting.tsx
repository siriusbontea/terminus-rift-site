import CalloutBox from '../components/CalloutBox'

export default function Setting() {
  return (
    <>
      <h1>The Setting</h1>
      <p className="lede">
        Terminus Rift is set in the Astralis stellar system — a custom
        cosmology built from real astrophysics first, with the Rift and the
        in-world magic layered over it.
      </p>

      <h2>Astralis</h2>
      <p>
        The Astralis system follows real-world stellar and orbital physics.
        Stars have masses and luminosities consistent with their spectral
        classes; planets sit on stable orbits with parameters that reflect
        actual astrobiology constraints. None of this is invented — it can
        all be traced back to peer-reviewed sources, and the derivation is
        audited end-to-end in the project's physics documents.
      </p>

      <h2>The Rift</h2>
      <p>
        The Rift, magic, and the meta-cosmology are <em>not</em> physically
        grounded — they are narrative invention, and the books mark where
        they diverge from physics so the reader is never misled.
      </p>

      <CalloutBox variant="rules" title="The boundary">
        The format is consistent throughout: state the real-physics baseline
        first, then explicitly mark where in-world mechanics diverge. Fiction
        is fiction, science is science, and the books never dress one as the
        other.
      </CalloutBox>
    </>
  )
}
