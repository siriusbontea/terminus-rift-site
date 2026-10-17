// Curated, public-facing summary of the canonical changelog
// (Changelog/src/entries/YYYY-MM-DD.tex in the TTRPG repo). Mirror only
// the entries that are interesting to a public audience — not every
// typo fix in the LaTeX log.

export type ChangelogChange = {
  kind: 'Added' | 'Changed' | 'Fixed' | 'Removed'
  text: string
}

export type ChangelogEntry = {
  date: string // YYYY-MM-DD
  book: string
  version: string
  changes: ChangelogChange[]
}

export const changelog: ChangelogEntry[] = [
  {
    date: '2026-10-17',
    book: 'Core Rulebook',
    version: '0.15.2',
    changes: [
      {
        kind: 'Changed',
        text: 'The 10,000 ft skimmer ceiling is unchanged. Surface gravity remains Earth-normal (9.80 m/s²); the limit is the slightly denser atmosphere and the thermal shear where dayside and terminator air meet.',
      },
    ],
  },
  {
    date: '2026-10-17',
    book: "Rift Master's Guide",
    version: '0.11.0',
    changes: [
      {
        kind: 'Changed',
        text: 'Gazetteer regional travel times now follow the Core Rulebook Overland Speed table at the live distances. Star Hollow, Ashveil, and Frostveil overland and sail routes use multi-month and expedition-scale ranges; the Djupverk-to-surface Deeproad is unchanged.',
      },
    ],
  },
  {
    date: '2026-09-11',
    book: 'Core Rulebook',
    version: '0.15.1',
    changes: [
      {
        kind: 'Changed',
        text: 'Playable ancestries are eight families, dual-labelled with Trade names and endonyms. Highland Dwarf (Djuren) is the live dwarf chassis.',
      },
      {
        kind: 'Removed',
        text: 'Skuggari are no longer a playable ancestry; they remain a major nightside people in the companion books.',
      },
    ],
  },
  {
    date: '2026-09-11',
    book: "Rift Master's Guide",
    version: '0.10.0',
    changes: [
      {
        kind: 'Changed',
        text: "Svartisol's Umbra is fixed under tidal lock; settlements no longer migrate for orbital reasons. Extreme Heat, Extreme Cold, and hexcrawl travel DCs now follow the Core Rulebook Environmental Pressure table.",
      },
      {
        kind: 'Removed',
        text: 'The Shadow Sickness adventure hook.',
      },
    ],
  },
  {
    date: '2026-09-11',
    book: 'Bestiary',
    version: '0.4.1',
    changes: [
      {
        kind: 'Changed',
        text: 'The humanoid cultural list is eight playable families plus Skuggari as a major NPC people. Sea Halfling is the live heading; Korvani remains the endonym.',
      },
    ],
  },
  {
    date: '2026-08-20',
    book: 'Quick Start',
    version: '0.1.0',
    changes: [
      {
        kind: 'Added',
        text: 'A companion chargen booklet so a new player can fill a 1st-level sheet without reading the full Core Rulebook first. No new rules.',
      },
    ],
  },
  {
    date: '2026-08-15',
    book: 'Core Rulebook',
    version: '0.13.15',
    changes: [
      {
        kind: 'Fixed',
        text: 'Lie, Impersonate, and Sneak now target Acuity, matching Feint, Hide, and Create a Diversion.',
      },
    ],
  },
  {
    date: '2026-08-15',
    book: "Rift Master's Guide",
    version: '0.8.9',
    changes: [
      {
        kind: 'Fixed',
        text: 'Residual Feint and chase Break Contact checks now target Acuity.',
      },
    ],
  },
  {
    date: '2026-08-15',
    book: 'Bestiary',
    version: '0.3.5',
    changes: [
      {
        kind: 'Fixed',
        text: 'Phantom Presence and Feint and Thrust now target Acuity.',
      },
    ],
  },
  {
    date: '2026-05-14',
    book: 'Core Rulebook',
    version: '0.13.14',
    changes: [
      {
        kind: 'Fixed',
        text: 'Wizard and Sorcerer Spell Reserve, Effort Pool, and leftover skill keys brought into line with Chapter 2. Deception-detection actions target the Acuity defence.',
      },
      {
        kind: 'Added',
        text: 'Legend Class Features extended to all twelve classes, and a tear-out range-band reference card in Appendix C.',
      },
    ],
  },
  {
    date: '2026-05-14',
    book: "Rift Master's Guide",
    version: '0.8.8',
    changes: [
      {
        kind: 'Fixed',
        text: 'Medicine, Survival, and Society skill keys aligned with the Core Rulebook.',
      },
    ],
  },
  {
    date: '2026-05-04',
    book: 'Core Rulebook',
    version: '0.13.13',
    changes: [
      {
        kind: 'Changed',
        text: 'Saving throws unified into five static defences (AC, Fortitude, Reflex, Acuity, Resolve); the attacker rolls. Proficiency is now rank plus half level.',
      },
    ],
  },
  {
    date: '2026-05-04',
    book: "Rift Master's Guide",
    version: '0.8.7',
    changes: [
      {
        kind: 'Changed',
        text: 'NPC stat blocks and the creature-design tables migrated to static defences.',
      },
    ],
  },
  {
    date: '2026-05-04',
    book: 'Bestiary',
    version: '0.3.4',
    changes: [
      {
        kind: 'Changed',
        text: 'Creature stat blocks migrated to the Defences schema: attacks roll against a static defence.',
      },
    ],
  },
  {
    date: '2026-05-03',
    book: 'Core Rulebook',
    version: '0.11.0',
    changes: [
      {
        kind: 'Added',
        text: 'Acuity save (the higher of INT or CUN) and the Composure skill, completing a four-save grid so every attribute has a defensive home.',
      },
      {
        kind: 'Changed',
        text: 'Armour Class uses the higher of AGI or INS. Medicine, Society, and Survival skill keys follow an explicit input/output rule.',
      },
    ],
  },
  {
    date: '2026-05-03',
    book: "Rift Master's Guide",
    version: '0.7.0',
    changes: [
      {
        kind: 'Changed',
        text: 'Version label reverted from 1.1.0 to 0.7.0. The book remains a pre-release work in progress.',
      },
    ],
  },
  {
    date: '2026-04-30',
    book: 'Bestiary',
    version: '0.1.2',
    changes: [
      {
        kind: 'Fixed',
        text: 'A duplicate draft of the cosmic-creatures chapter was removed so cross-references resolve to the canonical roster.',
      },
    ],
  },
  {
    date: '2026-04-29',
    book: 'Core Rulebook',
    version: '0.10.0',
    changes: [
      {
        kind: 'Fixed',
        text: 'Skill prose no longer describes Vellmir as having crushing or heavy gravity. Surface gravity is Earth-like.',
      },
      {
        kind: 'Changed',
        text: 'Defy Fate (Rift Surge) now takes the better result. Life Path gains Connections, per-career Specialist skills, and a light rank ladder.',
      },
    ],
  },
  {
    date: '2026-04-29',
    book: "Rift Master's Guide",
    version: '1.1.0',
    changes: [
      {
        kind: 'Removed',
        text: 'Hero Points and Heroic Mode. Rift Surges are the single fate-bending currency.',
      },
      {
        kind: 'Added',
        text: 'Chase, hexcrawl, influence, mystery, mass combat, and downtime subsystems, plus stronghold facilities, a Free Archetype optional rule, and retraining.',
      },
    ],
  },
  {
    date: '2026-04-29',
    book: 'Bestiary',
    version: '0.1.1',
    changes: [
      {
        kind: 'Fixed',
        text: 'Djupheim cavern-formation prose no longer cites immense gravitational forces. Surface gravity is Earth-like.',
      },
    ],
  },
  {
    date: '2026-04-27',
    book: 'Core Rulebook',
    version: '0.8.3',
    changes: [
      {
        kind: 'Added',
        text: 'Void as a thirteenth damage type, the Sundering and the Cataclysm as canonical ages, and a four-tier rift-severity ladder.',
      },
    ],
  },
  {
    date: '2026-04-27',
    book: "Rift Master's Guide",
    version: '0.1.0',
    changes: [
      {
        kind: 'Added',
        text: 'First numbered release. Boss Template, attributes, and ancestry framing aligned with the Core Rulebook.',
      },
    ],
  },
  {
    date: '2026-04-27',
    book: 'Bestiary',
    version: '0.1.0',
    changes: [
      {
        kind: 'Added',
        text: 'First numbered release. Boss Template, Desperate threshold, and humanoid taxonomy aligned with the Core Rulebook.',
      },
    ],
  },
  {
    date: '2026-04-25',
    book: 'Core Rulebook',
    version: '0.8.1',
    changes: [
      {
        kind: 'Changed',
        text: 'Named-Boss action caps and Effort scaling at Legend tier. Ancestry origins now use the Environmental Pressure region names.',
      },
    ],
  },
  {
    date: '2026-04-24',
    book: 'Core Rulebook',
    version: '0.6.0',
    changes: [
      {
        kind: 'Added',
        text: 'Archetypes framework, the Boss Template, a Quick-Start chargen path, and six named Bosses spanning Adventurer through Legend.',
      },
    ],
  },
]
