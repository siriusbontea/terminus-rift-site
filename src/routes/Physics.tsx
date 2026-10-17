import CalloutBox from '../components/CalloutBox'

export default function Physics() {
  return (
    <>
      <h1>The Physics Backing</h1>
      <p className="lede">
        Terminus Rift treats real-physics rigor as non-negotiable. Every
        formula, constant, astrophysical parameter, and biological
        constraint that's claimed to be physically grounded is backed by
        peer-reviewed literature, authoritative textbooks, or standard
        reference data (NASA, NIST, IAU).
      </p>

      <h2>What this means in practice</h2>
      <ul>
        <li>
          All physics claims use SI units, or declare non-SI units explicitly
          with their conversions.
        </li>
        <li>
          Calculations are self-consistent: every derived value flows from
          stated constraints without contradiction.
        </li>
        <li>
          Where a calculation or parameter cannot be verified or cited, the
          gap is flagged — values are never invented to patch a derivation.
        </li>
      </ul>

      <h2>Adopted figures for Vellmir</h2>
      <p>
        The physics appendices adopt a diameter of 25,484 km (radius
        12,742 km) and a surface gravity of 9.80 m/s². Rotation is
        tidally locked: one hemisphere faces Astralis permanently.
      </p>

      <h2>The audit chain</h2>
      <p>
        Three companion documents anchor the system: a parameters file
        listing every adopted constant with citation, a math audit that walks
        every derivation from first principles, and a verification report
        that summarises the audit. When a parameter changes, the audit chain
        is re-verified end-to-end before the change is accepted.
      </p>

      <CalloutBox variant="warning" title="Narrative vs. physics">
        Some in-world phenomena — the Rift, magic — are fictional and do not
        correspond to real physics. These are clearly bracketed from
        real-physics claims so readers know which is which.
      </CalloutBox>
    </>
  )
}
