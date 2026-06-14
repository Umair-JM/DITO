/**
 * Cosmic SDK - Core Knowledge Evaluation & Benchmarking System
 * Generated programmatically to support 2,500 literature-backed knowledge domains.
 * Designed for DITO (Drop In The Ocean).
 */

class CosmicSDK {
  constructor() {
    // Define the 10 core disciplines
    this.disciplines = {
  "PHYSICS": "Physics & Astronomy",
  "CHEMISTRY": "Chemistry & Molecular Sciences",
  "BIOLOGY": "Biology & Life Sciences",
  "MATH": "Mathematics & Logic",
  "EARTH": "Earth & Atmospheric Sciences",
  "COMPUTER": "Computer Science & AI",
  "ENGINEERING": "Engineering & Technology",
  "MEDICINE": "Medicine & Health Sciences",
  "SOCIAL": "Social Sciences & Behavior",
  "HUMANITIES": "Humanities & Philosophy"
};

    // Initialized programmatically with 2,500 unique weighted domains
    this.domains = [
  {
    "id": "quantum_classical_mechanics",
    "discipline": "PHYSICS",
    "name": "Quantum Classical Mechanics",
    "baseWeight": 7,
    "keywords": [
      "quantum",
      "classical",
      "mechanics",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "relativistic_classical_mechanics",
    "discipline": "PHYSICS",
    "name": "Relativistic Classical Mechanics",
    "baseWeight": 7,
    "keywords": [
      "relativistic",
      "classical",
      "mechanics",
      "relativity",
      "spacetime",
      "lorentz",
      "einstein",
      "dilated",
      "gravitation"
    ]
  },
  {
    "id": "statistical_classical_mechanics",
    "discipline": "PHYSICS",
    "name": "Statistical Classical Mechanics",
    "baseWeight": 4,
    "keywords": [
      "statistical",
      "classical",
      "mechanics",
      "entropy",
      "probability",
      "ensemble",
      "boltzmann",
      "stochastic"
    ]
  },
  {
    "id": "computational_classical_mechanics",
    "discipline": "PHYSICS",
    "name": "Computational Classical Mechanics",
    "baseWeight": 5,
    "keywords": [
      "computational",
      "classical",
      "mechanics",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico"
    ]
  },
  {
    "id": "theoretical_classical_mechanics",
    "discipline": "PHYSICS",
    "name": "Theoretical Classical Mechanics",
    "baseWeight": 5,
    "keywords": [
      "theoretical",
      "classical",
      "mechanics",
      "mathematical",
      "formalism",
      "derivation",
      "hypothesis"
    ]
  },
  {
    "id": "experimental_classical_mechanics",
    "discipline": "PHYSICS",
    "name": "Experimental Classical Mechanics",
    "baseWeight": 4,
    "keywords": [
      "experimental",
      "classical",
      "mechanics"
    ]
  },
  {
    "id": "applied_classical_mechanics",
    "discipline": "PHYSICS",
    "name": "Applied Classical Mechanics",
    "baseWeight": 4,
    "keywords": [
      "applied",
      "classical",
      "mechanics"
    ]
  },
  {
    "id": "high_energy_classical_mechanics",
    "discipline": "PHYSICS",
    "name": "High-Energy Classical Mechanics",
    "baseWeight": 4,
    "keywords": [
      "high",
      "energy",
      "classical",
      "mechanics",
      "fusion",
      "fission",
      "battery",
      "photovoltaic",
      "grid",
      "power"
    ]
  },
  {
    "id": "condensed_classical_mechanics",
    "discipline": "PHYSICS",
    "name": "Condensed Classical Mechanics",
    "baseWeight": 4,
    "keywords": [
      "condensed",
      "classical",
      "mechanics"
    ]
  },
  {
    "id": "solid_state_classical_mechanics",
    "discipline": "PHYSICS",
    "name": "Solid-State Classical Mechanics",
    "baseWeight": 4,
    "keywords": [
      "solid",
      "state",
      "classical",
      "mechanics"
    ]
  },
  {
    "id": "optical_classical_mechanics",
    "discipline": "PHYSICS",
    "name": "Optical Classical Mechanics",
    "baseWeight": 4,
    "keywords": [
      "optical",
      "classical",
      "mechanics"
    ]
  },
  {
    "id": "acoustic_classical_mechanics",
    "discipline": "PHYSICS",
    "name": "Acoustic Classical Mechanics",
    "baseWeight": 4,
    "keywords": [
      "acoustic",
      "classical",
      "mechanics"
    ]
  },
  {
    "id": "astrophysical_classical_mechanics",
    "discipline": "PHYSICS",
    "name": "Astrophysical Classical Mechanics",
    "baseWeight": 4,
    "keywords": [
      "astrophysical",
      "classical",
      "mechanics"
    ]
  },
  {
    "id": "nuclear_classical_mechanics",
    "discipline": "PHYSICS",
    "name": "Nuclear Classical Mechanics",
    "baseWeight": 7,
    "keywords": [
      "nuclear",
      "classical",
      "mechanics"
    ]
  },
  {
    "id": "plasma_classical_mechanics",
    "discipline": "PHYSICS",
    "name": "Plasma Classical Mechanics",
    "baseWeight": 4,
    "keywords": [
      "plasma",
      "classical",
      "mechanics"
    ]
  },
  {
    "id": "mathematical_classical_mechanics",
    "discipline": "PHYSICS",
    "name": "Mathematical Classical Mechanics",
    "baseWeight": 4,
    "keywords": [
      "mathematical",
      "classical",
      "mechanics"
    ]
  },
  {
    "id": "non_linear_classical_mechanics",
    "discipline": "PHYSICS",
    "name": "Non-linear Classical Mechanics",
    "baseWeight": 4,
    "keywords": [
      "linear",
      "classical",
      "mechanics"
    ]
  },
  {
    "id": "stochastic_classical_mechanics",
    "discipline": "PHYSICS",
    "name": "Stochastic Classical Mechanics",
    "baseWeight": 4,
    "keywords": [
      "stochastic",
      "classical",
      "mechanics"
    ]
  },
  {
    "id": "thermodynamic_classical_mechanics",
    "discipline": "PHYSICS",
    "name": "Thermodynamic Classical Mechanics",
    "baseWeight": 4,
    "keywords": [
      "thermodynamic",
      "classical",
      "mechanics"
    ]
  },
  {
    "id": "laser_classical_mechanics",
    "discipline": "PHYSICS",
    "name": "Laser Classical Mechanics",
    "baseWeight": 4,
    "keywords": [
      "laser",
      "classical",
      "mechanics"
    ]
  },
  {
    "id": "fluid_classical_mechanics",
    "discipline": "PHYSICS",
    "name": "Fluid Classical Mechanics",
    "baseWeight": 4,
    "keywords": [
      "fluid",
      "classical",
      "mechanics"
    ]
  },
  {
    "id": "particle_classical_mechanics",
    "discipline": "PHYSICS",
    "name": "Particle Classical Mechanics",
    "baseWeight": 4,
    "keywords": [
      "particle",
      "classical",
      "mechanics"
    ]
  },
  {
    "id": "gravitational_classical_mechanics",
    "discipline": "PHYSICS",
    "name": "Gravitational Classical Mechanics",
    "baseWeight": 4,
    "keywords": [
      "gravitational",
      "classical",
      "mechanics"
    ]
  },
  {
    "id": "quantum_gravity_classical_mechanics",
    "discipline": "PHYSICS",
    "name": "Quantum Gravity Classical Mechanics",
    "baseWeight": 7,
    "keywords": [
      "quantum",
      "gravity",
      "classical",
      "mechanics",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "cosmological_classical_mechanics",
    "discipline": "PHYSICS",
    "name": "Cosmological Classical Mechanics",
    "baseWeight": 4,
    "keywords": [
      "cosmological",
      "classical",
      "mechanics"
    ]
  },
  {
    "id": "quantum_electromagnetism",
    "discipline": "PHYSICS",
    "name": "Quantum Electromagnetism",
    "baseWeight": 8,
    "keywords": [
      "quantum",
      "electromagnetism",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "relativistic_electromagnetism",
    "discipline": "PHYSICS",
    "name": "Relativistic Electromagnetism",
    "baseWeight": 8,
    "keywords": [
      "relativistic",
      "electromagnetism",
      "relativity",
      "spacetime",
      "lorentz",
      "einstein",
      "dilated",
      "gravitation"
    ]
  },
  {
    "id": "statistical_electromagnetism",
    "discipline": "PHYSICS",
    "name": "Statistical Electromagnetism",
    "baseWeight": 5,
    "keywords": [
      "statistical",
      "electromagnetism",
      "entropy",
      "probability",
      "ensemble",
      "boltzmann",
      "stochastic"
    ]
  },
  {
    "id": "computational_electromagnetism",
    "discipline": "PHYSICS",
    "name": "Computational Electromagnetism",
    "baseWeight": 6,
    "keywords": [
      "computational",
      "electromagnetism",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico"
    ]
  },
  {
    "id": "theoretical_electromagnetism",
    "discipline": "PHYSICS",
    "name": "Theoretical Electromagnetism",
    "baseWeight": 6,
    "keywords": [
      "theoretical",
      "electromagnetism",
      "mathematical",
      "formalism",
      "derivation",
      "hypothesis"
    ]
  },
  {
    "id": "experimental_electromagnetism",
    "discipline": "PHYSICS",
    "name": "Experimental Electromagnetism",
    "baseWeight": 5,
    "keywords": [
      "experimental",
      "electromagnetism"
    ]
  },
  {
    "id": "applied_electromagnetism",
    "discipline": "PHYSICS",
    "name": "Applied Electromagnetism",
    "baseWeight": 5,
    "keywords": [
      "applied",
      "electromagnetism"
    ]
  },
  {
    "id": "high_energy_electromagnetism",
    "discipline": "PHYSICS",
    "name": "High-Energy Electromagnetism",
    "baseWeight": 5,
    "keywords": [
      "high",
      "energy",
      "electromagnetism",
      "fusion",
      "fission",
      "battery",
      "photovoltaic",
      "grid",
      "power"
    ]
  },
  {
    "id": "condensed_electromagnetism",
    "discipline": "PHYSICS",
    "name": "Condensed Electromagnetism",
    "baseWeight": 5,
    "keywords": [
      "condensed",
      "electromagnetism"
    ]
  },
  {
    "id": "solid_state_electromagnetism",
    "discipline": "PHYSICS",
    "name": "Solid-State Electromagnetism",
    "baseWeight": 5,
    "keywords": [
      "solid",
      "state",
      "electromagnetism"
    ]
  },
  {
    "id": "optical_electromagnetism",
    "discipline": "PHYSICS",
    "name": "Optical Electromagnetism",
    "baseWeight": 5,
    "keywords": [
      "optical",
      "electromagnetism"
    ]
  },
  {
    "id": "acoustic_electromagnetism",
    "discipline": "PHYSICS",
    "name": "Acoustic Electromagnetism",
    "baseWeight": 5,
    "keywords": [
      "acoustic",
      "electromagnetism"
    ]
  },
  {
    "id": "astrophysical_electromagnetism",
    "discipline": "PHYSICS",
    "name": "Astrophysical Electromagnetism",
    "baseWeight": 5,
    "keywords": [
      "astrophysical",
      "electromagnetism"
    ]
  },
  {
    "id": "nuclear_electromagnetism",
    "discipline": "PHYSICS",
    "name": "Nuclear Electromagnetism",
    "baseWeight": 8,
    "keywords": [
      "nuclear",
      "electromagnetism"
    ]
  },
  {
    "id": "plasma_electromagnetism",
    "discipline": "PHYSICS",
    "name": "Plasma Electromagnetism",
    "baseWeight": 5,
    "keywords": [
      "plasma",
      "electromagnetism"
    ]
  },
  {
    "id": "mathematical_electromagnetism",
    "discipline": "PHYSICS",
    "name": "Mathematical Electromagnetism",
    "baseWeight": 5,
    "keywords": [
      "mathematical",
      "electromagnetism"
    ]
  },
  {
    "id": "non_linear_electromagnetism",
    "discipline": "PHYSICS",
    "name": "Non-linear Electromagnetism",
    "baseWeight": 5,
    "keywords": [
      "linear",
      "electromagnetism"
    ]
  },
  {
    "id": "stochastic_electromagnetism",
    "discipline": "PHYSICS",
    "name": "Stochastic Electromagnetism",
    "baseWeight": 5,
    "keywords": [
      "stochastic",
      "electromagnetism"
    ]
  },
  {
    "id": "thermodynamic_electromagnetism",
    "discipline": "PHYSICS",
    "name": "Thermodynamic Electromagnetism",
    "baseWeight": 5,
    "keywords": [
      "thermodynamic",
      "electromagnetism"
    ]
  },
  {
    "id": "laser_electromagnetism",
    "discipline": "PHYSICS",
    "name": "Laser Electromagnetism",
    "baseWeight": 5,
    "keywords": [
      "laser",
      "electromagnetism"
    ]
  },
  {
    "id": "fluid_electromagnetism",
    "discipline": "PHYSICS",
    "name": "Fluid Electromagnetism",
    "baseWeight": 5,
    "keywords": [
      "fluid",
      "electromagnetism"
    ]
  },
  {
    "id": "particle_electromagnetism",
    "discipline": "PHYSICS",
    "name": "Particle Electromagnetism",
    "baseWeight": 5,
    "keywords": [
      "particle",
      "electromagnetism"
    ]
  },
  {
    "id": "gravitational_electromagnetism",
    "discipline": "PHYSICS",
    "name": "Gravitational Electromagnetism",
    "baseWeight": 5,
    "keywords": [
      "gravitational",
      "electromagnetism"
    ]
  },
  {
    "id": "quantum_gravity_electromagnetism",
    "discipline": "PHYSICS",
    "name": "Quantum Gravity Electromagnetism",
    "baseWeight": 8,
    "keywords": [
      "quantum",
      "gravity",
      "electromagnetism",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "cosmological_electromagnetism",
    "discipline": "PHYSICS",
    "name": "Cosmological Electromagnetism",
    "baseWeight": 5,
    "keywords": [
      "cosmological",
      "electromagnetism"
    ]
  },
  {
    "id": "quantum_thermodynamics_statistical_mechanics",
    "discipline": "PHYSICS",
    "name": "Quantum Thermodynamics & Statistical Mechanics",
    "baseWeight": 9,
    "keywords": [
      "quantum",
      "thermodynamics",
      "statistical",
      "mechanics",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence",
      "entropy",
      "probability",
      "ensemble",
      "boltzmann",
      "stochastic"
    ]
  },
  {
    "id": "relativistic_thermodynamics_statistical_mechanics",
    "discipline": "PHYSICS",
    "name": "Relativistic Thermodynamics & Statistical Mechanics",
    "baseWeight": 9,
    "keywords": [
      "relativistic",
      "thermodynamics",
      "statistical",
      "mechanics",
      "relativity",
      "spacetime",
      "lorentz",
      "einstein",
      "dilated",
      "gravitation",
      "entropy",
      "probability",
      "ensemble",
      "boltzmann",
      "stochastic"
    ]
  },
  {
    "id": "statistical_thermodynamics_mechanics",
    "discipline": "PHYSICS",
    "name": "Statistical Thermodynamics & Mechanics",
    "baseWeight": 6,
    "keywords": [
      "statistical",
      "thermodynamics",
      "mechanics",
      "entropy",
      "probability",
      "ensemble",
      "boltzmann",
      "stochastic"
    ]
  },
  {
    "id": "computational_thermodynamics_statistical_mechanics",
    "discipline": "PHYSICS",
    "name": "Computational Thermodynamics & Statistical Mechanics",
    "baseWeight": 7,
    "keywords": [
      "computational",
      "thermodynamics",
      "statistical",
      "mechanics",
      "entropy",
      "probability",
      "ensemble",
      "boltzmann",
      "stochastic",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico"
    ]
  },
  {
    "id": "theoretical_thermodynamics_statistical_mechanics",
    "discipline": "PHYSICS",
    "name": "Theoretical Thermodynamics & Statistical Mechanics",
    "baseWeight": 7,
    "keywords": [
      "theoretical",
      "thermodynamics",
      "statistical",
      "mechanics",
      "entropy",
      "probability",
      "ensemble",
      "boltzmann",
      "stochastic",
      "mathematical",
      "formalism",
      "derivation",
      "hypothesis"
    ]
  },
  {
    "id": "experimental_thermodynamics_statistical_mechanics",
    "discipline": "PHYSICS",
    "name": "Experimental Thermodynamics & Statistical Mechanics",
    "baseWeight": 6,
    "keywords": [
      "experimental",
      "thermodynamics",
      "statistical",
      "mechanics",
      "entropy",
      "probability",
      "ensemble",
      "boltzmann",
      "stochastic"
    ]
  },
  {
    "id": "applied_thermodynamics_statistical_mechanics",
    "discipline": "PHYSICS",
    "name": "Applied Thermodynamics & Statistical Mechanics",
    "baseWeight": 6,
    "keywords": [
      "applied",
      "thermodynamics",
      "statistical",
      "mechanics",
      "entropy",
      "probability",
      "ensemble",
      "boltzmann",
      "stochastic"
    ]
  },
  {
    "id": "high_energy_thermodynamics_statistical_mechanics",
    "discipline": "PHYSICS",
    "name": "High-Energy Thermodynamics & Statistical Mechanics",
    "baseWeight": 6,
    "keywords": [
      "high",
      "energy",
      "thermodynamics",
      "statistical",
      "mechanics",
      "entropy",
      "probability",
      "ensemble",
      "boltzmann",
      "stochastic",
      "fusion",
      "fission",
      "battery",
      "photovoltaic",
      "grid",
      "power"
    ]
  },
  {
    "id": "condensed_thermodynamics_statistical_mechanics",
    "discipline": "PHYSICS",
    "name": "Condensed Thermodynamics & Statistical Mechanics",
    "baseWeight": 6,
    "keywords": [
      "condensed",
      "thermodynamics",
      "statistical",
      "mechanics",
      "entropy",
      "probability",
      "ensemble",
      "boltzmann",
      "stochastic"
    ]
  },
  {
    "id": "solid_state_thermodynamics_statistical_mechanics",
    "discipline": "PHYSICS",
    "name": "Solid-State Thermodynamics & Statistical Mechanics",
    "baseWeight": 6,
    "keywords": [
      "solid",
      "state",
      "thermodynamics",
      "statistical",
      "mechanics",
      "entropy",
      "probability",
      "ensemble",
      "boltzmann",
      "stochastic"
    ]
  },
  {
    "id": "optical_thermodynamics_statistical_mechanics",
    "discipline": "PHYSICS",
    "name": "Optical Thermodynamics & Statistical Mechanics",
    "baseWeight": 6,
    "keywords": [
      "optical",
      "thermodynamics",
      "statistical",
      "mechanics",
      "entropy",
      "probability",
      "ensemble",
      "boltzmann",
      "stochastic"
    ]
  },
  {
    "id": "acoustic_thermodynamics_statistical_mechanics",
    "discipline": "PHYSICS",
    "name": "Acoustic Thermodynamics & Statistical Mechanics",
    "baseWeight": 6,
    "keywords": [
      "acoustic",
      "thermodynamics",
      "statistical",
      "mechanics",
      "entropy",
      "probability",
      "ensemble",
      "boltzmann",
      "stochastic"
    ]
  },
  {
    "id": "astrophysical_thermodynamics_statistical_mechanics",
    "discipline": "PHYSICS",
    "name": "Astrophysical Thermodynamics & Statistical Mechanics",
    "baseWeight": 6,
    "keywords": [
      "astrophysical",
      "thermodynamics",
      "statistical",
      "mechanics",
      "entropy",
      "probability",
      "ensemble",
      "boltzmann",
      "stochastic"
    ]
  },
  {
    "id": "nuclear_thermodynamics_statistical_mechanics",
    "discipline": "PHYSICS",
    "name": "Nuclear Thermodynamics & Statistical Mechanics",
    "baseWeight": 9,
    "keywords": [
      "nuclear",
      "thermodynamics",
      "statistical",
      "mechanics",
      "entropy",
      "probability",
      "ensemble",
      "boltzmann",
      "stochastic"
    ]
  },
  {
    "id": "plasma_thermodynamics_statistical_mechanics",
    "discipline": "PHYSICS",
    "name": "Plasma Thermodynamics & Statistical Mechanics",
    "baseWeight": 6,
    "keywords": [
      "plasma",
      "thermodynamics",
      "statistical",
      "mechanics",
      "entropy",
      "probability",
      "ensemble",
      "boltzmann",
      "stochastic"
    ]
  },
  {
    "id": "mathematical_thermodynamics_statistical_mechanics",
    "discipline": "PHYSICS",
    "name": "Mathematical Thermodynamics & Statistical Mechanics",
    "baseWeight": 6,
    "keywords": [
      "mathematical",
      "thermodynamics",
      "statistical",
      "mechanics",
      "entropy",
      "probability",
      "ensemble",
      "boltzmann",
      "stochastic"
    ]
  },
  {
    "id": "non_linear_thermodynamics_statistical_mechanics",
    "discipline": "PHYSICS",
    "name": "Non-linear Thermodynamics & Statistical Mechanics",
    "baseWeight": 6,
    "keywords": [
      "linear",
      "thermodynamics",
      "statistical",
      "mechanics",
      "entropy",
      "probability",
      "ensemble",
      "boltzmann",
      "stochastic"
    ]
  },
  {
    "id": "stochastic_thermodynamics_statistical_mechanics",
    "discipline": "PHYSICS",
    "name": "Stochastic Thermodynamics & Statistical Mechanics",
    "baseWeight": 6,
    "keywords": [
      "stochastic",
      "thermodynamics",
      "statistical",
      "mechanics",
      "entropy",
      "probability",
      "ensemble",
      "boltzmann"
    ]
  },
  {
    "id": "thermodynamic_thermodynamics_statistical_mechanics",
    "discipline": "PHYSICS",
    "name": "Thermodynamic Thermodynamics & Statistical Mechanics",
    "baseWeight": 6,
    "keywords": [
      "thermodynamic",
      "thermodynamics",
      "statistical",
      "mechanics",
      "entropy",
      "probability",
      "ensemble",
      "boltzmann",
      "stochastic"
    ]
  },
  {
    "id": "laser_thermodynamics_statistical_mechanics",
    "discipline": "PHYSICS",
    "name": "Laser Thermodynamics & Statistical Mechanics",
    "baseWeight": 6,
    "keywords": [
      "laser",
      "thermodynamics",
      "statistical",
      "mechanics",
      "entropy",
      "probability",
      "ensemble",
      "boltzmann",
      "stochastic"
    ]
  },
  {
    "id": "fluid_thermodynamics_statistical_mechanics",
    "discipline": "PHYSICS",
    "name": "Fluid Thermodynamics & Statistical Mechanics",
    "baseWeight": 6,
    "keywords": [
      "fluid",
      "thermodynamics",
      "statistical",
      "mechanics",
      "entropy",
      "probability",
      "ensemble",
      "boltzmann",
      "stochastic"
    ]
  },
  {
    "id": "particle_thermodynamics_statistical_mechanics",
    "discipline": "PHYSICS",
    "name": "Particle Thermodynamics & Statistical Mechanics",
    "baseWeight": 6,
    "keywords": [
      "particle",
      "thermodynamics",
      "statistical",
      "mechanics",
      "entropy",
      "probability",
      "ensemble",
      "boltzmann",
      "stochastic"
    ]
  },
  {
    "id": "gravitational_thermodynamics_statistical_mechanics",
    "discipline": "PHYSICS",
    "name": "Gravitational Thermodynamics & Statistical Mechanics",
    "baseWeight": 6,
    "keywords": [
      "gravitational",
      "thermodynamics",
      "statistical",
      "mechanics",
      "entropy",
      "probability",
      "ensemble",
      "boltzmann",
      "stochastic"
    ]
  },
  {
    "id": "quantum_gravity_thermodynamics_statistical_mechanics",
    "discipline": "PHYSICS",
    "name": "Quantum Gravity Thermodynamics & Statistical Mechanics",
    "baseWeight": 9,
    "keywords": [
      "quantum",
      "gravity",
      "thermodynamics",
      "statistical",
      "mechanics",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence",
      "entropy",
      "probability",
      "ensemble",
      "boltzmann",
      "stochastic"
    ]
  },
  {
    "id": "cosmological_thermodynamics_statistical_mechanics",
    "discipline": "PHYSICS",
    "name": "Cosmological Thermodynamics & Statistical Mechanics",
    "baseWeight": 6,
    "keywords": [
      "cosmological",
      "thermodynamics",
      "statistical",
      "mechanics",
      "entropy",
      "probability",
      "ensemble",
      "boltzmann",
      "stochastic"
    ]
  },
  {
    "id": "quantum_mechanics",
    "discipline": "PHYSICS",
    "name": "Quantum Mechanics",
    "baseWeight": 7,
    "keywords": [
      "quantum",
      "mechanics",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "relativistic_quantum_mechanics",
    "discipline": "PHYSICS",
    "name": "Relativistic Quantum Mechanics",
    "baseWeight": 7,
    "keywords": [
      "relativistic",
      "quantum",
      "mechanics",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence",
      "relativity",
      "spacetime",
      "lorentz",
      "einstein",
      "dilated",
      "gravitation"
    ]
  },
  {
    "id": "statistical_quantum_mechanics",
    "discipline": "PHYSICS",
    "name": "Statistical Quantum Mechanics",
    "baseWeight": 4,
    "keywords": [
      "statistical",
      "quantum",
      "mechanics",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence",
      "entropy",
      "probability",
      "ensemble",
      "boltzmann",
      "stochastic"
    ]
  },
  {
    "id": "computational_quantum_mechanics",
    "discipline": "PHYSICS",
    "name": "Computational Quantum Mechanics",
    "baseWeight": 5,
    "keywords": [
      "computational",
      "quantum",
      "mechanics",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico"
    ]
  },
  {
    "id": "theoretical_quantum_mechanics",
    "discipline": "PHYSICS",
    "name": "Theoretical Quantum Mechanics",
    "baseWeight": 5,
    "keywords": [
      "theoretical",
      "quantum",
      "mechanics",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence",
      "mathematical",
      "formalism",
      "derivation",
      "hypothesis"
    ]
  },
  {
    "id": "experimental_quantum_mechanics",
    "discipline": "PHYSICS",
    "name": "Experimental Quantum Mechanics",
    "baseWeight": 4,
    "keywords": [
      "experimental",
      "quantum",
      "mechanics",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "applied_quantum_mechanics",
    "discipline": "PHYSICS",
    "name": "Applied Quantum Mechanics",
    "baseWeight": 4,
    "keywords": [
      "applied",
      "quantum",
      "mechanics",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "high_energy_quantum_mechanics",
    "discipline": "PHYSICS",
    "name": "High-Energy Quantum Mechanics",
    "baseWeight": 4,
    "keywords": [
      "high",
      "energy",
      "quantum",
      "mechanics",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence",
      "fusion",
      "fission",
      "battery",
      "photovoltaic",
      "grid",
      "power"
    ]
  },
  {
    "id": "condensed_quantum_mechanics",
    "discipline": "PHYSICS",
    "name": "Condensed Quantum Mechanics",
    "baseWeight": 4,
    "keywords": [
      "condensed",
      "quantum",
      "mechanics",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "solid_state_quantum_mechanics",
    "discipline": "PHYSICS",
    "name": "Solid-State Quantum Mechanics",
    "baseWeight": 4,
    "keywords": [
      "solid",
      "state",
      "quantum",
      "mechanics",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "optical_quantum_mechanics",
    "discipline": "PHYSICS",
    "name": "Optical Quantum Mechanics",
    "baseWeight": 4,
    "keywords": [
      "optical",
      "quantum",
      "mechanics",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "acoustic_quantum_mechanics",
    "discipline": "PHYSICS",
    "name": "Acoustic Quantum Mechanics",
    "baseWeight": 4,
    "keywords": [
      "acoustic",
      "quantum",
      "mechanics",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "astrophysical_quantum_mechanics",
    "discipline": "PHYSICS",
    "name": "Astrophysical Quantum Mechanics",
    "baseWeight": 4,
    "keywords": [
      "astrophysical",
      "quantum",
      "mechanics",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "nuclear_quantum_mechanics",
    "discipline": "PHYSICS",
    "name": "Nuclear Quantum Mechanics",
    "baseWeight": 7,
    "keywords": [
      "nuclear",
      "quantum",
      "mechanics",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "plasma_quantum_mechanics",
    "discipline": "PHYSICS",
    "name": "Plasma Quantum Mechanics",
    "baseWeight": 4,
    "keywords": [
      "plasma",
      "quantum",
      "mechanics",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "mathematical_quantum_mechanics",
    "discipline": "PHYSICS",
    "name": "Mathematical Quantum Mechanics",
    "baseWeight": 4,
    "keywords": [
      "mathematical",
      "quantum",
      "mechanics",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "non_linear_quantum_mechanics",
    "discipline": "PHYSICS",
    "name": "Non-linear Quantum Mechanics",
    "baseWeight": 4,
    "keywords": [
      "linear",
      "quantum",
      "mechanics",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "stochastic_quantum_mechanics",
    "discipline": "PHYSICS",
    "name": "Stochastic Quantum Mechanics",
    "baseWeight": 4,
    "keywords": [
      "stochastic",
      "quantum",
      "mechanics",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "thermodynamic_quantum_mechanics",
    "discipline": "PHYSICS",
    "name": "Thermodynamic Quantum Mechanics",
    "baseWeight": 4,
    "keywords": [
      "thermodynamic",
      "quantum",
      "mechanics",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "laser_quantum_mechanics",
    "discipline": "PHYSICS",
    "name": "Laser Quantum Mechanics",
    "baseWeight": 4,
    "keywords": [
      "laser",
      "quantum",
      "mechanics",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "fluid_quantum_mechanics",
    "discipline": "PHYSICS",
    "name": "Fluid Quantum Mechanics",
    "baseWeight": 4,
    "keywords": [
      "fluid",
      "quantum",
      "mechanics",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "particle_quantum_mechanics",
    "discipline": "PHYSICS",
    "name": "Particle Quantum Mechanics",
    "baseWeight": 4,
    "keywords": [
      "particle",
      "quantum",
      "mechanics",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "gravitational_quantum_mechanics",
    "discipline": "PHYSICS",
    "name": "Gravitational Quantum Mechanics",
    "baseWeight": 4,
    "keywords": [
      "gravitational",
      "quantum",
      "mechanics",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "quantum_gravity_mechanics",
    "discipline": "PHYSICS",
    "name": "Quantum Gravity Mechanics",
    "baseWeight": 7,
    "keywords": [
      "quantum",
      "gravity",
      "mechanics",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "cosmological_quantum_mechanics",
    "discipline": "PHYSICS",
    "name": "Cosmological Quantum Mechanics",
    "baseWeight": 4,
    "keywords": [
      "cosmological",
      "quantum",
      "mechanics",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "quantum_relativity_gravitation",
    "discipline": "PHYSICS",
    "name": "Quantum Relativity & Gravitation",
    "baseWeight": 8,
    "keywords": [
      "quantum",
      "relativity",
      "gravitation",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "relativistic_relativity_gravitation",
    "discipline": "PHYSICS",
    "name": "Relativistic Relativity & Gravitation",
    "baseWeight": 8,
    "keywords": [
      "relativistic",
      "relativity",
      "gravitation",
      "spacetime",
      "lorentz",
      "einstein",
      "dilated"
    ]
  },
  {
    "id": "statistical_relativity_gravitation",
    "discipline": "PHYSICS",
    "name": "Statistical Relativity & Gravitation",
    "baseWeight": 5,
    "keywords": [
      "statistical",
      "relativity",
      "gravitation",
      "entropy",
      "probability",
      "ensemble",
      "boltzmann",
      "stochastic"
    ]
  },
  {
    "id": "computational_relativity_gravitation",
    "discipline": "PHYSICS",
    "name": "Computational Relativity & Gravitation",
    "baseWeight": 6,
    "keywords": [
      "computational",
      "relativity",
      "gravitation",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico"
    ]
  },
  {
    "id": "theoretical_relativity_gravitation",
    "discipline": "PHYSICS",
    "name": "Theoretical Relativity & Gravitation",
    "baseWeight": 6,
    "keywords": [
      "theoretical",
      "relativity",
      "gravitation",
      "mathematical",
      "formalism",
      "derivation",
      "hypothesis"
    ]
  },
  {
    "id": "experimental_relativity_gravitation",
    "discipline": "PHYSICS",
    "name": "Experimental Relativity & Gravitation",
    "baseWeight": 5,
    "keywords": [
      "experimental",
      "relativity",
      "gravitation"
    ]
  },
  {
    "id": "applied_relativity_gravitation",
    "discipline": "PHYSICS",
    "name": "Applied Relativity & Gravitation",
    "baseWeight": 5,
    "keywords": [
      "applied",
      "relativity",
      "gravitation"
    ]
  },
  {
    "id": "high_energy_relativity_gravitation",
    "discipline": "PHYSICS",
    "name": "High-Energy Relativity & Gravitation",
    "baseWeight": 5,
    "keywords": [
      "high",
      "energy",
      "relativity",
      "gravitation",
      "fusion",
      "fission",
      "battery",
      "photovoltaic",
      "grid",
      "power"
    ]
  },
  {
    "id": "condensed_relativity_gravitation",
    "discipline": "PHYSICS",
    "name": "Condensed Relativity & Gravitation",
    "baseWeight": 5,
    "keywords": [
      "condensed",
      "relativity",
      "gravitation"
    ]
  },
  {
    "id": "solid_state_relativity_gravitation",
    "discipline": "PHYSICS",
    "name": "Solid-State Relativity & Gravitation",
    "baseWeight": 5,
    "keywords": [
      "solid",
      "state",
      "relativity",
      "gravitation"
    ]
  },
  {
    "id": "optical_relativity_gravitation",
    "discipline": "PHYSICS",
    "name": "Optical Relativity & Gravitation",
    "baseWeight": 5,
    "keywords": [
      "optical",
      "relativity",
      "gravitation"
    ]
  },
  {
    "id": "acoustic_relativity_gravitation",
    "discipline": "PHYSICS",
    "name": "Acoustic Relativity & Gravitation",
    "baseWeight": 5,
    "keywords": [
      "acoustic",
      "relativity",
      "gravitation"
    ]
  },
  {
    "id": "astrophysical_relativity_gravitation",
    "discipline": "PHYSICS",
    "name": "Astrophysical Relativity & Gravitation",
    "baseWeight": 5,
    "keywords": [
      "astrophysical",
      "relativity",
      "gravitation"
    ]
  },
  {
    "id": "nuclear_relativity_gravitation",
    "discipline": "PHYSICS",
    "name": "Nuclear Relativity & Gravitation",
    "baseWeight": 8,
    "keywords": [
      "nuclear",
      "relativity",
      "gravitation"
    ]
  },
  {
    "id": "plasma_relativity_gravitation",
    "discipline": "PHYSICS",
    "name": "Plasma Relativity & Gravitation",
    "baseWeight": 5,
    "keywords": [
      "plasma",
      "relativity",
      "gravitation"
    ]
  },
  {
    "id": "mathematical_relativity_gravitation",
    "discipline": "PHYSICS",
    "name": "Mathematical Relativity & Gravitation",
    "baseWeight": 5,
    "keywords": [
      "mathematical",
      "relativity",
      "gravitation"
    ]
  },
  {
    "id": "non_linear_relativity_gravitation",
    "discipline": "PHYSICS",
    "name": "Non-linear Relativity & Gravitation",
    "baseWeight": 5,
    "keywords": [
      "linear",
      "relativity",
      "gravitation"
    ]
  },
  {
    "id": "stochastic_relativity_gravitation",
    "discipline": "PHYSICS",
    "name": "Stochastic Relativity & Gravitation",
    "baseWeight": 5,
    "keywords": [
      "stochastic",
      "relativity",
      "gravitation"
    ]
  },
  {
    "id": "thermodynamic_relativity_gravitation",
    "discipline": "PHYSICS",
    "name": "Thermodynamic Relativity & Gravitation",
    "baseWeight": 5,
    "keywords": [
      "thermodynamic",
      "relativity",
      "gravitation"
    ]
  },
  {
    "id": "laser_relativity_gravitation",
    "discipline": "PHYSICS",
    "name": "Laser Relativity & Gravitation",
    "baseWeight": 5,
    "keywords": [
      "laser",
      "relativity",
      "gravitation"
    ]
  },
  {
    "id": "fluid_relativity_gravitation",
    "discipline": "PHYSICS",
    "name": "Fluid Relativity & Gravitation",
    "baseWeight": 5,
    "keywords": [
      "fluid",
      "relativity",
      "gravitation"
    ]
  },
  {
    "id": "particle_relativity_gravitation",
    "discipline": "PHYSICS",
    "name": "Particle Relativity & Gravitation",
    "baseWeight": 5,
    "keywords": [
      "particle",
      "relativity",
      "gravitation"
    ]
  },
  {
    "id": "gravitational_relativity_gravitation",
    "discipline": "PHYSICS",
    "name": "Gravitational Relativity & Gravitation",
    "baseWeight": 5,
    "keywords": [
      "gravitational",
      "relativity",
      "gravitation"
    ]
  },
  {
    "id": "quantum_gravity_relativity_gravitation",
    "discipline": "PHYSICS",
    "name": "Quantum Gravity Relativity & Gravitation",
    "baseWeight": 8,
    "keywords": [
      "quantum",
      "gravity",
      "relativity",
      "gravitation",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "cosmological_relativity_gravitation",
    "discipline": "PHYSICS",
    "name": "Cosmological Relativity & Gravitation",
    "baseWeight": 5,
    "keywords": [
      "cosmological",
      "relativity",
      "gravitation"
    ]
  },
  {
    "id": "quantum_particle_physics",
    "discipline": "PHYSICS",
    "name": "Quantum Particle Physics",
    "baseWeight": 9,
    "keywords": [
      "quantum",
      "particle",
      "physics",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "relativistic_particle_physics",
    "discipline": "PHYSICS",
    "name": "Relativistic Particle Physics",
    "baseWeight": 9,
    "keywords": [
      "relativistic",
      "particle",
      "physics",
      "relativity",
      "spacetime",
      "lorentz",
      "einstein",
      "dilated",
      "gravitation"
    ]
  },
  {
    "id": "statistical_particle_physics",
    "discipline": "PHYSICS",
    "name": "Statistical Particle Physics",
    "baseWeight": 6,
    "keywords": [
      "statistical",
      "particle",
      "physics",
      "entropy",
      "probability",
      "ensemble",
      "boltzmann",
      "stochastic"
    ]
  },
  {
    "id": "computational_particle_physics",
    "discipline": "PHYSICS",
    "name": "Computational Particle Physics",
    "baseWeight": 7,
    "keywords": [
      "computational",
      "particle",
      "physics",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico"
    ]
  },
  {
    "id": "theoretical_particle_physics",
    "discipline": "PHYSICS",
    "name": "Theoretical Particle Physics",
    "baseWeight": 7,
    "keywords": [
      "theoretical",
      "particle",
      "physics",
      "mathematical",
      "formalism",
      "derivation",
      "hypothesis"
    ]
  },
  {
    "id": "experimental_particle_physics",
    "discipline": "PHYSICS",
    "name": "Experimental Particle Physics",
    "baseWeight": 6,
    "keywords": [
      "experimental",
      "particle",
      "physics"
    ]
  },
  {
    "id": "applied_particle_physics",
    "discipline": "PHYSICS",
    "name": "Applied Particle Physics",
    "baseWeight": 6,
    "keywords": [
      "applied",
      "particle",
      "physics"
    ]
  },
  {
    "id": "high_energy_particle_physics",
    "discipline": "PHYSICS",
    "name": "High-Energy Particle Physics",
    "baseWeight": 6,
    "keywords": [
      "high",
      "energy",
      "particle",
      "physics",
      "fusion",
      "fission",
      "battery",
      "photovoltaic",
      "grid",
      "power"
    ]
  },
  {
    "id": "condensed_particle_physics",
    "discipline": "PHYSICS",
    "name": "Condensed Particle Physics",
    "baseWeight": 6,
    "keywords": [
      "condensed",
      "particle",
      "physics"
    ]
  },
  {
    "id": "solid_state_particle_physics",
    "discipline": "PHYSICS",
    "name": "Solid-State Particle Physics",
    "baseWeight": 6,
    "keywords": [
      "solid",
      "state",
      "particle",
      "physics"
    ]
  },
  {
    "id": "optical_particle_physics",
    "discipline": "PHYSICS",
    "name": "Optical Particle Physics",
    "baseWeight": 6,
    "keywords": [
      "optical",
      "particle",
      "physics"
    ]
  },
  {
    "id": "acoustic_particle_physics",
    "discipline": "PHYSICS",
    "name": "Acoustic Particle Physics",
    "baseWeight": 6,
    "keywords": [
      "acoustic",
      "particle",
      "physics"
    ]
  },
  {
    "id": "astrophysical_particle_physics",
    "discipline": "PHYSICS",
    "name": "Astrophysical Particle Physics",
    "baseWeight": 6,
    "keywords": [
      "astrophysical",
      "particle",
      "physics"
    ]
  },
  {
    "id": "nuclear_particle_physics",
    "discipline": "PHYSICS",
    "name": "Nuclear Particle Physics",
    "baseWeight": 9,
    "keywords": [
      "nuclear",
      "particle",
      "physics"
    ]
  },
  {
    "id": "plasma_particle_physics",
    "discipline": "PHYSICS",
    "name": "Plasma Particle Physics",
    "baseWeight": 6,
    "keywords": [
      "plasma",
      "particle",
      "physics"
    ]
  },
  {
    "id": "mathematical_particle_physics",
    "discipline": "PHYSICS",
    "name": "Mathematical Particle Physics",
    "baseWeight": 6,
    "keywords": [
      "mathematical",
      "particle",
      "physics"
    ]
  },
  {
    "id": "non_linear_particle_physics",
    "discipline": "PHYSICS",
    "name": "Non-linear Particle Physics",
    "baseWeight": 6,
    "keywords": [
      "linear",
      "particle",
      "physics"
    ]
  },
  {
    "id": "stochastic_particle_physics",
    "discipline": "PHYSICS",
    "name": "Stochastic Particle Physics",
    "baseWeight": 6,
    "keywords": [
      "stochastic",
      "particle",
      "physics"
    ]
  },
  {
    "id": "thermodynamic_particle_physics",
    "discipline": "PHYSICS",
    "name": "Thermodynamic Particle Physics",
    "baseWeight": 6,
    "keywords": [
      "thermodynamic",
      "particle",
      "physics"
    ]
  },
  {
    "id": "laser_particle_physics",
    "discipline": "PHYSICS",
    "name": "Laser Particle Physics",
    "baseWeight": 6,
    "keywords": [
      "laser",
      "particle",
      "physics"
    ]
  },
  {
    "id": "fluid_particle_physics",
    "discipline": "PHYSICS",
    "name": "Fluid Particle Physics",
    "baseWeight": 6,
    "keywords": [
      "fluid",
      "particle",
      "physics"
    ]
  },
  {
    "id": "particle_physics",
    "discipline": "PHYSICS",
    "name": "Particle Physics",
    "baseWeight": 6,
    "keywords": [
      "particle",
      "physics"
    ]
  },
  {
    "id": "gravitational_particle_physics",
    "discipline": "PHYSICS",
    "name": "Gravitational Particle Physics",
    "baseWeight": 6,
    "keywords": [
      "gravitational",
      "particle",
      "physics"
    ]
  },
  {
    "id": "quantum_gravity_particle_physics",
    "discipline": "PHYSICS",
    "name": "Quantum Gravity Particle Physics",
    "baseWeight": 9,
    "keywords": [
      "quantum",
      "gravity",
      "particle",
      "physics",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "cosmological_particle_physics",
    "discipline": "PHYSICS",
    "name": "Cosmological Particle Physics",
    "baseWeight": 6,
    "keywords": [
      "cosmological",
      "particle",
      "physics"
    ]
  },
  {
    "id": "quantum_nuclear_physics",
    "discipline": "PHYSICS",
    "name": "Quantum Nuclear Physics",
    "baseWeight": 7,
    "keywords": [
      "quantum",
      "nuclear",
      "physics",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "relativistic_nuclear_physics",
    "discipline": "PHYSICS",
    "name": "Relativistic Nuclear Physics",
    "baseWeight": 7,
    "keywords": [
      "relativistic",
      "nuclear",
      "physics",
      "relativity",
      "spacetime",
      "lorentz",
      "einstein",
      "dilated",
      "gravitation"
    ]
  },
  {
    "id": "statistical_nuclear_physics",
    "discipline": "PHYSICS",
    "name": "Statistical Nuclear Physics",
    "baseWeight": 4,
    "keywords": [
      "statistical",
      "nuclear",
      "physics",
      "entropy",
      "probability",
      "ensemble",
      "boltzmann",
      "stochastic"
    ]
  },
  {
    "id": "computational_nuclear_physics",
    "discipline": "PHYSICS",
    "name": "Computational Nuclear Physics",
    "baseWeight": 5,
    "keywords": [
      "computational",
      "nuclear",
      "physics",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico"
    ]
  },
  {
    "id": "theoretical_nuclear_physics",
    "discipline": "PHYSICS",
    "name": "Theoretical Nuclear Physics",
    "baseWeight": 5,
    "keywords": [
      "theoretical",
      "nuclear",
      "physics",
      "mathematical",
      "formalism",
      "derivation",
      "hypothesis"
    ]
  },
  {
    "id": "experimental_nuclear_physics",
    "discipline": "PHYSICS",
    "name": "Experimental Nuclear Physics",
    "baseWeight": 4,
    "keywords": [
      "experimental",
      "nuclear",
      "physics"
    ]
  },
  {
    "id": "applied_nuclear_physics",
    "discipline": "PHYSICS",
    "name": "Applied Nuclear Physics",
    "baseWeight": 4,
    "keywords": [
      "applied",
      "nuclear",
      "physics"
    ]
  },
  {
    "id": "high_energy_nuclear_physics",
    "discipline": "PHYSICS",
    "name": "High-Energy Nuclear Physics",
    "baseWeight": 4,
    "keywords": [
      "high",
      "energy",
      "nuclear",
      "physics",
      "fusion",
      "fission",
      "battery",
      "photovoltaic",
      "grid",
      "power"
    ]
  },
  {
    "id": "condensed_nuclear_physics",
    "discipline": "PHYSICS",
    "name": "Condensed Nuclear Physics",
    "baseWeight": 4,
    "keywords": [
      "condensed",
      "nuclear",
      "physics"
    ]
  },
  {
    "id": "solid_state_nuclear_physics",
    "discipline": "PHYSICS",
    "name": "Solid-State Nuclear Physics",
    "baseWeight": 4,
    "keywords": [
      "solid",
      "state",
      "nuclear",
      "physics"
    ]
  },
  {
    "id": "optical_nuclear_physics",
    "discipline": "PHYSICS",
    "name": "Optical Nuclear Physics",
    "baseWeight": 4,
    "keywords": [
      "optical",
      "nuclear",
      "physics"
    ]
  },
  {
    "id": "acoustic_nuclear_physics",
    "discipline": "PHYSICS",
    "name": "Acoustic Nuclear Physics",
    "baseWeight": 4,
    "keywords": [
      "acoustic",
      "nuclear",
      "physics"
    ]
  },
  {
    "id": "astrophysical_nuclear_physics",
    "discipline": "PHYSICS",
    "name": "Astrophysical Nuclear Physics",
    "baseWeight": 4,
    "keywords": [
      "astrophysical",
      "nuclear",
      "physics"
    ]
  },
  {
    "id": "nuclear_physics",
    "discipline": "PHYSICS",
    "name": "Nuclear Physics",
    "baseWeight": 7,
    "keywords": [
      "nuclear",
      "physics"
    ]
  },
  {
    "id": "plasma_nuclear_physics",
    "discipline": "PHYSICS",
    "name": "Plasma Nuclear Physics",
    "baseWeight": 4,
    "keywords": [
      "plasma",
      "nuclear",
      "physics"
    ]
  },
  {
    "id": "mathematical_nuclear_physics",
    "discipline": "PHYSICS",
    "name": "Mathematical Nuclear Physics",
    "baseWeight": 4,
    "keywords": [
      "mathematical",
      "nuclear",
      "physics"
    ]
  },
  {
    "id": "non_linear_nuclear_physics",
    "discipline": "PHYSICS",
    "name": "Non-linear Nuclear Physics",
    "baseWeight": 4,
    "keywords": [
      "linear",
      "nuclear",
      "physics"
    ]
  },
  {
    "id": "stochastic_nuclear_physics",
    "discipline": "PHYSICS",
    "name": "Stochastic Nuclear Physics",
    "baseWeight": 4,
    "keywords": [
      "stochastic",
      "nuclear",
      "physics"
    ]
  },
  {
    "id": "thermodynamic_nuclear_physics",
    "discipline": "PHYSICS",
    "name": "Thermodynamic Nuclear Physics",
    "baseWeight": 4,
    "keywords": [
      "thermodynamic",
      "nuclear",
      "physics"
    ]
  },
  {
    "id": "laser_nuclear_physics",
    "discipline": "PHYSICS",
    "name": "Laser Nuclear Physics",
    "baseWeight": 4,
    "keywords": [
      "laser",
      "nuclear",
      "physics"
    ]
  },
  {
    "id": "fluid_nuclear_physics",
    "discipline": "PHYSICS",
    "name": "Fluid Nuclear Physics",
    "baseWeight": 4,
    "keywords": [
      "fluid",
      "nuclear",
      "physics"
    ]
  },
  {
    "id": "particle_nuclear_physics",
    "discipline": "PHYSICS",
    "name": "Particle Nuclear Physics",
    "baseWeight": 4,
    "keywords": [
      "particle",
      "nuclear",
      "physics"
    ]
  },
  {
    "id": "gravitational_nuclear_physics",
    "discipline": "PHYSICS",
    "name": "Gravitational Nuclear Physics",
    "baseWeight": 4,
    "keywords": [
      "gravitational",
      "nuclear",
      "physics"
    ]
  },
  {
    "id": "quantum_gravity_nuclear_physics",
    "discipline": "PHYSICS",
    "name": "Quantum Gravity Nuclear Physics",
    "baseWeight": 7,
    "keywords": [
      "quantum",
      "gravity",
      "nuclear",
      "physics",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "cosmological_nuclear_physics",
    "discipline": "PHYSICS",
    "name": "Cosmological Nuclear Physics",
    "baseWeight": 4,
    "keywords": [
      "cosmological",
      "nuclear",
      "physics"
    ]
  },
  {
    "id": "quantum_atomic_molecular_physics",
    "discipline": "PHYSICS",
    "name": "Quantum Atomic & Molecular Physics",
    "baseWeight": 8,
    "keywords": [
      "quantum",
      "atomic",
      "molecular",
      "physics",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "relativistic_atomic_molecular_physics",
    "discipline": "PHYSICS",
    "name": "Relativistic Atomic & Molecular Physics",
    "baseWeight": 8,
    "keywords": [
      "relativistic",
      "atomic",
      "molecular",
      "physics",
      "relativity",
      "spacetime",
      "lorentz",
      "einstein",
      "dilated",
      "gravitation"
    ]
  },
  {
    "id": "statistical_atomic_molecular_physics",
    "discipline": "PHYSICS",
    "name": "Statistical Atomic & Molecular Physics",
    "baseWeight": 5,
    "keywords": [
      "statistical",
      "atomic",
      "molecular",
      "physics",
      "entropy",
      "probability",
      "ensemble",
      "boltzmann",
      "stochastic"
    ]
  },
  {
    "id": "computational_atomic_molecular_physics",
    "discipline": "PHYSICS",
    "name": "Computational Atomic & Molecular Physics",
    "baseWeight": 6,
    "keywords": [
      "computational",
      "atomic",
      "molecular",
      "physics",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico"
    ]
  },
  {
    "id": "theoretical_atomic_molecular_physics",
    "discipline": "PHYSICS",
    "name": "Theoretical Atomic & Molecular Physics",
    "baseWeight": 6,
    "keywords": [
      "theoretical",
      "atomic",
      "molecular",
      "physics",
      "mathematical",
      "formalism",
      "derivation",
      "hypothesis"
    ]
  },
  {
    "id": "experimental_atomic_molecular_physics",
    "discipline": "PHYSICS",
    "name": "Experimental Atomic & Molecular Physics",
    "baseWeight": 5,
    "keywords": [
      "experimental",
      "atomic",
      "molecular",
      "physics"
    ]
  },
  {
    "id": "applied_atomic_molecular_physics",
    "discipline": "PHYSICS",
    "name": "Applied Atomic & Molecular Physics",
    "baseWeight": 5,
    "keywords": [
      "applied",
      "atomic",
      "molecular",
      "physics"
    ]
  },
  {
    "id": "high_energy_atomic_molecular_physics",
    "discipline": "PHYSICS",
    "name": "High-Energy Atomic & Molecular Physics",
    "baseWeight": 5,
    "keywords": [
      "high",
      "energy",
      "atomic",
      "molecular",
      "physics",
      "fusion",
      "fission",
      "battery",
      "photovoltaic",
      "grid",
      "power"
    ]
  },
  {
    "id": "condensed_atomic_molecular_physics",
    "discipline": "PHYSICS",
    "name": "Condensed Atomic & Molecular Physics",
    "baseWeight": 5,
    "keywords": [
      "condensed",
      "atomic",
      "molecular",
      "physics"
    ]
  },
  {
    "id": "solid_state_atomic_molecular_physics",
    "discipline": "PHYSICS",
    "name": "Solid-State Atomic & Molecular Physics",
    "baseWeight": 5,
    "keywords": [
      "solid",
      "state",
      "atomic",
      "molecular",
      "physics"
    ]
  },
  {
    "id": "optical_atomic_molecular_physics",
    "discipline": "PHYSICS",
    "name": "Optical Atomic & Molecular Physics",
    "baseWeight": 5,
    "keywords": [
      "optical",
      "atomic",
      "molecular",
      "physics"
    ]
  },
  {
    "id": "acoustic_atomic_molecular_physics",
    "discipline": "PHYSICS",
    "name": "Acoustic Atomic & Molecular Physics",
    "baseWeight": 5,
    "keywords": [
      "acoustic",
      "atomic",
      "molecular",
      "physics"
    ]
  },
  {
    "id": "astrophysical_atomic_molecular_physics",
    "discipline": "PHYSICS",
    "name": "Astrophysical Atomic & Molecular Physics",
    "baseWeight": 5,
    "keywords": [
      "astrophysical",
      "atomic",
      "molecular",
      "physics"
    ]
  },
  {
    "id": "nuclear_atomic_molecular_physics",
    "discipline": "PHYSICS",
    "name": "Nuclear Atomic & Molecular Physics",
    "baseWeight": 8,
    "keywords": [
      "nuclear",
      "atomic",
      "molecular",
      "physics"
    ]
  },
  {
    "id": "plasma_atomic_molecular_physics",
    "discipline": "PHYSICS",
    "name": "Plasma Atomic & Molecular Physics",
    "baseWeight": 5,
    "keywords": [
      "plasma",
      "atomic",
      "molecular",
      "physics"
    ]
  },
  {
    "id": "mathematical_atomic_molecular_physics",
    "discipline": "PHYSICS",
    "name": "Mathematical Atomic & Molecular Physics",
    "baseWeight": 5,
    "keywords": [
      "mathematical",
      "atomic",
      "molecular",
      "physics"
    ]
  },
  {
    "id": "non_linear_atomic_molecular_physics",
    "discipline": "PHYSICS",
    "name": "Non-linear Atomic & Molecular Physics",
    "baseWeight": 5,
    "keywords": [
      "linear",
      "atomic",
      "molecular",
      "physics"
    ]
  },
  {
    "id": "stochastic_atomic_molecular_physics",
    "discipline": "PHYSICS",
    "name": "Stochastic Atomic & Molecular Physics",
    "baseWeight": 5,
    "keywords": [
      "stochastic",
      "atomic",
      "molecular",
      "physics"
    ]
  },
  {
    "id": "thermodynamic_atomic_molecular_physics",
    "discipline": "PHYSICS",
    "name": "Thermodynamic Atomic & Molecular Physics",
    "baseWeight": 5,
    "keywords": [
      "thermodynamic",
      "atomic",
      "molecular",
      "physics"
    ]
  },
  {
    "id": "laser_atomic_molecular_physics",
    "discipline": "PHYSICS",
    "name": "Laser Atomic & Molecular Physics",
    "baseWeight": 5,
    "keywords": [
      "laser",
      "atomic",
      "molecular",
      "physics"
    ]
  },
  {
    "id": "fluid_atomic_molecular_physics",
    "discipline": "PHYSICS",
    "name": "Fluid Atomic & Molecular Physics",
    "baseWeight": 5,
    "keywords": [
      "fluid",
      "atomic",
      "molecular",
      "physics"
    ]
  },
  {
    "id": "particle_atomic_molecular_physics",
    "discipline": "PHYSICS",
    "name": "Particle Atomic & Molecular Physics",
    "baseWeight": 5,
    "keywords": [
      "particle",
      "atomic",
      "molecular",
      "physics"
    ]
  },
  {
    "id": "gravitational_atomic_molecular_physics",
    "discipline": "PHYSICS",
    "name": "Gravitational Atomic & Molecular Physics",
    "baseWeight": 5,
    "keywords": [
      "gravitational",
      "atomic",
      "molecular",
      "physics"
    ]
  },
  {
    "id": "quantum_gravity_atomic_molecular_physics",
    "discipline": "PHYSICS",
    "name": "Quantum Gravity Atomic & Molecular Physics",
    "baseWeight": 8,
    "keywords": [
      "quantum",
      "gravity",
      "atomic",
      "molecular",
      "physics",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "cosmological_atomic_molecular_physics",
    "discipline": "PHYSICS",
    "name": "Cosmological Atomic & Molecular Physics",
    "baseWeight": 5,
    "keywords": [
      "cosmological",
      "atomic",
      "molecular",
      "physics"
    ]
  },
  {
    "id": "quantum_condensed_matter_physics",
    "discipline": "PHYSICS",
    "name": "Quantum Condensed Matter Physics",
    "baseWeight": 9,
    "keywords": [
      "quantum",
      "condensed",
      "matter",
      "physics",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "relativistic_condensed_matter_physics",
    "discipline": "PHYSICS",
    "name": "Relativistic Condensed Matter Physics",
    "baseWeight": 9,
    "keywords": [
      "relativistic",
      "condensed",
      "matter",
      "physics",
      "relativity",
      "spacetime",
      "lorentz",
      "einstein",
      "dilated",
      "gravitation"
    ]
  },
  {
    "id": "statistical_condensed_matter_physics",
    "discipline": "PHYSICS",
    "name": "Statistical Condensed Matter Physics",
    "baseWeight": 6,
    "keywords": [
      "statistical",
      "condensed",
      "matter",
      "physics",
      "entropy",
      "probability",
      "ensemble",
      "boltzmann",
      "stochastic"
    ]
  },
  {
    "id": "computational_condensed_matter_physics",
    "discipline": "PHYSICS",
    "name": "Computational Condensed Matter Physics",
    "baseWeight": 7,
    "keywords": [
      "computational",
      "condensed",
      "matter",
      "physics",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico"
    ]
  },
  {
    "id": "theoretical_condensed_matter_physics",
    "discipline": "PHYSICS",
    "name": "Theoretical Condensed Matter Physics",
    "baseWeight": 7,
    "keywords": [
      "theoretical",
      "condensed",
      "matter",
      "physics",
      "mathematical",
      "formalism",
      "derivation",
      "hypothesis"
    ]
  },
  {
    "id": "experimental_condensed_matter_physics",
    "discipline": "PHYSICS",
    "name": "Experimental Condensed Matter Physics",
    "baseWeight": 6,
    "keywords": [
      "experimental",
      "condensed",
      "matter",
      "physics"
    ]
  },
  {
    "id": "applied_condensed_matter_physics",
    "discipline": "PHYSICS",
    "name": "Applied Condensed Matter Physics",
    "baseWeight": 6,
    "keywords": [
      "applied",
      "condensed",
      "matter",
      "physics"
    ]
  },
  {
    "id": "high_energy_condensed_matter_physics",
    "discipline": "PHYSICS",
    "name": "High-Energy Condensed Matter Physics",
    "baseWeight": 6,
    "keywords": [
      "high",
      "energy",
      "condensed",
      "matter",
      "physics",
      "fusion",
      "fission",
      "battery",
      "photovoltaic",
      "grid",
      "power"
    ]
  },
  {
    "id": "condensed_matter_physics",
    "discipline": "PHYSICS",
    "name": "Condensed Matter Physics",
    "baseWeight": 6,
    "keywords": [
      "condensed",
      "matter",
      "physics"
    ]
  },
  {
    "id": "solid_state_condensed_matter_physics",
    "discipline": "PHYSICS",
    "name": "Solid-State Condensed Matter Physics",
    "baseWeight": 6,
    "keywords": [
      "solid",
      "state",
      "condensed",
      "matter",
      "physics"
    ]
  },
  {
    "id": "optical_condensed_matter_physics",
    "discipline": "PHYSICS",
    "name": "Optical Condensed Matter Physics",
    "baseWeight": 6,
    "keywords": [
      "optical",
      "condensed",
      "matter",
      "physics"
    ]
  },
  {
    "id": "acoustic_condensed_matter_physics",
    "discipline": "PHYSICS",
    "name": "Acoustic Condensed Matter Physics",
    "baseWeight": 6,
    "keywords": [
      "acoustic",
      "condensed",
      "matter",
      "physics"
    ]
  },
  {
    "id": "astrophysical_condensed_matter_physics",
    "discipline": "PHYSICS",
    "name": "Astrophysical Condensed Matter Physics",
    "baseWeight": 6,
    "keywords": [
      "astrophysical",
      "condensed",
      "matter",
      "physics"
    ]
  },
  {
    "id": "nuclear_condensed_matter_physics",
    "discipline": "PHYSICS",
    "name": "Nuclear Condensed Matter Physics",
    "baseWeight": 9,
    "keywords": [
      "nuclear",
      "condensed",
      "matter",
      "physics"
    ]
  },
  {
    "id": "plasma_condensed_matter_physics",
    "discipline": "PHYSICS",
    "name": "Plasma Condensed Matter Physics",
    "baseWeight": 6,
    "keywords": [
      "plasma",
      "condensed",
      "matter",
      "physics"
    ]
  },
  {
    "id": "mathematical_condensed_matter_physics",
    "discipline": "PHYSICS",
    "name": "Mathematical Condensed Matter Physics",
    "baseWeight": 6,
    "keywords": [
      "mathematical",
      "condensed",
      "matter",
      "physics"
    ]
  },
  {
    "id": "non_linear_condensed_matter_physics",
    "discipline": "PHYSICS",
    "name": "Non-linear Condensed Matter Physics",
    "baseWeight": 6,
    "keywords": [
      "linear",
      "condensed",
      "matter",
      "physics"
    ]
  },
  {
    "id": "stochastic_condensed_matter_physics",
    "discipline": "PHYSICS",
    "name": "Stochastic Condensed Matter Physics",
    "baseWeight": 6,
    "keywords": [
      "stochastic",
      "condensed",
      "matter",
      "physics"
    ]
  },
  {
    "id": "thermodynamic_condensed_matter_physics",
    "discipline": "PHYSICS",
    "name": "Thermodynamic Condensed Matter Physics",
    "baseWeight": 6,
    "keywords": [
      "thermodynamic",
      "condensed",
      "matter",
      "physics"
    ]
  },
  {
    "id": "laser_condensed_matter_physics",
    "discipline": "PHYSICS",
    "name": "Laser Condensed Matter Physics",
    "baseWeight": 6,
    "keywords": [
      "laser",
      "condensed",
      "matter",
      "physics"
    ]
  },
  {
    "id": "fluid_condensed_matter_physics",
    "discipline": "PHYSICS",
    "name": "Fluid Condensed Matter Physics",
    "baseWeight": 6,
    "keywords": [
      "fluid",
      "condensed",
      "matter",
      "physics"
    ]
  },
  {
    "id": "particle_condensed_matter_physics",
    "discipline": "PHYSICS",
    "name": "Particle Condensed Matter Physics",
    "baseWeight": 6,
    "keywords": [
      "particle",
      "condensed",
      "matter",
      "physics"
    ]
  },
  {
    "id": "gravitational_condensed_matter_physics",
    "discipline": "PHYSICS",
    "name": "Gravitational Condensed Matter Physics",
    "baseWeight": 6,
    "keywords": [
      "gravitational",
      "condensed",
      "matter",
      "physics"
    ]
  },
  {
    "id": "quantum_gravity_condensed_matter_physics",
    "discipline": "PHYSICS",
    "name": "Quantum Gravity Condensed Matter Physics",
    "baseWeight": 9,
    "keywords": [
      "quantum",
      "gravity",
      "condensed",
      "matter",
      "physics",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "cosmological_condensed_matter_physics",
    "discipline": "PHYSICS",
    "name": "Cosmological Condensed Matter Physics",
    "baseWeight": 6,
    "keywords": [
      "cosmological",
      "condensed",
      "matter",
      "physics"
    ]
  },
  {
    "id": "quantum_astrophysics_cosmology",
    "discipline": "PHYSICS",
    "name": "Quantum Astrophysics & Cosmology",
    "baseWeight": 7,
    "keywords": [
      "quantum",
      "astrophysics",
      "cosmology",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "relativistic_astrophysics_cosmology",
    "discipline": "PHYSICS",
    "name": "Relativistic Astrophysics & Cosmology",
    "baseWeight": 7,
    "keywords": [
      "relativistic",
      "astrophysics",
      "cosmology",
      "relativity",
      "spacetime",
      "lorentz",
      "einstein",
      "dilated",
      "gravitation"
    ]
  },
  {
    "id": "statistical_astrophysics_cosmology",
    "discipline": "PHYSICS",
    "name": "Statistical Astrophysics & Cosmology",
    "baseWeight": 4,
    "keywords": [
      "statistical",
      "astrophysics",
      "cosmology",
      "entropy",
      "probability",
      "ensemble",
      "boltzmann",
      "stochastic"
    ]
  },
  {
    "id": "computational_astrophysics_cosmology",
    "discipline": "PHYSICS",
    "name": "Computational Astrophysics & Cosmology",
    "baseWeight": 5,
    "keywords": [
      "computational",
      "astrophysics",
      "cosmology",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico"
    ]
  },
  {
    "id": "theoretical_astrophysics_cosmology",
    "discipline": "PHYSICS",
    "name": "Theoretical Astrophysics & Cosmology",
    "baseWeight": 5,
    "keywords": [
      "theoretical",
      "astrophysics",
      "cosmology",
      "mathematical",
      "formalism",
      "derivation",
      "hypothesis"
    ]
  },
  {
    "id": "experimental_astrophysics_cosmology",
    "discipline": "PHYSICS",
    "name": "Experimental Astrophysics & Cosmology",
    "baseWeight": 4,
    "keywords": [
      "experimental",
      "astrophysics",
      "cosmology"
    ]
  },
  {
    "id": "applied_astrophysics_cosmology",
    "discipline": "PHYSICS",
    "name": "Applied Astrophysics & Cosmology",
    "baseWeight": 4,
    "keywords": [
      "applied",
      "astrophysics",
      "cosmology"
    ]
  },
  {
    "id": "high_energy_astrophysics_cosmology",
    "discipline": "PHYSICS",
    "name": "High-Energy Astrophysics & Cosmology",
    "baseWeight": 4,
    "keywords": [
      "high",
      "energy",
      "astrophysics",
      "cosmology",
      "fusion",
      "fission",
      "battery",
      "photovoltaic",
      "grid",
      "power"
    ]
  },
  {
    "id": "condensed_astrophysics_cosmology",
    "discipline": "PHYSICS",
    "name": "Condensed Astrophysics & Cosmology",
    "baseWeight": 4,
    "keywords": [
      "condensed",
      "astrophysics",
      "cosmology"
    ]
  },
  {
    "id": "solid_state_astrophysics_cosmology",
    "discipline": "PHYSICS",
    "name": "Solid-State Astrophysics & Cosmology",
    "baseWeight": 4,
    "keywords": [
      "solid",
      "state",
      "astrophysics",
      "cosmology"
    ]
  },
  {
    "id": "optical_astrophysics_cosmology",
    "discipline": "PHYSICS",
    "name": "Optical Astrophysics & Cosmology",
    "baseWeight": 4,
    "keywords": [
      "optical",
      "astrophysics",
      "cosmology"
    ]
  },
  {
    "id": "acoustic_astrophysics_cosmology",
    "discipline": "PHYSICS",
    "name": "Acoustic Astrophysics & Cosmology",
    "baseWeight": 4,
    "keywords": [
      "acoustic",
      "astrophysics",
      "cosmology"
    ]
  },
  {
    "id": "astrophysical_astrophysics_cosmology",
    "discipline": "PHYSICS",
    "name": "Astrophysical Astrophysics & Cosmology",
    "baseWeight": 4,
    "keywords": [
      "astrophysical",
      "astrophysics",
      "cosmology"
    ]
  },
  {
    "id": "nuclear_astrophysics_cosmology",
    "discipline": "PHYSICS",
    "name": "Nuclear Astrophysics & Cosmology",
    "baseWeight": 7,
    "keywords": [
      "nuclear",
      "astrophysics",
      "cosmology"
    ]
  },
  {
    "id": "plasma_astrophysics_cosmology",
    "discipline": "PHYSICS",
    "name": "Plasma Astrophysics & Cosmology",
    "baseWeight": 4,
    "keywords": [
      "plasma",
      "astrophysics",
      "cosmology"
    ]
  },
  {
    "id": "mathematical_astrophysics_cosmology",
    "discipline": "PHYSICS",
    "name": "Mathematical Astrophysics & Cosmology",
    "baseWeight": 4,
    "keywords": [
      "mathematical",
      "astrophysics",
      "cosmology"
    ]
  },
  {
    "id": "non_linear_astrophysics_cosmology",
    "discipline": "PHYSICS",
    "name": "Non-linear Astrophysics & Cosmology",
    "baseWeight": 4,
    "keywords": [
      "linear",
      "astrophysics",
      "cosmology"
    ]
  },
  {
    "id": "stochastic_astrophysics_cosmology",
    "discipline": "PHYSICS",
    "name": "Stochastic Astrophysics & Cosmology",
    "baseWeight": 4,
    "keywords": [
      "stochastic",
      "astrophysics",
      "cosmology"
    ]
  },
  {
    "id": "thermodynamic_astrophysics_cosmology",
    "discipline": "PHYSICS",
    "name": "Thermodynamic Astrophysics & Cosmology",
    "baseWeight": 4,
    "keywords": [
      "thermodynamic",
      "astrophysics",
      "cosmology"
    ]
  },
  {
    "id": "laser_astrophysics_cosmology",
    "discipline": "PHYSICS",
    "name": "Laser Astrophysics & Cosmology",
    "baseWeight": 4,
    "keywords": [
      "laser",
      "astrophysics",
      "cosmology"
    ]
  },
  {
    "id": "fluid_astrophysics_cosmology",
    "discipline": "PHYSICS",
    "name": "Fluid Astrophysics & Cosmology",
    "baseWeight": 4,
    "keywords": [
      "fluid",
      "astrophysics",
      "cosmology"
    ]
  },
  {
    "id": "particle_astrophysics_cosmology",
    "discipline": "PHYSICS",
    "name": "Particle Astrophysics & Cosmology",
    "baseWeight": 4,
    "keywords": [
      "particle",
      "astrophysics",
      "cosmology"
    ]
  },
  {
    "id": "gravitational_astrophysics_cosmology",
    "discipline": "PHYSICS",
    "name": "Gravitational Astrophysics & Cosmology",
    "baseWeight": 4,
    "keywords": [
      "gravitational",
      "astrophysics",
      "cosmology"
    ]
  },
  {
    "id": "quantum_gravity_astrophysics_cosmology",
    "discipline": "PHYSICS",
    "name": "Quantum Gravity Astrophysics & Cosmology",
    "baseWeight": 7,
    "keywords": [
      "quantum",
      "gravity",
      "astrophysics",
      "cosmology",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "cosmological_astrophysics_cosmology",
    "discipline": "PHYSICS",
    "name": "Cosmological Astrophysics & Cosmology",
    "baseWeight": 4,
    "keywords": [
      "cosmological",
      "astrophysics",
      "cosmology"
    ]
  },
  {
    "id": "organic_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Organic Chemistry",
    "baseWeight": 4,
    "keywords": [
      "organic",
      "chemistry",
      "carbon",
      "molecule",
      "covalent",
      "isomer",
      "synthesis"
    ]
  },
  {
    "id": "inorganic_organic_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Inorganic Organic Chemistry",
    "baseWeight": 4,
    "keywords": [
      "inorganic",
      "organic",
      "chemistry",
      "carbon",
      "molecule",
      "covalent",
      "isomer",
      "synthesis"
    ]
  },
  {
    "id": "physical_organic_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Physical Organic Chemistry",
    "baseWeight": 4,
    "keywords": [
      "physical",
      "organic",
      "chemistry",
      "carbon",
      "molecule",
      "covalent",
      "isomer",
      "synthesis"
    ]
  },
  {
    "id": "analytical_organic_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Analytical Organic Chemistry",
    "baseWeight": 4,
    "keywords": [
      "analytical",
      "organic",
      "chemistry",
      "carbon",
      "molecule",
      "covalent",
      "isomer",
      "synthesis"
    ]
  },
  {
    "id": "biochemical_organic_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Biochemical Organic Chemistry",
    "baseWeight": 4,
    "keywords": [
      "biochemical",
      "organic",
      "chemistry",
      "carbon",
      "molecule",
      "covalent",
      "isomer",
      "synthesis"
    ]
  },
  {
    "id": "theoretical_organic_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Theoretical Organic Chemistry",
    "baseWeight": 5,
    "keywords": [
      "theoretical",
      "organic",
      "chemistry",
      "mathematical",
      "formalism",
      "derivation",
      "hypothesis",
      "carbon",
      "molecule",
      "covalent",
      "isomer",
      "synthesis"
    ]
  },
  {
    "id": "computational_organic_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Computational Organic Chemistry",
    "baseWeight": 5,
    "keywords": [
      "computational",
      "organic",
      "chemistry",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico",
      "carbon",
      "molecule",
      "covalent",
      "isomer",
      "synthesis"
    ]
  },
  {
    "id": "polymer_organic_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Polymer Organic Chemistry",
    "baseWeight": 4,
    "keywords": [
      "polymer",
      "organic",
      "chemistry",
      "carbon",
      "molecule",
      "covalent",
      "isomer",
      "synthesis"
    ]
  },
  {
    "id": "materials_organic_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Materials Organic Chemistry",
    "baseWeight": 4,
    "keywords": [
      "materials",
      "organic",
      "chemistry",
      "carbon",
      "molecule",
      "covalent",
      "isomer",
      "synthesis"
    ]
  },
  {
    "id": "environmental_organic_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Environmental Organic Chemistry",
    "baseWeight": 4,
    "keywords": [
      "environmental",
      "organic",
      "chemistry",
      "carbon",
      "molecule",
      "covalent",
      "isomer",
      "synthesis"
    ]
  },
  {
    "id": "green_organic_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Green Organic Chemistry",
    "baseWeight": 4,
    "keywords": [
      "green",
      "organic",
      "chemistry",
      "carbon",
      "molecule",
      "covalent",
      "isomer",
      "synthesis"
    ]
  },
  {
    "id": "electro_organic_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Electro Organic Chemistry",
    "baseWeight": 4,
    "keywords": [
      "electro",
      "organic",
      "chemistry",
      "carbon",
      "molecule",
      "covalent",
      "isomer",
      "synthesis"
    ]
  },
  {
    "id": "photo_organic_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Photo Organic Chemistry",
    "baseWeight": 4,
    "keywords": [
      "photo",
      "organic",
      "chemistry",
      "carbon",
      "molecule",
      "covalent",
      "isomer",
      "synthesis"
    ]
  },
  {
    "id": "astro_organic_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Astro Organic Chemistry",
    "baseWeight": 4,
    "keywords": [
      "astro",
      "organic",
      "chemistry",
      "carbon",
      "molecule",
      "covalent",
      "isomer",
      "synthesis"
    ]
  },
  {
    "id": "geo_organic_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Geo Organic Chemistry",
    "baseWeight": 4,
    "keywords": [
      "organic",
      "chemistry",
      "carbon",
      "molecule",
      "covalent",
      "isomer",
      "synthesis"
    ]
  },
  {
    "id": "supramolecular_organic_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Supramolecular Organic Chemistry",
    "baseWeight": 5,
    "keywords": [
      "supramolecular",
      "organic",
      "chemistry",
      "carbon",
      "molecule",
      "covalent",
      "isomer",
      "synthesis"
    ]
  },
  {
    "id": "nano_organic_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Nano Organic Chemistry",
    "baseWeight": 4,
    "keywords": [
      "nano",
      "organic",
      "chemistry",
      "carbon",
      "molecule",
      "covalent",
      "isomer",
      "synthesis"
    ]
  },
  {
    "id": "solid_state_organic_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Solid-State Organic Chemistry",
    "baseWeight": 4,
    "keywords": [
      "solid",
      "state",
      "organic",
      "chemistry",
      "carbon",
      "molecule",
      "covalent",
      "isomer",
      "synthesis"
    ]
  },
  {
    "id": "synthetic_organic_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Synthetic Organic Chemistry",
    "baseWeight": 7,
    "keywords": [
      "synthetic",
      "organic",
      "chemistry",
      "carbon",
      "molecule",
      "covalent",
      "isomer",
      "synthesis"
    ]
  },
  {
    "id": "thermochemical_organic_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Thermochemical Organic Chemistry",
    "baseWeight": 4,
    "keywords": [
      "thermochemical",
      "organic",
      "chemistry",
      "carbon",
      "molecule",
      "covalent",
      "isomer",
      "synthesis"
    ]
  },
  {
    "id": "quantum_chemical_organic_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Quantum Chemical Organic Chemistry",
    "baseWeight": 7,
    "keywords": [
      "quantum",
      "chemical",
      "organic",
      "chemistry",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence",
      "carbon",
      "molecule",
      "covalent",
      "isomer",
      "synthesis"
    ]
  },
  {
    "id": "analytical_organic_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Analytical Organic Chemistry",
    "baseWeight": 4,
    "keywords": [
      "analytical",
      "organic",
      "chemistry",
      "carbon",
      "molecule",
      "covalent",
      "isomer",
      "synthesis"
    ]
  },
  {
    "id": "industrial_organic_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Industrial Organic Chemistry",
    "baseWeight": 4,
    "keywords": [
      "industrial",
      "organic",
      "chemistry",
      "carbon",
      "molecule",
      "covalent",
      "isomer",
      "synthesis"
    ]
  },
  {
    "id": "spectroscopic_organic_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Spectroscopic Organic Chemistry",
    "baseWeight": 4,
    "keywords": [
      "spectroscopic",
      "organic",
      "chemistry",
      "carbon",
      "molecule",
      "covalent",
      "isomer",
      "synthesis"
    ]
  },
  {
    "id": "catalytic_organic_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Catalytic Organic Chemistry",
    "baseWeight": 4,
    "keywords": [
      "catalytic",
      "organic",
      "chemistry",
      "carbon",
      "molecule",
      "covalent",
      "isomer",
      "synthesis"
    ]
  },
  {
    "id": "organic_inorganic_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Organic Inorganic Chemistry",
    "baseWeight": 5,
    "keywords": [
      "organic",
      "inorganic",
      "chemistry",
      "carbon",
      "molecule",
      "covalent",
      "isomer",
      "synthesis"
    ]
  },
  {
    "id": "inorganic_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Inorganic Chemistry",
    "baseWeight": 5,
    "keywords": [
      "inorganic",
      "chemistry",
      "carbon",
      "organic",
      "molecule",
      "covalent",
      "isomer",
      "synthesis"
    ]
  },
  {
    "id": "physical_inorganic_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Physical Inorganic Chemistry",
    "baseWeight": 5,
    "keywords": [
      "physical",
      "inorganic",
      "chemistry",
      "carbon",
      "organic",
      "molecule",
      "covalent",
      "isomer",
      "synthesis"
    ]
  },
  {
    "id": "analytical_inorganic_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Analytical Inorganic Chemistry",
    "baseWeight": 5,
    "keywords": [
      "analytical",
      "inorganic",
      "chemistry",
      "carbon",
      "organic",
      "molecule",
      "covalent",
      "isomer",
      "synthesis"
    ]
  },
  {
    "id": "biochemical_inorganic_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Biochemical Inorganic Chemistry",
    "baseWeight": 5,
    "keywords": [
      "biochemical",
      "inorganic",
      "chemistry",
      "carbon",
      "organic",
      "molecule",
      "covalent",
      "isomer",
      "synthesis"
    ]
  },
  {
    "id": "theoretical_inorganic_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Theoretical Inorganic Chemistry",
    "baseWeight": 6,
    "keywords": [
      "theoretical",
      "inorganic",
      "chemistry",
      "mathematical",
      "formalism",
      "derivation",
      "hypothesis",
      "carbon",
      "organic",
      "molecule",
      "covalent",
      "isomer",
      "synthesis"
    ]
  },
  {
    "id": "computational_inorganic_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Computational Inorganic Chemistry",
    "baseWeight": 6,
    "keywords": [
      "computational",
      "inorganic",
      "chemistry",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico",
      "carbon",
      "organic",
      "molecule",
      "covalent",
      "isomer",
      "synthesis"
    ]
  },
  {
    "id": "polymer_inorganic_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Polymer Inorganic Chemistry",
    "baseWeight": 5,
    "keywords": [
      "polymer",
      "inorganic",
      "chemistry",
      "carbon",
      "organic",
      "molecule",
      "covalent",
      "isomer",
      "synthesis"
    ]
  },
  {
    "id": "materials_inorganic_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Materials Inorganic Chemistry",
    "baseWeight": 5,
    "keywords": [
      "materials",
      "inorganic",
      "chemistry",
      "carbon",
      "organic",
      "molecule",
      "covalent",
      "isomer",
      "synthesis"
    ]
  },
  {
    "id": "environmental_inorganic_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Environmental Inorganic Chemistry",
    "baseWeight": 5,
    "keywords": [
      "environmental",
      "inorganic",
      "chemistry",
      "carbon",
      "organic",
      "molecule",
      "covalent",
      "isomer",
      "synthesis"
    ]
  },
  {
    "id": "green_inorganic_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Green Inorganic Chemistry",
    "baseWeight": 5,
    "keywords": [
      "green",
      "inorganic",
      "chemistry",
      "carbon",
      "organic",
      "molecule",
      "covalent",
      "isomer",
      "synthesis"
    ]
  },
  {
    "id": "electro_inorganic_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Electro Inorganic Chemistry",
    "baseWeight": 5,
    "keywords": [
      "electro",
      "inorganic",
      "chemistry",
      "carbon",
      "organic",
      "molecule",
      "covalent",
      "isomer",
      "synthesis"
    ]
  },
  {
    "id": "photo_inorganic_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Photo Inorganic Chemistry",
    "baseWeight": 5,
    "keywords": [
      "photo",
      "inorganic",
      "chemistry",
      "carbon",
      "organic",
      "molecule",
      "covalent",
      "isomer",
      "synthesis"
    ]
  },
  {
    "id": "astro_inorganic_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Astro Inorganic Chemistry",
    "baseWeight": 5,
    "keywords": [
      "astro",
      "inorganic",
      "chemistry",
      "carbon",
      "organic",
      "molecule",
      "covalent",
      "isomer",
      "synthesis"
    ]
  },
  {
    "id": "geo_inorganic_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Geo Inorganic Chemistry",
    "baseWeight": 5,
    "keywords": [
      "inorganic",
      "chemistry",
      "carbon",
      "organic",
      "molecule",
      "covalent",
      "isomer",
      "synthesis"
    ]
  },
  {
    "id": "supramolecular_inorganic_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Supramolecular Inorganic Chemistry",
    "baseWeight": 6,
    "keywords": [
      "supramolecular",
      "inorganic",
      "chemistry",
      "carbon",
      "organic",
      "molecule",
      "covalent",
      "isomer",
      "synthesis"
    ]
  },
  {
    "id": "nano_inorganic_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Nano Inorganic Chemistry",
    "baseWeight": 5,
    "keywords": [
      "nano",
      "inorganic",
      "chemistry",
      "carbon",
      "organic",
      "molecule",
      "covalent",
      "isomer",
      "synthesis"
    ]
  },
  {
    "id": "solid_state_inorganic_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Solid-State Inorganic Chemistry",
    "baseWeight": 5,
    "keywords": [
      "solid",
      "state",
      "inorganic",
      "chemistry",
      "carbon",
      "organic",
      "molecule",
      "covalent",
      "isomer",
      "synthesis"
    ]
  },
  {
    "id": "synthetic_inorganic_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Synthetic Inorganic Chemistry",
    "baseWeight": 8,
    "keywords": [
      "synthetic",
      "inorganic",
      "chemistry",
      "carbon",
      "organic",
      "molecule",
      "covalent",
      "isomer",
      "synthesis"
    ]
  },
  {
    "id": "thermochemical_inorganic_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Thermochemical Inorganic Chemistry",
    "baseWeight": 5,
    "keywords": [
      "thermochemical",
      "inorganic",
      "chemistry",
      "carbon",
      "organic",
      "molecule",
      "covalent",
      "isomer",
      "synthesis"
    ]
  },
  {
    "id": "quantum_chemical_inorganic_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Quantum Chemical Inorganic Chemistry",
    "baseWeight": 8,
    "keywords": [
      "quantum",
      "chemical",
      "inorganic",
      "chemistry",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence",
      "carbon",
      "organic",
      "molecule",
      "covalent",
      "isomer",
      "synthesis"
    ]
  },
  {
    "id": "analytical_inorganic_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Analytical Inorganic Chemistry",
    "baseWeight": 5,
    "keywords": [
      "analytical",
      "inorganic",
      "chemistry",
      "carbon",
      "organic",
      "molecule",
      "covalent",
      "isomer",
      "synthesis"
    ]
  },
  {
    "id": "industrial_inorganic_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Industrial Inorganic Chemistry",
    "baseWeight": 5,
    "keywords": [
      "industrial",
      "inorganic",
      "chemistry",
      "carbon",
      "organic",
      "molecule",
      "covalent",
      "isomer",
      "synthesis"
    ]
  },
  {
    "id": "spectroscopic_inorganic_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Spectroscopic Inorganic Chemistry",
    "baseWeight": 5,
    "keywords": [
      "spectroscopic",
      "inorganic",
      "chemistry",
      "carbon",
      "organic",
      "molecule",
      "covalent",
      "isomer",
      "synthesis"
    ]
  },
  {
    "id": "catalytic_inorganic_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Catalytic Inorganic Chemistry",
    "baseWeight": 5,
    "keywords": [
      "catalytic",
      "inorganic",
      "chemistry",
      "carbon",
      "organic",
      "molecule",
      "covalent",
      "isomer",
      "synthesis"
    ]
  },
  {
    "id": "organic_physical_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Organic Physical Chemistry",
    "baseWeight": 6,
    "keywords": [
      "organic",
      "physical",
      "chemistry",
      "carbon",
      "molecule",
      "covalent",
      "isomer",
      "synthesis"
    ]
  },
  {
    "id": "inorganic_physical_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Inorganic Physical Chemistry",
    "baseWeight": 6,
    "keywords": [
      "inorganic",
      "physical",
      "chemistry",
      "carbon",
      "organic",
      "molecule",
      "covalent",
      "isomer",
      "synthesis"
    ]
  },
  {
    "id": "physical_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Physical Chemistry",
    "baseWeight": 6,
    "keywords": [
      "physical",
      "chemistry"
    ]
  },
  {
    "id": "analytical_physical_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Analytical Physical Chemistry",
    "baseWeight": 6,
    "keywords": [
      "analytical",
      "physical",
      "chemistry"
    ]
  },
  {
    "id": "biochemical_physical_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Biochemical Physical Chemistry",
    "baseWeight": 6,
    "keywords": [
      "biochemical",
      "physical",
      "chemistry"
    ]
  },
  {
    "id": "theoretical_physical_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Theoretical Physical Chemistry",
    "baseWeight": 7,
    "keywords": [
      "theoretical",
      "physical",
      "chemistry",
      "mathematical",
      "formalism",
      "derivation",
      "hypothesis"
    ]
  },
  {
    "id": "computational_physical_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Computational Physical Chemistry",
    "baseWeight": 7,
    "keywords": [
      "computational",
      "physical",
      "chemistry",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico"
    ]
  },
  {
    "id": "polymer_physical_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Polymer Physical Chemistry",
    "baseWeight": 6,
    "keywords": [
      "polymer",
      "physical",
      "chemistry"
    ]
  },
  {
    "id": "materials_physical_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Materials Physical Chemistry",
    "baseWeight": 6,
    "keywords": [
      "materials",
      "physical",
      "chemistry"
    ]
  },
  {
    "id": "environmental_physical_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Environmental Physical Chemistry",
    "baseWeight": 6,
    "keywords": [
      "environmental",
      "physical",
      "chemistry"
    ]
  },
  {
    "id": "green_physical_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Green Physical Chemistry",
    "baseWeight": 6,
    "keywords": [
      "green",
      "physical",
      "chemistry"
    ]
  },
  {
    "id": "electro_physical_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Electro Physical Chemistry",
    "baseWeight": 6,
    "keywords": [
      "electro",
      "physical",
      "chemistry"
    ]
  },
  {
    "id": "photo_physical_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Photo Physical Chemistry",
    "baseWeight": 6,
    "keywords": [
      "photo",
      "physical",
      "chemistry"
    ]
  },
  {
    "id": "astro_physical_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Astro Physical Chemistry",
    "baseWeight": 6,
    "keywords": [
      "astro",
      "physical",
      "chemistry"
    ]
  },
  {
    "id": "geo_physical_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Geo Physical Chemistry",
    "baseWeight": 6,
    "keywords": [
      "physical",
      "chemistry"
    ]
  },
  {
    "id": "supramolecular_physical_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Supramolecular Physical Chemistry",
    "baseWeight": 7,
    "keywords": [
      "supramolecular",
      "physical",
      "chemistry"
    ]
  },
  {
    "id": "nano_physical_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Nano Physical Chemistry",
    "baseWeight": 6,
    "keywords": [
      "nano",
      "physical",
      "chemistry"
    ]
  },
  {
    "id": "solid_state_physical_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Solid-State Physical Chemistry",
    "baseWeight": 6,
    "keywords": [
      "solid",
      "state",
      "physical",
      "chemistry"
    ]
  },
  {
    "id": "synthetic_physical_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Synthetic Physical Chemistry",
    "baseWeight": 9,
    "keywords": [
      "synthetic",
      "physical",
      "chemistry"
    ]
  },
  {
    "id": "thermochemical_physical_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Thermochemical Physical Chemistry",
    "baseWeight": 6,
    "keywords": [
      "thermochemical",
      "physical",
      "chemistry"
    ]
  },
  {
    "id": "quantum_chemical_physical_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Quantum Chemical Physical Chemistry",
    "baseWeight": 9,
    "keywords": [
      "quantum",
      "chemical",
      "physical",
      "chemistry",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "analytical_physical_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Analytical Physical Chemistry",
    "baseWeight": 6,
    "keywords": [
      "analytical",
      "physical",
      "chemistry"
    ]
  },
  {
    "id": "industrial_physical_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Industrial Physical Chemistry",
    "baseWeight": 6,
    "keywords": [
      "industrial",
      "physical",
      "chemistry"
    ]
  },
  {
    "id": "spectroscopic_physical_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Spectroscopic Physical Chemistry",
    "baseWeight": 6,
    "keywords": [
      "spectroscopic",
      "physical",
      "chemistry"
    ]
  },
  {
    "id": "catalytic_physical_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Catalytic Physical Chemistry",
    "baseWeight": 6,
    "keywords": [
      "catalytic",
      "physical",
      "chemistry"
    ]
  },
  {
    "id": "organic_analytical_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Organic Analytical Chemistry",
    "baseWeight": 4,
    "keywords": [
      "organic",
      "analytical",
      "chemistry",
      "carbon",
      "molecule",
      "covalent",
      "isomer",
      "synthesis"
    ]
  },
  {
    "id": "inorganic_analytical_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Inorganic Analytical Chemistry",
    "baseWeight": 4,
    "keywords": [
      "inorganic",
      "analytical",
      "chemistry",
      "carbon",
      "organic",
      "molecule",
      "covalent",
      "isomer",
      "synthesis"
    ]
  },
  {
    "id": "physical_analytical_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Physical Analytical Chemistry",
    "baseWeight": 4,
    "keywords": [
      "physical",
      "analytical",
      "chemistry"
    ]
  },
  {
    "id": "analytical_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Analytical Chemistry",
    "baseWeight": 4,
    "keywords": [
      "analytical",
      "chemistry"
    ]
  },
  {
    "id": "biochemical_analytical_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Biochemical Analytical Chemistry",
    "baseWeight": 4,
    "keywords": [
      "biochemical",
      "analytical",
      "chemistry"
    ]
  },
  {
    "id": "theoretical_analytical_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Theoretical Analytical Chemistry",
    "baseWeight": 5,
    "keywords": [
      "theoretical",
      "analytical",
      "chemistry",
      "mathematical",
      "formalism",
      "derivation",
      "hypothesis"
    ]
  },
  {
    "id": "computational_analytical_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Computational Analytical Chemistry",
    "baseWeight": 5,
    "keywords": [
      "computational",
      "analytical",
      "chemistry",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico"
    ]
  },
  {
    "id": "polymer_analytical_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Polymer Analytical Chemistry",
    "baseWeight": 4,
    "keywords": [
      "polymer",
      "analytical",
      "chemistry"
    ]
  },
  {
    "id": "materials_analytical_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Materials Analytical Chemistry",
    "baseWeight": 4,
    "keywords": [
      "materials",
      "analytical",
      "chemistry"
    ]
  },
  {
    "id": "environmental_analytical_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Environmental Analytical Chemistry",
    "baseWeight": 4,
    "keywords": [
      "environmental",
      "analytical",
      "chemistry"
    ]
  },
  {
    "id": "green_analytical_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Green Analytical Chemistry",
    "baseWeight": 4,
    "keywords": [
      "green",
      "analytical",
      "chemistry"
    ]
  },
  {
    "id": "electro_analytical_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Electro Analytical Chemistry",
    "baseWeight": 4,
    "keywords": [
      "electro",
      "analytical",
      "chemistry"
    ]
  },
  {
    "id": "photo_analytical_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Photo Analytical Chemistry",
    "baseWeight": 4,
    "keywords": [
      "photo",
      "analytical",
      "chemistry"
    ]
  },
  {
    "id": "astro_analytical_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Astro Analytical Chemistry",
    "baseWeight": 4,
    "keywords": [
      "astro",
      "analytical",
      "chemistry"
    ]
  },
  {
    "id": "geo_analytical_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Geo Analytical Chemistry",
    "baseWeight": 4,
    "keywords": [
      "analytical",
      "chemistry"
    ]
  },
  {
    "id": "supramolecular_analytical_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Supramolecular Analytical Chemistry",
    "baseWeight": 5,
    "keywords": [
      "supramolecular",
      "analytical",
      "chemistry"
    ]
  },
  {
    "id": "nano_analytical_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Nano Analytical Chemistry",
    "baseWeight": 4,
    "keywords": [
      "nano",
      "analytical",
      "chemistry"
    ]
  },
  {
    "id": "solid_state_analytical_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Solid-State Analytical Chemistry",
    "baseWeight": 4,
    "keywords": [
      "solid",
      "state",
      "analytical",
      "chemistry"
    ]
  },
  {
    "id": "synthetic_analytical_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Synthetic Analytical Chemistry",
    "baseWeight": 7,
    "keywords": [
      "synthetic",
      "analytical",
      "chemistry"
    ]
  },
  {
    "id": "thermochemical_analytical_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Thermochemical Analytical Chemistry",
    "baseWeight": 4,
    "keywords": [
      "thermochemical",
      "analytical",
      "chemistry"
    ]
  },
  {
    "id": "quantum_chemical_analytical_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Quantum Chemical Analytical Chemistry",
    "baseWeight": 7,
    "keywords": [
      "quantum",
      "chemical",
      "analytical",
      "chemistry",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "analytical_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Analytical Chemistry",
    "baseWeight": 4,
    "keywords": [
      "analytical",
      "chemistry"
    ]
  },
  {
    "id": "industrial_analytical_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Industrial Analytical Chemistry",
    "baseWeight": 4,
    "keywords": [
      "industrial",
      "analytical",
      "chemistry"
    ]
  },
  {
    "id": "spectroscopic_analytical_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Spectroscopic Analytical Chemistry",
    "baseWeight": 4,
    "keywords": [
      "spectroscopic",
      "analytical",
      "chemistry"
    ]
  },
  {
    "id": "catalytic_analytical_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Catalytic Analytical Chemistry",
    "baseWeight": 4,
    "keywords": [
      "catalytic",
      "analytical",
      "chemistry"
    ]
  },
  {
    "id": "organic_biochemistry",
    "discipline": "CHEMISTRY",
    "name": "Organic Biochemistry",
    "baseWeight": 5,
    "keywords": [
      "organic",
      "biochemistry",
      "carbon",
      "molecule",
      "covalent",
      "isomer",
      "synthesis"
    ]
  },
  {
    "id": "inorganic_biochemistry",
    "discipline": "CHEMISTRY",
    "name": "Inorganic Biochemistry",
    "baseWeight": 5,
    "keywords": [
      "inorganic",
      "biochemistry",
      "carbon",
      "organic",
      "molecule",
      "covalent",
      "isomer",
      "synthesis"
    ]
  },
  {
    "id": "physical_biochemistry",
    "discipline": "CHEMISTRY",
    "name": "Physical Biochemistry",
    "baseWeight": 5,
    "keywords": [
      "physical",
      "biochemistry"
    ]
  },
  {
    "id": "analytical_biochemistry",
    "discipline": "CHEMISTRY",
    "name": "Analytical Biochemistry",
    "baseWeight": 5,
    "keywords": [
      "analytical",
      "biochemistry"
    ]
  },
  {
    "id": "biochemical_biochemistry",
    "discipline": "CHEMISTRY",
    "name": "Biochemical Biochemistry",
    "baseWeight": 5,
    "keywords": [
      "biochemical",
      "biochemistry"
    ]
  },
  {
    "id": "theoretical_biochemistry",
    "discipline": "CHEMISTRY",
    "name": "Theoretical Biochemistry",
    "baseWeight": 6,
    "keywords": [
      "theoretical",
      "biochemistry",
      "mathematical",
      "formalism",
      "derivation",
      "hypothesis"
    ]
  },
  {
    "id": "computational_biochemistry",
    "discipline": "CHEMISTRY",
    "name": "Computational Biochemistry",
    "baseWeight": 6,
    "keywords": [
      "computational",
      "biochemistry",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico"
    ]
  },
  {
    "id": "polymer_biochemistry",
    "discipline": "CHEMISTRY",
    "name": "Polymer Biochemistry",
    "baseWeight": 5,
    "keywords": [
      "polymer",
      "biochemistry"
    ]
  },
  {
    "id": "materials_biochemistry",
    "discipline": "CHEMISTRY",
    "name": "Materials Biochemistry",
    "baseWeight": 5,
    "keywords": [
      "materials",
      "biochemistry"
    ]
  },
  {
    "id": "environmental_biochemistry",
    "discipline": "CHEMISTRY",
    "name": "Environmental Biochemistry",
    "baseWeight": 5,
    "keywords": [
      "environmental",
      "biochemistry"
    ]
  },
  {
    "id": "green_biochemistry",
    "discipline": "CHEMISTRY",
    "name": "Green Biochemistry",
    "baseWeight": 5,
    "keywords": [
      "green",
      "biochemistry"
    ]
  },
  {
    "id": "electro_biochemistry",
    "discipline": "CHEMISTRY",
    "name": "Electro Biochemistry",
    "baseWeight": 5,
    "keywords": [
      "electro",
      "biochemistry"
    ]
  },
  {
    "id": "photo_biochemistry",
    "discipline": "CHEMISTRY",
    "name": "Photo Biochemistry",
    "baseWeight": 5,
    "keywords": [
      "photo",
      "biochemistry"
    ]
  },
  {
    "id": "astro_biochemistry",
    "discipline": "CHEMISTRY",
    "name": "Astro Biochemistry",
    "baseWeight": 5,
    "keywords": [
      "astro",
      "biochemistry"
    ]
  },
  {
    "id": "geo_biochemistry",
    "discipline": "CHEMISTRY",
    "name": "Geo Biochemistry",
    "baseWeight": 5,
    "keywords": [
      "biochemistry"
    ]
  },
  {
    "id": "supramolecular_biochemistry",
    "discipline": "CHEMISTRY",
    "name": "Supramolecular Biochemistry",
    "baseWeight": 6,
    "keywords": [
      "supramolecular",
      "biochemistry"
    ]
  },
  {
    "id": "nano_biochemistry",
    "discipline": "CHEMISTRY",
    "name": "Nano Biochemistry",
    "baseWeight": 5,
    "keywords": [
      "nano",
      "biochemistry"
    ]
  },
  {
    "id": "solid_state_biochemistry",
    "discipline": "CHEMISTRY",
    "name": "Solid-State Biochemistry",
    "baseWeight": 5,
    "keywords": [
      "solid",
      "state",
      "biochemistry"
    ]
  },
  {
    "id": "synthetic_biochemistry",
    "discipline": "CHEMISTRY",
    "name": "Synthetic Biochemistry",
    "baseWeight": 8,
    "keywords": [
      "synthetic",
      "biochemistry"
    ]
  },
  {
    "id": "thermochemical_biochemistry",
    "discipline": "CHEMISTRY",
    "name": "Thermochemical Biochemistry",
    "baseWeight": 5,
    "keywords": [
      "thermochemical",
      "biochemistry"
    ]
  },
  {
    "id": "quantum_chemical_biochemistry",
    "discipline": "CHEMISTRY",
    "name": "Quantum Chemical Biochemistry",
    "baseWeight": 8,
    "keywords": [
      "quantum",
      "chemical",
      "biochemistry",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "analytical_biochemistry",
    "discipline": "CHEMISTRY",
    "name": "Analytical Biochemistry",
    "baseWeight": 5,
    "keywords": [
      "analytical",
      "biochemistry"
    ]
  },
  {
    "id": "industrial_biochemistry",
    "discipline": "CHEMISTRY",
    "name": "Industrial Biochemistry",
    "baseWeight": 5,
    "keywords": [
      "industrial",
      "biochemistry"
    ]
  },
  {
    "id": "spectroscopic_biochemistry",
    "discipline": "CHEMISTRY",
    "name": "Spectroscopic Biochemistry",
    "baseWeight": 5,
    "keywords": [
      "spectroscopic",
      "biochemistry"
    ]
  },
  {
    "id": "catalytic_biochemistry",
    "discipline": "CHEMISTRY",
    "name": "Catalytic Biochemistry",
    "baseWeight": 5,
    "keywords": [
      "catalytic",
      "biochemistry"
    ]
  },
  {
    "id": "organic_computational_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Organic Computational Chemistry",
    "baseWeight": 6,
    "keywords": [
      "organic",
      "computational",
      "chemistry",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico",
      "carbon",
      "molecule",
      "covalent",
      "isomer",
      "synthesis"
    ]
  },
  {
    "id": "inorganic_computational_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Inorganic Computational Chemistry",
    "baseWeight": 6,
    "keywords": [
      "inorganic",
      "computational",
      "chemistry",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico",
      "carbon",
      "organic",
      "molecule",
      "covalent",
      "isomer",
      "synthesis"
    ]
  },
  {
    "id": "physical_computational_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Physical Computational Chemistry",
    "baseWeight": 6,
    "keywords": [
      "physical",
      "computational",
      "chemistry",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico"
    ]
  },
  {
    "id": "analytical_computational_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Analytical Computational Chemistry",
    "baseWeight": 6,
    "keywords": [
      "analytical",
      "computational",
      "chemistry",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico"
    ]
  },
  {
    "id": "biochemical_computational_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Biochemical Computational Chemistry",
    "baseWeight": 6,
    "keywords": [
      "biochemical",
      "computational",
      "chemistry",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico"
    ]
  },
  {
    "id": "theoretical_computational_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Theoretical Computational Chemistry",
    "baseWeight": 7,
    "keywords": [
      "theoretical",
      "computational",
      "chemistry",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico",
      "mathematical",
      "formalism",
      "derivation",
      "hypothesis"
    ]
  },
  {
    "id": "computational_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Computational Chemistry",
    "baseWeight": 7,
    "keywords": [
      "computational",
      "chemistry",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico"
    ]
  },
  {
    "id": "polymer_computational_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Polymer Computational Chemistry",
    "baseWeight": 6,
    "keywords": [
      "polymer",
      "computational",
      "chemistry",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico"
    ]
  },
  {
    "id": "materials_computational_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Materials Computational Chemistry",
    "baseWeight": 6,
    "keywords": [
      "materials",
      "computational",
      "chemistry",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico"
    ]
  },
  {
    "id": "environmental_computational_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Environmental Computational Chemistry",
    "baseWeight": 6,
    "keywords": [
      "environmental",
      "computational",
      "chemistry",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico"
    ]
  },
  {
    "id": "green_computational_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Green Computational Chemistry",
    "baseWeight": 6,
    "keywords": [
      "green",
      "computational",
      "chemistry",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico"
    ]
  },
  {
    "id": "electro_computational_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Electro Computational Chemistry",
    "baseWeight": 6,
    "keywords": [
      "electro",
      "computational",
      "chemistry",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico"
    ]
  },
  {
    "id": "photo_computational_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Photo Computational Chemistry",
    "baseWeight": 6,
    "keywords": [
      "photo",
      "computational",
      "chemistry",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico"
    ]
  },
  {
    "id": "astro_computational_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Astro Computational Chemistry",
    "baseWeight": 6,
    "keywords": [
      "astro",
      "computational",
      "chemistry",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico"
    ]
  },
  {
    "id": "geo_computational_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Geo Computational Chemistry",
    "baseWeight": 6,
    "keywords": [
      "computational",
      "chemistry",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico"
    ]
  },
  {
    "id": "supramolecular_computational_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Supramolecular Computational Chemistry",
    "baseWeight": 7,
    "keywords": [
      "supramolecular",
      "computational",
      "chemistry",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico"
    ]
  },
  {
    "id": "nano_computational_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Nano Computational Chemistry",
    "baseWeight": 6,
    "keywords": [
      "nano",
      "computational",
      "chemistry",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico"
    ]
  },
  {
    "id": "solid_state_computational_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Solid-State Computational Chemistry",
    "baseWeight": 6,
    "keywords": [
      "solid",
      "state",
      "computational",
      "chemistry",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico"
    ]
  },
  {
    "id": "synthetic_computational_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Synthetic Computational Chemistry",
    "baseWeight": 9,
    "keywords": [
      "synthetic",
      "computational",
      "chemistry",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico"
    ]
  },
  {
    "id": "thermochemical_computational_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Thermochemical Computational Chemistry",
    "baseWeight": 6,
    "keywords": [
      "thermochemical",
      "computational",
      "chemistry",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico"
    ]
  },
  {
    "id": "quantum_chemical_computational_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Quantum Chemical Computational Chemistry",
    "baseWeight": 9,
    "keywords": [
      "quantum",
      "chemical",
      "computational",
      "chemistry",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico"
    ]
  },
  {
    "id": "analytical_computational_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Analytical Computational Chemistry",
    "baseWeight": 6,
    "keywords": [
      "analytical",
      "computational",
      "chemistry",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico"
    ]
  },
  {
    "id": "industrial_computational_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Industrial Computational Chemistry",
    "baseWeight": 6,
    "keywords": [
      "industrial",
      "computational",
      "chemistry",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico"
    ]
  },
  {
    "id": "spectroscopic_computational_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Spectroscopic Computational Chemistry",
    "baseWeight": 6,
    "keywords": [
      "spectroscopic",
      "computational",
      "chemistry",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico"
    ]
  },
  {
    "id": "catalytic_computational_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Catalytic Computational Chemistry",
    "baseWeight": 6,
    "keywords": [
      "catalytic",
      "computational",
      "chemistry",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico"
    ]
  },
  {
    "id": "organic_polymer_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Organic Polymer Chemistry",
    "baseWeight": 4,
    "keywords": [
      "organic",
      "polymer",
      "chemistry",
      "carbon",
      "molecule",
      "covalent",
      "isomer",
      "synthesis"
    ]
  },
  {
    "id": "inorganic_polymer_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Inorganic Polymer Chemistry",
    "baseWeight": 4,
    "keywords": [
      "inorganic",
      "polymer",
      "chemistry",
      "carbon",
      "organic",
      "molecule",
      "covalent",
      "isomer",
      "synthesis"
    ]
  },
  {
    "id": "physical_polymer_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Physical Polymer Chemistry",
    "baseWeight": 4,
    "keywords": [
      "physical",
      "polymer",
      "chemistry"
    ]
  },
  {
    "id": "analytical_polymer_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Analytical Polymer Chemistry",
    "baseWeight": 4,
    "keywords": [
      "analytical",
      "polymer",
      "chemistry"
    ]
  },
  {
    "id": "biochemical_polymer_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Biochemical Polymer Chemistry",
    "baseWeight": 4,
    "keywords": [
      "biochemical",
      "polymer",
      "chemistry"
    ]
  },
  {
    "id": "theoretical_polymer_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Theoretical Polymer Chemistry",
    "baseWeight": 5,
    "keywords": [
      "theoretical",
      "polymer",
      "chemistry",
      "mathematical",
      "formalism",
      "derivation",
      "hypothesis"
    ]
  },
  {
    "id": "computational_polymer_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Computational Polymer Chemistry",
    "baseWeight": 5,
    "keywords": [
      "computational",
      "polymer",
      "chemistry",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico"
    ]
  },
  {
    "id": "polymer_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Polymer Chemistry",
    "baseWeight": 4,
    "keywords": [
      "polymer",
      "chemistry"
    ]
  },
  {
    "id": "materials_polymer_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Materials Polymer Chemistry",
    "baseWeight": 4,
    "keywords": [
      "materials",
      "polymer",
      "chemistry"
    ]
  },
  {
    "id": "environmental_polymer_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Environmental Polymer Chemistry",
    "baseWeight": 4,
    "keywords": [
      "environmental",
      "polymer",
      "chemistry"
    ]
  },
  {
    "id": "green_polymer_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Green Polymer Chemistry",
    "baseWeight": 4,
    "keywords": [
      "green",
      "polymer",
      "chemistry"
    ]
  },
  {
    "id": "electro_polymer_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Electro Polymer Chemistry",
    "baseWeight": 4,
    "keywords": [
      "electro",
      "polymer",
      "chemistry"
    ]
  },
  {
    "id": "photo_polymer_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Photo Polymer Chemistry",
    "baseWeight": 4,
    "keywords": [
      "photo",
      "polymer",
      "chemistry"
    ]
  },
  {
    "id": "astro_polymer_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Astro Polymer Chemistry",
    "baseWeight": 4,
    "keywords": [
      "astro",
      "polymer",
      "chemistry"
    ]
  },
  {
    "id": "geo_polymer_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Geo Polymer Chemistry",
    "baseWeight": 4,
    "keywords": [
      "polymer",
      "chemistry"
    ]
  },
  {
    "id": "supramolecular_polymer_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Supramolecular Polymer Chemistry",
    "baseWeight": 5,
    "keywords": [
      "supramolecular",
      "polymer",
      "chemistry"
    ]
  },
  {
    "id": "nano_polymer_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Nano Polymer Chemistry",
    "baseWeight": 4,
    "keywords": [
      "nano",
      "polymer",
      "chemistry"
    ]
  },
  {
    "id": "solid_state_polymer_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Solid-State Polymer Chemistry",
    "baseWeight": 4,
    "keywords": [
      "solid",
      "state",
      "polymer",
      "chemistry"
    ]
  },
  {
    "id": "synthetic_polymer_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Synthetic Polymer Chemistry",
    "baseWeight": 7,
    "keywords": [
      "synthetic",
      "polymer",
      "chemistry"
    ]
  },
  {
    "id": "thermochemical_polymer_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Thermochemical Polymer Chemistry",
    "baseWeight": 4,
    "keywords": [
      "thermochemical",
      "polymer",
      "chemistry"
    ]
  },
  {
    "id": "quantum_chemical_polymer_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Quantum Chemical Polymer Chemistry",
    "baseWeight": 7,
    "keywords": [
      "quantum",
      "chemical",
      "polymer",
      "chemistry",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "analytical_polymer_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Analytical Polymer Chemistry",
    "baseWeight": 4,
    "keywords": [
      "analytical",
      "polymer",
      "chemistry"
    ]
  },
  {
    "id": "industrial_polymer_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Industrial Polymer Chemistry",
    "baseWeight": 4,
    "keywords": [
      "industrial",
      "polymer",
      "chemistry"
    ]
  },
  {
    "id": "spectroscopic_polymer_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Spectroscopic Polymer Chemistry",
    "baseWeight": 4,
    "keywords": [
      "spectroscopic",
      "polymer",
      "chemistry"
    ]
  },
  {
    "id": "catalytic_polymer_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Catalytic Polymer Chemistry",
    "baseWeight": 4,
    "keywords": [
      "catalytic",
      "polymer",
      "chemistry"
    ]
  },
  {
    "id": "organic_materials_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Organic Materials Chemistry",
    "baseWeight": 5,
    "keywords": [
      "organic",
      "materials",
      "chemistry",
      "carbon",
      "molecule",
      "covalent",
      "isomer",
      "synthesis"
    ]
  },
  {
    "id": "inorganic_materials_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Inorganic Materials Chemistry",
    "baseWeight": 5,
    "keywords": [
      "inorganic",
      "materials",
      "chemistry",
      "carbon",
      "organic",
      "molecule",
      "covalent",
      "isomer",
      "synthesis"
    ]
  },
  {
    "id": "physical_materials_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Physical Materials Chemistry",
    "baseWeight": 5,
    "keywords": [
      "physical",
      "materials",
      "chemistry"
    ]
  },
  {
    "id": "analytical_materials_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Analytical Materials Chemistry",
    "baseWeight": 5,
    "keywords": [
      "analytical",
      "materials",
      "chemistry"
    ]
  },
  {
    "id": "biochemical_materials_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Biochemical Materials Chemistry",
    "baseWeight": 5,
    "keywords": [
      "biochemical",
      "materials",
      "chemistry"
    ]
  },
  {
    "id": "theoretical_materials_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Theoretical Materials Chemistry",
    "baseWeight": 6,
    "keywords": [
      "theoretical",
      "materials",
      "chemistry",
      "mathematical",
      "formalism",
      "derivation",
      "hypothesis"
    ]
  },
  {
    "id": "computational_materials_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Computational Materials Chemistry",
    "baseWeight": 6,
    "keywords": [
      "computational",
      "materials",
      "chemistry",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico"
    ]
  },
  {
    "id": "polymer_materials_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Polymer Materials Chemistry",
    "baseWeight": 5,
    "keywords": [
      "polymer",
      "materials",
      "chemistry"
    ]
  },
  {
    "id": "materials_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Materials Chemistry",
    "baseWeight": 5,
    "keywords": [
      "materials",
      "chemistry"
    ]
  },
  {
    "id": "environmental_materials_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Environmental Materials Chemistry",
    "baseWeight": 5,
    "keywords": [
      "environmental",
      "materials",
      "chemistry"
    ]
  },
  {
    "id": "green_materials_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Green Materials Chemistry",
    "baseWeight": 5,
    "keywords": [
      "green",
      "materials",
      "chemistry"
    ]
  },
  {
    "id": "electro_materials_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Electro Materials Chemistry",
    "baseWeight": 5,
    "keywords": [
      "electro",
      "materials",
      "chemistry"
    ]
  },
  {
    "id": "photo_materials_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Photo Materials Chemistry",
    "baseWeight": 5,
    "keywords": [
      "photo",
      "materials",
      "chemistry"
    ]
  },
  {
    "id": "astro_materials_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Astro Materials Chemistry",
    "baseWeight": 5,
    "keywords": [
      "astro",
      "materials",
      "chemistry"
    ]
  },
  {
    "id": "geo_materials_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Geo Materials Chemistry",
    "baseWeight": 5,
    "keywords": [
      "materials",
      "chemistry"
    ]
  },
  {
    "id": "supramolecular_materials_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Supramolecular Materials Chemistry",
    "baseWeight": 6,
    "keywords": [
      "supramolecular",
      "materials",
      "chemistry"
    ]
  },
  {
    "id": "nano_materials_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Nano Materials Chemistry",
    "baseWeight": 5,
    "keywords": [
      "nano",
      "materials",
      "chemistry"
    ]
  },
  {
    "id": "solid_state_materials_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Solid-State Materials Chemistry",
    "baseWeight": 5,
    "keywords": [
      "solid",
      "state",
      "materials",
      "chemistry"
    ]
  },
  {
    "id": "synthetic_materials_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Synthetic Materials Chemistry",
    "baseWeight": 8,
    "keywords": [
      "synthetic",
      "materials",
      "chemistry"
    ]
  },
  {
    "id": "thermochemical_materials_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Thermochemical Materials Chemistry",
    "baseWeight": 5,
    "keywords": [
      "thermochemical",
      "materials",
      "chemistry"
    ]
  },
  {
    "id": "quantum_chemical_materials_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Quantum Chemical Materials Chemistry",
    "baseWeight": 8,
    "keywords": [
      "quantum",
      "chemical",
      "materials",
      "chemistry",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "analytical_materials_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Analytical Materials Chemistry",
    "baseWeight": 5,
    "keywords": [
      "analytical",
      "materials",
      "chemistry"
    ]
  },
  {
    "id": "industrial_materials_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Industrial Materials Chemistry",
    "baseWeight": 5,
    "keywords": [
      "industrial",
      "materials",
      "chemistry"
    ]
  },
  {
    "id": "spectroscopic_materials_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Spectroscopic Materials Chemistry",
    "baseWeight": 5,
    "keywords": [
      "spectroscopic",
      "materials",
      "chemistry"
    ]
  },
  {
    "id": "catalytic_materials_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Catalytic Materials Chemistry",
    "baseWeight": 5,
    "keywords": [
      "catalytic",
      "materials",
      "chemistry"
    ]
  },
  {
    "id": "organic_environmental_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Organic Environmental Chemistry",
    "baseWeight": 6,
    "keywords": [
      "organic",
      "environmental",
      "chemistry",
      "carbon",
      "molecule",
      "covalent",
      "isomer",
      "synthesis"
    ]
  },
  {
    "id": "inorganic_environmental_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Inorganic Environmental Chemistry",
    "baseWeight": 6,
    "keywords": [
      "inorganic",
      "environmental",
      "chemistry",
      "carbon",
      "organic",
      "molecule",
      "covalent",
      "isomer",
      "synthesis"
    ]
  },
  {
    "id": "physical_environmental_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Physical Environmental Chemistry",
    "baseWeight": 6,
    "keywords": [
      "physical",
      "environmental",
      "chemistry"
    ]
  },
  {
    "id": "analytical_environmental_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Analytical Environmental Chemistry",
    "baseWeight": 6,
    "keywords": [
      "analytical",
      "environmental",
      "chemistry"
    ]
  },
  {
    "id": "biochemical_environmental_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Biochemical Environmental Chemistry",
    "baseWeight": 6,
    "keywords": [
      "biochemical",
      "environmental",
      "chemistry"
    ]
  },
  {
    "id": "theoretical_environmental_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Theoretical Environmental Chemistry",
    "baseWeight": 7,
    "keywords": [
      "theoretical",
      "environmental",
      "chemistry",
      "mathematical",
      "formalism",
      "derivation",
      "hypothesis"
    ]
  },
  {
    "id": "computational_environmental_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Computational Environmental Chemistry",
    "baseWeight": 7,
    "keywords": [
      "computational",
      "environmental",
      "chemistry",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico"
    ]
  },
  {
    "id": "polymer_environmental_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Polymer Environmental Chemistry",
    "baseWeight": 6,
    "keywords": [
      "polymer",
      "environmental",
      "chemistry"
    ]
  },
  {
    "id": "materials_environmental_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Materials Environmental Chemistry",
    "baseWeight": 6,
    "keywords": [
      "materials",
      "environmental",
      "chemistry"
    ]
  },
  {
    "id": "environmental_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Environmental Chemistry",
    "baseWeight": 6,
    "keywords": [
      "environmental",
      "chemistry"
    ]
  },
  {
    "id": "green_environmental_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Green Environmental Chemistry",
    "baseWeight": 6,
    "keywords": [
      "green",
      "environmental",
      "chemistry"
    ]
  },
  {
    "id": "electro_environmental_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Electro Environmental Chemistry",
    "baseWeight": 6,
    "keywords": [
      "electro",
      "environmental",
      "chemistry"
    ]
  },
  {
    "id": "photo_environmental_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Photo Environmental Chemistry",
    "baseWeight": 6,
    "keywords": [
      "photo",
      "environmental",
      "chemistry"
    ]
  },
  {
    "id": "astro_environmental_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Astro Environmental Chemistry",
    "baseWeight": 6,
    "keywords": [
      "astro",
      "environmental",
      "chemistry"
    ]
  },
  {
    "id": "geo_environmental_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Geo Environmental Chemistry",
    "baseWeight": 6,
    "keywords": [
      "environmental",
      "chemistry"
    ]
  },
  {
    "id": "supramolecular_environmental_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Supramolecular Environmental Chemistry",
    "baseWeight": 7,
    "keywords": [
      "supramolecular",
      "environmental",
      "chemistry"
    ]
  },
  {
    "id": "nano_environmental_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Nano Environmental Chemistry",
    "baseWeight": 6,
    "keywords": [
      "nano",
      "environmental",
      "chemistry"
    ]
  },
  {
    "id": "solid_state_environmental_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Solid-State Environmental Chemistry",
    "baseWeight": 6,
    "keywords": [
      "solid",
      "state",
      "environmental",
      "chemistry"
    ]
  },
  {
    "id": "synthetic_environmental_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Synthetic Environmental Chemistry",
    "baseWeight": 9,
    "keywords": [
      "synthetic",
      "environmental",
      "chemistry"
    ]
  },
  {
    "id": "thermochemical_environmental_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Thermochemical Environmental Chemistry",
    "baseWeight": 6,
    "keywords": [
      "thermochemical",
      "environmental",
      "chemistry"
    ]
  },
  {
    "id": "quantum_chemical_environmental_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Quantum Chemical Environmental Chemistry",
    "baseWeight": 9,
    "keywords": [
      "quantum",
      "chemical",
      "environmental",
      "chemistry",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "analytical_environmental_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Analytical Environmental Chemistry",
    "baseWeight": 6,
    "keywords": [
      "analytical",
      "environmental",
      "chemistry"
    ]
  },
  {
    "id": "industrial_environmental_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Industrial Environmental Chemistry",
    "baseWeight": 6,
    "keywords": [
      "industrial",
      "environmental",
      "chemistry"
    ]
  },
  {
    "id": "spectroscopic_environmental_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Spectroscopic Environmental Chemistry",
    "baseWeight": 6,
    "keywords": [
      "spectroscopic",
      "environmental",
      "chemistry"
    ]
  },
  {
    "id": "catalytic_environmental_chemistry",
    "discipline": "CHEMISTRY",
    "name": "Catalytic Environmental Chemistry",
    "baseWeight": 6,
    "keywords": [
      "catalytic",
      "environmental",
      "chemistry"
    ]
  },
  {
    "id": "organic_electrochemistry",
    "discipline": "CHEMISTRY",
    "name": "Organic Electrochemistry",
    "baseWeight": 4,
    "keywords": [
      "organic",
      "electrochemistry",
      "carbon",
      "molecule",
      "covalent",
      "isomer",
      "synthesis"
    ]
  },
  {
    "id": "inorganic_electrochemistry",
    "discipline": "CHEMISTRY",
    "name": "Inorganic Electrochemistry",
    "baseWeight": 4,
    "keywords": [
      "inorganic",
      "electrochemistry",
      "carbon",
      "organic",
      "molecule",
      "covalent",
      "isomer",
      "synthesis"
    ]
  },
  {
    "id": "physical_electrochemistry",
    "discipline": "CHEMISTRY",
    "name": "Physical Electrochemistry",
    "baseWeight": 4,
    "keywords": [
      "physical",
      "electrochemistry"
    ]
  },
  {
    "id": "analytical_electrochemistry",
    "discipline": "CHEMISTRY",
    "name": "Analytical Electrochemistry",
    "baseWeight": 4,
    "keywords": [
      "analytical",
      "electrochemistry"
    ]
  },
  {
    "id": "biochemical_electrochemistry",
    "discipline": "CHEMISTRY",
    "name": "Biochemical Electrochemistry",
    "baseWeight": 4,
    "keywords": [
      "biochemical",
      "electrochemistry"
    ]
  },
  {
    "id": "theoretical_electrochemistry",
    "discipline": "CHEMISTRY",
    "name": "Theoretical Electrochemistry",
    "baseWeight": 5,
    "keywords": [
      "theoretical",
      "electrochemistry",
      "mathematical",
      "formalism",
      "derivation",
      "hypothesis"
    ]
  },
  {
    "id": "computational_electrochemistry",
    "discipline": "CHEMISTRY",
    "name": "Computational Electrochemistry",
    "baseWeight": 5,
    "keywords": [
      "computational",
      "electrochemistry",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico"
    ]
  },
  {
    "id": "polymer_electrochemistry",
    "discipline": "CHEMISTRY",
    "name": "Polymer Electrochemistry",
    "baseWeight": 4,
    "keywords": [
      "polymer",
      "electrochemistry"
    ]
  },
  {
    "id": "materials_electrochemistry",
    "discipline": "CHEMISTRY",
    "name": "Materials Electrochemistry",
    "baseWeight": 4,
    "keywords": [
      "materials",
      "electrochemistry"
    ]
  },
  {
    "id": "environmental_electrochemistry",
    "discipline": "CHEMISTRY",
    "name": "Environmental Electrochemistry",
    "baseWeight": 4,
    "keywords": [
      "environmental",
      "electrochemistry"
    ]
  },
  {
    "id": "green_electrochemistry",
    "discipline": "CHEMISTRY",
    "name": "Green Electrochemistry",
    "baseWeight": 4,
    "keywords": [
      "green",
      "electrochemistry"
    ]
  },
  {
    "id": "electro_electrochemistry",
    "discipline": "CHEMISTRY",
    "name": "Electro Electrochemistry",
    "baseWeight": 4,
    "keywords": [
      "electro",
      "electrochemistry"
    ]
  },
  {
    "id": "photo_electrochemistry",
    "discipline": "CHEMISTRY",
    "name": "Photo Electrochemistry",
    "baseWeight": 4,
    "keywords": [
      "photo",
      "electrochemistry"
    ]
  },
  {
    "id": "astro_electrochemistry",
    "discipline": "CHEMISTRY",
    "name": "Astro Electrochemistry",
    "baseWeight": 4,
    "keywords": [
      "astro",
      "electrochemistry"
    ]
  },
  {
    "id": "geo_electrochemistry",
    "discipline": "CHEMISTRY",
    "name": "Geo Electrochemistry",
    "baseWeight": 4,
    "keywords": [
      "electrochemistry"
    ]
  },
  {
    "id": "supramolecular_electrochemistry",
    "discipline": "CHEMISTRY",
    "name": "Supramolecular Electrochemistry",
    "baseWeight": 5,
    "keywords": [
      "supramolecular",
      "electrochemistry"
    ]
  },
  {
    "id": "nano_electrochemistry",
    "discipline": "CHEMISTRY",
    "name": "Nano Electrochemistry",
    "baseWeight": 4,
    "keywords": [
      "nano",
      "electrochemistry"
    ]
  },
  {
    "id": "solid_state_electrochemistry",
    "discipline": "CHEMISTRY",
    "name": "Solid-State Electrochemistry",
    "baseWeight": 4,
    "keywords": [
      "solid",
      "state",
      "electrochemistry"
    ]
  },
  {
    "id": "synthetic_electrochemistry",
    "discipline": "CHEMISTRY",
    "name": "Synthetic Electrochemistry",
    "baseWeight": 7,
    "keywords": [
      "synthetic",
      "electrochemistry"
    ]
  },
  {
    "id": "thermochemical_electrochemistry",
    "discipline": "CHEMISTRY",
    "name": "Thermochemical Electrochemistry",
    "baseWeight": 4,
    "keywords": [
      "thermochemical",
      "electrochemistry"
    ]
  },
  {
    "id": "quantum_chemical_electrochemistry",
    "discipline": "CHEMISTRY",
    "name": "Quantum Chemical Electrochemistry",
    "baseWeight": 7,
    "keywords": [
      "quantum",
      "chemical",
      "electrochemistry",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "analytical_electrochemistry",
    "discipline": "CHEMISTRY",
    "name": "Analytical Electrochemistry",
    "baseWeight": 4,
    "keywords": [
      "analytical",
      "electrochemistry"
    ]
  },
  {
    "id": "industrial_electrochemistry",
    "discipline": "CHEMISTRY",
    "name": "Industrial Electrochemistry",
    "baseWeight": 4,
    "keywords": [
      "industrial",
      "electrochemistry"
    ]
  },
  {
    "id": "spectroscopic_electrochemistry",
    "discipline": "CHEMISTRY",
    "name": "Spectroscopic Electrochemistry",
    "baseWeight": 4,
    "keywords": [
      "spectroscopic",
      "electrochemistry"
    ]
  },
  {
    "id": "catalytic_electrochemistry",
    "discipline": "CHEMISTRY",
    "name": "Catalytic Electrochemistry",
    "baseWeight": 4,
    "keywords": [
      "catalytic",
      "electrochemistry"
    ]
  },
  {
    "id": "molecular_zoology_animal_science",
    "discipline": "BIOLOGY",
    "name": "Molecular Zoology & Animal Science",
    "baseWeight": 5,
    "keywords": [
      "molecular",
      "zoology",
      "animal",
      "science"
    ]
  },
  {
    "id": "cellular_zoology_animal_science",
    "discipline": "BIOLOGY",
    "name": "Cellular Zoology & Animal Science",
    "baseWeight": 4,
    "keywords": [
      "cellular",
      "zoology",
      "animal",
      "science"
    ]
  },
  {
    "id": "structural_zoology_animal_science",
    "discipline": "BIOLOGY",
    "name": "Structural Zoology & Animal Science",
    "baseWeight": 4,
    "keywords": [
      "structural",
      "zoology",
      "animal",
      "science"
    ]
  },
  {
    "id": "evolutionary_zoology_animal_science",
    "discipline": "BIOLOGY",
    "name": "Evolutionary Zoology & Animal Science",
    "baseWeight": 4,
    "keywords": [
      "evolutionary",
      "zoology",
      "animal",
      "science"
    ]
  },
  {
    "id": "computational_zoology_animal_science",
    "discipline": "BIOLOGY",
    "name": "Computational Zoology & Animal Science",
    "baseWeight": 5,
    "keywords": [
      "computational",
      "zoology",
      "animal",
      "science",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico"
    ]
  },
  {
    "id": "systems_zoology_animal_science",
    "discipline": "BIOLOGY",
    "name": "Systems Zoology & Animal Science",
    "baseWeight": 4,
    "keywords": [
      "systems",
      "zoology",
      "animal",
      "science"
    ]
  },
  {
    "id": "synthetic_zoology_animal_science",
    "discipline": "BIOLOGY",
    "name": "Synthetic Zoology & Animal Science",
    "baseWeight": 7,
    "keywords": [
      "synthetic",
      "zoology",
      "animal",
      "science"
    ]
  },
  {
    "id": "applied_zoology_animal_science",
    "discipline": "BIOLOGY",
    "name": "Applied Zoology & Animal Science",
    "baseWeight": 4,
    "keywords": [
      "applied",
      "zoology",
      "animal",
      "science"
    ]
  },
  {
    "id": "genomic_zoology_animal_science",
    "discipline": "BIOLOGY",
    "name": "Genomic Zoology & Animal Science",
    "baseWeight": 7,
    "keywords": [
      "genomic",
      "zoology",
      "animal",
      "science"
    ]
  },
  {
    "id": "proteomic_zoology_animal_science",
    "discipline": "BIOLOGY",
    "name": "Proteomic Zoology & Animal Science",
    "baseWeight": 4,
    "keywords": [
      "proteomic",
      "zoology",
      "animal",
      "science"
    ]
  },
  {
    "id": "neuro_zoology_animal_science",
    "discipline": "BIOLOGY",
    "name": "Neuro Zoology & Animal Science",
    "baseWeight": 4,
    "keywords": [
      "neuro",
      "zoology",
      "animal",
      "science"
    ]
  },
  {
    "id": "bio_zoology_animal_science",
    "discipline": "BIOLOGY",
    "name": "Bio Zoology & Animal Science",
    "baseWeight": 4,
    "keywords": [
      "zoology",
      "animal",
      "science"
    ]
  },
  {
    "id": "immuno_zoology_animal_science",
    "discipline": "BIOLOGY",
    "name": "Immuno Zoology & Animal Science",
    "baseWeight": 4,
    "keywords": [
      "immuno",
      "zoology",
      "animal",
      "science"
    ]
  },
  {
    "id": "virological_zoology_animal_science",
    "discipline": "BIOLOGY",
    "name": "Virological Zoology & Animal Science",
    "baseWeight": 4,
    "keywords": [
      "virological",
      "zoology",
      "animal",
      "science"
    ]
  },
  {
    "id": "microbiological_zoology_animal_science",
    "discipline": "BIOLOGY",
    "name": "Microbiological Zoology & Animal Science",
    "baseWeight": 4,
    "keywords": [
      "microbiological",
      "zoology",
      "animal",
      "science"
    ]
  },
  {
    "id": "ecological_zoology_animal_science",
    "discipline": "BIOLOGY",
    "name": "Ecological Zoology & Animal Science",
    "baseWeight": 4,
    "keywords": [
      "ecological",
      "zoology",
      "animal",
      "science"
    ]
  },
  {
    "id": "marine_zoology_animal_science",
    "discipline": "BIOLOGY",
    "name": "Marine Zoology & Animal Science",
    "baseWeight": 4,
    "keywords": [
      "marine",
      "zoology",
      "animal",
      "science"
    ]
  },
  {
    "id": "developmental_zoology_animal_science",
    "discipline": "BIOLOGY",
    "name": "Developmental Zoology & Animal Science",
    "baseWeight": 4,
    "keywords": [
      "developmental",
      "zoology",
      "animal",
      "science"
    ]
  },
  {
    "id": "population_zoology_animal_science",
    "discipline": "BIOLOGY",
    "name": "Population Zoology & Animal Science",
    "baseWeight": 4,
    "keywords": [
      "population",
      "zoology",
      "animal",
      "science"
    ]
  },
  {
    "id": "astrobiological_zoology_animal_science",
    "discipline": "BIOLOGY",
    "name": "Astrobiological Zoology & Animal Science",
    "baseWeight": 4,
    "keywords": [
      "astrobiological",
      "zoology",
      "animal",
      "science"
    ]
  },
  {
    "id": "mycological_zoology_animal_science",
    "discipline": "BIOLOGY",
    "name": "Mycological Zoology & Animal Science",
    "baseWeight": 4,
    "keywords": [
      "mycological",
      "zoology",
      "animal",
      "science"
    ]
  },
  {
    "id": "parasitological_zoology_animal_science",
    "discipline": "BIOLOGY",
    "name": "Parasitological Zoology & Animal Science",
    "baseWeight": 4,
    "keywords": [
      "parasitological",
      "zoology",
      "animal",
      "science"
    ]
  },
  {
    "id": "bioinformatic_zoology_animal_science",
    "discipline": "BIOLOGY",
    "name": "Bioinformatic Zoology & Animal Science",
    "baseWeight": 4,
    "keywords": [
      "bioinformatic",
      "zoology",
      "animal",
      "science"
    ]
  },
  {
    "id": "biotechnological_zoology_animal_science",
    "discipline": "BIOLOGY",
    "name": "Biotechnological Zoology & Animal Science",
    "baseWeight": 4,
    "keywords": [
      "biotechnological",
      "zoology",
      "animal",
      "science"
    ]
  },
  {
    "id": "physiological_zoology_animal_science",
    "discipline": "BIOLOGY",
    "name": "Physiological Zoology & Animal Science",
    "baseWeight": 4,
    "keywords": [
      "physiological",
      "zoology",
      "animal",
      "science"
    ]
  },
  {
    "id": "molecular_botany_plant_science",
    "discipline": "BIOLOGY",
    "name": "Molecular Botany & Plant Science",
    "baseWeight": 6,
    "keywords": [
      "molecular",
      "botany",
      "plant",
      "science"
    ]
  },
  {
    "id": "cellular_botany_plant_science",
    "discipline": "BIOLOGY",
    "name": "Cellular Botany & Plant Science",
    "baseWeight": 5,
    "keywords": [
      "cellular",
      "botany",
      "plant",
      "science"
    ]
  },
  {
    "id": "structural_botany_plant_science",
    "discipline": "BIOLOGY",
    "name": "Structural Botany & Plant Science",
    "baseWeight": 5,
    "keywords": [
      "structural",
      "botany",
      "plant",
      "science"
    ]
  },
  {
    "id": "evolutionary_botany_plant_science",
    "discipline": "BIOLOGY",
    "name": "Evolutionary Botany & Plant Science",
    "baseWeight": 5,
    "keywords": [
      "evolutionary",
      "botany",
      "plant",
      "science"
    ]
  },
  {
    "id": "computational_botany_plant_science",
    "discipline": "BIOLOGY",
    "name": "Computational Botany & Plant Science",
    "baseWeight": 6,
    "keywords": [
      "computational",
      "botany",
      "plant",
      "science",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico"
    ]
  },
  {
    "id": "systems_botany_plant_science",
    "discipline": "BIOLOGY",
    "name": "Systems Botany & Plant Science",
    "baseWeight": 5,
    "keywords": [
      "systems",
      "botany",
      "plant",
      "science"
    ]
  },
  {
    "id": "synthetic_botany_plant_science",
    "discipline": "BIOLOGY",
    "name": "Synthetic Botany & Plant Science",
    "baseWeight": 8,
    "keywords": [
      "synthetic",
      "botany",
      "plant",
      "science"
    ]
  },
  {
    "id": "applied_botany_plant_science",
    "discipline": "BIOLOGY",
    "name": "Applied Botany & Plant Science",
    "baseWeight": 5,
    "keywords": [
      "applied",
      "botany",
      "plant",
      "science"
    ]
  },
  {
    "id": "genomic_botany_plant_science",
    "discipline": "BIOLOGY",
    "name": "Genomic Botany & Plant Science",
    "baseWeight": 8,
    "keywords": [
      "genomic",
      "botany",
      "plant",
      "science"
    ]
  },
  {
    "id": "proteomic_botany_plant_science",
    "discipline": "BIOLOGY",
    "name": "Proteomic Botany & Plant Science",
    "baseWeight": 5,
    "keywords": [
      "proteomic",
      "botany",
      "plant",
      "science"
    ]
  },
  {
    "id": "neuro_botany_plant_science",
    "discipline": "BIOLOGY",
    "name": "Neuro Botany & Plant Science",
    "baseWeight": 5,
    "keywords": [
      "neuro",
      "botany",
      "plant",
      "science"
    ]
  },
  {
    "id": "bio_botany_plant_science",
    "discipline": "BIOLOGY",
    "name": "Bio Botany & Plant Science",
    "baseWeight": 5,
    "keywords": [
      "botany",
      "plant",
      "science"
    ]
  },
  {
    "id": "immuno_botany_plant_science",
    "discipline": "BIOLOGY",
    "name": "Immuno Botany & Plant Science",
    "baseWeight": 5,
    "keywords": [
      "immuno",
      "botany",
      "plant",
      "science"
    ]
  },
  {
    "id": "virological_botany_plant_science",
    "discipline": "BIOLOGY",
    "name": "Virological Botany & Plant Science",
    "baseWeight": 5,
    "keywords": [
      "virological",
      "botany",
      "plant",
      "science"
    ]
  },
  {
    "id": "microbiological_botany_plant_science",
    "discipline": "BIOLOGY",
    "name": "Microbiological Botany & Plant Science",
    "baseWeight": 5,
    "keywords": [
      "microbiological",
      "botany",
      "plant",
      "science"
    ]
  },
  {
    "id": "ecological_botany_plant_science",
    "discipline": "BIOLOGY",
    "name": "Ecological Botany & Plant Science",
    "baseWeight": 5,
    "keywords": [
      "ecological",
      "botany",
      "plant",
      "science"
    ]
  },
  {
    "id": "marine_botany_plant_science",
    "discipline": "BIOLOGY",
    "name": "Marine Botany & Plant Science",
    "baseWeight": 5,
    "keywords": [
      "marine",
      "botany",
      "plant",
      "science"
    ]
  },
  {
    "id": "developmental_botany_plant_science",
    "discipline": "BIOLOGY",
    "name": "Developmental Botany & Plant Science",
    "baseWeight": 5,
    "keywords": [
      "developmental",
      "botany",
      "plant",
      "science"
    ]
  },
  {
    "id": "population_botany_plant_science",
    "discipline": "BIOLOGY",
    "name": "Population Botany & Plant Science",
    "baseWeight": 5,
    "keywords": [
      "population",
      "botany",
      "plant",
      "science"
    ]
  },
  {
    "id": "astrobiological_botany_plant_science",
    "discipline": "BIOLOGY",
    "name": "Astrobiological Botany & Plant Science",
    "baseWeight": 5,
    "keywords": [
      "astrobiological",
      "botany",
      "plant",
      "science"
    ]
  },
  {
    "id": "mycological_botany_plant_science",
    "discipline": "BIOLOGY",
    "name": "Mycological Botany & Plant Science",
    "baseWeight": 5,
    "keywords": [
      "mycological",
      "botany",
      "plant",
      "science"
    ]
  },
  {
    "id": "parasitological_botany_plant_science",
    "discipline": "BIOLOGY",
    "name": "Parasitological Botany & Plant Science",
    "baseWeight": 5,
    "keywords": [
      "parasitological",
      "botany",
      "plant",
      "science"
    ]
  },
  {
    "id": "bioinformatic_botany_plant_science",
    "discipline": "BIOLOGY",
    "name": "Bioinformatic Botany & Plant Science",
    "baseWeight": 5,
    "keywords": [
      "bioinformatic",
      "botany",
      "plant",
      "science"
    ]
  },
  {
    "id": "biotechnological_botany_plant_science",
    "discipline": "BIOLOGY",
    "name": "Biotechnological Botany & Plant Science",
    "baseWeight": 5,
    "keywords": [
      "biotechnological",
      "botany",
      "plant",
      "science"
    ]
  },
  {
    "id": "physiological_botany_plant_science",
    "discipline": "BIOLOGY",
    "name": "Physiological Botany & Plant Science",
    "baseWeight": 5,
    "keywords": [
      "physiological",
      "botany",
      "plant",
      "science"
    ]
  },
  {
    "id": "molecular_microbiology_virology",
    "discipline": "BIOLOGY",
    "name": "Molecular Microbiology & Virology",
    "baseWeight": 7,
    "keywords": [
      "molecular",
      "microbiology",
      "virology"
    ]
  },
  {
    "id": "cellular_microbiology_virology",
    "discipline": "BIOLOGY",
    "name": "Cellular Microbiology & Virology",
    "baseWeight": 6,
    "keywords": [
      "cellular",
      "microbiology",
      "virology"
    ]
  },
  {
    "id": "structural_microbiology_virology",
    "discipline": "BIOLOGY",
    "name": "Structural Microbiology & Virology",
    "baseWeight": 6,
    "keywords": [
      "structural",
      "microbiology",
      "virology"
    ]
  },
  {
    "id": "evolutionary_microbiology_virology",
    "discipline": "BIOLOGY",
    "name": "Evolutionary Microbiology & Virology",
    "baseWeight": 6,
    "keywords": [
      "evolutionary",
      "microbiology",
      "virology"
    ]
  },
  {
    "id": "computational_microbiology_virology",
    "discipline": "BIOLOGY",
    "name": "Computational Microbiology & Virology",
    "baseWeight": 7,
    "keywords": [
      "computational",
      "microbiology",
      "virology",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico"
    ]
  },
  {
    "id": "systems_microbiology_virology",
    "discipline": "BIOLOGY",
    "name": "Systems Microbiology & Virology",
    "baseWeight": 6,
    "keywords": [
      "systems",
      "microbiology",
      "virology"
    ]
  },
  {
    "id": "synthetic_microbiology_virology",
    "discipline": "BIOLOGY",
    "name": "Synthetic Microbiology & Virology",
    "baseWeight": 9,
    "keywords": [
      "synthetic",
      "microbiology",
      "virology"
    ]
  },
  {
    "id": "applied_microbiology_virology",
    "discipline": "BIOLOGY",
    "name": "Applied Microbiology & Virology",
    "baseWeight": 6,
    "keywords": [
      "applied",
      "microbiology",
      "virology"
    ]
  },
  {
    "id": "genomic_microbiology_virology",
    "discipline": "BIOLOGY",
    "name": "Genomic Microbiology & Virology",
    "baseWeight": 9,
    "keywords": [
      "genomic",
      "microbiology",
      "virology"
    ]
  },
  {
    "id": "proteomic_microbiology_virology",
    "discipline": "BIOLOGY",
    "name": "Proteomic Microbiology & Virology",
    "baseWeight": 6,
    "keywords": [
      "proteomic",
      "microbiology",
      "virology"
    ]
  },
  {
    "id": "neuro_microbiology_virology",
    "discipline": "BIOLOGY",
    "name": "Neuro Microbiology & Virology",
    "baseWeight": 6,
    "keywords": [
      "neuro",
      "microbiology",
      "virology"
    ]
  },
  {
    "id": "bio_microbiology_virology",
    "discipline": "BIOLOGY",
    "name": "Bio Microbiology & Virology",
    "baseWeight": 6,
    "keywords": [
      "microbiology",
      "virology"
    ]
  },
  {
    "id": "immuno_microbiology_virology",
    "discipline": "BIOLOGY",
    "name": "Immuno Microbiology & Virology",
    "baseWeight": 6,
    "keywords": [
      "immuno",
      "microbiology",
      "virology"
    ]
  },
  {
    "id": "virological_microbiology_virology",
    "discipline": "BIOLOGY",
    "name": "Virological Microbiology & Virology",
    "baseWeight": 6,
    "keywords": [
      "virological",
      "microbiology",
      "virology"
    ]
  },
  {
    "id": "microbiological_microbiology_virology",
    "discipline": "BIOLOGY",
    "name": "Microbiological Microbiology & Virology",
    "baseWeight": 6,
    "keywords": [
      "microbiological",
      "microbiology",
      "virology"
    ]
  },
  {
    "id": "ecological_microbiology_virology",
    "discipline": "BIOLOGY",
    "name": "Ecological Microbiology & Virology",
    "baseWeight": 6,
    "keywords": [
      "ecological",
      "microbiology",
      "virology"
    ]
  },
  {
    "id": "marine_microbiology_virology",
    "discipline": "BIOLOGY",
    "name": "Marine Microbiology & Virology",
    "baseWeight": 6,
    "keywords": [
      "marine",
      "microbiology",
      "virology"
    ]
  },
  {
    "id": "developmental_microbiology_virology",
    "discipline": "BIOLOGY",
    "name": "Developmental Microbiology & Virology",
    "baseWeight": 6,
    "keywords": [
      "developmental",
      "microbiology",
      "virology"
    ]
  },
  {
    "id": "population_microbiology_virology",
    "discipline": "BIOLOGY",
    "name": "Population Microbiology & Virology",
    "baseWeight": 6,
    "keywords": [
      "population",
      "microbiology",
      "virology"
    ]
  },
  {
    "id": "astrobiological_microbiology_virology",
    "discipline": "BIOLOGY",
    "name": "Astrobiological Microbiology & Virology",
    "baseWeight": 6,
    "keywords": [
      "astrobiological",
      "microbiology",
      "virology"
    ]
  },
  {
    "id": "mycological_microbiology_virology",
    "discipline": "BIOLOGY",
    "name": "Mycological Microbiology & Virology",
    "baseWeight": 6,
    "keywords": [
      "mycological",
      "microbiology",
      "virology"
    ]
  },
  {
    "id": "parasitological_microbiology_virology",
    "discipline": "BIOLOGY",
    "name": "Parasitological Microbiology & Virology",
    "baseWeight": 6,
    "keywords": [
      "parasitological",
      "microbiology",
      "virology"
    ]
  },
  {
    "id": "bioinformatic_microbiology_virology",
    "discipline": "BIOLOGY",
    "name": "Bioinformatic Microbiology & Virology",
    "baseWeight": 6,
    "keywords": [
      "bioinformatic",
      "microbiology",
      "virology"
    ]
  },
  {
    "id": "biotechnological_microbiology_virology",
    "discipline": "BIOLOGY",
    "name": "Biotechnological Microbiology & Virology",
    "baseWeight": 6,
    "keywords": [
      "biotechnological",
      "microbiology",
      "virology"
    ]
  },
  {
    "id": "physiological_microbiology_virology",
    "discipline": "BIOLOGY",
    "name": "Physiological Microbiology & Virology",
    "baseWeight": 6,
    "keywords": [
      "physiological",
      "microbiology",
      "virology"
    ]
  },
  {
    "id": "molecular_genetics_genomics",
    "discipline": "BIOLOGY",
    "name": "Molecular Genetics & Genomics",
    "baseWeight": 5,
    "keywords": [
      "molecular",
      "genetics",
      "genomics",
      "dna",
      "rna",
      "gene",
      "crispr",
      "genome",
      "nucleotide"
    ]
  },
  {
    "id": "cellular_genetics_genomics",
    "discipline": "BIOLOGY",
    "name": "Cellular Genetics & Genomics",
    "baseWeight": 4,
    "keywords": [
      "cellular",
      "genetics",
      "genomics",
      "dna",
      "rna",
      "gene",
      "crispr",
      "genome",
      "nucleotide"
    ]
  },
  {
    "id": "structural_genetics_genomics",
    "discipline": "BIOLOGY",
    "name": "Structural Genetics & Genomics",
    "baseWeight": 4,
    "keywords": [
      "structural",
      "genetics",
      "genomics",
      "dna",
      "rna",
      "gene",
      "crispr",
      "genome",
      "nucleotide"
    ]
  },
  {
    "id": "evolutionary_genetics_genomics",
    "discipline": "BIOLOGY",
    "name": "Evolutionary Genetics & Genomics",
    "baseWeight": 4,
    "keywords": [
      "evolutionary",
      "genetics",
      "genomics",
      "dna",
      "rna",
      "gene",
      "crispr",
      "genome",
      "nucleotide"
    ]
  },
  {
    "id": "computational_genetics_genomics",
    "discipline": "BIOLOGY",
    "name": "Computational Genetics & Genomics",
    "baseWeight": 5,
    "keywords": [
      "computational",
      "genetics",
      "genomics",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico",
      "dna",
      "rna",
      "gene",
      "crispr",
      "genome",
      "nucleotide"
    ]
  },
  {
    "id": "systems_genetics_genomics",
    "discipline": "BIOLOGY",
    "name": "Systems Genetics & Genomics",
    "baseWeight": 4,
    "keywords": [
      "systems",
      "genetics",
      "genomics",
      "dna",
      "rna",
      "gene",
      "crispr",
      "genome",
      "nucleotide"
    ]
  },
  {
    "id": "synthetic_genetics_genomics",
    "discipline": "BIOLOGY",
    "name": "Synthetic Genetics & Genomics",
    "baseWeight": 7,
    "keywords": [
      "synthetic",
      "genetics",
      "genomics",
      "dna",
      "rna",
      "gene",
      "crispr",
      "genome",
      "nucleotide"
    ]
  },
  {
    "id": "applied_genetics_genomics",
    "discipline": "BIOLOGY",
    "name": "Applied Genetics & Genomics",
    "baseWeight": 4,
    "keywords": [
      "applied",
      "genetics",
      "genomics",
      "dna",
      "rna",
      "gene",
      "crispr",
      "genome",
      "nucleotide"
    ]
  },
  {
    "id": "genomic_genetics_genomics",
    "discipline": "BIOLOGY",
    "name": "Genomic Genetics & Genomics",
    "baseWeight": 7,
    "keywords": [
      "genomic",
      "genetics",
      "genomics",
      "dna",
      "rna",
      "gene",
      "crispr",
      "genome",
      "nucleotide"
    ]
  },
  {
    "id": "proteomic_genetics_genomics",
    "discipline": "BIOLOGY",
    "name": "Proteomic Genetics & Genomics",
    "baseWeight": 4,
    "keywords": [
      "proteomic",
      "genetics",
      "genomics",
      "dna",
      "rna",
      "gene",
      "crispr",
      "genome",
      "nucleotide"
    ]
  },
  {
    "id": "neuro_genetics_genomics",
    "discipline": "BIOLOGY",
    "name": "Neuro Genetics & Genomics",
    "baseWeight": 4,
    "keywords": [
      "neuro",
      "genetics",
      "genomics",
      "dna",
      "rna",
      "gene",
      "crispr",
      "genome",
      "nucleotide"
    ]
  },
  {
    "id": "bio_genetics_genomics",
    "discipline": "BIOLOGY",
    "name": "Bio Genetics & Genomics",
    "baseWeight": 4,
    "keywords": [
      "genetics",
      "genomics",
      "dna",
      "rna",
      "gene",
      "crispr",
      "genome",
      "nucleotide"
    ]
  },
  {
    "id": "immuno_genetics_genomics",
    "discipline": "BIOLOGY",
    "name": "Immuno Genetics & Genomics",
    "baseWeight": 4,
    "keywords": [
      "immuno",
      "genetics",
      "genomics",
      "dna",
      "rna",
      "gene",
      "crispr",
      "genome",
      "nucleotide"
    ]
  },
  {
    "id": "virological_genetics_genomics",
    "discipline": "BIOLOGY",
    "name": "Virological Genetics & Genomics",
    "baseWeight": 4,
    "keywords": [
      "virological",
      "genetics",
      "genomics",
      "dna",
      "rna",
      "gene",
      "crispr",
      "genome",
      "nucleotide"
    ]
  },
  {
    "id": "microbiological_genetics_genomics",
    "discipline": "BIOLOGY",
    "name": "Microbiological Genetics & Genomics",
    "baseWeight": 4,
    "keywords": [
      "microbiological",
      "genetics",
      "genomics",
      "dna",
      "rna",
      "gene",
      "crispr",
      "genome",
      "nucleotide"
    ]
  },
  {
    "id": "ecological_genetics_genomics",
    "discipline": "BIOLOGY",
    "name": "Ecological Genetics & Genomics",
    "baseWeight": 4,
    "keywords": [
      "ecological",
      "genetics",
      "genomics",
      "dna",
      "rna",
      "gene",
      "crispr",
      "genome",
      "nucleotide"
    ]
  },
  {
    "id": "marine_genetics_genomics",
    "discipline": "BIOLOGY",
    "name": "Marine Genetics & Genomics",
    "baseWeight": 4,
    "keywords": [
      "marine",
      "genetics",
      "genomics",
      "dna",
      "rna",
      "gene",
      "crispr",
      "genome",
      "nucleotide"
    ]
  },
  {
    "id": "developmental_genetics_genomics",
    "discipline": "BIOLOGY",
    "name": "Developmental Genetics & Genomics",
    "baseWeight": 4,
    "keywords": [
      "developmental",
      "genetics",
      "genomics",
      "dna",
      "rna",
      "gene",
      "crispr",
      "genome",
      "nucleotide"
    ]
  },
  {
    "id": "population_genetics_genomics",
    "discipline": "BIOLOGY",
    "name": "Population Genetics & Genomics",
    "baseWeight": 4,
    "keywords": [
      "population",
      "genetics",
      "genomics",
      "dna",
      "rna",
      "gene",
      "crispr",
      "genome",
      "nucleotide"
    ]
  },
  {
    "id": "astrobiological_genetics_genomics",
    "discipline": "BIOLOGY",
    "name": "Astrobiological Genetics & Genomics",
    "baseWeight": 4,
    "keywords": [
      "astrobiological",
      "genetics",
      "genomics",
      "dna",
      "rna",
      "gene",
      "crispr",
      "genome",
      "nucleotide"
    ]
  },
  {
    "id": "mycological_genetics_genomics",
    "discipline": "BIOLOGY",
    "name": "Mycological Genetics & Genomics",
    "baseWeight": 4,
    "keywords": [
      "mycological",
      "genetics",
      "genomics",
      "dna",
      "rna",
      "gene",
      "crispr",
      "genome",
      "nucleotide"
    ]
  },
  {
    "id": "parasitological_genetics_genomics",
    "discipline": "BIOLOGY",
    "name": "Parasitological Genetics & Genomics",
    "baseWeight": 4,
    "keywords": [
      "parasitological",
      "genetics",
      "genomics",
      "dna",
      "rna",
      "gene",
      "crispr",
      "genome",
      "nucleotide"
    ]
  },
  {
    "id": "bioinformatic_genetics_genomics",
    "discipline": "BIOLOGY",
    "name": "Bioinformatic Genetics & Genomics",
    "baseWeight": 4,
    "keywords": [
      "bioinformatic",
      "genetics",
      "genomics",
      "dna",
      "rna",
      "gene",
      "crispr",
      "genome",
      "nucleotide"
    ]
  },
  {
    "id": "biotechnological_genetics_genomics",
    "discipline": "BIOLOGY",
    "name": "Biotechnological Genetics & Genomics",
    "baseWeight": 4,
    "keywords": [
      "biotechnological",
      "genetics",
      "genomics",
      "dna",
      "rna",
      "gene",
      "crispr",
      "genome",
      "nucleotide"
    ]
  },
  {
    "id": "physiological_genetics_genomics",
    "discipline": "BIOLOGY",
    "name": "Physiological Genetics & Genomics",
    "baseWeight": 4,
    "keywords": [
      "physiological",
      "genetics",
      "genomics",
      "dna",
      "rna",
      "gene",
      "crispr",
      "genome",
      "nucleotide"
    ]
  },
  {
    "id": "molecular_cell_biology",
    "discipline": "BIOLOGY",
    "name": "Molecular Cell & Biology",
    "baseWeight": 6,
    "keywords": [
      "molecular",
      "cell",
      "biology"
    ]
  },
  {
    "id": "cellular_cell_molecular_biology",
    "discipline": "BIOLOGY",
    "name": "Cellular Cell & Molecular Biology",
    "baseWeight": 5,
    "keywords": [
      "cellular",
      "cell",
      "molecular",
      "biology"
    ]
  },
  {
    "id": "structural_cell_molecular_biology",
    "discipline": "BIOLOGY",
    "name": "Structural Cell & Molecular Biology",
    "baseWeight": 5,
    "keywords": [
      "structural",
      "cell",
      "molecular",
      "biology"
    ]
  },
  {
    "id": "evolutionary_cell_molecular_biology",
    "discipline": "BIOLOGY",
    "name": "Evolutionary Cell & Molecular Biology",
    "baseWeight": 5,
    "keywords": [
      "evolutionary",
      "cell",
      "molecular",
      "biology"
    ]
  },
  {
    "id": "computational_cell_molecular_biology",
    "discipline": "BIOLOGY",
    "name": "Computational Cell & Molecular Biology",
    "baseWeight": 6,
    "keywords": [
      "computational",
      "cell",
      "molecular",
      "biology",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico"
    ]
  },
  {
    "id": "systems_cell_molecular_biology",
    "discipline": "BIOLOGY",
    "name": "Systems Cell & Molecular Biology",
    "baseWeight": 5,
    "keywords": [
      "systems",
      "cell",
      "molecular",
      "biology"
    ]
  },
  {
    "id": "synthetic_cell_molecular_biology",
    "discipline": "BIOLOGY",
    "name": "Synthetic Cell & Molecular Biology",
    "baseWeight": 8,
    "keywords": [
      "synthetic",
      "cell",
      "molecular",
      "biology"
    ]
  },
  {
    "id": "applied_cell_molecular_biology",
    "discipline": "BIOLOGY",
    "name": "Applied Cell & Molecular Biology",
    "baseWeight": 5,
    "keywords": [
      "applied",
      "cell",
      "molecular",
      "biology"
    ]
  },
  {
    "id": "genomic_cell_molecular_biology",
    "discipline": "BIOLOGY",
    "name": "Genomic Cell & Molecular Biology",
    "baseWeight": 8,
    "keywords": [
      "genomic",
      "cell",
      "molecular",
      "biology"
    ]
  },
  {
    "id": "proteomic_cell_molecular_biology",
    "discipline": "BIOLOGY",
    "name": "Proteomic Cell & Molecular Biology",
    "baseWeight": 5,
    "keywords": [
      "proteomic",
      "cell",
      "molecular",
      "biology"
    ]
  },
  {
    "id": "neuro_cell_molecular_biology",
    "discipline": "BIOLOGY",
    "name": "Neuro Cell & Molecular Biology",
    "baseWeight": 5,
    "keywords": [
      "neuro",
      "cell",
      "molecular",
      "biology"
    ]
  },
  {
    "id": "bio_cell_molecular_biology",
    "discipline": "BIOLOGY",
    "name": "Bio Cell & Molecular Biology",
    "baseWeight": 5,
    "keywords": [
      "cell",
      "molecular",
      "biology"
    ]
  },
  {
    "id": "immuno_cell_molecular_biology",
    "discipline": "BIOLOGY",
    "name": "Immuno Cell & Molecular Biology",
    "baseWeight": 5,
    "keywords": [
      "immuno",
      "cell",
      "molecular",
      "biology"
    ]
  },
  {
    "id": "virological_cell_molecular_biology",
    "discipline": "BIOLOGY",
    "name": "Virological Cell & Molecular Biology",
    "baseWeight": 5,
    "keywords": [
      "virological",
      "cell",
      "molecular",
      "biology"
    ]
  },
  {
    "id": "microbiological_cell_molecular_biology",
    "discipline": "BIOLOGY",
    "name": "Microbiological Cell & Molecular Biology",
    "baseWeight": 5,
    "keywords": [
      "microbiological",
      "cell",
      "molecular",
      "biology"
    ]
  },
  {
    "id": "ecological_cell_molecular_biology",
    "discipline": "BIOLOGY",
    "name": "Ecological Cell & Molecular Biology",
    "baseWeight": 5,
    "keywords": [
      "ecological",
      "cell",
      "molecular",
      "biology"
    ]
  },
  {
    "id": "marine_cell_molecular_biology",
    "discipline": "BIOLOGY",
    "name": "Marine Cell & Molecular Biology",
    "baseWeight": 5,
    "keywords": [
      "marine",
      "cell",
      "molecular",
      "biology"
    ]
  },
  {
    "id": "developmental_cell_molecular_biology",
    "discipline": "BIOLOGY",
    "name": "Developmental Cell & Molecular Biology",
    "baseWeight": 5,
    "keywords": [
      "developmental",
      "cell",
      "molecular",
      "biology"
    ]
  },
  {
    "id": "population_cell_molecular_biology",
    "discipline": "BIOLOGY",
    "name": "Population Cell & Molecular Biology",
    "baseWeight": 5,
    "keywords": [
      "population",
      "cell",
      "molecular",
      "biology"
    ]
  },
  {
    "id": "astrobiological_cell_molecular_biology",
    "discipline": "BIOLOGY",
    "name": "Astrobiological Cell & Molecular Biology",
    "baseWeight": 5,
    "keywords": [
      "astrobiological",
      "cell",
      "molecular",
      "biology"
    ]
  },
  {
    "id": "mycological_cell_molecular_biology",
    "discipline": "BIOLOGY",
    "name": "Mycological Cell & Molecular Biology",
    "baseWeight": 5,
    "keywords": [
      "mycological",
      "cell",
      "molecular",
      "biology"
    ]
  },
  {
    "id": "parasitological_cell_molecular_biology",
    "discipline": "BIOLOGY",
    "name": "Parasitological Cell & Molecular Biology",
    "baseWeight": 5,
    "keywords": [
      "parasitological",
      "cell",
      "molecular",
      "biology"
    ]
  },
  {
    "id": "bioinformatic_cell_molecular_biology",
    "discipline": "BIOLOGY",
    "name": "Bioinformatic Cell & Molecular Biology",
    "baseWeight": 5,
    "keywords": [
      "bioinformatic",
      "cell",
      "molecular",
      "biology"
    ]
  },
  {
    "id": "biotechnological_cell_molecular_biology",
    "discipline": "BIOLOGY",
    "name": "Biotechnological Cell & Molecular Biology",
    "baseWeight": 5,
    "keywords": [
      "biotechnological",
      "cell",
      "molecular",
      "biology"
    ]
  },
  {
    "id": "physiological_cell_molecular_biology",
    "discipline": "BIOLOGY",
    "name": "Physiological Cell & Molecular Biology",
    "baseWeight": 5,
    "keywords": [
      "physiological",
      "cell",
      "molecular",
      "biology"
    ]
  },
  {
    "id": "molecular_physiology_anatomy",
    "discipline": "BIOLOGY",
    "name": "Molecular Physiology & Anatomy",
    "baseWeight": 7,
    "keywords": [
      "molecular",
      "physiology",
      "anatomy"
    ]
  },
  {
    "id": "cellular_physiology_anatomy",
    "discipline": "BIOLOGY",
    "name": "Cellular Physiology & Anatomy",
    "baseWeight": 6,
    "keywords": [
      "cellular",
      "physiology",
      "anatomy"
    ]
  },
  {
    "id": "structural_physiology_anatomy",
    "discipline": "BIOLOGY",
    "name": "Structural Physiology & Anatomy",
    "baseWeight": 6,
    "keywords": [
      "structural",
      "physiology",
      "anatomy"
    ]
  },
  {
    "id": "evolutionary_physiology_anatomy",
    "discipline": "BIOLOGY",
    "name": "Evolutionary Physiology & Anatomy",
    "baseWeight": 6,
    "keywords": [
      "evolutionary",
      "physiology",
      "anatomy"
    ]
  },
  {
    "id": "computational_physiology_anatomy",
    "discipline": "BIOLOGY",
    "name": "Computational Physiology & Anatomy",
    "baseWeight": 7,
    "keywords": [
      "computational",
      "physiology",
      "anatomy",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico"
    ]
  },
  {
    "id": "systems_physiology_anatomy",
    "discipline": "BIOLOGY",
    "name": "Systems Physiology & Anatomy",
    "baseWeight": 6,
    "keywords": [
      "systems",
      "physiology",
      "anatomy"
    ]
  },
  {
    "id": "synthetic_physiology_anatomy",
    "discipline": "BIOLOGY",
    "name": "Synthetic Physiology & Anatomy",
    "baseWeight": 9,
    "keywords": [
      "synthetic",
      "physiology",
      "anatomy"
    ]
  },
  {
    "id": "applied_physiology_anatomy",
    "discipline": "BIOLOGY",
    "name": "Applied Physiology & Anatomy",
    "baseWeight": 6,
    "keywords": [
      "applied",
      "physiology",
      "anatomy"
    ]
  },
  {
    "id": "genomic_physiology_anatomy",
    "discipline": "BIOLOGY",
    "name": "Genomic Physiology & Anatomy",
    "baseWeight": 9,
    "keywords": [
      "genomic",
      "physiology",
      "anatomy"
    ]
  },
  {
    "id": "proteomic_physiology_anatomy",
    "discipline": "BIOLOGY",
    "name": "Proteomic Physiology & Anatomy",
    "baseWeight": 6,
    "keywords": [
      "proteomic",
      "physiology",
      "anatomy"
    ]
  },
  {
    "id": "neuro_physiology_anatomy",
    "discipline": "BIOLOGY",
    "name": "Neuro Physiology & Anatomy",
    "baseWeight": 6,
    "keywords": [
      "neuro",
      "physiology",
      "anatomy"
    ]
  },
  {
    "id": "bio_physiology_anatomy",
    "discipline": "BIOLOGY",
    "name": "Bio Physiology & Anatomy",
    "baseWeight": 6,
    "keywords": [
      "physiology",
      "anatomy"
    ]
  },
  {
    "id": "immuno_physiology_anatomy",
    "discipline": "BIOLOGY",
    "name": "Immuno Physiology & Anatomy",
    "baseWeight": 6,
    "keywords": [
      "immuno",
      "physiology",
      "anatomy"
    ]
  },
  {
    "id": "virological_physiology_anatomy",
    "discipline": "BIOLOGY",
    "name": "Virological Physiology & Anatomy",
    "baseWeight": 6,
    "keywords": [
      "virological",
      "physiology",
      "anatomy"
    ]
  },
  {
    "id": "microbiological_physiology_anatomy",
    "discipline": "BIOLOGY",
    "name": "Microbiological Physiology & Anatomy",
    "baseWeight": 6,
    "keywords": [
      "microbiological",
      "physiology",
      "anatomy"
    ]
  },
  {
    "id": "ecological_physiology_anatomy",
    "discipline": "BIOLOGY",
    "name": "Ecological Physiology & Anatomy",
    "baseWeight": 6,
    "keywords": [
      "ecological",
      "physiology",
      "anatomy"
    ]
  },
  {
    "id": "marine_physiology_anatomy",
    "discipline": "BIOLOGY",
    "name": "Marine Physiology & Anatomy",
    "baseWeight": 6,
    "keywords": [
      "marine",
      "physiology",
      "anatomy"
    ]
  },
  {
    "id": "developmental_physiology_anatomy",
    "discipline": "BIOLOGY",
    "name": "Developmental Physiology & Anatomy",
    "baseWeight": 6,
    "keywords": [
      "developmental",
      "physiology",
      "anatomy"
    ]
  },
  {
    "id": "population_physiology_anatomy",
    "discipline": "BIOLOGY",
    "name": "Population Physiology & Anatomy",
    "baseWeight": 6,
    "keywords": [
      "population",
      "physiology",
      "anatomy"
    ]
  },
  {
    "id": "astrobiological_physiology_anatomy",
    "discipline": "BIOLOGY",
    "name": "Astrobiological Physiology & Anatomy",
    "baseWeight": 6,
    "keywords": [
      "astrobiological",
      "physiology",
      "anatomy"
    ]
  },
  {
    "id": "mycological_physiology_anatomy",
    "discipline": "BIOLOGY",
    "name": "Mycological Physiology & Anatomy",
    "baseWeight": 6,
    "keywords": [
      "mycological",
      "physiology",
      "anatomy"
    ]
  },
  {
    "id": "parasitological_physiology_anatomy",
    "discipline": "BIOLOGY",
    "name": "Parasitological Physiology & Anatomy",
    "baseWeight": 6,
    "keywords": [
      "parasitological",
      "physiology",
      "anatomy"
    ]
  },
  {
    "id": "bioinformatic_physiology_anatomy",
    "discipline": "BIOLOGY",
    "name": "Bioinformatic Physiology & Anatomy",
    "baseWeight": 6,
    "keywords": [
      "bioinformatic",
      "physiology",
      "anatomy"
    ]
  },
  {
    "id": "biotechnological_physiology_anatomy",
    "discipline": "BIOLOGY",
    "name": "Biotechnological Physiology & Anatomy",
    "baseWeight": 6,
    "keywords": [
      "biotechnological",
      "physiology",
      "anatomy"
    ]
  },
  {
    "id": "physiological_physiology_anatomy",
    "discipline": "BIOLOGY",
    "name": "Physiological Physiology & Anatomy",
    "baseWeight": 6,
    "keywords": [
      "physiological",
      "physiology",
      "anatomy"
    ]
  },
  {
    "id": "molecular_ecology_conservation",
    "discipline": "BIOLOGY",
    "name": "Molecular Ecology & Conservation",
    "baseWeight": 5,
    "keywords": [
      "molecular",
      "ecology",
      "conservation"
    ]
  },
  {
    "id": "cellular_ecology_conservation",
    "discipline": "BIOLOGY",
    "name": "Cellular Ecology & Conservation",
    "baseWeight": 4,
    "keywords": [
      "cellular",
      "ecology",
      "conservation"
    ]
  },
  {
    "id": "structural_ecology_conservation",
    "discipline": "BIOLOGY",
    "name": "Structural Ecology & Conservation",
    "baseWeight": 4,
    "keywords": [
      "structural",
      "ecology",
      "conservation"
    ]
  },
  {
    "id": "evolutionary_ecology_conservation",
    "discipline": "BIOLOGY",
    "name": "Evolutionary Ecology & Conservation",
    "baseWeight": 4,
    "keywords": [
      "evolutionary",
      "ecology",
      "conservation"
    ]
  },
  {
    "id": "computational_ecology_conservation",
    "discipline": "BIOLOGY",
    "name": "Computational Ecology & Conservation",
    "baseWeight": 5,
    "keywords": [
      "computational",
      "ecology",
      "conservation",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico"
    ]
  },
  {
    "id": "systems_ecology_conservation",
    "discipline": "BIOLOGY",
    "name": "Systems Ecology & Conservation",
    "baseWeight": 4,
    "keywords": [
      "systems",
      "ecology",
      "conservation"
    ]
  },
  {
    "id": "synthetic_ecology_conservation",
    "discipline": "BIOLOGY",
    "name": "Synthetic Ecology & Conservation",
    "baseWeight": 7,
    "keywords": [
      "synthetic",
      "ecology",
      "conservation"
    ]
  },
  {
    "id": "applied_ecology_conservation",
    "discipline": "BIOLOGY",
    "name": "Applied Ecology & Conservation",
    "baseWeight": 4,
    "keywords": [
      "applied",
      "ecology",
      "conservation"
    ]
  },
  {
    "id": "genomic_ecology_conservation",
    "discipline": "BIOLOGY",
    "name": "Genomic Ecology & Conservation",
    "baseWeight": 7,
    "keywords": [
      "genomic",
      "ecology",
      "conservation"
    ]
  },
  {
    "id": "proteomic_ecology_conservation",
    "discipline": "BIOLOGY",
    "name": "Proteomic Ecology & Conservation",
    "baseWeight": 4,
    "keywords": [
      "proteomic",
      "ecology",
      "conservation"
    ]
  },
  {
    "id": "neuro_ecology_conservation",
    "discipline": "BIOLOGY",
    "name": "Neuro Ecology & Conservation",
    "baseWeight": 4,
    "keywords": [
      "neuro",
      "ecology",
      "conservation"
    ]
  },
  {
    "id": "bio_ecology_conservation",
    "discipline": "BIOLOGY",
    "name": "Bio Ecology & Conservation",
    "baseWeight": 4,
    "keywords": [
      "ecology",
      "conservation"
    ]
  },
  {
    "id": "immuno_ecology_conservation",
    "discipline": "BIOLOGY",
    "name": "Immuno Ecology & Conservation",
    "baseWeight": 4,
    "keywords": [
      "immuno",
      "ecology",
      "conservation"
    ]
  },
  {
    "id": "virological_ecology_conservation",
    "discipline": "BIOLOGY",
    "name": "Virological Ecology & Conservation",
    "baseWeight": 4,
    "keywords": [
      "virological",
      "ecology",
      "conservation"
    ]
  },
  {
    "id": "microbiological_ecology_conservation",
    "discipline": "BIOLOGY",
    "name": "Microbiological Ecology & Conservation",
    "baseWeight": 4,
    "keywords": [
      "microbiological",
      "ecology",
      "conservation"
    ]
  },
  {
    "id": "ecological_ecology_conservation",
    "discipline": "BIOLOGY",
    "name": "Ecological Ecology & Conservation",
    "baseWeight": 4,
    "keywords": [
      "ecological",
      "ecology",
      "conservation"
    ]
  },
  {
    "id": "marine_ecology_conservation",
    "discipline": "BIOLOGY",
    "name": "Marine Ecology & Conservation",
    "baseWeight": 4,
    "keywords": [
      "marine",
      "ecology",
      "conservation"
    ]
  },
  {
    "id": "developmental_ecology_conservation",
    "discipline": "BIOLOGY",
    "name": "Developmental Ecology & Conservation",
    "baseWeight": 4,
    "keywords": [
      "developmental",
      "ecology",
      "conservation"
    ]
  },
  {
    "id": "population_ecology_conservation",
    "discipline": "BIOLOGY",
    "name": "Population Ecology & Conservation",
    "baseWeight": 4,
    "keywords": [
      "population",
      "ecology",
      "conservation"
    ]
  },
  {
    "id": "astrobiological_ecology_conservation",
    "discipline": "BIOLOGY",
    "name": "Astrobiological Ecology & Conservation",
    "baseWeight": 4,
    "keywords": [
      "astrobiological",
      "ecology",
      "conservation"
    ]
  },
  {
    "id": "mycological_ecology_conservation",
    "discipline": "BIOLOGY",
    "name": "Mycological Ecology & Conservation",
    "baseWeight": 4,
    "keywords": [
      "mycological",
      "ecology",
      "conservation"
    ]
  },
  {
    "id": "parasitological_ecology_conservation",
    "discipline": "BIOLOGY",
    "name": "Parasitological Ecology & Conservation",
    "baseWeight": 4,
    "keywords": [
      "parasitological",
      "ecology",
      "conservation"
    ]
  },
  {
    "id": "bioinformatic_ecology_conservation",
    "discipline": "BIOLOGY",
    "name": "Bioinformatic Ecology & Conservation",
    "baseWeight": 4,
    "keywords": [
      "bioinformatic",
      "ecology",
      "conservation"
    ]
  },
  {
    "id": "biotechnological_ecology_conservation",
    "discipline": "BIOLOGY",
    "name": "Biotechnological Ecology & Conservation",
    "baseWeight": 4,
    "keywords": [
      "biotechnological",
      "ecology",
      "conservation"
    ]
  },
  {
    "id": "physiological_ecology_conservation",
    "discipline": "BIOLOGY",
    "name": "Physiological Ecology & Conservation",
    "baseWeight": 4,
    "keywords": [
      "physiological",
      "ecology",
      "conservation"
    ]
  },
  {
    "id": "molecular_evolutionary_biology",
    "discipline": "BIOLOGY",
    "name": "Molecular Evolutionary Biology",
    "baseWeight": 6,
    "keywords": [
      "molecular",
      "evolutionary",
      "biology"
    ]
  },
  {
    "id": "cellular_evolutionary_biology",
    "discipline": "BIOLOGY",
    "name": "Cellular Evolutionary Biology",
    "baseWeight": 5,
    "keywords": [
      "cellular",
      "evolutionary",
      "biology"
    ]
  },
  {
    "id": "structural_evolutionary_biology",
    "discipline": "BIOLOGY",
    "name": "Structural Evolutionary Biology",
    "baseWeight": 5,
    "keywords": [
      "structural",
      "evolutionary",
      "biology"
    ]
  },
  {
    "id": "evolutionary_biology",
    "discipline": "BIOLOGY",
    "name": "Evolutionary Biology",
    "baseWeight": 5,
    "keywords": [
      "evolutionary",
      "biology"
    ]
  },
  {
    "id": "computational_evolutionary_biology",
    "discipline": "BIOLOGY",
    "name": "Computational Evolutionary Biology",
    "baseWeight": 6,
    "keywords": [
      "computational",
      "evolutionary",
      "biology",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico"
    ]
  },
  {
    "id": "systems_evolutionary_biology",
    "discipline": "BIOLOGY",
    "name": "Systems Evolutionary Biology",
    "baseWeight": 5,
    "keywords": [
      "systems",
      "evolutionary",
      "biology"
    ]
  },
  {
    "id": "synthetic_evolutionary_biology",
    "discipline": "BIOLOGY",
    "name": "Synthetic Evolutionary Biology",
    "baseWeight": 8,
    "keywords": [
      "synthetic",
      "evolutionary",
      "biology"
    ]
  },
  {
    "id": "applied_evolutionary_biology",
    "discipline": "BIOLOGY",
    "name": "Applied Evolutionary Biology",
    "baseWeight": 5,
    "keywords": [
      "applied",
      "evolutionary",
      "biology"
    ]
  },
  {
    "id": "genomic_evolutionary_biology",
    "discipline": "BIOLOGY",
    "name": "Genomic Evolutionary Biology",
    "baseWeight": 8,
    "keywords": [
      "genomic",
      "evolutionary",
      "biology"
    ]
  },
  {
    "id": "proteomic_evolutionary_biology",
    "discipline": "BIOLOGY",
    "name": "Proteomic Evolutionary Biology",
    "baseWeight": 5,
    "keywords": [
      "proteomic",
      "evolutionary",
      "biology"
    ]
  },
  {
    "id": "neuro_evolutionary_biology",
    "discipline": "BIOLOGY",
    "name": "Neuro Evolutionary Biology",
    "baseWeight": 5,
    "keywords": [
      "neuro",
      "evolutionary",
      "biology"
    ]
  },
  {
    "id": "bio_evolutionary_biology",
    "discipline": "BIOLOGY",
    "name": "Bio Evolutionary Biology",
    "baseWeight": 5,
    "keywords": [
      "evolutionary",
      "biology"
    ]
  },
  {
    "id": "immuno_evolutionary_biology",
    "discipline": "BIOLOGY",
    "name": "Immuno Evolutionary Biology",
    "baseWeight": 5,
    "keywords": [
      "immuno",
      "evolutionary",
      "biology"
    ]
  },
  {
    "id": "virological_evolutionary_biology",
    "discipline": "BIOLOGY",
    "name": "Virological Evolutionary Biology",
    "baseWeight": 5,
    "keywords": [
      "virological",
      "evolutionary",
      "biology"
    ]
  },
  {
    "id": "microbiological_evolutionary_biology",
    "discipline": "BIOLOGY",
    "name": "Microbiological Evolutionary Biology",
    "baseWeight": 5,
    "keywords": [
      "microbiological",
      "evolutionary",
      "biology"
    ]
  },
  {
    "id": "ecological_evolutionary_biology",
    "discipline": "BIOLOGY",
    "name": "Ecological Evolutionary Biology",
    "baseWeight": 5,
    "keywords": [
      "ecological",
      "evolutionary",
      "biology"
    ]
  },
  {
    "id": "marine_evolutionary_biology",
    "discipline": "BIOLOGY",
    "name": "Marine Evolutionary Biology",
    "baseWeight": 5,
    "keywords": [
      "marine",
      "evolutionary",
      "biology"
    ]
  },
  {
    "id": "developmental_evolutionary_biology",
    "discipline": "BIOLOGY",
    "name": "Developmental Evolutionary Biology",
    "baseWeight": 5,
    "keywords": [
      "developmental",
      "evolutionary",
      "biology"
    ]
  },
  {
    "id": "population_evolutionary_biology",
    "discipline": "BIOLOGY",
    "name": "Population Evolutionary Biology",
    "baseWeight": 5,
    "keywords": [
      "population",
      "evolutionary",
      "biology"
    ]
  },
  {
    "id": "astrobiological_evolutionary_biology",
    "discipline": "BIOLOGY",
    "name": "Astrobiological Evolutionary Biology",
    "baseWeight": 5,
    "keywords": [
      "astrobiological",
      "evolutionary",
      "biology"
    ]
  },
  {
    "id": "mycological_evolutionary_biology",
    "discipline": "BIOLOGY",
    "name": "Mycological Evolutionary Biology",
    "baseWeight": 5,
    "keywords": [
      "mycological",
      "evolutionary",
      "biology"
    ]
  },
  {
    "id": "parasitological_evolutionary_biology",
    "discipline": "BIOLOGY",
    "name": "Parasitological Evolutionary Biology",
    "baseWeight": 5,
    "keywords": [
      "parasitological",
      "evolutionary",
      "biology"
    ]
  },
  {
    "id": "bioinformatic_evolutionary_biology",
    "discipline": "BIOLOGY",
    "name": "Bioinformatic Evolutionary Biology",
    "baseWeight": 5,
    "keywords": [
      "bioinformatic",
      "evolutionary",
      "biology"
    ]
  },
  {
    "id": "biotechnological_evolutionary_biology",
    "discipline": "BIOLOGY",
    "name": "Biotechnological Evolutionary Biology",
    "baseWeight": 5,
    "keywords": [
      "biotechnological",
      "evolutionary",
      "biology"
    ]
  },
  {
    "id": "physiological_evolutionary_biology",
    "discipline": "BIOLOGY",
    "name": "Physiological Evolutionary Biology",
    "baseWeight": 5,
    "keywords": [
      "physiological",
      "evolutionary",
      "biology"
    ]
  },
  {
    "id": "molecular_bioinformatics",
    "discipline": "BIOLOGY",
    "name": "Molecular Bioinformatics",
    "baseWeight": 7,
    "keywords": [
      "molecular",
      "bioinformatics"
    ]
  },
  {
    "id": "cellular_bioinformatics",
    "discipline": "BIOLOGY",
    "name": "Cellular Bioinformatics",
    "baseWeight": 6,
    "keywords": [
      "cellular",
      "bioinformatics"
    ]
  },
  {
    "id": "structural_bioinformatics",
    "discipline": "BIOLOGY",
    "name": "Structural Bioinformatics",
    "baseWeight": 6,
    "keywords": [
      "structural",
      "bioinformatics"
    ]
  },
  {
    "id": "evolutionary_bioinformatics",
    "discipline": "BIOLOGY",
    "name": "Evolutionary Bioinformatics",
    "baseWeight": 6,
    "keywords": [
      "evolutionary",
      "bioinformatics"
    ]
  },
  {
    "id": "computational_bioinformatics",
    "discipline": "BIOLOGY",
    "name": "Computational Bioinformatics",
    "baseWeight": 7,
    "keywords": [
      "computational",
      "bioinformatics",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico"
    ]
  },
  {
    "id": "systems_bioinformatics",
    "discipline": "BIOLOGY",
    "name": "Systems Bioinformatics",
    "baseWeight": 6,
    "keywords": [
      "systems",
      "bioinformatics"
    ]
  },
  {
    "id": "synthetic_bioinformatics",
    "discipline": "BIOLOGY",
    "name": "Synthetic Bioinformatics",
    "baseWeight": 9,
    "keywords": [
      "synthetic",
      "bioinformatics"
    ]
  },
  {
    "id": "applied_bioinformatics",
    "discipline": "BIOLOGY",
    "name": "Applied Bioinformatics",
    "baseWeight": 6,
    "keywords": [
      "applied",
      "bioinformatics"
    ]
  },
  {
    "id": "genomic_bioinformatics",
    "discipline": "BIOLOGY",
    "name": "Genomic Bioinformatics",
    "baseWeight": 9,
    "keywords": [
      "genomic",
      "bioinformatics"
    ]
  },
  {
    "id": "proteomic_bioinformatics",
    "discipline": "BIOLOGY",
    "name": "Proteomic Bioinformatics",
    "baseWeight": 6,
    "keywords": [
      "proteomic",
      "bioinformatics"
    ]
  },
  {
    "id": "neuro_bioinformatics",
    "discipline": "BIOLOGY",
    "name": "Neuro Bioinformatics",
    "baseWeight": 6,
    "keywords": [
      "neuro",
      "bioinformatics"
    ]
  },
  {
    "id": "bio_bioinformatics",
    "discipline": "BIOLOGY",
    "name": "Bio Bioinformatics",
    "baseWeight": 6,
    "keywords": [
      "bioinformatics"
    ]
  },
  {
    "id": "immuno_bioinformatics",
    "discipline": "BIOLOGY",
    "name": "Immuno Bioinformatics",
    "baseWeight": 6,
    "keywords": [
      "immuno",
      "bioinformatics"
    ]
  },
  {
    "id": "virological_bioinformatics",
    "discipline": "BIOLOGY",
    "name": "Virological Bioinformatics",
    "baseWeight": 6,
    "keywords": [
      "virological",
      "bioinformatics"
    ]
  },
  {
    "id": "microbiological_bioinformatics",
    "discipline": "BIOLOGY",
    "name": "Microbiological Bioinformatics",
    "baseWeight": 6,
    "keywords": [
      "microbiological",
      "bioinformatics"
    ]
  },
  {
    "id": "ecological_bioinformatics",
    "discipline": "BIOLOGY",
    "name": "Ecological Bioinformatics",
    "baseWeight": 6,
    "keywords": [
      "ecological",
      "bioinformatics"
    ]
  },
  {
    "id": "marine_bioinformatics",
    "discipline": "BIOLOGY",
    "name": "Marine Bioinformatics",
    "baseWeight": 6,
    "keywords": [
      "marine",
      "bioinformatics"
    ]
  },
  {
    "id": "developmental_bioinformatics",
    "discipline": "BIOLOGY",
    "name": "Developmental Bioinformatics",
    "baseWeight": 6,
    "keywords": [
      "developmental",
      "bioinformatics"
    ]
  },
  {
    "id": "population_bioinformatics",
    "discipline": "BIOLOGY",
    "name": "Population Bioinformatics",
    "baseWeight": 6,
    "keywords": [
      "population",
      "bioinformatics"
    ]
  },
  {
    "id": "astrobiological_bioinformatics",
    "discipline": "BIOLOGY",
    "name": "Astrobiological Bioinformatics",
    "baseWeight": 6,
    "keywords": [
      "astrobiological",
      "bioinformatics"
    ]
  },
  {
    "id": "mycological_bioinformatics",
    "discipline": "BIOLOGY",
    "name": "Mycological Bioinformatics",
    "baseWeight": 6,
    "keywords": [
      "mycological",
      "bioinformatics"
    ]
  },
  {
    "id": "parasitological_bioinformatics",
    "discipline": "BIOLOGY",
    "name": "Parasitological Bioinformatics",
    "baseWeight": 6,
    "keywords": [
      "parasitological",
      "bioinformatics"
    ]
  },
  {
    "id": "bioinformatic_bioinformatics",
    "discipline": "BIOLOGY",
    "name": "Bioinformatic Bioinformatics",
    "baseWeight": 6,
    "keywords": [
      "bioinformatic",
      "bioinformatics"
    ]
  },
  {
    "id": "biotechnological_bioinformatics",
    "discipline": "BIOLOGY",
    "name": "Biotechnological Bioinformatics",
    "baseWeight": 6,
    "keywords": [
      "biotechnological",
      "bioinformatics"
    ]
  },
  {
    "id": "physiological_bioinformatics",
    "discipline": "BIOLOGY",
    "name": "Physiological Bioinformatics",
    "baseWeight": 6,
    "keywords": [
      "physiological",
      "bioinformatics"
    ]
  },
  {
    "id": "molecular_biotechnology_synthetic_biology",
    "discipline": "BIOLOGY",
    "name": "Molecular Biotechnology & Synthetic Biology",
    "baseWeight": 5,
    "keywords": [
      "molecular",
      "biotechnology",
      "synthetic",
      "biology"
    ]
  },
  {
    "id": "cellular_biotechnology_synthetic_biology",
    "discipline": "BIOLOGY",
    "name": "Cellular Biotechnology & Synthetic Biology",
    "baseWeight": 4,
    "keywords": [
      "cellular",
      "biotechnology",
      "synthetic",
      "biology"
    ]
  },
  {
    "id": "structural_biotechnology_synthetic_biology",
    "discipline": "BIOLOGY",
    "name": "Structural Biotechnology & Synthetic Biology",
    "baseWeight": 4,
    "keywords": [
      "structural",
      "biotechnology",
      "synthetic",
      "biology"
    ]
  },
  {
    "id": "evolutionary_biotechnology_synthetic_biology",
    "discipline": "BIOLOGY",
    "name": "Evolutionary Biotechnology & Synthetic Biology",
    "baseWeight": 4,
    "keywords": [
      "evolutionary",
      "biotechnology",
      "synthetic",
      "biology"
    ]
  },
  {
    "id": "computational_biotechnology_synthetic_biology",
    "discipline": "BIOLOGY",
    "name": "Computational Biotechnology & Synthetic Biology",
    "baseWeight": 5,
    "keywords": [
      "computational",
      "biotechnology",
      "synthetic",
      "biology",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico"
    ]
  },
  {
    "id": "systems_biotechnology_synthetic_biology",
    "discipline": "BIOLOGY",
    "name": "Systems Biotechnology & Synthetic Biology",
    "baseWeight": 4,
    "keywords": [
      "systems",
      "biotechnology",
      "synthetic",
      "biology"
    ]
  },
  {
    "id": "synthetic_biotechnology_biology",
    "discipline": "BIOLOGY",
    "name": "Synthetic Biotechnology & Biology",
    "baseWeight": 7,
    "keywords": [
      "synthetic",
      "biotechnology",
      "biology"
    ]
  },
  {
    "id": "applied_biotechnology_synthetic_biology",
    "discipline": "BIOLOGY",
    "name": "Applied Biotechnology & Synthetic Biology",
    "baseWeight": 4,
    "keywords": [
      "applied",
      "biotechnology",
      "synthetic",
      "biology"
    ]
  },
  {
    "id": "genomic_biotechnology_synthetic_biology",
    "discipline": "BIOLOGY",
    "name": "Genomic Biotechnology & Synthetic Biology",
    "baseWeight": 7,
    "keywords": [
      "genomic",
      "biotechnology",
      "synthetic",
      "biology"
    ]
  },
  {
    "id": "proteomic_biotechnology_synthetic_biology",
    "discipline": "BIOLOGY",
    "name": "Proteomic Biotechnology & Synthetic Biology",
    "baseWeight": 4,
    "keywords": [
      "proteomic",
      "biotechnology",
      "synthetic",
      "biology"
    ]
  },
  {
    "id": "neuro_biotechnology_synthetic_biology",
    "discipline": "BIOLOGY",
    "name": "Neuro Biotechnology & Synthetic Biology",
    "baseWeight": 4,
    "keywords": [
      "neuro",
      "biotechnology",
      "synthetic",
      "biology"
    ]
  },
  {
    "id": "bio_biotechnology_synthetic_biology",
    "discipline": "BIOLOGY",
    "name": "Bio Biotechnology & Synthetic Biology",
    "baseWeight": 4,
    "keywords": [
      "biotechnology",
      "synthetic",
      "biology"
    ]
  },
  {
    "id": "immuno_biotechnology_synthetic_biology",
    "discipline": "BIOLOGY",
    "name": "Immuno Biotechnology & Synthetic Biology",
    "baseWeight": 4,
    "keywords": [
      "immuno",
      "biotechnology",
      "synthetic",
      "biology"
    ]
  },
  {
    "id": "virological_biotechnology_synthetic_biology",
    "discipline": "BIOLOGY",
    "name": "Virological Biotechnology & Synthetic Biology",
    "baseWeight": 4,
    "keywords": [
      "virological",
      "biotechnology",
      "synthetic",
      "biology"
    ]
  },
  {
    "id": "microbiological_biotechnology_synthetic_biology",
    "discipline": "BIOLOGY",
    "name": "Microbiological Biotechnology & Synthetic Biology",
    "baseWeight": 4,
    "keywords": [
      "microbiological",
      "biotechnology",
      "synthetic",
      "biology"
    ]
  },
  {
    "id": "ecological_biotechnology_synthetic_biology",
    "discipline": "BIOLOGY",
    "name": "Ecological Biotechnology & Synthetic Biology",
    "baseWeight": 4,
    "keywords": [
      "ecological",
      "biotechnology",
      "synthetic",
      "biology"
    ]
  },
  {
    "id": "marine_biotechnology_synthetic_biology",
    "discipline": "BIOLOGY",
    "name": "Marine Biotechnology & Synthetic Biology",
    "baseWeight": 4,
    "keywords": [
      "marine",
      "biotechnology",
      "synthetic",
      "biology"
    ]
  },
  {
    "id": "developmental_biotechnology_synthetic_biology",
    "discipline": "BIOLOGY",
    "name": "Developmental Biotechnology & Synthetic Biology",
    "baseWeight": 4,
    "keywords": [
      "developmental",
      "biotechnology",
      "synthetic",
      "biology"
    ]
  },
  {
    "id": "population_biotechnology_synthetic_biology",
    "discipline": "BIOLOGY",
    "name": "Population Biotechnology & Synthetic Biology",
    "baseWeight": 4,
    "keywords": [
      "population",
      "biotechnology",
      "synthetic",
      "biology"
    ]
  },
  {
    "id": "astrobiological_biotechnology_synthetic_biology",
    "discipline": "BIOLOGY",
    "name": "Astrobiological Biotechnology & Synthetic Biology",
    "baseWeight": 4,
    "keywords": [
      "astrobiological",
      "biotechnology",
      "synthetic",
      "biology"
    ]
  },
  {
    "id": "mycological_biotechnology_synthetic_biology",
    "discipline": "BIOLOGY",
    "name": "Mycological Biotechnology & Synthetic Biology",
    "baseWeight": 4,
    "keywords": [
      "mycological",
      "biotechnology",
      "synthetic",
      "biology"
    ]
  },
  {
    "id": "parasitological_biotechnology_synthetic_biology",
    "discipline": "BIOLOGY",
    "name": "Parasitological Biotechnology & Synthetic Biology",
    "baseWeight": 4,
    "keywords": [
      "parasitological",
      "biotechnology",
      "synthetic",
      "biology"
    ]
  },
  {
    "id": "bioinformatic_biotechnology_synthetic_biology",
    "discipline": "BIOLOGY",
    "name": "Bioinformatic Biotechnology & Synthetic Biology",
    "baseWeight": 4,
    "keywords": [
      "bioinformatic",
      "biotechnology",
      "synthetic",
      "biology"
    ]
  },
  {
    "id": "biotechnological_biotechnology_synthetic_biology",
    "discipline": "BIOLOGY",
    "name": "Biotechnological Biotechnology & Synthetic Biology",
    "baseWeight": 4,
    "keywords": [
      "biotechnological",
      "biotechnology",
      "synthetic",
      "biology"
    ]
  },
  {
    "id": "physiological_biotechnology_synthetic_biology",
    "discipline": "BIOLOGY",
    "name": "Physiological Biotechnology & Synthetic Biology",
    "baseWeight": 4,
    "keywords": [
      "physiological",
      "biotechnology",
      "synthetic",
      "biology"
    ]
  },
  {
    "id": "algebraic_number_theory",
    "discipline": "MATH",
    "name": "Algebraic Number Theory",
    "baseWeight": 4,
    "keywords": [
      "algebraic",
      "number",
      "theory",
      "ai",
      "artificial intelligence",
      "machine learning",
      "deep learning",
      "llm",
      "transformer"
    ]
  },
  {
    "id": "geometric_number_theory",
    "discipline": "MATH",
    "name": "Geometric Number Theory",
    "baseWeight": 4,
    "keywords": [
      "geometric",
      "number",
      "theory"
    ]
  },
  {
    "id": "analytical_number_theory",
    "discipline": "MATH",
    "name": "Analytical Number Theory",
    "baseWeight": 4,
    "keywords": [
      "analytical",
      "number",
      "theory"
    ]
  },
  {
    "id": "differential_number_theory",
    "discipline": "MATH",
    "name": "Differential Number Theory",
    "baseWeight": 4,
    "keywords": [
      "differential",
      "number",
      "theory"
    ]
  },
  {
    "id": "topological_number_theory",
    "discipline": "MATH",
    "name": "Topological Number Theory",
    "baseWeight": 4,
    "keywords": [
      "topological",
      "number",
      "theory"
    ]
  },
  {
    "id": "probabilistic_number_theory",
    "discipline": "MATH",
    "name": "Probabilistic Number Theory",
    "baseWeight": 4,
    "keywords": [
      "probabilistic",
      "number",
      "theory"
    ]
  },
  {
    "id": "statistical_number_theory",
    "discipline": "MATH",
    "name": "Statistical Number Theory",
    "baseWeight": 4,
    "keywords": [
      "statistical",
      "number",
      "theory",
      "entropy",
      "probability",
      "ensemble",
      "boltzmann",
      "stochastic"
    ]
  },
  {
    "id": "combinatorial_number_theory",
    "discipline": "MATH",
    "name": "Combinatorial Number Theory",
    "baseWeight": 4,
    "keywords": [
      "combinatorial",
      "number",
      "theory"
    ]
  },
  {
    "id": "arithmetic_number_theory",
    "discipline": "MATH",
    "name": "Arithmetic Number Theory",
    "baseWeight": 4,
    "keywords": [
      "arithmetic",
      "number",
      "theory"
    ]
  },
  {
    "id": "numerical_number_theory",
    "discipline": "MATH",
    "name": "Numerical Number Theory",
    "baseWeight": 4,
    "keywords": [
      "numerical",
      "number",
      "theory"
    ]
  },
  {
    "id": "stochastic_number_theory",
    "discipline": "MATH",
    "name": "Stochastic Number Theory",
    "baseWeight": 4,
    "keywords": [
      "stochastic",
      "number",
      "theory"
    ]
  },
  {
    "id": "discrete_number_theory",
    "discipline": "MATH",
    "name": "Discrete Number Theory",
    "baseWeight": 4,
    "keywords": [
      "discrete",
      "number",
      "theory"
    ]
  },
  {
    "id": "continuous_number_theory",
    "discipline": "MATH",
    "name": "Continuous Number Theory",
    "baseWeight": 4,
    "keywords": [
      "continuous",
      "number",
      "theory"
    ]
  },
  {
    "id": "applied_number_theory",
    "discipline": "MATH",
    "name": "Applied Number Theory",
    "baseWeight": 4,
    "keywords": [
      "applied",
      "number",
      "theory"
    ]
  },
  {
    "id": "theoretical_number_theory",
    "discipline": "MATH",
    "name": "Theoretical Number Theory",
    "baseWeight": 5,
    "keywords": [
      "theoretical",
      "number",
      "theory",
      "mathematical",
      "formalism",
      "derivation",
      "hypothesis"
    ]
  },
  {
    "id": "mathematical_number_theory",
    "discipline": "MATH",
    "name": "Mathematical Number Theory",
    "baseWeight": 4,
    "keywords": [
      "mathematical",
      "number",
      "theory"
    ]
  },
  {
    "id": "logical_number_theory",
    "discipline": "MATH",
    "name": "Logical Number Theory",
    "baseWeight": 4,
    "keywords": [
      "logical",
      "number",
      "theory"
    ]
  },
  {
    "id": "set_theoretic_number_theory",
    "discipline": "MATH",
    "name": "Set-Theoretic Number Theory",
    "baseWeight": 4,
    "keywords": [
      "theoretic",
      "number",
      "theory"
    ]
  },
  {
    "id": "computational_number_theory",
    "discipline": "MATH",
    "name": "Computational Number Theory",
    "baseWeight": 5,
    "keywords": [
      "computational",
      "number",
      "theory",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico"
    ]
  },
  {
    "id": "algorithmic_number_theory",
    "discipline": "MATH",
    "name": "Algorithmic Number Theory",
    "baseWeight": 4,
    "keywords": [
      "algorithmic",
      "number",
      "theory"
    ]
  },
  {
    "id": "chaotic_number_theory",
    "discipline": "MATH",
    "name": "Chaotic Number Theory",
    "baseWeight": 4,
    "keywords": [
      "chaotic",
      "number",
      "theory"
    ]
  },
  {
    "id": "dynamical_number_theory",
    "discipline": "MATH",
    "name": "Dynamical Number Theory",
    "baseWeight": 4,
    "keywords": [
      "dynamical",
      "number",
      "theory"
    ]
  },
  {
    "id": "complex_number_theory",
    "discipline": "MATH",
    "name": "Complex Number Theory",
    "baseWeight": 4,
    "keywords": [
      "complex",
      "number",
      "theory"
    ]
  },
  {
    "id": "linear_number_theory",
    "discipline": "MATH",
    "name": "Linear Number Theory",
    "baseWeight": 4,
    "keywords": [
      "linear",
      "number",
      "theory"
    ]
  },
  {
    "id": "abstract_number_theory",
    "discipline": "MATH",
    "name": "Abstract Number Theory",
    "baseWeight": 4,
    "keywords": [
      "abstract",
      "number",
      "theory"
    ]
  },
  {
    "id": "algebraic_algebra_group_theory",
    "discipline": "MATH",
    "name": "Algebraic Algebra & Group Theory",
    "baseWeight": 5,
    "keywords": [
      "algebraic",
      "algebra",
      "group",
      "theory",
      "ai",
      "artificial intelligence",
      "machine learning",
      "deep learning",
      "llm",
      "transformer"
    ]
  },
  {
    "id": "geometric_algebra_group_theory",
    "discipline": "MATH",
    "name": "Geometric Algebra & Group Theory",
    "baseWeight": 5,
    "keywords": [
      "geometric",
      "algebra",
      "group",
      "theory"
    ]
  },
  {
    "id": "analytical_algebra_group_theory",
    "discipline": "MATH",
    "name": "Analytical Algebra & Group Theory",
    "baseWeight": 5,
    "keywords": [
      "analytical",
      "algebra",
      "group",
      "theory"
    ]
  },
  {
    "id": "differential_algebra_group_theory",
    "discipline": "MATH",
    "name": "Differential Algebra & Group Theory",
    "baseWeight": 5,
    "keywords": [
      "differential",
      "algebra",
      "group",
      "theory"
    ]
  },
  {
    "id": "topological_algebra_group_theory",
    "discipline": "MATH",
    "name": "Topological Algebra & Group Theory",
    "baseWeight": 5,
    "keywords": [
      "topological",
      "algebra",
      "group",
      "theory"
    ]
  },
  {
    "id": "probabilistic_algebra_group_theory",
    "discipline": "MATH",
    "name": "Probabilistic Algebra & Group Theory",
    "baseWeight": 5,
    "keywords": [
      "probabilistic",
      "algebra",
      "group",
      "theory"
    ]
  },
  {
    "id": "statistical_algebra_group_theory",
    "discipline": "MATH",
    "name": "Statistical Algebra & Group Theory",
    "baseWeight": 5,
    "keywords": [
      "statistical",
      "algebra",
      "group",
      "theory",
      "entropy",
      "probability",
      "ensemble",
      "boltzmann",
      "stochastic"
    ]
  },
  {
    "id": "combinatorial_algebra_group_theory",
    "discipline": "MATH",
    "name": "Combinatorial Algebra & Group Theory",
    "baseWeight": 5,
    "keywords": [
      "combinatorial",
      "algebra",
      "group",
      "theory"
    ]
  },
  {
    "id": "arithmetic_algebra_group_theory",
    "discipline": "MATH",
    "name": "Arithmetic Algebra & Group Theory",
    "baseWeight": 5,
    "keywords": [
      "arithmetic",
      "algebra",
      "group",
      "theory"
    ]
  },
  {
    "id": "numerical_algebra_group_theory",
    "discipline": "MATH",
    "name": "Numerical Algebra & Group Theory",
    "baseWeight": 5,
    "keywords": [
      "numerical",
      "algebra",
      "group",
      "theory"
    ]
  },
  {
    "id": "stochastic_algebra_group_theory",
    "discipline": "MATH",
    "name": "Stochastic Algebra & Group Theory",
    "baseWeight": 5,
    "keywords": [
      "stochastic",
      "algebra",
      "group",
      "theory"
    ]
  },
  {
    "id": "discrete_algebra_group_theory",
    "discipline": "MATH",
    "name": "Discrete Algebra & Group Theory",
    "baseWeight": 5,
    "keywords": [
      "discrete",
      "algebra",
      "group",
      "theory"
    ]
  },
  {
    "id": "continuous_algebra_group_theory",
    "discipline": "MATH",
    "name": "Continuous Algebra & Group Theory",
    "baseWeight": 5,
    "keywords": [
      "continuous",
      "algebra",
      "group",
      "theory"
    ]
  },
  {
    "id": "applied_algebra_group_theory",
    "discipline": "MATH",
    "name": "Applied Algebra & Group Theory",
    "baseWeight": 5,
    "keywords": [
      "applied",
      "algebra",
      "group",
      "theory"
    ]
  },
  {
    "id": "theoretical_algebra_group_theory",
    "discipline": "MATH",
    "name": "Theoretical Algebra & Group Theory",
    "baseWeight": 6,
    "keywords": [
      "theoretical",
      "algebra",
      "group",
      "theory",
      "mathematical",
      "formalism",
      "derivation",
      "hypothesis"
    ]
  },
  {
    "id": "mathematical_algebra_group_theory",
    "discipline": "MATH",
    "name": "Mathematical Algebra & Group Theory",
    "baseWeight": 5,
    "keywords": [
      "mathematical",
      "algebra",
      "group",
      "theory"
    ]
  },
  {
    "id": "logical_algebra_group_theory",
    "discipline": "MATH",
    "name": "Logical Algebra & Group Theory",
    "baseWeight": 5,
    "keywords": [
      "logical",
      "algebra",
      "group",
      "theory"
    ]
  },
  {
    "id": "set_theoretic_algebra_group_theory",
    "discipline": "MATH",
    "name": "Set-Theoretic Algebra & Group Theory",
    "baseWeight": 5,
    "keywords": [
      "theoretic",
      "algebra",
      "group",
      "theory"
    ]
  },
  {
    "id": "computational_algebra_group_theory",
    "discipline": "MATH",
    "name": "Computational Algebra & Group Theory",
    "baseWeight": 6,
    "keywords": [
      "computational",
      "algebra",
      "group",
      "theory",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico"
    ]
  },
  {
    "id": "algorithmic_algebra_group_theory",
    "discipline": "MATH",
    "name": "Algorithmic Algebra & Group Theory",
    "baseWeight": 5,
    "keywords": [
      "algorithmic",
      "algebra",
      "group",
      "theory"
    ]
  },
  {
    "id": "chaotic_algebra_group_theory",
    "discipline": "MATH",
    "name": "Chaotic Algebra & Group Theory",
    "baseWeight": 5,
    "keywords": [
      "chaotic",
      "algebra",
      "group",
      "theory"
    ]
  },
  {
    "id": "dynamical_algebra_group_theory",
    "discipline": "MATH",
    "name": "Dynamical Algebra & Group Theory",
    "baseWeight": 5,
    "keywords": [
      "dynamical",
      "algebra",
      "group",
      "theory"
    ]
  },
  {
    "id": "complex_algebra_group_theory",
    "discipline": "MATH",
    "name": "Complex Algebra & Group Theory",
    "baseWeight": 5,
    "keywords": [
      "complex",
      "algebra",
      "group",
      "theory"
    ]
  },
  {
    "id": "linear_algebra_group_theory",
    "discipline": "MATH",
    "name": "Linear Algebra & Group Theory",
    "baseWeight": 5,
    "keywords": [
      "linear",
      "algebra",
      "group",
      "theory"
    ]
  },
  {
    "id": "abstract_algebra_group_theory",
    "discipline": "MATH",
    "name": "Abstract Algebra & Group Theory",
    "baseWeight": 5,
    "keywords": [
      "abstract",
      "algebra",
      "group",
      "theory"
    ]
  },
  {
    "id": "algebraic_geometry_topology",
    "discipline": "MATH",
    "name": "Algebraic Geometry & Topology",
    "baseWeight": 6,
    "keywords": [
      "algebraic",
      "geometry",
      "topology",
      "ai",
      "artificial intelligence",
      "machine learning",
      "deep learning",
      "llm",
      "transformer"
    ]
  },
  {
    "id": "geometric_geometry_topology",
    "discipline": "MATH",
    "name": "Geometric Geometry & Topology",
    "baseWeight": 6,
    "keywords": [
      "geometric",
      "geometry",
      "topology"
    ]
  },
  {
    "id": "analytical_geometry_topology",
    "discipline": "MATH",
    "name": "Analytical Geometry & Topology",
    "baseWeight": 6,
    "keywords": [
      "analytical",
      "geometry",
      "topology"
    ]
  },
  {
    "id": "differential_geometry_topology",
    "discipline": "MATH",
    "name": "Differential Geometry & Topology",
    "baseWeight": 6,
    "keywords": [
      "differential",
      "geometry",
      "topology"
    ]
  },
  {
    "id": "topological_geometry_topology",
    "discipline": "MATH",
    "name": "Topological Geometry & Topology",
    "baseWeight": 6,
    "keywords": [
      "topological",
      "geometry",
      "topology"
    ]
  },
  {
    "id": "probabilistic_geometry_topology",
    "discipline": "MATH",
    "name": "Probabilistic Geometry & Topology",
    "baseWeight": 6,
    "keywords": [
      "probabilistic",
      "geometry",
      "topology"
    ]
  },
  {
    "id": "statistical_geometry_topology",
    "discipline": "MATH",
    "name": "Statistical Geometry & Topology",
    "baseWeight": 6,
    "keywords": [
      "statistical",
      "geometry",
      "topology",
      "entropy",
      "probability",
      "ensemble",
      "boltzmann",
      "stochastic"
    ]
  },
  {
    "id": "combinatorial_geometry_topology",
    "discipline": "MATH",
    "name": "Combinatorial Geometry & Topology",
    "baseWeight": 6,
    "keywords": [
      "combinatorial",
      "geometry",
      "topology"
    ]
  },
  {
    "id": "arithmetic_geometry_topology",
    "discipline": "MATH",
    "name": "Arithmetic Geometry & Topology",
    "baseWeight": 6,
    "keywords": [
      "arithmetic",
      "geometry",
      "topology"
    ]
  },
  {
    "id": "numerical_geometry_topology",
    "discipline": "MATH",
    "name": "Numerical Geometry & Topology",
    "baseWeight": 6,
    "keywords": [
      "numerical",
      "geometry",
      "topology"
    ]
  },
  {
    "id": "stochastic_geometry_topology",
    "discipline": "MATH",
    "name": "Stochastic Geometry & Topology",
    "baseWeight": 6,
    "keywords": [
      "stochastic",
      "geometry",
      "topology"
    ]
  },
  {
    "id": "discrete_geometry_topology",
    "discipline": "MATH",
    "name": "Discrete Geometry & Topology",
    "baseWeight": 6,
    "keywords": [
      "discrete",
      "geometry",
      "topology"
    ]
  },
  {
    "id": "continuous_geometry_topology",
    "discipline": "MATH",
    "name": "Continuous Geometry & Topology",
    "baseWeight": 6,
    "keywords": [
      "continuous",
      "geometry",
      "topology"
    ]
  },
  {
    "id": "applied_geometry_topology",
    "discipline": "MATH",
    "name": "Applied Geometry & Topology",
    "baseWeight": 6,
    "keywords": [
      "applied",
      "geometry",
      "topology"
    ]
  },
  {
    "id": "theoretical_geometry_topology",
    "discipline": "MATH",
    "name": "Theoretical Geometry & Topology",
    "baseWeight": 7,
    "keywords": [
      "theoretical",
      "geometry",
      "topology",
      "mathematical",
      "formalism",
      "derivation",
      "hypothesis"
    ]
  },
  {
    "id": "mathematical_geometry_topology",
    "discipline": "MATH",
    "name": "Mathematical Geometry & Topology",
    "baseWeight": 6,
    "keywords": [
      "mathematical",
      "geometry",
      "topology"
    ]
  },
  {
    "id": "logical_geometry_topology",
    "discipline": "MATH",
    "name": "Logical Geometry & Topology",
    "baseWeight": 6,
    "keywords": [
      "logical",
      "geometry",
      "topology"
    ]
  },
  {
    "id": "set_theoretic_geometry_topology",
    "discipline": "MATH",
    "name": "Set-Theoretic Geometry & Topology",
    "baseWeight": 6,
    "keywords": [
      "theoretic",
      "geometry",
      "topology"
    ]
  },
  {
    "id": "computational_geometry_topology",
    "discipline": "MATH",
    "name": "Computational Geometry & Topology",
    "baseWeight": 7,
    "keywords": [
      "computational",
      "geometry",
      "topology",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico"
    ]
  },
  {
    "id": "algorithmic_geometry_topology",
    "discipline": "MATH",
    "name": "Algorithmic Geometry & Topology",
    "baseWeight": 6,
    "keywords": [
      "algorithmic",
      "geometry",
      "topology"
    ]
  },
  {
    "id": "chaotic_geometry_topology",
    "discipline": "MATH",
    "name": "Chaotic Geometry & Topology",
    "baseWeight": 6,
    "keywords": [
      "chaotic",
      "geometry",
      "topology"
    ]
  },
  {
    "id": "dynamical_geometry_topology",
    "discipline": "MATH",
    "name": "Dynamical Geometry & Topology",
    "baseWeight": 6,
    "keywords": [
      "dynamical",
      "geometry",
      "topology"
    ]
  },
  {
    "id": "complex_geometry_topology",
    "discipline": "MATH",
    "name": "Complex Geometry & Topology",
    "baseWeight": 6,
    "keywords": [
      "complex",
      "geometry",
      "topology"
    ]
  },
  {
    "id": "linear_geometry_topology",
    "discipline": "MATH",
    "name": "Linear Geometry & Topology",
    "baseWeight": 6,
    "keywords": [
      "linear",
      "geometry",
      "topology"
    ]
  },
  {
    "id": "abstract_geometry_topology",
    "discipline": "MATH",
    "name": "Abstract Geometry & Topology",
    "baseWeight": 6,
    "keywords": [
      "abstract",
      "geometry",
      "topology"
    ]
  },
  {
    "id": "algebraic_calculus_analysis",
    "discipline": "MATH",
    "name": "Algebraic Calculus & Analysis",
    "baseWeight": 4,
    "keywords": [
      "algebraic",
      "calculus",
      "analysis",
      "ai",
      "artificial intelligence",
      "machine learning",
      "deep learning",
      "llm",
      "transformer"
    ]
  },
  {
    "id": "geometric_calculus_analysis",
    "discipline": "MATH",
    "name": "Geometric Calculus & Analysis",
    "baseWeight": 4,
    "keywords": [
      "geometric",
      "calculus",
      "analysis"
    ]
  },
  {
    "id": "analytical_calculus_analysis",
    "discipline": "MATH",
    "name": "Analytical Calculus & Analysis",
    "baseWeight": 4,
    "keywords": [
      "analytical",
      "calculus",
      "analysis"
    ]
  },
  {
    "id": "differential_calculus_analysis",
    "discipline": "MATH",
    "name": "Differential Calculus & Analysis",
    "baseWeight": 4,
    "keywords": [
      "differential",
      "calculus",
      "analysis"
    ]
  },
  {
    "id": "topological_calculus_analysis",
    "discipline": "MATH",
    "name": "Topological Calculus & Analysis",
    "baseWeight": 4,
    "keywords": [
      "topological",
      "calculus",
      "analysis"
    ]
  },
  {
    "id": "probabilistic_calculus_analysis",
    "discipline": "MATH",
    "name": "Probabilistic Calculus & Analysis",
    "baseWeight": 4,
    "keywords": [
      "probabilistic",
      "calculus",
      "analysis"
    ]
  },
  {
    "id": "statistical_calculus_analysis",
    "discipline": "MATH",
    "name": "Statistical Calculus & Analysis",
    "baseWeight": 4,
    "keywords": [
      "statistical",
      "calculus",
      "analysis",
      "entropy",
      "probability",
      "ensemble",
      "boltzmann",
      "stochastic"
    ]
  },
  {
    "id": "combinatorial_calculus_analysis",
    "discipline": "MATH",
    "name": "Combinatorial Calculus & Analysis",
    "baseWeight": 4,
    "keywords": [
      "combinatorial",
      "calculus",
      "analysis"
    ]
  },
  {
    "id": "arithmetic_calculus_analysis",
    "discipline": "MATH",
    "name": "Arithmetic Calculus & Analysis",
    "baseWeight": 4,
    "keywords": [
      "arithmetic",
      "calculus",
      "analysis"
    ]
  },
  {
    "id": "numerical_calculus_analysis",
    "discipline": "MATH",
    "name": "Numerical Calculus & Analysis",
    "baseWeight": 4,
    "keywords": [
      "numerical",
      "calculus",
      "analysis"
    ]
  },
  {
    "id": "stochastic_calculus_analysis",
    "discipline": "MATH",
    "name": "Stochastic Calculus & Analysis",
    "baseWeight": 4,
    "keywords": [
      "stochastic",
      "calculus",
      "analysis"
    ]
  },
  {
    "id": "discrete_calculus_analysis",
    "discipline": "MATH",
    "name": "Discrete Calculus & Analysis",
    "baseWeight": 4,
    "keywords": [
      "discrete",
      "calculus",
      "analysis"
    ]
  },
  {
    "id": "continuous_calculus_analysis",
    "discipline": "MATH",
    "name": "Continuous Calculus & Analysis",
    "baseWeight": 4,
    "keywords": [
      "continuous",
      "calculus",
      "analysis"
    ]
  },
  {
    "id": "applied_calculus_analysis",
    "discipline": "MATH",
    "name": "Applied Calculus & Analysis",
    "baseWeight": 4,
    "keywords": [
      "applied",
      "calculus",
      "analysis"
    ]
  },
  {
    "id": "theoretical_calculus_analysis",
    "discipline": "MATH",
    "name": "Theoretical Calculus & Analysis",
    "baseWeight": 5,
    "keywords": [
      "theoretical",
      "calculus",
      "analysis",
      "mathematical",
      "formalism",
      "derivation",
      "hypothesis"
    ]
  },
  {
    "id": "mathematical_calculus_analysis",
    "discipline": "MATH",
    "name": "Mathematical Calculus & Analysis",
    "baseWeight": 4,
    "keywords": [
      "mathematical",
      "calculus",
      "analysis"
    ]
  },
  {
    "id": "logical_calculus_analysis",
    "discipline": "MATH",
    "name": "Logical Calculus & Analysis",
    "baseWeight": 4,
    "keywords": [
      "logical",
      "calculus",
      "analysis"
    ]
  },
  {
    "id": "set_theoretic_calculus_analysis",
    "discipline": "MATH",
    "name": "Set-Theoretic Calculus & Analysis",
    "baseWeight": 4,
    "keywords": [
      "theoretic",
      "calculus",
      "analysis"
    ]
  },
  {
    "id": "computational_calculus_analysis",
    "discipline": "MATH",
    "name": "Computational Calculus & Analysis",
    "baseWeight": 5,
    "keywords": [
      "computational",
      "calculus",
      "analysis",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico"
    ]
  },
  {
    "id": "algorithmic_calculus_analysis",
    "discipline": "MATH",
    "name": "Algorithmic Calculus & Analysis",
    "baseWeight": 4,
    "keywords": [
      "algorithmic",
      "calculus",
      "analysis"
    ]
  },
  {
    "id": "chaotic_calculus_analysis",
    "discipline": "MATH",
    "name": "Chaotic Calculus & Analysis",
    "baseWeight": 4,
    "keywords": [
      "chaotic",
      "calculus",
      "analysis"
    ]
  },
  {
    "id": "dynamical_calculus_analysis",
    "discipline": "MATH",
    "name": "Dynamical Calculus & Analysis",
    "baseWeight": 4,
    "keywords": [
      "dynamical",
      "calculus",
      "analysis"
    ]
  },
  {
    "id": "complex_calculus_analysis",
    "discipline": "MATH",
    "name": "Complex Calculus & Analysis",
    "baseWeight": 4,
    "keywords": [
      "complex",
      "calculus",
      "analysis"
    ]
  },
  {
    "id": "linear_calculus_analysis",
    "discipline": "MATH",
    "name": "Linear Calculus & Analysis",
    "baseWeight": 4,
    "keywords": [
      "linear",
      "calculus",
      "analysis"
    ]
  },
  {
    "id": "abstract_calculus_analysis",
    "discipline": "MATH",
    "name": "Abstract Calculus & Analysis",
    "baseWeight": 4,
    "keywords": [
      "abstract",
      "calculus",
      "analysis"
    ]
  },
  {
    "id": "algebraic_probability_statistics",
    "discipline": "MATH",
    "name": "Algebraic Probability & Statistics",
    "baseWeight": 5,
    "keywords": [
      "algebraic",
      "probability",
      "statistics",
      "ai",
      "artificial intelligence",
      "machine learning",
      "deep learning",
      "llm",
      "transformer"
    ]
  },
  {
    "id": "geometric_probability_statistics",
    "discipline": "MATH",
    "name": "Geometric Probability & Statistics",
    "baseWeight": 5,
    "keywords": [
      "geometric",
      "probability",
      "statistics"
    ]
  },
  {
    "id": "analytical_probability_statistics",
    "discipline": "MATH",
    "name": "Analytical Probability & Statistics",
    "baseWeight": 5,
    "keywords": [
      "analytical",
      "probability",
      "statistics"
    ]
  },
  {
    "id": "differential_probability_statistics",
    "discipline": "MATH",
    "name": "Differential Probability & Statistics",
    "baseWeight": 5,
    "keywords": [
      "differential",
      "probability",
      "statistics"
    ]
  },
  {
    "id": "topological_probability_statistics",
    "discipline": "MATH",
    "name": "Topological Probability & Statistics",
    "baseWeight": 5,
    "keywords": [
      "topological",
      "probability",
      "statistics"
    ]
  },
  {
    "id": "probabilistic_probability_statistics",
    "discipline": "MATH",
    "name": "Probabilistic Probability & Statistics",
    "baseWeight": 5,
    "keywords": [
      "probabilistic",
      "probability",
      "statistics"
    ]
  },
  {
    "id": "statistical_probability_statistics",
    "discipline": "MATH",
    "name": "Statistical Probability & Statistics",
    "baseWeight": 5,
    "keywords": [
      "statistical",
      "probability",
      "statistics",
      "entropy",
      "ensemble",
      "boltzmann",
      "stochastic"
    ]
  },
  {
    "id": "combinatorial_probability_statistics",
    "discipline": "MATH",
    "name": "Combinatorial Probability & Statistics",
    "baseWeight": 5,
    "keywords": [
      "combinatorial",
      "probability",
      "statistics"
    ]
  },
  {
    "id": "arithmetic_probability_statistics",
    "discipline": "MATH",
    "name": "Arithmetic Probability & Statistics",
    "baseWeight": 5,
    "keywords": [
      "arithmetic",
      "probability",
      "statistics"
    ]
  },
  {
    "id": "numerical_probability_statistics",
    "discipline": "MATH",
    "name": "Numerical Probability & Statistics",
    "baseWeight": 5,
    "keywords": [
      "numerical",
      "probability",
      "statistics"
    ]
  },
  {
    "id": "stochastic_probability_statistics",
    "discipline": "MATH",
    "name": "Stochastic Probability & Statistics",
    "baseWeight": 5,
    "keywords": [
      "stochastic",
      "probability",
      "statistics"
    ]
  },
  {
    "id": "discrete_probability_statistics",
    "discipline": "MATH",
    "name": "Discrete Probability & Statistics",
    "baseWeight": 5,
    "keywords": [
      "discrete",
      "probability",
      "statistics"
    ]
  },
  {
    "id": "continuous_probability_statistics",
    "discipline": "MATH",
    "name": "Continuous Probability & Statistics",
    "baseWeight": 5,
    "keywords": [
      "continuous",
      "probability",
      "statistics"
    ]
  },
  {
    "id": "applied_probability_statistics",
    "discipline": "MATH",
    "name": "Applied Probability & Statistics",
    "baseWeight": 5,
    "keywords": [
      "applied",
      "probability",
      "statistics"
    ]
  },
  {
    "id": "theoretical_probability_statistics",
    "discipline": "MATH",
    "name": "Theoretical Probability & Statistics",
    "baseWeight": 6,
    "keywords": [
      "theoretical",
      "probability",
      "statistics",
      "mathematical",
      "formalism",
      "derivation",
      "hypothesis"
    ]
  },
  {
    "id": "mathematical_probability_statistics",
    "discipline": "MATH",
    "name": "Mathematical Probability & Statistics",
    "baseWeight": 5,
    "keywords": [
      "mathematical",
      "probability",
      "statistics"
    ]
  },
  {
    "id": "logical_probability_statistics",
    "discipline": "MATH",
    "name": "Logical Probability & Statistics",
    "baseWeight": 5,
    "keywords": [
      "logical",
      "probability",
      "statistics"
    ]
  },
  {
    "id": "set_theoretic_probability_statistics",
    "discipline": "MATH",
    "name": "Set-Theoretic Probability & Statistics",
    "baseWeight": 5,
    "keywords": [
      "theoretic",
      "probability",
      "statistics"
    ]
  },
  {
    "id": "computational_probability_statistics",
    "discipline": "MATH",
    "name": "Computational Probability & Statistics",
    "baseWeight": 6,
    "keywords": [
      "computational",
      "probability",
      "statistics",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico"
    ]
  },
  {
    "id": "algorithmic_probability_statistics",
    "discipline": "MATH",
    "name": "Algorithmic Probability & Statistics",
    "baseWeight": 5,
    "keywords": [
      "algorithmic",
      "probability",
      "statistics"
    ]
  },
  {
    "id": "chaotic_probability_statistics",
    "discipline": "MATH",
    "name": "Chaotic Probability & Statistics",
    "baseWeight": 5,
    "keywords": [
      "chaotic",
      "probability",
      "statistics"
    ]
  },
  {
    "id": "dynamical_probability_statistics",
    "discipline": "MATH",
    "name": "Dynamical Probability & Statistics",
    "baseWeight": 5,
    "keywords": [
      "dynamical",
      "probability",
      "statistics"
    ]
  },
  {
    "id": "complex_probability_statistics",
    "discipline": "MATH",
    "name": "Complex Probability & Statistics",
    "baseWeight": 5,
    "keywords": [
      "complex",
      "probability",
      "statistics"
    ]
  },
  {
    "id": "linear_probability_statistics",
    "discipline": "MATH",
    "name": "Linear Probability & Statistics",
    "baseWeight": 5,
    "keywords": [
      "linear",
      "probability",
      "statistics"
    ]
  },
  {
    "id": "abstract_probability_statistics",
    "discipline": "MATH",
    "name": "Abstract Probability & Statistics",
    "baseWeight": 5,
    "keywords": [
      "abstract",
      "probability",
      "statistics"
    ]
  },
  {
    "id": "algebraic_combinatorics_graph_theory",
    "discipline": "MATH",
    "name": "Algebraic Combinatorics & Graph Theory",
    "baseWeight": 6,
    "keywords": [
      "algebraic",
      "combinatorics",
      "graph",
      "theory",
      "ai",
      "artificial intelligence",
      "machine learning",
      "deep learning",
      "llm",
      "transformer"
    ]
  },
  {
    "id": "geometric_combinatorics_graph_theory",
    "discipline": "MATH",
    "name": "Geometric Combinatorics & Graph Theory",
    "baseWeight": 6,
    "keywords": [
      "geometric",
      "combinatorics",
      "graph",
      "theory"
    ]
  },
  {
    "id": "analytical_combinatorics_graph_theory",
    "discipline": "MATH",
    "name": "Analytical Combinatorics & Graph Theory",
    "baseWeight": 6,
    "keywords": [
      "analytical",
      "combinatorics",
      "graph",
      "theory"
    ]
  },
  {
    "id": "differential_combinatorics_graph_theory",
    "discipline": "MATH",
    "name": "Differential Combinatorics & Graph Theory",
    "baseWeight": 6,
    "keywords": [
      "differential",
      "combinatorics",
      "graph",
      "theory"
    ]
  },
  {
    "id": "topological_combinatorics_graph_theory",
    "discipline": "MATH",
    "name": "Topological Combinatorics & Graph Theory",
    "baseWeight": 6,
    "keywords": [
      "topological",
      "combinatorics",
      "graph",
      "theory"
    ]
  },
  {
    "id": "probabilistic_combinatorics_graph_theory",
    "discipline": "MATH",
    "name": "Probabilistic Combinatorics & Graph Theory",
    "baseWeight": 6,
    "keywords": [
      "probabilistic",
      "combinatorics",
      "graph",
      "theory"
    ]
  },
  {
    "id": "statistical_combinatorics_graph_theory",
    "discipline": "MATH",
    "name": "Statistical Combinatorics & Graph Theory",
    "baseWeight": 6,
    "keywords": [
      "statistical",
      "combinatorics",
      "graph",
      "theory",
      "entropy",
      "probability",
      "ensemble",
      "boltzmann",
      "stochastic"
    ]
  },
  {
    "id": "combinatorial_combinatorics_graph_theory",
    "discipline": "MATH",
    "name": "Combinatorial Combinatorics & Graph Theory",
    "baseWeight": 6,
    "keywords": [
      "combinatorial",
      "combinatorics",
      "graph",
      "theory"
    ]
  },
  {
    "id": "arithmetic_combinatorics_graph_theory",
    "discipline": "MATH",
    "name": "Arithmetic Combinatorics & Graph Theory",
    "baseWeight": 6,
    "keywords": [
      "arithmetic",
      "combinatorics",
      "graph",
      "theory"
    ]
  },
  {
    "id": "numerical_combinatorics_graph_theory",
    "discipline": "MATH",
    "name": "Numerical Combinatorics & Graph Theory",
    "baseWeight": 6,
    "keywords": [
      "numerical",
      "combinatorics",
      "graph",
      "theory"
    ]
  },
  {
    "id": "stochastic_combinatorics_graph_theory",
    "discipline": "MATH",
    "name": "Stochastic Combinatorics & Graph Theory",
    "baseWeight": 6,
    "keywords": [
      "stochastic",
      "combinatorics",
      "graph",
      "theory"
    ]
  },
  {
    "id": "discrete_combinatorics_graph_theory",
    "discipline": "MATH",
    "name": "Discrete Combinatorics & Graph Theory",
    "baseWeight": 6,
    "keywords": [
      "discrete",
      "combinatorics",
      "graph",
      "theory"
    ]
  },
  {
    "id": "continuous_combinatorics_graph_theory",
    "discipline": "MATH",
    "name": "Continuous Combinatorics & Graph Theory",
    "baseWeight": 6,
    "keywords": [
      "continuous",
      "combinatorics",
      "graph",
      "theory"
    ]
  },
  {
    "id": "applied_combinatorics_graph_theory",
    "discipline": "MATH",
    "name": "Applied Combinatorics & Graph Theory",
    "baseWeight": 6,
    "keywords": [
      "applied",
      "combinatorics",
      "graph",
      "theory"
    ]
  },
  {
    "id": "theoretical_combinatorics_graph_theory",
    "discipline": "MATH",
    "name": "Theoretical Combinatorics & Graph Theory",
    "baseWeight": 7,
    "keywords": [
      "theoretical",
      "combinatorics",
      "graph",
      "theory",
      "mathematical",
      "formalism",
      "derivation",
      "hypothesis"
    ]
  },
  {
    "id": "mathematical_combinatorics_graph_theory",
    "discipline": "MATH",
    "name": "Mathematical Combinatorics & Graph Theory",
    "baseWeight": 6,
    "keywords": [
      "mathematical",
      "combinatorics",
      "graph",
      "theory"
    ]
  },
  {
    "id": "logical_combinatorics_graph_theory",
    "discipline": "MATH",
    "name": "Logical Combinatorics & Graph Theory",
    "baseWeight": 6,
    "keywords": [
      "logical",
      "combinatorics",
      "graph",
      "theory"
    ]
  },
  {
    "id": "set_theoretic_combinatorics_graph_theory",
    "discipline": "MATH",
    "name": "Set-Theoretic Combinatorics & Graph Theory",
    "baseWeight": 6,
    "keywords": [
      "theoretic",
      "combinatorics",
      "graph",
      "theory"
    ]
  },
  {
    "id": "computational_combinatorics_graph_theory",
    "discipline": "MATH",
    "name": "Computational Combinatorics & Graph Theory",
    "baseWeight": 7,
    "keywords": [
      "computational",
      "combinatorics",
      "graph",
      "theory",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico"
    ]
  },
  {
    "id": "algorithmic_combinatorics_graph_theory",
    "discipline": "MATH",
    "name": "Algorithmic Combinatorics & Graph Theory",
    "baseWeight": 6,
    "keywords": [
      "algorithmic",
      "combinatorics",
      "graph",
      "theory"
    ]
  },
  {
    "id": "chaotic_combinatorics_graph_theory",
    "discipline": "MATH",
    "name": "Chaotic Combinatorics & Graph Theory",
    "baseWeight": 6,
    "keywords": [
      "chaotic",
      "combinatorics",
      "graph",
      "theory"
    ]
  },
  {
    "id": "dynamical_combinatorics_graph_theory",
    "discipline": "MATH",
    "name": "Dynamical Combinatorics & Graph Theory",
    "baseWeight": 6,
    "keywords": [
      "dynamical",
      "combinatorics",
      "graph",
      "theory"
    ]
  },
  {
    "id": "complex_combinatorics_graph_theory",
    "discipline": "MATH",
    "name": "Complex Combinatorics & Graph Theory",
    "baseWeight": 6,
    "keywords": [
      "complex",
      "combinatorics",
      "graph",
      "theory"
    ]
  },
  {
    "id": "linear_combinatorics_graph_theory",
    "discipline": "MATH",
    "name": "Linear Combinatorics & Graph Theory",
    "baseWeight": 6,
    "keywords": [
      "linear",
      "combinatorics",
      "graph",
      "theory"
    ]
  },
  {
    "id": "abstract_combinatorics_graph_theory",
    "discipline": "MATH",
    "name": "Abstract Combinatorics & Graph Theory",
    "baseWeight": 6,
    "keywords": [
      "abstract",
      "combinatorics",
      "graph",
      "theory"
    ]
  },
  {
    "id": "algebraic_logic_set_theory",
    "discipline": "MATH",
    "name": "Algebraic Logic & Set Theory",
    "baseWeight": 4,
    "keywords": [
      "algebraic",
      "logic",
      "theory",
      "ai",
      "artificial intelligence",
      "machine learning",
      "deep learning",
      "llm",
      "transformer"
    ]
  },
  {
    "id": "geometric_logic_set_theory",
    "discipline": "MATH",
    "name": "Geometric Logic & Set Theory",
    "baseWeight": 4,
    "keywords": [
      "geometric",
      "logic",
      "theory"
    ]
  },
  {
    "id": "analytical_logic_set_theory",
    "discipline": "MATH",
    "name": "Analytical Logic & Set Theory",
    "baseWeight": 4,
    "keywords": [
      "analytical",
      "logic",
      "theory"
    ]
  },
  {
    "id": "differential_logic_set_theory",
    "discipline": "MATH",
    "name": "Differential Logic & Set Theory",
    "baseWeight": 4,
    "keywords": [
      "differential",
      "logic",
      "theory"
    ]
  },
  {
    "id": "topological_logic_set_theory",
    "discipline": "MATH",
    "name": "Topological Logic & Set Theory",
    "baseWeight": 4,
    "keywords": [
      "topological",
      "logic",
      "theory"
    ]
  },
  {
    "id": "probabilistic_logic_set_theory",
    "discipline": "MATH",
    "name": "Probabilistic Logic & Set Theory",
    "baseWeight": 4,
    "keywords": [
      "probabilistic",
      "logic",
      "theory"
    ]
  },
  {
    "id": "statistical_logic_set_theory",
    "discipline": "MATH",
    "name": "Statistical Logic & Set Theory",
    "baseWeight": 4,
    "keywords": [
      "statistical",
      "logic",
      "theory",
      "entropy",
      "probability",
      "ensemble",
      "boltzmann",
      "stochastic"
    ]
  },
  {
    "id": "combinatorial_logic_set_theory",
    "discipline": "MATH",
    "name": "Combinatorial Logic & Set Theory",
    "baseWeight": 4,
    "keywords": [
      "combinatorial",
      "logic",
      "theory"
    ]
  },
  {
    "id": "arithmetic_logic_set_theory",
    "discipline": "MATH",
    "name": "Arithmetic Logic & Set Theory",
    "baseWeight": 4,
    "keywords": [
      "arithmetic",
      "logic",
      "theory"
    ]
  },
  {
    "id": "numerical_logic_set_theory",
    "discipline": "MATH",
    "name": "Numerical Logic & Set Theory",
    "baseWeight": 4,
    "keywords": [
      "numerical",
      "logic",
      "theory"
    ]
  },
  {
    "id": "stochastic_logic_set_theory",
    "discipline": "MATH",
    "name": "Stochastic Logic & Set Theory",
    "baseWeight": 4,
    "keywords": [
      "stochastic",
      "logic",
      "theory"
    ]
  },
  {
    "id": "discrete_logic_set_theory",
    "discipline": "MATH",
    "name": "Discrete Logic & Set Theory",
    "baseWeight": 4,
    "keywords": [
      "discrete",
      "logic",
      "theory"
    ]
  },
  {
    "id": "continuous_logic_set_theory",
    "discipline": "MATH",
    "name": "Continuous Logic & Set Theory",
    "baseWeight": 4,
    "keywords": [
      "continuous",
      "logic",
      "theory"
    ]
  },
  {
    "id": "applied_logic_set_theory",
    "discipline": "MATH",
    "name": "Applied Logic & Set Theory",
    "baseWeight": 4,
    "keywords": [
      "applied",
      "logic",
      "theory"
    ]
  },
  {
    "id": "theoretical_logic_set_theory",
    "discipline": "MATH",
    "name": "Theoretical Logic & Set Theory",
    "baseWeight": 5,
    "keywords": [
      "theoretical",
      "logic",
      "theory",
      "mathematical",
      "formalism",
      "derivation",
      "hypothesis"
    ]
  },
  {
    "id": "mathematical_logic_set_theory",
    "discipline": "MATH",
    "name": "Mathematical Logic & Set Theory",
    "baseWeight": 4,
    "keywords": [
      "mathematical",
      "logic",
      "theory"
    ]
  },
  {
    "id": "logical_logic_set_theory",
    "discipline": "MATH",
    "name": "Logical Logic & Set Theory",
    "baseWeight": 4,
    "keywords": [
      "logical",
      "logic",
      "theory"
    ]
  },
  {
    "id": "set_theoretic_logic_set_theory",
    "discipline": "MATH",
    "name": "Set-Theoretic Logic & Set Theory",
    "baseWeight": 4,
    "keywords": [
      "theoretic",
      "logic",
      "theory"
    ]
  },
  {
    "id": "computational_logic_set_theory",
    "discipline": "MATH",
    "name": "Computational Logic & Set Theory",
    "baseWeight": 5,
    "keywords": [
      "computational",
      "logic",
      "theory",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico"
    ]
  },
  {
    "id": "algorithmic_logic_set_theory",
    "discipline": "MATH",
    "name": "Algorithmic Logic & Set Theory",
    "baseWeight": 4,
    "keywords": [
      "algorithmic",
      "logic",
      "theory"
    ]
  },
  {
    "id": "chaotic_logic_set_theory",
    "discipline": "MATH",
    "name": "Chaotic Logic & Set Theory",
    "baseWeight": 4,
    "keywords": [
      "chaotic",
      "logic",
      "theory"
    ]
  },
  {
    "id": "dynamical_logic_set_theory",
    "discipline": "MATH",
    "name": "Dynamical Logic & Set Theory",
    "baseWeight": 4,
    "keywords": [
      "dynamical",
      "logic",
      "theory"
    ]
  },
  {
    "id": "complex_logic_set_theory",
    "discipline": "MATH",
    "name": "Complex Logic & Set Theory",
    "baseWeight": 4,
    "keywords": [
      "complex",
      "logic",
      "theory"
    ]
  },
  {
    "id": "linear_logic_set_theory",
    "discipline": "MATH",
    "name": "Linear Logic & Set Theory",
    "baseWeight": 4,
    "keywords": [
      "linear",
      "logic",
      "theory"
    ]
  },
  {
    "id": "abstract_logic_set_theory",
    "discipline": "MATH",
    "name": "Abstract Logic & Set Theory",
    "baseWeight": 4,
    "keywords": [
      "abstract",
      "logic",
      "theory"
    ]
  },
  {
    "id": "algebraic_numerical_analysis_optimization",
    "discipline": "MATH",
    "name": "Algebraic Numerical Analysis & Optimization",
    "baseWeight": 5,
    "keywords": [
      "algebraic",
      "numerical",
      "analysis",
      "optimization",
      "ai",
      "artificial intelligence",
      "machine learning",
      "deep learning",
      "llm",
      "transformer"
    ]
  },
  {
    "id": "geometric_numerical_analysis_optimization",
    "discipline": "MATH",
    "name": "Geometric Numerical Analysis & Optimization",
    "baseWeight": 5,
    "keywords": [
      "geometric",
      "numerical",
      "analysis",
      "optimization"
    ]
  },
  {
    "id": "analytical_numerical_analysis_optimization",
    "discipline": "MATH",
    "name": "Analytical Numerical Analysis & Optimization",
    "baseWeight": 5,
    "keywords": [
      "analytical",
      "numerical",
      "analysis",
      "optimization"
    ]
  },
  {
    "id": "differential_numerical_analysis_optimization",
    "discipline": "MATH",
    "name": "Differential Numerical Analysis & Optimization",
    "baseWeight": 5,
    "keywords": [
      "differential",
      "numerical",
      "analysis",
      "optimization"
    ]
  },
  {
    "id": "topological_numerical_analysis_optimization",
    "discipline": "MATH",
    "name": "Topological Numerical Analysis & Optimization",
    "baseWeight": 5,
    "keywords": [
      "topological",
      "numerical",
      "analysis",
      "optimization"
    ]
  },
  {
    "id": "probabilistic_numerical_analysis_optimization",
    "discipline": "MATH",
    "name": "Probabilistic Numerical Analysis & Optimization",
    "baseWeight": 5,
    "keywords": [
      "probabilistic",
      "numerical",
      "analysis",
      "optimization"
    ]
  },
  {
    "id": "statistical_numerical_analysis_optimization",
    "discipline": "MATH",
    "name": "Statistical Numerical Analysis & Optimization",
    "baseWeight": 5,
    "keywords": [
      "statistical",
      "numerical",
      "analysis",
      "optimization",
      "entropy",
      "probability",
      "ensemble",
      "boltzmann",
      "stochastic"
    ]
  },
  {
    "id": "combinatorial_numerical_analysis_optimization",
    "discipline": "MATH",
    "name": "Combinatorial Numerical Analysis & Optimization",
    "baseWeight": 5,
    "keywords": [
      "combinatorial",
      "numerical",
      "analysis",
      "optimization"
    ]
  },
  {
    "id": "arithmetic_numerical_analysis_optimization",
    "discipline": "MATH",
    "name": "Arithmetic Numerical Analysis & Optimization",
    "baseWeight": 5,
    "keywords": [
      "arithmetic",
      "numerical",
      "analysis",
      "optimization"
    ]
  },
  {
    "id": "numerical_analysis_optimization",
    "discipline": "MATH",
    "name": "Numerical Analysis & Optimization",
    "baseWeight": 5,
    "keywords": [
      "numerical",
      "analysis",
      "optimization"
    ]
  },
  {
    "id": "stochastic_numerical_analysis_optimization",
    "discipline": "MATH",
    "name": "Stochastic Numerical Analysis & Optimization",
    "baseWeight": 5,
    "keywords": [
      "stochastic",
      "numerical",
      "analysis",
      "optimization"
    ]
  },
  {
    "id": "discrete_numerical_analysis_optimization",
    "discipline": "MATH",
    "name": "Discrete Numerical Analysis & Optimization",
    "baseWeight": 5,
    "keywords": [
      "discrete",
      "numerical",
      "analysis",
      "optimization"
    ]
  },
  {
    "id": "continuous_numerical_analysis_optimization",
    "discipline": "MATH",
    "name": "Continuous Numerical Analysis & Optimization",
    "baseWeight": 5,
    "keywords": [
      "continuous",
      "numerical",
      "analysis",
      "optimization"
    ]
  },
  {
    "id": "applied_numerical_analysis_optimization",
    "discipline": "MATH",
    "name": "Applied Numerical Analysis & Optimization",
    "baseWeight": 5,
    "keywords": [
      "applied",
      "numerical",
      "analysis",
      "optimization"
    ]
  },
  {
    "id": "theoretical_numerical_analysis_optimization",
    "discipline": "MATH",
    "name": "Theoretical Numerical Analysis & Optimization",
    "baseWeight": 6,
    "keywords": [
      "theoretical",
      "numerical",
      "analysis",
      "optimization",
      "mathematical",
      "formalism",
      "derivation",
      "hypothesis"
    ]
  },
  {
    "id": "mathematical_numerical_analysis_optimization",
    "discipline": "MATH",
    "name": "Mathematical Numerical Analysis & Optimization",
    "baseWeight": 5,
    "keywords": [
      "mathematical",
      "numerical",
      "analysis",
      "optimization"
    ]
  },
  {
    "id": "logical_numerical_analysis_optimization",
    "discipline": "MATH",
    "name": "Logical Numerical Analysis & Optimization",
    "baseWeight": 5,
    "keywords": [
      "logical",
      "numerical",
      "analysis",
      "optimization"
    ]
  },
  {
    "id": "set_theoretic_numerical_analysis_optimization",
    "discipline": "MATH",
    "name": "Set-Theoretic Numerical Analysis & Optimization",
    "baseWeight": 5,
    "keywords": [
      "theoretic",
      "numerical",
      "analysis",
      "optimization"
    ]
  },
  {
    "id": "computational_numerical_analysis_optimization",
    "discipline": "MATH",
    "name": "Computational Numerical Analysis & Optimization",
    "baseWeight": 6,
    "keywords": [
      "computational",
      "numerical",
      "analysis",
      "optimization",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "in silico"
    ]
  },
  {
    "id": "algorithmic_numerical_analysis_optimization",
    "discipline": "MATH",
    "name": "Algorithmic Numerical Analysis & Optimization",
    "baseWeight": 5,
    "keywords": [
      "algorithmic",
      "numerical",
      "analysis",
      "optimization"
    ]
  },
  {
    "id": "chaotic_numerical_analysis_optimization",
    "discipline": "MATH",
    "name": "Chaotic Numerical Analysis & Optimization",
    "baseWeight": 5,
    "keywords": [
      "chaotic",
      "numerical",
      "analysis",
      "optimization"
    ]
  },
  {
    "id": "dynamical_numerical_analysis_optimization",
    "discipline": "MATH",
    "name": "Dynamical Numerical Analysis & Optimization",
    "baseWeight": 5,
    "keywords": [
      "dynamical",
      "numerical",
      "analysis",
      "optimization"
    ]
  },
  {
    "id": "complex_numerical_analysis_optimization",
    "discipline": "MATH",
    "name": "Complex Numerical Analysis & Optimization",
    "baseWeight": 5,
    "keywords": [
      "complex",
      "numerical",
      "analysis",
      "optimization"
    ]
  },
  {
    "id": "linear_numerical_analysis_optimization",
    "discipline": "MATH",
    "name": "Linear Numerical Analysis & Optimization",
    "baseWeight": 5,
    "keywords": [
      "linear",
      "numerical",
      "analysis",
      "optimization"
    ]
  },
  {
    "id": "abstract_numerical_analysis_optimization",
    "discipline": "MATH",
    "name": "Abstract Numerical Analysis & Optimization",
    "baseWeight": 5,
    "keywords": [
      "abstract",
      "numerical",
      "analysis",
      "optimization"
    ]
  },
  {
    "id": "algebraic_dynamical_systems_chaos",
    "discipline": "MATH",
    "name": "Algebraic Dynamical Systems & Chaos",
    "baseWeight": 6,
    "keywords": [
      "algebraic",
      "dynamical",
      "systems",
      "chaos",
      "ai",
      "artificial intelligence",
      "machine learning",
      "deep learning",
      "llm",
      "transformer"
    ]
  },
  {
    "id": "geometric_dynamical_systems_chaos",
    "discipline": "MATH",
    "name": "Geometric Dynamical Systems & Chaos",
    "baseWeight": 6,
    "keywords": [
      "geometric",
      "dynamical",
      "systems",
      "chaos"
    ]
  },
  {
    "id": "analytical_dynamical_systems_chaos",
    "discipline": "MATH",
    "name": "Analytical Dynamical Systems & Chaos",
    "baseWeight": 6,
    "keywords": [
      "analytical",
      "dynamical",
      "systems",
      "chaos"
    ]
  },
  {
    "id": "differential_dynamical_systems_chaos",
    "discipline": "MATH",
    "name": "Differential Dynamical Systems & Chaos",
    "baseWeight": 6,
    "keywords": [
      "differential",
      "dynamical",
      "systems",
      "chaos"
    ]
  },
  {
    "id": "topological_dynamical_systems_chaos",
    "discipline": "MATH",
    "name": "Topological Dynamical Systems & Chaos",
    "baseWeight": 6,
    "keywords": [
      "topological",
      "dynamical",
      "systems",
      "chaos"
    ]
  },
  {
    "id": "probabilistic_dynamical_systems_chaos",
    "discipline": "MATH",
    "name": "Probabilistic Dynamical Systems & Chaos",
    "baseWeight": 6,
    "keywords": [
      "probabilistic",
      "dynamical",
      "systems",
      "chaos"
    ]
  },
  {
    "id": "statistical_dynamical_systems_chaos",
    "discipline": "MATH",
    "name": "Statistical Dynamical Systems & Chaos",
    "baseWeight": 6,
    "keywords": [
      "statistical",
      "dynamical",
      "systems",
      "chaos",
      "entropy",
      "probability",
      "ensemble",
      "boltzmann",
      "stochastic"
    ]
  },
  {
    "id": "combinatorial_dynamical_systems_chaos",
    "discipline": "MATH",
    "name": "Combinatorial Dynamical Systems & Chaos",
    "baseWeight": 6,
    "keywords": [
      "combinatorial",
      "dynamical",
      "systems",
      "chaos"
    ]
  },
  {
    "id": "arithmetic_dynamical_systems_chaos",
    "discipline": "MATH",
    "name": "Arithmetic Dynamical Systems & Chaos",
    "baseWeight": 6,
    "keywords": [
      "arithmetic",
      "dynamical",
      "systems",
      "chaos"
    ]
  },
  {
    "id": "numerical_dynamical_systems_chaos",
    "discipline": "MATH",
    "name": "Numerical Dynamical Systems & Chaos",
    "baseWeight": 6,
    "keywords": [
      "numerical",
      "dynamical",
      "systems",
      "chaos"
    ]
  },
  {
    "id": "stochastic_dynamical_systems_chaos",
    "discipline": "MATH",
    "name": "Stochastic Dynamical Systems & Chaos",
    "baseWeight": 6,
    "keywords": [
      "stochastic",
      "dynamical",
      "systems",
      "chaos"
    ]
  },
  {
    "id": "discrete_dynamical_systems_chaos",
    "discipline": "MATH",
    "name": "Discrete Dynamical Systems & Chaos",
    "baseWeight": 6,
    "keywords": [
      "discrete",
      "dynamical",
      "systems",
      "chaos"
    ]
  },
  {
    "id": "continuous_dynamical_systems_chaos",
    "discipline": "MATH",
    "name": "Continuous Dynamical Systems & Chaos",
    "baseWeight": 6,
    "keywords": [
      "continuous",
      "dynamical",
      "systems",
      "chaos"
    ]
  },
  {
    "id": "applied_dynamical_systems_chaos",
    "discipline": "MATH",
    "name": "Applied Dynamical Systems & Chaos",
    "baseWeight": 6,
    "keywords": [
      "applied",
      "dynamical",
      "systems",
      "chaos"
    ]
  },
  {
    "id": "theoretical_dynamical_systems_chaos",
    "discipline": "MATH",
    "name": "Theoretical Dynamical Systems & Chaos",
    "baseWeight": 7,
    "keywords": [
      "theoretical",
      "dynamical",
      "systems",
      "chaos",
      "mathematical",
      "formalism",
      "derivation",
      "hypothesis"
    ]
  },
  {
    "id": "mathematical_dynamical_systems_chaos",
    "discipline": "MATH",
    "name": "Mathematical Dynamical Systems & Chaos",
    "baseWeight": 6,
    "keywords": [
      "mathematical",
      "dynamical",
      "systems",
      "chaos"
    ]
  },
  {
    "id": "logical_dynamical_systems_chaos",
    "discipline": "MATH",
    "name": "Logical Dynamical Systems & Chaos",
    "baseWeight": 6,
    "keywords": [
      "logical",
      "dynamical",
      "systems",
      "chaos"
    ]
  },
  {
    "id": "set_theoretic_dynamical_systems_chaos",
    "discipline": "MATH",
    "name": "Set-Theoretic Dynamical Systems & Chaos",
    "baseWeight": 6,
    "keywords": [
      "theoretic",
      "dynamical",
      "systems",
      "chaos"
    ]
  },
  {
    "id": "computational_dynamical_systems_chaos",
    "discipline": "MATH",
    "name": "Computational Dynamical Systems & Chaos",
    "baseWeight": 7,
    "keywords": [
      "computational",
      "dynamical",
      "systems",
      "chaos",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico"
    ]
  },
  {
    "id": "algorithmic_dynamical_systems_chaos",
    "discipline": "MATH",
    "name": "Algorithmic Dynamical Systems & Chaos",
    "baseWeight": 6,
    "keywords": [
      "algorithmic",
      "dynamical",
      "systems",
      "chaos"
    ]
  },
  {
    "id": "chaotic_dynamical_systems_chaos",
    "discipline": "MATH",
    "name": "Chaotic Dynamical Systems & Chaos",
    "baseWeight": 6,
    "keywords": [
      "chaotic",
      "dynamical",
      "systems",
      "chaos"
    ]
  },
  {
    "id": "dynamical_systems_chaos",
    "discipline": "MATH",
    "name": "Dynamical Systems & Chaos",
    "baseWeight": 6,
    "keywords": [
      "dynamical",
      "systems",
      "chaos"
    ]
  },
  {
    "id": "complex_dynamical_systems_chaos",
    "discipline": "MATH",
    "name": "Complex Dynamical Systems & Chaos",
    "baseWeight": 6,
    "keywords": [
      "complex",
      "dynamical",
      "systems",
      "chaos"
    ]
  },
  {
    "id": "linear_dynamical_systems_chaos",
    "discipline": "MATH",
    "name": "Linear Dynamical Systems & Chaos",
    "baseWeight": 6,
    "keywords": [
      "linear",
      "dynamical",
      "systems",
      "chaos"
    ]
  },
  {
    "id": "abstract_dynamical_systems_chaos",
    "discipline": "MATH",
    "name": "Abstract Dynamical Systems & Chaos",
    "baseWeight": 6,
    "keywords": [
      "abstract",
      "dynamical",
      "systems",
      "chaos"
    ]
  },
  {
    "id": "algebraic_cryptography_coding_theory",
    "discipline": "MATH",
    "name": "Algebraic Cryptography & Coding Theory",
    "baseWeight": 4,
    "keywords": [
      "algebraic",
      "cryptography",
      "coding",
      "theory",
      "ai",
      "artificial intelligence",
      "machine learning",
      "deep learning",
      "llm",
      "transformer"
    ]
  },
  {
    "id": "geometric_cryptography_coding_theory",
    "discipline": "MATH",
    "name": "Geometric Cryptography & Coding Theory",
    "baseWeight": 4,
    "keywords": [
      "geometric",
      "cryptography",
      "coding",
      "theory"
    ]
  },
  {
    "id": "analytical_cryptography_coding_theory",
    "discipline": "MATH",
    "name": "Analytical Cryptography & Coding Theory",
    "baseWeight": 4,
    "keywords": [
      "analytical",
      "cryptography",
      "coding",
      "theory"
    ]
  },
  {
    "id": "differential_cryptography_coding_theory",
    "discipline": "MATH",
    "name": "Differential Cryptography & Coding Theory",
    "baseWeight": 4,
    "keywords": [
      "differential",
      "cryptography",
      "coding",
      "theory"
    ]
  },
  {
    "id": "topological_cryptography_coding_theory",
    "discipline": "MATH",
    "name": "Topological Cryptography & Coding Theory",
    "baseWeight": 4,
    "keywords": [
      "topological",
      "cryptography",
      "coding",
      "theory"
    ]
  },
  {
    "id": "probabilistic_cryptography_coding_theory",
    "discipline": "MATH",
    "name": "Probabilistic Cryptography & Coding Theory",
    "baseWeight": 4,
    "keywords": [
      "probabilistic",
      "cryptography",
      "coding",
      "theory"
    ]
  },
  {
    "id": "statistical_cryptography_coding_theory",
    "discipline": "MATH",
    "name": "Statistical Cryptography & Coding Theory",
    "baseWeight": 4,
    "keywords": [
      "statistical",
      "cryptography",
      "coding",
      "theory",
      "entropy",
      "probability",
      "ensemble",
      "boltzmann",
      "stochastic"
    ]
  },
  {
    "id": "combinatorial_cryptography_coding_theory",
    "discipline": "MATH",
    "name": "Combinatorial Cryptography & Coding Theory",
    "baseWeight": 4,
    "keywords": [
      "combinatorial",
      "cryptography",
      "coding",
      "theory"
    ]
  },
  {
    "id": "arithmetic_cryptography_coding_theory",
    "discipline": "MATH",
    "name": "Arithmetic Cryptography & Coding Theory",
    "baseWeight": 4,
    "keywords": [
      "arithmetic",
      "cryptography",
      "coding",
      "theory"
    ]
  },
  {
    "id": "numerical_cryptography_coding_theory",
    "discipline": "MATH",
    "name": "Numerical Cryptography & Coding Theory",
    "baseWeight": 4,
    "keywords": [
      "numerical",
      "cryptography",
      "coding",
      "theory"
    ]
  },
  {
    "id": "stochastic_cryptography_coding_theory",
    "discipline": "MATH",
    "name": "Stochastic Cryptography & Coding Theory",
    "baseWeight": 4,
    "keywords": [
      "stochastic",
      "cryptography",
      "coding",
      "theory"
    ]
  },
  {
    "id": "discrete_cryptography_coding_theory",
    "discipline": "MATH",
    "name": "Discrete Cryptography & Coding Theory",
    "baseWeight": 4,
    "keywords": [
      "discrete",
      "cryptography",
      "coding",
      "theory"
    ]
  },
  {
    "id": "continuous_cryptography_coding_theory",
    "discipline": "MATH",
    "name": "Continuous Cryptography & Coding Theory",
    "baseWeight": 4,
    "keywords": [
      "continuous",
      "cryptography",
      "coding",
      "theory"
    ]
  },
  {
    "id": "applied_cryptography_coding_theory",
    "discipline": "MATH",
    "name": "Applied Cryptography & Coding Theory",
    "baseWeight": 4,
    "keywords": [
      "applied",
      "cryptography",
      "coding",
      "theory"
    ]
  },
  {
    "id": "theoretical_cryptography_coding_theory",
    "discipline": "MATH",
    "name": "Theoretical Cryptography & Coding Theory",
    "baseWeight": 5,
    "keywords": [
      "theoretical",
      "cryptography",
      "coding",
      "theory",
      "mathematical",
      "formalism",
      "derivation",
      "hypothesis"
    ]
  },
  {
    "id": "mathematical_cryptography_coding_theory",
    "discipline": "MATH",
    "name": "Mathematical Cryptography & Coding Theory",
    "baseWeight": 4,
    "keywords": [
      "mathematical",
      "cryptography",
      "coding",
      "theory"
    ]
  },
  {
    "id": "logical_cryptography_coding_theory",
    "discipline": "MATH",
    "name": "Logical Cryptography & Coding Theory",
    "baseWeight": 4,
    "keywords": [
      "logical",
      "cryptography",
      "coding",
      "theory"
    ]
  },
  {
    "id": "set_theoretic_cryptography_coding_theory",
    "discipline": "MATH",
    "name": "Set-Theoretic Cryptography & Coding Theory",
    "baseWeight": 4,
    "keywords": [
      "theoretic",
      "cryptography",
      "coding",
      "theory"
    ]
  },
  {
    "id": "computational_cryptography_coding_theory",
    "discipline": "MATH",
    "name": "Computational Cryptography & Coding Theory",
    "baseWeight": 5,
    "keywords": [
      "computational",
      "cryptography",
      "coding",
      "theory",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico"
    ]
  },
  {
    "id": "algorithmic_cryptography_coding_theory",
    "discipline": "MATH",
    "name": "Algorithmic Cryptography & Coding Theory",
    "baseWeight": 4,
    "keywords": [
      "algorithmic",
      "cryptography",
      "coding",
      "theory"
    ]
  },
  {
    "id": "chaotic_cryptography_coding_theory",
    "discipline": "MATH",
    "name": "Chaotic Cryptography & Coding Theory",
    "baseWeight": 4,
    "keywords": [
      "chaotic",
      "cryptography",
      "coding",
      "theory"
    ]
  },
  {
    "id": "dynamical_cryptography_coding_theory",
    "discipline": "MATH",
    "name": "Dynamical Cryptography & Coding Theory",
    "baseWeight": 4,
    "keywords": [
      "dynamical",
      "cryptography",
      "coding",
      "theory"
    ]
  },
  {
    "id": "complex_cryptography_coding_theory",
    "discipline": "MATH",
    "name": "Complex Cryptography & Coding Theory",
    "baseWeight": 4,
    "keywords": [
      "complex",
      "cryptography",
      "coding",
      "theory"
    ]
  },
  {
    "id": "linear_cryptography_coding_theory",
    "discipline": "MATH",
    "name": "Linear Cryptography & Coding Theory",
    "baseWeight": 4,
    "keywords": [
      "linear",
      "cryptography",
      "coding",
      "theory"
    ]
  },
  {
    "id": "abstract_cryptography_coding_theory",
    "discipline": "MATH",
    "name": "Abstract Cryptography & Coding Theory",
    "baseWeight": 4,
    "keywords": [
      "abstract",
      "cryptography",
      "coding",
      "theory"
    ]
  },
  {
    "id": "geological_geology_tectonics",
    "discipline": "EARTH",
    "name": "Geological Geology & Tectonics",
    "baseWeight": 4,
    "keywords": [
      "geological",
      "geology",
      "tectonics"
    ]
  },
  {
    "id": "meteorological_geology_tectonics",
    "discipline": "EARTH",
    "name": "Meteorological Geology & Tectonics",
    "baseWeight": 4,
    "keywords": [
      "meteorological",
      "geology",
      "tectonics"
    ]
  },
  {
    "id": "climatological_geology_tectonics",
    "discipline": "EARTH",
    "name": "Climatological Geology & Tectonics",
    "baseWeight": 4,
    "keywords": [
      "climatological",
      "geology",
      "tectonics"
    ]
  },
  {
    "id": "oceanographic_geology_tectonics",
    "discipline": "EARTH",
    "name": "Oceanographic Geology & Tectonics",
    "baseWeight": 4,
    "keywords": [
      "oceanographic",
      "geology",
      "tectonics"
    ]
  },
  {
    "id": "hydrological_geology_tectonics",
    "discipline": "EARTH",
    "name": "Hydrological Geology & Tectonics",
    "baseWeight": 4,
    "keywords": [
      "hydrological",
      "geology",
      "tectonics"
    ]
  },
  {
    "id": "seismological_geology_tectonics",
    "discipline": "EARTH",
    "name": "Seismological Geology & Tectonics",
    "baseWeight": 4,
    "keywords": [
      "seismological",
      "geology",
      "tectonics"
    ]
  },
  {
    "id": "volcanological_geology_tectonics",
    "discipline": "EARTH",
    "name": "Volcanological Geology & Tectonics",
    "baseWeight": 4,
    "keywords": [
      "volcanological",
      "geology",
      "tectonics"
    ]
  },
  {
    "id": "glaciological_geology_tectonics",
    "discipline": "EARTH",
    "name": "Glaciological Geology & Tectonics",
    "baseWeight": 4,
    "keywords": [
      "glaciological",
      "geology",
      "tectonics"
    ]
  },
  {
    "id": "paleontological_geology_tectonics",
    "discipline": "EARTH",
    "name": "Paleontological Geology & Tectonics",
    "baseWeight": 4,
    "keywords": [
      "paleontological",
      "geology",
      "tectonics"
    ]
  },
  {
    "id": "geophysical_geology_tectonics",
    "discipline": "EARTH",
    "name": "Geophysical Geology & Tectonics",
    "baseWeight": 4,
    "keywords": [
      "geophysical",
      "geology",
      "tectonics"
    ]
  },
  {
    "id": "geochemical_geology_tectonics",
    "discipline": "EARTH",
    "name": "Geochemical Geology & Tectonics",
    "baseWeight": 4,
    "keywords": [
      "geochemical",
      "geology",
      "tectonics"
    ]
  },
  {
    "id": "mineralogical_geology_tectonics",
    "discipline": "EARTH",
    "name": "Mineralogical Geology & Tectonics",
    "baseWeight": 4,
    "keywords": [
      "mineralogical",
      "geology",
      "tectonics"
    ]
  },
  {
    "id": "stratigraphic_geology_tectonics",
    "discipline": "EARTH",
    "name": "Stratigraphic Geology & Tectonics",
    "baseWeight": 4,
    "keywords": [
      "stratigraphic",
      "geology",
      "tectonics"
    ]
  },
  {
    "id": "pedological_geology_tectonics",
    "discipline": "EARTH",
    "name": "Pedological Geology & Tectonics",
    "baseWeight": 2,
    "keywords": [
      "pedological",
      "geology",
      "tectonics"
    ]
  },
  {
    "id": "planetary_geology_tectonics",
    "discipline": "EARTH",
    "name": "Planetary Geology & Tectonics",
    "baseWeight": 4,
    "keywords": [
      "planetary",
      "geology",
      "tectonics"
    ]
  },
  {
    "id": "atmospheric_geology_tectonics",
    "discipline": "EARTH",
    "name": "Atmospheric Geology & Tectonics",
    "baseWeight": 4,
    "keywords": [
      "atmospheric",
      "geology",
      "tectonics"
    ]
  },
  {
    "id": "environmental_geology_tectonics",
    "discipline": "EARTH",
    "name": "Environmental Geology & Tectonics",
    "baseWeight": 4,
    "keywords": [
      "environmental",
      "geology",
      "tectonics"
    ]
  },
  {
    "id": "biogeochemical_geology_tectonics",
    "discipline": "EARTH",
    "name": "Biogeochemical Geology & Tectonics",
    "baseWeight": 4,
    "keywords": [
      "biogeochemical",
      "geology",
      "tectonics"
    ]
  },
  {
    "id": "sedimentary_geology_tectonics",
    "discipline": "EARTH",
    "name": "Sedimentary Geology & Tectonics",
    "baseWeight": 4,
    "keywords": [
      "sedimentary",
      "geology",
      "tectonics"
    ]
  },
  {
    "id": "tectonic_geology_tectonics",
    "discipline": "EARTH",
    "name": "Tectonic Geology & Tectonics",
    "baseWeight": 4,
    "keywords": [
      "tectonic",
      "geology",
      "tectonics"
    ]
  },
  {
    "id": "geomorphological_geology_tectonics",
    "discipline": "EARTH",
    "name": "Geomorphological Geology & Tectonics",
    "baseWeight": 4,
    "keywords": [
      "geomorphological",
      "geology",
      "tectonics"
    ]
  },
  {
    "id": "geodetic_geology_tectonics",
    "discipline": "EARTH",
    "name": "Geodetic Geology & Tectonics",
    "baseWeight": 4,
    "keywords": [
      "geodetic",
      "geology",
      "tectonics"
    ]
  },
  {
    "id": "marine_geology_tectonics",
    "discipline": "EARTH",
    "name": "Marine Geology & Tectonics",
    "baseWeight": 4,
    "keywords": [
      "marine",
      "geology",
      "tectonics"
    ]
  },
  {
    "id": "deep_earth_geology_tectonics",
    "discipline": "EARTH",
    "name": "Deep-Earth Geology & Tectonics",
    "baseWeight": 4,
    "keywords": [
      "deep",
      "earth",
      "geology",
      "tectonics"
    ]
  },
  {
    "id": "surface_geology_tectonics",
    "discipline": "EARTH",
    "name": "Surface Geology & Tectonics",
    "baseWeight": 4,
    "keywords": [
      "surface",
      "geology",
      "tectonics"
    ]
  },
  {
    "id": "geological_meteorology_climatology",
    "discipline": "EARTH",
    "name": "Geological Meteorology & Climatology",
    "baseWeight": 5,
    "keywords": [
      "geological",
      "meteorology",
      "climatology"
    ]
  },
  {
    "id": "meteorological_meteorology_climatology",
    "discipline": "EARTH",
    "name": "Meteorological Meteorology & Climatology",
    "baseWeight": 5,
    "keywords": [
      "meteorological",
      "meteorology",
      "climatology"
    ]
  },
  {
    "id": "climatological_meteorology_climatology",
    "discipline": "EARTH",
    "name": "Climatological Meteorology & Climatology",
    "baseWeight": 5,
    "keywords": [
      "climatological",
      "meteorology",
      "climatology"
    ]
  },
  {
    "id": "oceanographic_meteorology_climatology",
    "discipline": "EARTH",
    "name": "Oceanographic Meteorology & Climatology",
    "baseWeight": 5,
    "keywords": [
      "oceanographic",
      "meteorology",
      "climatology"
    ]
  },
  {
    "id": "hydrological_meteorology_climatology",
    "discipline": "EARTH",
    "name": "Hydrological Meteorology & Climatology",
    "baseWeight": 5,
    "keywords": [
      "hydrological",
      "meteorology",
      "climatology"
    ]
  },
  {
    "id": "seismological_meteorology_climatology",
    "discipline": "EARTH",
    "name": "Seismological Meteorology & Climatology",
    "baseWeight": 5,
    "keywords": [
      "seismological",
      "meteorology",
      "climatology"
    ]
  },
  {
    "id": "volcanological_meteorology_climatology",
    "discipline": "EARTH",
    "name": "Volcanological Meteorology & Climatology",
    "baseWeight": 5,
    "keywords": [
      "volcanological",
      "meteorology",
      "climatology"
    ]
  },
  {
    "id": "glaciological_meteorology_climatology",
    "discipline": "EARTH",
    "name": "Glaciological Meteorology & Climatology",
    "baseWeight": 5,
    "keywords": [
      "glaciological",
      "meteorology",
      "climatology"
    ]
  },
  {
    "id": "paleontological_meteorology_climatology",
    "discipline": "EARTH",
    "name": "Paleontological Meteorology & Climatology",
    "baseWeight": 5,
    "keywords": [
      "paleontological",
      "meteorology",
      "climatology"
    ]
  },
  {
    "id": "geophysical_meteorology_climatology",
    "discipline": "EARTH",
    "name": "Geophysical Meteorology & Climatology",
    "baseWeight": 5,
    "keywords": [
      "geophysical",
      "meteorology",
      "climatology"
    ]
  },
  {
    "id": "geochemical_meteorology_climatology",
    "discipline": "EARTH",
    "name": "Geochemical Meteorology & Climatology",
    "baseWeight": 5,
    "keywords": [
      "geochemical",
      "meteorology",
      "climatology"
    ]
  },
  {
    "id": "mineralogical_meteorology_climatology",
    "discipline": "EARTH",
    "name": "Mineralogical Meteorology & Climatology",
    "baseWeight": 5,
    "keywords": [
      "mineralogical",
      "meteorology",
      "climatology"
    ]
  },
  {
    "id": "stratigraphic_meteorology_climatology",
    "discipline": "EARTH",
    "name": "Stratigraphic Meteorology & Climatology",
    "baseWeight": 5,
    "keywords": [
      "stratigraphic",
      "meteorology",
      "climatology"
    ]
  },
  {
    "id": "pedological_meteorology_climatology",
    "discipline": "EARTH",
    "name": "Pedological Meteorology & Climatology",
    "baseWeight": 3,
    "keywords": [
      "pedological",
      "meteorology",
      "climatology"
    ]
  },
  {
    "id": "planetary_meteorology_climatology",
    "discipline": "EARTH",
    "name": "Planetary Meteorology & Climatology",
    "baseWeight": 5,
    "keywords": [
      "planetary",
      "meteorology",
      "climatology"
    ]
  },
  {
    "id": "atmospheric_meteorology_climatology",
    "discipline": "EARTH",
    "name": "Atmospheric Meteorology & Climatology",
    "baseWeight": 5,
    "keywords": [
      "atmospheric",
      "meteorology",
      "climatology"
    ]
  },
  {
    "id": "environmental_meteorology_climatology",
    "discipline": "EARTH",
    "name": "Environmental Meteorology & Climatology",
    "baseWeight": 5,
    "keywords": [
      "environmental",
      "meteorology",
      "climatology"
    ]
  },
  {
    "id": "biogeochemical_meteorology_climatology",
    "discipline": "EARTH",
    "name": "Biogeochemical Meteorology & Climatology",
    "baseWeight": 5,
    "keywords": [
      "biogeochemical",
      "meteorology",
      "climatology"
    ]
  },
  {
    "id": "sedimentary_meteorology_climatology",
    "discipline": "EARTH",
    "name": "Sedimentary Meteorology & Climatology",
    "baseWeight": 5,
    "keywords": [
      "sedimentary",
      "meteorology",
      "climatology"
    ]
  },
  {
    "id": "tectonic_meteorology_climatology",
    "discipline": "EARTH",
    "name": "Tectonic Meteorology & Climatology",
    "baseWeight": 5,
    "keywords": [
      "tectonic",
      "meteorology",
      "climatology"
    ]
  },
  {
    "id": "geomorphological_meteorology_climatology",
    "discipline": "EARTH",
    "name": "Geomorphological Meteorology & Climatology",
    "baseWeight": 5,
    "keywords": [
      "geomorphological",
      "meteorology",
      "climatology"
    ]
  },
  {
    "id": "geodetic_meteorology_climatology",
    "discipline": "EARTH",
    "name": "Geodetic Meteorology & Climatology",
    "baseWeight": 5,
    "keywords": [
      "geodetic",
      "meteorology",
      "climatology"
    ]
  },
  {
    "id": "marine_meteorology_climatology",
    "discipline": "EARTH",
    "name": "Marine Meteorology & Climatology",
    "baseWeight": 5,
    "keywords": [
      "marine",
      "meteorology",
      "climatology"
    ]
  },
  {
    "id": "deep_earth_meteorology_climatology",
    "discipline": "EARTH",
    "name": "Deep-Earth Meteorology & Climatology",
    "baseWeight": 5,
    "keywords": [
      "deep",
      "earth",
      "meteorology",
      "climatology"
    ]
  },
  {
    "id": "surface_meteorology_climatology",
    "discipline": "EARTH",
    "name": "Surface Meteorology & Climatology",
    "baseWeight": 5,
    "keywords": [
      "surface",
      "meteorology",
      "climatology"
    ]
  },
  {
    "id": "geological_oceanography_marine_science",
    "discipline": "EARTH",
    "name": "Geological Oceanography & Marine Science",
    "baseWeight": 6,
    "keywords": [
      "geological",
      "oceanography",
      "marine",
      "science"
    ]
  },
  {
    "id": "meteorological_oceanography_marine_science",
    "discipline": "EARTH",
    "name": "Meteorological Oceanography & Marine Science",
    "baseWeight": 6,
    "keywords": [
      "meteorological",
      "oceanography",
      "marine",
      "science"
    ]
  },
  {
    "id": "climatological_oceanography_marine_science",
    "discipline": "EARTH",
    "name": "Climatological Oceanography & Marine Science",
    "baseWeight": 6,
    "keywords": [
      "climatological",
      "oceanography",
      "marine",
      "science"
    ]
  },
  {
    "id": "oceanographic_oceanography_marine_science",
    "discipline": "EARTH",
    "name": "Oceanographic Oceanography & Marine Science",
    "baseWeight": 6,
    "keywords": [
      "oceanographic",
      "oceanography",
      "marine",
      "science"
    ]
  },
  {
    "id": "hydrological_oceanography_marine_science",
    "discipline": "EARTH",
    "name": "Hydrological Oceanography & Marine Science",
    "baseWeight": 6,
    "keywords": [
      "hydrological",
      "oceanography",
      "marine",
      "science"
    ]
  },
  {
    "id": "seismological_oceanography_marine_science",
    "discipline": "EARTH",
    "name": "Seismological Oceanography & Marine Science",
    "baseWeight": 6,
    "keywords": [
      "seismological",
      "oceanography",
      "marine",
      "science"
    ]
  },
  {
    "id": "volcanological_oceanography_marine_science",
    "discipline": "EARTH",
    "name": "Volcanological Oceanography & Marine Science",
    "baseWeight": 6,
    "keywords": [
      "volcanological",
      "oceanography",
      "marine",
      "science"
    ]
  },
  {
    "id": "glaciological_oceanography_marine_science",
    "discipline": "EARTH",
    "name": "Glaciological Oceanography & Marine Science",
    "baseWeight": 6,
    "keywords": [
      "glaciological",
      "oceanography",
      "marine",
      "science"
    ]
  },
  {
    "id": "paleontological_oceanography_marine_science",
    "discipline": "EARTH",
    "name": "Paleontological Oceanography & Marine Science",
    "baseWeight": 6,
    "keywords": [
      "paleontological",
      "oceanography",
      "marine",
      "science"
    ]
  },
  {
    "id": "geophysical_oceanography_marine_science",
    "discipline": "EARTH",
    "name": "Geophysical Oceanography & Marine Science",
    "baseWeight": 6,
    "keywords": [
      "geophysical",
      "oceanography",
      "marine",
      "science"
    ]
  },
  {
    "id": "geochemical_oceanography_marine_science",
    "discipline": "EARTH",
    "name": "Geochemical Oceanography & Marine Science",
    "baseWeight": 6,
    "keywords": [
      "geochemical",
      "oceanography",
      "marine",
      "science"
    ]
  },
  {
    "id": "mineralogical_oceanography_marine_science",
    "discipline": "EARTH",
    "name": "Mineralogical Oceanography & Marine Science",
    "baseWeight": 6,
    "keywords": [
      "mineralogical",
      "oceanography",
      "marine",
      "science"
    ]
  },
  {
    "id": "stratigraphic_oceanography_marine_science",
    "discipline": "EARTH",
    "name": "Stratigraphic Oceanography & Marine Science",
    "baseWeight": 6,
    "keywords": [
      "stratigraphic",
      "oceanography",
      "marine",
      "science"
    ]
  },
  {
    "id": "pedological_oceanography_marine_science",
    "discipline": "EARTH",
    "name": "Pedological Oceanography & Marine Science",
    "baseWeight": 4,
    "keywords": [
      "pedological",
      "oceanography",
      "marine",
      "science"
    ]
  },
  {
    "id": "planetary_oceanography_marine_science",
    "discipline": "EARTH",
    "name": "Planetary Oceanography & Marine Science",
    "baseWeight": 6,
    "keywords": [
      "planetary",
      "oceanography",
      "marine",
      "science"
    ]
  },
  {
    "id": "atmospheric_oceanography_marine_science",
    "discipline": "EARTH",
    "name": "Atmospheric Oceanography & Marine Science",
    "baseWeight": 6,
    "keywords": [
      "atmospheric",
      "oceanography",
      "marine",
      "science"
    ]
  },
  {
    "id": "environmental_oceanography_marine_science",
    "discipline": "EARTH",
    "name": "Environmental Oceanography & Marine Science",
    "baseWeight": 6,
    "keywords": [
      "environmental",
      "oceanography",
      "marine",
      "science"
    ]
  },
  {
    "id": "biogeochemical_oceanography_marine_science",
    "discipline": "EARTH",
    "name": "Biogeochemical Oceanography & Marine Science",
    "baseWeight": 6,
    "keywords": [
      "biogeochemical",
      "oceanography",
      "marine",
      "science"
    ]
  },
  {
    "id": "sedimentary_oceanography_marine_science",
    "discipline": "EARTH",
    "name": "Sedimentary Oceanography & Marine Science",
    "baseWeight": 6,
    "keywords": [
      "sedimentary",
      "oceanography",
      "marine",
      "science"
    ]
  },
  {
    "id": "tectonic_oceanography_marine_science",
    "discipline": "EARTH",
    "name": "Tectonic Oceanography & Marine Science",
    "baseWeight": 6,
    "keywords": [
      "tectonic",
      "oceanography",
      "marine",
      "science"
    ]
  },
  {
    "id": "geomorphological_oceanography_marine_science",
    "discipline": "EARTH",
    "name": "Geomorphological Oceanography & Marine Science",
    "baseWeight": 6,
    "keywords": [
      "geomorphological",
      "oceanography",
      "marine",
      "science"
    ]
  },
  {
    "id": "geodetic_oceanography_marine_science",
    "discipline": "EARTH",
    "name": "Geodetic Oceanography & Marine Science",
    "baseWeight": 6,
    "keywords": [
      "geodetic",
      "oceanography",
      "marine",
      "science"
    ]
  },
  {
    "id": "marine_oceanography_science",
    "discipline": "EARTH",
    "name": "Marine Oceanography & Science",
    "baseWeight": 6,
    "keywords": [
      "marine",
      "oceanography",
      "science"
    ]
  },
  {
    "id": "deep_earth_oceanography_marine_science",
    "discipline": "EARTH",
    "name": "Deep-Earth Oceanography & Marine Science",
    "baseWeight": 6,
    "keywords": [
      "deep",
      "earth",
      "oceanography",
      "marine",
      "science"
    ]
  },
  {
    "id": "surface_oceanography_marine_science",
    "discipline": "EARTH",
    "name": "Surface Oceanography & Marine Science",
    "baseWeight": 6,
    "keywords": [
      "surface",
      "oceanography",
      "marine",
      "science"
    ]
  },
  {
    "id": "geological_seismology_volcanology",
    "discipline": "EARTH",
    "name": "Geological Seismology & Volcanology",
    "baseWeight": 4,
    "keywords": [
      "geological",
      "seismology",
      "volcanology"
    ]
  },
  {
    "id": "meteorological_seismology_volcanology",
    "discipline": "EARTH",
    "name": "Meteorological Seismology & Volcanology",
    "baseWeight": 4,
    "keywords": [
      "meteorological",
      "seismology",
      "volcanology"
    ]
  },
  {
    "id": "climatological_seismology_volcanology",
    "discipline": "EARTH",
    "name": "Climatological Seismology & Volcanology",
    "baseWeight": 4,
    "keywords": [
      "climatological",
      "seismology",
      "volcanology"
    ]
  },
  {
    "id": "oceanographic_seismology_volcanology",
    "discipline": "EARTH",
    "name": "Oceanographic Seismology & Volcanology",
    "baseWeight": 4,
    "keywords": [
      "oceanographic",
      "seismology",
      "volcanology"
    ]
  },
  {
    "id": "hydrological_seismology_volcanology",
    "discipline": "EARTH",
    "name": "Hydrological Seismology & Volcanology",
    "baseWeight": 4,
    "keywords": [
      "hydrological",
      "seismology",
      "volcanology"
    ]
  },
  {
    "id": "seismological_seismology_volcanology",
    "discipline": "EARTH",
    "name": "Seismological Seismology & Volcanology",
    "baseWeight": 4,
    "keywords": [
      "seismological",
      "seismology",
      "volcanology"
    ]
  },
  {
    "id": "volcanological_seismology_volcanology",
    "discipline": "EARTH",
    "name": "Volcanological Seismology & Volcanology",
    "baseWeight": 4,
    "keywords": [
      "volcanological",
      "seismology",
      "volcanology"
    ]
  },
  {
    "id": "glaciological_seismology_volcanology",
    "discipline": "EARTH",
    "name": "Glaciological Seismology & Volcanology",
    "baseWeight": 4,
    "keywords": [
      "glaciological",
      "seismology",
      "volcanology"
    ]
  },
  {
    "id": "paleontological_seismology_volcanology",
    "discipline": "EARTH",
    "name": "Paleontological Seismology & Volcanology",
    "baseWeight": 4,
    "keywords": [
      "paleontological",
      "seismology",
      "volcanology"
    ]
  },
  {
    "id": "geophysical_seismology_volcanology",
    "discipline": "EARTH",
    "name": "Geophysical Seismology & Volcanology",
    "baseWeight": 4,
    "keywords": [
      "geophysical",
      "seismology",
      "volcanology"
    ]
  },
  {
    "id": "geochemical_seismology_volcanology",
    "discipline": "EARTH",
    "name": "Geochemical Seismology & Volcanology",
    "baseWeight": 4,
    "keywords": [
      "geochemical",
      "seismology",
      "volcanology"
    ]
  },
  {
    "id": "mineralogical_seismology_volcanology",
    "discipline": "EARTH",
    "name": "Mineralogical Seismology & Volcanology",
    "baseWeight": 4,
    "keywords": [
      "mineralogical",
      "seismology",
      "volcanology"
    ]
  },
  {
    "id": "stratigraphic_seismology_volcanology",
    "discipline": "EARTH",
    "name": "Stratigraphic Seismology & Volcanology",
    "baseWeight": 4,
    "keywords": [
      "stratigraphic",
      "seismology",
      "volcanology"
    ]
  },
  {
    "id": "pedological_seismology_volcanology",
    "discipline": "EARTH",
    "name": "Pedological Seismology & Volcanology",
    "baseWeight": 2,
    "keywords": [
      "pedological",
      "seismology",
      "volcanology"
    ]
  },
  {
    "id": "planetary_seismology_volcanology",
    "discipline": "EARTH",
    "name": "Planetary Seismology & Volcanology",
    "baseWeight": 4,
    "keywords": [
      "planetary",
      "seismology",
      "volcanology"
    ]
  },
  {
    "id": "atmospheric_seismology_volcanology",
    "discipline": "EARTH",
    "name": "Atmospheric Seismology & Volcanology",
    "baseWeight": 4,
    "keywords": [
      "atmospheric",
      "seismology",
      "volcanology"
    ]
  },
  {
    "id": "environmental_seismology_volcanology",
    "discipline": "EARTH",
    "name": "Environmental Seismology & Volcanology",
    "baseWeight": 4,
    "keywords": [
      "environmental",
      "seismology",
      "volcanology"
    ]
  },
  {
    "id": "biogeochemical_seismology_volcanology",
    "discipline": "EARTH",
    "name": "Biogeochemical Seismology & Volcanology",
    "baseWeight": 4,
    "keywords": [
      "biogeochemical",
      "seismology",
      "volcanology"
    ]
  },
  {
    "id": "sedimentary_seismology_volcanology",
    "discipline": "EARTH",
    "name": "Sedimentary Seismology & Volcanology",
    "baseWeight": 4,
    "keywords": [
      "sedimentary",
      "seismology",
      "volcanology"
    ]
  },
  {
    "id": "tectonic_seismology_volcanology",
    "discipline": "EARTH",
    "name": "Tectonic Seismology & Volcanology",
    "baseWeight": 4,
    "keywords": [
      "tectonic",
      "seismology",
      "volcanology"
    ]
  },
  {
    "id": "geomorphological_seismology_volcanology",
    "discipline": "EARTH",
    "name": "Geomorphological Seismology & Volcanology",
    "baseWeight": 4,
    "keywords": [
      "geomorphological",
      "seismology",
      "volcanology"
    ]
  },
  {
    "id": "geodetic_seismology_volcanology",
    "discipline": "EARTH",
    "name": "Geodetic Seismology & Volcanology",
    "baseWeight": 4,
    "keywords": [
      "geodetic",
      "seismology",
      "volcanology"
    ]
  },
  {
    "id": "marine_seismology_volcanology",
    "discipline": "EARTH",
    "name": "Marine Seismology & Volcanology",
    "baseWeight": 4,
    "keywords": [
      "marine",
      "seismology",
      "volcanology"
    ]
  },
  {
    "id": "deep_earth_seismology_volcanology",
    "discipline": "EARTH",
    "name": "Deep-Earth Seismology & Volcanology",
    "baseWeight": 4,
    "keywords": [
      "deep",
      "earth",
      "seismology",
      "volcanology"
    ]
  },
  {
    "id": "surface_seismology_volcanology",
    "discipline": "EARTH",
    "name": "Surface Seismology & Volcanology",
    "baseWeight": 4,
    "keywords": [
      "surface",
      "seismology",
      "volcanology"
    ]
  },
  {
    "id": "geological_hydrology_glaciology",
    "discipline": "EARTH",
    "name": "Geological Hydrology & Glaciology",
    "baseWeight": 5,
    "keywords": [
      "geological",
      "hydrology",
      "glaciology"
    ]
  },
  {
    "id": "meteorological_hydrology_glaciology",
    "discipline": "EARTH",
    "name": "Meteorological Hydrology & Glaciology",
    "baseWeight": 5,
    "keywords": [
      "meteorological",
      "hydrology",
      "glaciology"
    ]
  },
  {
    "id": "climatological_hydrology_glaciology",
    "discipline": "EARTH",
    "name": "Climatological Hydrology & Glaciology",
    "baseWeight": 5,
    "keywords": [
      "climatological",
      "hydrology",
      "glaciology"
    ]
  },
  {
    "id": "oceanographic_hydrology_glaciology",
    "discipline": "EARTH",
    "name": "Oceanographic Hydrology & Glaciology",
    "baseWeight": 5,
    "keywords": [
      "oceanographic",
      "hydrology",
      "glaciology"
    ]
  },
  {
    "id": "hydrological_hydrology_glaciology",
    "discipline": "EARTH",
    "name": "Hydrological Hydrology & Glaciology",
    "baseWeight": 5,
    "keywords": [
      "hydrological",
      "hydrology",
      "glaciology"
    ]
  },
  {
    "id": "seismological_hydrology_glaciology",
    "discipline": "EARTH",
    "name": "Seismological Hydrology & Glaciology",
    "baseWeight": 5,
    "keywords": [
      "seismological",
      "hydrology",
      "glaciology"
    ]
  },
  {
    "id": "volcanological_hydrology_glaciology",
    "discipline": "EARTH",
    "name": "Volcanological Hydrology & Glaciology",
    "baseWeight": 5,
    "keywords": [
      "volcanological",
      "hydrology",
      "glaciology"
    ]
  },
  {
    "id": "glaciological_hydrology_glaciology",
    "discipline": "EARTH",
    "name": "Glaciological Hydrology & Glaciology",
    "baseWeight": 5,
    "keywords": [
      "glaciological",
      "hydrology",
      "glaciology"
    ]
  },
  {
    "id": "paleontological_hydrology_glaciology",
    "discipline": "EARTH",
    "name": "Paleontological Hydrology & Glaciology",
    "baseWeight": 5,
    "keywords": [
      "paleontological",
      "hydrology",
      "glaciology"
    ]
  },
  {
    "id": "geophysical_hydrology_glaciology",
    "discipline": "EARTH",
    "name": "Geophysical Hydrology & Glaciology",
    "baseWeight": 5,
    "keywords": [
      "geophysical",
      "hydrology",
      "glaciology"
    ]
  },
  {
    "id": "geochemical_hydrology_glaciology",
    "discipline": "EARTH",
    "name": "Geochemical Hydrology & Glaciology",
    "baseWeight": 5,
    "keywords": [
      "geochemical",
      "hydrology",
      "glaciology"
    ]
  },
  {
    "id": "mineralogical_hydrology_glaciology",
    "discipline": "EARTH",
    "name": "Mineralogical Hydrology & Glaciology",
    "baseWeight": 5,
    "keywords": [
      "mineralogical",
      "hydrology",
      "glaciology"
    ]
  },
  {
    "id": "stratigraphic_hydrology_glaciology",
    "discipline": "EARTH",
    "name": "Stratigraphic Hydrology & Glaciology",
    "baseWeight": 5,
    "keywords": [
      "stratigraphic",
      "hydrology",
      "glaciology"
    ]
  },
  {
    "id": "pedological_hydrology_glaciology",
    "discipline": "EARTH",
    "name": "Pedological Hydrology & Glaciology",
    "baseWeight": 3,
    "keywords": [
      "pedological",
      "hydrology",
      "glaciology"
    ]
  },
  {
    "id": "planetary_hydrology_glaciology",
    "discipline": "EARTH",
    "name": "Planetary Hydrology & Glaciology",
    "baseWeight": 5,
    "keywords": [
      "planetary",
      "hydrology",
      "glaciology"
    ]
  },
  {
    "id": "atmospheric_hydrology_glaciology",
    "discipline": "EARTH",
    "name": "Atmospheric Hydrology & Glaciology",
    "baseWeight": 5,
    "keywords": [
      "atmospheric",
      "hydrology",
      "glaciology"
    ]
  },
  {
    "id": "environmental_hydrology_glaciology",
    "discipline": "EARTH",
    "name": "Environmental Hydrology & Glaciology",
    "baseWeight": 5,
    "keywords": [
      "environmental",
      "hydrology",
      "glaciology"
    ]
  },
  {
    "id": "biogeochemical_hydrology_glaciology",
    "discipline": "EARTH",
    "name": "Biogeochemical Hydrology & Glaciology",
    "baseWeight": 5,
    "keywords": [
      "biogeochemical",
      "hydrology",
      "glaciology"
    ]
  },
  {
    "id": "sedimentary_hydrology_glaciology",
    "discipline": "EARTH",
    "name": "Sedimentary Hydrology & Glaciology",
    "baseWeight": 5,
    "keywords": [
      "sedimentary",
      "hydrology",
      "glaciology"
    ]
  },
  {
    "id": "tectonic_hydrology_glaciology",
    "discipline": "EARTH",
    "name": "Tectonic Hydrology & Glaciology",
    "baseWeight": 5,
    "keywords": [
      "tectonic",
      "hydrology",
      "glaciology"
    ]
  },
  {
    "id": "geomorphological_hydrology_glaciology",
    "discipline": "EARTH",
    "name": "Geomorphological Hydrology & Glaciology",
    "baseWeight": 5,
    "keywords": [
      "geomorphological",
      "hydrology",
      "glaciology"
    ]
  },
  {
    "id": "geodetic_hydrology_glaciology",
    "discipline": "EARTH",
    "name": "Geodetic Hydrology & Glaciology",
    "baseWeight": 5,
    "keywords": [
      "geodetic",
      "hydrology",
      "glaciology"
    ]
  },
  {
    "id": "marine_hydrology_glaciology",
    "discipline": "EARTH",
    "name": "Marine Hydrology & Glaciology",
    "baseWeight": 5,
    "keywords": [
      "marine",
      "hydrology",
      "glaciology"
    ]
  },
  {
    "id": "deep_earth_hydrology_glaciology",
    "discipline": "EARTH",
    "name": "Deep-Earth Hydrology & Glaciology",
    "baseWeight": 5,
    "keywords": [
      "deep",
      "earth",
      "hydrology",
      "glaciology"
    ]
  },
  {
    "id": "surface_hydrology_glaciology",
    "discipline": "EARTH",
    "name": "Surface Hydrology & Glaciology",
    "baseWeight": 5,
    "keywords": [
      "surface",
      "hydrology",
      "glaciology"
    ]
  },
  {
    "id": "geological_paleontology_stratigraphy",
    "discipline": "EARTH",
    "name": "Geological Paleontology & Stratigraphy",
    "baseWeight": 6,
    "keywords": [
      "geological",
      "paleontology",
      "stratigraphy"
    ]
  },
  {
    "id": "meteorological_paleontology_stratigraphy",
    "discipline": "EARTH",
    "name": "Meteorological Paleontology & Stratigraphy",
    "baseWeight": 6,
    "keywords": [
      "meteorological",
      "paleontology",
      "stratigraphy"
    ]
  },
  {
    "id": "climatological_paleontology_stratigraphy",
    "discipline": "EARTH",
    "name": "Climatological Paleontology & Stratigraphy",
    "baseWeight": 6,
    "keywords": [
      "climatological",
      "paleontology",
      "stratigraphy"
    ]
  },
  {
    "id": "oceanographic_paleontology_stratigraphy",
    "discipline": "EARTH",
    "name": "Oceanographic Paleontology & Stratigraphy",
    "baseWeight": 6,
    "keywords": [
      "oceanographic",
      "paleontology",
      "stratigraphy"
    ]
  },
  {
    "id": "hydrological_paleontology_stratigraphy",
    "discipline": "EARTH",
    "name": "Hydrological Paleontology & Stratigraphy",
    "baseWeight": 6,
    "keywords": [
      "hydrological",
      "paleontology",
      "stratigraphy"
    ]
  },
  {
    "id": "seismological_paleontology_stratigraphy",
    "discipline": "EARTH",
    "name": "Seismological Paleontology & Stratigraphy",
    "baseWeight": 6,
    "keywords": [
      "seismological",
      "paleontology",
      "stratigraphy"
    ]
  },
  {
    "id": "volcanological_paleontology_stratigraphy",
    "discipline": "EARTH",
    "name": "Volcanological Paleontology & Stratigraphy",
    "baseWeight": 6,
    "keywords": [
      "volcanological",
      "paleontology",
      "stratigraphy"
    ]
  },
  {
    "id": "glaciological_paleontology_stratigraphy",
    "discipline": "EARTH",
    "name": "Glaciological Paleontology & Stratigraphy",
    "baseWeight": 6,
    "keywords": [
      "glaciological",
      "paleontology",
      "stratigraphy"
    ]
  },
  {
    "id": "paleontological_paleontology_stratigraphy",
    "discipline": "EARTH",
    "name": "Paleontological Paleontology & Stratigraphy",
    "baseWeight": 6,
    "keywords": [
      "paleontological",
      "paleontology",
      "stratigraphy"
    ]
  },
  {
    "id": "geophysical_paleontology_stratigraphy",
    "discipline": "EARTH",
    "name": "Geophysical Paleontology & Stratigraphy",
    "baseWeight": 6,
    "keywords": [
      "geophysical",
      "paleontology",
      "stratigraphy"
    ]
  },
  {
    "id": "geochemical_paleontology_stratigraphy",
    "discipline": "EARTH",
    "name": "Geochemical Paleontology & Stratigraphy",
    "baseWeight": 6,
    "keywords": [
      "geochemical",
      "paleontology",
      "stratigraphy"
    ]
  },
  {
    "id": "mineralogical_paleontology_stratigraphy",
    "discipline": "EARTH",
    "name": "Mineralogical Paleontology & Stratigraphy",
    "baseWeight": 6,
    "keywords": [
      "mineralogical",
      "paleontology",
      "stratigraphy"
    ]
  },
  {
    "id": "stratigraphic_paleontology_stratigraphy",
    "discipline": "EARTH",
    "name": "Stratigraphic Paleontology & Stratigraphy",
    "baseWeight": 6,
    "keywords": [
      "stratigraphic",
      "paleontology",
      "stratigraphy"
    ]
  },
  {
    "id": "pedological_paleontology_stratigraphy",
    "discipline": "EARTH",
    "name": "Pedological Paleontology & Stratigraphy",
    "baseWeight": 4,
    "keywords": [
      "pedological",
      "paleontology",
      "stratigraphy"
    ]
  },
  {
    "id": "planetary_paleontology_stratigraphy",
    "discipline": "EARTH",
    "name": "Planetary Paleontology & Stratigraphy",
    "baseWeight": 6,
    "keywords": [
      "planetary",
      "paleontology",
      "stratigraphy"
    ]
  },
  {
    "id": "atmospheric_paleontology_stratigraphy",
    "discipline": "EARTH",
    "name": "Atmospheric Paleontology & Stratigraphy",
    "baseWeight": 6,
    "keywords": [
      "atmospheric",
      "paleontology",
      "stratigraphy"
    ]
  },
  {
    "id": "environmental_paleontology_stratigraphy",
    "discipline": "EARTH",
    "name": "Environmental Paleontology & Stratigraphy",
    "baseWeight": 6,
    "keywords": [
      "environmental",
      "paleontology",
      "stratigraphy"
    ]
  },
  {
    "id": "biogeochemical_paleontology_stratigraphy",
    "discipline": "EARTH",
    "name": "Biogeochemical Paleontology & Stratigraphy",
    "baseWeight": 6,
    "keywords": [
      "biogeochemical",
      "paleontology",
      "stratigraphy"
    ]
  },
  {
    "id": "sedimentary_paleontology_stratigraphy",
    "discipline": "EARTH",
    "name": "Sedimentary Paleontology & Stratigraphy",
    "baseWeight": 6,
    "keywords": [
      "sedimentary",
      "paleontology",
      "stratigraphy"
    ]
  },
  {
    "id": "tectonic_paleontology_stratigraphy",
    "discipline": "EARTH",
    "name": "Tectonic Paleontology & Stratigraphy",
    "baseWeight": 6,
    "keywords": [
      "tectonic",
      "paleontology",
      "stratigraphy"
    ]
  },
  {
    "id": "geomorphological_paleontology_stratigraphy",
    "discipline": "EARTH",
    "name": "Geomorphological Paleontology & Stratigraphy",
    "baseWeight": 6,
    "keywords": [
      "geomorphological",
      "paleontology",
      "stratigraphy"
    ]
  },
  {
    "id": "geodetic_paleontology_stratigraphy",
    "discipline": "EARTH",
    "name": "Geodetic Paleontology & Stratigraphy",
    "baseWeight": 6,
    "keywords": [
      "geodetic",
      "paleontology",
      "stratigraphy"
    ]
  },
  {
    "id": "marine_paleontology_stratigraphy",
    "discipline": "EARTH",
    "name": "Marine Paleontology & Stratigraphy",
    "baseWeight": 6,
    "keywords": [
      "marine",
      "paleontology",
      "stratigraphy"
    ]
  },
  {
    "id": "deep_earth_paleontology_stratigraphy",
    "discipline": "EARTH",
    "name": "Deep-Earth Paleontology & Stratigraphy",
    "baseWeight": 6,
    "keywords": [
      "deep",
      "earth",
      "paleontology",
      "stratigraphy"
    ]
  },
  {
    "id": "surface_paleontology_stratigraphy",
    "discipline": "EARTH",
    "name": "Surface Paleontology & Stratigraphy",
    "baseWeight": 6,
    "keywords": [
      "surface",
      "paleontology",
      "stratigraphy"
    ]
  },
  {
    "id": "geological_geophysics_geodesy",
    "discipline": "EARTH",
    "name": "Geological Geophysics & Geodesy",
    "baseWeight": 4,
    "keywords": [
      "geological",
      "geophysics",
      "geodesy"
    ]
  },
  {
    "id": "meteorological_geophysics_geodesy",
    "discipline": "EARTH",
    "name": "Meteorological Geophysics & Geodesy",
    "baseWeight": 4,
    "keywords": [
      "meteorological",
      "geophysics",
      "geodesy"
    ]
  },
  {
    "id": "climatological_geophysics_geodesy",
    "discipline": "EARTH",
    "name": "Climatological Geophysics & Geodesy",
    "baseWeight": 4,
    "keywords": [
      "climatological",
      "geophysics",
      "geodesy"
    ]
  },
  {
    "id": "oceanographic_geophysics_geodesy",
    "discipline": "EARTH",
    "name": "Oceanographic Geophysics & Geodesy",
    "baseWeight": 4,
    "keywords": [
      "oceanographic",
      "geophysics",
      "geodesy"
    ]
  },
  {
    "id": "hydrological_geophysics_geodesy",
    "discipline": "EARTH",
    "name": "Hydrological Geophysics & Geodesy",
    "baseWeight": 4,
    "keywords": [
      "hydrological",
      "geophysics",
      "geodesy"
    ]
  },
  {
    "id": "seismological_geophysics_geodesy",
    "discipline": "EARTH",
    "name": "Seismological Geophysics & Geodesy",
    "baseWeight": 4,
    "keywords": [
      "seismological",
      "geophysics",
      "geodesy"
    ]
  },
  {
    "id": "volcanological_geophysics_geodesy",
    "discipline": "EARTH",
    "name": "Volcanological Geophysics & Geodesy",
    "baseWeight": 4,
    "keywords": [
      "volcanological",
      "geophysics",
      "geodesy"
    ]
  },
  {
    "id": "glaciological_geophysics_geodesy",
    "discipline": "EARTH",
    "name": "Glaciological Geophysics & Geodesy",
    "baseWeight": 4,
    "keywords": [
      "glaciological",
      "geophysics",
      "geodesy"
    ]
  },
  {
    "id": "paleontological_geophysics_geodesy",
    "discipline": "EARTH",
    "name": "Paleontological Geophysics & Geodesy",
    "baseWeight": 4,
    "keywords": [
      "paleontological",
      "geophysics",
      "geodesy"
    ]
  },
  {
    "id": "geophysical_geophysics_geodesy",
    "discipline": "EARTH",
    "name": "Geophysical Geophysics & Geodesy",
    "baseWeight": 4,
    "keywords": [
      "geophysical",
      "geophysics",
      "geodesy"
    ]
  },
  {
    "id": "geochemical_geophysics_geodesy",
    "discipline": "EARTH",
    "name": "Geochemical Geophysics & Geodesy",
    "baseWeight": 4,
    "keywords": [
      "geochemical",
      "geophysics",
      "geodesy"
    ]
  },
  {
    "id": "mineralogical_geophysics_geodesy",
    "discipline": "EARTH",
    "name": "Mineralogical Geophysics & Geodesy",
    "baseWeight": 4,
    "keywords": [
      "mineralogical",
      "geophysics",
      "geodesy"
    ]
  },
  {
    "id": "stratigraphic_geophysics_geodesy",
    "discipline": "EARTH",
    "name": "Stratigraphic Geophysics & Geodesy",
    "baseWeight": 4,
    "keywords": [
      "stratigraphic",
      "geophysics",
      "geodesy"
    ]
  },
  {
    "id": "pedological_geophysics_geodesy",
    "discipline": "EARTH",
    "name": "Pedological Geophysics & Geodesy",
    "baseWeight": 2,
    "keywords": [
      "pedological",
      "geophysics",
      "geodesy"
    ]
  },
  {
    "id": "planetary_geophysics_geodesy",
    "discipline": "EARTH",
    "name": "Planetary Geophysics & Geodesy",
    "baseWeight": 4,
    "keywords": [
      "planetary",
      "geophysics",
      "geodesy"
    ]
  },
  {
    "id": "atmospheric_geophysics_geodesy",
    "discipline": "EARTH",
    "name": "Atmospheric Geophysics & Geodesy",
    "baseWeight": 4,
    "keywords": [
      "atmospheric",
      "geophysics",
      "geodesy"
    ]
  },
  {
    "id": "environmental_geophysics_geodesy",
    "discipline": "EARTH",
    "name": "Environmental Geophysics & Geodesy",
    "baseWeight": 4,
    "keywords": [
      "environmental",
      "geophysics",
      "geodesy"
    ]
  },
  {
    "id": "biogeochemical_geophysics_geodesy",
    "discipline": "EARTH",
    "name": "Biogeochemical Geophysics & Geodesy",
    "baseWeight": 4,
    "keywords": [
      "biogeochemical",
      "geophysics",
      "geodesy"
    ]
  },
  {
    "id": "sedimentary_geophysics_geodesy",
    "discipline": "EARTH",
    "name": "Sedimentary Geophysics & Geodesy",
    "baseWeight": 4,
    "keywords": [
      "sedimentary",
      "geophysics",
      "geodesy"
    ]
  },
  {
    "id": "tectonic_geophysics_geodesy",
    "discipline": "EARTH",
    "name": "Tectonic Geophysics & Geodesy",
    "baseWeight": 4,
    "keywords": [
      "tectonic",
      "geophysics",
      "geodesy"
    ]
  },
  {
    "id": "geomorphological_geophysics_geodesy",
    "discipline": "EARTH",
    "name": "Geomorphological Geophysics & Geodesy",
    "baseWeight": 4,
    "keywords": [
      "geomorphological",
      "geophysics",
      "geodesy"
    ]
  },
  {
    "id": "geodetic_geophysics_geodesy",
    "discipline": "EARTH",
    "name": "Geodetic Geophysics & Geodesy",
    "baseWeight": 4,
    "keywords": [
      "geodetic",
      "geophysics",
      "geodesy"
    ]
  },
  {
    "id": "marine_geophysics_geodesy",
    "discipline": "EARTH",
    "name": "Marine Geophysics & Geodesy",
    "baseWeight": 4,
    "keywords": [
      "marine",
      "geophysics",
      "geodesy"
    ]
  },
  {
    "id": "deep_earth_geophysics_geodesy",
    "discipline": "EARTH",
    "name": "Deep-Earth Geophysics & Geodesy",
    "baseWeight": 4,
    "keywords": [
      "deep",
      "earth",
      "geophysics",
      "geodesy"
    ]
  },
  {
    "id": "surface_geophysics_geodesy",
    "discipline": "EARTH",
    "name": "Surface Geophysics & Geodesy",
    "baseWeight": 4,
    "keywords": [
      "surface",
      "geophysics",
      "geodesy"
    ]
  },
  {
    "id": "geological_geochemistry_mineralogy",
    "discipline": "EARTH",
    "name": "Geological Geochemistry & Mineralogy",
    "baseWeight": 5,
    "keywords": [
      "geological",
      "geochemistry",
      "mineralogy"
    ]
  },
  {
    "id": "meteorological_geochemistry_mineralogy",
    "discipline": "EARTH",
    "name": "Meteorological Geochemistry & Mineralogy",
    "baseWeight": 5,
    "keywords": [
      "meteorological",
      "geochemistry",
      "mineralogy"
    ]
  },
  {
    "id": "climatological_geochemistry_mineralogy",
    "discipline": "EARTH",
    "name": "Climatological Geochemistry & Mineralogy",
    "baseWeight": 5,
    "keywords": [
      "climatological",
      "geochemistry",
      "mineralogy"
    ]
  },
  {
    "id": "oceanographic_geochemistry_mineralogy",
    "discipline": "EARTH",
    "name": "Oceanographic Geochemistry & Mineralogy",
    "baseWeight": 5,
    "keywords": [
      "oceanographic",
      "geochemistry",
      "mineralogy"
    ]
  },
  {
    "id": "hydrological_geochemistry_mineralogy",
    "discipline": "EARTH",
    "name": "Hydrological Geochemistry & Mineralogy",
    "baseWeight": 5,
    "keywords": [
      "hydrological",
      "geochemistry",
      "mineralogy"
    ]
  },
  {
    "id": "seismological_geochemistry_mineralogy",
    "discipline": "EARTH",
    "name": "Seismological Geochemistry & Mineralogy",
    "baseWeight": 5,
    "keywords": [
      "seismological",
      "geochemistry",
      "mineralogy"
    ]
  },
  {
    "id": "volcanological_geochemistry_mineralogy",
    "discipline": "EARTH",
    "name": "Volcanological Geochemistry & Mineralogy",
    "baseWeight": 5,
    "keywords": [
      "volcanological",
      "geochemistry",
      "mineralogy"
    ]
  },
  {
    "id": "glaciological_geochemistry_mineralogy",
    "discipline": "EARTH",
    "name": "Glaciological Geochemistry & Mineralogy",
    "baseWeight": 5,
    "keywords": [
      "glaciological",
      "geochemistry",
      "mineralogy"
    ]
  },
  {
    "id": "paleontological_geochemistry_mineralogy",
    "discipline": "EARTH",
    "name": "Paleontological Geochemistry & Mineralogy",
    "baseWeight": 5,
    "keywords": [
      "paleontological",
      "geochemistry",
      "mineralogy"
    ]
  },
  {
    "id": "geophysical_geochemistry_mineralogy",
    "discipline": "EARTH",
    "name": "Geophysical Geochemistry & Mineralogy",
    "baseWeight": 5,
    "keywords": [
      "geophysical",
      "geochemistry",
      "mineralogy"
    ]
  },
  {
    "id": "geochemical_geochemistry_mineralogy",
    "discipline": "EARTH",
    "name": "Geochemical Geochemistry & Mineralogy",
    "baseWeight": 5,
    "keywords": [
      "geochemical",
      "geochemistry",
      "mineralogy"
    ]
  },
  {
    "id": "mineralogical_geochemistry_mineralogy",
    "discipline": "EARTH",
    "name": "Mineralogical Geochemistry & Mineralogy",
    "baseWeight": 5,
    "keywords": [
      "mineralogical",
      "geochemistry",
      "mineralogy"
    ]
  },
  {
    "id": "stratigraphic_geochemistry_mineralogy",
    "discipline": "EARTH",
    "name": "Stratigraphic Geochemistry & Mineralogy",
    "baseWeight": 5,
    "keywords": [
      "stratigraphic",
      "geochemistry",
      "mineralogy"
    ]
  },
  {
    "id": "pedological_geochemistry_mineralogy",
    "discipline": "EARTH",
    "name": "Pedological Geochemistry & Mineralogy",
    "baseWeight": 3,
    "keywords": [
      "pedological",
      "geochemistry",
      "mineralogy"
    ]
  },
  {
    "id": "planetary_geochemistry_mineralogy",
    "discipline": "EARTH",
    "name": "Planetary Geochemistry & Mineralogy",
    "baseWeight": 5,
    "keywords": [
      "planetary",
      "geochemistry",
      "mineralogy"
    ]
  },
  {
    "id": "atmospheric_geochemistry_mineralogy",
    "discipline": "EARTH",
    "name": "Atmospheric Geochemistry & Mineralogy",
    "baseWeight": 5,
    "keywords": [
      "atmospheric",
      "geochemistry",
      "mineralogy"
    ]
  },
  {
    "id": "environmental_geochemistry_mineralogy",
    "discipline": "EARTH",
    "name": "Environmental Geochemistry & Mineralogy",
    "baseWeight": 5,
    "keywords": [
      "environmental",
      "geochemistry",
      "mineralogy"
    ]
  },
  {
    "id": "biogeochemical_geochemistry_mineralogy",
    "discipline": "EARTH",
    "name": "Biogeochemical Geochemistry & Mineralogy",
    "baseWeight": 5,
    "keywords": [
      "biogeochemical",
      "geochemistry",
      "mineralogy"
    ]
  },
  {
    "id": "sedimentary_geochemistry_mineralogy",
    "discipline": "EARTH",
    "name": "Sedimentary Geochemistry & Mineralogy",
    "baseWeight": 5,
    "keywords": [
      "sedimentary",
      "geochemistry",
      "mineralogy"
    ]
  },
  {
    "id": "tectonic_geochemistry_mineralogy",
    "discipline": "EARTH",
    "name": "Tectonic Geochemistry & Mineralogy",
    "baseWeight": 5,
    "keywords": [
      "tectonic",
      "geochemistry",
      "mineralogy"
    ]
  },
  {
    "id": "geomorphological_geochemistry_mineralogy",
    "discipline": "EARTH",
    "name": "Geomorphological Geochemistry & Mineralogy",
    "baseWeight": 5,
    "keywords": [
      "geomorphological",
      "geochemistry",
      "mineralogy"
    ]
  },
  {
    "id": "geodetic_geochemistry_mineralogy",
    "discipline": "EARTH",
    "name": "Geodetic Geochemistry & Mineralogy",
    "baseWeight": 5,
    "keywords": [
      "geodetic",
      "geochemistry",
      "mineralogy"
    ]
  },
  {
    "id": "marine_geochemistry_mineralogy",
    "discipline": "EARTH",
    "name": "Marine Geochemistry & Mineralogy",
    "baseWeight": 5,
    "keywords": [
      "marine",
      "geochemistry",
      "mineralogy"
    ]
  },
  {
    "id": "deep_earth_geochemistry_mineralogy",
    "discipline": "EARTH",
    "name": "Deep-Earth Geochemistry & Mineralogy",
    "baseWeight": 5,
    "keywords": [
      "deep",
      "earth",
      "geochemistry",
      "mineralogy"
    ]
  },
  {
    "id": "surface_geochemistry_mineralogy",
    "discipline": "EARTH",
    "name": "Surface Geochemistry & Mineralogy",
    "baseWeight": 5,
    "keywords": [
      "surface",
      "geochemistry",
      "mineralogy"
    ]
  },
  {
    "id": "geological_soil_science_pedology",
    "discipline": "EARTH",
    "name": "Geological Soil Science & Pedology",
    "baseWeight": 6,
    "keywords": [
      "geological",
      "soil",
      "science",
      "pedology"
    ]
  },
  {
    "id": "meteorological_soil_science_pedology",
    "discipline": "EARTH",
    "name": "Meteorological Soil Science & Pedology",
    "baseWeight": 6,
    "keywords": [
      "meteorological",
      "soil",
      "science",
      "pedology"
    ]
  },
  {
    "id": "climatological_soil_science_pedology",
    "discipline": "EARTH",
    "name": "Climatological Soil Science & Pedology",
    "baseWeight": 6,
    "keywords": [
      "climatological",
      "soil",
      "science",
      "pedology"
    ]
  },
  {
    "id": "oceanographic_soil_science_pedology",
    "discipline": "EARTH",
    "name": "Oceanographic Soil Science & Pedology",
    "baseWeight": 6,
    "keywords": [
      "oceanographic",
      "soil",
      "science",
      "pedology"
    ]
  },
  {
    "id": "hydrological_soil_science_pedology",
    "discipline": "EARTH",
    "name": "Hydrological Soil Science & Pedology",
    "baseWeight": 6,
    "keywords": [
      "hydrological",
      "soil",
      "science",
      "pedology"
    ]
  },
  {
    "id": "seismological_soil_science_pedology",
    "discipline": "EARTH",
    "name": "Seismological Soil Science & Pedology",
    "baseWeight": 6,
    "keywords": [
      "seismological",
      "soil",
      "science",
      "pedology"
    ]
  },
  {
    "id": "volcanological_soil_science_pedology",
    "discipline": "EARTH",
    "name": "Volcanological Soil Science & Pedology",
    "baseWeight": 6,
    "keywords": [
      "volcanological",
      "soil",
      "science",
      "pedology"
    ]
  },
  {
    "id": "glaciological_soil_science_pedology",
    "discipline": "EARTH",
    "name": "Glaciological Soil Science & Pedology",
    "baseWeight": 6,
    "keywords": [
      "glaciological",
      "soil",
      "science",
      "pedology"
    ]
  },
  {
    "id": "paleontological_soil_science_pedology",
    "discipline": "EARTH",
    "name": "Paleontological Soil Science & Pedology",
    "baseWeight": 6,
    "keywords": [
      "paleontological",
      "soil",
      "science",
      "pedology"
    ]
  },
  {
    "id": "geophysical_soil_science_pedology",
    "discipline": "EARTH",
    "name": "Geophysical Soil Science & Pedology",
    "baseWeight": 6,
    "keywords": [
      "geophysical",
      "soil",
      "science",
      "pedology"
    ]
  },
  {
    "id": "geochemical_soil_science_pedology",
    "discipline": "EARTH",
    "name": "Geochemical Soil Science & Pedology",
    "baseWeight": 6,
    "keywords": [
      "geochemical",
      "soil",
      "science",
      "pedology"
    ]
  },
  {
    "id": "mineralogical_soil_science_pedology",
    "discipline": "EARTH",
    "name": "Mineralogical Soil Science & Pedology",
    "baseWeight": 6,
    "keywords": [
      "mineralogical",
      "soil",
      "science",
      "pedology"
    ]
  },
  {
    "id": "stratigraphic_soil_science_pedology",
    "discipline": "EARTH",
    "name": "Stratigraphic Soil Science & Pedology",
    "baseWeight": 6,
    "keywords": [
      "stratigraphic",
      "soil",
      "science",
      "pedology"
    ]
  },
  {
    "id": "pedological_soil_science_pedology",
    "discipline": "EARTH",
    "name": "Pedological Soil Science & Pedology",
    "baseWeight": 4,
    "keywords": [
      "pedological",
      "soil",
      "science",
      "pedology"
    ]
  },
  {
    "id": "planetary_soil_science_pedology",
    "discipline": "EARTH",
    "name": "Planetary Soil Science & Pedology",
    "baseWeight": 6,
    "keywords": [
      "planetary",
      "soil",
      "science",
      "pedology"
    ]
  },
  {
    "id": "atmospheric_soil_science_pedology",
    "discipline": "EARTH",
    "name": "Atmospheric Soil Science & Pedology",
    "baseWeight": 6,
    "keywords": [
      "atmospheric",
      "soil",
      "science",
      "pedology"
    ]
  },
  {
    "id": "environmental_soil_science_pedology",
    "discipline": "EARTH",
    "name": "Environmental Soil Science & Pedology",
    "baseWeight": 6,
    "keywords": [
      "environmental",
      "soil",
      "science",
      "pedology"
    ]
  },
  {
    "id": "biogeochemical_soil_science_pedology",
    "discipline": "EARTH",
    "name": "Biogeochemical Soil Science & Pedology",
    "baseWeight": 6,
    "keywords": [
      "biogeochemical",
      "soil",
      "science",
      "pedology"
    ]
  },
  {
    "id": "sedimentary_soil_science_pedology",
    "discipline": "EARTH",
    "name": "Sedimentary Soil Science & Pedology",
    "baseWeight": 6,
    "keywords": [
      "sedimentary",
      "soil",
      "science",
      "pedology"
    ]
  },
  {
    "id": "tectonic_soil_science_pedology",
    "discipline": "EARTH",
    "name": "Tectonic Soil Science & Pedology",
    "baseWeight": 6,
    "keywords": [
      "tectonic",
      "soil",
      "science",
      "pedology"
    ]
  },
  {
    "id": "geomorphological_soil_science_pedology",
    "discipline": "EARTH",
    "name": "Geomorphological Soil Science & Pedology",
    "baseWeight": 6,
    "keywords": [
      "geomorphological",
      "soil",
      "science",
      "pedology"
    ]
  },
  {
    "id": "geodetic_soil_science_pedology",
    "discipline": "EARTH",
    "name": "Geodetic Soil Science & Pedology",
    "baseWeight": 6,
    "keywords": [
      "geodetic",
      "soil",
      "science",
      "pedology"
    ]
  },
  {
    "id": "marine_soil_science_pedology",
    "discipline": "EARTH",
    "name": "Marine Soil Science & Pedology",
    "baseWeight": 6,
    "keywords": [
      "marine",
      "soil",
      "science",
      "pedology"
    ]
  },
  {
    "id": "deep_earth_soil_science_pedology",
    "discipline": "EARTH",
    "name": "Deep-Earth Soil Science & Pedology",
    "baseWeight": 6,
    "keywords": [
      "deep",
      "earth",
      "soil",
      "science",
      "pedology"
    ]
  },
  {
    "id": "surface_soil_science_pedology",
    "discipline": "EARTH",
    "name": "Surface Soil Science & Pedology",
    "baseWeight": 6,
    "keywords": [
      "surface",
      "soil",
      "science",
      "pedology"
    ]
  },
  {
    "id": "geological_planetary_science_astrogeology",
    "discipline": "EARTH",
    "name": "Geological Planetary Science & Astrogeology",
    "baseWeight": 4,
    "keywords": [
      "geological",
      "planetary",
      "science",
      "astrogeology"
    ]
  },
  {
    "id": "meteorological_planetary_science_astrogeology",
    "discipline": "EARTH",
    "name": "Meteorological Planetary Science & Astrogeology",
    "baseWeight": 4,
    "keywords": [
      "meteorological",
      "planetary",
      "science",
      "astrogeology"
    ]
  },
  {
    "id": "climatological_planetary_science_astrogeology",
    "discipline": "EARTH",
    "name": "Climatological Planetary Science & Astrogeology",
    "baseWeight": 4,
    "keywords": [
      "climatological",
      "planetary",
      "science",
      "astrogeology"
    ]
  },
  {
    "id": "oceanographic_planetary_science_astrogeology",
    "discipline": "EARTH",
    "name": "Oceanographic Planetary Science & Astrogeology",
    "baseWeight": 4,
    "keywords": [
      "oceanographic",
      "planetary",
      "science",
      "astrogeology"
    ]
  },
  {
    "id": "hydrological_planetary_science_astrogeology",
    "discipline": "EARTH",
    "name": "Hydrological Planetary Science & Astrogeology",
    "baseWeight": 4,
    "keywords": [
      "hydrological",
      "planetary",
      "science",
      "astrogeology"
    ]
  },
  {
    "id": "seismological_planetary_science_astrogeology",
    "discipline": "EARTH",
    "name": "Seismological Planetary Science & Astrogeology",
    "baseWeight": 4,
    "keywords": [
      "seismological",
      "planetary",
      "science",
      "astrogeology"
    ]
  },
  {
    "id": "volcanological_planetary_science_astrogeology",
    "discipline": "EARTH",
    "name": "Volcanological Planetary Science & Astrogeology",
    "baseWeight": 4,
    "keywords": [
      "volcanological",
      "planetary",
      "science",
      "astrogeology"
    ]
  },
  {
    "id": "glaciological_planetary_science_astrogeology",
    "discipline": "EARTH",
    "name": "Glaciological Planetary Science & Astrogeology",
    "baseWeight": 4,
    "keywords": [
      "glaciological",
      "planetary",
      "science",
      "astrogeology"
    ]
  },
  {
    "id": "paleontological_planetary_science_astrogeology",
    "discipline": "EARTH",
    "name": "Paleontological Planetary Science & Astrogeology",
    "baseWeight": 4,
    "keywords": [
      "paleontological",
      "planetary",
      "science",
      "astrogeology"
    ]
  },
  {
    "id": "geophysical_planetary_science_astrogeology",
    "discipline": "EARTH",
    "name": "Geophysical Planetary Science & Astrogeology",
    "baseWeight": 4,
    "keywords": [
      "geophysical",
      "planetary",
      "science",
      "astrogeology"
    ]
  },
  {
    "id": "geochemical_planetary_science_astrogeology",
    "discipline": "EARTH",
    "name": "Geochemical Planetary Science & Astrogeology",
    "baseWeight": 4,
    "keywords": [
      "geochemical",
      "planetary",
      "science",
      "astrogeology"
    ]
  },
  {
    "id": "mineralogical_planetary_science_astrogeology",
    "discipline": "EARTH",
    "name": "Mineralogical Planetary Science & Astrogeology",
    "baseWeight": 4,
    "keywords": [
      "mineralogical",
      "planetary",
      "science",
      "astrogeology"
    ]
  },
  {
    "id": "stratigraphic_planetary_science_astrogeology",
    "discipline": "EARTH",
    "name": "Stratigraphic Planetary Science & Astrogeology",
    "baseWeight": 4,
    "keywords": [
      "stratigraphic",
      "planetary",
      "science",
      "astrogeology"
    ]
  },
  {
    "id": "pedological_planetary_science_astrogeology",
    "discipline": "EARTH",
    "name": "Pedological Planetary Science & Astrogeology",
    "baseWeight": 2,
    "keywords": [
      "pedological",
      "planetary",
      "science",
      "astrogeology"
    ]
  },
  {
    "id": "planetary_science_astrogeology",
    "discipline": "EARTH",
    "name": "Planetary Science & Astrogeology",
    "baseWeight": 4,
    "keywords": [
      "planetary",
      "science",
      "astrogeology"
    ]
  },
  {
    "id": "atmospheric_planetary_science_astrogeology",
    "discipline": "EARTH",
    "name": "Atmospheric Planetary Science & Astrogeology",
    "baseWeight": 4,
    "keywords": [
      "atmospheric",
      "planetary",
      "science",
      "astrogeology"
    ]
  },
  {
    "id": "environmental_planetary_science_astrogeology",
    "discipline": "EARTH",
    "name": "Environmental Planetary Science & Astrogeology",
    "baseWeight": 4,
    "keywords": [
      "environmental",
      "planetary",
      "science",
      "astrogeology"
    ]
  },
  {
    "id": "biogeochemical_planetary_science_astrogeology",
    "discipline": "EARTH",
    "name": "Biogeochemical Planetary Science & Astrogeology",
    "baseWeight": 4,
    "keywords": [
      "biogeochemical",
      "planetary",
      "science",
      "astrogeology"
    ]
  },
  {
    "id": "sedimentary_planetary_science_astrogeology",
    "discipline": "EARTH",
    "name": "Sedimentary Planetary Science & Astrogeology",
    "baseWeight": 4,
    "keywords": [
      "sedimentary",
      "planetary",
      "science",
      "astrogeology"
    ]
  },
  {
    "id": "tectonic_planetary_science_astrogeology",
    "discipline": "EARTH",
    "name": "Tectonic Planetary Science & Astrogeology",
    "baseWeight": 4,
    "keywords": [
      "tectonic",
      "planetary",
      "science",
      "astrogeology"
    ]
  },
  {
    "id": "geomorphological_planetary_science_astrogeology",
    "discipline": "EARTH",
    "name": "Geomorphological Planetary Science & Astrogeology",
    "baseWeight": 4,
    "keywords": [
      "geomorphological",
      "planetary",
      "science",
      "astrogeology"
    ]
  },
  {
    "id": "geodetic_planetary_science_astrogeology",
    "discipline": "EARTH",
    "name": "Geodetic Planetary Science & Astrogeology",
    "baseWeight": 4,
    "keywords": [
      "geodetic",
      "planetary",
      "science",
      "astrogeology"
    ]
  },
  {
    "id": "marine_planetary_science_astrogeology",
    "discipline": "EARTH",
    "name": "Marine Planetary Science & Astrogeology",
    "baseWeight": 4,
    "keywords": [
      "marine",
      "planetary",
      "science",
      "astrogeology"
    ]
  },
  {
    "id": "deep_earth_planetary_science_astrogeology",
    "discipline": "EARTH",
    "name": "Deep-Earth Planetary Science & Astrogeology",
    "baseWeight": 4,
    "keywords": [
      "deep",
      "earth",
      "planetary",
      "science",
      "astrogeology"
    ]
  },
  {
    "id": "surface_planetary_science_astrogeology",
    "discipline": "EARTH",
    "name": "Surface Planetary Science & Astrogeology",
    "baseWeight": 4,
    "keywords": [
      "surface",
      "planetary",
      "science",
      "astrogeology"
    ]
  },
  {
    "id": "algorithmic_algorithms_complexity_theory",
    "discipline": "COMPUTER",
    "name": "Algorithmic Algorithms & Complexity Theory",
    "baseWeight": 4,
    "keywords": [
      "algorithmic",
      "algorithms",
      "complexity",
      "theory"
    ]
  },
  {
    "id": "distributed_algorithms_complexity_theory",
    "discipline": "COMPUTER",
    "name": "Distributed Algorithms & Complexity Theory",
    "baseWeight": 4,
    "keywords": [
      "distributed",
      "algorithms",
      "complexity",
      "theory"
    ]
  },
  {
    "id": "parallel_algorithms_complexity_theory",
    "discipline": "COMPUTER",
    "name": "Parallel Algorithms & Complexity Theory",
    "baseWeight": 4,
    "keywords": [
      "parallel",
      "algorithms",
      "complexity",
      "theory"
    ]
  },
  {
    "id": "quantum_algorithms_complexity_theory",
    "discipline": "COMPUTER",
    "name": "Quantum Algorithms & Complexity Theory",
    "baseWeight": 7,
    "keywords": [
      "quantum",
      "algorithms",
      "complexity",
      "theory",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "embedded_algorithms_complexity_theory",
    "discipline": "COMPUTER",
    "name": "Embedded Algorithms & Complexity Theory",
    "baseWeight": 4,
    "keywords": [
      "embedded",
      "algorithms",
      "complexity",
      "theory"
    ]
  },
  {
    "id": "real_time_algorithms_complexity_theory",
    "discipline": "COMPUTER",
    "name": "Real-Time Algorithms & Complexity Theory",
    "baseWeight": 4,
    "keywords": [
      "real",
      "time",
      "algorithms",
      "complexity",
      "theory"
    ]
  },
  {
    "id": "autonomous_algorithms_complexity_theory",
    "discipline": "COMPUTER",
    "name": "Autonomous Algorithms & Complexity Theory",
    "baseWeight": 7,
    "keywords": [
      "autonomous",
      "algorithms",
      "complexity",
      "theory",
      "self-driving",
      "unmanned",
      "agent",
      "uav",
      "autopilot"
    ]
  },
  {
    "id": "robotic_algorithms_complexity_theory",
    "discipline": "COMPUTER",
    "name": "Robotic Algorithms & Complexity Theory",
    "baseWeight": 4,
    "keywords": [
      "robotic",
      "algorithms",
      "complexity",
      "theory",
      "robot",
      "mechatronics",
      "actuator",
      "kinematics",
      "manipulator",
      "servomotor"
    ]
  },
  {
    "id": "cloud_algorithms_complexity_theory",
    "discipline": "COMPUTER",
    "name": "Cloud Algorithms & Complexity Theory",
    "baseWeight": 4,
    "keywords": [
      "cloud",
      "algorithms",
      "complexity",
      "theory"
    ]
  },
  {
    "id": "edge_algorithms_complexity_theory",
    "discipline": "COMPUTER",
    "name": "Edge Algorithms & Complexity Theory",
    "baseWeight": 4,
    "keywords": [
      "edge",
      "algorithms",
      "complexity",
      "theory"
    ]
  },
  {
    "id": "cyber_algorithms_complexity_theory",
    "discipline": "COMPUTER",
    "name": "Cyber Algorithms & Complexity Theory",
    "baseWeight": 4,
    "keywords": [
      "cyber",
      "algorithms",
      "complexity",
      "theory"
    ]
  },
  {
    "id": "cryptographic_algorithms_complexity_theory",
    "discipline": "COMPUTER",
    "name": "Cryptographic Algorithms & Complexity Theory",
    "baseWeight": 4,
    "keywords": [
      "cryptographic",
      "algorithms",
      "complexity",
      "theory"
    ]
  },
  {
    "id": "neural_algorithms_complexity_theory",
    "discipline": "COMPUTER",
    "name": "Neural Algorithms & Complexity Theory",
    "baseWeight": 7,
    "keywords": [
      "neural",
      "algorithms",
      "complexity",
      "theory",
      "neuron",
      "synaptic",
      "brain",
      "network",
      "backpropagation"
    ]
  },
  {
    "id": "deep_learning_algorithms_complexity_theory",
    "discipline": "COMPUTER",
    "name": "Deep Learning Algorithms & Complexity Theory",
    "baseWeight": 4,
    "keywords": [
      "deep",
      "learning",
      "algorithms",
      "complexity",
      "theory"
    ]
  },
  {
    "id": "generative_algorithms_complexity_theory",
    "discipline": "COMPUTER",
    "name": "Generative Algorithms & Complexity Theory",
    "baseWeight": 4,
    "keywords": [
      "generative",
      "algorithms",
      "complexity",
      "theory"
    ]
  },
  {
    "id": "compiler_algorithms_complexity_theory",
    "discipline": "COMPUTER",
    "name": "Compiler Algorithms & Complexity Theory",
    "baseWeight": 4,
    "keywords": [
      "compiler",
      "algorithms",
      "complexity",
      "theory"
    ]
  },
  {
    "id": "database_algorithms_complexity_theory",
    "discipline": "COMPUTER",
    "name": "Database Algorithms & Complexity Theory",
    "baseWeight": 4,
    "keywords": [
      "database",
      "algorithms",
      "complexity",
      "theory"
    ]
  },
  {
    "id": "network_algorithms_complexity_theory",
    "discipline": "COMPUTER",
    "name": "Network Algorithms & Complexity Theory",
    "baseWeight": 4,
    "keywords": [
      "network",
      "algorithms",
      "complexity",
      "theory"
    ]
  },
  {
    "id": "graphics_algorithms_complexity_theory",
    "discipline": "COMPUTER",
    "name": "Graphics Algorithms & Complexity Theory",
    "baseWeight": 4,
    "keywords": [
      "graphics",
      "algorithms",
      "complexity",
      "theory"
    ]
  },
  {
    "id": "vision_algorithms_complexity_theory",
    "discipline": "COMPUTER",
    "name": "Vision Algorithms & Complexity Theory",
    "baseWeight": 4,
    "keywords": [
      "vision",
      "algorithms",
      "complexity",
      "theory"
    ]
  },
  {
    "id": "hci_algorithms_complexity_theory",
    "discipline": "COMPUTER",
    "name": "HCI Algorithms & Complexity Theory",
    "baseWeight": 4,
    "keywords": [
      "algorithms",
      "complexity",
      "theory"
    ]
  },
  {
    "id": "software_algorithms_complexity_theory",
    "discipline": "COMPUTER",
    "name": "Software Algorithms & Complexity Theory",
    "baseWeight": 4,
    "keywords": [
      "software",
      "algorithms",
      "complexity",
      "theory"
    ]
  },
  {
    "id": "information_algorithms_complexity_theory",
    "discipline": "COMPUTER",
    "name": "Information Algorithms & Complexity Theory",
    "baseWeight": 4,
    "keywords": [
      "information",
      "algorithms",
      "complexity",
      "theory"
    ]
  },
  {
    "id": "logical_algorithms_complexity_theory",
    "discipline": "COMPUTER",
    "name": "Logical Algorithms & Complexity Theory",
    "baseWeight": 4,
    "keywords": [
      "logical",
      "algorithms",
      "complexity",
      "theory"
    ]
  },
  {
    "id": "artificial_algorithms_complexity_theory",
    "discipline": "COMPUTER",
    "name": "Artificial Algorithms & Complexity Theory",
    "baseWeight": 4,
    "keywords": [
      "artificial",
      "algorithms",
      "complexity",
      "theory"
    ]
  },
  {
    "id": "algorithmic_programming_languages_compilers",
    "discipline": "COMPUTER",
    "name": "Algorithmic Programming Languages & Compilers",
    "baseWeight": 5,
    "keywords": [
      "algorithmic",
      "programming",
      "languages",
      "compilers"
    ]
  },
  {
    "id": "distributed_programming_languages_compilers",
    "discipline": "COMPUTER",
    "name": "Distributed Programming Languages & Compilers",
    "baseWeight": 5,
    "keywords": [
      "distributed",
      "programming",
      "languages",
      "compilers"
    ]
  },
  {
    "id": "parallel_programming_languages_compilers",
    "discipline": "COMPUTER",
    "name": "Parallel Programming Languages & Compilers",
    "baseWeight": 5,
    "keywords": [
      "parallel",
      "programming",
      "languages",
      "compilers"
    ]
  },
  {
    "id": "quantum_programming_languages_compilers",
    "discipline": "COMPUTER",
    "name": "Quantum Programming Languages & Compilers",
    "baseWeight": 8,
    "keywords": [
      "quantum",
      "programming",
      "languages",
      "compilers",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "embedded_programming_languages_compilers",
    "discipline": "COMPUTER",
    "name": "Embedded Programming Languages & Compilers",
    "baseWeight": 5,
    "keywords": [
      "embedded",
      "programming",
      "languages",
      "compilers"
    ]
  },
  {
    "id": "real_time_programming_languages_compilers",
    "discipline": "COMPUTER",
    "name": "Real-Time Programming Languages & Compilers",
    "baseWeight": 5,
    "keywords": [
      "real",
      "time",
      "programming",
      "languages",
      "compilers"
    ]
  },
  {
    "id": "autonomous_programming_languages_compilers",
    "discipline": "COMPUTER",
    "name": "Autonomous Programming Languages & Compilers",
    "baseWeight": 8,
    "keywords": [
      "autonomous",
      "programming",
      "languages",
      "compilers",
      "self-driving",
      "unmanned",
      "agent",
      "uav",
      "autopilot"
    ]
  },
  {
    "id": "robotic_programming_languages_compilers",
    "discipline": "COMPUTER",
    "name": "Robotic Programming Languages & Compilers",
    "baseWeight": 5,
    "keywords": [
      "robotic",
      "programming",
      "languages",
      "compilers",
      "robot",
      "mechatronics",
      "actuator",
      "kinematics",
      "manipulator",
      "servomotor"
    ]
  },
  {
    "id": "cloud_programming_languages_compilers",
    "discipline": "COMPUTER",
    "name": "Cloud Programming Languages & Compilers",
    "baseWeight": 5,
    "keywords": [
      "cloud",
      "programming",
      "languages",
      "compilers"
    ]
  },
  {
    "id": "edge_programming_languages_compilers",
    "discipline": "COMPUTER",
    "name": "Edge Programming Languages & Compilers",
    "baseWeight": 5,
    "keywords": [
      "edge",
      "programming",
      "languages",
      "compilers"
    ]
  },
  {
    "id": "cyber_programming_languages_compilers",
    "discipline": "COMPUTER",
    "name": "Cyber Programming Languages & Compilers",
    "baseWeight": 5,
    "keywords": [
      "cyber",
      "programming",
      "languages",
      "compilers"
    ]
  },
  {
    "id": "cryptographic_programming_languages_compilers",
    "discipline": "COMPUTER",
    "name": "Cryptographic Programming Languages & Compilers",
    "baseWeight": 5,
    "keywords": [
      "cryptographic",
      "programming",
      "languages",
      "compilers"
    ]
  },
  {
    "id": "neural_programming_languages_compilers",
    "discipline": "COMPUTER",
    "name": "Neural Programming Languages & Compilers",
    "baseWeight": 8,
    "keywords": [
      "neural",
      "programming",
      "languages",
      "compilers",
      "neuron",
      "synaptic",
      "brain",
      "network",
      "backpropagation"
    ]
  },
  {
    "id": "deep_learning_programming_languages_compilers",
    "discipline": "COMPUTER",
    "name": "Deep Learning Programming Languages & Compilers",
    "baseWeight": 5,
    "keywords": [
      "deep",
      "learning",
      "programming",
      "languages",
      "compilers"
    ]
  },
  {
    "id": "generative_programming_languages_compilers",
    "discipline": "COMPUTER",
    "name": "Generative Programming Languages & Compilers",
    "baseWeight": 5,
    "keywords": [
      "generative",
      "programming",
      "languages",
      "compilers"
    ]
  },
  {
    "id": "compiler_programming_languages_compilers",
    "discipline": "COMPUTER",
    "name": "Compiler Programming Languages & Compilers",
    "baseWeight": 5,
    "keywords": [
      "compiler",
      "programming",
      "languages",
      "compilers"
    ]
  },
  {
    "id": "database_programming_languages_compilers",
    "discipline": "COMPUTER",
    "name": "Database Programming Languages & Compilers",
    "baseWeight": 5,
    "keywords": [
      "database",
      "programming",
      "languages",
      "compilers"
    ]
  },
  {
    "id": "network_programming_languages_compilers",
    "discipline": "COMPUTER",
    "name": "Network Programming Languages & Compilers",
    "baseWeight": 5,
    "keywords": [
      "network",
      "programming",
      "languages",
      "compilers"
    ]
  },
  {
    "id": "graphics_programming_languages_compilers",
    "discipline": "COMPUTER",
    "name": "Graphics Programming Languages & Compilers",
    "baseWeight": 5,
    "keywords": [
      "graphics",
      "programming",
      "languages",
      "compilers"
    ]
  },
  {
    "id": "vision_programming_languages_compilers",
    "discipline": "COMPUTER",
    "name": "Vision Programming Languages & Compilers",
    "baseWeight": 5,
    "keywords": [
      "vision",
      "programming",
      "languages",
      "compilers"
    ]
  },
  {
    "id": "hci_programming_languages_compilers",
    "discipline": "COMPUTER",
    "name": "HCI Programming Languages & Compilers",
    "baseWeight": 5,
    "keywords": [
      "programming",
      "languages",
      "compilers"
    ]
  },
  {
    "id": "software_programming_languages_compilers",
    "discipline": "COMPUTER",
    "name": "Software Programming Languages & Compilers",
    "baseWeight": 5,
    "keywords": [
      "software",
      "programming",
      "languages",
      "compilers"
    ]
  },
  {
    "id": "information_programming_languages_compilers",
    "discipline": "COMPUTER",
    "name": "Information Programming Languages & Compilers",
    "baseWeight": 5,
    "keywords": [
      "information",
      "programming",
      "languages",
      "compilers"
    ]
  },
  {
    "id": "logical_programming_languages_compilers",
    "discipline": "COMPUTER",
    "name": "Logical Programming Languages & Compilers",
    "baseWeight": 5,
    "keywords": [
      "logical",
      "programming",
      "languages",
      "compilers"
    ]
  },
  {
    "id": "artificial_programming_languages_compilers",
    "discipline": "COMPUTER",
    "name": "Artificial Programming Languages & Compilers",
    "baseWeight": 5,
    "keywords": [
      "artificial",
      "programming",
      "languages",
      "compilers"
    ]
  },
  {
    "id": "algorithmic_operating_systems",
    "discipline": "COMPUTER",
    "name": "Algorithmic Operating Systems",
    "baseWeight": 6,
    "keywords": [
      "algorithmic",
      "operating",
      "systems"
    ]
  },
  {
    "id": "distributed_operating_systems",
    "discipline": "COMPUTER",
    "name": "Distributed Operating Systems",
    "baseWeight": 6,
    "keywords": [
      "distributed",
      "operating",
      "systems"
    ]
  },
  {
    "id": "parallel_operating_systems",
    "discipline": "COMPUTER",
    "name": "Parallel Operating Systems",
    "baseWeight": 6,
    "keywords": [
      "parallel",
      "operating",
      "systems"
    ]
  },
  {
    "id": "quantum_operating_systems",
    "discipline": "COMPUTER",
    "name": "Quantum Operating Systems",
    "baseWeight": 9,
    "keywords": [
      "quantum",
      "operating",
      "systems",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "embedded_operating_systems",
    "discipline": "COMPUTER",
    "name": "Embedded Operating Systems",
    "baseWeight": 6,
    "keywords": [
      "embedded",
      "operating",
      "systems"
    ]
  },
  {
    "id": "real_time_operating_systems",
    "discipline": "COMPUTER",
    "name": "Real-Time Operating Systems",
    "baseWeight": 6,
    "keywords": [
      "real",
      "time",
      "operating",
      "systems"
    ]
  },
  {
    "id": "autonomous_operating_systems",
    "discipline": "COMPUTER",
    "name": "Autonomous Operating Systems",
    "baseWeight": 9,
    "keywords": [
      "autonomous",
      "operating",
      "systems",
      "self-driving",
      "unmanned",
      "agent",
      "uav",
      "autopilot"
    ]
  },
  {
    "id": "robotic_operating_systems",
    "discipline": "COMPUTER",
    "name": "Robotic Operating Systems",
    "baseWeight": 6,
    "keywords": [
      "robotic",
      "operating",
      "systems",
      "robot",
      "mechatronics",
      "actuator",
      "kinematics",
      "manipulator",
      "servomotor"
    ]
  },
  {
    "id": "cloud_operating_systems",
    "discipline": "COMPUTER",
    "name": "Cloud Operating Systems",
    "baseWeight": 6,
    "keywords": [
      "cloud",
      "operating",
      "systems"
    ]
  },
  {
    "id": "edge_operating_systems",
    "discipline": "COMPUTER",
    "name": "Edge Operating Systems",
    "baseWeight": 6,
    "keywords": [
      "edge",
      "operating",
      "systems"
    ]
  },
  {
    "id": "cyber_operating_systems",
    "discipline": "COMPUTER",
    "name": "Cyber Operating Systems",
    "baseWeight": 6,
    "keywords": [
      "cyber",
      "operating",
      "systems"
    ]
  },
  {
    "id": "cryptographic_operating_systems",
    "discipline": "COMPUTER",
    "name": "Cryptographic Operating Systems",
    "baseWeight": 6,
    "keywords": [
      "cryptographic",
      "operating",
      "systems"
    ]
  },
  {
    "id": "neural_operating_systems",
    "discipline": "COMPUTER",
    "name": "Neural Operating Systems",
    "baseWeight": 9,
    "keywords": [
      "neural",
      "operating",
      "systems",
      "neuron",
      "synaptic",
      "brain",
      "network",
      "backpropagation"
    ]
  },
  {
    "id": "deep_learning_operating_systems",
    "discipline": "COMPUTER",
    "name": "Deep Learning Operating Systems",
    "baseWeight": 6,
    "keywords": [
      "deep",
      "learning",
      "operating",
      "systems"
    ]
  },
  {
    "id": "generative_operating_systems",
    "discipline": "COMPUTER",
    "name": "Generative Operating Systems",
    "baseWeight": 6,
    "keywords": [
      "generative",
      "operating",
      "systems"
    ]
  },
  {
    "id": "compiler_operating_systems",
    "discipline": "COMPUTER",
    "name": "Compiler Operating Systems",
    "baseWeight": 6,
    "keywords": [
      "compiler",
      "operating",
      "systems"
    ]
  },
  {
    "id": "database_operating_systems",
    "discipline": "COMPUTER",
    "name": "Database Operating Systems",
    "baseWeight": 6,
    "keywords": [
      "database",
      "operating",
      "systems"
    ]
  },
  {
    "id": "network_operating_systems",
    "discipline": "COMPUTER",
    "name": "Network Operating Systems",
    "baseWeight": 6,
    "keywords": [
      "network",
      "operating",
      "systems"
    ]
  },
  {
    "id": "graphics_operating_systems",
    "discipline": "COMPUTER",
    "name": "Graphics Operating Systems",
    "baseWeight": 6,
    "keywords": [
      "graphics",
      "operating",
      "systems"
    ]
  },
  {
    "id": "vision_operating_systems",
    "discipline": "COMPUTER",
    "name": "Vision Operating Systems",
    "baseWeight": 6,
    "keywords": [
      "vision",
      "operating",
      "systems"
    ]
  },
  {
    "id": "hci_operating_systems",
    "discipline": "COMPUTER",
    "name": "HCI Operating Systems",
    "baseWeight": 6,
    "keywords": [
      "operating",
      "systems"
    ]
  },
  {
    "id": "software_operating_systems",
    "discipline": "COMPUTER",
    "name": "Software Operating Systems",
    "baseWeight": 6,
    "keywords": [
      "software",
      "operating",
      "systems"
    ]
  },
  {
    "id": "information_operating_systems",
    "discipline": "COMPUTER",
    "name": "Information Operating Systems",
    "baseWeight": 6,
    "keywords": [
      "information",
      "operating",
      "systems"
    ]
  },
  {
    "id": "logical_operating_systems",
    "discipline": "COMPUTER",
    "name": "Logical Operating Systems",
    "baseWeight": 6,
    "keywords": [
      "logical",
      "operating",
      "systems"
    ]
  },
  {
    "id": "artificial_operating_systems",
    "discipline": "COMPUTER",
    "name": "Artificial Operating Systems",
    "baseWeight": 6,
    "keywords": [
      "artificial",
      "operating",
      "systems"
    ]
  },
  {
    "id": "algorithmic_databases_data_engineering",
    "discipline": "COMPUTER",
    "name": "Algorithmic Databases & Data Engineering",
    "baseWeight": 4,
    "keywords": [
      "algorithmic",
      "databases",
      "data",
      "engineering"
    ]
  },
  {
    "id": "distributed_databases_data_engineering",
    "discipline": "COMPUTER",
    "name": "Distributed Databases & Data Engineering",
    "baseWeight": 4,
    "keywords": [
      "distributed",
      "databases",
      "data",
      "engineering"
    ]
  },
  {
    "id": "parallel_databases_data_engineering",
    "discipline": "COMPUTER",
    "name": "Parallel Databases & Data Engineering",
    "baseWeight": 4,
    "keywords": [
      "parallel",
      "databases",
      "data",
      "engineering"
    ]
  },
  {
    "id": "quantum_databases_data_engineering",
    "discipline": "COMPUTER",
    "name": "Quantum Databases & Data Engineering",
    "baseWeight": 7,
    "keywords": [
      "quantum",
      "databases",
      "data",
      "engineering",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "embedded_databases_data_engineering",
    "discipline": "COMPUTER",
    "name": "Embedded Databases & Data Engineering",
    "baseWeight": 4,
    "keywords": [
      "embedded",
      "databases",
      "data",
      "engineering"
    ]
  },
  {
    "id": "real_time_databases_data_engineering",
    "discipline": "COMPUTER",
    "name": "Real-Time Databases & Data Engineering",
    "baseWeight": 4,
    "keywords": [
      "real",
      "time",
      "databases",
      "data",
      "engineering"
    ]
  },
  {
    "id": "autonomous_databases_data_engineering",
    "discipline": "COMPUTER",
    "name": "Autonomous Databases & Data Engineering",
    "baseWeight": 7,
    "keywords": [
      "autonomous",
      "databases",
      "data",
      "engineering",
      "self-driving",
      "unmanned",
      "agent",
      "uav",
      "autopilot"
    ]
  },
  {
    "id": "robotic_databases_data_engineering",
    "discipline": "COMPUTER",
    "name": "Robotic Databases & Data Engineering",
    "baseWeight": 4,
    "keywords": [
      "robotic",
      "databases",
      "data",
      "engineering",
      "robot",
      "mechatronics",
      "actuator",
      "kinematics",
      "manipulator",
      "servomotor"
    ]
  },
  {
    "id": "cloud_databases_data_engineering",
    "discipline": "COMPUTER",
    "name": "Cloud Databases & Data Engineering",
    "baseWeight": 4,
    "keywords": [
      "cloud",
      "databases",
      "data",
      "engineering"
    ]
  },
  {
    "id": "edge_databases_data_engineering",
    "discipline": "COMPUTER",
    "name": "Edge Databases & Data Engineering",
    "baseWeight": 4,
    "keywords": [
      "edge",
      "databases",
      "data",
      "engineering"
    ]
  },
  {
    "id": "cyber_databases_data_engineering",
    "discipline": "COMPUTER",
    "name": "Cyber Databases & Data Engineering",
    "baseWeight": 4,
    "keywords": [
      "cyber",
      "databases",
      "data",
      "engineering"
    ]
  },
  {
    "id": "cryptographic_databases_data_engineering",
    "discipline": "COMPUTER",
    "name": "Cryptographic Databases & Data Engineering",
    "baseWeight": 4,
    "keywords": [
      "cryptographic",
      "databases",
      "data",
      "engineering"
    ]
  },
  {
    "id": "neural_databases_data_engineering",
    "discipline": "COMPUTER",
    "name": "Neural Databases & Data Engineering",
    "baseWeight": 7,
    "keywords": [
      "neural",
      "databases",
      "data",
      "engineering",
      "neuron",
      "synaptic",
      "brain",
      "network",
      "backpropagation"
    ]
  },
  {
    "id": "deep_learning_databases_data_engineering",
    "discipline": "COMPUTER",
    "name": "Deep Learning Databases & Data Engineering",
    "baseWeight": 4,
    "keywords": [
      "deep",
      "learning",
      "databases",
      "data",
      "engineering"
    ]
  },
  {
    "id": "generative_databases_data_engineering",
    "discipline": "COMPUTER",
    "name": "Generative Databases & Data Engineering",
    "baseWeight": 4,
    "keywords": [
      "generative",
      "databases",
      "data",
      "engineering"
    ]
  },
  {
    "id": "compiler_databases_data_engineering",
    "discipline": "COMPUTER",
    "name": "Compiler Databases & Data Engineering",
    "baseWeight": 4,
    "keywords": [
      "compiler",
      "databases",
      "data",
      "engineering"
    ]
  },
  {
    "id": "database_databases_data_engineering",
    "discipline": "COMPUTER",
    "name": "Database Databases & Data Engineering",
    "baseWeight": 4,
    "keywords": [
      "database",
      "databases",
      "data",
      "engineering"
    ]
  },
  {
    "id": "network_databases_data_engineering",
    "discipline": "COMPUTER",
    "name": "Network Databases & Data Engineering",
    "baseWeight": 4,
    "keywords": [
      "network",
      "databases",
      "data",
      "engineering"
    ]
  },
  {
    "id": "graphics_databases_data_engineering",
    "discipline": "COMPUTER",
    "name": "Graphics Databases & Data Engineering",
    "baseWeight": 4,
    "keywords": [
      "graphics",
      "databases",
      "data",
      "engineering"
    ]
  },
  {
    "id": "vision_databases_data_engineering",
    "discipline": "COMPUTER",
    "name": "Vision Databases & Data Engineering",
    "baseWeight": 4,
    "keywords": [
      "vision",
      "databases",
      "data",
      "engineering"
    ]
  },
  {
    "id": "hci_databases_data_engineering",
    "discipline": "COMPUTER",
    "name": "HCI Databases & Data Engineering",
    "baseWeight": 4,
    "keywords": [
      "databases",
      "data",
      "engineering"
    ]
  },
  {
    "id": "software_databases_data_engineering",
    "discipline": "COMPUTER",
    "name": "Software Databases & Data Engineering",
    "baseWeight": 4,
    "keywords": [
      "software",
      "databases",
      "data",
      "engineering"
    ]
  },
  {
    "id": "information_databases_data_engineering",
    "discipline": "COMPUTER",
    "name": "Information Databases & Data Engineering",
    "baseWeight": 4,
    "keywords": [
      "information",
      "databases",
      "data",
      "engineering"
    ]
  },
  {
    "id": "logical_databases_data_engineering",
    "discipline": "COMPUTER",
    "name": "Logical Databases & Data Engineering",
    "baseWeight": 4,
    "keywords": [
      "logical",
      "databases",
      "data",
      "engineering"
    ]
  },
  {
    "id": "artificial_databases_data_engineering",
    "discipline": "COMPUTER",
    "name": "Artificial Databases & Data Engineering",
    "baseWeight": 4,
    "keywords": [
      "artificial",
      "databases",
      "data",
      "engineering"
    ]
  },
  {
    "id": "algorithmic_computer_networks",
    "discipline": "COMPUTER",
    "name": "Algorithmic Computer Networks",
    "baseWeight": 5,
    "keywords": [
      "algorithmic",
      "computer",
      "networks"
    ]
  },
  {
    "id": "distributed_computer_networks",
    "discipline": "COMPUTER",
    "name": "Distributed Computer Networks",
    "baseWeight": 5,
    "keywords": [
      "distributed",
      "computer",
      "networks"
    ]
  },
  {
    "id": "parallel_computer_networks",
    "discipline": "COMPUTER",
    "name": "Parallel Computer Networks",
    "baseWeight": 5,
    "keywords": [
      "parallel",
      "computer",
      "networks"
    ]
  },
  {
    "id": "quantum_computer_networks",
    "discipline": "COMPUTER",
    "name": "Quantum Computer Networks",
    "baseWeight": 8,
    "keywords": [
      "quantum",
      "computer",
      "networks",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "embedded_computer_networks",
    "discipline": "COMPUTER",
    "name": "Embedded Computer Networks",
    "baseWeight": 5,
    "keywords": [
      "embedded",
      "computer",
      "networks"
    ]
  },
  {
    "id": "real_time_computer_networks",
    "discipline": "COMPUTER",
    "name": "Real-Time Computer Networks",
    "baseWeight": 5,
    "keywords": [
      "real",
      "time",
      "computer",
      "networks"
    ]
  },
  {
    "id": "autonomous_computer_networks",
    "discipline": "COMPUTER",
    "name": "Autonomous Computer Networks",
    "baseWeight": 8,
    "keywords": [
      "autonomous",
      "computer",
      "networks",
      "self-driving",
      "unmanned",
      "agent",
      "uav",
      "autopilot"
    ]
  },
  {
    "id": "robotic_computer_networks",
    "discipline": "COMPUTER",
    "name": "Robotic Computer Networks",
    "baseWeight": 5,
    "keywords": [
      "robotic",
      "computer",
      "networks",
      "robot",
      "mechatronics",
      "actuator",
      "kinematics",
      "manipulator",
      "servomotor"
    ]
  },
  {
    "id": "cloud_computer_networks",
    "discipline": "COMPUTER",
    "name": "Cloud Computer Networks",
    "baseWeight": 5,
    "keywords": [
      "cloud",
      "computer",
      "networks"
    ]
  },
  {
    "id": "edge_computer_networks",
    "discipline": "COMPUTER",
    "name": "Edge Computer Networks",
    "baseWeight": 5,
    "keywords": [
      "edge",
      "computer",
      "networks"
    ]
  },
  {
    "id": "cyber_computer_networks",
    "discipline": "COMPUTER",
    "name": "Cyber Computer Networks",
    "baseWeight": 5,
    "keywords": [
      "cyber",
      "computer",
      "networks"
    ]
  },
  {
    "id": "cryptographic_computer_networks",
    "discipline": "COMPUTER",
    "name": "Cryptographic Computer Networks",
    "baseWeight": 5,
    "keywords": [
      "cryptographic",
      "computer",
      "networks"
    ]
  },
  {
    "id": "neural_computer_networks",
    "discipline": "COMPUTER",
    "name": "Neural Computer Networks",
    "baseWeight": 8,
    "keywords": [
      "neural",
      "computer",
      "networks",
      "neuron",
      "synaptic",
      "brain",
      "network",
      "backpropagation"
    ]
  },
  {
    "id": "deep_learning_computer_networks",
    "discipline": "COMPUTER",
    "name": "Deep Learning Computer Networks",
    "baseWeight": 5,
    "keywords": [
      "deep",
      "learning",
      "computer",
      "networks"
    ]
  },
  {
    "id": "generative_computer_networks",
    "discipline": "COMPUTER",
    "name": "Generative Computer Networks",
    "baseWeight": 5,
    "keywords": [
      "generative",
      "computer",
      "networks"
    ]
  },
  {
    "id": "compiler_computer_networks",
    "discipline": "COMPUTER",
    "name": "Compiler Computer Networks",
    "baseWeight": 5,
    "keywords": [
      "compiler",
      "computer",
      "networks"
    ]
  },
  {
    "id": "database_computer_networks",
    "discipline": "COMPUTER",
    "name": "Database Computer Networks",
    "baseWeight": 5,
    "keywords": [
      "database",
      "computer",
      "networks"
    ]
  },
  {
    "id": "network_computer_networks",
    "discipline": "COMPUTER",
    "name": "Network Computer Networks",
    "baseWeight": 5,
    "keywords": [
      "network",
      "computer",
      "networks"
    ]
  },
  {
    "id": "graphics_computer_networks",
    "discipline": "COMPUTER",
    "name": "Graphics Computer Networks",
    "baseWeight": 5,
    "keywords": [
      "graphics",
      "computer",
      "networks"
    ]
  },
  {
    "id": "vision_computer_networks",
    "discipline": "COMPUTER",
    "name": "Vision Computer Networks",
    "baseWeight": 5,
    "keywords": [
      "vision",
      "computer",
      "networks"
    ]
  },
  {
    "id": "hci_computer_networks",
    "discipline": "COMPUTER",
    "name": "HCI Computer Networks",
    "baseWeight": 5,
    "keywords": [
      "computer",
      "networks"
    ]
  },
  {
    "id": "software_computer_networks",
    "discipline": "COMPUTER",
    "name": "Software Computer Networks",
    "baseWeight": 5,
    "keywords": [
      "software",
      "computer",
      "networks"
    ]
  },
  {
    "id": "information_computer_networks",
    "discipline": "COMPUTER",
    "name": "Information Computer Networks",
    "baseWeight": 5,
    "keywords": [
      "information",
      "computer",
      "networks"
    ]
  },
  {
    "id": "logical_computer_networks",
    "discipline": "COMPUTER",
    "name": "Logical Computer Networks",
    "baseWeight": 5,
    "keywords": [
      "logical",
      "computer",
      "networks"
    ]
  },
  {
    "id": "artificial_computer_networks",
    "discipline": "COMPUTER",
    "name": "Artificial Computer Networks",
    "baseWeight": 5,
    "keywords": [
      "artificial",
      "computer",
      "networks"
    ]
  },
  {
    "id": "algorithmic_cybersecurity_cryptography",
    "discipline": "COMPUTER",
    "name": "Algorithmic Cybersecurity & Cryptography",
    "baseWeight": 6,
    "keywords": [
      "algorithmic",
      "cybersecurity",
      "cryptography"
    ]
  },
  {
    "id": "distributed_cybersecurity_cryptography",
    "discipline": "COMPUTER",
    "name": "Distributed Cybersecurity & Cryptography",
    "baseWeight": 6,
    "keywords": [
      "distributed",
      "cybersecurity",
      "cryptography"
    ]
  },
  {
    "id": "parallel_cybersecurity_cryptography",
    "discipline": "COMPUTER",
    "name": "Parallel Cybersecurity & Cryptography",
    "baseWeight": 6,
    "keywords": [
      "parallel",
      "cybersecurity",
      "cryptography"
    ]
  },
  {
    "id": "quantum_cybersecurity_cryptography",
    "discipline": "COMPUTER",
    "name": "Quantum Cybersecurity & Cryptography",
    "baseWeight": 9,
    "keywords": [
      "quantum",
      "cybersecurity",
      "cryptography",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "embedded_cybersecurity_cryptography",
    "discipline": "COMPUTER",
    "name": "Embedded Cybersecurity & Cryptography",
    "baseWeight": 6,
    "keywords": [
      "embedded",
      "cybersecurity",
      "cryptography"
    ]
  },
  {
    "id": "real_time_cybersecurity_cryptography",
    "discipline": "COMPUTER",
    "name": "Real-Time Cybersecurity & Cryptography",
    "baseWeight": 6,
    "keywords": [
      "real",
      "time",
      "cybersecurity",
      "cryptography"
    ]
  },
  {
    "id": "autonomous_cybersecurity_cryptography",
    "discipline": "COMPUTER",
    "name": "Autonomous Cybersecurity & Cryptography",
    "baseWeight": 9,
    "keywords": [
      "autonomous",
      "cybersecurity",
      "cryptography",
      "self-driving",
      "unmanned",
      "agent",
      "uav",
      "autopilot"
    ]
  },
  {
    "id": "robotic_cybersecurity_cryptography",
    "discipline": "COMPUTER",
    "name": "Robotic Cybersecurity & Cryptography",
    "baseWeight": 6,
    "keywords": [
      "robotic",
      "cybersecurity",
      "cryptography",
      "robot",
      "mechatronics",
      "actuator",
      "kinematics",
      "manipulator",
      "servomotor"
    ]
  },
  {
    "id": "cloud_cybersecurity_cryptography",
    "discipline": "COMPUTER",
    "name": "Cloud Cybersecurity & Cryptography",
    "baseWeight": 6,
    "keywords": [
      "cloud",
      "cybersecurity",
      "cryptography"
    ]
  },
  {
    "id": "edge_cybersecurity_cryptography",
    "discipline": "COMPUTER",
    "name": "Edge Cybersecurity & Cryptography",
    "baseWeight": 6,
    "keywords": [
      "edge",
      "cybersecurity",
      "cryptography"
    ]
  },
  {
    "id": "cyber_cybersecurity_cryptography",
    "discipline": "COMPUTER",
    "name": "Cyber Cybersecurity & Cryptography",
    "baseWeight": 6,
    "keywords": [
      "cyber",
      "cybersecurity",
      "cryptography"
    ]
  },
  {
    "id": "cryptographic_cybersecurity_cryptography",
    "discipline": "COMPUTER",
    "name": "Cryptographic Cybersecurity & Cryptography",
    "baseWeight": 6,
    "keywords": [
      "cryptographic",
      "cybersecurity",
      "cryptography"
    ]
  },
  {
    "id": "neural_cybersecurity_cryptography",
    "discipline": "COMPUTER",
    "name": "Neural Cybersecurity & Cryptography",
    "baseWeight": 9,
    "keywords": [
      "neural",
      "cybersecurity",
      "cryptography",
      "neuron",
      "synaptic",
      "brain",
      "network",
      "backpropagation"
    ]
  },
  {
    "id": "deep_learning_cybersecurity_cryptography",
    "discipline": "COMPUTER",
    "name": "Deep Learning Cybersecurity & Cryptography",
    "baseWeight": 6,
    "keywords": [
      "deep",
      "learning",
      "cybersecurity",
      "cryptography"
    ]
  },
  {
    "id": "generative_cybersecurity_cryptography",
    "discipline": "COMPUTER",
    "name": "Generative Cybersecurity & Cryptography",
    "baseWeight": 6,
    "keywords": [
      "generative",
      "cybersecurity",
      "cryptography"
    ]
  },
  {
    "id": "compiler_cybersecurity_cryptography",
    "discipline": "COMPUTER",
    "name": "Compiler Cybersecurity & Cryptography",
    "baseWeight": 6,
    "keywords": [
      "compiler",
      "cybersecurity",
      "cryptography"
    ]
  },
  {
    "id": "database_cybersecurity_cryptography",
    "discipline": "COMPUTER",
    "name": "Database Cybersecurity & Cryptography",
    "baseWeight": 6,
    "keywords": [
      "database",
      "cybersecurity",
      "cryptography"
    ]
  },
  {
    "id": "network_cybersecurity_cryptography",
    "discipline": "COMPUTER",
    "name": "Network Cybersecurity & Cryptography",
    "baseWeight": 6,
    "keywords": [
      "network",
      "cybersecurity",
      "cryptography"
    ]
  },
  {
    "id": "graphics_cybersecurity_cryptography",
    "discipline": "COMPUTER",
    "name": "Graphics Cybersecurity & Cryptography",
    "baseWeight": 6,
    "keywords": [
      "graphics",
      "cybersecurity",
      "cryptography"
    ]
  },
  {
    "id": "vision_cybersecurity_cryptography",
    "discipline": "COMPUTER",
    "name": "Vision Cybersecurity & Cryptography",
    "baseWeight": 6,
    "keywords": [
      "vision",
      "cybersecurity",
      "cryptography"
    ]
  },
  {
    "id": "hci_cybersecurity_cryptography",
    "discipline": "COMPUTER",
    "name": "HCI Cybersecurity & Cryptography",
    "baseWeight": 6,
    "keywords": [
      "cybersecurity",
      "cryptography"
    ]
  },
  {
    "id": "software_cybersecurity_cryptography",
    "discipline": "COMPUTER",
    "name": "Software Cybersecurity & Cryptography",
    "baseWeight": 6,
    "keywords": [
      "software",
      "cybersecurity",
      "cryptography"
    ]
  },
  {
    "id": "information_cybersecurity_cryptography",
    "discipline": "COMPUTER",
    "name": "Information Cybersecurity & Cryptography",
    "baseWeight": 6,
    "keywords": [
      "information",
      "cybersecurity",
      "cryptography"
    ]
  },
  {
    "id": "logical_cybersecurity_cryptography",
    "discipline": "COMPUTER",
    "name": "Logical Cybersecurity & Cryptography",
    "baseWeight": 6,
    "keywords": [
      "logical",
      "cybersecurity",
      "cryptography"
    ]
  },
  {
    "id": "artificial_cybersecurity_cryptography",
    "discipline": "COMPUTER",
    "name": "Artificial Cybersecurity & Cryptography",
    "baseWeight": 6,
    "keywords": [
      "artificial",
      "cybersecurity",
      "cryptography"
    ]
  },
  {
    "id": "algorithmic_artificial_intelligence_machine_learning",
    "discipline": "COMPUTER",
    "name": "Algorithmic Artificial Intelligence & Machine Learning",
    "baseWeight": 4,
    "keywords": [
      "algorithmic",
      "artificial",
      "intelligence",
      "machine",
      "learning"
    ]
  },
  {
    "id": "distributed_artificial_intelligence_machine_learning",
    "discipline": "COMPUTER",
    "name": "Distributed Artificial Intelligence & Machine Learning",
    "baseWeight": 4,
    "keywords": [
      "distributed",
      "artificial",
      "intelligence",
      "machine",
      "learning"
    ]
  },
  {
    "id": "parallel_artificial_intelligence_machine_learning",
    "discipline": "COMPUTER",
    "name": "Parallel Artificial Intelligence & Machine Learning",
    "baseWeight": 4,
    "keywords": [
      "parallel",
      "artificial",
      "intelligence",
      "machine",
      "learning"
    ]
  },
  {
    "id": "quantum_artificial_intelligence_machine_learning",
    "discipline": "COMPUTER",
    "name": "Quantum Artificial Intelligence & Machine Learning",
    "baseWeight": 7,
    "keywords": [
      "quantum",
      "artificial",
      "intelligence",
      "machine",
      "learning",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "embedded_artificial_intelligence_machine_learning",
    "discipline": "COMPUTER",
    "name": "Embedded Artificial Intelligence & Machine Learning",
    "baseWeight": 4,
    "keywords": [
      "embedded",
      "artificial",
      "intelligence",
      "machine",
      "learning"
    ]
  },
  {
    "id": "real_time_artificial_intelligence_machine_learning",
    "discipline": "COMPUTER",
    "name": "Real-Time Artificial Intelligence & Machine Learning",
    "baseWeight": 4,
    "keywords": [
      "real",
      "time",
      "artificial",
      "intelligence",
      "machine",
      "learning"
    ]
  },
  {
    "id": "autonomous_artificial_intelligence_machine_learning",
    "discipline": "COMPUTER",
    "name": "Autonomous Artificial Intelligence & Machine Learning",
    "baseWeight": 7,
    "keywords": [
      "autonomous",
      "artificial",
      "intelligence",
      "machine",
      "learning",
      "self-driving",
      "unmanned",
      "agent",
      "uav",
      "autopilot"
    ]
  },
  {
    "id": "robotic_artificial_intelligence_machine_learning",
    "discipline": "COMPUTER",
    "name": "Robotic Artificial Intelligence & Machine Learning",
    "baseWeight": 4,
    "keywords": [
      "robotic",
      "artificial",
      "intelligence",
      "machine",
      "learning",
      "robot",
      "mechatronics",
      "actuator",
      "kinematics",
      "manipulator",
      "servomotor"
    ]
  },
  {
    "id": "cloud_artificial_intelligence_machine_learning",
    "discipline": "COMPUTER",
    "name": "Cloud Artificial Intelligence & Machine Learning",
    "baseWeight": 4,
    "keywords": [
      "cloud",
      "artificial",
      "intelligence",
      "machine",
      "learning"
    ]
  },
  {
    "id": "edge_artificial_intelligence_machine_learning",
    "discipline": "COMPUTER",
    "name": "Edge Artificial Intelligence & Machine Learning",
    "baseWeight": 4,
    "keywords": [
      "edge",
      "artificial",
      "intelligence",
      "machine",
      "learning"
    ]
  },
  {
    "id": "cyber_artificial_intelligence_machine_learning",
    "discipline": "COMPUTER",
    "name": "Cyber Artificial Intelligence & Machine Learning",
    "baseWeight": 4,
    "keywords": [
      "cyber",
      "artificial",
      "intelligence",
      "machine",
      "learning"
    ]
  },
  {
    "id": "cryptographic_artificial_intelligence_machine_learning",
    "discipline": "COMPUTER",
    "name": "Cryptographic Artificial Intelligence & Machine Learning",
    "baseWeight": 4,
    "keywords": [
      "cryptographic",
      "artificial",
      "intelligence",
      "machine",
      "learning"
    ]
  },
  {
    "id": "neural_artificial_intelligence_machine_learning",
    "discipline": "COMPUTER",
    "name": "Neural Artificial Intelligence & Machine Learning",
    "baseWeight": 7,
    "keywords": [
      "neural",
      "artificial",
      "intelligence",
      "machine",
      "learning",
      "neuron",
      "synaptic",
      "brain",
      "network",
      "backpropagation"
    ]
  },
  {
    "id": "deep_learning_artificial_intelligence_machine",
    "discipline": "COMPUTER",
    "name": "Deep Learning Artificial Intelligence & Machine",
    "baseWeight": 4,
    "keywords": [
      "deep",
      "learning",
      "artificial",
      "intelligence",
      "machine"
    ]
  },
  {
    "id": "generative_artificial_intelligence_machine_learning",
    "discipline": "COMPUTER",
    "name": "Generative Artificial Intelligence & Machine Learning",
    "baseWeight": 4,
    "keywords": [
      "generative",
      "artificial",
      "intelligence",
      "machine",
      "learning"
    ]
  },
  {
    "id": "compiler_artificial_intelligence_machine_learning",
    "discipline": "COMPUTER",
    "name": "Compiler Artificial Intelligence & Machine Learning",
    "baseWeight": 4,
    "keywords": [
      "compiler",
      "artificial",
      "intelligence",
      "machine",
      "learning"
    ]
  },
  {
    "id": "database_artificial_intelligence_machine_learning",
    "discipline": "COMPUTER",
    "name": "Database Artificial Intelligence & Machine Learning",
    "baseWeight": 4,
    "keywords": [
      "database",
      "artificial",
      "intelligence",
      "machine",
      "learning"
    ]
  },
  {
    "id": "network_artificial_intelligence_machine_learning",
    "discipline": "COMPUTER",
    "name": "Network Artificial Intelligence & Machine Learning",
    "baseWeight": 4,
    "keywords": [
      "network",
      "artificial",
      "intelligence",
      "machine",
      "learning"
    ]
  },
  {
    "id": "graphics_artificial_intelligence_machine_learning",
    "discipline": "COMPUTER",
    "name": "Graphics Artificial Intelligence & Machine Learning",
    "baseWeight": 4,
    "keywords": [
      "graphics",
      "artificial",
      "intelligence",
      "machine",
      "learning"
    ]
  },
  {
    "id": "vision_artificial_intelligence_machine_learning",
    "discipline": "COMPUTER",
    "name": "Vision Artificial Intelligence & Machine Learning",
    "baseWeight": 4,
    "keywords": [
      "vision",
      "artificial",
      "intelligence",
      "machine",
      "learning"
    ]
  },
  {
    "id": "hci_artificial_intelligence_machine_learning",
    "discipline": "COMPUTER",
    "name": "HCI Artificial Intelligence & Machine Learning",
    "baseWeight": 4,
    "keywords": [
      "artificial",
      "intelligence",
      "machine",
      "learning"
    ]
  },
  {
    "id": "software_artificial_intelligence_machine_learning",
    "discipline": "COMPUTER",
    "name": "Software Artificial Intelligence & Machine Learning",
    "baseWeight": 4,
    "keywords": [
      "software",
      "artificial",
      "intelligence",
      "machine",
      "learning"
    ]
  },
  {
    "id": "information_artificial_intelligence_machine_learning",
    "discipline": "COMPUTER",
    "name": "Information Artificial Intelligence & Machine Learning",
    "baseWeight": 4,
    "keywords": [
      "information",
      "artificial",
      "intelligence",
      "machine",
      "learning"
    ]
  },
  {
    "id": "logical_artificial_intelligence_machine_learning",
    "discipline": "COMPUTER",
    "name": "Logical Artificial Intelligence & Machine Learning",
    "baseWeight": 4,
    "keywords": [
      "logical",
      "artificial",
      "intelligence",
      "machine",
      "learning"
    ]
  },
  {
    "id": "artificial_intelligence_machine_learning",
    "discipline": "COMPUTER",
    "name": "Artificial Intelligence & Machine Learning",
    "baseWeight": 4,
    "keywords": [
      "artificial",
      "intelligence",
      "machine",
      "learning"
    ]
  },
  {
    "id": "algorithmic_computer_vision_graphics",
    "discipline": "COMPUTER",
    "name": "Algorithmic Computer Vision & Graphics",
    "baseWeight": 5,
    "keywords": [
      "algorithmic",
      "computer",
      "vision",
      "graphics"
    ]
  },
  {
    "id": "distributed_computer_vision_graphics",
    "discipline": "COMPUTER",
    "name": "Distributed Computer Vision & Graphics",
    "baseWeight": 5,
    "keywords": [
      "distributed",
      "computer",
      "vision",
      "graphics"
    ]
  },
  {
    "id": "parallel_computer_vision_graphics",
    "discipline": "COMPUTER",
    "name": "Parallel Computer Vision & Graphics",
    "baseWeight": 5,
    "keywords": [
      "parallel",
      "computer",
      "vision",
      "graphics"
    ]
  },
  {
    "id": "quantum_computer_vision_graphics",
    "discipline": "COMPUTER",
    "name": "Quantum Computer Vision & Graphics",
    "baseWeight": 8,
    "keywords": [
      "quantum",
      "computer",
      "vision",
      "graphics",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "embedded_computer_vision_graphics",
    "discipline": "COMPUTER",
    "name": "Embedded Computer Vision & Graphics",
    "baseWeight": 5,
    "keywords": [
      "embedded",
      "computer",
      "vision",
      "graphics"
    ]
  },
  {
    "id": "real_time_computer_vision_graphics",
    "discipline": "COMPUTER",
    "name": "Real-Time Computer Vision & Graphics",
    "baseWeight": 5,
    "keywords": [
      "real",
      "time",
      "computer",
      "vision",
      "graphics"
    ]
  },
  {
    "id": "autonomous_computer_vision_graphics",
    "discipline": "COMPUTER",
    "name": "Autonomous Computer Vision & Graphics",
    "baseWeight": 8,
    "keywords": [
      "autonomous",
      "computer",
      "vision",
      "graphics",
      "self-driving",
      "unmanned",
      "agent",
      "uav",
      "autopilot"
    ]
  },
  {
    "id": "robotic_computer_vision_graphics",
    "discipline": "COMPUTER",
    "name": "Robotic Computer Vision & Graphics",
    "baseWeight": 5,
    "keywords": [
      "robotic",
      "computer",
      "vision",
      "graphics",
      "robot",
      "mechatronics",
      "actuator",
      "kinematics",
      "manipulator",
      "servomotor"
    ]
  },
  {
    "id": "cloud_computer_vision_graphics",
    "discipline": "COMPUTER",
    "name": "Cloud Computer Vision & Graphics",
    "baseWeight": 5,
    "keywords": [
      "cloud",
      "computer",
      "vision",
      "graphics"
    ]
  },
  {
    "id": "edge_computer_vision_graphics",
    "discipline": "COMPUTER",
    "name": "Edge Computer Vision & Graphics",
    "baseWeight": 5,
    "keywords": [
      "edge",
      "computer",
      "vision",
      "graphics"
    ]
  },
  {
    "id": "cyber_computer_vision_graphics",
    "discipline": "COMPUTER",
    "name": "Cyber Computer Vision & Graphics",
    "baseWeight": 5,
    "keywords": [
      "cyber",
      "computer",
      "vision",
      "graphics"
    ]
  },
  {
    "id": "cryptographic_computer_vision_graphics",
    "discipline": "COMPUTER",
    "name": "Cryptographic Computer Vision & Graphics",
    "baseWeight": 5,
    "keywords": [
      "cryptographic",
      "computer",
      "vision",
      "graphics"
    ]
  },
  {
    "id": "neural_computer_vision_graphics",
    "discipline": "COMPUTER",
    "name": "Neural Computer Vision & Graphics",
    "baseWeight": 8,
    "keywords": [
      "neural",
      "computer",
      "vision",
      "graphics",
      "neuron",
      "synaptic",
      "brain",
      "network",
      "backpropagation"
    ]
  },
  {
    "id": "deep_learning_computer_vision_graphics",
    "discipline": "COMPUTER",
    "name": "Deep Learning Computer Vision & Graphics",
    "baseWeight": 5,
    "keywords": [
      "deep",
      "learning",
      "computer",
      "vision",
      "graphics"
    ]
  },
  {
    "id": "generative_computer_vision_graphics",
    "discipline": "COMPUTER",
    "name": "Generative Computer Vision & Graphics",
    "baseWeight": 5,
    "keywords": [
      "generative",
      "computer",
      "vision",
      "graphics"
    ]
  },
  {
    "id": "compiler_computer_vision_graphics",
    "discipline": "COMPUTER",
    "name": "Compiler Computer Vision & Graphics",
    "baseWeight": 5,
    "keywords": [
      "compiler",
      "computer",
      "vision",
      "graphics"
    ]
  },
  {
    "id": "database_computer_vision_graphics",
    "discipline": "COMPUTER",
    "name": "Database Computer Vision & Graphics",
    "baseWeight": 5,
    "keywords": [
      "database",
      "computer",
      "vision",
      "graphics"
    ]
  },
  {
    "id": "network_computer_vision_graphics",
    "discipline": "COMPUTER",
    "name": "Network Computer Vision & Graphics",
    "baseWeight": 5,
    "keywords": [
      "network",
      "computer",
      "vision",
      "graphics"
    ]
  },
  {
    "id": "graphics_computer_vision_",
    "discipline": "COMPUTER",
    "name": "Graphics Computer Vision &",
    "baseWeight": 5,
    "keywords": [
      "graphics",
      "computer",
      "vision"
    ]
  },
  {
    "id": "vision_computer_graphics",
    "discipline": "COMPUTER",
    "name": "Vision Computer & Graphics",
    "baseWeight": 5,
    "keywords": [
      "vision",
      "computer",
      "graphics"
    ]
  },
  {
    "id": "hci_computer_vision_graphics",
    "discipline": "COMPUTER",
    "name": "HCI Computer Vision & Graphics",
    "baseWeight": 5,
    "keywords": [
      "computer",
      "vision",
      "graphics"
    ]
  },
  {
    "id": "software_computer_vision_graphics",
    "discipline": "COMPUTER",
    "name": "Software Computer Vision & Graphics",
    "baseWeight": 5,
    "keywords": [
      "software",
      "computer",
      "vision",
      "graphics"
    ]
  },
  {
    "id": "information_computer_vision_graphics",
    "discipline": "COMPUTER",
    "name": "Information Computer Vision & Graphics",
    "baseWeight": 5,
    "keywords": [
      "information",
      "computer",
      "vision",
      "graphics"
    ]
  },
  {
    "id": "logical_computer_vision_graphics",
    "discipline": "COMPUTER",
    "name": "Logical Computer Vision & Graphics",
    "baseWeight": 5,
    "keywords": [
      "logical",
      "computer",
      "vision",
      "graphics"
    ]
  },
  {
    "id": "artificial_computer_vision_graphics",
    "discipline": "COMPUTER",
    "name": "Artificial Computer Vision & Graphics",
    "baseWeight": 5,
    "keywords": [
      "artificial",
      "computer",
      "vision",
      "graphics"
    ]
  },
  {
    "id": "algorithmic_software_engineering_hci",
    "discipline": "COMPUTER",
    "name": "Algorithmic Software Engineering & HCI",
    "baseWeight": 6,
    "keywords": [
      "algorithmic",
      "software",
      "engineering"
    ]
  },
  {
    "id": "distributed_software_engineering_hci",
    "discipline": "COMPUTER",
    "name": "Distributed Software Engineering & HCI",
    "baseWeight": 6,
    "keywords": [
      "distributed",
      "software",
      "engineering"
    ]
  },
  {
    "id": "parallel_software_engineering_hci",
    "discipline": "COMPUTER",
    "name": "Parallel Software Engineering & HCI",
    "baseWeight": 6,
    "keywords": [
      "parallel",
      "software",
      "engineering"
    ]
  },
  {
    "id": "quantum_software_engineering_hci",
    "discipline": "COMPUTER",
    "name": "Quantum Software Engineering & HCI",
    "baseWeight": 9,
    "keywords": [
      "quantum",
      "software",
      "engineering",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "embedded_software_engineering_hci",
    "discipline": "COMPUTER",
    "name": "Embedded Software Engineering & HCI",
    "baseWeight": 6,
    "keywords": [
      "embedded",
      "software",
      "engineering"
    ]
  },
  {
    "id": "real_time_software_engineering_hci",
    "discipline": "COMPUTER",
    "name": "Real-Time Software Engineering & HCI",
    "baseWeight": 6,
    "keywords": [
      "real",
      "time",
      "software",
      "engineering"
    ]
  },
  {
    "id": "autonomous_software_engineering_hci",
    "discipline": "COMPUTER",
    "name": "Autonomous Software Engineering & HCI",
    "baseWeight": 9,
    "keywords": [
      "autonomous",
      "software",
      "engineering",
      "self-driving",
      "unmanned",
      "agent",
      "uav",
      "autopilot"
    ]
  },
  {
    "id": "robotic_software_engineering_hci",
    "discipline": "COMPUTER",
    "name": "Robotic Software Engineering & HCI",
    "baseWeight": 6,
    "keywords": [
      "robotic",
      "software",
      "engineering",
      "robot",
      "mechatronics",
      "actuator",
      "kinematics",
      "manipulator",
      "servomotor"
    ]
  },
  {
    "id": "cloud_software_engineering_hci",
    "discipline": "COMPUTER",
    "name": "Cloud Software Engineering & HCI",
    "baseWeight": 6,
    "keywords": [
      "cloud",
      "software",
      "engineering"
    ]
  },
  {
    "id": "edge_software_engineering_hci",
    "discipline": "COMPUTER",
    "name": "Edge Software Engineering & HCI",
    "baseWeight": 6,
    "keywords": [
      "edge",
      "software",
      "engineering"
    ]
  },
  {
    "id": "cyber_software_engineering_hci",
    "discipline": "COMPUTER",
    "name": "Cyber Software Engineering & HCI",
    "baseWeight": 6,
    "keywords": [
      "cyber",
      "software",
      "engineering"
    ]
  },
  {
    "id": "cryptographic_software_engineering_hci",
    "discipline": "COMPUTER",
    "name": "Cryptographic Software Engineering & HCI",
    "baseWeight": 6,
    "keywords": [
      "cryptographic",
      "software",
      "engineering"
    ]
  },
  {
    "id": "neural_software_engineering_hci",
    "discipline": "COMPUTER",
    "name": "Neural Software Engineering & HCI",
    "baseWeight": 9,
    "keywords": [
      "neural",
      "software",
      "engineering",
      "neuron",
      "synaptic",
      "brain",
      "network",
      "backpropagation"
    ]
  },
  {
    "id": "deep_learning_software_engineering_hci",
    "discipline": "COMPUTER",
    "name": "Deep Learning Software Engineering & HCI",
    "baseWeight": 6,
    "keywords": [
      "deep",
      "learning",
      "software",
      "engineering"
    ]
  },
  {
    "id": "generative_software_engineering_hci",
    "discipline": "COMPUTER",
    "name": "Generative Software Engineering & HCI",
    "baseWeight": 6,
    "keywords": [
      "generative",
      "software",
      "engineering"
    ]
  },
  {
    "id": "compiler_software_engineering_hci",
    "discipline": "COMPUTER",
    "name": "Compiler Software Engineering & HCI",
    "baseWeight": 6,
    "keywords": [
      "compiler",
      "software",
      "engineering"
    ]
  },
  {
    "id": "database_software_engineering_hci",
    "discipline": "COMPUTER",
    "name": "Database Software Engineering & HCI",
    "baseWeight": 6,
    "keywords": [
      "database",
      "software",
      "engineering"
    ]
  },
  {
    "id": "network_software_engineering_hci",
    "discipline": "COMPUTER",
    "name": "Network Software Engineering & HCI",
    "baseWeight": 6,
    "keywords": [
      "network",
      "software",
      "engineering"
    ]
  },
  {
    "id": "graphics_software_engineering_hci",
    "discipline": "COMPUTER",
    "name": "Graphics Software Engineering & HCI",
    "baseWeight": 6,
    "keywords": [
      "graphics",
      "software",
      "engineering"
    ]
  },
  {
    "id": "vision_software_engineering_hci",
    "discipline": "COMPUTER",
    "name": "Vision Software Engineering & HCI",
    "baseWeight": 6,
    "keywords": [
      "vision",
      "software",
      "engineering"
    ]
  },
  {
    "id": "hci_software_engineering_",
    "discipline": "COMPUTER",
    "name": "HCI Software Engineering &",
    "baseWeight": 6,
    "keywords": [
      "software",
      "engineering"
    ]
  },
  {
    "id": "software_engineering_hci",
    "discipline": "COMPUTER",
    "name": "Software Engineering & HCI",
    "baseWeight": 6,
    "keywords": [
      "software",
      "engineering"
    ]
  },
  {
    "id": "information_software_engineering_hci",
    "discipline": "COMPUTER",
    "name": "Information Software Engineering & HCI",
    "baseWeight": 6,
    "keywords": [
      "information",
      "software",
      "engineering"
    ]
  },
  {
    "id": "logical_software_engineering_hci",
    "discipline": "COMPUTER",
    "name": "Logical Software Engineering & HCI",
    "baseWeight": 6,
    "keywords": [
      "logical",
      "software",
      "engineering"
    ]
  },
  {
    "id": "artificial_software_engineering_hci",
    "discipline": "COMPUTER",
    "name": "Artificial Software Engineering & HCI",
    "baseWeight": 6,
    "keywords": [
      "artificial",
      "software",
      "engineering"
    ]
  },
  {
    "id": "algorithmic_quantum_computing",
    "discipline": "COMPUTER",
    "name": "Algorithmic Quantum Computing",
    "baseWeight": 4,
    "keywords": [
      "algorithmic",
      "quantum",
      "computing",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "distributed_quantum_computing",
    "discipline": "COMPUTER",
    "name": "Distributed Quantum Computing",
    "baseWeight": 4,
    "keywords": [
      "distributed",
      "quantum",
      "computing",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "parallel_quantum_computing",
    "discipline": "COMPUTER",
    "name": "Parallel Quantum Computing",
    "baseWeight": 4,
    "keywords": [
      "parallel",
      "quantum",
      "computing",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "quantum_computing",
    "discipline": "COMPUTER",
    "name": "Quantum Computing",
    "baseWeight": 7,
    "keywords": [
      "quantum",
      "computing",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "embedded_quantum_computing",
    "discipline": "COMPUTER",
    "name": "Embedded Quantum Computing",
    "baseWeight": 4,
    "keywords": [
      "embedded",
      "quantum",
      "computing",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "real_time_quantum_computing",
    "discipline": "COMPUTER",
    "name": "Real-Time Quantum Computing",
    "baseWeight": 4,
    "keywords": [
      "real",
      "time",
      "quantum",
      "computing",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "autonomous_quantum_computing",
    "discipline": "COMPUTER",
    "name": "Autonomous Quantum Computing",
    "baseWeight": 7,
    "keywords": [
      "autonomous",
      "quantum",
      "computing",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence",
      "self-driving",
      "unmanned",
      "agent",
      "uav",
      "autopilot"
    ]
  },
  {
    "id": "robotic_quantum_computing",
    "discipline": "COMPUTER",
    "name": "Robotic Quantum Computing",
    "baseWeight": 4,
    "keywords": [
      "robotic",
      "quantum",
      "computing",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence",
      "robot",
      "mechatronics",
      "actuator",
      "kinematics",
      "manipulator",
      "servomotor"
    ]
  },
  {
    "id": "cloud_quantum_computing",
    "discipline": "COMPUTER",
    "name": "Cloud Quantum Computing",
    "baseWeight": 4,
    "keywords": [
      "cloud",
      "quantum",
      "computing",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "edge_quantum_computing",
    "discipline": "COMPUTER",
    "name": "Edge Quantum Computing",
    "baseWeight": 4,
    "keywords": [
      "edge",
      "quantum",
      "computing",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "cyber_quantum_computing",
    "discipline": "COMPUTER",
    "name": "Cyber Quantum Computing",
    "baseWeight": 4,
    "keywords": [
      "cyber",
      "quantum",
      "computing",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "cryptographic_quantum_computing",
    "discipline": "COMPUTER",
    "name": "Cryptographic Quantum Computing",
    "baseWeight": 4,
    "keywords": [
      "cryptographic",
      "quantum",
      "computing",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "neural_quantum_computing",
    "discipline": "COMPUTER",
    "name": "Neural Quantum Computing",
    "baseWeight": 7,
    "keywords": [
      "neural",
      "quantum",
      "computing",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence",
      "neuron",
      "synaptic",
      "brain",
      "network",
      "backpropagation"
    ]
  },
  {
    "id": "deep_learning_quantum_computing",
    "discipline": "COMPUTER",
    "name": "Deep Learning Quantum Computing",
    "baseWeight": 4,
    "keywords": [
      "deep",
      "learning",
      "quantum",
      "computing",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "generative_quantum_computing",
    "discipline": "COMPUTER",
    "name": "Generative Quantum Computing",
    "baseWeight": 4,
    "keywords": [
      "generative",
      "quantum",
      "computing",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "compiler_quantum_computing",
    "discipline": "COMPUTER",
    "name": "Compiler Quantum Computing",
    "baseWeight": 4,
    "keywords": [
      "compiler",
      "quantum",
      "computing",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "database_quantum_computing",
    "discipline": "COMPUTER",
    "name": "Database Quantum Computing",
    "baseWeight": 4,
    "keywords": [
      "database",
      "quantum",
      "computing",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "network_quantum_computing",
    "discipline": "COMPUTER",
    "name": "Network Quantum Computing",
    "baseWeight": 4,
    "keywords": [
      "network",
      "quantum",
      "computing",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "graphics_quantum_computing",
    "discipline": "COMPUTER",
    "name": "Graphics Quantum Computing",
    "baseWeight": 4,
    "keywords": [
      "graphics",
      "quantum",
      "computing",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "vision_quantum_computing",
    "discipline": "COMPUTER",
    "name": "Vision Quantum Computing",
    "baseWeight": 4,
    "keywords": [
      "vision",
      "quantum",
      "computing",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "hci_quantum_computing",
    "discipline": "COMPUTER",
    "name": "HCI Quantum Computing",
    "baseWeight": 4,
    "keywords": [
      "quantum",
      "computing",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "software_quantum_computing",
    "discipline": "COMPUTER",
    "name": "Software Quantum Computing",
    "baseWeight": 4,
    "keywords": [
      "software",
      "quantum",
      "computing",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "information_quantum_computing",
    "discipline": "COMPUTER",
    "name": "Information Quantum Computing",
    "baseWeight": 4,
    "keywords": [
      "information",
      "quantum",
      "computing",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "logical_quantum_computing",
    "discipline": "COMPUTER",
    "name": "Logical Quantum Computing",
    "baseWeight": 4,
    "keywords": [
      "logical",
      "quantum",
      "computing",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "artificial_quantum_computing",
    "discipline": "COMPUTER",
    "name": "Artificial Quantum Computing",
    "baseWeight": 4,
    "keywords": [
      "artificial",
      "quantum",
      "computing",
      "qubit",
      "entanglement",
      "superposition",
      "wavefunction",
      "decoherence"
    ]
  },
  {
    "id": "mechanical_engineering",
    "discipline": "ENGINEERING",
    "name": "Mechanical Engineering",
    "baseWeight": 4,
    "keywords": [
      "mechanical",
      "engineering"
    ]
  },
  {
    "id": "electrical_mechanical_engineering",
    "discipline": "ENGINEERING",
    "name": "Electrical Mechanical Engineering",
    "baseWeight": 4,
    "keywords": [
      "electrical",
      "mechanical",
      "engineering"
    ]
  },
  {
    "id": "civil_mechanical_engineering",
    "discipline": "ENGINEERING",
    "name": "Civil Mechanical Engineering",
    "baseWeight": 4,
    "keywords": [
      "civil",
      "mechanical",
      "engineering"
    ]
  },
  {
    "id": "chemical_mechanical_engineering",
    "discipline": "ENGINEERING",
    "name": "Chemical Mechanical Engineering",
    "baseWeight": 4,
    "keywords": [
      "chemical",
      "mechanical",
      "engineering"
    ]
  },
  {
    "id": "aerospace_mechanical_engineering",
    "discipline": "ENGINEERING",
    "name": "Aerospace Mechanical Engineering",
    "baseWeight": 5,
    "keywords": [
      "aerospace",
      "mechanical",
      "engineering"
    ]
  },
  {
    "id": "materials_mechanical_engineering",
    "discipline": "ENGINEERING",
    "name": "Materials Mechanical Engineering",
    "baseWeight": 4,
    "keywords": [
      "materials",
      "mechanical",
      "engineering"
    ]
  },
  {
    "id": "biomedical_mechanical_engineering",
    "discipline": "ENGINEERING",
    "name": "Biomedical Mechanical Engineering",
    "baseWeight": 4,
    "keywords": [
      "biomedical",
      "mechanical",
      "engineering"
    ]
  },
  {
    "id": "nuclear_mechanical_engineering",
    "discipline": "ENGINEERING",
    "name": "Nuclear Mechanical Engineering",
    "baseWeight": 7,
    "keywords": [
      "nuclear",
      "mechanical",
      "engineering"
    ]
  },
  {
    "id": "robotic_mechanical_engineering",
    "discipline": "ENGINEERING",
    "name": "Robotic Mechanical Engineering",
    "baseWeight": 4,
    "keywords": [
      "robotic",
      "mechanical",
      "engineering",
      "robot",
      "mechatronics",
      "actuator",
      "kinematics",
      "manipulator",
      "servomotor"
    ]
  },
  {
    "id": "environmental_mechanical_engineering",
    "discipline": "ENGINEERING",
    "name": "Environmental Mechanical Engineering",
    "baseWeight": 4,
    "keywords": [
      "environmental",
      "mechanical",
      "engineering"
    ]
  },
  {
    "id": "structural_mechanical_engineering",
    "discipline": "ENGINEERING",
    "name": "Structural Mechanical Engineering",
    "baseWeight": 4,
    "keywords": [
      "structural",
      "mechanical",
      "engineering"
    ]
  },
  {
    "id": "geotechnical_mechanical_engineering",
    "discipline": "ENGINEERING",
    "name": "Geotechnical Mechanical Engineering",
    "baseWeight": 4,
    "keywords": [
      "geotechnical",
      "mechanical",
      "engineering"
    ]
  },
  {
    "id": "industrial_mechanical_engineering",
    "discipline": "ENGINEERING",
    "name": "Industrial Mechanical Engineering",
    "baseWeight": 4,
    "keywords": [
      "industrial",
      "mechanical",
      "engineering"
    ]
  },
  {
    "id": "systems_mechanical_engineering",
    "discipline": "ENGINEERING",
    "name": "Systems Mechanical Engineering",
    "baseWeight": 4,
    "keywords": [
      "systems",
      "mechanical",
      "engineering"
    ]
  },
  {
    "id": "process_mechanical_engineering",
    "discipline": "ENGINEERING",
    "name": "Process Mechanical Engineering",
    "baseWeight": 4,
    "keywords": [
      "process",
      "mechanical",
      "engineering"
    ]
  },
  {
    "id": "optical_mechanical_engineering",
    "discipline": "ENGINEERING",
    "name": "Optical Mechanical Engineering",
    "baseWeight": 4,
    "keywords": [
      "optical",
      "mechanical",
      "engineering"
    ]
  },
  {
    "id": "acoustic_mechanical_engineering",
    "discipline": "ENGINEERING",
    "name": "Acoustic Mechanical Engineering",
    "baseWeight": 4,
    "keywords": [
      "acoustic",
      "mechanical",
      "engineering"
    ]
  },
  {
    "id": "nano_mechanical_engineering",
    "discipline": "ENGINEERING",
    "name": "Nano Mechanical Engineering",
    "baseWeight": 4,
    "keywords": [
      "nano",
      "mechanical",
      "engineering"
    ]
  },
  {
    "id": "bio_mechanical_engineering",
    "discipline": "ENGINEERING",
    "name": "Bio Mechanical Engineering",
    "baseWeight": 4,
    "keywords": [
      "mechanical",
      "engineering"
    ]
  },
  {
    "id": "software_mechanical_engineering",
    "discipline": "ENGINEERING",
    "name": "Software Mechanical Engineering",
    "baseWeight": 4,
    "keywords": [
      "software",
      "mechanical",
      "engineering"
    ]
  },
  {
    "id": "digital_mechanical_engineering",
    "discipline": "ENGINEERING",
    "name": "Digital Mechanical Engineering",
    "baseWeight": 4,
    "keywords": [
      "digital",
      "mechanical",
      "engineering"
    ]
  },
  {
    "id": "fusion_mechanical_engineering",
    "discipline": "ENGINEERING",
    "name": "Fusion Mechanical Engineering",
    "baseWeight": 4,
    "keywords": [
      "fusion",
      "mechanical",
      "engineering"
    ]
  },
  {
    "id": "thermal_mechanical_engineering",
    "discipline": "ENGINEERING",
    "name": "Thermal Mechanical Engineering",
    "baseWeight": 4,
    "keywords": [
      "thermal",
      "mechanical",
      "engineering"
    ]
  },
  {
    "id": "automotive_mechanical_engineering",
    "discipline": "ENGINEERING",
    "name": "Automotive Mechanical Engineering",
    "baseWeight": 4,
    "keywords": [
      "automotive",
      "mechanical",
      "engineering"
    ]
  },
  {
    "id": "marine_mechanical_engineering",
    "discipline": "ENGINEERING",
    "name": "Marine Mechanical Engineering",
    "baseWeight": 4,
    "keywords": [
      "marine",
      "mechanical",
      "engineering"
    ]
  },
  {
    "id": "mechanical_electrical_electronics_engineering",
    "discipline": "ENGINEERING",
    "name": "Mechanical Electrical & Electronics Engineering",
    "baseWeight": 5,
    "keywords": [
      "mechanical",
      "electrical",
      "electronics",
      "engineering"
    ]
  },
  {
    "id": "electrical_electronics_engineering",
    "discipline": "ENGINEERING",
    "name": "Electrical & Electronics Engineering",
    "baseWeight": 5,
    "keywords": [
      "electrical",
      "electronics",
      "engineering"
    ]
  },
  {
    "id": "civil_electrical_electronics_engineering",
    "discipline": "ENGINEERING",
    "name": "Civil Electrical & Electronics Engineering",
    "baseWeight": 5,
    "keywords": [
      "civil",
      "electrical",
      "electronics",
      "engineering"
    ]
  },
  {
    "id": "chemical_electrical_electronics_engineering",
    "discipline": "ENGINEERING",
    "name": "Chemical Electrical & Electronics Engineering",
    "baseWeight": 5,
    "keywords": [
      "chemical",
      "electrical",
      "electronics",
      "engineering"
    ]
  },
  {
    "id": "aerospace_electrical_electronics_engineering",
    "discipline": "ENGINEERING",
    "name": "Aerospace Electrical & Electronics Engineering",
    "baseWeight": 6,
    "keywords": [
      "aerospace",
      "electrical",
      "electronics",
      "engineering"
    ]
  },
  {
    "id": "materials_electrical_electronics_engineering",
    "discipline": "ENGINEERING",
    "name": "Materials Electrical & Electronics Engineering",
    "baseWeight": 5,
    "keywords": [
      "materials",
      "electrical",
      "electronics",
      "engineering"
    ]
  },
  {
    "id": "biomedical_electrical_electronics_engineering",
    "discipline": "ENGINEERING",
    "name": "Biomedical Electrical & Electronics Engineering",
    "baseWeight": 5,
    "keywords": [
      "biomedical",
      "electrical",
      "electronics",
      "engineering"
    ]
  },
  {
    "id": "nuclear_electrical_electronics_engineering",
    "discipline": "ENGINEERING",
    "name": "Nuclear Electrical & Electronics Engineering",
    "baseWeight": 8,
    "keywords": [
      "nuclear",
      "electrical",
      "electronics",
      "engineering"
    ]
  },
  {
    "id": "robotic_electrical_electronics_engineering",
    "discipline": "ENGINEERING",
    "name": "Robotic Electrical & Electronics Engineering",
    "baseWeight": 5,
    "keywords": [
      "robotic",
      "electrical",
      "electronics",
      "engineering",
      "robot",
      "mechatronics",
      "actuator",
      "kinematics",
      "manipulator",
      "servomotor"
    ]
  },
  {
    "id": "environmental_electrical_electronics_engineering",
    "discipline": "ENGINEERING",
    "name": "Environmental Electrical & Electronics Engineering",
    "baseWeight": 5,
    "keywords": [
      "environmental",
      "electrical",
      "electronics",
      "engineering"
    ]
  },
  {
    "id": "structural_electrical_electronics_engineering",
    "discipline": "ENGINEERING",
    "name": "Structural Electrical & Electronics Engineering",
    "baseWeight": 5,
    "keywords": [
      "structural",
      "electrical",
      "electronics",
      "engineering"
    ]
  },
  {
    "id": "geotechnical_electrical_electronics_engineering",
    "discipline": "ENGINEERING",
    "name": "Geotechnical Electrical & Electronics Engineering",
    "baseWeight": 5,
    "keywords": [
      "geotechnical",
      "electrical",
      "electronics",
      "engineering"
    ]
  },
  {
    "id": "industrial_electrical_electronics_engineering",
    "discipline": "ENGINEERING",
    "name": "Industrial Electrical & Electronics Engineering",
    "baseWeight": 5,
    "keywords": [
      "industrial",
      "electrical",
      "electronics",
      "engineering"
    ]
  },
  {
    "id": "systems_electrical_electronics_engineering",
    "discipline": "ENGINEERING",
    "name": "Systems Electrical & Electronics Engineering",
    "baseWeight": 5,
    "keywords": [
      "systems",
      "electrical",
      "electronics",
      "engineering"
    ]
  },
  {
    "id": "process_electrical_electronics_engineering",
    "discipline": "ENGINEERING",
    "name": "Process Electrical & Electronics Engineering",
    "baseWeight": 5,
    "keywords": [
      "process",
      "electrical",
      "electronics",
      "engineering"
    ]
  },
  {
    "id": "optical_electrical_electronics_engineering",
    "discipline": "ENGINEERING",
    "name": "Optical Electrical & Electronics Engineering",
    "baseWeight": 5,
    "keywords": [
      "optical",
      "electrical",
      "electronics",
      "engineering"
    ]
  },
  {
    "id": "acoustic_electrical_electronics_engineering",
    "discipline": "ENGINEERING",
    "name": "Acoustic Electrical & Electronics Engineering",
    "baseWeight": 5,
    "keywords": [
      "acoustic",
      "electrical",
      "electronics",
      "engineering"
    ]
  },
  {
    "id": "nano_electrical_electronics_engineering",
    "discipline": "ENGINEERING",
    "name": "Nano Electrical & Electronics Engineering",
    "baseWeight": 5,
    "keywords": [
      "nano",
      "electrical",
      "electronics",
      "engineering"
    ]
  },
  {
    "id": "bio_electrical_electronics_engineering",
    "discipline": "ENGINEERING",
    "name": "Bio Electrical & Electronics Engineering",
    "baseWeight": 5,
    "keywords": [
      "electrical",
      "electronics",
      "engineering"
    ]
  },
  {
    "id": "software_electrical_electronics_engineering",
    "discipline": "ENGINEERING",
    "name": "Software Electrical & Electronics Engineering",
    "baseWeight": 5,
    "keywords": [
      "software",
      "electrical",
      "electronics",
      "engineering"
    ]
  },
  {
    "id": "digital_electrical_electronics_engineering",
    "discipline": "ENGINEERING",
    "name": "Digital Electrical & Electronics Engineering",
    "baseWeight": 5,
    "keywords": [
      "digital",
      "electrical",
      "electronics",
      "engineering"
    ]
  },
  {
    "id": "fusion_electrical_electronics_engineering",
    "discipline": "ENGINEERING",
    "name": "Fusion Electrical & Electronics Engineering",
    "baseWeight": 5,
    "keywords": [
      "fusion",
      "electrical",
      "electronics",
      "engineering"
    ]
  },
  {
    "id": "thermal_electrical_electronics_engineering",
    "discipline": "ENGINEERING",
    "name": "Thermal Electrical & Electronics Engineering",
    "baseWeight": 5,
    "keywords": [
      "thermal",
      "electrical",
      "electronics",
      "engineering"
    ]
  },
  {
    "id": "automotive_electrical_electronics_engineering",
    "discipline": "ENGINEERING",
    "name": "Automotive Electrical & Electronics Engineering",
    "baseWeight": 5,
    "keywords": [
      "automotive",
      "electrical",
      "electronics",
      "engineering"
    ]
  },
  {
    "id": "marine_electrical_electronics_engineering",
    "discipline": "ENGINEERING",
    "name": "Marine Electrical & Electronics Engineering",
    "baseWeight": 5,
    "keywords": [
      "marine",
      "electrical",
      "electronics",
      "engineering"
    ]
  },
  {
    "id": "mechanical_civil_structural_engineering",
    "discipline": "ENGINEERING",
    "name": "Mechanical Civil & Structural Engineering",
    "baseWeight": 6,
    "keywords": [
      "mechanical",
      "civil",
      "structural",
      "engineering"
    ]
  },
  {
    "id": "electrical_civil_structural_engineering",
    "discipline": "ENGINEERING",
    "name": "Electrical Civil & Structural Engineering",
    "baseWeight": 6,
    "keywords": [
      "electrical",
      "civil",
      "structural",
      "engineering"
    ]
  },
  {
    "id": "civil_structural_engineering",
    "discipline": "ENGINEERING",
    "name": "Civil & Structural Engineering",
    "baseWeight": 6,
    "keywords": [
      "civil",
      "structural",
      "engineering"
    ]
  },
  {
    "id": "chemical_civil_structural_engineering",
    "discipline": "ENGINEERING",
    "name": "Chemical Civil & Structural Engineering",
    "baseWeight": 6,
    "keywords": [
      "chemical",
      "civil",
      "structural",
      "engineering"
    ]
  },
  {
    "id": "aerospace_civil_structural_engineering",
    "discipline": "ENGINEERING",
    "name": "Aerospace Civil & Structural Engineering",
    "baseWeight": 7,
    "keywords": [
      "aerospace",
      "civil",
      "structural",
      "engineering"
    ]
  },
  {
    "id": "materials_civil_structural_engineering",
    "discipline": "ENGINEERING",
    "name": "Materials Civil & Structural Engineering",
    "baseWeight": 6,
    "keywords": [
      "materials",
      "civil",
      "structural",
      "engineering"
    ]
  },
  {
    "id": "biomedical_civil_structural_engineering",
    "discipline": "ENGINEERING",
    "name": "Biomedical Civil & Structural Engineering",
    "baseWeight": 6,
    "keywords": [
      "biomedical",
      "civil",
      "structural",
      "engineering"
    ]
  },
  {
    "id": "nuclear_civil_structural_engineering",
    "discipline": "ENGINEERING",
    "name": "Nuclear Civil & Structural Engineering",
    "baseWeight": 9,
    "keywords": [
      "nuclear",
      "civil",
      "structural",
      "engineering"
    ]
  },
  {
    "id": "robotic_civil_structural_engineering",
    "discipline": "ENGINEERING",
    "name": "Robotic Civil & Structural Engineering",
    "baseWeight": 6,
    "keywords": [
      "robotic",
      "civil",
      "structural",
      "engineering",
      "robot",
      "mechatronics",
      "actuator",
      "kinematics",
      "manipulator",
      "servomotor"
    ]
  },
  {
    "id": "environmental_civil_structural_engineering",
    "discipline": "ENGINEERING",
    "name": "Environmental Civil & Structural Engineering",
    "baseWeight": 6,
    "keywords": [
      "environmental",
      "civil",
      "structural",
      "engineering"
    ]
  },
  {
    "id": "structural_civil_engineering",
    "discipline": "ENGINEERING",
    "name": "Structural Civil & Engineering",
    "baseWeight": 6,
    "keywords": [
      "structural",
      "civil",
      "engineering"
    ]
  },
  {
    "id": "geotechnical_civil_structural_engineering",
    "discipline": "ENGINEERING",
    "name": "Geotechnical Civil & Structural Engineering",
    "baseWeight": 6,
    "keywords": [
      "geotechnical",
      "civil",
      "structural",
      "engineering"
    ]
  },
  {
    "id": "industrial_civil_structural_engineering",
    "discipline": "ENGINEERING",
    "name": "Industrial Civil & Structural Engineering",
    "baseWeight": 6,
    "keywords": [
      "industrial",
      "civil",
      "structural",
      "engineering"
    ]
  },
  {
    "id": "systems_civil_structural_engineering",
    "discipline": "ENGINEERING",
    "name": "Systems Civil & Structural Engineering",
    "baseWeight": 6,
    "keywords": [
      "systems",
      "civil",
      "structural",
      "engineering"
    ]
  },
  {
    "id": "process_civil_structural_engineering",
    "discipline": "ENGINEERING",
    "name": "Process Civil & Structural Engineering",
    "baseWeight": 6,
    "keywords": [
      "process",
      "civil",
      "structural",
      "engineering"
    ]
  },
  {
    "id": "optical_civil_structural_engineering",
    "discipline": "ENGINEERING",
    "name": "Optical Civil & Structural Engineering",
    "baseWeight": 6,
    "keywords": [
      "optical",
      "civil",
      "structural",
      "engineering"
    ]
  },
  {
    "id": "acoustic_civil_structural_engineering",
    "discipline": "ENGINEERING",
    "name": "Acoustic Civil & Structural Engineering",
    "baseWeight": 6,
    "keywords": [
      "acoustic",
      "civil",
      "structural",
      "engineering"
    ]
  },
  {
    "id": "nano_civil_structural_engineering",
    "discipline": "ENGINEERING",
    "name": "Nano Civil & Structural Engineering",
    "baseWeight": 6,
    "keywords": [
      "nano",
      "civil",
      "structural",
      "engineering"
    ]
  },
  {
    "id": "bio_civil_structural_engineering",
    "discipline": "ENGINEERING",
    "name": "Bio Civil & Structural Engineering",
    "baseWeight": 6,
    "keywords": [
      "civil",
      "structural",
      "engineering"
    ]
  },
  {
    "id": "software_civil_structural_engineering",
    "discipline": "ENGINEERING",
    "name": "Software Civil & Structural Engineering",
    "baseWeight": 6,
    "keywords": [
      "software",
      "civil",
      "structural",
      "engineering"
    ]
  },
  {
    "id": "digital_civil_structural_engineering",
    "discipline": "ENGINEERING",
    "name": "Digital Civil & Structural Engineering",
    "baseWeight": 6,
    "keywords": [
      "digital",
      "civil",
      "structural",
      "engineering"
    ]
  },
  {
    "id": "fusion_civil_structural_engineering",
    "discipline": "ENGINEERING",
    "name": "Fusion Civil & Structural Engineering",
    "baseWeight": 6,
    "keywords": [
      "fusion",
      "civil",
      "structural",
      "engineering"
    ]
  },
  {
    "id": "thermal_civil_structural_engineering",
    "discipline": "ENGINEERING",
    "name": "Thermal Civil & Structural Engineering",
    "baseWeight": 6,
    "keywords": [
      "thermal",
      "civil",
      "structural",
      "engineering"
    ]
  },
  {
    "id": "automotive_civil_structural_engineering",
    "discipline": "ENGINEERING",
    "name": "Automotive Civil & Structural Engineering",
    "baseWeight": 6,
    "keywords": [
      "automotive",
      "civil",
      "structural",
      "engineering"
    ]
  },
  {
    "id": "marine_civil_structural_engineering",
    "discipline": "ENGINEERING",
    "name": "Marine Civil & Structural Engineering",
    "baseWeight": 6,
    "keywords": [
      "marine",
      "civil",
      "structural",
      "engineering"
    ]
  },
  {
    "id": "mechanical_chemical_process_engineering",
    "discipline": "ENGINEERING",
    "name": "Mechanical Chemical & Process Engineering",
    "baseWeight": 4,
    "keywords": [
      "mechanical",
      "chemical",
      "process",
      "engineering"
    ]
  },
  {
    "id": "electrical_chemical_process_engineering",
    "discipline": "ENGINEERING",
    "name": "Electrical Chemical & Process Engineering",
    "baseWeight": 4,
    "keywords": [
      "electrical",
      "chemical",
      "process",
      "engineering"
    ]
  },
  {
    "id": "civil_chemical_process_engineering",
    "discipline": "ENGINEERING",
    "name": "Civil Chemical & Process Engineering",
    "baseWeight": 4,
    "keywords": [
      "civil",
      "chemical",
      "process",
      "engineering"
    ]
  },
  {
    "id": "chemical_process_engineering",
    "discipline": "ENGINEERING",
    "name": "Chemical & Process Engineering",
    "baseWeight": 4,
    "keywords": [
      "chemical",
      "process",
      "engineering"
    ]
  },
  {
    "id": "aerospace_chemical_process_engineering",
    "discipline": "ENGINEERING",
    "name": "Aerospace Chemical & Process Engineering",
    "baseWeight": 5,
    "keywords": [
      "aerospace",
      "chemical",
      "process",
      "engineering"
    ]
  },
  {
    "id": "materials_chemical_process_engineering",
    "discipline": "ENGINEERING",
    "name": "Materials Chemical & Process Engineering",
    "baseWeight": 4,
    "keywords": [
      "materials",
      "chemical",
      "process",
      "engineering"
    ]
  },
  {
    "id": "biomedical_chemical_process_engineering",
    "discipline": "ENGINEERING",
    "name": "Biomedical Chemical & Process Engineering",
    "baseWeight": 4,
    "keywords": [
      "biomedical",
      "chemical",
      "process",
      "engineering"
    ]
  },
  {
    "id": "nuclear_chemical_process_engineering",
    "discipline": "ENGINEERING",
    "name": "Nuclear Chemical & Process Engineering",
    "baseWeight": 7,
    "keywords": [
      "nuclear",
      "chemical",
      "process",
      "engineering"
    ]
  },
  {
    "id": "robotic_chemical_process_engineering",
    "discipline": "ENGINEERING",
    "name": "Robotic Chemical & Process Engineering",
    "baseWeight": 4,
    "keywords": [
      "robotic",
      "chemical",
      "process",
      "engineering",
      "robot",
      "mechatronics",
      "actuator",
      "kinematics",
      "manipulator",
      "servomotor"
    ]
  },
  {
    "id": "environmental_chemical_process_engineering",
    "discipline": "ENGINEERING",
    "name": "Environmental Chemical & Process Engineering",
    "baseWeight": 4,
    "keywords": [
      "environmental",
      "chemical",
      "process",
      "engineering"
    ]
  },
  {
    "id": "structural_chemical_process_engineering",
    "discipline": "ENGINEERING",
    "name": "Structural Chemical & Process Engineering",
    "baseWeight": 4,
    "keywords": [
      "structural",
      "chemical",
      "process",
      "engineering"
    ]
  },
  {
    "id": "geotechnical_chemical_process_engineering",
    "discipline": "ENGINEERING",
    "name": "Geotechnical Chemical & Process Engineering",
    "baseWeight": 4,
    "keywords": [
      "geotechnical",
      "chemical",
      "process",
      "engineering"
    ]
  },
  {
    "id": "industrial_chemical_process_engineering",
    "discipline": "ENGINEERING",
    "name": "Industrial Chemical & Process Engineering",
    "baseWeight": 4,
    "keywords": [
      "industrial",
      "chemical",
      "process",
      "engineering"
    ]
  },
  {
    "id": "systems_chemical_process_engineering",
    "discipline": "ENGINEERING",
    "name": "Systems Chemical & Process Engineering",
    "baseWeight": 4,
    "keywords": [
      "systems",
      "chemical",
      "process",
      "engineering"
    ]
  },
  {
    "id": "process_chemical_engineering",
    "discipline": "ENGINEERING",
    "name": "Process Chemical & Engineering",
    "baseWeight": 4,
    "keywords": [
      "process",
      "chemical",
      "engineering"
    ]
  },
  {
    "id": "optical_chemical_process_engineering",
    "discipline": "ENGINEERING",
    "name": "Optical Chemical & Process Engineering",
    "baseWeight": 4,
    "keywords": [
      "optical",
      "chemical",
      "process",
      "engineering"
    ]
  },
  {
    "id": "acoustic_chemical_process_engineering",
    "discipline": "ENGINEERING",
    "name": "Acoustic Chemical & Process Engineering",
    "baseWeight": 4,
    "keywords": [
      "acoustic",
      "chemical",
      "process",
      "engineering"
    ]
  },
  {
    "id": "nano_chemical_process_engineering",
    "discipline": "ENGINEERING",
    "name": "Nano Chemical & Process Engineering",
    "baseWeight": 4,
    "keywords": [
      "nano",
      "chemical",
      "process",
      "engineering"
    ]
  },
  {
    "id": "bio_chemical_process_engineering",
    "discipline": "ENGINEERING",
    "name": "Bio Chemical & Process Engineering",
    "baseWeight": 4,
    "keywords": [
      "chemical",
      "process",
      "engineering"
    ]
  },
  {
    "id": "software_chemical_process_engineering",
    "discipline": "ENGINEERING",
    "name": "Software Chemical & Process Engineering",
    "baseWeight": 4,
    "keywords": [
      "software",
      "chemical",
      "process",
      "engineering"
    ]
  },
  {
    "id": "digital_chemical_process_engineering",
    "discipline": "ENGINEERING",
    "name": "Digital Chemical & Process Engineering",
    "baseWeight": 4,
    "keywords": [
      "digital",
      "chemical",
      "process",
      "engineering"
    ]
  },
  {
    "id": "fusion_chemical_process_engineering",
    "discipline": "ENGINEERING",
    "name": "Fusion Chemical & Process Engineering",
    "baseWeight": 4,
    "keywords": [
      "fusion",
      "chemical",
      "process",
      "engineering"
    ]
  },
  {
    "id": "thermal_chemical_process_engineering",
    "discipline": "ENGINEERING",
    "name": "Thermal Chemical & Process Engineering",
    "baseWeight": 4,
    "keywords": [
      "thermal",
      "chemical",
      "process",
      "engineering"
    ]
  },
  {
    "id": "automotive_chemical_process_engineering",
    "discipline": "ENGINEERING",
    "name": "Automotive Chemical & Process Engineering",
    "baseWeight": 4,
    "keywords": [
      "automotive",
      "chemical",
      "process",
      "engineering"
    ]
  },
  {
    "id": "marine_chemical_process_engineering",
    "discipline": "ENGINEERING",
    "name": "Marine Chemical & Process Engineering",
    "baseWeight": 4,
    "keywords": [
      "marine",
      "chemical",
      "process",
      "engineering"
    ]
  },
  {
    "id": "mechanical_aerospace_engineering",
    "discipline": "ENGINEERING",
    "name": "Mechanical Aerospace Engineering",
    "baseWeight": 5,
    "keywords": [
      "mechanical",
      "aerospace",
      "engineering"
    ]
  },
  {
    "id": "electrical_aerospace_engineering",
    "discipline": "ENGINEERING",
    "name": "Electrical Aerospace Engineering",
    "baseWeight": 5,
    "keywords": [
      "electrical",
      "aerospace",
      "engineering"
    ]
  },
  {
    "id": "civil_aerospace_engineering",
    "discipline": "ENGINEERING",
    "name": "Civil Aerospace Engineering",
    "baseWeight": 5,
    "keywords": [
      "civil",
      "aerospace",
      "engineering"
    ]
  },
  {
    "id": "chemical_aerospace_engineering",
    "discipline": "ENGINEERING",
    "name": "Chemical Aerospace Engineering",
    "baseWeight": 5,
    "keywords": [
      "chemical",
      "aerospace",
      "engineering"
    ]
  },
  {
    "id": "aerospace_engineering",
    "discipline": "ENGINEERING",
    "name": "Aerospace Engineering",
    "baseWeight": 6,
    "keywords": [
      "aerospace",
      "engineering"
    ]
  },
  {
    "id": "materials_aerospace_engineering",
    "discipline": "ENGINEERING",
    "name": "Materials Aerospace Engineering",
    "baseWeight": 5,
    "keywords": [
      "materials",
      "aerospace",
      "engineering"
    ]
  },
  {
    "id": "biomedical_aerospace_engineering",
    "discipline": "ENGINEERING",
    "name": "Biomedical Aerospace Engineering",
    "baseWeight": 5,
    "keywords": [
      "biomedical",
      "aerospace",
      "engineering"
    ]
  },
  {
    "id": "nuclear_aerospace_engineering",
    "discipline": "ENGINEERING",
    "name": "Nuclear Aerospace Engineering",
    "baseWeight": 8,
    "keywords": [
      "nuclear",
      "aerospace",
      "engineering"
    ]
  },
  {
    "id": "robotic_aerospace_engineering",
    "discipline": "ENGINEERING",
    "name": "Robotic Aerospace Engineering",
    "baseWeight": 5,
    "keywords": [
      "robotic",
      "aerospace",
      "engineering",
      "robot",
      "mechatronics",
      "actuator",
      "kinematics",
      "manipulator",
      "servomotor"
    ]
  },
  {
    "id": "environmental_aerospace_engineering",
    "discipline": "ENGINEERING",
    "name": "Environmental Aerospace Engineering",
    "baseWeight": 5,
    "keywords": [
      "environmental",
      "aerospace",
      "engineering"
    ]
  },
  {
    "id": "structural_aerospace_engineering",
    "discipline": "ENGINEERING",
    "name": "Structural Aerospace Engineering",
    "baseWeight": 5,
    "keywords": [
      "structural",
      "aerospace",
      "engineering"
    ]
  },
  {
    "id": "geotechnical_aerospace_engineering",
    "discipline": "ENGINEERING",
    "name": "Geotechnical Aerospace Engineering",
    "baseWeight": 5,
    "keywords": [
      "geotechnical",
      "aerospace",
      "engineering"
    ]
  },
  {
    "id": "industrial_aerospace_engineering",
    "discipline": "ENGINEERING",
    "name": "Industrial Aerospace Engineering",
    "baseWeight": 5,
    "keywords": [
      "industrial",
      "aerospace",
      "engineering"
    ]
  },
  {
    "id": "systems_aerospace_engineering",
    "discipline": "ENGINEERING",
    "name": "Systems Aerospace Engineering",
    "baseWeight": 5,
    "keywords": [
      "systems",
      "aerospace",
      "engineering"
    ]
  },
  {
    "id": "process_aerospace_engineering",
    "discipline": "ENGINEERING",
    "name": "Process Aerospace Engineering",
    "baseWeight": 5,
    "keywords": [
      "process",
      "aerospace",
      "engineering"
    ]
  },
  {
    "id": "optical_aerospace_engineering",
    "discipline": "ENGINEERING",
    "name": "Optical Aerospace Engineering",
    "baseWeight": 5,
    "keywords": [
      "optical",
      "aerospace",
      "engineering"
    ]
  },
  {
    "id": "acoustic_aerospace_engineering",
    "discipline": "ENGINEERING",
    "name": "Acoustic Aerospace Engineering",
    "baseWeight": 5,
    "keywords": [
      "acoustic",
      "aerospace",
      "engineering"
    ]
  },
  {
    "id": "nano_aerospace_engineering",
    "discipline": "ENGINEERING",
    "name": "Nano Aerospace Engineering",
    "baseWeight": 5,
    "keywords": [
      "nano",
      "aerospace",
      "engineering"
    ]
  },
  {
    "id": "bio_aerospace_engineering",
    "discipline": "ENGINEERING",
    "name": "Bio Aerospace Engineering",
    "baseWeight": 5,
    "keywords": [
      "aerospace",
      "engineering"
    ]
  },
  {
    "id": "software_aerospace_engineering",
    "discipline": "ENGINEERING",
    "name": "Software Aerospace Engineering",
    "baseWeight": 5,
    "keywords": [
      "software",
      "aerospace",
      "engineering"
    ]
  },
  {
    "id": "digital_aerospace_engineering",
    "discipline": "ENGINEERING",
    "name": "Digital Aerospace Engineering",
    "baseWeight": 5,
    "keywords": [
      "digital",
      "aerospace",
      "engineering"
    ]
  },
  {
    "id": "fusion_aerospace_engineering",
    "discipline": "ENGINEERING",
    "name": "Fusion Aerospace Engineering",
    "baseWeight": 5,
    "keywords": [
      "fusion",
      "aerospace",
      "engineering"
    ]
  },
  {
    "id": "thermal_aerospace_engineering",
    "discipline": "ENGINEERING",
    "name": "Thermal Aerospace Engineering",
    "baseWeight": 5,
    "keywords": [
      "thermal",
      "aerospace",
      "engineering"
    ]
  },
  {
    "id": "automotive_aerospace_engineering",
    "discipline": "ENGINEERING",
    "name": "Automotive Aerospace Engineering",
    "baseWeight": 5,
    "keywords": [
      "automotive",
      "aerospace",
      "engineering"
    ]
  },
  {
    "id": "marine_aerospace_engineering",
    "discipline": "ENGINEERING",
    "name": "Marine Aerospace Engineering",
    "baseWeight": 5,
    "keywords": [
      "marine",
      "aerospace",
      "engineering"
    ]
  },
  {
    "id": "mechanical_materials_science",
    "discipline": "ENGINEERING",
    "name": "Mechanical Materials Science",
    "baseWeight": 6,
    "keywords": [
      "mechanical",
      "materials",
      "science"
    ]
  },
  {
    "id": "electrical_materials_science",
    "discipline": "ENGINEERING",
    "name": "Electrical Materials Science",
    "baseWeight": 6,
    "keywords": [
      "electrical",
      "materials",
      "science"
    ]
  },
  {
    "id": "civil_materials_science",
    "discipline": "ENGINEERING",
    "name": "Civil Materials Science",
    "baseWeight": 6,
    "keywords": [
      "civil",
      "materials",
      "science"
    ]
  },
  {
    "id": "chemical_materials_science",
    "discipline": "ENGINEERING",
    "name": "Chemical Materials Science",
    "baseWeight": 6,
    "keywords": [
      "chemical",
      "materials",
      "science"
    ]
  },
  {
    "id": "aerospace_materials_science",
    "discipline": "ENGINEERING",
    "name": "Aerospace Materials Science",
    "baseWeight": 7,
    "keywords": [
      "aerospace",
      "materials",
      "science"
    ]
  },
  {
    "id": "materials_science",
    "discipline": "ENGINEERING",
    "name": "Materials Science",
    "baseWeight": 6,
    "keywords": [
      "materials",
      "science"
    ]
  },
  {
    "id": "biomedical_materials_science",
    "discipline": "ENGINEERING",
    "name": "Biomedical Materials Science",
    "baseWeight": 6,
    "keywords": [
      "biomedical",
      "materials",
      "science"
    ]
  },
  {
    "id": "nuclear_materials_science",
    "discipline": "ENGINEERING",
    "name": "Nuclear Materials Science",
    "baseWeight": 9,
    "keywords": [
      "nuclear",
      "materials",
      "science"
    ]
  },
  {
    "id": "robotic_materials_science",
    "discipline": "ENGINEERING",
    "name": "Robotic Materials Science",
    "baseWeight": 6,
    "keywords": [
      "robotic",
      "materials",
      "science",
      "robot",
      "mechatronics",
      "actuator",
      "kinematics",
      "manipulator",
      "servomotor"
    ]
  },
  {
    "id": "environmental_materials_science",
    "discipline": "ENGINEERING",
    "name": "Environmental Materials Science",
    "baseWeight": 6,
    "keywords": [
      "environmental",
      "materials",
      "science"
    ]
  },
  {
    "id": "structural_materials_science",
    "discipline": "ENGINEERING",
    "name": "Structural Materials Science",
    "baseWeight": 6,
    "keywords": [
      "structural",
      "materials",
      "science"
    ]
  },
  {
    "id": "geotechnical_materials_science",
    "discipline": "ENGINEERING",
    "name": "Geotechnical Materials Science",
    "baseWeight": 6,
    "keywords": [
      "geotechnical",
      "materials",
      "science"
    ]
  },
  {
    "id": "industrial_materials_science",
    "discipline": "ENGINEERING",
    "name": "Industrial Materials Science",
    "baseWeight": 6,
    "keywords": [
      "industrial",
      "materials",
      "science"
    ]
  },
  {
    "id": "systems_materials_science",
    "discipline": "ENGINEERING",
    "name": "Systems Materials Science",
    "baseWeight": 6,
    "keywords": [
      "systems",
      "materials",
      "science"
    ]
  },
  {
    "id": "process_materials_science",
    "discipline": "ENGINEERING",
    "name": "Process Materials Science",
    "baseWeight": 6,
    "keywords": [
      "process",
      "materials",
      "science"
    ]
  },
  {
    "id": "optical_materials_science",
    "discipline": "ENGINEERING",
    "name": "Optical Materials Science",
    "baseWeight": 6,
    "keywords": [
      "optical",
      "materials",
      "science"
    ]
  },
  {
    "id": "acoustic_materials_science",
    "discipline": "ENGINEERING",
    "name": "Acoustic Materials Science",
    "baseWeight": 6,
    "keywords": [
      "acoustic",
      "materials",
      "science"
    ]
  },
  {
    "id": "nano_materials_science",
    "discipline": "ENGINEERING",
    "name": "Nano Materials Science",
    "baseWeight": 6,
    "keywords": [
      "nano",
      "materials",
      "science"
    ]
  },
  {
    "id": "bio_materials_science",
    "discipline": "ENGINEERING",
    "name": "Bio Materials Science",
    "baseWeight": 6,
    "keywords": [
      "materials",
      "science"
    ]
  },
  {
    "id": "software_materials_science",
    "discipline": "ENGINEERING",
    "name": "Software Materials Science",
    "baseWeight": 6,
    "keywords": [
      "software",
      "materials",
      "science"
    ]
  },
  {
    "id": "digital_materials_science",
    "discipline": "ENGINEERING",
    "name": "Digital Materials Science",
    "baseWeight": 6,
    "keywords": [
      "digital",
      "materials",
      "science"
    ]
  },
  {
    "id": "fusion_materials_science",
    "discipline": "ENGINEERING",
    "name": "Fusion Materials Science",
    "baseWeight": 6,
    "keywords": [
      "fusion",
      "materials",
      "science"
    ]
  },
  {
    "id": "thermal_materials_science",
    "discipline": "ENGINEERING",
    "name": "Thermal Materials Science",
    "baseWeight": 6,
    "keywords": [
      "thermal",
      "materials",
      "science"
    ]
  },
  {
    "id": "automotive_materials_science",
    "discipline": "ENGINEERING",
    "name": "Automotive Materials Science",
    "baseWeight": 6,
    "keywords": [
      "automotive",
      "materials",
      "science"
    ]
  },
  {
    "id": "marine_materials_science",
    "discipline": "ENGINEERING",
    "name": "Marine Materials Science",
    "baseWeight": 6,
    "keywords": [
      "marine",
      "materials",
      "science"
    ]
  },
  {
    "id": "mechanical_biomedical_engineering",
    "discipline": "ENGINEERING",
    "name": "Mechanical Biomedical Engineering",
    "baseWeight": 4,
    "keywords": [
      "mechanical",
      "biomedical",
      "engineering"
    ]
  },
  {
    "id": "electrical_biomedical_engineering",
    "discipline": "ENGINEERING",
    "name": "Electrical Biomedical Engineering",
    "baseWeight": 4,
    "keywords": [
      "electrical",
      "biomedical",
      "engineering"
    ]
  },
  {
    "id": "civil_biomedical_engineering",
    "discipline": "ENGINEERING",
    "name": "Civil Biomedical Engineering",
    "baseWeight": 4,
    "keywords": [
      "civil",
      "biomedical",
      "engineering"
    ]
  },
  {
    "id": "chemical_biomedical_engineering",
    "discipline": "ENGINEERING",
    "name": "Chemical Biomedical Engineering",
    "baseWeight": 4,
    "keywords": [
      "chemical",
      "biomedical",
      "engineering"
    ]
  },
  {
    "id": "aerospace_biomedical_engineering",
    "discipline": "ENGINEERING",
    "name": "Aerospace Biomedical Engineering",
    "baseWeight": 5,
    "keywords": [
      "aerospace",
      "biomedical",
      "engineering"
    ]
  },
  {
    "id": "materials_biomedical_engineering",
    "discipline": "ENGINEERING",
    "name": "Materials Biomedical Engineering",
    "baseWeight": 4,
    "keywords": [
      "materials",
      "biomedical",
      "engineering"
    ]
  },
  {
    "id": "biomedical_engineering",
    "discipline": "ENGINEERING",
    "name": "Biomedical Engineering",
    "baseWeight": 4,
    "keywords": [
      "biomedical",
      "engineering"
    ]
  },
  {
    "id": "nuclear_biomedical_engineering",
    "discipline": "ENGINEERING",
    "name": "Nuclear Biomedical Engineering",
    "baseWeight": 7,
    "keywords": [
      "nuclear",
      "biomedical",
      "engineering"
    ]
  },
  {
    "id": "robotic_biomedical_engineering",
    "discipline": "ENGINEERING",
    "name": "Robotic Biomedical Engineering",
    "baseWeight": 4,
    "keywords": [
      "robotic",
      "biomedical",
      "engineering",
      "robot",
      "mechatronics",
      "actuator",
      "kinematics",
      "manipulator",
      "servomotor"
    ]
  },
  {
    "id": "environmental_biomedical_engineering",
    "discipline": "ENGINEERING",
    "name": "Environmental Biomedical Engineering",
    "baseWeight": 4,
    "keywords": [
      "environmental",
      "biomedical",
      "engineering"
    ]
  },
  {
    "id": "structural_biomedical_engineering",
    "discipline": "ENGINEERING",
    "name": "Structural Biomedical Engineering",
    "baseWeight": 4,
    "keywords": [
      "structural",
      "biomedical",
      "engineering"
    ]
  },
  {
    "id": "geotechnical_biomedical_engineering",
    "discipline": "ENGINEERING",
    "name": "Geotechnical Biomedical Engineering",
    "baseWeight": 4,
    "keywords": [
      "geotechnical",
      "biomedical",
      "engineering"
    ]
  },
  {
    "id": "industrial_biomedical_engineering",
    "discipline": "ENGINEERING",
    "name": "Industrial Biomedical Engineering",
    "baseWeight": 4,
    "keywords": [
      "industrial",
      "biomedical",
      "engineering"
    ]
  },
  {
    "id": "systems_biomedical_engineering",
    "discipline": "ENGINEERING",
    "name": "Systems Biomedical Engineering",
    "baseWeight": 4,
    "keywords": [
      "systems",
      "biomedical",
      "engineering"
    ]
  },
  {
    "id": "process_biomedical_engineering",
    "discipline": "ENGINEERING",
    "name": "Process Biomedical Engineering",
    "baseWeight": 4,
    "keywords": [
      "process",
      "biomedical",
      "engineering"
    ]
  },
  {
    "id": "optical_biomedical_engineering",
    "discipline": "ENGINEERING",
    "name": "Optical Biomedical Engineering",
    "baseWeight": 4,
    "keywords": [
      "optical",
      "biomedical",
      "engineering"
    ]
  },
  {
    "id": "acoustic_biomedical_engineering",
    "discipline": "ENGINEERING",
    "name": "Acoustic Biomedical Engineering",
    "baseWeight": 4,
    "keywords": [
      "acoustic",
      "biomedical",
      "engineering"
    ]
  },
  {
    "id": "nano_biomedical_engineering",
    "discipline": "ENGINEERING",
    "name": "Nano Biomedical Engineering",
    "baseWeight": 4,
    "keywords": [
      "nano",
      "biomedical",
      "engineering"
    ]
  },
  {
    "id": "bio_biomedical_engineering",
    "discipline": "ENGINEERING",
    "name": "Bio Biomedical Engineering",
    "baseWeight": 4,
    "keywords": [
      "biomedical",
      "engineering"
    ]
  },
  {
    "id": "software_biomedical_engineering",
    "discipline": "ENGINEERING",
    "name": "Software Biomedical Engineering",
    "baseWeight": 4,
    "keywords": [
      "software",
      "biomedical",
      "engineering"
    ]
  },
  {
    "id": "digital_biomedical_engineering",
    "discipline": "ENGINEERING",
    "name": "Digital Biomedical Engineering",
    "baseWeight": 4,
    "keywords": [
      "digital",
      "biomedical",
      "engineering"
    ]
  },
  {
    "id": "fusion_biomedical_engineering",
    "discipline": "ENGINEERING",
    "name": "Fusion Biomedical Engineering",
    "baseWeight": 4,
    "keywords": [
      "fusion",
      "biomedical",
      "engineering"
    ]
  },
  {
    "id": "thermal_biomedical_engineering",
    "discipline": "ENGINEERING",
    "name": "Thermal Biomedical Engineering",
    "baseWeight": 4,
    "keywords": [
      "thermal",
      "biomedical",
      "engineering"
    ]
  },
  {
    "id": "automotive_biomedical_engineering",
    "discipline": "ENGINEERING",
    "name": "Automotive Biomedical Engineering",
    "baseWeight": 4,
    "keywords": [
      "automotive",
      "biomedical",
      "engineering"
    ]
  },
  {
    "id": "marine_biomedical_engineering",
    "discipline": "ENGINEERING",
    "name": "Marine Biomedical Engineering",
    "baseWeight": 4,
    "keywords": [
      "marine",
      "biomedical",
      "engineering"
    ]
  },
  {
    "id": "mechanical_nuclear_fusion_engineering",
    "discipline": "ENGINEERING",
    "name": "Mechanical Nuclear & Fusion Engineering",
    "baseWeight": 5,
    "keywords": [
      "mechanical",
      "nuclear",
      "fusion",
      "engineering"
    ]
  },
  {
    "id": "electrical_nuclear_fusion_engineering",
    "discipline": "ENGINEERING",
    "name": "Electrical Nuclear & Fusion Engineering",
    "baseWeight": 5,
    "keywords": [
      "electrical",
      "nuclear",
      "fusion",
      "engineering"
    ]
  },
  {
    "id": "civil_nuclear_fusion_engineering",
    "discipline": "ENGINEERING",
    "name": "Civil Nuclear & Fusion Engineering",
    "baseWeight": 5,
    "keywords": [
      "civil",
      "nuclear",
      "fusion",
      "engineering"
    ]
  },
  {
    "id": "chemical_nuclear_fusion_engineering",
    "discipline": "ENGINEERING",
    "name": "Chemical Nuclear & Fusion Engineering",
    "baseWeight": 5,
    "keywords": [
      "chemical",
      "nuclear",
      "fusion",
      "engineering"
    ]
  },
  {
    "id": "aerospace_nuclear_fusion_engineering",
    "discipline": "ENGINEERING",
    "name": "Aerospace Nuclear & Fusion Engineering",
    "baseWeight": 6,
    "keywords": [
      "aerospace",
      "nuclear",
      "fusion",
      "engineering"
    ]
  },
  {
    "id": "materials_nuclear_fusion_engineering",
    "discipline": "ENGINEERING",
    "name": "Materials Nuclear & Fusion Engineering",
    "baseWeight": 5,
    "keywords": [
      "materials",
      "nuclear",
      "fusion",
      "engineering"
    ]
  },
  {
    "id": "biomedical_nuclear_fusion_engineering",
    "discipline": "ENGINEERING",
    "name": "Biomedical Nuclear & Fusion Engineering",
    "baseWeight": 5,
    "keywords": [
      "biomedical",
      "nuclear",
      "fusion",
      "engineering"
    ]
  },
  {
    "id": "nuclear_fusion_engineering",
    "discipline": "ENGINEERING",
    "name": "Nuclear & Fusion Engineering",
    "baseWeight": 8,
    "keywords": [
      "nuclear",
      "fusion",
      "engineering"
    ]
  },
  {
    "id": "robotic_nuclear_fusion_engineering",
    "discipline": "ENGINEERING",
    "name": "Robotic Nuclear & Fusion Engineering",
    "baseWeight": 5,
    "keywords": [
      "robotic",
      "nuclear",
      "fusion",
      "engineering",
      "robot",
      "mechatronics",
      "actuator",
      "kinematics",
      "manipulator",
      "servomotor"
    ]
  },
  {
    "id": "environmental_nuclear_fusion_engineering",
    "discipline": "ENGINEERING",
    "name": "Environmental Nuclear & Fusion Engineering",
    "baseWeight": 5,
    "keywords": [
      "environmental",
      "nuclear",
      "fusion",
      "engineering"
    ]
  },
  {
    "id": "structural_nuclear_fusion_engineering",
    "discipline": "ENGINEERING",
    "name": "Structural Nuclear & Fusion Engineering",
    "baseWeight": 5,
    "keywords": [
      "structural",
      "nuclear",
      "fusion",
      "engineering"
    ]
  },
  {
    "id": "geotechnical_nuclear_fusion_engineering",
    "discipline": "ENGINEERING",
    "name": "Geotechnical Nuclear & Fusion Engineering",
    "baseWeight": 5,
    "keywords": [
      "geotechnical",
      "nuclear",
      "fusion",
      "engineering"
    ]
  },
  {
    "id": "industrial_nuclear_fusion_engineering",
    "discipline": "ENGINEERING",
    "name": "Industrial Nuclear & Fusion Engineering",
    "baseWeight": 5,
    "keywords": [
      "industrial",
      "nuclear",
      "fusion",
      "engineering"
    ]
  },
  {
    "id": "systems_nuclear_fusion_engineering",
    "discipline": "ENGINEERING",
    "name": "Systems Nuclear & Fusion Engineering",
    "baseWeight": 5,
    "keywords": [
      "systems",
      "nuclear",
      "fusion",
      "engineering"
    ]
  },
  {
    "id": "process_nuclear_fusion_engineering",
    "discipline": "ENGINEERING",
    "name": "Process Nuclear & Fusion Engineering",
    "baseWeight": 5,
    "keywords": [
      "process",
      "nuclear",
      "fusion",
      "engineering"
    ]
  },
  {
    "id": "optical_nuclear_fusion_engineering",
    "discipline": "ENGINEERING",
    "name": "Optical Nuclear & Fusion Engineering",
    "baseWeight": 5,
    "keywords": [
      "optical",
      "nuclear",
      "fusion",
      "engineering"
    ]
  },
  {
    "id": "acoustic_nuclear_fusion_engineering",
    "discipline": "ENGINEERING",
    "name": "Acoustic Nuclear & Fusion Engineering",
    "baseWeight": 5,
    "keywords": [
      "acoustic",
      "nuclear",
      "fusion",
      "engineering"
    ]
  },
  {
    "id": "nano_nuclear_fusion_engineering",
    "discipline": "ENGINEERING",
    "name": "Nano Nuclear & Fusion Engineering",
    "baseWeight": 5,
    "keywords": [
      "nano",
      "nuclear",
      "fusion",
      "engineering"
    ]
  },
  {
    "id": "bio_nuclear_fusion_engineering",
    "discipline": "ENGINEERING",
    "name": "Bio Nuclear & Fusion Engineering",
    "baseWeight": 5,
    "keywords": [
      "nuclear",
      "fusion",
      "engineering"
    ]
  },
  {
    "id": "software_nuclear_fusion_engineering",
    "discipline": "ENGINEERING",
    "name": "Software Nuclear & Fusion Engineering",
    "baseWeight": 5,
    "keywords": [
      "software",
      "nuclear",
      "fusion",
      "engineering"
    ]
  },
  {
    "id": "digital_nuclear_fusion_engineering",
    "discipline": "ENGINEERING",
    "name": "Digital Nuclear & Fusion Engineering",
    "baseWeight": 5,
    "keywords": [
      "digital",
      "nuclear",
      "fusion",
      "engineering"
    ]
  },
  {
    "id": "fusion_nuclear_engineering",
    "discipline": "ENGINEERING",
    "name": "Fusion Nuclear & Engineering",
    "baseWeight": 5,
    "keywords": [
      "fusion",
      "nuclear",
      "engineering"
    ]
  },
  {
    "id": "thermal_nuclear_fusion_engineering",
    "discipline": "ENGINEERING",
    "name": "Thermal Nuclear & Fusion Engineering",
    "baseWeight": 5,
    "keywords": [
      "thermal",
      "nuclear",
      "fusion",
      "engineering"
    ]
  },
  {
    "id": "automotive_nuclear_fusion_engineering",
    "discipline": "ENGINEERING",
    "name": "Automotive Nuclear & Fusion Engineering",
    "baseWeight": 5,
    "keywords": [
      "automotive",
      "nuclear",
      "fusion",
      "engineering"
    ]
  },
  {
    "id": "marine_nuclear_fusion_engineering",
    "discipline": "ENGINEERING",
    "name": "Marine Nuclear & Fusion Engineering",
    "baseWeight": 5,
    "keywords": [
      "marine",
      "nuclear",
      "fusion",
      "engineering"
    ]
  },
  {
    "id": "mechanical_robotics_mechatronics",
    "discipline": "ENGINEERING",
    "name": "Mechanical Robotics & Mechatronics",
    "baseWeight": 6,
    "keywords": [
      "mechanical",
      "robotics",
      "mechatronics",
      "robot",
      "actuator",
      "kinematics",
      "manipulator",
      "servomotor"
    ]
  },
  {
    "id": "electrical_robotics_mechatronics",
    "discipline": "ENGINEERING",
    "name": "Electrical Robotics & Mechatronics",
    "baseWeight": 6,
    "keywords": [
      "electrical",
      "robotics",
      "mechatronics",
      "robot",
      "actuator",
      "kinematics",
      "manipulator",
      "servomotor"
    ]
  },
  {
    "id": "civil_robotics_mechatronics",
    "discipline": "ENGINEERING",
    "name": "Civil Robotics & Mechatronics",
    "baseWeight": 6,
    "keywords": [
      "civil",
      "robotics",
      "mechatronics",
      "robot",
      "actuator",
      "kinematics",
      "manipulator",
      "servomotor"
    ]
  },
  {
    "id": "chemical_robotics_mechatronics",
    "discipline": "ENGINEERING",
    "name": "Chemical Robotics & Mechatronics",
    "baseWeight": 6,
    "keywords": [
      "chemical",
      "robotics",
      "mechatronics",
      "robot",
      "actuator",
      "kinematics",
      "manipulator",
      "servomotor"
    ]
  },
  {
    "id": "aerospace_robotics_mechatronics",
    "discipline": "ENGINEERING",
    "name": "Aerospace Robotics & Mechatronics",
    "baseWeight": 7,
    "keywords": [
      "aerospace",
      "robotics",
      "mechatronics",
      "robot",
      "actuator",
      "kinematics",
      "manipulator",
      "servomotor"
    ]
  },
  {
    "id": "materials_robotics_mechatronics",
    "discipline": "ENGINEERING",
    "name": "Materials Robotics & Mechatronics",
    "baseWeight": 6,
    "keywords": [
      "materials",
      "robotics",
      "mechatronics",
      "robot",
      "actuator",
      "kinematics",
      "manipulator",
      "servomotor"
    ]
  },
  {
    "id": "biomedical_robotics_mechatronics",
    "discipline": "ENGINEERING",
    "name": "Biomedical Robotics & Mechatronics",
    "baseWeight": 6,
    "keywords": [
      "biomedical",
      "robotics",
      "mechatronics",
      "robot",
      "actuator",
      "kinematics",
      "manipulator",
      "servomotor"
    ]
  },
  {
    "id": "nuclear_robotics_mechatronics",
    "discipline": "ENGINEERING",
    "name": "Nuclear Robotics & Mechatronics",
    "baseWeight": 9,
    "keywords": [
      "nuclear",
      "robotics",
      "mechatronics",
      "robot",
      "actuator",
      "kinematics",
      "manipulator",
      "servomotor"
    ]
  },
  {
    "id": "robotic_robotics_mechatronics",
    "discipline": "ENGINEERING",
    "name": "Robotic Robotics & Mechatronics",
    "baseWeight": 6,
    "keywords": [
      "robotic",
      "robotics",
      "mechatronics",
      "robot",
      "actuator",
      "kinematics",
      "manipulator",
      "servomotor"
    ]
  },
  {
    "id": "environmental_robotics_mechatronics",
    "discipline": "ENGINEERING",
    "name": "Environmental Robotics & Mechatronics",
    "baseWeight": 6,
    "keywords": [
      "environmental",
      "robotics",
      "mechatronics",
      "robot",
      "actuator",
      "kinematics",
      "manipulator",
      "servomotor"
    ]
  },
  {
    "id": "structural_robotics_mechatronics",
    "discipline": "ENGINEERING",
    "name": "Structural Robotics & Mechatronics",
    "baseWeight": 6,
    "keywords": [
      "structural",
      "robotics",
      "mechatronics",
      "robot",
      "actuator",
      "kinematics",
      "manipulator",
      "servomotor"
    ]
  },
  {
    "id": "geotechnical_robotics_mechatronics",
    "discipline": "ENGINEERING",
    "name": "Geotechnical Robotics & Mechatronics",
    "baseWeight": 6,
    "keywords": [
      "geotechnical",
      "robotics",
      "mechatronics",
      "robot",
      "actuator",
      "kinematics",
      "manipulator",
      "servomotor"
    ]
  },
  {
    "id": "industrial_robotics_mechatronics",
    "discipline": "ENGINEERING",
    "name": "Industrial Robotics & Mechatronics",
    "baseWeight": 6,
    "keywords": [
      "industrial",
      "robotics",
      "mechatronics",
      "robot",
      "actuator",
      "kinematics",
      "manipulator",
      "servomotor"
    ]
  },
  {
    "id": "systems_robotics_mechatronics",
    "discipline": "ENGINEERING",
    "name": "Systems Robotics & Mechatronics",
    "baseWeight": 6,
    "keywords": [
      "systems",
      "robotics",
      "mechatronics",
      "robot",
      "actuator",
      "kinematics",
      "manipulator",
      "servomotor"
    ]
  },
  {
    "id": "process_robotics_mechatronics",
    "discipline": "ENGINEERING",
    "name": "Process Robotics & Mechatronics",
    "baseWeight": 6,
    "keywords": [
      "process",
      "robotics",
      "mechatronics",
      "robot",
      "actuator",
      "kinematics",
      "manipulator",
      "servomotor"
    ]
  },
  {
    "id": "optical_robotics_mechatronics",
    "discipline": "ENGINEERING",
    "name": "Optical Robotics & Mechatronics",
    "baseWeight": 6,
    "keywords": [
      "optical",
      "robotics",
      "mechatronics",
      "robot",
      "actuator",
      "kinematics",
      "manipulator",
      "servomotor"
    ]
  },
  {
    "id": "acoustic_robotics_mechatronics",
    "discipline": "ENGINEERING",
    "name": "Acoustic Robotics & Mechatronics",
    "baseWeight": 6,
    "keywords": [
      "acoustic",
      "robotics",
      "mechatronics",
      "robot",
      "actuator",
      "kinematics",
      "manipulator",
      "servomotor"
    ]
  },
  {
    "id": "nano_robotics_mechatronics",
    "discipline": "ENGINEERING",
    "name": "Nano Robotics & Mechatronics",
    "baseWeight": 6,
    "keywords": [
      "nano",
      "robotics",
      "mechatronics",
      "robot",
      "actuator",
      "kinematics",
      "manipulator",
      "servomotor"
    ]
  },
  {
    "id": "bio_robotics_mechatronics",
    "discipline": "ENGINEERING",
    "name": "Bio Robotics & Mechatronics",
    "baseWeight": 6,
    "keywords": [
      "robotics",
      "mechatronics",
      "robot",
      "actuator",
      "kinematics",
      "manipulator",
      "servomotor"
    ]
  },
  {
    "id": "software_robotics_mechatronics",
    "discipline": "ENGINEERING",
    "name": "Software Robotics & Mechatronics",
    "baseWeight": 6,
    "keywords": [
      "software",
      "robotics",
      "mechatronics",
      "robot",
      "actuator",
      "kinematics",
      "manipulator",
      "servomotor"
    ]
  },
  {
    "id": "digital_robotics_mechatronics",
    "discipline": "ENGINEERING",
    "name": "Digital Robotics & Mechatronics",
    "baseWeight": 6,
    "keywords": [
      "digital",
      "robotics",
      "mechatronics",
      "robot",
      "actuator",
      "kinematics",
      "manipulator",
      "servomotor"
    ]
  },
  {
    "id": "fusion_robotics_mechatronics",
    "discipline": "ENGINEERING",
    "name": "Fusion Robotics & Mechatronics",
    "baseWeight": 6,
    "keywords": [
      "fusion",
      "robotics",
      "mechatronics",
      "robot",
      "actuator",
      "kinematics",
      "manipulator",
      "servomotor"
    ]
  },
  {
    "id": "thermal_robotics_mechatronics",
    "discipline": "ENGINEERING",
    "name": "Thermal Robotics & Mechatronics",
    "baseWeight": 6,
    "keywords": [
      "thermal",
      "robotics",
      "mechatronics",
      "robot",
      "actuator",
      "kinematics",
      "manipulator",
      "servomotor"
    ]
  },
  {
    "id": "automotive_robotics_mechatronics",
    "discipline": "ENGINEERING",
    "name": "Automotive Robotics & Mechatronics",
    "baseWeight": 6,
    "keywords": [
      "automotive",
      "robotics",
      "mechatronics",
      "robot",
      "actuator",
      "kinematics",
      "manipulator",
      "servomotor"
    ]
  },
  {
    "id": "marine_robotics_mechatronics",
    "discipline": "ENGINEERING",
    "name": "Marine Robotics & Mechatronics",
    "baseWeight": 6,
    "keywords": [
      "marine",
      "robotics",
      "mechatronics",
      "robot",
      "actuator",
      "kinematics",
      "manipulator",
      "servomotor"
    ]
  },
  {
    "id": "mechanical_environmental_renewable_energy",
    "discipline": "ENGINEERING",
    "name": "Mechanical Environmental & Renewable Energy",
    "baseWeight": 4,
    "keywords": [
      "mechanical",
      "environmental",
      "renewable",
      "energy",
      "fusion",
      "fission",
      "battery",
      "photovoltaic",
      "grid",
      "power"
    ]
  },
  {
    "id": "electrical_environmental_renewable_energy",
    "discipline": "ENGINEERING",
    "name": "Electrical Environmental & Renewable Energy",
    "baseWeight": 4,
    "keywords": [
      "electrical",
      "environmental",
      "renewable",
      "energy",
      "fusion",
      "fission",
      "battery",
      "photovoltaic",
      "grid",
      "power"
    ]
  },
  {
    "id": "civil_environmental_renewable_energy",
    "discipline": "ENGINEERING",
    "name": "Civil Environmental & Renewable Energy",
    "baseWeight": 4,
    "keywords": [
      "civil",
      "environmental",
      "renewable",
      "energy",
      "fusion",
      "fission",
      "battery",
      "photovoltaic",
      "grid",
      "power"
    ]
  },
  {
    "id": "chemical_environmental_renewable_energy",
    "discipline": "ENGINEERING",
    "name": "Chemical Environmental & Renewable Energy",
    "baseWeight": 4,
    "keywords": [
      "chemical",
      "environmental",
      "renewable",
      "energy",
      "fusion",
      "fission",
      "battery",
      "photovoltaic",
      "grid",
      "power"
    ]
  },
  {
    "id": "aerospace_environmental_renewable_energy",
    "discipline": "ENGINEERING",
    "name": "Aerospace Environmental & Renewable Energy",
    "baseWeight": 5,
    "keywords": [
      "aerospace",
      "environmental",
      "renewable",
      "energy",
      "fusion",
      "fission",
      "battery",
      "photovoltaic",
      "grid",
      "power"
    ]
  },
  {
    "id": "materials_environmental_renewable_energy",
    "discipline": "ENGINEERING",
    "name": "Materials Environmental & Renewable Energy",
    "baseWeight": 4,
    "keywords": [
      "materials",
      "environmental",
      "renewable",
      "energy",
      "fusion",
      "fission",
      "battery",
      "photovoltaic",
      "grid",
      "power"
    ]
  },
  {
    "id": "biomedical_environmental_renewable_energy",
    "discipline": "ENGINEERING",
    "name": "Biomedical Environmental & Renewable Energy",
    "baseWeight": 4,
    "keywords": [
      "biomedical",
      "environmental",
      "renewable",
      "energy",
      "fusion",
      "fission",
      "battery",
      "photovoltaic",
      "grid",
      "power"
    ]
  },
  {
    "id": "nuclear_environmental_renewable_energy",
    "discipline": "ENGINEERING",
    "name": "Nuclear Environmental & Renewable Energy",
    "baseWeight": 7,
    "keywords": [
      "nuclear",
      "environmental",
      "renewable",
      "energy",
      "fusion",
      "fission",
      "battery",
      "photovoltaic",
      "grid",
      "power"
    ]
  },
  {
    "id": "robotic_environmental_renewable_energy",
    "discipline": "ENGINEERING",
    "name": "Robotic Environmental & Renewable Energy",
    "baseWeight": 4,
    "keywords": [
      "robotic",
      "environmental",
      "renewable",
      "energy",
      "robot",
      "mechatronics",
      "actuator",
      "kinematics",
      "manipulator",
      "servomotor",
      "fusion",
      "fission",
      "battery",
      "photovoltaic",
      "grid",
      "power"
    ]
  },
  {
    "id": "environmental_renewable_energy",
    "discipline": "ENGINEERING",
    "name": "Environmental & Renewable Energy",
    "baseWeight": 4,
    "keywords": [
      "environmental",
      "renewable",
      "energy",
      "fusion",
      "fission",
      "battery",
      "photovoltaic",
      "grid",
      "power"
    ]
  },
  {
    "id": "structural_environmental_renewable_energy",
    "discipline": "ENGINEERING",
    "name": "Structural Environmental & Renewable Energy",
    "baseWeight": 4,
    "keywords": [
      "structural",
      "environmental",
      "renewable",
      "energy",
      "fusion",
      "fission",
      "battery",
      "photovoltaic",
      "grid",
      "power"
    ]
  },
  {
    "id": "geotechnical_environmental_renewable_energy",
    "discipline": "ENGINEERING",
    "name": "Geotechnical Environmental & Renewable Energy",
    "baseWeight": 4,
    "keywords": [
      "geotechnical",
      "environmental",
      "renewable",
      "energy",
      "fusion",
      "fission",
      "battery",
      "photovoltaic",
      "grid",
      "power"
    ]
  },
  {
    "id": "industrial_environmental_renewable_energy",
    "discipline": "ENGINEERING",
    "name": "Industrial Environmental & Renewable Energy",
    "baseWeight": 4,
    "keywords": [
      "industrial",
      "environmental",
      "renewable",
      "energy",
      "fusion",
      "fission",
      "battery",
      "photovoltaic",
      "grid",
      "power"
    ]
  },
  {
    "id": "systems_environmental_renewable_energy",
    "discipline": "ENGINEERING",
    "name": "Systems Environmental & Renewable Energy",
    "baseWeight": 4,
    "keywords": [
      "systems",
      "environmental",
      "renewable",
      "energy",
      "fusion",
      "fission",
      "battery",
      "photovoltaic",
      "grid",
      "power"
    ]
  },
  {
    "id": "process_environmental_renewable_energy",
    "discipline": "ENGINEERING",
    "name": "Process Environmental & Renewable Energy",
    "baseWeight": 4,
    "keywords": [
      "process",
      "environmental",
      "renewable",
      "energy",
      "fusion",
      "fission",
      "battery",
      "photovoltaic",
      "grid",
      "power"
    ]
  },
  {
    "id": "optical_environmental_renewable_energy",
    "discipline": "ENGINEERING",
    "name": "Optical Environmental & Renewable Energy",
    "baseWeight": 4,
    "keywords": [
      "optical",
      "environmental",
      "renewable",
      "energy",
      "fusion",
      "fission",
      "battery",
      "photovoltaic",
      "grid",
      "power"
    ]
  },
  {
    "id": "acoustic_environmental_renewable_energy",
    "discipline": "ENGINEERING",
    "name": "Acoustic Environmental & Renewable Energy",
    "baseWeight": 4,
    "keywords": [
      "acoustic",
      "environmental",
      "renewable",
      "energy",
      "fusion",
      "fission",
      "battery",
      "photovoltaic",
      "grid",
      "power"
    ]
  },
  {
    "id": "nano_environmental_renewable_energy",
    "discipline": "ENGINEERING",
    "name": "Nano Environmental & Renewable Energy",
    "baseWeight": 4,
    "keywords": [
      "nano",
      "environmental",
      "renewable",
      "energy",
      "fusion",
      "fission",
      "battery",
      "photovoltaic",
      "grid",
      "power"
    ]
  },
  {
    "id": "bio_environmental_renewable_energy",
    "discipline": "ENGINEERING",
    "name": "Bio Environmental & Renewable Energy",
    "baseWeight": 4,
    "keywords": [
      "environmental",
      "renewable",
      "energy",
      "fusion",
      "fission",
      "battery",
      "photovoltaic",
      "grid",
      "power"
    ]
  },
  {
    "id": "software_environmental_renewable_energy",
    "discipline": "ENGINEERING",
    "name": "Software Environmental & Renewable Energy",
    "baseWeight": 4,
    "keywords": [
      "software",
      "environmental",
      "renewable",
      "energy",
      "fusion",
      "fission",
      "battery",
      "photovoltaic",
      "grid",
      "power"
    ]
  },
  {
    "id": "digital_environmental_renewable_energy",
    "discipline": "ENGINEERING",
    "name": "Digital Environmental & Renewable Energy",
    "baseWeight": 4,
    "keywords": [
      "digital",
      "environmental",
      "renewable",
      "energy",
      "fusion",
      "fission",
      "battery",
      "photovoltaic",
      "grid",
      "power"
    ]
  },
  {
    "id": "fusion_environmental_renewable_energy",
    "discipline": "ENGINEERING",
    "name": "Fusion Environmental & Renewable Energy",
    "baseWeight": 4,
    "keywords": [
      "fusion",
      "environmental",
      "renewable",
      "energy",
      "fission",
      "battery",
      "photovoltaic",
      "grid",
      "power"
    ]
  },
  {
    "id": "thermal_environmental_renewable_energy",
    "discipline": "ENGINEERING",
    "name": "Thermal Environmental & Renewable Energy",
    "baseWeight": 4,
    "keywords": [
      "thermal",
      "environmental",
      "renewable",
      "energy",
      "fusion",
      "fission",
      "battery",
      "photovoltaic",
      "grid",
      "power"
    ]
  },
  {
    "id": "automotive_environmental_renewable_energy",
    "discipline": "ENGINEERING",
    "name": "Automotive Environmental & Renewable Energy",
    "baseWeight": 4,
    "keywords": [
      "automotive",
      "environmental",
      "renewable",
      "energy",
      "fusion",
      "fission",
      "battery",
      "photovoltaic",
      "grid",
      "power"
    ]
  },
  {
    "id": "marine_environmental_renewable_energy",
    "discipline": "ENGINEERING",
    "name": "Marine Environmental & Renewable Energy",
    "baseWeight": 4,
    "keywords": [
      "marine",
      "environmental",
      "renewable",
      "energy",
      "fusion",
      "fission",
      "battery",
      "photovoltaic",
      "grid",
      "power"
    ]
  },
  {
    "id": "clinical_anatomy_pathology",
    "discipline": "MEDICINE",
    "name": "Clinical Anatomy & Pathology",
    "baseWeight": 4,
    "keywords": [
      "clinical",
      "anatomy",
      "pathology"
    ]
  },
  {
    "id": "pathological_anatomy_pathology",
    "discipline": "MEDICINE",
    "name": "Pathological Anatomy & Pathology",
    "baseWeight": 4,
    "keywords": [
      "pathological",
      "anatomy",
      "pathology"
    ]
  },
  {
    "id": "pharmacological_anatomy_pathology",
    "discipline": "MEDICINE",
    "name": "Pharmacological Anatomy & Pathology",
    "baseWeight": 4,
    "keywords": [
      "pharmacological",
      "anatomy",
      "pathology"
    ]
  },
  {
    "id": "toxicological_anatomy_pathology",
    "discipline": "MEDICINE",
    "name": "Toxicological Anatomy & Pathology",
    "baseWeight": 4,
    "keywords": [
      "toxicological",
      "anatomy",
      "pathology"
    ]
  },
  {
    "id": "epidemiological_anatomy_pathology",
    "discipline": "MEDICINE",
    "name": "Epidemiological Anatomy & Pathology",
    "baseWeight": 4,
    "keywords": [
      "epidemiological",
      "anatomy",
      "pathology"
    ]
  },
  {
    "id": "immunological_anatomy_pathology",
    "discipline": "MEDICINE",
    "name": "Immunological Anatomy & Pathology",
    "baseWeight": 4,
    "keywords": [
      "immunological",
      "anatomy",
      "pathology"
    ]
  },
  {
    "id": "oncological_anatomy_pathology",
    "discipline": "MEDICINE",
    "name": "Oncological Anatomy & Pathology",
    "baseWeight": 4,
    "keywords": [
      "oncological",
      "anatomy",
      "pathology"
    ]
  },
  {
    "id": "cardiovascular_anatomy_pathology",
    "discipline": "MEDICINE",
    "name": "Cardiovascular Anatomy & Pathology",
    "baseWeight": 4,
    "keywords": [
      "cardiovascular",
      "anatomy",
      "pathology"
    ]
  },
  {
    "id": "neurological_anatomy_pathology",
    "discipline": "MEDICINE",
    "name": "Neurological Anatomy & Pathology",
    "baseWeight": 4,
    "keywords": [
      "neurological",
      "anatomy",
      "pathology"
    ]
  },
  {
    "id": "psychiatric_anatomy_pathology",
    "discipline": "MEDICINE",
    "name": "Psychiatric Anatomy & Pathology",
    "baseWeight": 4,
    "keywords": [
      "psychiatric",
      "anatomy",
      "pathology"
    ]
  },
  {
    "id": "radiological_anatomy_pathology",
    "discipline": "MEDICINE",
    "name": "Radiological Anatomy & Pathology",
    "baseWeight": 4,
    "keywords": [
      "radiological",
      "anatomy",
      "pathology"
    ]
  },
  {
    "id": "surgical_anatomy_pathology",
    "discipline": "MEDICINE",
    "name": "Surgical Anatomy & Pathology",
    "baseWeight": 4,
    "keywords": [
      "surgical",
      "anatomy",
      "pathology"
    ]
  },
  {
    "id": "anesthesiologic_anatomy_pathology",
    "discipline": "MEDICINE",
    "name": "Anesthesiologic Anatomy & Pathology",
    "baseWeight": 4,
    "keywords": [
      "anesthesiologic",
      "anatomy",
      "pathology"
    ]
  },
  {
    "id": "dermatological_anatomy_pathology",
    "discipline": "MEDICINE",
    "name": "Dermatological Anatomy & Pathology",
    "baseWeight": 4,
    "keywords": [
      "dermatological",
      "anatomy",
      "pathology"
    ]
  },
  {
    "id": "pediatric_anatomy_pathology",
    "discipline": "MEDICINE",
    "name": "Pediatric Anatomy & Pathology",
    "baseWeight": 4,
    "keywords": [
      "pediatric",
      "anatomy",
      "pathology"
    ]
  },
  {
    "id": "geriatric_anatomy_pathology",
    "discipline": "MEDICINE",
    "name": "Geriatric Anatomy & Pathology",
    "baseWeight": 4,
    "keywords": [
      "geriatric",
      "anatomy",
      "pathology"
    ]
  },
  {
    "id": "internal_anatomy_pathology",
    "discipline": "MEDICINE",
    "name": "Internal Anatomy & Pathology",
    "baseWeight": 4,
    "keywords": [
      "internal",
      "anatomy",
      "pathology"
    ]
  },
  {
    "id": "orthopedic_anatomy_pathology",
    "discipline": "MEDICINE",
    "name": "Orthopedic Anatomy & Pathology",
    "baseWeight": 4,
    "keywords": [
      "orthopedic",
      "anatomy",
      "pathology"
    ]
  },
  {
    "id": "forensic_anatomy_pathology",
    "discipline": "MEDICINE",
    "name": "Forensic Anatomy & Pathology",
    "baseWeight": 4,
    "keywords": [
      "forensic",
      "anatomy",
      "pathology"
    ]
  },
  {
    "id": "genetic_anatomy_pathology",
    "discipline": "MEDICINE",
    "name": "Genetic Anatomy & Pathology",
    "baseWeight": 4,
    "keywords": [
      "genetic",
      "anatomy",
      "pathology",
      "dna",
      "rna",
      "gene",
      "crispr",
      "genetics",
      "genome",
      "nucleotide"
    ]
  },
  {
    "id": "preventive_anatomy_pathology",
    "discipline": "MEDICINE",
    "name": "Preventive Anatomy & Pathology",
    "baseWeight": 4,
    "keywords": [
      "preventive",
      "anatomy",
      "pathology"
    ]
  },
  {
    "id": "ophthalmic_anatomy_pathology",
    "discipline": "MEDICINE",
    "name": "Ophthalmic Anatomy & Pathology",
    "baseWeight": 4,
    "keywords": [
      "ophthalmic",
      "anatomy",
      "pathology"
    ]
  },
  {
    "id": "therapeutic_anatomy_pathology",
    "discipline": "MEDICINE",
    "name": "Therapeutic Anatomy & Pathology",
    "baseWeight": 4,
    "keywords": [
      "therapeutic",
      "anatomy",
      "pathology"
    ]
  },
  {
    "id": "diagnostic_anatomy_pathology",
    "discipline": "MEDICINE",
    "name": "Diagnostic Anatomy & Pathology",
    "baseWeight": 4,
    "keywords": [
      "diagnostic",
      "anatomy",
      "pathology"
    ]
  },
  {
    "id": "nutritional_anatomy_pathology",
    "discipline": "MEDICINE",
    "name": "Nutritional Anatomy & Pathology",
    "baseWeight": 4,
    "keywords": [
      "nutritional",
      "anatomy",
      "pathology"
    ]
  },
  {
    "id": "clinical_pharmacology_toxicology",
    "discipline": "MEDICINE",
    "name": "Clinical Pharmacology & Toxicology",
    "baseWeight": 5,
    "keywords": [
      "clinical",
      "pharmacology",
      "toxicology"
    ]
  },
  {
    "id": "pathological_pharmacology_toxicology",
    "discipline": "MEDICINE",
    "name": "Pathological Pharmacology & Toxicology",
    "baseWeight": 5,
    "keywords": [
      "pathological",
      "pharmacology",
      "toxicology"
    ]
  },
  {
    "id": "pharmacological_pharmacology_toxicology",
    "discipline": "MEDICINE",
    "name": "Pharmacological Pharmacology & Toxicology",
    "baseWeight": 5,
    "keywords": [
      "pharmacological",
      "pharmacology",
      "toxicology"
    ]
  },
  {
    "id": "toxicological_pharmacology_toxicology",
    "discipline": "MEDICINE",
    "name": "Toxicological Pharmacology & Toxicology",
    "baseWeight": 5,
    "keywords": [
      "toxicological",
      "pharmacology",
      "toxicology"
    ]
  },
  {
    "id": "epidemiological_pharmacology_toxicology",
    "discipline": "MEDICINE",
    "name": "Epidemiological Pharmacology & Toxicology",
    "baseWeight": 5,
    "keywords": [
      "epidemiological",
      "pharmacology",
      "toxicology"
    ]
  },
  {
    "id": "immunological_pharmacology_toxicology",
    "discipline": "MEDICINE",
    "name": "Immunological Pharmacology & Toxicology",
    "baseWeight": 5,
    "keywords": [
      "immunological",
      "pharmacology",
      "toxicology"
    ]
  },
  {
    "id": "oncological_pharmacology_toxicology",
    "discipline": "MEDICINE",
    "name": "Oncological Pharmacology & Toxicology",
    "baseWeight": 5,
    "keywords": [
      "oncological",
      "pharmacology",
      "toxicology"
    ]
  },
  {
    "id": "cardiovascular_pharmacology_toxicology",
    "discipline": "MEDICINE",
    "name": "Cardiovascular Pharmacology & Toxicology",
    "baseWeight": 5,
    "keywords": [
      "cardiovascular",
      "pharmacology",
      "toxicology"
    ]
  },
  {
    "id": "neurological_pharmacology_toxicology",
    "discipline": "MEDICINE",
    "name": "Neurological Pharmacology & Toxicology",
    "baseWeight": 5,
    "keywords": [
      "neurological",
      "pharmacology",
      "toxicology"
    ]
  },
  {
    "id": "psychiatric_pharmacology_toxicology",
    "discipline": "MEDICINE",
    "name": "Psychiatric Pharmacology & Toxicology",
    "baseWeight": 5,
    "keywords": [
      "psychiatric",
      "pharmacology",
      "toxicology"
    ]
  },
  {
    "id": "radiological_pharmacology_toxicology",
    "discipline": "MEDICINE",
    "name": "Radiological Pharmacology & Toxicology",
    "baseWeight": 5,
    "keywords": [
      "radiological",
      "pharmacology",
      "toxicology"
    ]
  },
  {
    "id": "surgical_pharmacology_toxicology",
    "discipline": "MEDICINE",
    "name": "Surgical Pharmacology & Toxicology",
    "baseWeight": 5,
    "keywords": [
      "surgical",
      "pharmacology",
      "toxicology"
    ]
  },
  {
    "id": "anesthesiologic_pharmacology_toxicology",
    "discipline": "MEDICINE",
    "name": "Anesthesiologic Pharmacology & Toxicology",
    "baseWeight": 5,
    "keywords": [
      "anesthesiologic",
      "pharmacology",
      "toxicology"
    ]
  },
  {
    "id": "dermatological_pharmacology_toxicology",
    "discipline": "MEDICINE",
    "name": "Dermatological Pharmacology & Toxicology",
    "baseWeight": 5,
    "keywords": [
      "dermatological",
      "pharmacology",
      "toxicology"
    ]
  },
  {
    "id": "pediatric_pharmacology_toxicology",
    "discipline": "MEDICINE",
    "name": "Pediatric Pharmacology & Toxicology",
    "baseWeight": 5,
    "keywords": [
      "pediatric",
      "pharmacology",
      "toxicology"
    ]
  },
  {
    "id": "geriatric_pharmacology_toxicology",
    "discipline": "MEDICINE",
    "name": "Geriatric Pharmacology & Toxicology",
    "baseWeight": 5,
    "keywords": [
      "geriatric",
      "pharmacology",
      "toxicology"
    ]
  },
  {
    "id": "internal_pharmacology_toxicology",
    "discipline": "MEDICINE",
    "name": "Internal Pharmacology & Toxicology",
    "baseWeight": 5,
    "keywords": [
      "internal",
      "pharmacology",
      "toxicology"
    ]
  },
  {
    "id": "orthopedic_pharmacology_toxicology",
    "discipline": "MEDICINE",
    "name": "Orthopedic Pharmacology & Toxicology",
    "baseWeight": 5,
    "keywords": [
      "orthopedic",
      "pharmacology",
      "toxicology"
    ]
  },
  {
    "id": "forensic_pharmacology_toxicology",
    "discipline": "MEDICINE",
    "name": "Forensic Pharmacology & Toxicology",
    "baseWeight": 5,
    "keywords": [
      "forensic",
      "pharmacology",
      "toxicology"
    ]
  },
  {
    "id": "genetic_pharmacology_toxicology",
    "discipline": "MEDICINE",
    "name": "Genetic Pharmacology & Toxicology",
    "baseWeight": 5,
    "keywords": [
      "genetic",
      "pharmacology",
      "toxicology",
      "dna",
      "rna",
      "gene",
      "crispr",
      "genetics",
      "genome",
      "nucleotide"
    ]
  },
  {
    "id": "preventive_pharmacology_toxicology",
    "discipline": "MEDICINE",
    "name": "Preventive Pharmacology & Toxicology",
    "baseWeight": 5,
    "keywords": [
      "preventive",
      "pharmacology",
      "toxicology"
    ]
  },
  {
    "id": "ophthalmic_pharmacology_toxicology",
    "discipline": "MEDICINE",
    "name": "Ophthalmic Pharmacology & Toxicology",
    "baseWeight": 5,
    "keywords": [
      "ophthalmic",
      "pharmacology",
      "toxicology"
    ]
  },
  {
    "id": "therapeutic_pharmacology_toxicology",
    "discipline": "MEDICINE",
    "name": "Therapeutic Pharmacology & Toxicology",
    "baseWeight": 5,
    "keywords": [
      "therapeutic",
      "pharmacology",
      "toxicology"
    ]
  },
  {
    "id": "diagnostic_pharmacology_toxicology",
    "discipline": "MEDICINE",
    "name": "Diagnostic Pharmacology & Toxicology",
    "baseWeight": 5,
    "keywords": [
      "diagnostic",
      "pharmacology",
      "toxicology"
    ]
  },
  {
    "id": "nutritional_pharmacology_toxicology",
    "discipline": "MEDICINE",
    "name": "Nutritional Pharmacology & Toxicology",
    "baseWeight": 5,
    "keywords": [
      "nutritional",
      "pharmacology",
      "toxicology"
    ]
  },
  {
    "id": "clinical_epidemiology_public_health",
    "discipline": "MEDICINE",
    "name": "Clinical Epidemiology & Public Health",
    "baseWeight": 6,
    "keywords": [
      "clinical",
      "epidemiology",
      "public",
      "health"
    ]
  },
  {
    "id": "pathological_epidemiology_public_health",
    "discipline": "MEDICINE",
    "name": "Pathological Epidemiology & Public Health",
    "baseWeight": 6,
    "keywords": [
      "pathological",
      "epidemiology",
      "public",
      "health"
    ]
  },
  {
    "id": "pharmacological_epidemiology_public_health",
    "discipline": "MEDICINE",
    "name": "Pharmacological Epidemiology & Public Health",
    "baseWeight": 6,
    "keywords": [
      "pharmacological",
      "epidemiology",
      "public",
      "health"
    ]
  },
  {
    "id": "toxicological_epidemiology_public_health",
    "discipline": "MEDICINE",
    "name": "Toxicological Epidemiology & Public Health",
    "baseWeight": 6,
    "keywords": [
      "toxicological",
      "epidemiology",
      "public",
      "health"
    ]
  },
  {
    "id": "epidemiological_epidemiology_public_health",
    "discipline": "MEDICINE",
    "name": "Epidemiological Epidemiology & Public Health",
    "baseWeight": 6,
    "keywords": [
      "epidemiological",
      "epidemiology",
      "public",
      "health"
    ]
  },
  {
    "id": "immunological_epidemiology_public_health",
    "discipline": "MEDICINE",
    "name": "Immunological Epidemiology & Public Health",
    "baseWeight": 6,
    "keywords": [
      "immunological",
      "epidemiology",
      "public",
      "health"
    ]
  },
  {
    "id": "oncological_epidemiology_public_health",
    "discipline": "MEDICINE",
    "name": "Oncological Epidemiology & Public Health",
    "baseWeight": 6,
    "keywords": [
      "oncological",
      "epidemiology",
      "public",
      "health"
    ]
  },
  {
    "id": "cardiovascular_epidemiology_public_health",
    "discipline": "MEDICINE",
    "name": "Cardiovascular Epidemiology & Public Health",
    "baseWeight": 6,
    "keywords": [
      "cardiovascular",
      "epidemiology",
      "public",
      "health"
    ]
  },
  {
    "id": "neurological_epidemiology_public_health",
    "discipline": "MEDICINE",
    "name": "Neurological Epidemiology & Public Health",
    "baseWeight": 6,
    "keywords": [
      "neurological",
      "epidemiology",
      "public",
      "health"
    ]
  },
  {
    "id": "psychiatric_epidemiology_public_health",
    "discipline": "MEDICINE",
    "name": "Psychiatric Epidemiology & Public Health",
    "baseWeight": 6,
    "keywords": [
      "psychiatric",
      "epidemiology",
      "public",
      "health"
    ]
  },
  {
    "id": "radiological_epidemiology_public_health",
    "discipline": "MEDICINE",
    "name": "Radiological Epidemiology & Public Health",
    "baseWeight": 6,
    "keywords": [
      "radiological",
      "epidemiology",
      "public",
      "health"
    ]
  },
  {
    "id": "surgical_epidemiology_public_health",
    "discipline": "MEDICINE",
    "name": "Surgical Epidemiology & Public Health",
    "baseWeight": 6,
    "keywords": [
      "surgical",
      "epidemiology",
      "public",
      "health"
    ]
  },
  {
    "id": "anesthesiologic_epidemiology_public_health",
    "discipline": "MEDICINE",
    "name": "Anesthesiologic Epidemiology & Public Health",
    "baseWeight": 6,
    "keywords": [
      "anesthesiologic",
      "epidemiology",
      "public",
      "health"
    ]
  },
  {
    "id": "dermatological_epidemiology_public_health",
    "discipline": "MEDICINE",
    "name": "Dermatological Epidemiology & Public Health",
    "baseWeight": 6,
    "keywords": [
      "dermatological",
      "epidemiology",
      "public",
      "health"
    ]
  },
  {
    "id": "pediatric_epidemiology_public_health",
    "discipline": "MEDICINE",
    "name": "Pediatric Epidemiology & Public Health",
    "baseWeight": 6,
    "keywords": [
      "pediatric",
      "epidemiology",
      "public",
      "health"
    ]
  },
  {
    "id": "geriatric_epidemiology_public_health",
    "discipline": "MEDICINE",
    "name": "Geriatric Epidemiology & Public Health",
    "baseWeight": 6,
    "keywords": [
      "geriatric",
      "epidemiology",
      "public",
      "health"
    ]
  },
  {
    "id": "internal_epidemiology_public_health",
    "discipline": "MEDICINE",
    "name": "Internal Epidemiology & Public Health",
    "baseWeight": 6,
    "keywords": [
      "internal",
      "epidemiology",
      "public",
      "health"
    ]
  },
  {
    "id": "orthopedic_epidemiology_public_health",
    "discipline": "MEDICINE",
    "name": "Orthopedic Epidemiology & Public Health",
    "baseWeight": 6,
    "keywords": [
      "orthopedic",
      "epidemiology",
      "public",
      "health"
    ]
  },
  {
    "id": "forensic_epidemiology_public_health",
    "discipline": "MEDICINE",
    "name": "Forensic Epidemiology & Public Health",
    "baseWeight": 6,
    "keywords": [
      "forensic",
      "epidemiology",
      "public",
      "health"
    ]
  },
  {
    "id": "genetic_epidemiology_public_health",
    "discipline": "MEDICINE",
    "name": "Genetic Epidemiology & Public Health",
    "baseWeight": 6,
    "keywords": [
      "genetic",
      "epidemiology",
      "public",
      "health",
      "dna",
      "rna",
      "gene",
      "crispr",
      "genetics",
      "genome",
      "nucleotide"
    ]
  },
  {
    "id": "preventive_epidemiology_public_health",
    "discipline": "MEDICINE",
    "name": "Preventive Epidemiology & Public Health",
    "baseWeight": 6,
    "keywords": [
      "preventive",
      "epidemiology",
      "public",
      "health"
    ]
  },
  {
    "id": "ophthalmic_epidemiology_public_health",
    "discipline": "MEDICINE",
    "name": "Ophthalmic Epidemiology & Public Health",
    "baseWeight": 6,
    "keywords": [
      "ophthalmic",
      "epidemiology",
      "public",
      "health"
    ]
  },
  {
    "id": "therapeutic_epidemiology_public_health",
    "discipline": "MEDICINE",
    "name": "Therapeutic Epidemiology & Public Health",
    "baseWeight": 6,
    "keywords": [
      "therapeutic",
      "epidemiology",
      "public",
      "health"
    ]
  },
  {
    "id": "diagnostic_epidemiology_public_health",
    "discipline": "MEDICINE",
    "name": "Diagnostic Epidemiology & Public Health",
    "baseWeight": 6,
    "keywords": [
      "diagnostic",
      "epidemiology",
      "public",
      "health"
    ]
  },
  {
    "id": "nutritional_epidemiology_public_health",
    "discipline": "MEDICINE",
    "name": "Nutritional Epidemiology & Public Health",
    "baseWeight": 6,
    "keywords": [
      "nutritional",
      "epidemiology",
      "public",
      "health"
    ]
  },
  {
    "id": "clinical_cardiology_pulmonology",
    "discipline": "MEDICINE",
    "name": "Clinical Cardiology & Pulmonology",
    "baseWeight": 4,
    "keywords": [
      "clinical",
      "cardiology",
      "pulmonology"
    ]
  },
  {
    "id": "pathological_cardiology_pulmonology",
    "discipline": "MEDICINE",
    "name": "Pathological Cardiology & Pulmonology",
    "baseWeight": 4,
    "keywords": [
      "pathological",
      "cardiology",
      "pulmonology"
    ]
  },
  {
    "id": "pharmacological_cardiology_pulmonology",
    "discipline": "MEDICINE",
    "name": "Pharmacological Cardiology & Pulmonology",
    "baseWeight": 4,
    "keywords": [
      "pharmacological",
      "cardiology",
      "pulmonology"
    ]
  },
  {
    "id": "toxicological_cardiology_pulmonology",
    "discipline": "MEDICINE",
    "name": "Toxicological Cardiology & Pulmonology",
    "baseWeight": 4,
    "keywords": [
      "toxicological",
      "cardiology",
      "pulmonology"
    ]
  },
  {
    "id": "epidemiological_cardiology_pulmonology",
    "discipline": "MEDICINE",
    "name": "Epidemiological Cardiology & Pulmonology",
    "baseWeight": 4,
    "keywords": [
      "epidemiological",
      "cardiology",
      "pulmonology"
    ]
  },
  {
    "id": "immunological_cardiology_pulmonology",
    "discipline": "MEDICINE",
    "name": "Immunological Cardiology & Pulmonology",
    "baseWeight": 4,
    "keywords": [
      "immunological",
      "cardiology",
      "pulmonology"
    ]
  },
  {
    "id": "oncological_cardiology_pulmonology",
    "discipline": "MEDICINE",
    "name": "Oncological Cardiology & Pulmonology",
    "baseWeight": 4,
    "keywords": [
      "oncological",
      "cardiology",
      "pulmonology"
    ]
  },
  {
    "id": "cardiovascular_cardiology_pulmonology",
    "discipline": "MEDICINE",
    "name": "Cardiovascular Cardiology & Pulmonology",
    "baseWeight": 4,
    "keywords": [
      "cardiovascular",
      "cardiology",
      "pulmonology"
    ]
  },
  {
    "id": "neurological_cardiology_pulmonology",
    "discipline": "MEDICINE",
    "name": "Neurological Cardiology & Pulmonology",
    "baseWeight": 4,
    "keywords": [
      "neurological",
      "cardiology",
      "pulmonology"
    ]
  },
  {
    "id": "psychiatric_cardiology_pulmonology",
    "discipline": "MEDICINE",
    "name": "Psychiatric Cardiology & Pulmonology",
    "baseWeight": 4,
    "keywords": [
      "psychiatric",
      "cardiology",
      "pulmonology"
    ]
  },
  {
    "id": "radiological_cardiology_pulmonology",
    "discipline": "MEDICINE",
    "name": "Radiological Cardiology & Pulmonology",
    "baseWeight": 4,
    "keywords": [
      "radiological",
      "cardiology",
      "pulmonology"
    ]
  },
  {
    "id": "surgical_cardiology_pulmonology",
    "discipline": "MEDICINE",
    "name": "Surgical Cardiology & Pulmonology",
    "baseWeight": 4,
    "keywords": [
      "surgical",
      "cardiology",
      "pulmonology"
    ]
  },
  {
    "id": "anesthesiologic_cardiology_pulmonology",
    "discipline": "MEDICINE",
    "name": "Anesthesiologic Cardiology & Pulmonology",
    "baseWeight": 4,
    "keywords": [
      "anesthesiologic",
      "cardiology",
      "pulmonology"
    ]
  },
  {
    "id": "dermatological_cardiology_pulmonology",
    "discipline": "MEDICINE",
    "name": "Dermatological Cardiology & Pulmonology",
    "baseWeight": 4,
    "keywords": [
      "dermatological",
      "cardiology",
      "pulmonology"
    ]
  },
  {
    "id": "pediatric_cardiology_pulmonology",
    "discipline": "MEDICINE",
    "name": "Pediatric Cardiology & Pulmonology",
    "baseWeight": 4,
    "keywords": [
      "pediatric",
      "cardiology",
      "pulmonology"
    ]
  },
  {
    "id": "geriatric_cardiology_pulmonology",
    "discipline": "MEDICINE",
    "name": "Geriatric Cardiology & Pulmonology",
    "baseWeight": 4,
    "keywords": [
      "geriatric",
      "cardiology",
      "pulmonology"
    ]
  },
  {
    "id": "internal_cardiology_pulmonology",
    "discipline": "MEDICINE",
    "name": "Internal Cardiology & Pulmonology",
    "baseWeight": 4,
    "keywords": [
      "internal",
      "cardiology",
      "pulmonology"
    ]
  },
  {
    "id": "orthopedic_cardiology_pulmonology",
    "discipline": "MEDICINE",
    "name": "Orthopedic Cardiology & Pulmonology",
    "baseWeight": 4,
    "keywords": [
      "orthopedic",
      "cardiology",
      "pulmonology"
    ]
  },
  {
    "id": "forensic_cardiology_pulmonology",
    "discipline": "MEDICINE",
    "name": "Forensic Cardiology & Pulmonology",
    "baseWeight": 4,
    "keywords": [
      "forensic",
      "cardiology",
      "pulmonology"
    ]
  },
  {
    "id": "genetic_cardiology_pulmonology",
    "discipline": "MEDICINE",
    "name": "Genetic Cardiology & Pulmonology",
    "baseWeight": 4,
    "keywords": [
      "genetic",
      "cardiology",
      "pulmonology",
      "dna",
      "rna",
      "gene",
      "crispr",
      "genetics",
      "genome",
      "nucleotide"
    ]
  },
  {
    "id": "preventive_cardiology_pulmonology",
    "discipline": "MEDICINE",
    "name": "Preventive Cardiology & Pulmonology",
    "baseWeight": 4,
    "keywords": [
      "preventive",
      "cardiology",
      "pulmonology"
    ]
  },
  {
    "id": "ophthalmic_cardiology_pulmonology",
    "discipline": "MEDICINE",
    "name": "Ophthalmic Cardiology & Pulmonology",
    "baseWeight": 4,
    "keywords": [
      "ophthalmic",
      "cardiology",
      "pulmonology"
    ]
  },
  {
    "id": "therapeutic_cardiology_pulmonology",
    "discipline": "MEDICINE",
    "name": "Therapeutic Cardiology & Pulmonology",
    "baseWeight": 4,
    "keywords": [
      "therapeutic",
      "cardiology",
      "pulmonology"
    ]
  },
  {
    "id": "diagnostic_cardiology_pulmonology",
    "discipline": "MEDICINE",
    "name": "Diagnostic Cardiology & Pulmonology",
    "baseWeight": 4,
    "keywords": [
      "diagnostic",
      "cardiology",
      "pulmonology"
    ]
  },
  {
    "id": "nutritional_cardiology_pulmonology",
    "discipline": "MEDICINE",
    "name": "Nutritional Cardiology & Pulmonology",
    "baseWeight": 4,
    "keywords": [
      "nutritional",
      "cardiology",
      "pulmonology"
    ]
  },
  {
    "id": "clinical_neurology_neuroscience",
    "discipline": "MEDICINE",
    "name": "Clinical Neurology & Neuroscience",
    "baseWeight": 5,
    "keywords": [
      "clinical",
      "neurology",
      "neuroscience"
    ]
  },
  {
    "id": "pathological_neurology_neuroscience",
    "discipline": "MEDICINE",
    "name": "Pathological Neurology & Neuroscience",
    "baseWeight": 5,
    "keywords": [
      "pathological",
      "neurology",
      "neuroscience"
    ]
  },
  {
    "id": "pharmacological_neurology_neuroscience",
    "discipline": "MEDICINE",
    "name": "Pharmacological Neurology & Neuroscience",
    "baseWeight": 5,
    "keywords": [
      "pharmacological",
      "neurology",
      "neuroscience"
    ]
  },
  {
    "id": "toxicological_neurology_neuroscience",
    "discipline": "MEDICINE",
    "name": "Toxicological Neurology & Neuroscience",
    "baseWeight": 5,
    "keywords": [
      "toxicological",
      "neurology",
      "neuroscience"
    ]
  },
  {
    "id": "epidemiological_neurology_neuroscience",
    "discipline": "MEDICINE",
    "name": "Epidemiological Neurology & Neuroscience",
    "baseWeight": 5,
    "keywords": [
      "epidemiological",
      "neurology",
      "neuroscience"
    ]
  },
  {
    "id": "immunological_neurology_neuroscience",
    "discipline": "MEDICINE",
    "name": "Immunological Neurology & Neuroscience",
    "baseWeight": 5,
    "keywords": [
      "immunological",
      "neurology",
      "neuroscience"
    ]
  },
  {
    "id": "oncological_neurology_neuroscience",
    "discipline": "MEDICINE",
    "name": "Oncological Neurology & Neuroscience",
    "baseWeight": 5,
    "keywords": [
      "oncological",
      "neurology",
      "neuroscience"
    ]
  },
  {
    "id": "cardiovascular_neurology_neuroscience",
    "discipline": "MEDICINE",
    "name": "Cardiovascular Neurology & Neuroscience",
    "baseWeight": 5,
    "keywords": [
      "cardiovascular",
      "neurology",
      "neuroscience"
    ]
  },
  {
    "id": "neurological_neurology_neuroscience",
    "discipline": "MEDICINE",
    "name": "Neurological Neurology & Neuroscience",
    "baseWeight": 5,
    "keywords": [
      "neurological",
      "neurology",
      "neuroscience"
    ]
  },
  {
    "id": "psychiatric_neurology_neuroscience",
    "discipline": "MEDICINE",
    "name": "Psychiatric Neurology & Neuroscience",
    "baseWeight": 5,
    "keywords": [
      "psychiatric",
      "neurology",
      "neuroscience"
    ]
  },
  {
    "id": "radiological_neurology_neuroscience",
    "discipline": "MEDICINE",
    "name": "Radiological Neurology & Neuroscience",
    "baseWeight": 5,
    "keywords": [
      "radiological",
      "neurology",
      "neuroscience"
    ]
  },
  {
    "id": "surgical_neurology_neuroscience",
    "discipline": "MEDICINE",
    "name": "Surgical Neurology & Neuroscience",
    "baseWeight": 5,
    "keywords": [
      "surgical",
      "neurology",
      "neuroscience"
    ]
  },
  {
    "id": "anesthesiologic_neurology_neuroscience",
    "discipline": "MEDICINE",
    "name": "Anesthesiologic Neurology & Neuroscience",
    "baseWeight": 5,
    "keywords": [
      "anesthesiologic",
      "neurology",
      "neuroscience"
    ]
  },
  {
    "id": "dermatological_neurology_neuroscience",
    "discipline": "MEDICINE",
    "name": "Dermatological Neurology & Neuroscience",
    "baseWeight": 5,
    "keywords": [
      "dermatological",
      "neurology",
      "neuroscience"
    ]
  },
  {
    "id": "pediatric_neurology_neuroscience",
    "discipline": "MEDICINE",
    "name": "Pediatric Neurology & Neuroscience",
    "baseWeight": 5,
    "keywords": [
      "pediatric",
      "neurology",
      "neuroscience"
    ]
  },
  {
    "id": "geriatric_neurology_neuroscience",
    "discipline": "MEDICINE",
    "name": "Geriatric Neurology & Neuroscience",
    "baseWeight": 5,
    "keywords": [
      "geriatric",
      "neurology",
      "neuroscience"
    ]
  },
  {
    "id": "internal_neurology_neuroscience",
    "discipline": "MEDICINE",
    "name": "Internal Neurology & Neuroscience",
    "baseWeight": 5,
    "keywords": [
      "internal",
      "neurology",
      "neuroscience"
    ]
  },
  {
    "id": "orthopedic_neurology_neuroscience",
    "discipline": "MEDICINE",
    "name": "Orthopedic Neurology & Neuroscience",
    "baseWeight": 5,
    "keywords": [
      "orthopedic",
      "neurology",
      "neuroscience"
    ]
  },
  {
    "id": "forensic_neurology_neuroscience",
    "discipline": "MEDICINE",
    "name": "Forensic Neurology & Neuroscience",
    "baseWeight": 5,
    "keywords": [
      "forensic",
      "neurology",
      "neuroscience"
    ]
  },
  {
    "id": "genetic_neurology_neuroscience",
    "discipline": "MEDICINE",
    "name": "Genetic Neurology & Neuroscience",
    "baseWeight": 5,
    "keywords": [
      "genetic",
      "neurology",
      "neuroscience",
      "dna",
      "rna",
      "gene",
      "crispr",
      "genetics",
      "genome",
      "nucleotide"
    ]
  },
  {
    "id": "preventive_neurology_neuroscience",
    "discipline": "MEDICINE",
    "name": "Preventive Neurology & Neuroscience",
    "baseWeight": 5,
    "keywords": [
      "preventive",
      "neurology",
      "neuroscience"
    ]
  },
  {
    "id": "ophthalmic_neurology_neuroscience",
    "discipline": "MEDICINE",
    "name": "Ophthalmic Neurology & Neuroscience",
    "baseWeight": 5,
    "keywords": [
      "ophthalmic",
      "neurology",
      "neuroscience"
    ]
  },
  {
    "id": "therapeutic_neurology_neuroscience",
    "discipline": "MEDICINE",
    "name": "Therapeutic Neurology & Neuroscience",
    "baseWeight": 5,
    "keywords": [
      "therapeutic",
      "neurology",
      "neuroscience"
    ]
  },
  {
    "id": "diagnostic_neurology_neuroscience",
    "discipline": "MEDICINE",
    "name": "Diagnostic Neurology & Neuroscience",
    "baseWeight": 5,
    "keywords": [
      "diagnostic",
      "neurology",
      "neuroscience"
    ]
  },
  {
    "id": "nutritional_neurology_neuroscience",
    "discipline": "MEDICINE",
    "name": "Nutritional Neurology & Neuroscience",
    "baseWeight": 5,
    "keywords": [
      "nutritional",
      "neurology",
      "neuroscience"
    ]
  },
  {
    "id": "clinical_oncology_cancer_research",
    "discipline": "MEDICINE",
    "name": "Clinical Oncology & Cancer Research",
    "baseWeight": 6,
    "keywords": [
      "clinical",
      "oncology",
      "cancer",
      "research"
    ]
  },
  {
    "id": "pathological_oncology_cancer_research",
    "discipline": "MEDICINE",
    "name": "Pathological Oncology & Cancer Research",
    "baseWeight": 6,
    "keywords": [
      "pathological",
      "oncology",
      "cancer",
      "research"
    ]
  },
  {
    "id": "pharmacological_oncology_cancer_research",
    "discipline": "MEDICINE",
    "name": "Pharmacological Oncology & Cancer Research",
    "baseWeight": 6,
    "keywords": [
      "pharmacological",
      "oncology",
      "cancer",
      "research"
    ]
  },
  {
    "id": "toxicological_oncology_cancer_research",
    "discipline": "MEDICINE",
    "name": "Toxicological Oncology & Cancer Research",
    "baseWeight": 6,
    "keywords": [
      "toxicological",
      "oncology",
      "cancer",
      "research"
    ]
  },
  {
    "id": "epidemiological_oncology_cancer_research",
    "discipline": "MEDICINE",
    "name": "Epidemiological Oncology & Cancer Research",
    "baseWeight": 6,
    "keywords": [
      "epidemiological",
      "oncology",
      "cancer",
      "research"
    ]
  },
  {
    "id": "immunological_oncology_cancer_research",
    "discipline": "MEDICINE",
    "name": "Immunological Oncology & Cancer Research",
    "baseWeight": 6,
    "keywords": [
      "immunological",
      "oncology",
      "cancer",
      "research"
    ]
  },
  {
    "id": "oncological_oncology_cancer_research",
    "discipline": "MEDICINE",
    "name": "Oncological Oncology & Cancer Research",
    "baseWeight": 6,
    "keywords": [
      "oncological",
      "oncology",
      "cancer",
      "research"
    ]
  },
  {
    "id": "cardiovascular_oncology_cancer_research",
    "discipline": "MEDICINE",
    "name": "Cardiovascular Oncology & Cancer Research",
    "baseWeight": 6,
    "keywords": [
      "cardiovascular",
      "oncology",
      "cancer",
      "research"
    ]
  },
  {
    "id": "neurological_oncology_cancer_research",
    "discipline": "MEDICINE",
    "name": "Neurological Oncology & Cancer Research",
    "baseWeight": 6,
    "keywords": [
      "neurological",
      "oncology",
      "cancer",
      "research"
    ]
  },
  {
    "id": "psychiatric_oncology_cancer_research",
    "discipline": "MEDICINE",
    "name": "Psychiatric Oncology & Cancer Research",
    "baseWeight": 6,
    "keywords": [
      "psychiatric",
      "oncology",
      "cancer",
      "research"
    ]
  },
  {
    "id": "radiological_oncology_cancer_research",
    "discipline": "MEDICINE",
    "name": "Radiological Oncology & Cancer Research",
    "baseWeight": 6,
    "keywords": [
      "radiological",
      "oncology",
      "cancer",
      "research"
    ]
  },
  {
    "id": "surgical_oncology_cancer_research",
    "discipline": "MEDICINE",
    "name": "Surgical Oncology & Cancer Research",
    "baseWeight": 6,
    "keywords": [
      "surgical",
      "oncology",
      "cancer",
      "research"
    ]
  },
  {
    "id": "anesthesiologic_oncology_cancer_research",
    "discipline": "MEDICINE",
    "name": "Anesthesiologic Oncology & Cancer Research",
    "baseWeight": 6,
    "keywords": [
      "anesthesiologic",
      "oncology",
      "cancer",
      "research"
    ]
  },
  {
    "id": "dermatological_oncology_cancer_research",
    "discipline": "MEDICINE",
    "name": "Dermatological Oncology & Cancer Research",
    "baseWeight": 6,
    "keywords": [
      "dermatological",
      "oncology",
      "cancer",
      "research"
    ]
  },
  {
    "id": "pediatric_oncology_cancer_research",
    "discipline": "MEDICINE",
    "name": "Pediatric Oncology & Cancer Research",
    "baseWeight": 6,
    "keywords": [
      "pediatric",
      "oncology",
      "cancer",
      "research"
    ]
  },
  {
    "id": "geriatric_oncology_cancer_research",
    "discipline": "MEDICINE",
    "name": "Geriatric Oncology & Cancer Research",
    "baseWeight": 6,
    "keywords": [
      "geriatric",
      "oncology",
      "cancer",
      "research"
    ]
  },
  {
    "id": "internal_oncology_cancer_research",
    "discipline": "MEDICINE",
    "name": "Internal Oncology & Cancer Research",
    "baseWeight": 6,
    "keywords": [
      "internal",
      "oncology",
      "cancer",
      "research"
    ]
  },
  {
    "id": "orthopedic_oncology_cancer_research",
    "discipline": "MEDICINE",
    "name": "Orthopedic Oncology & Cancer Research",
    "baseWeight": 6,
    "keywords": [
      "orthopedic",
      "oncology",
      "cancer",
      "research"
    ]
  },
  {
    "id": "forensic_oncology_cancer_research",
    "discipline": "MEDICINE",
    "name": "Forensic Oncology & Cancer Research",
    "baseWeight": 6,
    "keywords": [
      "forensic",
      "oncology",
      "cancer",
      "research"
    ]
  },
  {
    "id": "genetic_oncology_cancer_research",
    "discipline": "MEDICINE",
    "name": "Genetic Oncology & Cancer Research",
    "baseWeight": 6,
    "keywords": [
      "genetic",
      "oncology",
      "cancer",
      "research",
      "dna",
      "rna",
      "gene",
      "crispr",
      "genetics",
      "genome",
      "nucleotide"
    ]
  },
  {
    "id": "preventive_oncology_cancer_research",
    "discipline": "MEDICINE",
    "name": "Preventive Oncology & Cancer Research",
    "baseWeight": 6,
    "keywords": [
      "preventive",
      "oncology",
      "cancer",
      "research"
    ]
  },
  {
    "id": "ophthalmic_oncology_cancer_research",
    "discipline": "MEDICINE",
    "name": "Ophthalmic Oncology & Cancer Research",
    "baseWeight": 6,
    "keywords": [
      "ophthalmic",
      "oncology",
      "cancer",
      "research"
    ]
  },
  {
    "id": "therapeutic_oncology_cancer_research",
    "discipline": "MEDICINE",
    "name": "Therapeutic Oncology & Cancer Research",
    "baseWeight": 6,
    "keywords": [
      "therapeutic",
      "oncology",
      "cancer",
      "research"
    ]
  },
  {
    "id": "diagnostic_oncology_cancer_research",
    "discipline": "MEDICINE",
    "name": "Diagnostic Oncology & Cancer Research",
    "baseWeight": 6,
    "keywords": [
      "diagnostic",
      "oncology",
      "cancer",
      "research"
    ]
  },
  {
    "id": "nutritional_oncology_cancer_research",
    "discipline": "MEDICINE",
    "name": "Nutritional Oncology & Cancer Research",
    "baseWeight": 6,
    "keywords": [
      "nutritional",
      "oncology",
      "cancer",
      "research"
    ]
  },
  {
    "id": "clinical_immunology_infectious_disease",
    "discipline": "MEDICINE",
    "name": "Clinical Immunology & Infectious Disease",
    "baseWeight": 4,
    "keywords": [
      "clinical",
      "immunology",
      "infectious",
      "disease"
    ]
  },
  {
    "id": "pathological_immunology_infectious_disease",
    "discipline": "MEDICINE",
    "name": "Pathological Immunology & Infectious Disease",
    "baseWeight": 4,
    "keywords": [
      "pathological",
      "immunology",
      "infectious",
      "disease"
    ]
  },
  {
    "id": "pharmacological_immunology_infectious_disease",
    "discipline": "MEDICINE",
    "name": "Pharmacological Immunology & Infectious Disease",
    "baseWeight": 4,
    "keywords": [
      "pharmacological",
      "immunology",
      "infectious",
      "disease"
    ]
  },
  {
    "id": "toxicological_immunology_infectious_disease",
    "discipline": "MEDICINE",
    "name": "Toxicological Immunology & Infectious Disease",
    "baseWeight": 4,
    "keywords": [
      "toxicological",
      "immunology",
      "infectious",
      "disease"
    ]
  },
  {
    "id": "epidemiological_immunology_infectious_disease",
    "discipline": "MEDICINE",
    "name": "Epidemiological Immunology & Infectious Disease",
    "baseWeight": 4,
    "keywords": [
      "epidemiological",
      "immunology",
      "infectious",
      "disease"
    ]
  },
  {
    "id": "immunological_immunology_infectious_disease",
    "discipline": "MEDICINE",
    "name": "Immunological Immunology & Infectious Disease",
    "baseWeight": 4,
    "keywords": [
      "immunological",
      "immunology",
      "infectious",
      "disease"
    ]
  },
  {
    "id": "oncological_immunology_infectious_disease",
    "discipline": "MEDICINE",
    "name": "Oncological Immunology & Infectious Disease",
    "baseWeight": 4,
    "keywords": [
      "oncological",
      "immunology",
      "infectious",
      "disease"
    ]
  },
  {
    "id": "cardiovascular_immunology_infectious_disease",
    "discipline": "MEDICINE",
    "name": "Cardiovascular Immunology & Infectious Disease",
    "baseWeight": 4,
    "keywords": [
      "cardiovascular",
      "immunology",
      "infectious",
      "disease"
    ]
  },
  {
    "id": "neurological_immunology_infectious_disease",
    "discipline": "MEDICINE",
    "name": "Neurological Immunology & Infectious Disease",
    "baseWeight": 4,
    "keywords": [
      "neurological",
      "immunology",
      "infectious",
      "disease"
    ]
  },
  {
    "id": "psychiatric_immunology_infectious_disease",
    "discipline": "MEDICINE",
    "name": "Psychiatric Immunology & Infectious Disease",
    "baseWeight": 4,
    "keywords": [
      "psychiatric",
      "immunology",
      "infectious",
      "disease"
    ]
  },
  {
    "id": "radiological_immunology_infectious_disease",
    "discipline": "MEDICINE",
    "name": "Radiological Immunology & Infectious Disease",
    "baseWeight": 4,
    "keywords": [
      "radiological",
      "immunology",
      "infectious",
      "disease"
    ]
  },
  {
    "id": "surgical_immunology_infectious_disease",
    "discipline": "MEDICINE",
    "name": "Surgical Immunology & Infectious Disease",
    "baseWeight": 4,
    "keywords": [
      "surgical",
      "immunology",
      "infectious",
      "disease"
    ]
  },
  {
    "id": "anesthesiologic_immunology_infectious_disease",
    "discipline": "MEDICINE",
    "name": "Anesthesiologic Immunology & Infectious Disease",
    "baseWeight": 4,
    "keywords": [
      "anesthesiologic",
      "immunology",
      "infectious",
      "disease"
    ]
  },
  {
    "id": "dermatological_immunology_infectious_disease",
    "discipline": "MEDICINE",
    "name": "Dermatological Immunology & Infectious Disease",
    "baseWeight": 4,
    "keywords": [
      "dermatological",
      "immunology",
      "infectious",
      "disease"
    ]
  },
  {
    "id": "pediatric_immunology_infectious_disease",
    "discipline": "MEDICINE",
    "name": "Pediatric Immunology & Infectious Disease",
    "baseWeight": 4,
    "keywords": [
      "pediatric",
      "immunology",
      "infectious",
      "disease"
    ]
  },
  {
    "id": "geriatric_immunology_infectious_disease",
    "discipline": "MEDICINE",
    "name": "Geriatric Immunology & Infectious Disease",
    "baseWeight": 4,
    "keywords": [
      "geriatric",
      "immunology",
      "infectious",
      "disease"
    ]
  },
  {
    "id": "internal_immunology_infectious_disease",
    "discipline": "MEDICINE",
    "name": "Internal Immunology & Infectious Disease",
    "baseWeight": 4,
    "keywords": [
      "internal",
      "immunology",
      "infectious",
      "disease"
    ]
  },
  {
    "id": "orthopedic_immunology_infectious_disease",
    "discipline": "MEDICINE",
    "name": "Orthopedic Immunology & Infectious Disease",
    "baseWeight": 4,
    "keywords": [
      "orthopedic",
      "immunology",
      "infectious",
      "disease"
    ]
  },
  {
    "id": "forensic_immunology_infectious_disease",
    "discipline": "MEDICINE",
    "name": "Forensic Immunology & Infectious Disease",
    "baseWeight": 4,
    "keywords": [
      "forensic",
      "immunology",
      "infectious",
      "disease"
    ]
  },
  {
    "id": "genetic_immunology_infectious_disease",
    "discipline": "MEDICINE",
    "name": "Genetic Immunology & Infectious Disease",
    "baseWeight": 4,
    "keywords": [
      "genetic",
      "immunology",
      "infectious",
      "disease",
      "dna",
      "rna",
      "gene",
      "crispr",
      "genetics",
      "genome",
      "nucleotide"
    ]
  },
  {
    "id": "preventive_immunology_infectious_disease",
    "discipline": "MEDICINE",
    "name": "Preventive Immunology & Infectious Disease",
    "baseWeight": 4,
    "keywords": [
      "preventive",
      "immunology",
      "infectious",
      "disease"
    ]
  },
  {
    "id": "ophthalmic_immunology_infectious_disease",
    "discipline": "MEDICINE",
    "name": "Ophthalmic Immunology & Infectious Disease",
    "baseWeight": 4,
    "keywords": [
      "ophthalmic",
      "immunology",
      "infectious",
      "disease"
    ]
  },
  {
    "id": "therapeutic_immunology_infectious_disease",
    "discipline": "MEDICINE",
    "name": "Therapeutic Immunology & Infectious Disease",
    "baseWeight": 4,
    "keywords": [
      "therapeutic",
      "immunology",
      "infectious",
      "disease"
    ]
  },
  {
    "id": "diagnostic_immunology_infectious_disease",
    "discipline": "MEDICINE",
    "name": "Diagnostic Immunology & Infectious Disease",
    "baseWeight": 4,
    "keywords": [
      "diagnostic",
      "immunology",
      "infectious",
      "disease"
    ]
  },
  {
    "id": "nutritional_immunology_infectious_disease",
    "discipline": "MEDICINE",
    "name": "Nutritional Immunology & Infectious Disease",
    "baseWeight": 4,
    "keywords": [
      "nutritional",
      "immunology",
      "infectious",
      "disease"
    ]
  },
  {
    "id": "clinical_surgery_anesthesiology",
    "discipline": "MEDICINE",
    "name": "Clinical Surgery & Anesthesiology",
    "baseWeight": 5,
    "keywords": [
      "clinical",
      "surgery",
      "anesthesiology"
    ]
  },
  {
    "id": "pathological_surgery_anesthesiology",
    "discipline": "MEDICINE",
    "name": "Pathological Surgery & Anesthesiology",
    "baseWeight": 5,
    "keywords": [
      "pathological",
      "surgery",
      "anesthesiology"
    ]
  },
  {
    "id": "pharmacological_surgery_anesthesiology",
    "discipline": "MEDICINE",
    "name": "Pharmacological Surgery & Anesthesiology",
    "baseWeight": 5,
    "keywords": [
      "pharmacological",
      "surgery",
      "anesthesiology"
    ]
  },
  {
    "id": "toxicological_surgery_anesthesiology",
    "discipline": "MEDICINE",
    "name": "Toxicological Surgery & Anesthesiology",
    "baseWeight": 5,
    "keywords": [
      "toxicological",
      "surgery",
      "anesthesiology"
    ]
  },
  {
    "id": "epidemiological_surgery_anesthesiology",
    "discipline": "MEDICINE",
    "name": "Epidemiological Surgery & Anesthesiology",
    "baseWeight": 5,
    "keywords": [
      "epidemiological",
      "surgery",
      "anesthesiology"
    ]
  },
  {
    "id": "immunological_surgery_anesthesiology",
    "discipline": "MEDICINE",
    "name": "Immunological Surgery & Anesthesiology",
    "baseWeight": 5,
    "keywords": [
      "immunological",
      "surgery",
      "anesthesiology"
    ]
  },
  {
    "id": "oncological_surgery_anesthesiology",
    "discipline": "MEDICINE",
    "name": "Oncological Surgery & Anesthesiology",
    "baseWeight": 5,
    "keywords": [
      "oncological",
      "surgery",
      "anesthesiology"
    ]
  },
  {
    "id": "cardiovascular_surgery_anesthesiology",
    "discipline": "MEDICINE",
    "name": "Cardiovascular Surgery & Anesthesiology",
    "baseWeight": 5,
    "keywords": [
      "cardiovascular",
      "surgery",
      "anesthesiology"
    ]
  },
  {
    "id": "neurological_surgery_anesthesiology",
    "discipline": "MEDICINE",
    "name": "Neurological Surgery & Anesthesiology",
    "baseWeight": 5,
    "keywords": [
      "neurological",
      "surgery",
      "anesthesiology"
    ]
  },
  {
    "id": "psychiatric_surgery_anesthesiology",
    "discipline": "MEDICINE",
    "name": "Psychiatric Surgery & Anesthesiology",
    "baseWeight": 5,
    "keywords": [
      "psychiatric",
      "surgery",
      "anesthesiology"
    ]
  },
  {
    "id": "radiological_surgery_anesthesiology",
    "discipline": "MEDICINE",
    "name": "Radiological Surgery & Anesthesiology",
    "baseWeight": 5,
    "keywords": [
      "radiological",
      "surgery",
      "anesthesiology"
    ]
  },
  {
    "id": "surgical_surgery_anesthesiology",
    "discipline": "MEDICINE",
    "name": "Surgical Surgery & Anesthesiology",
    "baseWeight": 5,
    "keywords": [
      "surgical",
      "surgery",
      "anesthesiology"
    ]
  },
  {
    "id": "anesthesiologic_surgery_anesthesiology",
    "discipline": "MEDICINE",
    "name": "Anesthesiologic Surgery & Anesthesiology",
    "baseWeight": 5,
    "keywords": [
      "anesthesiologic",
      "surgery",
      "anesthesiology"
    ]
  },
  {
    "id": "dermatological_surgery_anesthesiology",
    "discipline": "MEDICINE",
    "name": "Dermatological Surgery & Anesthesiology",
    "baseWeight": 5,
    "keywords": [
      "dermatological",
      "surgery",
      "anesthesiology"
    ]
  },
  {
    "id": "pediatric_surgery_anesthesiology",
    "discipline": "MEDICINE",
    "name": "Pediatric Surgery & Anesthesiology",
    "baseWeight": 5,
    "keywords": [
      "pediatric",
      "surgery",
      "anesthesiology"
    ]
  },
  {
    "id": "geriatric_surgery_anesthesiology",
    "discipline": "MEDICINE",
    "name": "Geriatric Surgery & Anesthesiology",
    "baseWeight": 5,
    "keywords": [
      "geriatric",
      "surgery",
      "anesthesiology"
    ]
  },
  {
    "id": "internal_surgery_anesthesiology",
    "discipline": "MEDICINE",
    "name": "Internal Surgery & Anesthesiology",
    "baseWeight": 5,
    "keywords": [
      "internal",
      "surgery",
      "anesthesiology"
    ]
  },
  {
    "id": "orthopedic_surgery_anesthesiology",
    "discipline": "MEDICINE",
    "name": "Orthopedic Surgery & Anesthesiology",
    "baseWeight": 5,
    "keywords": [
      "orthopedic",
      "surgery",
      "anesthesiology"
    ]
  },
  {
    "id": "forensic_surgery_anesthesiology",
    "discipline": "MEDICINE",
    "name": "Forensic Surgery & Anesthesiology",
    "baseWeight": 5,
    "keywords": [
      "forensic",
      "surgery",
      "anesthesiology"
    ]
  },
  {
    "id": "genetic_surgery_anesthesiology",
    "discipline": "MEDICINE",
    "name": "Genetic Surgery & Anesthesiology",
    "baseWeight": 5,
    "keywords": [
      "genetic",
      "surgery",
      "anesthesiology",
      "dna",
      "rna",
      "gene",
      "crispr",
      "genetics",
      "genome",
      "nucleotide"
    ]
  },
  {
    "id": "preventive_surgery_anesthesiology",
    "discipline": "MEDICINE",
    "name": "Preventive Surgery & Anesthesiology",
    "baseWeight": 5,
    "keywords": [
      "preventive",
      "surgery",
      "anesthesiology"
    ]
  },
  {
    "id": "ophthalmic_surgery_anesthesiology",
    "discipline": "MEDICINE",
    "name": "Ophthalmic Surgery & Anesthesiology",
    "baseWeight": 5,
    "keywords": [
      "ophthalmic",
      "surgery",
      "anesthesiology"
    ]
  },
  {
    "id": "therapeutic_surgery_anesthesiology",
    "discipline": "MEDICINE",
    "name": "Therapeutic Surgery & Anesthesiology",
    "baseWeight": 5,
    "keywords": [
      "therapeutic",
      "surgery",
      "anesthesiology"
    ]
  },
  {
    "id": "diagnostic_surgery_anesthesiology",
    "discipline": "MEDICINE",
    "name": "Diagnostic Surgery & Anesthesiology",
    "baseWeight": 5,
    "keywords": [
      "diagnostic",
      "surgery",
      "anesthesiology"
    ]
  },
  {
    "id": "nutritional_surgery_anesthesiology",
    "discipline": "MEDICINE",
    "name": "Nutritional Surgery & Anesthesiology",
    "baseWeight": 5,
    "keywords": [
      "nutritional",
      "surgery",
      "anesthesiology"
    ]
  },
  {
    "id": "clinical_psychiatry_behavioral_medicine",
    "discipline": "MEDICINE",
    "name": "Clinical Psychiatry & Behavioral Medicine",
    "baseWeight": 6,
    "keywords": [
      "clinical",
      "psychiatry",
      "behavioral",
      "medicine"
    ]
  },
  {
    "id": "pathological_psychiatry_behavioral_medicine",
    "discipline": "MEDICINE",
    "name": "Pathological Psychiatry & Behavioral Medicine",
    "baseWeight": 6,
    "keywords": [
      "pathological",
      "psychiatry",
      "behavioral",
      "medicine"
    ]
  },
  {
    "id": "pharmacological_psychiatry_behavioral_medicine",
    "discipline": "MEDICINE",
    "name": "Pharmacological Psychiatry & Behavioral Medicine",
    "baseWeight": 6,
    "keywords": [
      "pharmacological",
      "psychiatry",
      "behavioral",
      "medicine"
    ]
  },
  {
    "id": "toxicological_psychiatry_behavioral_medicine",
    "discipline": "MEDICINE",
    "name": "Toxicological Psychiatry & Behavioral Medicine",
    "baseWeight": 6,
    "keywords": [
      "toxicological",
      "psychiatry",
      "behavioral",
      "medicine"
    ]
  },
  {
    "id": "epidemiological_psychiatry_behavioral_medicine",
    "discipline": "MEDICINE",
    "name": "Epidemiological Psychiatry & Behavioral Medicine",
    "baseWeight": 6,
    "keywords": [
      "epidemiological",
      "psychiatry",
      "behavioral",
      "medicine"
    ]
  },
  {
    "id": "immunological_psychiatry_behavioral_medicine",
    "discipline": "MEDICINE",
    "name": "Immunological Psychiatry & Behavioral Medicine",
    "baseWeight": 6,
    "keywords": [
      "immunological",
      "psychiatry",
      "behavioral",
      "medicine"
    ]
  },
  {
    "id": "oncological_psychiatry_behavioral_medicine",
    "discipline": "MEDICINE",
    "name": "Oncological Psychiatry & Behavioral Medicine",
    "baseWeight": 6,
    "keywords": [
      "oncological",
      "psychiatry",
      "behavioral",
      "medicine"
    ]
  },
  {
    "id": "cardiovascular_psychiatry_behavioral_medicine",
    "discipline": "MEDICINE",
    "name": "Cardiovascular Psychiatry & Behavioral Medicine",
    "baseWeight": 6,
    "keywords": [
      "cardiovascular",
      "psychiatry",
      "behavioral",
      "medicine"
    ]
  },
  {
    "id": "neurological_psychiatry_behavioral_medicine",
    "discipline": "MEDICINE",
    "name": "Neurological Psychiatry & Behavioral Medicine",
    "baseWeight": 6,
    "keywords": [
      "neurological",
      "psychiatry",
      "behavioral",
      "medicine"
    ]
  },
  {
    "id": "psychiatric_psychiatry_behavioral_medicine",
    "discipline": "MEDICINE",
    "name": "Psychiatric Psychiatry & Behavioral Medicine",
    "baseWeight": 6,
    "keywords": [
      "psychiatric",
      "psychiatry",
      "behavioral",
      "medicine"
    ]
  },
  {
    "id": "radiological_psychiatry_behavioral_medicine",
    "discipline": "MEDICINE",
    "name": "Radiological Psychiatry & Behavioral Medicine",
    "baseWeight": 6,
    "keywords": [
      "radiological",
      "psychiatry",
      "behavioral",
      "medicine"
    ]
  },
  {
    "id": "surgical_psychiatry_behavioral_medicine",
    "discipline": "MEDICINE",
    "name": "Surgical Psychiatry & Behavioral Medicine",
    "baseWeight": 6,
    "keywords": [
      "surgical",
      "psychiatry",
      "behavioral",
      "medicine"
    ]
  },
  {
    "id": "anesthesiologic_psychiatry_behavioral_medicine",
    "discipline": "MEDICINE",
    "name": "Anesthesiologic Psychiatry & Behavioral Medicine",
    "baseWeight": 6,
    "keywords": [
      "anesthesiologic",
      "psychiatry",
      "behavioral",
      "medicine"
    ]
  },
  {
    "id": "dermatological_psychiatry_behavioral_medicine",
    "discipline": "MEDICINE",
    "name": "Dermatological Psychiatry & Behavioral Medicine",
    "baseWeight": 6,
    "keywords": [
      "dermatological",
      "psychiatry",
      "behavioral",
      "medicine"
    ]
  },
  {
    "id": "pediatric_psychiatry_behavioral_medicine",
    "discipline": "MEDICINE",
    "name": "Pediatric Psychiatry & Behavioral Medicine",
    "baseWeight": 6,
    "keywords": [
      "pediatric",
      "psychiatry",
      "behavioral",
      "medicine"
    ]
  },
  {
    "id": "geriatric_psychiatry_behavioral_medicine",
    "discipline": "MEDICINE",
    "name": "Geriatric Psychiatry & Behavioral Medicine",
    "baseWeight": 6,
    "keywords": [
      "geriatric",
      "psychiatry",
      "behavioral",
      "medicine"
    ]
  },
  {
    "id": "internal_psychiatry_behavioral_medicine",
    "discipline": "MEDICINE",
    "name": "Internal Psychiatry & Behavioral Medicine",
    "baseWeight": 6,
    "keywords": [
      "internal",
      "psychiatry",
      "behavioral",
      "medicine"
    ]
  },
  {
    "id": "orthopedic_psychiatry_behavioral_medicine",
    "discipline": "MEDICINE",
    "name": "Orthopedic Psychiatry & Behavioral Medicine",
    "baseWeight": 6,
    "keywords": [
      "orthopedic",
      "psychiatry",
      "behavioral",
      "medicine"
    ]
  },
  {
    "id": "forensic_psychiatry_behavioral_medicine",
    "discipline": "MEDICINE",
    "name": "Forensic Psychiatry & Behavioral Medicine",
    "baseWeight": 6,
    "keywords": [
      "forensic",
      "psychiatry",
      "behavioral",
      "medicine"
    ]
  },
  {
    "id": "genetic_psychiatry_behavioral_medicine",
    "discipline": "MEDICINE",
    "name": "Genetic Psychiatry & Behavioral Medicine",
    "baseWeight": 6,
    "keywords": [
      "genetic",
      "psychiatry",
      "behavioral",
      "medicine",
      "dna",
      "rna",
      "gene",
      "crispr",
      "genetics",
      "genome",
      "nucleotide"
    ]
  },
  {
    "id": "preventive_psychiatry_behavioral_medicine",
    "discipline": "MEDICINE",
    "name": "Preventive Psychiatry & Behavioral Medicine",
    "baseWeight": 6,
    "keywords": [
      "preventive",
      "psychiatry",
      "behavioral",
      "medicine"
    ]
  },
  {
    "id": "ophthalmic_psychiatry_behavioral_medicine",
    "discipline": "MEDICINE",
    "name": "Ophthalmic Psychiatry & Behavioral Medicine",
    "baseWeight": 6,
    "keywords": [
      "ophthalmic",
      "psychiatry",
      "behavioral",
      "medicine"
    ]
  },
  {
    "id": "therapeutic_psychiatry_behavioral_medicine",
    "discipline": "MEDICINE",
    "name": "Therapeutic Psychiatry & Behavioral Medicine",
    "baseWeight": 6,
    "keywords": [
      "therapeutic",
      "psychiatry",
      "behavioral",
      "medicine"
    ]
  },
  {
    "id": "diagnostic_psychiatry_behavioral_medicine",
    "discipline": "MEDICINE",
    "name": "Diagnostic Psychiatry & Behavioral Medicine",
    "baseWeight": 6,
    "keywords": [
      "diagnostic",
      "psychiatry",
      "behavioral",
      "medicine"
    ]
  },
  {
    "id": "nutritional_psychiatry_behavioral_medicine",
    "discipline": "MEDICINE",
    "name": "Nutritional Psychiatry & Behavioral Medicine",
    "baseWeight": 6,
    "keywords": [
      "nutritional",
      "psychiatry",
      "behavioral",
      "medicine"
    ]
  },
  {
    "id": "clinical_radiology_medical_imaging",
    "discipline": "MEDICINE",
    "name": "Clinical Radiology & Medical Imaging",
    "baseWeight": 4,
    "keywords": [
      "clinical",
      "radiology",
      "medical",
      "imaging"
    ]
  },
  {
    "id": "pathological_radiology_medical_imaging",
    "discipline": "MEDICINE",
    "name": "Pathological Radiology & Medical Imaging",
    "baseWeight": 4,
    "keywords": [
      "pathological",
      "radiology",
      "medical",
      "imaging"
    ]
  },
  {
    "id": "pharmacological_radiology_medical_imaging",
    "discipline": "MEDICINE",
    "name": "Pharmacological Radiology & Medical Imaging",
    "baseWeight": 4,
    "keywords": [
      "pharmacological",
      "radiology",
      "medical",
      "imaging"
    ]
  },
  {
    "id": "toxicological_radiology_medical_imaging",
    "discipline": "MEDICINE",
    "name": "Toxicological Radiology & Medical Imaging",
    "baseWeight": 4,
    "keywords": [
      "toxicological",
      "radiology",
      "medical",
      "imaging"
    ]
  },
  {
    "id": "epidemiological_radiology_medical_imaging",
    "discipline": "MEDICINE",
    "name": "Epidemiological Radiology & Medical Imaging",
    "baseWeight": 4,
    "keywords": [
      "epidemiological",
      "radiology",
      "medical",
      "imaging"
    ]
  },
  {
    "id": "immunological_radiology_medical_imaging",
    "discipline": "MEDICINE",
    "name": "Immunological Radiology & Medical Imaging",
    "baseWeight": 4,
    "keywords": [
      "immunological",
      "radiology",
      "medical",
      "imaging"
    ]
  },
  {
    "id": "oncological_radiology_medical_imaging",
    "discipline": "MEDICINE",
    "name": "Oncological Radiology & Medical Imaging",
    "baseWeight": 4,
    "keywords": [
      "oncological",
      "radiology",
      "medical",
      "imaging"
    ]
  },
  {
    "id": "cardiovascular_radiology_medical_imaging",
    "discipline": "MEDICINE",
    "name": "Cardiovascular Radiology & Medical Imaging",
    "baseWeight": 4,
    "keywords": [
      "cardiovascular",
      "radiology",
      "medical",
      "imaging"
    ]
  },
  {
    "id": "neurological_radiology_medical_imaging",
    "discipline": "MEDICINE",
    "name": "Neurological Radiology & Medical Imaging",
    "baseWeight": 4,
    "keywords": [
      "neurological",
      "radiology",
      "medical",
      "imaging"
    ]
  },
  {
    "id": "psychiatric_radiology_medical_imaging",
    "discipline": "MEDICINE",
    "name": "Psychiatric Radiology & Medical Imaging",
    "baseWeight": 4,
    "keywords": [
      "psychiatric",
      "radiology",
      "medical",
      "imaging"
    ]
  },
  {
    "id": "radiological_radiology_medical_imaging",
    "discipline": "MEDICINE",
    "name": "Radiological Radiology & Medical Imaging",
    "baseWeight": 4,
    "keywords": [
      "radiological",
      "radiology",
      "medical",
      "imaging"
    ]
  },
  {
    "id": "surgical_radiology_medical_imaging",
    "discipline": "MEDICINE",
    "name": "Surgical Radiology & Medical Imaging",
    "baseWeight": 4,
    "keywords": [
      "surgical",
      "radiology",
      "medical",
      "imaging"
    ]
  },
  {
    "id": "anesthesiologic_radiology_medical_imaging",
    "discipline": "MEDICINE",
    "name": "Anesthesiologic Radiology & Medical Imaging",
    "baseWeight": 4,
    "keywords": [
      "anesthesiologic",
      "radiology",
      "medical",
      "imaging"
    ]
  },
  {
    "id": "dermatological_radiology_medical_imaging",
    "discipline": "MEDICINE",
    "name": "Dermatological Radiology & Medical Imaging",
    "baseWeight": 4,
    "keywords": [
      "dermatological",
      "radiology",
      "medical",
      "imaging"
    ]
  },
  {
    "id": "pediatric_radiology_medical_imaging",
    "discipline": "MEDICINE",
    "name": "Pediatric Radiology & Medical Imaging",
    "baseWeight": 4,
    "keywords": [
      "pediatric",
      "radiology",
      "medical",
      "imaging"
    ]
  },
  {
    "id": "geriatric_radiology_medical_imaging",
    "discipline": "MEDICINE",
    "name": "Geriatric Radiology & Medical Imaging",
    "baseWeight": 4,
    "keywords": [
      "geriatric",
      "radiology",
      "medical",
      "imaging"
    ]
  },
  {
    "id": "internal_radiology_medical_imaging",
    "discipline": "MEDICINE",
    "name": "Internal Radiology & Medical Imaging",
    "baseWeight": 4,
    "keywords": [
      "internal",
      "radiology",
      "medical",
      "imaging"
    ]
  },
  {
    "id": "orthopedic_radiology_medical_imaging",
    "discipline": "MEDICINE",
    "name": "Orthopedic Radiology & Medical Imaging",
    "baseWeight": 4,
    "keywords": [
      "orthopedic",
      "radiology",
      "medical",
      "imaging"
    ]
  },
  {
    "id": "forensic_radiology_medical_imaging",
    "discipline": "MEDICINE",
    "name": "Forensic Radiology & Medical Imaging",
    "baseWeight": 4,
    "keywords": [
      "forensic",
      "radiology",
      "medical",
      "imaging"
    ]
  },
  {
    "id": "genetic_radiology_medical_imaging",
    "discipline": "MEDICINE",
    "name": "Genetic Radiology & Medical Imaging",
    "baseWeight": 4,
    "keywords": [
      "genetic",
      "radiology",
      "medical",
      "imaging",
      "dna",
      "rna",
      "gene",
      "crispr",
      "genetics",
      "genome",
      "nucleotide"
    ]
  },
  {
    "id": "preventive_radiology_medical_imaging",
    "discipline": "MEDICINE",
    "name": "Preventive Radiology & Medical Imaging",
    "baseWeight": 4,
    "keywords": [
      "preventive",
      "radiology",
      "medical",
      "imaging"
    ]
  },
  {
    "id": "ophthalmic_radiology_medical_imaging",
    "discipline": "MEDICINE",
    "name": "Ophthalmic Radiology & Medical Imaging",
    "baseWeight": 4,
    "keywords": [
      "ophthalmic",
      "radiology",
      "medical",
      "imaging"
    ]
  },
  {
    "id": "therapeutic_radiology_medical_imaging",
    "discipline": "MEDICINE",
    "name": "Therapeutic Radiology & Medical Imaging",
    "baseWeight": 4,
    "keywords": [
      "therapeutic",
      "radiology",
      "medical",
      "imaging"
    ]
  },
  {
    "id": "diagnostic_radiology_medical_imaging",
    "discipline": "MEDICINE",
    "name": "Diagnostic Radiology & Medical Imaging",
    "baseWeight": 4,
    "keywords": [
      "diagnostic",
      "radiology",
      "medical",
      "imaging"
    ]
  },
  {
    "id": "nutritional_radiology_medical_imaging",
    "discipline": "MEDICINE",
    "name": "Nutritional Radiology & Medical Imaging",
    "baseWeight": 4,
    "keywords": [
      "nutritional",
      "radiology",
      "medical",
      "imaging"
    ]
  },
  {
    "id": "behavioral_psychology_cognitive_science",
    "discipline": "SOCIAL",
    "name": "Behavioral Psychology & Cognitive Science",
    "baseWeight": 4,
    "keywords": [
      "behavioral",
      "psychology",
      "cognitive",
      "science"
    ]
  },
  {
    "id": "computational_psychology_cognitive_science",
    "discipline": "SOCIAL",
    "name": "Computational Psychology & Cognitive Science",
    "baseWeight": 5,
    "keywords": [
      "computational",
      "psychology",
      "cognitive",
      "science",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico"
    ]
  },
  {
    "id": "cognitive_psychology_science",
    "discipline": "SOCIAL",
    "name": "Cognitive Psychology & Science",
    "baseWeight": 4,
    "keywords": [
      "cognitive",
      "psychology",
      "science"
    ]
  },
  {
    "id": "social_psychology_cognitive_science",
    "discipline": "SOCIAL",
    "name": "Social Psychology & Cognitive Science",
    "baseWeight": 4,
    "keywords": [
      "social",
      "psychology",
      "cognitive",
      "science"
    ]
  },
  {
    "id": "historical_psychology_cognitive_science",
    "discipline": "SOCIAL",
    "name": "Historical Psychology & Cognitive Science",
    "baseWeight": 2,
    "keywords": [
      "historical",
      "psychology",
      "cognitive",
      "science"
    ]
  },
  {
    "id": "cultural_psychology_cognitive_science",
    "discipline": "SOCIAL",
    "name": "Cultural Psychology & Cognitive Science",
    "baseWeight": 4,
    "keywords": [
      "cultural",
      "psychology",
      "cognitive",
      "science"
    ]
  },
  {
    "id": "political_psychology_cognitive_science",
    "discipline": "SOCIAL",
    "name": "Political Psychology & Cognitive Science",
    "baseWeight": 4,
    "keywords": [
      "political",
      "psychology",
      "cognitive",
      "science"
    ]
  },
  {
    "id": "economic_psychology_cognitive_science",
    "discipline": "SOCIAL",
    "name": "Economic Psychology & Cognitive Science",
    "baseWeight": 4,
    "keywords": [
      "economic",
      "psychology",
      "cognitive",
      "science"
    ]
  },
  {
    "id": "quantitative_psychology_cognitive_science",
    "discipline": "SOCIAL",
    "name": "Quantitative Psychology & Cognitive Science",
    "baseWeight": 4,
    "keywords": [
      "quantitative",
      "psychology",
      "cognitive",
      "science"
    ]
  },
  {
    "id": "qualitative_psychology_cognitive_science",
    "discipline": "SOCIAL",
    "name": "Qualitative Psychology & Cognitive Science",
    "baseWeight": 4,
    "keywords": [
      "qualitative",
      "psychology",
      "cognitive",
      "science"
    ]
  },
  {
    "id": "comparative_psychology_cognitive_science",
    "discipline": "SOCIAL",
    "name": "Comparative Psychology & Cognitive Science",
    "baseWeight": 4,
    "keywords": [
      "comparative",
      "psychology",
      "cognitive",
      "science"
    ]
  },
  {
    "id": "systemic_psychology_cognitive_science",
    "discipline": "SOCIAL",
    "name": "Systemic Psychology & Cognitive Science",
    "baseWeight": 4,
    "keywords": [
      "systemic",
      "psychology",
      "cognitive",
      "science"
    ]
  },
  {
    "id": "forensic_psychology_cognitive_science",
    "discipline": "SOCIAL",
    "name": "Forensic Psychology & Cognitive Science",
    "baseWeight": 4,
    "keywords": [
      "forensic",
      "psychology",
      "cognitive",
      "science"
    ]
  },
  {
    "id": "demographic_psychology_cognitive_science",
    "discipline": "SOCIAL",
    "name": "Demographic Psychology & Cognitive Science",
    "baseWeight": 4,
    "keywords": [
      "demographic",
      "psychology",
      "cognitive",
      "science"
    ]
  },
  {
    "id": "evolutionary_psychology_cognitive_science",
    "discipline": "SOCIAL",
    "name": "Evolutionary Psychology & Cognitive Science",
    "baseWeight": 4,
    "keywords": [
      "evolutionary",
      "psychology",
      "cognitive",
      "science"
    ]
  },
  {
    "id": "archaeological_psychology_cognitive_science",
    "discipline": "SOCIAL",
    "name": "Archaeological Psychology & Cognitive Science",
    "baseWeight": 4,
    "keywords": [
      "archaeological",
      "psychology",
      "cognitive",
      "science"
    ]
  },
  {
    "id": "geographical_psychology_cognitive_science",
    "discipline": "SOCIAL",
    "name": "Geographical Psychology & Cognitive Science",
    "baseWeight": 4,
    "keywords": [
      "geographical",
      "psychology",
      "cognitive",
      "science"
    ]
  },
  {
    "id": "sociological_psychology_cognitive_science",
    "discipline": "SOCIAL",
    "name": "Sociological Psychology & Cognitive Science",
    "baseWeight": 4,
    "keywords": [
      "sociological",
      "psychology",
      "cognitive",
      "science"
    ]
  },
  {
    "id": "psychological_psychology_cognitive_science",
    "discipline": "SOCIAL",
    "name": "Psychological Psychology & Cognitive Science",
    "baseWeight": 4,
    "keywords": [
      "psychological",
      "psychology",
      "cognitive",
      "science"
    ]
  },
  {
    "id": "anthropological_psychology_cognitive_science",
    "discipline": "SOCIAL",
    "name": "Anthropological Psychology & Cognitive Science",
    "baseWeight": 4,
    "keywords": [
      "anthropological",
      "psychology",
      "cognitive",
      "science"
    ]
  },
  {
    "id": "linguistic_psychology_cognitive_science",
    "discipline": "SOCIAL",
    "name": "Linguistic Psychology & Cognitive Science",
    "baseWeight": 4,
    "keywords": [
      "linguistic",
      "psychology",
      "cognitive",
      "science"
    ]
  },
  {
    "id": "criminological_psychology_cognitive_science",
    "discipline": "SOCIAL",
    "name": "Criminological Psychology & Cognitive Science",
    "baseWeight": 4,
    "keywords": [
      "criminological",
      "psychology",
      "cognitive",
      "science"
    ]
  },
  {
    "id": "educational_psychology_cognitive_science",
    "discipline": "SOCIAL",
    "name": "Educational Psychology & Cognitive Science",
    "baseWeight": 4,
    "keywords": [
      "educational",
      "psychology",
      "cognitive",
      "science"
    ]
  },
  {
    "id": "international_psychology_cognitive_science",
    "discipline": "SOCIAL",
    "name": "International Psychology & Cognitive Science",
    "baseWeight": 4,
    "keywords": [
      "international",
      "psychology",
      "cognitive",
      "science"
    ]
  },
  {
    "id": "pedagogical_psychology_cognitive_science",
    "discipline": "SOCIAL",
    "name": "Pedagogical Psychology & Cognitive Science",
    "baseWeight": 4,
    "keywords": [
      "pedagogical",
      "psychology",
      "cognitive",
      "science"
    ]
  },
  {
    "id": "behavioral_sociology_demography",
    "discipline": "SOCIAL",
    "name": "Behavioral Sociology & Demography",
    "baseWeight": 5,
    "keywords": [
      "behavioral",
      "sociology",
      "demography"
    ]
  },
  {
    "id": "computational_sociology_demography",
    "discipline": "SOCIAL",
    "name": "Computational Sociology & Demography",
    "baseWeight": 6,
    "keywords": [
      "computational",
      "sociology",
      "demography",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico"
    ]
  },
  {
    "id": "cognitive_sociology_demography",
    "discipline": "SOCIAL",
    "name": "Cognitive Sociology & Demography",
    "baseWeight": 5,
    "keywords": [
      "cognitive",
      "sociology",
      "demography"
    ]
  },
  {
    "id": "social_sociology_demography",
    "discipline": "SOCIAL",
    "name": "Social Sociology & Demography",
    "baseWeight": 5,
    "keywords": [
      "social",
      "sociology",
      "demography"
    ]
  },
  {
    "id": "historical_sociology_demography",
    "discipline": "SOCIAL",
    "name": "Historical Sociology & Demography",
    "baseWeight": 3,
    "keywords": [
      "historical",
      "sociology",
      "demography"
    ]
  },
  {
    "id": "cultural_sociology_demography",
    "discipline": "SOCIAL",
    "name": "Cultural Sociology & Demography",
    "baseWeight": 5,
    "keywords": [
      "cultural",
      "sociology",
      "demography"
    ]
  },
  {
    "id": "political_sociology_demography",
    "discipline": "SOCIAL",
    "name": "Political Sociology & Demography",
    "baseWeight": 5,
    "keywords": [
      "political",
      "sociology",
      "demography"
    ]
  },
  {
    "id": "economic_sociology_demography",
    "discipline": "SOCIAL",
    "name": "Economic Sociology & Demography",
    "baseWeight": 5,
    "keywords": [
      "economic",
      "sociology",
      "demography"
    ]
  },
  {
    "id": "quantitative_sociology_demography",
    "discipline": "SOCIAL",
    "name": "Quantitative Sociology & Demography",
    "baseWeight": 5,
    "keywords": [
      "quantitative",
      "sociology",
      "demography"
    ]
  },
  {
    "id": "qualitative_sociology_demography",
    "discipline": "SOCIAL",
    "name": "Qualitative Sociology & Demography",
    "baseWeight": 5,
    "keywords": [
      "qualitative",
      "sociology",
      "demography"
    ]
  },
  {
    "id": "comparative_sociology_demography",
    "discipline": "SOCIAL",
    "name": "Comparative Sociology & Demography",
    "baseWeight": 5,
    "keywords": [
      "comparative",
      "sociology",
      "demography"
    ]
  },
  {
    "id": "systemic_sociology_demography",
    "discipline": "SOCIAL",
    "name": "Systemic Sociology & Demography",
    "baseWeight": 5,
    "keywords": [
      "systemic",
      "sociology",
      "demography"
    ]
  },
  {
    "id": "forensic_sociology_demography",
    "discipline": "SOCIAL",
    "name": "Forensic Sociology & Demography",
    "baseWeight": 5,
    "keywords": [
      "forensic",
      "sociology",
      "demography"
    ]
  },
  {
    "id": "demographic_sociology_demography",
    "discipline": "SOCIAL",
    "name": "Demographic Sociology & Demography",
    "baseWeight": 5,
    "keywords": [
      "demographic",
      "sociology",
      "demography"
    ]
  },
  {
    "id": "evolutionary_sociology_demography",
    "discipline": "SOCIAL",
    "name": "Evolutionary Sociology & Demography",
    "baseWeight": 5,
    "keywords": [
      "evolutionary",
      "sociology",
      "demography"
    ]
  },
  {
    "id": "archaeological_sociology_demography",
    "discipline": "SOCIAL",
    "name": "Archaeological Sociology & Demography",
    "baseWeight": 5,
    "keywords": [
      "archaeological",
      "sociology",
      "demography"
    ]
  },
  {
    "id": "geographical_sociology_demography",
    "discipline": "SOCIAL",
    "name": "Geographical Sociology & Demography",
    "baseWeight": 5,
    "keywords": [
      "geographical",
      "sociology",
      "demography"
    ]
  },
  {
    "id": "sociological_sociology_demography",
    "discipline": "SOCIAL",
    "name": "Sociological Sociology & Demography",
    "baseWeight": 5,
    "keywords": [
      "sociological",
      "sociology",
      "demography"
    ]
  },
  {
    "id": "psychological_sociology_demography",
    "discipline": "SOCIAL",
    "name": "Psychological Sociology & Demography",
    "baseWeight": 5,
    "keywords": [
      "psychological",
      "sociology",
      "demography"
    ]
  },
  {
    "id": "anthropological_sociology_demography",
    "discipline": "SOCIAL",
    "name": "Anthropological Sociology & Demography",
    "baseWeight": 5,
    "keywords": [
      "anthropological",
      "sociology",
      "demography"
    ]
  },
  {
    "id": "linguistic_sociology_demography",
    "discipline": "SOCIAL",
    "name": "Linguistic Sociology & Demography",
    "baseWeight": 5,
    "keywords": [
      "linguistic",
      "sociology",
      "demography"
    ]
  },
  {
    "id": "criminological_sociology_demography",
    "discipline": "SOCIAL",
    "name": "Criminological Sociology & Demography",
    "baseWeight": 5,
    "keywords": [
      "criminological",
      "sociology",
      "demography"
    ]
  },
  {
    "id": "educational_sociology_demography",
    "discipline": "SOCIAL",
    "name": "Educational Sociology & Demography",
    "baseWeight": 5,
    "keywords": [
      "educational",
      "sociology",
      "demography"
    ]
  },
  {
    "id": "international_sociology_demography",
    "discipline": "SOCIAL",
    "name": "International Sociology & Demography",
    "baseWeight": 5,
    "keywords": [
      "international",
      "sociology",
      "demography"
    ]
  },
  {
    "id": "pedagogical_sociology_demography",
    "discipline": "SOCIAL",
    "name": "Pedagogical Sociology & Demography",
    "baseWeight": 5,
    "keywords": [
      "pedagogical",
      "sociology",
      "demography"
    ]
  },
  {
    "id": "behavioral_anthropology",
    "discipline": "SOCIAL",
    "name": "Behavioral Anthropology",
    "baseWeight": 6,
    "keywords": [
      "behavioral",
      "anthropology"
    ]
  },
  {
    "id": "computational_anthropology",
    "discipline": "SOCIAL",
    "name": "Computational Anthropology",
    "baseWeight": 7,
    "keywords": [
      "computational",
      "anthropology",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico"
    ]
  },
  {
    "id": "cognitive_anthropology",
    "discipline": "SOCIAL",
    "name": "Cognitive Anthropology",
    "baseWeight": 6,
    "keywords": [
      "cognitive",
      "anthropology"
    ]
  },
  {
    "id": "social_anthropology",
    "discipline": "SOCIAL",
    "name": "Social Anthropology",
    "baseWeight": 6,
    "keywords": [
      "social",
      "anthropology"
    ]
  },
  {
    "id": "historical_anthropology",
    "discipline": "SOCIAL",
    "name": "Historical Anthropology",
    "baseWeight": 4,
    "keywords": [
      "historical",
      "anthropology"
    ]
  },
  {
    "id": "cultural_anthropology",
    "discipline": "SOCIAL",
    "name": "Cultural Anthropology",
    "baseWeight": 6,
    "keywords": [
      "cultural",
      "anthropology"
    ]
  },
  {
    "id": "political_anthropology",
    "discipline": "SOCIAL",
    "name": "Political Anthropology",
    "baseWeight": 6,
    "keywords": [
      "political",
      "anthropology"
    ]
  },
  {
    "id": "economic_anthropology",
    "discipline": "SOCIAL",
    "name": "Economic Anthropology",
    "baseWeight": 6,
    "keywords": [
      "economic",
      "anthropology"
    ]
  },
  {
    "id": "quantitative_anthropology",
    "discipline": "SOCIAL",
    "name": "Quantitative Anthropology",
    "baseWeight": 6,
    "keywords": [
      "quantitative",
      "anthropology"
    ]
  },
  {
    "id": "qualitative_anthropology",
    "discipline": "SOCIAL",
    "name": "Qualitative Anthropology",
    "baseWeight": 6,
    "keywords": [
      "qualitative",
      "anthropology"
    ]
  },
  {
    "id": "comparative_anthropology",
    "discipline": "SOCIAL",
    "name": "Comparative Anthropology",
    "baseWeight": 6,
    "keywords": [
      "comparative",
      "anthropology"
    ]
  },
  {
    "id": "systemic_anthropology",
    "discipline": "SOCIAL",
    "name": "Systemic Anthropology",
    "baseWeight": 6,
    "keywords": [
      "systemic",
      "anthropology"
    ]
  },
  {
    "id": "forensic_anthropology",
    "discipline": "SOCIAL",
    "name": "Forensic Anthropology",
    "baseWeight": 6,
    "keywords": [
      "forensic",
      "anthropology"
    ]
  },
  {
    "id": "demographic_anthropology",
    "discipline": "SOCIAL",
    "name": "Demographic Anthropology",
    "baseWeight": 6,
    "keywords": [
      "demographic",
      "anthropology"
    ]
  },
  {
    "id": "evolutionary_anthropology",
    "discipline": "SOCIAL",
    "name": "Evolutionary Anthropology",
    "baseWeight": 6,
    "keywords": [
      "evolutionary",
      "anthropology"
    ]
  },
  {
    "id": "archaeological_anthropology",
    "discipline": "SOCIAL",
    "name": "Archaeological Anthropology",
    "baseWeight": 6,
    "keywords": [
      "archaeological",
      "anthropology"
    ]
  },
  {
    "id": "geographical_anthropology",
    "discipline": "SOCIAL",
    "name": "Geographical Anthropology",
    "baseWeight": 6,
    "keywords": [
      "geographical",
      "anthropology"
    ]
  },
  {
    "id": "sociological_anthropology",
    "discipline": "SOCIAL",
    "name": "Sociological Anthropology",
    "baseWeight": 6,
    "keywords": [
      "sociological",
      "anthropology"
    ]
  },
  {
    "id": "psychological_anthropology",
    "discipline": "SOCIAL",
    "name": "Psychological Anthropology",
    "baseWeight": 6,
    "keywords": [
      "psychological",
      "anthropology"
    ]
  },
  {
    "id": "anthropological_anthropology",
    "discipline": "SOCIAL",
    "name": "Anthropological Anthropology",
    "baseWeight": 6,
    "keywords": [
      "anthropological",
      "anthropology"
    ]
  },
  {
    "id": "linguistic_anthropology",
    "discipline": "SOCIAL",
    "name": "Linguistic Anthropology",
    "baseWeight": 6,
    "keywords": [
      "linguistic",
      "anthropology"
    ]
  },
  {
    "id": "criminological_anthropology",
    "discipline": "SOCIAL",
    "name": "Criminological Anthropology",
    "baseWeight": 6,
    "keywords": [
      "criminological",
      "anthropology"
    ]
  },
  {
    "id": "educational_anthropology",
    "discipline": "SOCIAL",
    "name": "Educational Anthropology",
    "baseWeight": 6,
    "keywords": [
      "educational",
      "anthropology"
    ]
  },
  {
    "id": "international_anthropology",
    "discipline": "SOCIAL",
    "name": "International Anthropology",
    "baseWeight": 6,
    "keywords": [
      "international",
      "anthropology"
    ]
  },
  {
    "id": "pedagogical_anthropology",
    "discipline": "SOCIAL",
    "name": "Pedagogical Anthropology",
    "baseWeight": 6,
    "keywords": [
      "pedagogical",
      "anthropology"
    ]
  },
  {
    "id": "behavioral_economics_econometrics",
    "discipline": "SOCIAL",
    "name": "Behavioral Economics & Econometrics",
    "baseWeight": 4,
    "keywords": [
      "behavioral",
      "economics",
      "econometrics"
    ]
  },
  {
    "id": "computational_economics_econometrics",
    "discipline": "SOCIAL",
    "name": "Computational Economics & Econometrics",
    "baseWeight": 5,
    "keywords": [
      "computational",
      "economics",
      "econometrics",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico"
    ]
  },
  {
    "id": "cognitive_economics_econometrics",
    "discipline": "SOCIAL",
    "name": "Cognitive Economics & Econometrics",
    "baseWeight": 4,
    "keywords": [
      "cognitive",
      "economics",
      "econometrics"
    ]
  },
  {
    "id": "social_economics_econometrics",
    "discipline": "SOCIAL",
    "name": "Social Economics & Econometrics",
    "baseWeight": 4,
    "keywords": [
      "social",
      "economics",
      "econometrics"
    ]
  },
  {
    "id": "historical_economics_econometrics",
    "discipline": "SOCIAL",
    "name": "Historical Economics & Econometrics",
    "baseWeight": 2,
    "keywords": [
      "historical",
      "economics",
      "econometrics"
    ]
  },
  {
    "id": "cultural_economics_econometrics",
    "discipline": "SOCIAL",
    "name": "Cultural Economics & Econometrics",
    "baseWeight": 4,
    "keywords": [
      "cultural",
      "economics",
      "econometrics"
    ]
  },
  {
    "id": "political_economics_econometrics",
    "discipline": "SOCIAL",
    "name": "Political Economics & Econometrics",
    "baseWeight": 4,
    "keywords": [
      "political",
      "economics",
      "econometrics"
    ]
  },
  {
    "id": "economic_economics_econometrics",
    "discipline": "SOCIAL",
    "name": "Economic Economics & Econometrics",
    "baseWeight": 4,
    "keywords": [
      "economic",
      "economics",
      "econometrics"
    ]
  },
  {
    "id": "quantitative_economics_econometrics",
    "discipline": "SOCIAL",
    "name": "Quantitative Economics & Econometrics",
    "baseWeight": 4,
    "keywords": [
      "quantitative",
      "economics",
      "econometrics"
    ]
  },
  {
    "id": "qualitative_economics_econometrics",
    "discipline": "SOCIAL",
    "name": "Qualitative Economics & Econometrics",
    "baseWeight": 4,
    "keywords": [
      "qualitative",
      "economics",
      "econometrics"
    ]
  },
  {
    "id": "comparative_economics_econometrics",
    "discipline": "SOCIAL",
    "name": "Comparative Economics & Econometrics",
    "baseWeight": 4,
    "keywords": [
      "comparative",
      "economics",
      "econometrics"
    ]
  },
  {
    "id": "systemic_economics_econometrics",
    "discipline": "SOCIAL",
    "name": "Systemic Economics & Econometrics",
    "baseWeight": 4,
    "keywords": [
      "systemic",
      "economics",
      "econometrics"
    ]
  },
  {
    "id": "forensic_economics_econometrics",
    "discipline": "SOCIAL",
    "name": "Forensic Economics & Econometrics",
    "baseWeight": 4,
    "keywords": [
      "forensic",
      "economics",
      "econometrics"
    ]
  },
  {
    "id": "demographic_economics_econometrics",
    "discipline": "SOCIAL",
    "name": "Demographic Economics & Econometrics",
    "baseWeight": 4,
    "keywords": [
      "demographic",
      "economics",
      "econometrics"
    ]
  },
  {
    "id": "evolutionary_economics_econometrics",
    "discipline": "SOCIAL",
    "name": "Evolutionary Economics & Econometrics",
    "baseWeight": 4,
    "keywords": [
      "evolutionary",
      "economics",
      "econometrics"
    ]
  },
  {
    "id": "archaeological_economics_econometrics",
    "discipline": "SOCIAL",
    "name": "Archaeological Economics & Econometrics",
    "baseWeight": 4,
    "keywords": [
      "archaeological",
      "economics",
      "econometrics"
    ]
  },
  {
    "id": "geographical_economics_econometrics",
    "discipline": "SOCIAL",
    "name": "Geographical Economics & Econometrics",
    "baseWeight": 4,
    "keywords": [
      "geographical",
      "economics",
      "econometrics"
    ]
  },
  {
    "id": "sociological_economics_econometrics",
    "discipline": "SOCIAL",
    "name": "Sociological Economics & Econometrics",
    "baseWeight": 4,
    "keywords": [
      "sociological",
      "economics",
      "econometrics"
    ]
  },
  {
    "id": "psychological_economics_econometrics",
    "discipline": "SOCIAL",
    "name": "Psychological Economics & Econometrics",
    "baseWeight": 4,
    "keywords": [
      "psychological",
      "economics",
      "econometrics"
    ]
  },
  {
    "id": "anthropological_economics_econometrics",
    "discipline": "SOCIAL",
    "name": "Anthropological Economics & Econometrics",
    "baseWeight": 4,
    "keywords": [
      "anthropological",
      "economics",
      "econometrics"
    ]
  },
  {
    "id": "linguistic_economics_econometrics",
    "discipline": "SOCIAL",
    "name": "Linguistic Economics & Econometrics",
    "baseWeight": 4,
    "keywords": [
      "linguistic",
      "economics",
      "econometrics"
    ]
  },
  {
    "id": "criminological_economics_econometrics",
    "discipline": "SOCIAL",
    "name": "Criminological Economics & Econometrics",
    "baseWeight": 4,
    "keywords": [
      "criminological",
      "economics",
      "econometrics"
    ]
  },
  {
    "id": "educational_economics_econometrics",
    "discipline": "SOCIAL",
    "name": "Educational Economics & Econometrics",
    "baseWeight": 4,
    "keywords": [
      "educational",
      "economics",
      "econometrics"
    ]
  },
  {
    "id": "international_economics_econometrics",
    "discipline": "SOCIAL",
    "name": "International Economics & Econometrics",
    "baseWeight": 4,
    "keywords": [
      "international",
      "economics",
      "econometrics"
    ]
  },
  {
    "id": "pedagogical_economics_econometrics",
    "discipline": "SOCIAL",
    "name": "Pedagogical Economics & Econometrics",
    "baseWeight": 4,
    "keywords": [
      "pedagogical",
      "economics",
      "econometrics"
    ]
  },
  {
    "id": "behavioral_political_science_ir",
    "discipline": "SOCIAL",
    "name": "Behavioral Political Science & IR",
    "baseWeight": 5,
    "keywords": [
      "behavioral",
      "political",
      "science"
    ]
  },
  {
    "id": "computational_political_science_ir",
    "discipline": "SOCIAL",
    "name": "Computational Political Science & IR",
    "baseWeight": 6,
    "keywords": [
      "computational",
      "political",
      "science",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico"
    ]
  },
  {
    "id": "cognitive_political_science_ir",
    "discipline": "SOCIAL",
    "name": "Cognitive Political Science & IR",
    "baseWeight": 5,
    "keywords": [
      "cognitive",
      "political",
      "science"
    ]
  },
  {
    "id": "social_political_science_ir",
    "discipline": "SOCIAL",
    "name": "Social Political Science & IR",
    "baseWeight": 5,
    "keywords": [
      "social",
      "political",
      "science"
    ]
  },
  {
    "id": "historical_political_science_ir",
    "discipline": "SOCIAL",
    "name": "Historical Political Science & IR",
    "baseWeight": 3,
    "keywords": [
      "historical",
      "political",
      "science"
    ]
  },
  {
    "id": "cultural_political_science_ir",
    "discipline": "SOCIAL",
    "name": "Cultural Political Science & IR",
    "baseWeight": 5,
    "keywords": [
      "cultural",
      "political",
      "science"
    ]
  },
  {
    "id": "political_science_ir",
    "discipline": "SOCIAL",
    "name": "Political Science & IR",
    "baseWeight": 5,
    "keywords": [
      "political",
      "science"
    ]
  },
  {
    "id": "economic_political_science_ir",
    "discipline": "SOCIAL",
    "name": "Economic Political Science & IR",
    "baseWeight": 5,
    "keywords": [
      "economic",
      "political",
      "science"
    ]
  },
  {
    "id": "quantitative_political_science_ir",
    "discipline": "SOCIAL",
    "name": "Quantitative Political Science & IR",
    "baseWeight": 5,
    "keywords": [
      "quantitative",
      "political",
      "science"
    ]
  },
  {
    "id": "qualitative_political_science_ir",
    "discipline": "SOCIAL",
    "name": "Qualitative Political Science & IR",
    "baseWeight": 5,
    "keywords": [
      "qualitative",
      "political",
      "science"
    ]
  },
  {
    "id": "comparative_political_science_ir",
    "discipline": "SOCIAL",
    "name": "Comparative Political Science & IR",
    "baseWeight": 5,
    "keywords": [
      "comparative",
      "political",
      "science"
    ]
  },
  {
    "id": "systemic_political_science_ir",
    "discipline": "SOCIAL",
    "name": "Systemic Political Science & IR",
    "baseWeight": 5,
    "keywords": [
      "systemic",
      "political",
      "science"
    ]
  },
  {
    "id": "forensic_political_science_ir",
    "discipline": "SOCIAL",
    "name": "Forensic Political Science & IR",
    "baseWeight": 5,
    "keywords": [
      "forensic",
      "political",
      "science"
    ]
  },
  {
    "id": "demographic_political_science_ir",
    "discipline": "SOCIAL",
    "name": "Demographic Political Science & IR",
    "baseWeight": 5,
    "keywords": [
      "demographic",
      "political",
      "science"
    ]
  },
  {
    "id": "evolutionary_political_science_ir",
    "discipline": "SOCIAL",
    "name": "Evolutionary Political Science & IR",
    "baseWeight": 5,
    "keywords": [
      "evolutionary",
      "political",
      "science"
    ]
  },
  {
    "id": "archaeological_political_science_ir",
    "discipline": "SOCIAL",
    "name": "Archaeological Political Science & IR",
    "baseWeight": 5,
    "keywords": [
      "archaeological",
      "political",
      "science"
    ]
  },
  {
    "id": "geographical_political_science_ir",
    "discipline": "SOCIAL",
    "name": "Geographical Political Science & IR",
    "baseWeight": 5,
    "keywords": [
      "geographical",
      "political",
      "science"
    ]
  },
  {
    "id": "sociological_political_science_ir",
    "discipline": "SOCIAL",
    "name": "Sociological Political Science & IR",
    "baseWeight": 5,
    "keywords": [
      "sociological",
      "political",
      "science"
    ]
  },
  {
    "id": "psychological_political_science_ir",
    "discipline": "SOCIAL",
    "name": "Psychological Political Science & IR",
    "baseWeight": 5,
    "keywords": [
      "psychological",
      "political",
      "science"
    ]
  },
  {
    "id": "anthropological_political_science_ir",
    "discipline": "SOCIAL",
    "name": "Anthropological Political Science & IR",
    "baseWeight": 5,
    "keywords": [
      "anthropological",
      "political",
      "science"
    ]
  },
  {
    "id": "linguistic_political_science_ir",
    "discipline": "SOCIAL",
    "name": "Linguistic Political Science & IR",
    "baseWeight": 5,
    "keywords": [
      "linguistic",
      "political",
      "science"
    ]
  },
  {
    "id": "criminological_political_science_ir",
    "discipline": "SOCIAL",
    "name": "Criminological Political Science & IR",
    "baseWeight": 5,
    "keywords": [
      "criminological",
      "political",
      "science"
    ]
  },
  {
    "id": "educational_political_science_ir",
    "discipline": "SOCIAL",
    "name": "Educational Political Science & IR",
    "baseWeight": 5,
    "keywords": [
      "educational",
      "political",
      "science"
    ]
  },
  {
    "id": "international_political_science_ir",
    "discipline": "SOCIAL",
    "name": "International Political Science & IR",
    "baseWeight": 5,
    "keywords": [
      "international",
      "political",
      "science"
    ]
  },
  {
    "id": "pedagogical_political_science_ir",
    "discipline": "SOCIAL",
    "name": "Pedagogical Political Science & IR",
    "baseWeight": 5,
    "keywords": [
      "pedagogical",
      "political",
      "science"
    ]
  },
  {
    "id": "behavioral_linguistics",
    "discipline": "SOCIAL",
    "name": "Behavioral Linguistics",
    "baseWeight": 6,
    "keywords": [
      "behavioral",
      "linguistics"
    ]
  },
  {
    "id": "computational_linguistics",
    "discipline": "SOCIAL",
    "name": "Computational Linguistics",
    "baseWeight": 7,
    "keywords": [
      "computational",
      "linguistics",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico"
    ]
  },
  {
    "id": "cognitive_linguistics",
    "discipline": "SOCIAL",
    "name": "Cognitive Linguistics",
    "baseWeight": 6,
    "keywords": [
      "cognitive",
      "linguistics"
    ]
  },
  {
    "id": "social_linguistics",
    "discipline": "SOCIAL",
    "name": "Social Linguistics",
    "baseWeight": 6,
    "keywords": [
      "social",
      "linguistics"
    ]
  },
  {
    "id": "historical_linguistics",
    "discipline": "SOCIAL",
    "name": "Historical Linguistics",
    "baseWeight": 4,
    "keywords": [
      "historical",
      "linguistics"
    ]
  },
  {
    "id": "cultural_linguistics",
    "discipline": "SOCIAL",
    "name": "Cultural Linguistics",
    "baseWeight": 6,
    "keywords": [
      "cultural",
      "linguistics"
    ]
  },
  {
    "id": "political_linguistics",
    "discipline": "SOCIAL",
    "name": "Political Linguistics",
    "baseWeight": 6,
    "keywords": [
      "political",
      "linguistics"
    ]
  },
  {
    "id": "economic_linguistics",
    "discipline": "SOCIAL",
    "name": "Economic Linguistics",
    "baseWeight": 6,
    "keywords": [
      "economic",
      "linguistics"
    ]
  },
  {
    "id": "quantitative_linguistics",
    "discipline": "SOCIAL",
    "name": "Quantitative Linguistics",
    "baseWeight": 6,
    "keywords": [
      "quantitative",
      "linguistics"
    ]
  },
  {
    "id": "qualitative_linguistics",
    "discipline": "SOCIAL",
    "name": "Qualitative Linguistics",
    "baseWeight": 6,
    "keywords": [
      "qualitative",
      "linguistics"
    ]
  },
  {
    "id": "comparative_linguistics",
    "discipline": "SOCIAL",
    "name": "Comparative Linguistics",
    "baseWeight": 6,
    "keywords": [
      "comparative",
      "linguistics"
    ]
  },
  {
    "id": "systemic_linguistics",
    "discipline": "SOCIAL",
    "name": "Systemic Linguistics",
    "baseWeight": 6,
    "keywords": [
      "systemic",
      "linguistics"
    ]
  },
  {
    "id": "forensic_linguistics",
    "discipline": "SOCIAL",
    "name": "Forensic Linguistics",
    "baseWeight": 6,
    "keywords": [
      "forensic",
      "linguistics"
    ]
  },
  {
    "id": "demographic_linguistics",
    "discipline": "SOCIAL",
    "name": "Demographic Linguistics",
    "baseWeight": 6,
    "keywords": [
      "demographic",
      "linguistics"
    ]
  },
  {
    "id": "evolutionary_linguistics",
    "discipline": "SOCIAL",
    "name": "Evolutionary Linguistics",
    "baseWeight": 6,
    "keywords": [
      "evolutionary",
      "linguistics"
    ]
  },
  {
    "id": "archaeological_linguistics",
    "discipline": "SOCIAL",
    "name": "Archaeological Linguistics",
    "baseWeight": 6,
    "keywords": [
      "archaeological",
      "linguistics"
    ]
  },
  {
    "id": "geographical_linguistics",
    "discipline": "SOCIAL",
    "name": "Geographical Linguistics",
    "baseWeight": 6,
    "keywords": [
      "geographical",
      "linguistics"
    ]
  },
  {
    "id": "sociological_linguistics",
    "discipline": "SOCIAL",
    "name": "Sociological Linguistics",
    "baseWeight": 6,
    "keywords": [
      "sociological",
      "linguistics"
    ]
  },
  {
    "id": "psychological_linguistics",
    "discipline": "SOCIAL",
    "name": "Psychological Linguistics",
    "baseWeight": 6,
    "keywords": [
      "psychological",
      "linguistics"
    ]
  },
  {
    "id": "anthropological_linguistics",
    "discipline": "SOCIAL",
    "name": "Anthropological Linguistics",
    "baseWeight": 6,
    "keywords": [
      "anthropological",
      "linguistics"
    ]
  },
  {
    "id": "linguistic_linguistics",
    "discipline": "SOCIAL",
    "name": "Linguistic Linguistics",
    "baseWeight": 6,
    "keywords": [
      "linguistic",
      "linguistics"
    ]
  },
  {
    "id": "criminological_linguistics",
    "discipline": "SOCIAL",
    "name": "Criminological Linguistics",
    "baseWeight": 6,
    "keywords": [
      "criminological",
      "linguistics"
    ]
  },
  {
    "id": "educational_linguistics",
    "discipline": "SOCIAL",
    "name": "Educational Linguistics",
    "baseWeight": 6,
    "keywords": [
      "educational",
      "linguistics"
    ]
  },
  {
    "id": "international_linguistics",
    "discipline": "SOCIAL",
    "name": "International Linguistics",
    "baseWeight": 6,
    "keywords": [
      "international",
      "linguistics"
    ]
  },
  {
    "id": "pedagogical_linguistics",
    "discipline": "SOCIAL",
    "name": "Pedagogical Linguistics",
    "baseWeight": 6,
    "keywords": [
      "pedagogical",
      "linguistics"
    ]
  },
  {
    "id": "behavioral_archaeology",
    "discipline": "SOCIAL",
    "name": "Behavioral Archaeology",
    "baseWeight": 4,
    "keywords": [
      "behavioral",
      "archaeology"
    ]
  },
  {
    "id": "computational_archaeology",
    "discipline": "SOCIAL",
    "name": "Computational Archaeology",
    "baseWeight": 5,
    "keywords": [
      "computational",
      "archaeology",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico"
    ]
  },
  {
    "id": "cognitive_archaeology",
    "discipline": "SOCIAL",
    "name": "Cognitive Archaeology",
    "baseWeight": 4,
    "keywords": [
      "cognitive",
      "archaeology"
    ]
  },
  {
    "id": "social_archaeology",
    "discipline": "SOCIAL",
    "name": "Social Archaeology",
    "baseWeight": 4,
    "keywords": [
      "social",
      "archaeology"
    ]
  },
  {
    "id": "historical_archaeology",
    "discipline": "SOCIAL",
    "name": "Historical Archaeology",
    "baseWeight": 2,
    "keywords": [
      "historical",
      "archaeology"
    ]
  },
  {
    "id": "cultural_archaeology",
    "discipline": "SOCIAL",
    "name": "Cultural Archaeology",
    "baseWeight": 4,
    "keywords": [
      "cultural",
      "archaeology"
    ]
  },
  {
    "id": "political_archaeology",
    "discipline": "SOCIAL",
    "name": "Political Archaeology",
    "baseWeight": 4,
    "keywords": [
      "political",
      "archaeology"
    ]
  },
  {
    "id": "economic_archaeology",
    "discipline": "SOCIAL",
    "name": "Economic Archaeology",
    "baseWeight": 4,
    "keywords": [
      "economic",
      "archaeology"
    ]
  },
  {
    "id": "quantitative_archaeology",
    "discipline": "SOCIAL",
    "name": "Quantitative Archaeology",
    "baseWeight": 4,
    "keywords": [
      "quantitative",
      "archaeology"
    ]
  },
  {
    "id": "qualitative_archaeology",
    "discipline": "SOCIAL",
    "name": "Qualitative Archaeology",
    "baseWeight": 4,
    "keywords": [
      "qualitative",
      "archaeology"
    ]
  },
  {
    "id": "comparative_archaeology",
    "discipline": "SOCIAL",
    "name": "Comparative Archaeology",
    "baseWeight": 4,
    "keywords": [
      "comparative",
      "archaeology"
    ]
  },
  {
    "id": "systemic_archaeology",
    "discipline": "SOCIAL",
    "name": "Systemic Archaeology",
    "baseWeight": 4,
    "keywords": [
      "systemic",
      "archaeology"
    ]
  },
  {
    "id": "forensic_archaeology",
    "discipline": "SOCIAL",
    "name": "Forensic Archaeology",
    "baseWeight": 4,
    "keywords": [
      "forensic",
      "archaeology"
    ]
  },
  {
    "id": "demographic_archaeology",
    "discipline": "SOCIAL",
    "name": "Demographic Archaeology",
    "baseWeight": 4,
    "keywords": [
      "demographic",
      "archaeology"
    ]
  },
  {
    "id": "evolutionary_archaeology",
    "discipline": "SOCIAL",
    "name": "Evolutionary Archaeology",
    "baseWeight": 4,
    "keywords": [
      "evolutionary",
      "archaeology"
    ]
  },
  {
    "id": "archaeological_archaeology",
    "discipline": "SOCIAL",
    "name": "Archaeological Archaeology",
    "baseWeight": 4,
    "keywords": [
      "archaeological",
      "archaeology"
    ]
  },
  {
    "id": "geographical_archaeology",
    "discipline": "SOCIAL",
    "name": "Geographical Archaeology",
    "baseWeight": 4,
    "keywords": [
      "geographical",
      "archaeology"
    ]
  },
  {
    "id": "sociological_archaeology",
    "discipline": "SOCIAL",
    "name": "Sociological Archaeology",
    "baseWeight": 4,
    "keywords": [
      "sociological",
      "archaeology"
    ]
  },
  {
    "id": "psychological_archaeology",
    "discipline": "SOCIAL",
    "name": "Psychological Archaeology",
    "baseWeight": 4,
    "keywords": [
      "psychological",
      "archaeology"
    ]
  },
  {
    "id": "anthropological_archaeology",
    "discipline": "SOCIAL",
    "name": "Anthropological Archaeology",
    "baseWeight": 4,
    "keywords": [
      "anthropological",
      "archaeology"
    ]
  },
  {
    "id": "linguistic_archaeology",
    "discipline": "SOCIAL",
    "name": "Linguistic Archaeology",
    "baseWeight": 4,
    "keywords": [
      "linguistic",
      "archaeology"
    ]
  },
  {
    "id": "criminological_archaeology",
    "discipline": "SOCIAL",
    "name": "Criminological Archaeology",
    "baseWeight": 4,
    "keywords": [
      "criminological",
      "archaeology"
    ]
  },
  {
    "id": "educational_archaeology",
    "discipline": "SOCIAL",
    "name": "Educational Archaeology",
    "baseWeight": 4,
    "keywords": [
      "educational",
      "archaeology"
    ]
  },
  {
    "id": "international_archaeology",
    "discipline": "SOCIAL",
    "name": "International Archaeology",
    "baseWeight": 4,
    "keywords": [
      "international",
      "archaeology"
    ]
  },
  {
    "id": "pedagogical_archaeology",
    "discipline": "SOCIAL",
    "name": "Pedagogical Archaeology",
    "baseWeight": 4,
    "keywords": [
      "pedagogical",
      "archaeology"
    ]
  },
  {
    "id": "behavioral_human_geography",
    "discipline": "SOCIAL",
    "name": "Behavioral Human Geography",
    "baseWeight": 5,
    "keywords": [
      "behavioral",
      "human",
      "geography"
    ]
  },
  {
    "id": "computational_human_geography",
    "discipline": "SOCIAL",
    "name": "Computational Human Geography",
    "baseWeight": 6,
    "keywords": [
      "computational",
      "human",
      "geography",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico"
    ]
  },
  {
    "id": "cognitive_human_geography",
    "discipline": "SOCIAL",
    "name": "Cognitive Human Geography",
    "baseWeight": 5,
    "keywords": [
      "cognitive",
      "human",
      "geography"
    ]
  },
  {
    "id": "social_human_geography",
    "discipline": "SOCIAL",
    "name": "Social Human Geography",
    "baseWeight": 5,
    "keywords": [
      "social",
      "human",
      "geography"
    ]
  },
  {
    "id": "historical_human_geography",
    "discipline": "SOCIAL",
    "name": "Historical Human Geography",
    "baseWeight": 3,
    "keywords": [
      "historical",
      "human",
      "geography"
    ]
  },
  {
    "id": "cultural_human_geography",
    "discipline": "SOCIAL",
    "name": "Cultural Human Geography",
    "baseWeight": 5,
    "keywords": [
      "cultural",
      "human",
      "geography"
    ]
  },
  {
    "id": "political_human_geography",
    "discipline": "SOCIAL",
    "name": "Political Human Geography",
    "baseWeight": 5,
    "keywords": [
      "political",
      "human",
      "geography"
    ]
  },
  {
    "id": "economic_human_geography",
    "discipline": "SOCIAL",
    "name": "Economic Human Geography",
    "baseWeight": 5,
    "keywords": [
      "economic",
      "human",
      "geography"
    ]
  },
  {
    "id": "quantitative_human_geography",
    "discipline": "SOCIAL",
    "name": "Quantitative Human Geography",
    "baseWeight": 5,
    "keywords": [
      "quantitative",
      "human",
      "geography"
    ]
  },
  {
    "id": "qualitative_human_geography",
    "discipline": "SOCIAL",
    "name": "Qualitative Human Geography",
    "baseWeight": 5,
    "keywords": [
      "qualitative",
      "human",
      "geography"
    ]
  },
  {
    "id": "comparative_human_geography",
    "discipline": "SOCIAL",
    "name": "Comparative Human Geography",
    "baseWeight": 5,
    "keywords": [
      "comparative",
      "human",
      "geography"
    ]
  },
  {
    "id": "systemic_human_geography",
    "discipline": "SOCIAL",
    "name": "Systemic Human Geography",
    "baseWeight": 5,
    "keywords": [
      "systemic",
      "human",
      "geography"
    ]
  },
  {
    "id": "forensic_human_geography",
    "discipline": "SOCIAL",
    "name": "Forensic Human Geography",
    "baseWeight": 5,
    "keywords": [
      "forensic",
      "human",
      "geography"
    ]
  },
  {
    "id": "demographic_human_geography",
    "discipline": "SOCIAL",
    "name": "Demographic Human Geography",
    "baseWeight": 5,
    "keywords": [
      "demographic",
      "human",
      "geography"
    ]
  },
  {
    "id": "evolutionary_human_geography",
    "discipline": "SOCIAL",
    "name": "Evolutionary Human Geography",
    "baseWeight": 5,
    "keywords": [
      "evolutionary",
      "human",
      "geography"
    ]
  },
  {
    "id": "archaeological_human_geography",
    "discipline": "SOCIAL",
    "name": "Archaeological Human Geography",
    "baseWeight": 5,
    "keywords": [
      "archaeological",
      "human",
      "geography"
    ]
  },
  {
    "id": "geographical_human_geography",
    "discipline": "SOCIAL",
    "name": "Geographical Human Geography",
    "baseWeight": 5,
    "keywords": [
      "geographical",
      "human",
      "geography"
    ]
  },
  {
    "id": "sociological_human_geography",
    "discipline": "SOCIAL",
    "name": "Sociological Human Geography",
    "baseWeight": 5,
    "keywords": [
      "sociological",
      "human",
      "geography"
    ]
  },
  {
    "id": "psychological_human_geography",
    "discipline": "SOCIAL",
    "name": "Psychological Human Geography",
    "baseWeight": 5,
    "keywords": [
      "psychological",
      "human",
      "geography"
    ]
  },
  {
    "id": "anthropological_human_geography",
    "discipline": "SOCIAL",
    "name": "Anthropological Human Geography",
    "baseWeight": 5,
    "keywords": [
      "anthropological",
      "human",
      "geography"
    ]
  },
  {
    "id": "linguistic_human_geography",
    "discipline": "SOCIAL",
    "name": "Linguistic Human Geography",
    "baseWeight": 5,
    "keywords": [
      "linguistic",
      "human",
      "geography"
    ]
  },
  {
    "id": "criminological_human_geography",
    "discipline": "SOCIAL",
    "name": "Criminological Human Geography",
    "baseWeight": 5,
    "keywords": [
      "criminological",
      "human",
      "geography"
    ]
  },
  {
    "id": "educational_human_geography",
    "discipline": "SOCIAL",
    "name": "Educational Human Geography",
    "baseWeight": 5,
    "keywords": [
      "educational",
      "human",
      "geography"
    ]
  },
  {
    "id": "international_human_geography",
    "discipline": "SOCIAL",
    "name": "International Human Geography",
    "baseWeight": 5,
    "keywords": [
      "international",
      "human",
      "geography"
    ]
  },
  {
    "id": "pedagogical_human_geography",
    "discipline": "SOCIAL",
    "name": "Pedagogical Human Geography",
    "baseWeight": 5,
    "keywords": [
      "pedagogical",
      "human",
      "geography"
    ]
  },
  {
    "id": "behavioral_criminology",
    "discipline": "SOCIAL",
    "name": "Behavioral Criminology",
    "baseWeight": 6,
    "keywords": [
      "behavioral",
      "criminology"
    ]
  },
  {
    "id": "computational_criminology",
    "discipline": "SOCIAL",
    "name": "Computational Criminology",
    "baseWeight": 7,
    "keywords": [
      "computational",
      "criminology",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico"
    ]
  },
  {
    "id": "cognitive_criminology",
    "discipline": "SOCIAL",
    "name": "Cognitive Criminology",
    "baseWeight": 6,
    "keywords": [
      "cognitive",
      "criminology"
    ]
  },
  {
    "id": "social_criminology",
    "discipline": "SOCIAL",
    "name": "Social Criminology",
    "baseWeight": 6,
    "keywords": [
      "social",
      "criminology"
    ]
  },
  {
    "id": "historical_criminology",
    "discipline": "SOCIAL",
    "name": "Historical Criminology",
    "baseWeight": 4,
    "keywords": [
      "historical",
      "criminology"
    ]
  },
  {
    "id": "cultural_criminology",
    "discipline": "SOCIAL",
    "name": "Cultural Criminology",
    "baseWeight": 6,
    "keywords": [
      "cultural",
      "criminology"
    ]
  },
  {
    "id": "political_criminology",
    "discipline": "SOCIAL",
    "name": "Political Criminology",
    "baseWeight": 6,
    "keywords": [
      "political",
      "criminology"
    ]
  },
  {
    "id": "economic_criminology",
    "discipline": "SOCIAL",
    "name": "Economic Criminology",
    "baseWeight": 6,
    "keywords": [
      "economic",
      "criminology"
    ]
  },
  {
    "id": "quantitative_criminology",
    "discipline": "SOCIAL",
    "name": "Quantitative Criminology",
    "baseWeight": 6,
    "keywords": [
      "quantitative",
      "criminology"
    ]
  },
  {
    "id": "qualitative_criminology",
    "discipline": "SOCIAL",
    "name": "Qualitative Criminology",
    "baseWeight": 6,
    "keywords": [
      "qualitative",
      "criminology"
    ]
  },
  {
    "id": "comparative_criminology",
    "discipline": "SOCIAL",
    "name": "Comparative Criminology",
    "baseWeight": 6,
    "keywords": [
      "comparative",
      "criminology"
    ]
  },
  {
    "id": "systemic_criminology",
    "discipline": "SOCIAL",
    "name": "Systemic Criminology",
    "baseWeight": 6,
    "keywords": [
      "systemic",
      "criminology"
    ]
  },
  {
    "id": "forensic_criminology",
    "discipline": "SOCIAL",
    "name": "Forensic Criminology",
    "baseWeight": 6,
    "keywords": [
      "forensic",
      "criminology"
    ]
  },
  {
    "id": "demographic_criminology",
    "discipline": "SOCIAL",
    "name": "Demographic Criminology",
    "baseWeight": 6,
    "keywords": [
      "demographic",
      "criminology"
    ]
  },
  {
    "id": "evolutionary_criminology",
    "discipline": "SOCIAL",
    "name": "Evolutionary Criminology",
    "baseWeight": 6,
    "keywords": [
      "evolutionary",
      "criminology"
    ]
  },
  {
    "id": "archaeological_criminology",
    "discipline": "SOCIAL",
    "name": "Archaeological Criminology",
    "baseWeight": 6,
    "keywords": [
      "archaeological",
      "criminology"
    ]
  },
  {
    "id": "geographical_criminology",
    "discipline": "SOCIAL",
    "name": "Geographical Criminology",
    "baseWeight": 6,
    "keywords": [
      "geographical",
      "criminology"
    ]
  },
  {
    "id": "sociological_criminology",
    "discipline": "SOCIAL",
    "name": "Sociological Criminology",
    "baseWeight": 6,
    "keywords": [
      "sociological",
      "criminology"
    ]
  },
  {
    "id": "psychological_criminology",
    "discipline": "SOCIAL",
    "name": "Psychological Criminology",
    "baseWeight": 6,
    "keywords": [
      "psychological",
      "criminology"
    ]
  },
  {
    "id": "anthropological_criminology",
    "discipline": "SOCIAL",
    "name": "Anthropological Criminology",
    "baseWeight": 6,
    "keywords": [
      "anthropological",
      "criminology"
    ]
  },
  {
    "id": "linguistic_criminology",
    "discipline": "SOCIAL",
    "name": "Linguistic Criminology",
    "baseWeight": 6,
    "keywords": [
      "linguistic",
      "criminology"
    ]
  },
  {
    "id": "criminological_criminology",
    "discipline": "SOCIAL",
    "name": "Criminological Criminology",
    "baseWeight": 6,
    "keywords": [
      "criminological",
      "criminology"
    ]
  },
  {
    "id": "educational_criminology",
    "discipline": "SOCIAL",
    "name": "Educational Criminology",
    "baseWeight": 6,
    "keywords": [
      "educational",
      "criminology"
    ]
  },
  {
    "id": "international_criminology",
    "discipline": "SOCIAL",
    "name": "International Criminology",
    "baseWeight": 6,
    "keywords": [
      "international",
      "criminology"
    ]
  },
  {
    "id": "pedagogical_criminology",
    "discipline": "SOCIAL",
    "name": "Pedagogical Criminology",
    "baseWeight": 6,
    "keywords": [
      "pedagogical",
      "criminology"
    ]
  },
  {
    "id": "behavioral_education_theory_pedagogy",
    "discipline": "SOCIAL",
    "name": "Behavioral Education Theory & Pedagogy",
    "baseWeight": 4,
    "keywords": [
      "behavioral",
      "education",
      "theory",
      "pedagogy"
    ]
  },
  {
    "id": "computational_education_theory_pedagogy",
    "discipline": "SOCIAL",
    "name": "Computational Education Theory & Pedagogy",
    "baseWeight": 5,
    "keywords": [
      "computational",
      "education",
      "theory",
      "pedagogy",
      "computation",
      "algorithm",
      "simulation",
      "modelling",
      "numerical",
      "in silico"
    ]
  },
  {
    "id": "cognitive_education_theory_pedagogy",
    "discipline": "SOCIAL",
    "name": "Cognitive Education Theory & Pedagogy",
    "baseWeight": 4,
    "keywords": [
      "cognitive",
      "education",
      "theory",
      "pedagogy"
    ]
  },
  {
    "id": "social_education_theory_pedagogy",
    "discipline": "SOCIAL",
    "name": "Social Education Theory & Pedagogy",
    "baseWeight": 4,
    "keywords": [
      "social",
      "education",
      "theory",
      "pedagogy"
    ]
  },
  {
    "id": "historical_education_theory_pedagogy",
    "discipline": "SOCIAL",
    "name": "Historical Education Theory & Pedagogy",
    "baseWeight": 2,
    "keywords": [
      "historical",
      "education",
      "theory",
      "pedagogy"
    ]
  },
  {
    "id": "cultural_education_theory_pedagogy",
    "discipline": "SOCIAL",
    "name": "Cultural Education Theory & Pedagogy",
    "baseWeight": 4,
    "keywords": [
      "cultural",
      "education",
      "theory",
      "pedagogy"
    ]
  },
  {
    "id": "political_education_theory_pedagogy",
    "discipline": "SOCIAL",
    "name": "Political Education Theory & Pedagogy",
    "baseWeight": 4,
    "keywords": [
      "political",
      "education",
      "theory",
      "pedagogy"
    ]
  },
  {
    "id": "economic_education_theory_pedagogy",
    "discipline": "SOCIAL",
    "name": "Economic Education Theory & Pedagogy",
    "baseWeight": 4,
    "keywords": [
      "economic",
      "education",
      "theory",
      "pedagogy"
    ]
  },
  {
    "id": "quantitative_education_theory_pedagogy",
    "discipline": "SOCIAL",
    "name": "Quantitative Education Theory & Pedagogy",
    "baseWeight": 4,
    "keywords": [
      "quantitative",
      "education",
      "theory",
      "pedagogy"
    ]
  },
  {
    "id": "qualitative_education_theory_pedagogy",
    "discipline": "SOCIAL",
    "name": "Qualitative Education Theory & Pedagogy",
    "baseWeight": 4,
    "keywords": [
      "qualitative",
      "education",
      "theory",
      "pedagogy"
    ]
  },
  {
    "id": "comparative_education_theory_pedagogy",
    "discipline": "SOCIAL",
    "name": "Comparative Education Theory & Pedagogy",
    "baseWeight": 4,
    "keywords": [
      "comparative",
      "education",
      "theory",
      "pedagogy"
    ]
  },
  {
    "id": "systemic_education_theory_pedagogy",
    "discipline": "SOCIAL",
    "name": "Systemic Education Theory & Pedagogy",
    "baseWeight": 4,
    "keywords": [
      "systemic",
      "education",
      "theory",
      "pedagogy"
    ]
  },
  {
    "id": "forensic_education_theory_pedagogy",
    "discipline": "SOCIAL",
    "name": "Forensic Education Theory & Pedagogy",
    "baseWeight": 4,
    "keywords": [
      "forensic",
      "education",
      "theory",
      "pedagogy"
    ]
  },
  {
    "id": "demographic_education_theory_pedagogy",
    "discipline": "SOCIAL",
    "name": "Demographic Education Theory & Pedagogy",
    "baseWeight": 4,
    "keywords": [
      "demographic",
      "education",
      "theory",
      "pedagogy"
    ]
  },
  {
    "id": "evolutionary_education_theory_pedagogy",
    "discipline": "SOCIAL",
    "name": "Evolutionary Education Theory & Pedagogy",
    "baseWeight": 4,
    "keywords": [
      "evolutionary",
      "education",
      "theory",
      "pedagogy"
    ]
  },
  {
    "id": "archaeological_education_theory_pedagogy",
    "discipline": "SOCIAL",
    "name": "Archaeological Education Theory & Pedagogy",
    "baseWeight": 4,
    "keywords": [
      "archaeological",
      "education",
      "theory",
      "pedagogy"
    ]
  },
  {
    "id": "geographical_education_theory_pedagogy",
    "discipline": "SOCIAL",
    "name": "Geographical Education Theory & Pedagogy",
    "baseWeight": 4,
    "keywords": [
      "geographical",
      "education",
      "theory",
      "pedagogy"
    ]
  },
  {
    "id": "sociological_education_theory_pedagogy",
    "discipline": "SOCIAL",
    "name": "Sociological Education Theory & Pedagogy",
    "baseWeight": 4,
    "keywords": [
      "sociological",
      "education",
      "theory",
      "pedagogy"
    ]
  },
  {
    "id": "psychological_education_theory_pedagogy",
    "discipline": "SOCIAL",
    "name": "Psychological Education Theory & Pedagogy",
    "baseWeight": 4,
    "keywords": [
      "psychological",
      "education",
      "theory",
      "pedagogy"
    ]
  },
  {
    "id": "anthropological_education_theory_pedagogy",
    "discipline": "SOCIAL",
    "name": "Anthropological Education Theory & Pedagogy",
    "baseWeight": 4,
    "keywords": [
      "anthropological",
      "education",
      "theory",
      "pedagogy"
    ]
  },
  {
    "id": "linguistic_education_theory_pedagogy",
    "discipline": "SOCIAL",
    "name": "Linguistic Education Theory & Pedagogy",
    "baseWeight": 4,
    "keywords": [
      "linguistic",
      "education",
      "theory",
      "pedagogy"
    ]
  },
  {
    "id": "criminological_education_theory_pedagogy",
    "discipline": "SOCIAL",
    "name": "Criminological Education Theory & Pedagogy",
    "baseWeight": 4,
    "keywords": [
      "criminological",
      "education",
      "theory",
      "pedagogy"
    ]
  },
  {
    "id": "educational_education_theory_pedagogy",
    "discipline": "SOCIAL",
    "name": "Educational Education Theory & Pedagogy",
    "baseWeight": 4,
    "keywords": [
      "educational",
      "education",
      "theory",
      "pedagogy"
    ]
  },
  {
    "id": "international_education_theory_pedagogy",
    "discipline": "SOCIAL",
    "name": "International Education Theory & Pedagogy",
    "baseWeight": 4,
    "keywords": [
      "international",
      "education",
      "theory",
      "pedagogy"
    ]
  },
  {
    "id": "pedagogical_education_theory_pedagogy",
    "discipline": "SOCIAL",
    "name": "Pedagogical Education Theory & Pedagogy",
    "baseWeight": 4,
    "keywords": [
      "pedagogical",
      "education",
      "theory",
      "pedagogy"
    ]
  },
  {
    "id": "philosophical_philosophy_epistemology",
    "discipline": "HUMANITIES",
    "name": "Philosophical Philosophy & Epistemology",
    "baseWeight": 4,
    "keywords": [
      "philosophical",
      "philosophy",
      "epistemology"
    ]
  },
  {
    "id": "ethical_philosophy_epistemology",
    "discipline": "HUMANITIES",
    "name": "Ethical Philosophy & Epistemology",
    "baseWeight": 4,
    "keywords": [
      "ethical",
      "philosophy",
      "epistemology"
    ]
  },
  {
    "id": "logical_philosophy_epistemology",
    "discipline": "HUMANITIES",
    "name": "Logical Philosophy & Epistemology",
    "baseWeight": 4,
    "keywords": [
      "logical",
      "philosophy",
      "epistemology"
    ]
  },
  {
    "id": "epistemological_philosophy_epistemology",
    "discipline": "HUMANITIES",
    "name": "Epistemological Philosophy & Epistemology",
    "baseWeight": 4,
    "keywords": [
      "epistemological",
      "philosophy",
      "epistemology"
    ]
  },
  {
    "id": "metaphysical_philosophy_epistemology",
    "discipline": "HUMANITIES",
    "name": "Metaphysical Philosophy & Epistemology",
    "baseWeight": 4,
    "keywords": [
      "metaphysical",
      "philosophy",
      "epistemology"
    ]
  },
  {
    "id": "historical_philosophy_epistemology",
    "discipline": "HUMANITIES",
    "name": "Historical Philosophy & Epistemology",
    "baseWeight": 2,
    "keywords": [
      "historical",
      "philosophy",
      "epistemology"
    ]
  },
  {
    "id": "literary_philosophy_epistemology",
    "discipline": "HUMANITIES",
    "name": "Literary Philosophy & Epistemology",
    "baseWeight": 4,
    "keywords": [
      "literary",
      "philosophy",
      "epistemology"
    ]
  },
  {
    "id": "aesthetic_philosophy_epistemology",
    "discipline": "HUMANITIES",
    "name": "Aesthetic Philosophy & Epistemology",
    "baseWeight": 4,
    "keywords": [
      "aesthetic",
      "philosophy",
      "epistemology"
    ]
  },
  {
    "id": "visual_philosophy_epistemology",
    "discipline": "HUMANITIES",
    "name": "Visual Philosophy & Epistemology",
    "baseWeight": 4,
    "keywords": [
      "visual",
      "philosophy",
      "epistemology"
    ]
  },
  {
    "id": "musicological_philosophy_epistemology",
    "discipline": "HUMANITIES",
    "name": "Musicological Philosophy & Epistemology",
    "baseWeight": 4,
    "keywords": [
      "musicological",
      "philosophy",
      "epistemology"
    ]
  },
  {
    "id": "theological_philosophy_epistemology",
    "discipline": "HUMANITIES",
    "name": "Theological Philosophy & Epistemology",
    "baseWeight": 4,
    "keywords": [
      "theological",
      "philosophy",
      "epistemology"
    ]
  },
  {
    "id": "philological_philosophy_epistemology",
    "discipline": "HUMANITIES",
    "name": "Philological Philosophy & Epistemology",
    "baseWeight": 4,
    "keywords": [
      "philological",
      "philosophy",
      "epistemology"
    ]
  },
  {
    "id": "hermeneutic_philosophy_epistemology",
    "discipline": "HUMANITIES",
    "name": "Hermeneutic Philosophy & Epistemology",
    "baseWeight": 4,
    "keywords": [
      "hermeneutic",
      "philosophy",
      "epistemology"
    ]
  },
  {
    "id": "classical_philosophy_epistemology",
    "discipline": "HUMANITIES",
    "name": "Classical Philosophy & Epistemology",
    "baseWeight": 2,
    "keywords": [
      "classical",
      "philosophy",
      "epistemology"
    ]
  },
  {
    "id": "medieval_philosophy_epistemology",
    "discipline": "HUMANITIES",
    "name": "Medieval Philosophy & Epistemology",
    "baseWeight": 4,
    "keywords": [
      "medieval",
      "philosophy",
      "epistemology"
    ]
  },
  {
    "id": "modern_philosophy_epistemology",
    "discipline": "HUMANITIES",
    "name": "Modern Philosophy & Epistemology",
    "baseWeight": 4,
    "keywords": [
      "modern",
      "philosophy",
      "epistemology"
    ]
  },
  {
    "id": "postmodern_philosophy_epistemology",
    "discipline": "HUMANITIES",
    "name": "Postmodern Philosophy & Epistemology",
    "baseWeight": 4,
    "keywords": [
      "postmodern",
      "philosophy",
      "epistemology"
    ]
  },
  {
    "id": "cultural_philosophy_epistemology",
    "discipline": "HUMANITIES",
    "name": "Cultural Philosophy & Epistemology",
    "baseWeight": 4,
    "keywords": [
      "cultural",
      "philosophy",
      "epistemology"
    ]
  },
  {
    "id": "comparative_philosophy_epistemology",
    "discipline": "HUMANITIES",
    "name": "Comparative Philosophy & Epistemology",
    "baseWeight": 4,
    "keywords": [
      "comparative",
      "philosophy",
      "epistemology"
    ]
  },
  {
    "id": "critical_philosophy_epistemology",
    "discipline": "HUMANITIES",
    "name": "Critical Philosophy & Epistemology",
    "baseWeight": 4,
    "keywords": [
      "critical",
      "philosophy",
      "epistemology"
    ]
  },
  {
    "id": "linguistic_philosophy_epistemology",
    "discipline": "HUMANITIES",
    "name": "Linguistic Philosophy & Epistemology",
    "baseWeight": 4,
    "keywords": [
      "linguistic",
      "philosophy",
      "epistemology"
    ]
  },
  {
    "id": "semantic_philosophy_epistemology",
    "discipline": "HUMANITIES",
    "name": "Semantic Philosophy & Epistemology",
    "baseWeight": 4,
    "keywords": [
      "semantic",
      "philosophy",
      "epistemology"
    ]
  },
  {
    "id": "art_historical_philosophy_epistemology",
    "discipline": "HUMANITIES",
    "name": "Art-Historical Philosophy & Epistemology",
    "baseWeight": 2,
    "keywords": [
      "historical",
      "philosophy",
      "epistemology"
    ]
  },
  {
    "id": "analytical_philosophy_epistemology",
    "discipline": "HUMANITIES",
    "name": "Analytical Philosophy & Epistemology",
    "baseWeight": 4,
    "keywords": [
      "analytical",
      "philosophy",
      "epistemology"
    ]
  },
  {
    "id": "narrative_philosophy_epistemology",
    "discipline": "HUMANITIES",
    "name": "Narrative Philosophy & Epistemology",
    "baseWeight": 4,
    "keywords": [
      "narrative",
      "philosophy",
      "epistemology"
    ]
  },
  {
    "id": "philosophical_ethics_logic",
    "discipline": "HUMANITIES",
    "name": "Philosophical Ethics & Logic",
    "baseWeight": 5,
    "keywords": [
      "philosophical",
      "ethics",
      "logic"
    ]
  },
  {
    "id": "ethical_ethics_logic",
    "discipline": "HUMANITIES",
    "name": "Ethical Ethics & Logic",
    "baseWeight": 5,
    "keywords": [
      "ethical",
      "ethics",
      "logic"
    ]
  },
  {
    "id": "logical_ethics_logic",
    "discipline": "HUMANITIES",
    "name": "Logical Ethics & Logic",
    "baseWeight": 5,
    "keywords": [
      "logical",
      "ethics",
      "logic"
    ]
  },
  {
    "id": "epistemological_ethics_logic",
    "discipline": "HUMANITIES",
    "name": "Epistemological Ethics & Logic",
    "baseWeight": 5,
    "keywords": [
      "epistemological",
      "ethics",
      "logic"
    ]
  },
  {
    "id": "metaphysical_ethics_logic",
    "discipline": "HUMANITIES",
    "name": "Metaphysical Ethics & Logic",
    "baseWeight": 5,
    "keywords": [
      "metaphysical",
      "ethics",
      "logic"
    ]
  },
  {
    "id": "historical_ethics_logic",
    "discipline": "HUMANITIES",
    "name": "Historical Ethics & Logic",
    "baseWeight": 3,
    "keywords": [
      "historical",
      "ethics",
      "logic"
    ]
  },
  {
    "id": "literary_ethics_logic",
    "discipline": "HUMANITIES",
    "name": "Literary Ethics & Logic",
    "baseWeight": 5,
    "keywords": [
      "literary",
      "ethics",
      "logic"
    ]
  },
  {
    "id": "aesthetic_ethics_logic",
    "discipline": "HUMANITIES",
    "name": "Aesthetic Ethics & Logic",
    "baseWeight": 5,
    "keywords": [
      "aesthetic",
      "ethics",
      "logic"
    ]
  },
  {
    "id": "visual_ethics_logic",
    "discipline": "HUMANITIES",
    "name": "Visual Ethics & Logic",
    "baseWeight": 5,
    "keywords": [
      "visual",
      "ethics",
      "logic"
    ]
  },
  {
    "id": "musicological_ethics_logic",
    "discipline": "HUMANITIES",
    "name": "Musicological Ethics & Logic",
    "baseWeight": 5,
    "keywords": [
      "musicological",
      "ethics",
      "logic"
    ]
  },
  {
    "id": "theological_ethics_logic",
    "discipline": "HUMANITIES",
    "name": "Theological Ethics & Logic",
    "baseWeight": 5,
    "keywords": [
      "theological",
      "ethics",
      "logic"
    ]
  },
  {
    "id": "philological_ethics_logic",
    "discipline": "HUMANITIES",
    "name": "Philological Ethics & Logic",
    "baseWeight": 5,
    "keywords": [
      "philological",
      "ethics",
      "logic"
    ]
  },
  {
    "id": "hermeneutic_ethics_logic",
    "discipline": "HUMANITIES",
    "name": "Hermeneutic Ethics & Logic",
    "baseWeight": 5,
    "keywords": [
      "hermeneutic",
      "ethics",
      "logic"
    ]
  },
  {
    "id": "classical_ethics_logic",
    "discipline": "HUMANITIES",
    "name": "Classical Ethics & Logic",
    "baseWeight": 3,
    "keywords": [
      "classical",
      "ethics",
      "logic"
    ]
  },
  {
    "id": "medieval_ethics_logic",
    "discipline": "HUMANITIES",
    "name": "Medieval Ethics & Logic",
    "baseWeight": 5,
    "keywords": [
      "medieval",
      "ethics",
      "logic"
    ]
  },
  {
    "id": "modern_ethics_logic",
    "discipline": "HUMANITIES",
    "name": "Modern Ethics & Logic",
    "baseWeight": 5,
    "keywords": [
      "modern",
      "ethics",
      "logic"
    ]
  },
  {
    "id": "postmodern_ethics_logic",
    "discipline": "HUMANITIES",
    "name": "Postmodern Ethics & Logic",
    "baseWeight": 5,
    "keywords": [
      "postmodern",
      "ethics",
      "logic"
    ]
  },
  {
    "id": "cultural_ethics_logic",
    "discipline": "HUMANITIES",
    "name": "Cultural Ethics & Logic",
    "baseWeight": 5,
    "keywords": [
      "cultural",
      "ethics",
      "logic"
    ]
  },
  {
    "id": "comparative_ethics_logic",
    "discipline": "HUMANITIES",
    "name": "Comparative Ethics & Logic",
    "baseWeight": 5,
    "keywords": [
      "comparative",
      "ethics",
      "logic"
    ]
  },
  {
    "id": "critical_ethics_logic",
    "discipline": "HUMANITIES",
    "name": "Critical Ethics & Logic",
    "baseWeight": 5,
    "keywords": [
      "critical",
      "ethics",
      "logic"
    ]
  },
  {
    "id": "linguistic_ethics_logic",
    "discipline": "HUMANITIES",
    "name": "Linguistic Ethics & Logic",
    "baseWeight": 5,
    "keywords": [
      "linguistic",
      "ethics",
      "logic"
    ]
  },
  {
    "id": "semantic_ethics_logic",
    "discipline": "HUMANITIES",
    "name": "Semantic Ethics & Logic",
    "baseWeight": 5,
    "keywords": [
      "semantic",
      "ethics",
      "logic"
    ]
  },
  {
    "id": "art_historical_ethics_logic",
    "discipline": "HUMANITIES",
    "name": "Art-Historical Ethics & Logic",
    "baseWeight": 3,
    "keywords": [
      "historical",
      "ethics",
      "logic"
    ]
  },
  {
    "id": "analytical_ethics_logic",
    "discipline": "HUMANITIES",
    "name": "Analytical Ethics & Logic",
    "baseWeight": 5,
    "keywords": [
      "analytical",
      "ethics",
      "logic"
    ]
  },
  {
    "id": "narrative_ethics_logic",
    "discipline": "HUMANITIES",
    "name": "Narrative Ethics & Logic",
    "baseWeight": 5,
    "keywords": [
      "narrative",
      "ethics",
      "logic"
    ]
  },
  {
    "id": "philosophical_literary_theory_literature",
    "discipline": "HUMANITIES",
    "name": "Philosophical Literary Theory & Literature",
    "baseWeight": 6,
    "keywords": [
      "philosophical",
      "literary",
      "theory",
      "literature"
    ]
  },
  {
    "id": "ethical_literary_theory_literature",
    "discipline": "HUMANITIES",
    "name": "Ethical Literary Theory & Literature",
    "baseWeight": 6,
    "keywords": [
      "ethical",
      "literary",
      "theory",
      "literature"
    ]
  },
  {
    "id": "logical_literary_theory_literature",
    "discipline": "HUMANITIES",
    "name": "Logical Literary Theory & Literature",
    "baseWeight": 6,
    "keywords": [
      "logical",
      "literary",
      "theory",
      "literature"
    ]
  },
  {
    "id": "epistemological_literary_theory_literature",
    "discipline": "HUMANITIES",
    "name": "Epistemological Literary Theory & Literature",
    "baseWeight": 6,
    "keywords": [
      "epistemological",
      "literary",
      "theory",
      "literature"
    ]
  },
  {
    "id": "metaphysical_literary_theory_literature",
    "discipline": "HUMANITIES",
    "name": "Metaphysical Literary Theory & Literature",
    "baseWeight": 6,
    "keywords": [
      "metaphysical",
      "literary",
      "theory",
      "literature"
    ]
  },
  {
    "id": "historical_literary_theory_literature",
    "discipline": "HUMANITIES",
    "name": "Historical Literary Theory & Literature",
    "baseWeight": 4,
    "keywords": [
      "historical",
      "literary",
      "theory",
      "literature"
    ]
  },
  {
    "id": "literary_theory_literature",
    "discipline": "HUMANITIES",
    "name": "Literary Theory & Literature",
    "baseWeight": 6,
    "keywords": [
      "literary",
      "theory",
      "literature"
    ]
  },
  {
    "id": "aesthetic_literary_theory_literature",
    "discipline": "HUMANITIES",
    "name": "Aesthetic Literary Theory & Literature",
    "baseWeight": 6,
    "keywords": [
      "aesthetic",
      "literary",
      "theory",
      "literature"
    ]
  },
  {
    "id": "visual_literary_theory_literature",
    "discipline": "HUMANITIES",
    "name": "Visual Literary Theory & Literature",
    "baseWeight": 6,
    "keywords": [
      "visual",
      "literary",
      "theory",
      "literature"
    ]
  },
  {
    "id": "musicological_literary_theory_literature",
    "discipline": "HUMANITIES",
    "name": "Musicological Literary Theory & Literature",
    "baseWeight": 6,
    "keywords": [
      "musicological",
      "literary",
      "theory",
      "literature"
    ]
  },
  {
    "id": "theological_literary_theory_literature",
    "discipline": "HUMANITIES",
    "name": "Theological Literary Theory & Literature",
    "baseWeight": 6,
    "keywords": [
      "theological",
      "literary",
      "theory",
      "literature"
    ]
  },
  {
    "id": "philological_literary_theory_literature",
    "discipline": "HUMANITIES",
    "name": "Philological Literary Theory & Literature",
    "baseWeight": 6,
    "keywords": [
      "philological",
      "literary",
      "theory",
      "literature"
    ]
  },
  {
    "id": "hermeneutic_literary_theory_literature",
    "discipline": "HUMANITIES",
    "name": "Hermeneutic Literary Theory & Literature",
    "baseWeight": 6,
    "keywords": [
      "hermeneutic",
      "literary",
      "theory",
      "literature"
    ]
  },
  {
    "id": "classical_literary_theory_literature",
    "discipline": "HUMANITIES",
    "name": "Classical Literary Theory & Literature",
    "baseWeight": 4,
    "keywords": [
      "classical",
      "literary",
      "theory",
      "literature"
    ]
  },
  {
    "id": "medieval_literary_theory_literature",
    "discipline": "HUMANITIES",
    "name": "Medieval Literary Theory & Literature",
    "baseWeight": 6,
    "keywords": [
      "medieval",
      "literary",
      "theory",
      "literature"
    ]
  },
  {
    "id": "modern_literary_theory_literature",
    "discipline": "HUMANITIES",
    "name": "Modern Literary Theory & Literature",
    "baseWeight": 6,
    "keywords": [
      "modern",
      "literary",
      "theory",
      "literature"
    ]
  },
  {
    "id": "postmodern_literary_theory_literature",
    "discipline": "HUMANITIES",
    "name": "Postmodern Literary Theory & Literature",
    "baseWeight": 6,
    "keywords": [
      "postmodern",
      "literary",
      "theory",
      "literature"
    ]
  },
  {
    "id": "cultural_literary_theory_literature",
    "discipline": "HUMANITIES",
    "name": "Cultural Literary Theory & Literature",
    "baseWeight": 6,
    "keywords": [
      "cultural",
      "literary",
      "theory",
      "literature"
    ]
  },
  {
    "id": "comparative_literary_theory_literature",
    "discipline": "HUMANITIES",
    "name": "Comparative Literary Theory & Literature",
    "baseWeight": 6,
    "keywords": [
      "comparative",
      "literary",
      "theory",
      "literature"
    ]
  },
  {
    "id": "critical_literary_theory_literature",
    "discipline": "HUMANITIES",
    "name": "Critical Literary Theory & Literature",
    "baseWeight": 6,
    "keywords": [
      "critical",
      "literary",
      "theory",
      "literature"
    ]
  },
  {
    "id": "linguistic_literary_theory_literature",
    "discipline": "HUMANITIES",
    "name": "Linguistic Literary Theory & Literature",
    "baseWeight": 6,
    "keywords": [
      "linguistic",
      "literary",
      "theory",
      "literature"
    ]
  },
  {
    "id": "semantic_literary_theory_literature",
    "discipline": "HUMANITIES",
    "name": "Semantic Literary Theory & Literature",
    "baseWeight": 6,
    "keywords": [
      "semantic",
      "literary",
      "theory",
      "literature"
    ]
  },
  {
    "id": "art_historical_literary_theory_literature",
    "discipline": "HUMANITIES",
    "name": "Art-Historical Literary Theory & Literature",
    "baseWeight": 4,
    "keywords": [
      "historical",
      "literary",
      "theory",
      "literature"
    ]
  },
  {
    "id": "analytical_literary_theory_literature",
    "discipline": "HUMANITIES",
    "name": "Analytical Literary Theory & Literature",
    "baseWeight": 6,
    "keywords": [
      "analytical",
      "literary",
      "theory",
      "literature"
    ]
  },
  {
    "id": "narrative_literary_theory_literature",
    "discipline": "HUMANITIES",
    "name": "Narrative Literary Theory & Literature",
    "baseWeight": 6,
    "keywords": [
      "narrative",
      "literary",
      "theory",
      "literature"
    ]
  },
  {
    "id": "philosophical_history_historiography",
    "discipline": "HUMANITIES",
    "name": "Philosophical History & Historiography",
    "baseWeight": 4,
    "keywords": [
      "philosophical",
      "history",
      "historiography"
    ]
  },
  {
    "id": "ethical_history_historiography",
    "discipline": "HUMANITIES",
    "name": "Ethical History & Historiography",
    "baseWeight": 4,
    "keywords": [
      "ethical",
      "history",
      "historiography"
    ]
  },
  {
    "id": "logical_history_historiography",
    "discipline": "HUMANITIES",
    "name": "Logical History & Historiography",
    "baseWeight": 4,
    "keywords": [
      "logical",
      "history",
      "historiography"
    ]
  },
  {
    "id": "epistemological_history_historiography",
    "discipline": "HUMANITIES",
    "name": "Epistemological History & Historiography",
    "baseWeight": 4,
    "keywords": [
      "epistemological",
      "history",
      "historiography"
    ]
  },
  {
    "id": "metaphysical_history_historiography",
    "discipline": "HUMANITIES",
    "name": "Metaphysical History & Historiography",
    "baseWeight": 4,
    "keywords": [
      "metaphysical",
      "history",
      "historiography"
    ]
  },
  {
    "id": "historical_history_historiography",
    "discipline": "HUMANITIES",
    "name": "Historical History & Historiography",
    "baseWeight": 2,
    "keywords": [
      "historical",
      "history",
      "historiography"
    ]
  },
  {
    "id": "literary_history_historiography",
    "discipline": "HUMANITIES",
    "name": "Literary History & Historiography",
    "baseWeight": 4,
    "keywords": [
      "literary",
      "history",
      "historiography"
    ]
  },
  {
    "id": "aesthetic_history_historiography",
    "discipline": "HUMANITIES",
    "name": "Aesthetic History & Historiography",
    "baseWeight": 4,
    "keywords": [
      "aesthetic",
      "history",
      "historiography"
    ]
  },
  {
    "id": "visual_history_historiography",
    "discipline": "HUMANITIES",
    "name": "Visual History & Historiography",
    "baseWeight": 4,
    "keywords": [
      "visual",
      "history",
      "historiography"
    ]
  },
  {
    "id": "musicological_history_historiography",
    "discipline": "HUMANITIES",
    "name": "Musicological History & Historiography",
    "baseWeight": 4,
    "keywords": [
      "musicological",
      "history",
      "historiography"
    ]
  },
  {
    "id": "theological_history_historiography",
    "discipline": "HUMANITIES",
    "name": "Theological History & Historiography",
    "baseWeight": 4,
    "keywords": [
      "theological",
      "history",
      "historiography"
    ]
  },
  {
    "id": "philological_history_historiography",
    "discipline": "HUMANITIES",
    "name": "Philological History & Historiography",
    "baseWeight": 4,
    "keywords": [
      "philological",
      "history",
      "historiography"
    ]
  },
  {
    "id": "hermeneutic_history_historiography",
    "discipline": "HUMANITIES",
    "name": "Hermeneutic History & Historiography",
    "baseWeight": 4,
    "keywords": [
      "hermeneutic",
      "history",
      "historiography"
    ]
  },
  {
    "id": "classical_history_historiography",
    "discipline": "HUMANITIES",
    "name": "Classical History & Historiography",
    "baseWeight": 2,
    "keywords": [
      "classical",
      "history",
      "historiography"
    ]
  },
  {
    "id": "medieval_history_historiography",
    "discipline": "HUMANITIES",
    "name": "Medieval History & Historiography",
    "baseWeight": 4,
    "keywords": [
      "medieval",
      "history",
      "historiography"
    ]
  },
  {
    "id": "modern_history_historiography",
    "discipline": "HUMANITIES",
    "name": "Modern History & Historiography",
    "baseWeight": 4,
    "keywords": [
      "modern",
      "history",
      "historiography"
    ]
  },
  {
    "id": "postmodern_history_historiography",
    "discipline": "HUMANITIES",
    "name": "Postmodern History & Historiography",
    "baseWeight": 4,
    "keywords": [
      "postmodern",
      "history",
      "historiography"
    ]
  },
  {
    "id": "cultural_history_historiography",
    "discipline": "HUMANITIES",
    "name": "Cultural History & Historiography",
    "baseWeight": 4,
    "keywords": [
      "cultural",
      "history",
      "historiography"
    ]
  },
  {
    "id": "comparative_history_historiography",
    "discipline": "HUMANITIES",
    "name": "Comparative History & Historiography",
    "baseWeight": 4,
    "keywords": [
      "comparative",
      "history",
      "historiography"
    ]
  },
  {
    "id": "critical_history_historiography",
    "discipline": "HUMANITIES",
    "name": "Critical History & Historiography",
    "baseWeight": 4,
    "keywords": [
      "critical",
      "history",
      "historiography"
    ]
  },
  {
    "id": "linguistic_history_historiography",
    "discipline": "HUMANITIES",
    "name": "Linguistic History & Historiography",
    "baseWeight": 4,
    "keywords": [
      "linguistic",
      "history",
      "historiography"
    ]
  },
  {
    "id": "semantic_history_historiography",
    "discipline": "HUMANITIES",
    "name": "Semantic History & Historiography",
    "baseWeight": 4,
    "keywords": [
      "semantic",
      "history",
      "historiography"
    ]
  },
  {
    "id": "art_historical_history_historiography",
    "discipline": "HUMANITIES",
    "name": "Art-Historical History & Historiography",
    "baseWeight": 2,
    "keywords": [
      "historical",
      "history",
      "historiography"
    ]
  },
  {
    "id": "analytical_history_historiography",
    "discipline": "HUMANITIES",
    "name": "Analytical History & Historiography",
    "baseWeight": 4,
    "keywords": [
      "analytical",
      "history",
      "historiography"
    ]
  },
  {
    "id": "narrative_history_historiography",
    "discipline": "HUMANITIES",
    "name": "Narrative History & Historiography",
    "baseWeight": 4,
    "keywords": [
      "narrative",
      "history",
      "historiography"
    ]
  },
  {
    "id": "philosophical_art_history_visual_culture",
    "discipline": "HUMANITIES",
    "name": "Philosophical Art History & Visual Culture",
    "baseWeight": 5,
    "keywords": [
      "philosophical",
      "history",
      "visual",
      "culture"
    ]
  },
  {
    "id": "ethical_art_history_visual_culture",
    "discipline": "HUMANITIES",
    "name": "Ethical Art History & Visual Culture",
    "baseWeight": 5,
    "keywords": [
      "ethical",
      "history",
      "visual",
      "culture"
    ]
  },
  {
    "id": "logical_art_history_visual_culture",
    "discipline": "HUMANITIES",
    "name": "Logical Art History & Visual Culture",
    "baseWeight": 5,
    "keywords": [
      "logical",
      "history",
      "visual",
      "culture"
    ]
  },
  {
    "id": "epistemological_art_history_visual_culture",
    "discipline": "HUMANITIES",
    "name": "Epistemological Art History & Visual Culture",
    "baseWeight": 5,
    "keywords": [
      "epistemological",
      "history",
      "visual",
      "culture"
    ]
  },
  {
    "id": "metaphysical_art_history_visual_culture",
    "discipline": "HUMANITIES",
    "name": "Metaphysical Art History & Visual Culture",
    "baseWeight": 5,
    "keywords": [
      "metaphysical",
      "history",
      "visual",
      "culture"
    ]
  },
  {
    "id": "historical_art_history_visual_culture",
    "discipline": "HUMANITIES",
    "name": "Historical Art History & Visual Culture",
    "baseWeight": 3,
    "keywords": [
      "historical",
      "history",
      "visual",
      "culture"
    ]
  },
  {
    "id": "literary_art_history_visual_culture",
    "discipline": "HUMANITIES",
    "name": "Literary Art History & Visual Culture",
    "baseWeight": 5,
    "keywords": [
      "literary",
      "history",
      "visual",
      "culture"
    ]
  },
  {
    "id": "aesthetic_art_history_visual_culture",
    "discipline": "HUMANITIES",
    "name": "Aesthetic Art History & Visual Culture",
    "baseWeight": 5,
    "keywords": [
      "aesthetic",
      "history",
      "visual",
      "culture"
    ]
  },
  {
    "id": "visual_art_history_culture",
    "discipline": "HUMANITIES",
    "name": "Visual Art History & Culture",
    "baseWeight": 5,
    "keywords": [
      "visual",
      "history",
      "culture"
    ]
  },
  {
    "id": "musicological_art_history_visual_culture",
    "discipline": "HUMANITIES",
    "name": "Musicological Art History & Visual Culture",
    "baseWeight": 5,
    "keywords": [
      "musicological",
      "history",
      "visual",
      "culture"
    ]
  },
  {
    "id": "theological_art_history_visual_culture",
    "discipline": "HUMANITIES",
    "name": "Theological Art History & Visual Culture",
    "baseWeight": 5,
    "keywords": [
      "theological",
      "history",
      "visual",
      "culture"
    ]
  },
  {
    "id": "philological_art_history_visual_culture",
    "discipline": "HUMANITIES",
    "name": "Philological Art History & Visual Culture",
    "baseWeight": 5,
    "keywords": [
      "philological",
      "history",
      "visual",
      "culture"
    ]
  },
  {
    "id": "hermeneutic_art_history_visual_culture",
    "discipline": "HUMANITIES",
    "name": "Hermeneutic Art History & Visual Culture",
    "baseWeight": 5,
    "keywords": [
      "hermeneutic",
      "history",
      "visual",
      "culture"
    ]
  },
  {
    "id": "classical_art_history_visual_culture",
    "discipline": "HUMANITIES",
    "name": "Classical Art History & Visual Culture",
    "baseWeight": 3,
    "keywords": [
      "classical",
      "history",
      "visual",
      "culture"
    ]
  },
  {
    "id": "medieval_art_history_visual_culture",
    "discipline": "HUMANITIES",
    "name": "Medieval Art History & Visual Culture",
    "baseWeight": 5,
    "keywords": [
      "medieval",
      "history",
      "visual",
      "culture"
    ]
  },
  {
    "id": "modern_art_history_visual_culture",
    "discipline": "HUMANITIES",
    "name": "Modern Art History & Visual Culture",
    "baseWeight": 5,
    "keywords": [
      "modern",
      "history",
      "visual",
      "culture"
    ]
  },
  {
    "id": "postmodern_art_history_visual_culture",
    "discipline": "HUMANITIES",
    "name": "Postmodern Art History & Visual Culture",
    "baseWeight": 5,
    "keywords": [
      "postmodern",
      "history",
      "visual",
      "culture"
    ]
  },
  {
    "id": "cultural_art_history_visual_culture",
    "discipline": "HUMANITIES",
    "name": "Cultural Art History & Visual Culture",
    "baseWeight": 5,
    "keywords": [
      "cultural",
      "history",
      "visual",
      "culture"
    ]
  },
  {
    "id": "comparative_art_history_visual_culture",
    "discipline": "HUMANITIES",
    "name": "Comparative Art History & Visual Culture",
    "baseWeight": 5,
    "keywords": [
      "comparative",
      "history",
      "visual",
      "culture"
    ]
  },
  {
    "id": "critical_art_history_visual_culture",
    "discipline": "HUMANITIES",
    "name": "Critical Art History & Visual Culture",
    "baseWeight": 5,
    "keywords": [
      "critical",
      "history",
      "visual",
      "culture"
    ]
  },
  {
    "id": "linguistic_art_history_visual_culture",
    "discipline": "HUMANITIES",
    "name": "Linguistic Art History & Visual Culture",
    "baseWeight": 5,
    "keywords": [
      "linguistic",
      "history",
      "visual",
      "culture"
    ]
  },
  {
    "id": "semantic_art_history_visual_culture",
    "discipline": "HUMANITIES",
    "name": "Semantic Art History & Visual Culture",
    "baseWeight": 5,
    "keywords": [
      "semantic",
      "history",
      "visual",
      "culture"
    ]
  },
  {
    "id": "art_historical_art_history_visual_culture",
    "discipline": "HUMANITIES",
    "name": "Art-Historical Art History & Visual Culture",
    "baseWeight": 3,
    "keywords": [
      "historical",
      "history",
      "visual",
      "culture"
    ]
  },
  {
    "id": "analytical_art_history_visual_culture",
    "discipline": "HUMANITIES",
    "name": "Analytical Art History & Visual Culture",
    "baseWeight": 5,
    "keywords": [
      "analytical",
      "history",
      "visual",
      "culture"
    ]
  },
  {
    "id": "narrative_art_history_visual_culture",
    "discipline": "HUMANITIES",
    "name": "Narrative Art History & Visual Culture",
    "baseWeight": 5,
    "keywords": [
      "narrative",
      "history",
      "visual",
      "culture"
    ]
  },
  {
    "id": "philosophical_musicology_music_theory",
    "discipline": "HUMANITIES",
    "name": "Philosophical Musicology & Music Theory",
    "baseWeight": 6,
    "keywords": [
      "philosophical",
      "musicology",
      "music",
      "theory"
    ]
  },
  {
    "id": "ethical_musicology_music_theory",
    "discipline": "HUMANITIES",
    "name": "Ethical Musicology & Music Theory",
    "baseWeight": 6,
    "keywords": [
      "ethical",
      "musicology",
      "music",
      "theory"
    ]
  },
  {
    "id": "logical_musicology_music_theory",
    "discipline": "HUMANITIES",
    "name": "Logical Musicology & Music Theory",
    "baseWeight": 6,
    "keywords": [
      "logical",
      "musicology",
      "music",
      "theory"
    ]
  },
  {
    "id": "epistemological_musicology_music_theory",
    "discipline": "HUMANITIES",
    "name": "Epistemological Musicology & Music Theory",
    "baseWeight": 6,
    "keywords": [
      "epistemological",
      "musicology",
      "music",
      "theory"
    ]
  },
  {
    "id": "metaphysical_musicology_music_theory",
    "discipline": "HUMANITIES",
    "name": "Metaphysical Musicology & Music Theory",
    "baseWeight": 6,
    "keywords": [
      "metaphysical",
      "musicology",
      "music",
      "theory"
    ]
  },
  {
    "id": "historical_musicology_music_theory",
    "discipline": "HUMANITIES",
    "name": "Historical Musicology & Music Theory",
    "baseWeight": 4,
    "keywords": [
      "historical",
      "musicology",
      "music",
      "theory"
    ]
  },
  {
    "id": "literary_musicology_music_theory",
    "discipline": "HUMANITIES",
    "name": "Literary Musicology & Music Theory",
    "baseWeight": 6,
    "keywords": [
      "literary",
      "musicology",
      "music",
      "theory"
    ]
  },
  {
    "id": "aesthetic_musicology_music_theory",
    "discipline": "HUMANITIES",
    "name": "Aesthetic Musicology & Music Theory",
    "baseWeight": 6,
    "keywords": [
      "aesthetic",
      "musicology",
      "music",
      "theory"
    ]
  },
  {
    "id": "visual_musicology_music_theory",
    "discipline": "HUMANITIES",
    "name": "Visual Musicology & Music Theory",
    "baseWeight": 6,
    "keywords": [
      "visual",
      "musicology",
      "music",
      "theory"
    ]
  },
  {
    "id": "musicological_musicology_music_theory",
    "discipline": "HUMANITIES",
    "name": "Musicological Musicology & Music Theory",
    "baseWeight": 6,
    "keywords": [
      "musicological",
      "musicology",
      "music",
      "theory"
    ]
  },
  {
    "id": "theological_musicology_music_theory",
    "discipline": "HUMANITIES",
    "name": "Theological Musicology & Music Theory",
    "baseWeight": 6,
    "keywords": [
      "theological",
      "musicology",
      "music",
      "theory"
    ]
  },
  {
    "id": "philological_musicology_music_theory",
    "discipline": "HUMANITIES",
    "name": "Philological Musicology & Music Theory",
    "baseWeight": 6,
    "keywords": [
      "philological",
      "musicology",
      "music",
      "theory"
    ]
  },
  {
    "id": "hermeneutic_musicology_music_theory",
    "discipline": "HUMANITIES",
    "name": "Hermeneutic Musicology & Music Theory",
    "baseWeight": 6,
    "keywords": [
      "hermeneutic",
      "musicology",
      "music",
      "theory"
    ]
  },
  {
    "id": "classical_musicology_music_theory",
    "discipline": "HUMANITIES",
    "name": "Classical Musicology & Music Theory",
    "baseWeight": 4,
    "keywords": [
      "classical",
      "musicology",
      "music",
      "theory"
    ]
  },
  {
    "id": "medieval_musicology_music_theory",
    "discipline": "HUMANITIES",
    "name": "Medieval Musicology & Music Theory",
    "baseWeight": 6,
    "keywords": [
      "medieval",
      "musicology",
      "music",
      "theory"
    ]
  },
  {
    "id": "modern_musicology_music_theory",
    "discipline": "HUMANITIES",
    "name": "Modern Musicology & Music Theory",
    "baseWeight": 6,
    "keywords": [
      "modern",
      "musicology",
      "music",
      "theory"
    ]
  },
  {
    "id": "postmodern_musicology_music_theory",
    "discipline": "HUMANITIES",
    "name": "Postmodern Musicology & Music Theory",
    "baseWeight": 6,
    "keywords": [
      "postmodern",
      "musicology",
      "music",
      "theory"
    ]
  },
  {
    "id": "cultural_musicology_music_theory",
    "discipline": "HUMANITIES",
    "name": "Cultural Musicology & Music Theory",
    "baseWeight": 6,
    "keywords": [
      "cultural",
      "musicology",
      "music",
      "theory"
    ]
  },
  {
    "id": "comparative_musicology_music_theory",
    "discipline": "HUMANITIES",
    "name": "Comparative Musicology & Music Theory",
    "baseWeight": 6,
    "keywords": [
      "comparative",
      "musicology",
      "music",
      "theory"
    ]
  },
  {
    "id": "critical_musicology_music_theory",
    "discipline": "HUMANITIES",
    "name": "Critical Musicology & Music Theory",
    "baseWeight": 6,
    "keywords": [
      "critical",
      "musicology",
      "music",
      "theory"
    ]
  },
  {
    "id": "linguistic_musicology_music_theory",
    "discipline": "HUMANITIES",
    "name": "Linguistic Musicology & Music Theory",
    "baseWeight": 6,
    "keywords": [
      "linguistic",
      "musicology",
      "music",
      "theory"
    ]
  },
  {
    "id": "semantic_musicology_music_theory",
    "discipline": "HUMANITIES",
    "name": "Semantic Musicology & Music Theory",
    "baseWeight": 6,
    "keywords": [
      "semantic",
      "musicology",
      "music",
      "theory"
    ]
  },
  {
    "id": "art_historical_musicology_music_theory",
    "discipline": "HUMANITIES",
    "name": "Art-Historical Musicology & Music Theory",
    "baseWeight": 4,
    "keywords": [
      "historical",
      "musicology",
      "music",
      "theory"
    ]
  },
  {
    "id": "analytical_musicology_music_theory",
    "discipline": "HUMANITIES",
    "name": "Analytical Musicology & Music Theory",
    "baseWeight": 6,
    "keywords": [
      "analytical",
      "musicology",
      "music",
      "theory"
    ]
  },
  {
    "id": "narrative_musicology_music_theory",
    "discipline": "HUMANITIES",
    "name": "Narrative Musicology & Music Theory",
    "baseWeight": 6,
    "keywords": [
      "narrative",
      "musicology",
      "music",
      "theory"
    ]
  },
  {
    "id": "philosophical_theology_religious_studies",
    "discipline": "HUMANITIES",
    "name": "Philosophical Theology & Religious Studies",
    "baseWeight": 4,
    "keywords": [
      "philosophical",
      "theology",
      "religious",
      "studies"
    ]
  },
  {
    "id": "ethical_theology_religious_studies",
    "discipline": "HUMANITIES",
    "name": "Ethical Theology & Religious Studies",
    "baseWeight": 4,
    "keywords": [
      "ethical",
      "theology",
      "religious",
      "studies"
    ]
  },
  {
    "id": "logical_theology_religious_studies",
    "discipline": "HUMANITIES",
    "name": "Logical Theology & Religious Studies",
    "baseWeight": 4,
    "keywords": [
      "logical",
      "theology",
      "religious",
      "studies"
    ]
  },
  {
    "id": "epistemological_theology_religious_studies",
    "discipline": "HUMANITIES",
    "name": "Epistemological Theology & Religious Studies",
    "baseWeight": 4,
    "keywords": [
      "epistemological",
      "theology",
      "religious",
      "studies"
    ]
  },
  {
    "id": "metaphysical_theology_religious_studies",
    "discipline": "HUMANITIES",
    "name": "Metaphysical Theology & Religious Studies",
    "baseWeight": 4,
    "keywords": [
      "metaphysical",
      "theology",
      "religious",
      "studies"
    ]
  },
  {
    "id": "historical_theology_religious_studies",
    "discipline": "HUMANITIES",
    "name": "Historical Theology & Religious Studies",
    "baseWeight": 2,
    "keywords": [
      "historical",
      "theology",
      "religious",
      "studies"
    ]
  },
  {
    "id": "literary_theology_religious_studies",
    "discipline": "HUMANITIES",
    "name": "Literary Theology & Religious Studies",
    "baseWeight": 4,
    "keywords": [
      "literary",
      "theology",
      "religious",
      "studies"
    ]
  },
  {
    "id": "aesthetic_theology_religious_studies",
    "discipline": "HUMANITIES",
    "name": "Aesthetic Theology & Religious Studies",
    "baseWeight": 4,
    "keywords": [
      "aesthetic",
      "theology",
      "religious",
      "studies"
    ]
  },
  {
    "id": "visual_theology_religious_studies",
    "discipline": "HUMANITIES",
    "name": "Visual Theology & Religious Studies",
    "baseWeight": 4,
    "keywords": [
      "visual",
      "theology",
      "religious",
      "studies"
    ]
  },
  {
    "id": "musicological_theology_religious_studies",
    "discipline": "HUMANITIES",
    "name": "Musicological Theology & Religious Studies",
    "baseWeight": 4,
    "keywords": [
      "musicological",
      "theology",
      "religious",
      "studies"
    ]
  },
  {
    "id": "theological_theology_religious_studies",
    "discipline": "HUMANITIES",
    "name": "Theological Theology & Religious Studies",
    "baseWeight": 4,
    "keywords": [
      "theological",
      "theology",
      "religious",
      "studies"
    ]
  },
  {
    "id": "philological_theology_religious_studies",
    "discipline": "HUMANITIES",
    "name": "Philological Theology & Religious Studies",
    "baseWeight": 4,
    "keywords": [
      "philological",
      "theology",
      "religious",
      "studies"
    ]
  },
  {
    "id": "hermeneutic_theology_religious_studies",
    "discipline": "HUMANITIES",
    "name": "Hermeneutic Theology & Religious Studies",
    "baseWeight": 4,
    "keywords": [
      "hermeneutic",
      "theology",
      "religious",
      "studies"
    ]
  },
  {
    "id": "classical_theology_religious_studies",
    "discipline": "HUMANITIES",
    "name": "Classical Theology & Religious Studies",
    "baseWeight": 2,
    "keywords": [
      "classical",
      "theology",
      "religious",
      "studies"
    ]
  },
  {
    "id": "medieval_theology_religious_studies",
    "discipline": "HUMANITIES",
    "name": "Medieval Theology & Religious Studies",
    "baseWeight": 4,
    "keywords": [
      "medieval",
      "theology",
      "religious",
      "studies"
    ]
  },
  {
    "id": "modern_theology_religious_studies",
    "discipline": "HUMANITIES",
    "name": "Modern Theology & Religious Studies",
    "baseWeight": 4,
    "keywords": [
      "modern",
      "theology",
      "religious",
      "studies"
    ]
  },
  {
    "id": "postmodern_theology_religious_studies",
    "discipline": "HUMANITIES",
    "name": "Postmodern Theology & Religious Studies",
    "baseWeight": 4,
    "keywords": [
      "postmodern",
      "theology",
      "religious",
      "studies"
    ]
  },
  {
    "id": "cultural_theology_religious_studies",
    "discipline": "HUMANITIES",
    "name": "Cultural Theology & Religious Studies",
    "baseWeight": 4,
    "keywords": [
      "cultural",
      "theology",
      "religious",
      "studies"
    ]
  },
  {
    "id": "comparative_theology_religious_studies",
    "discipline": "HUMANITIES",
    "name": "Comparative Theology & Religious Studies",
    "baseWeight": 4,
    "keywords": [
      "comparative",
      "theology",
      "religious",
      "studies"
    ]
  },
  {
    "id": "critical_theology_religious_studies",
    "discipline": "HUMANITIES",
    "name": "Critical Theology & Religious Studies",
    "baseWeight": 4,
    "keywords": [
      "critical",
      "theology",
      "religious",
      "studies"
    ]
  },
  {
    "id": "linguistic_theology_religious_studies",
    "discipline": "HUMANITIES",
    "name": "Linguistic Theology & Religious Studies",
    "baseWeight": 4,
    "keywords": [
      "linguistic",
      "theology",
      "religious",
      "studies"
    ]
  },
  {
    "id": "semantic_theology_religious_studies",
    "discipline": "HUMANITIES",
    "name": "Semantic Theology & Religious Studies",
    "baseWeight": 4,
    "keywords": [
      "semantic",
      "theology",
      "religious",
      "studies"
    ]
  },
  {
    "id": "art_historical_theology_religious_studies",
    "discipline": "HUMANITIES",
    "name": "Art-Historical Theology & Religious Studies",
    "baseWeight": 2,
    "keywords": [
      "historical",
      "theology",
      "religious",
      "studies"
    ]
  },
  {
    "id": "analytical_theology_religious_studies",
    "discipline": "HUMANITIES",
    "name": "Analytical Theology & Religious Studies",
    "baseWeight": 4,
    "keywords": [
      "analytical",
      "theology",
      "religious",
      "studies"
    ]
  },
  {
    "id": "narrative_theology_religious_studies",
    "discipline": "HUMANITIES",
    "name": "Narrative Theology & Religious Studies",
    "baseWeight": 4,
    "keywords": [
      "narrative",
      "theology",
      "religious",
      "studies"
    ]
  },
  {
    "id": "philosophical_classics_philology",
    "discipline": "HUMANITIES",
    "name": "Philosophical Classics & Philology",
    "baseWeight": 5,
    "keywords": [
      "philosophical",
      "classics",
      "philology"
    ]
  },
  {
    "id": "ethical_classics_philology",
    "discipline": "HUMANITIES",
    "name": "Ethical Classics & Philology",
    "baseWeight": 5,
    "keywords": [
      "ethical",
      "classics",
      "philology"
    ]
  },
  {
    "id": "logical_classics_philology",
    "discipline": "HUMANITIES",
    "name": "Logical Classics & Philology",
    "baseWeight": 5,
    "keywords": [
      "logical",
      "classics",
      "philology"
    ]
  },
  {
    "id": "epistemological_classics_philology",
    "discipline": "HUMANITIES",
    "name": "Epistemological Classics & Philology",
    "baseWeight": 5,
    "keywords": [
      "epistemological",
      "classics",
      "philology"
    ]
  },
  {
    "id": "metaphysical_classics_philology",
    "discipline": "HUMANITIES",
    "name": "Metaphysical Classics & Philology",
    "baseWeight": 5,
    "keywords": [
      "metaphysical",
      "classics",
      "philology"
    ]
  },
  {
    "id": "historical_classics_philology",
    "discipline": "HUMANITIES",
    "name": "Historical Classics & Philology",
    "baseWeight": 3,
    "keywords": [
      "historical",
      "classics",
      "philology"
    ]
  },
  {
    "id": "literary_classics_philology",
    "discipline": "HUMANITIES",
    "name": "Literary Classics & Philology",
    "baseWeight": 5,
    "keywords": [
      "literary",
      "classics",
      "philology"
    ]
  },
  {
    "id": "aesthetic_classics_philology",
    "discipline": "HUMANITIES",
    "name": "Aesthetic Classics & Philology",
    "baseWeight": 5,
    "keywords": [
      "aesthetic",
      "classics",
      "philology"
    ]
  },
  {
    "id": "visual_classics_philology",
    "discipline": "HUMANITIES",
    "name": "Visual Classics & Philology",
    "baseWeight": 5,
    "keywords": [
      "visual",
      "classics",
      "philology"
    ]
  },
  {
    "id": "musicological_classics_philology",
    "discipline": "HUMANITIES",
    "name": "Musicological Classics & Philology",
    "baseWeight": 5,
    "keywords": [
      "musicological",
      "classics",
      "philology"
    ]
  },
  {
    "id": "theological_classics_philology",
    "discipline": "HUMANITIES",
    "name": "Theological Classics & Philology",
    "baseWeight": 5,
    "keywords": [
      "theological",
      "classics",
      "philology"
    ]
  },
  {
    "id": "philological_classics_philology",
    "discipline": "HUMANITIES",
    "name": "Philological Classics & Philology",
    "baseWeight": 5,
    "keywords": [
      "philological",
      "classics",
      "philology"
    ]
  },
  {
    "id": "hermeneutic_classics_philology",
    "discipline": "HUMANITIES",
    "name": "Hermeneutic Classics & Philology",
    "baseWeight": 5,
    "keywords": [
      "hermeneutic",
      "classics",
      "philology"
    ]
  },
  {
    "id": "classical_classics_philology",
    "discipline": "HUMANITIES",
    "name": "Classical Classics & Philology",
    "baseWeight": 3,
    "keywords": [
      "classical",
      "classics",
      "philology"
    ]
  },
  {
    "id": "medieval_classics_philology",
    "discipline": "HUMANITIES",
    "name": "Medieval Classics & Philology",
    "baseWeight": 5,
    "keywords": [
      "medieval",
      "classics",
      "philology"
    ]
  },
  {
    "id": "modern_classics_philology",
    "discipline": "HUMANITIES",
    "name": "Modern Classics & Philology",
    "baseWeight": 5,
    "keywords": [
      "modern",
      "classics",
      "philology"
    ]
  },
  {
    "id": "postmodern_classics_philology",
    "discipline": "HUMANITIES",
    "name": "Postmodern Classics & Philology",
    "baseWeight": 5,
    "keywords": [
      "postmodern",
      "classics",
      "philology"
    ]
  },
  {
    "id": "cultural_classics_philology",
    "discipline": "HUMANITIES",
    "name": "Cultural Classics & Philology",
    "baseWeight": 5,
    "keywords": [
      "cultural",
      "classics",
      "philology"
    ]
  },
  {
    "id": "comparative_classics_philology",
    "discipline": "HUMANITIES",
    "name": "Comparative Classics & Philology",
    "baseWeight": 5,
    "keywords": [
      "comparative",
      "classics",
      "philology"
    ]
  },
  {
    "id": "critical_classics_philology",
    "discipline": "HUMANITIES",
    "name": "Critical Classics & Philology",
    "baseWeight": 5,
    "keywords": [
      "critical",
      "classics",
      "philology"
    ]
  },
  {
    "id": "linguistic_classics_philology",
    "discipline": "HUMANITIES",
    "name": "Linguistic Classics & Philology",
    "baseWeight": 5,
    "keywords": [
      "linguistic",
      "classics",
      "philology"
    ]
  },
  {
    "id": "semantic_classics_philology",
    "discipline": "HUMANITIES",
    "name": "Semantic Classics & Philology",
    "baseWeight": 5,
    "keywords": [
      "semantic",
      "classics",
      "philology"
    ]
  },
  {
    "id": "art_historical_classics_philology",
    "discipline": "HUMANITIES",
    "name": "Art-Historical Classics & Philology",
    "baseWeight": 3,
    "keywords": [
      "historical",
      "classics",
      "philology"
    ]
  },
  {
    "id": "analytical_classics_philology",
    "discipline": "HUMANITIES",
    "name": "Analytical Classics & Philology",
    "baseWeight": 5,
    "keywords": [
      "analytical",
      "classics",
      "philology"
    ]
  },
  {
    "id": "narrative_classics_philology",
    "discipline": "HUMANITIES",
    "name": "Narrative Classics & Philology",
    "baseWeight": 5,
    "keywords": [
      "narrative",
      "classics",
      "philology"
    ]
  },
  {
    "id": "philosophical_aesthetics_cultural_studies",
    "discipline": "HUMANITIES",
    "name": "Philosophical Aesthetics & Cultural Studies",
    "baseWeight": 6,
    "keywords": [
      "philosophical",
      "aesthetics",
      "cultural",
      "studies"
    ]
  },
  {
    "id": "ethical_aesthetics_cultural_studies",
    "discipline": "HUMANITIES",
    "name": "Ethical Aesthetics & Cultural Studies",
    "baseWeight": 6,
    "keywords": [
      "ethical",
      "aesthetics",
      "cultural",
      "studies"
    ]
  },
  {
    "id": "logical_aesthetics_cultural_studies",
    "discipline": "HUMANITIES",
    "name": "Logical Aesthetics & Cultural Studies",
    "baseWeight": 6,
    "keywords": [
      "logical",
      "aesthetics",
      "cultural",
      "studies"
    ]
  },
  {
    "id": "epistemological_aesthetics_cultural_studies",
    "discipline": "HUMANITIES",
    "name": "Epistemological Aesthetics & Cultural Studies",
    "baseWeight": 6,
    "keywords": [
      "epistemological",
      "aesthetics",
      "cultural",
      "studies"
    ]
  },
  {
    "id": "metaphysical_aesthetics_cultural_studies",
    "discipline": "HUMANITIES",
    "name": "Metaphysical Aesthetics & Cultural Studies",
    "baseWeight": 6,
    "keywords": [
      "metaphysical",
      "aesthetics",
      "cultural",
      "studies"
    ]
  },
  {
    "id": "historical_aesthetics_cultural_studies",
    "discipline": "HUMANITIES",
    "name": "Historical Aesthetics & Cultural Studies",
    "baseWeight": 4,
    "keywords": [
      "historical",
      "aesthetics",
      "cultural",
      "studies"
    ]
  },
  {
    "id": "literary_aesthetics_cultural_studies",
    "discipline": "HUMANITIES",
    "name": "Literary Aesthetics & Cultural Studies",
    "baseWeight": 6,
    "keywords": [
      "literary",
      "aesthetics",
      "cultural",
      "studies"
    ]
  },
  {
    "id": "aesthetic_aesthetics_cultural_studies",
    "discipline": "HUMANITIES",
    "name": "Aesthetic Aesthetics & Cultural Studies",
    "baseWeight": 6,
    "keywords": [
      "aesthetic",
      "aesthetics",
      "cultural",
      "studies"
    ]
  },
  {
    "id": "visual_aesthetics_cultural_studies",
    "discipline": "HUMANITIES",
    "name": "Visual Aesthetics & Cultural Studies",
    "baseWeight": 6,
    "keywords": [
      "visual",
      "aesthetics",
      "cultural",
      "studies"
    ]
  },
  {
    "id": "musicological_aesthetics_cultural_studies",
    "discipline": "HUMANITIES",
    "name": "Musicological Aesthetics & Cultural Studies",
    "baseWeight": 6,
    "keywords": [
      "musicological",
      "aesthetics",
      "cultural",
      "studies"
    ]
  },
  {
    "id": "theological_aesthetics_cultural_studies",
    "discipline": "HUMANITIES",
    "name": "Theological Aesthetics & Cultural Studies",
    "baseWeight": 6,
    "keywords": [
      "theological",
      "aesthetics",
      "cultural",
      "studies"
    ]
  },
  {
    "id": "philological_aesthetics_cultural_studies",
    "discipline": "HUMANITIES",
    "name": "Philological Aesthetics & Cultural Studies",
    "baseWeight": 6,
    "keywords": [
      "philological",
      "aesthetics",
      "cultural",
      "studies"
    ]
  },
  {
    "id": "hermeneutic_aesthetics_cultural_studies",
    "discipline": "HUMANITIES",
    "name": "Hermeneutic Aesthetics & Cultural Studies",
    "baseWeight": 6,
    "keywords": [
      "hermeneutic",
      "aesthetics",
      "cultural",
      "studies"
    ]
  },
  {
    "id": "classical_aesthetics_cultural_studies",
    "discipline": "HUMANITIES",
    "name": "Classical Aesthetics & Cultural Studies",
    "baseWeight": 4,
    "keywords": [
      "classical",
      "aesthetics",
      "cultural",
      "studies"
    ]
  },
  {
    "id": "medieval_aesthetics_cultural_studies",
    "discipline": "HUMANITIES",
    "name": "Medieval Aesthetics & Cultural Studies",
    "baseWeight": 6,
    "keywords": [
      "medieval",
      "aesthetics",
      "cultural",
      "studies"
    ]
  },
  {
    "id": "modern_aesthetics_cultural_studies",
    "discipline": "HUMANITIES",
    "name": "Modern Aesthetics & Cultural Studies",
    "baseWeight": 6,
    "keywords": [
      "modern",
      "aesthetics",
      "cultural",
      "studies"
    ]
  },
  {
    "id": "postmodern_aesthetics_cultural_studies",
    "discipline": "HUMANITIES",
    "name": "Postmodern Aesthetics & Cultural Studies",
    "baseWeight": 6,
    "keywords": [
      "postmodern",
      "aesthetics",
      "cultural",
      "studies"
    ]
  },
  {
    "id": "cultural_aesthetics_studies",
    "discipline": "HUMANITIES",
    "name": "Cultural Aesthetics & Studies",
    "baseWeight": 6,
    "keywords": [
      "cultural",
      "aesthetics",
      "studies"
    ]
  },
  {
    "id": "comparative_aesthetics_cultural_studies",
    "discipline": "HUMANITIES",
    "name": "Comparative Aesthetics & Cultural Studies",
    "baseWeight": 6,
    "keywords": [
      "comparative",
      "aesthetics",
      "cultural",
      "studies"
    ]
  },
  {
    "id": "critical_aesthetics_cultural_studies",
    "discipline": "HUMANITIES",
    "name": "Critical Aesthetics & Cultural Studies",
    "baseWeight": 6,
    "keywords": [
      "critical",
      "aesthetics",
      "cultural",
      "studies"
    ]
  },
  {
    "id": "linguistic_aesthetics_cultural_studies",
    "discipline": "HUMANITIES",
    "name": "Linguistic Aesthetics & Cultural Studies",
    "baseWeight": 6,
    "keywords": [
      "linguistic",
      "aesthetics",
      "cultural",
      "studies"
    ]
  },
  {
    "id": "semantic_aesthetics_cultural_studies",
    "discipline": "HUMANITIES",
    "name": "Semantic Aesthetics & Cultural Studies",
    "baseWeight": 6,
    "keywords": [
      "semantic",
      "aesthetics",
      "cultural",
      "studies"
    ]
  },
  {
    "id": "art_historical_aesthetics_cultural_studies",
    "discipline": "HUMANITIES",
    "name": "Art-Historical Aesthetics & Cultural Studies",
    "baseWeight": 4,
    "keywords": [
      "historical",
      "aesthetics",
      "cultural",
      "studies"
    ]
  },
  {
    "id": "analytical_aesthetics_cultural_studies",
    "discipline": "HUMANITIES",
    "name": "Analytical Aesthetics & Cultural Studies",
    "baseWeight": 6,
    "keywords": [
      "analytical",
      "aesthetics",
      "cultural",
      "studies"
    ]
  },
  {
    "id": "narrative_aesthetics_cultural_studies",
    "discipline": "HUMANITIES",
    "name": "Narrative Aesthetics & Cultural Studies",
    "baseWeight": 6,
    "keywords": [
      "narrative",
      "aesthetics",
      "cultural",
      "studies"
    ]
  },
  {
    "id": "philosophical_film_media_studies",
    "discipline": "HUMANITIES",
    "name": "Philosophical Film & Media Studies",
    "baseWeight": 4,
    "keywords": [
      "philosophical",
      "film",
      "media",
      "studies"
    ]
  },
  {
    "id": "ethical_film_media_studies",
    "discipline": "HUMANITIES",
    "name": "Ethical Film & Media Studies",
    "baseWeight": 4,
    "keywords": [
      "ethical",
      "film",
      "media",
      "studies"
    ]
  },
  {
    "id": "logical_film_media_studies",
    "discipline": "HUMANITIES",
    "name": "Logical Film & Media Studies",
    "baseWeight": 4,
    "keywords": [
      "logical",
      "film",
      "media",
      "studies"
    ]
  },
  {
    "id": "epistemological_film_media_studies",
    "discipline": "HUMANITIES",
    "name": "Epistemological Film & Media Studies",
    "baseWeight": 4,
    "keywords": [
      "epistemological",
      "film",
      "media",
      "studies"
    ]
  },
  {
    "id": "metaphysical_film_media_studies",
    "discipline": "HUMANITIES",
    "name": "Metaphysical Film & Media Studies",
    "baseWeight": 4,
    "keywords": [
      "metaphysical",
      "film",
      "media",
      "studies"
    ]
  },
  {
    "id": "historical_film_media_studies",
    "discipline": "HUMANITIES",
    "name": "Historical Film & Media Studies",
    "baseWeight": 2,
    "keywords": [
      "historical",
      "film",
      "media",
      "studies"
    ]
  },
  {
    "id": "literary_film_media_studies",
    "discipline": "HUMANITIES",
    "name": "Literary Film & Media Studies",
    "baseWeight": 4,
    "keywords": [
      "literary",
      "film",
      "media",
      "studies"
    ]
  },
  {
    "id": "aesthetic_film_media_studies",
    "discipline": "HUMANITIES",
    "name": "Aesthetic Film & Media Studies",
    "baseWeight": 4,
    "keywords": [
      "aesthetic",
      "film",
      "media",
      "studies"
    ]
  },
  {
    "id": "visual_film_media_studies",
    "discipline": "HUMANITIES",
    "name": "Visual Film & Media Studies",
    "baseWeight": 4,
    "keywords": [
      "visual",
      "film",
      "media",
      "studies"
    ]
  },
  {
    "id": "musicological_film_media_studies",
    "discipline": "HUMANITIES",
    "name": "Musicological Film & Media Studies",
    "baseWeight": 4,
    "keywords": [
      "musicological",
      "film",
      "media",
      "studies"
    ]
  },
  {
    "id": "theological_film_media_studies",
    "discipline": "HUMANITIES",
    "name": "Theological Film & Media Studies",
    "baseWeight": 4,
    "keywords": [
      "theological",
      "film",
      "media",
      "studies"
    ]
  },
  {
    "id": "philological_film_media_studies",
    "discipline": "HUMANITIES",
    "name": "Philological Film & Media Studies",
    "baseWeight": 4,
    "keywords": [
      "philological",
      "film",
      "media",
      "studies"
    ]
  },
  {
    "id": "hermeneutic_film_media_studies",
    "discipline": "HUMANITIES",
    "name": "Hermeneutic Film & Media Studies",
    "baseWeight": 4,
    "keywords": [
      "hermeneutic",
      "film",
      "media",
      "studies"
    ]
  },
  {
    "id": "classical_film_media_studies",
    "discipline": "HUMANITIES",
    "name": "Classical Film & Media Studies",
    "baseWeight": 2,
    "keywords": [
      "classical",
      "film",
      "media",
      "studies"
    ]
  },
  {
    "id": "medieval_film_media_studies",
    "discipline": "HUMANITIES",
    "name": "Medieval Film & Media Studies",
    "baseWeight": 4,
    "keywords": [
      "medieval",
      "film",
      "media",
      "studies"
    ]
  },
  {
    "id": "modern_film_media_studies",
    "discipline": "HUMANITIES",
    "name": "Modern Film & Media Studies",
    "baseWeight": 4,
    "keywords": [
      "modern",
      "film",
      "media",
      "studies"
    ]
  },
  {
    "id": "postmodern_film_media_studies",
    "discipline": "HUMANITIES",
    "name": "Postmodern Film & Media Studies",
    "baseWeight": 4,
    "keywords": [
      "postmodern",
      "film",
      "media",
      "studies"
    ]
  },
  {
    "id": "cultural_film_media_studies",
    "discipline": "HUMANITIES",
    "name": "Cultural Film & Media Studies",
    "baseWeight": 4,
    "keywords": [
      "cultural",
      "film",
      "media",
      "studies"
    ]
  },
  {
    "id": "comparative_film_media_studies",
    "discipline": "HUMANITIES",
    "name": "Comparative Film & Media Studies",
    "baseWeight": 4,
    "keywords": [
      "comparative",
      "film",
      "media",
      "studies"
    ]
  },
  {
    "id": "critical_film_media_studies",
    "discipline": "HUMANITIES",
    "name": "Critical Film & Media Studies",
    "baseWeight": 4,
    "keywords": [
      "critical",
      "film",
      "media",
      "studies"
    ]
  },
  {
    "id": "linguistic_film_media_studies",
    "discipline": "HUMANITIES",
    "name": "Linguistic Film & Media Studies",
    "baseWeight": 4,
    "keywords": [
      "linguistic",
      "film",
      "media",
      "studies"
    ]
  },
  {
    "id": "semantic_film_media_studies",
    "discipline": "HUMANITIES",
    "name": "Semantic Film & Media Studies",
    "baseWeight": 4,
    "keywords": [
      "semantic",
      "film",
      "media",
      "studies"
    ]
  },
  {
    "id": "art_historical_film_media_studies",
    "discipline": "HUMANITIES",
    "name": "Art-Historical Film & Media Studies",
    "baseWeight": 2,
    "keywords": [
      "historical",
      "film",
      "media",
      "studies"
    ]
  },
  {
    "id": "analytical_film_media_studies",
    "discipline": "HUMANITIES",
    "name": "Analytical Film & Media Studies",
    "baseWeight": 4,
    "keywords": [
      "analytical",
      "film",
      "media",
      "studies"
    ]
  },
  {
    "id": "narrative_film_media_studies",
    "discipline": "HUMANITIES",
    "name": "Narrative Film & Media Studies",
    "baseWeight": 4,
    "keywords": [
      "narrative",
      "film",
      "media",
      "studies"
    ]
  }
];

    // ------------------------------------------------------------------
    // MULTI-SCALE CIVILIZATIONAL TIMELINE
    // A curated, ordered list of real milestones in human capability, from
    // the first stone tools to projected futures. `index` is an ILLUSTRATIVE
    // log-capability value (not a measured physical constant) used so a single
    // innovation can be placed *between* milestones and compared at many
    // scales at once — caveman, antiquity, industrial, digital, cosmic.
    // ------------------------------------------------------------------
    this.milestones = [
      { key: "stone",       when: "~3.3M BCE", name: "First Stone Tools",        index: 1,   blurb: "A sharpened rock. The first time a mind reshaped matter on purpose." },
      { key: "fire",        when: "~1M BCE",   name: "Control of Fire",          index: 3,   blurb: "Energy on demand — warmth, cooked food, safety after dark." },
      { key: "language",    when: "~70k BCE",  name: "Language & Symbols",       index: 6,   blurb: "Ideas could finally outlive the person who first had them." },
      { key: "agriculture", when: "~10k BCE",  name: "Agriculture",              index: 11,  blurb: "Food surplus buys cities, specialists, and spare time to think." },
      { key: "wheel",       when: "~3500 BCE", name: "The Wheel",                index: 16,  blurb: "Move more with less. Trade routes and machines begin." },
      { key: "writing",     when: "~3200 BCE", name: "Writing",                  index: 21,  blurb: "Knowledge becomes a database the whole tribe can query." },
      { key: "printing",    when: "1450",      name: "Printing Press",          index: 33,  blurb: "Copy an idea cheaply — literacy and science go exponential." },
      { key: "steam",       when: "1712",      name: "Steam Engine",            index: 44,  blurb: "Muscle replaced by machine. The Industrial Revolution ignites." },
      { key: "electricity", when: "1879",      name: "Electrification",         index: 54,  blurb: "Power any tool, anywhere, any time of day." },
      { key: "transistor",  when: "1947",      name: "The Transistor",          index: 64,  blurb: "Thought becomes switchable. The entire digital world rests on this." },
      { key: "spaceflight", when: "1969",      name: "Spaceflight",             index: 70,  blurb: "We left the planet — briefly, but we did it." },
      { key: "web",         when: "1991",      name: "World Wide Web",          index: 78,  blurb: "Every mind wired to every other mind." },
      { key: "smartphone",  when: "2007",      name: "The Smartphone",          index: 83,  blurb: "The whole web, in every pocket on Earth." },
      { key: "genai",       when: "2022",      name: "Generative AI",           index: 90,  blurb: "Machines that reason in language. You are roughly here." },
      { key: "solar",       when: "~2045",     name: "Solar-System Automation", index: 120, blurb: "Projected: self-replicating machines mining the solar system.", projected: true },
      { key: "dyson",       when: "~2100",     name: "Dyson Swarm (Type II)",   index: 160, blurb: "Projected: capturing the full output of a star.", projected: true }
    ];

    // Frontier concepts: tokens that signal genuine ambition / novelty.
    this.frontierTerms = new Set([
      "quantum","qubit","entanglement","superconducting","fusion","plasma","tokamak",
      "crispr","genome","synthetic","biology","mrna","longevity","neural","interface",
      "brain","graphene","nanotube","nanoscale","metamaterial","photonic","optogenetic",
      "dyson","kardashev","interstellar","antimatter","spacetime","relativistic","warp",
      "autonomous","agent","superintelligence","agi","reinforcement","diffusion",
      "transformer","exascale","cryogenic","superfluid","topological","spintronic",
      "carbon-capture","desalination","perovskite","solid-state","gene-drive","xenobot"
    ]);

    // Common function words — their density signals real prose vs. keyword salad.
    // Includes the very common short words (a/an/of/to/in/by/is/it...) — without
    // them, genuine short sentences were wrongly scored as incoherent.
    this.functionWords = new Set([
      "a","an","of","to","in","on","at","is","it","as","be","or","by","we","you","i",
      "so","if","do","up","my","no","he","she","his","her","them","an",
      "the","and","with","that","this","for","are","was","using","which","into","from",
      "can","has","have","will","our","your","more","than","based","while","when","where",
      "such","both","also","then","they","their","its","but","not","each","over","under",
      "between","through","across","because","therefore","however","via","onto","upon"
    ]);

    // ------------------------------------------------------------------
    // CONCEPT LEXICON — the small, local, compute-efficient "understanding"
    // layer. It recognises whole CONCEPTS (multi-word ideas) rather than
    // stray single words, so e.g. "time travel" is understood as PHYSICS
    // (spacetime / relativity) instead of accidentally matching the word
    // "time" against every "Real-Time" Computer-Science domain.
    //
    // Each concept maps to one or more disciplines (with weighted shares),
    // a human-readable domain label to surface as a tag, related `terms`
    // that are injected so the real domain database also lights up the
    // correct fields, an impact `weight` (1-10), and a `frontier` flag for
    // genuinely ambitious ideas. Tiny to ship, runs entirely on-device.
    // ------------------------------------------------------------------
    this.concepts = [
      // --- Frontier physics / spacetime ---
      { phrases: ["time travel", "time machine", "time-travel", "time traveling", "time travelling", "closed timelike", "chronology protection"],
        label: "Spacetime, Relativity & Time Physics", disciplines: { PHYSICS: 0.65, ENGINEERING: 0.2, COMPUTER: 0.15 },
        terms: ["spacetime", "relativity", "relativistic", "causality", "wormhole", "lorentz", "einstein", "gravitation"], weight: 9, frontier: true },
      { phrases: ["wormhole", "warp drive", "warp field", "faster than light", "faster-than-light", "alcubierre", "hyperspace"],
        label: "Relativistic Spacetime Engineering", disciplines: { PHYSICS: 0.7, ENGINEERING: 0.3 },
        terms: ["spacetime", "relativity", "metric", "negative", "energy", "gravitation"], weight: 9, frontier: true },
      { phrases: ["teleportation", "teleport", "matter transport"],
        label: "Quantum Teleportation & State Transfer", disciplines: { PHYSICS: 0.75, COMPUTER: 0.25 },
        terms: ["quantum", "entanglement", "superposition", "decoherence", "qubit"], weight: 8, frontier: true },
      { phrases: ["antigravity", "anti-gravity", "gravity control", "levitation", "gravitational shielding"],
        label: "Gravitation & Field Physics", disciplines: { PHYSICS: 0.8, ENGINEERING: 0.2 },
        terms: ["gravitation", "field", "relativity", "spacetime"], weight: 8, frontier: true },
      { phrases: ["antimatter", "dark matter", "dark energy", "higgs"],
        label: "High-Energy Particle Physics", disciplines: { PHYSICS: 0.9, ENGINEERING: 0.1 },
        terms: ["particle", "quantum", "relativistic", "collider"], weight: 8, frontier: true },
      { phrases: ["dyson swarm", "dyson sphere", "stellar engine", "kardashev", "star lifting"],
        label: "Stellar-Scale Megaengineering", disciplines: { PHYSICS: 0.45, ENGINEERING: 0.45, EARTH: 0.1 },
        terms: ["stellar", "solar", "orbital", "energy", "radiation"], weight: 10, frontier: true },
      { phrases: ["nuclear fusion", "fusion reactor", "fusion power", "tokamak", "plasma confinement", "inertial confinement"],
        label: "Fusion Energy & Plasma Physics", disciplines: { PHYSICS: 0.55, ENGINEERING: 0.4, CHEMISTRY: 0.05 },
        terms: ["plasma", "fusion", "magnetic", "confinement", "deuterium", "energy"], weight: 9, frontier: true },

      // --- Quantum / computing ---
      { phrases: ["quantum computer", "quantum computing", "quantum processor", "quantum supremacy"],
        label: "Quantum Computing", disciplines: { PHYSICS: 0.5, COMPUTER: 0.4, MATH: 0.1 },
        terms: ["quantum", "qubit", "entanglement", "superposition", "decoherence", "algorithm"], weight: 8, frontier: true },
      { phrases: ["artificial intelligence", "machine learning", "neural network", "deep learning", "large language model", "generative ai", "transformer model"],
        label: "Artificial Intelligence & Machine Learning", disciplines: { COMPUTER: 0.8, MATH: 0.15, ENGINEERING: 0.05 },
        terms: ["neural", "network", "algorithm", "training", "inference", "model"], weight: 7, frontier: true },
      { phrases: ["blockchain", "cryptocurrency", "smart contract", "distributed ledger"],
        label: "Cryptography & Distributed Systems", disciplines: { COMPUTER: 0.8, MATH: 0.15, SOCIAL: 0.05 },
        terms: ["cryptography", "cryptographic", "hash", "consensus", "ledger", "network"], weight: 5, frontier: false },
      { phrases: ["laptop", "computer", "notebook computer", "smartphone", "microchip", "processor chip", "semiconductor"],
        label: "Computing Hardware & Microelectronics", disciplines: { COMPUTER: 0.6, ENGINEERING: 0.35, PHYSICS: 0.05 },
        terms: ["microprocessor", "transistor", "circuit", "silicon", "memory"], weight: 3, frontier: false },

      // --- Bio / medical ---
      { phrases: ["gene editing", "gene-editing", "crispr", "genome editing", "gene therapy", "synthetic biology"],
        label: "Genetic Engineering & Synthetic Biology", disciplines: { BIOLOGY: 0.55, MEDICINE: 0.35, CHEMISTRY: 0.1 },
        terms: ["genome", "dna", "crispr", "genetic", "protein", "cell"], weight: 8, frontier: true },
      { phrases: ["brain computer interface", "brain-computer interface", "neural interface", "neural implant", "neuralink", "brain implant"],
        label: "Neural Interfaces & Neuroengineering", disciplines: { MEDICINE: 0.4, COMPUTER: 0.3, ENGINEERING: 0.2, BIOLOGY: 0.1 },
        terms: ["neural", "brain", "electrode", "signal", "cortex", "implant"], weight: 8, frontier: true },
      { phrases: ["vaccine", "mrna", "antibody", "immunotherapy", "drug discovery"],
        label: "Medicine & Therapeutics", disciplines: { MEDICINE: 0.6, BIOLOGY: 0.3, CHEMISTRY: 0.1 },
        terms: ["protein", "immune", "molecular", "clinical", "cell"], weight: 6, frontier: false },
      { phrases: ["longevity", "anti-aging", "anti aging", "life extension", "senescence"],
        label: "Longevity & Aging Biology", disciplines: { BIOLOGY: 0.5, MEDICINE: 0.45, CHEMISTRY: 0.05 },
        terms: ["cellular", "senescence", "genetic", "metabolic", "regeneration"], weight: 7, frontier: true },

      // --- Engineering / space / materials / energy ---
      { phrases: ["rocket", "spacecraft", "satellite", "space elevator", "ion thruster", "reusable launch", "mars rover"],
        label: "Aerospace & Propulsion Engineering", disciplines: { ENGINEERING: 0.6, PHYSICS: 0.3, EARTH: 0.1 },
        terms: ["propulsion", "thrust", "orbital", "aerodynamic", "structural"], weight: 7, frontier: true },
      { phrases: ["robot", "robotics", "humanoid robot", "drone", "autonomous vehicle", "self-driving"],
        label: "Robotics & Autonomous Systems", disciplines: { ENGINEERING: 0.5, COMPUTER: 0.4, MATH: 0.1 },
        terms: ["actuator", "sensor", "control", "autonomous", "kinematics"], weight: 6, frontier: false },
      { phrases: ["graphene", "nanotube", "nanomaterial", "metamaterial", "nanotechnology", "nanoscale", "diamondoid"],
        label: "Nanomaterials & Advanced Materials", disciplines: { CHEMISTRY: 0.4, PHYSICS: 0.35, ENGINEERING: 0.25 },
        terms: ["nanoscale", "lattice", "carbon", "molecular", "structural", "tensile"], weight: 7, frontier: true },
      { phrases: ["solar panel", "solar cell", "photovoltaic", "perovskite", "battery", "energy storage", "supercapacitor", "fuel cell"],
        label: "Energy Storage & Conversion", disciplines: { ENGINEERING: 0.45, CHEMISTRY: 0.4, PHYSICS: 0.15 },
        terms: ["electrochemical", "electrode", "voltage", "efficiency", "photovoltaic", "energy"], weight: 5, frontier: false },
      { phrases: ["carbon capture", "carbon-capture", "climate", "geoengineering", "desalination", "renewable energy"],
        label: "Climate & Earth-Systems Engineering", disciplines: { EARTH: 0.5, ENGINEERING: 0.35, CHEMISTRY: 0.15 },
        terms: ["atmospheric", "carbon", "emissions", "climate", "environmental"], weight: 6, frontier: false },

      // --- Math / social / humanities ---
      { phrases: ["cryptography", "encryption", "cybersecurity", "zero knowledge", "post-quantum"],
        label: "Cryptography & Cybersecurity", disciplines: { COMPUTER: 0.6, MATH: 0.35, SOCIAL: 0.05 },
        terms: ["cryptographic", "cipher", "key", "secure", "protocol"], weight: 5, frontier: false },
      { phrases: ["language translation", "natural language", "universal translator", "machine translation"],
        label: "Computational Linguistics", disciplines: { COMPUTER: 0.5, HUMANITIES: 0.3, SOCIAL: 0.2 },
        terms: ["linguistic", "semantic", "language", "syntactic", "corpus"], weight: 5, frontier: false }
    ];

    // IDF (keyword rarity) map is computed lazily on first analysis.
    this._idf = null;
  }

  /**
   * Detects known concepts in the text. Returns synthetic high-relevance
   * domain matches, per-discipline boosts, related terms to inject into the
   * normal matcher, and how many frontier concepts were found.
   */
  _applyConcepts(lowerText) {
    const injectedDomains = [];
    const disciplineBoost = {};
    const conceptTerms = new Set();
    let frontierHits = 0;

    this.concepts.forEach(concept => {
      const hit = concept.phrases.some(p => this._phraseInText(p, lowerText));
      if (!hit) return;

      if (concept.frontier) frontierHits++;
      (concept.terms || []).forEach(t => conceptTerms.add(t.toLowerCase()));

      // Pick the dominant discipline for the surfaced tag.
      const entries = Object.entries(concept.disciplines);
      const top = entries.slice().sort((a, b) => b[1] - a[1])[0];
      const weighted = concept.weight * 1.4; // concepts are strong, confident signals

      injectedDomains.push({
        id: "concept_" + top[0].toLowerCase() + "_" + concept.weight,
        name: concept.label,
        discipline: top[0],
        score: Math.round(Math.min(100, concept.weight * 10)),
        weighted,
        matchedKeywords: concept.phrases.filter(p => this._phraseInText(p, lowerText)),
        weight: concept.weight,
        isConcept: true
      });

      // Distribute the concept's weight across its disciplines.
      entries.forEach(([disc, share]) => {
        disciplineBoost[disc] = (disciplineBoost[disc] || 0) + concept.weight * share * 2.5;
      });
    });

    return { injectedDomains, disciplineBoost, conceptTerms, frontierHits };
  }

  /**
   * Sanitizes and parses text into a word array
   * @param {string} text Input summary text
   * @returns {string[]} Sanitized words
   */
  _tokenize(text) {
    if (!text) return [];
    return text.toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .split(/\s+/)
      .filter(w => w.length > 2);
  }

  /**
   * Counts total words in the text to validate the 400-word constraint
   * @param {string} text Summary text
   * @returns {number} Word count
   */
  getWordCount(text) {
    if (!text || text.trim() === "") return 0;
    return text.trim().split(/\s+/).length;
  }

  /**
   * Evaluates a technical summary of up to 400 words.
   * Maps matching keywords to the 2,500 domains of knowledge.
   * Computes individual domain scores, discipline impacts, and overall cosmic rating.
   * 
   * @param {string} text Technical summary of the invention
   * @returns {object} Analysis payload
   */
  analyzeInnovation(text) {
    const wordCount = this.getWordCount(text);
    if (wordCount > 400) {
      throw new Error(`Summary exceeds the 400-word limit. Word count: ${wordCount}`);
    }

    this._ensureIdf();

    const tokens = this._tokenize(text);
    const tokenSet = new Set(tokens);            // original tokens — used for honest axis scoring
    const lowerText = (text || "").toLowerCase();
    const matchedDomains = [];
    const disciplineScores = {};

    Object.keys(this.disciplines).forEach(disc => { disciplineScores[disc] = 0; });

    // --- 0. Concept layer: understand whole IDEAS before counting words -----
    // e.g. "time travel" is recognised as PHYSICS (spacetime/relativity) rather
    // than letting the stray word "time" match every "Real-Time" CS domain.
    const concept = this._applyConcepts(lowerText);
    // Inject concept-implied terms so the real domain DB also lights up the
    // correct fields. Kept separate from `tokenSet` so it does NOT inflate the
    // specificity axis (the user still has to write real detail to earn that).
    const matchSet = new Set(tokens);
    concept.conceptTerms.forEach(t => matchSet.add(t));

    // --- 1. Domain matching with rarity (IDF) weighting ---------------------
    // Each matched keyword contributes proportionally to how RARE it is across
    // the 2,500 domains. Generic words ("system", "studies") barely count;
    // distinctive ones ("entanglement", "perovskite") count a lot.
    this.domains.forEach(domain => {
      let evidence = 0;            // IDF-weighted strength of match for this domain
      let hasDistinctive = false;  // did at least one rare/specific keyword match?
      const matchedKeywords = [];

      domain.keywords.forEach(keyword => {
        if (keyword.includes(" ")) {
          // Phrase match on word boundaries (fixes the old substring bug where
          // "ion" matched inside "station"/"million").
          if (this._phraseInText(keyword, lowerText)) {
            const w = this._kw(keyword);
            evidence += 1.6 * w;
            if (w >= 0.3) hasDistinctive = true;
            matchedKeywords.push(keyword);
          }
        } else if (matchSet.has(keyword)) {
          const w = this._kw(keyword);
          evidence += w;
          if (w >= 0.3) hasDistinctive = true;
          matchedKeywords.push(keyword);
        }
      });

      if (matchedKeywords.length > 0 && evidence > 0) {
        // Discount domains whose ONLY evidence is common, generic words — this
        // is what stopped "time" alone from lighting up every "Real-Time ..."
        // Computer-Science domain for a physics idea.
        if (!hasDistinctive) evidence *= 0.18;

        const intensity = Math.min(1.0, 0.35 + evidence * 0.35);
        const weighted = domain.baseWeight * intensity * (0.5 + evidence);
        const displayScore = Math.round(Math.min(100, domain.baseWeight * intensity * 12));

        matchedDomains.push({
          id: domain.id,
          name: domain.name,
          discipline: domain.discipline,
          score: displayScore,
          weighted: weighted,
          matchedKeywords: matchedKeywords,
          weight: domain.baseWeight
        });

        disciplineScores[domain.discipline] += weighted;
      }
    });

    // Merge the concept hits: high-confidence synthetic domains + discipline
    // boosts so the breakdown reflects ALL fields a concept spans (a
    // time-travel laptop is Physics + Engineering + Computer, not just CS).
    concept.injectedDomains.forEach(d => matchedDomains.push(d));
    Object.entries(concept.disciplineBoost).forEach(([disc, v]) => {
      disciplineScores[disc] = (disciplineScores[disc] || 0) + v;
    });

    matchedDomains.sort((a, b) => b.weighted - a.weighted);

    // For the surfaced tag list, lead with the clean concept labels (the
    // engine's confident "what this really is" read), then the best matched
    // real domains — so a time-travel idea shows "Spacetime, Relativity & Time
    // Physics" first, not an obscure auto-generated domain name.
    const displayDomains = [
      ...matchedDomains.filter(d => d.isConcept),
      ...matchedDomains.filter(d => !d.isConcept)
    ];

    // --- 2. The five honest scoring axes (each 0..1) -----------------------
    const axes = this._scoreAxes(text, tokens, tokenSet, matchedDomains, disciplineScores, concept.frontierHits);

    // Composite quality, then multiply by coherence so keyword-salad is
    // structurally incapable of scoring high no matter how many terms it spams.
    const quality =
      0.30 * axes.specificity +
      0.27 * axes.depth +
      0.18 * axes.breadth +
      0.25 * axes.novelty;
    // Coherence is applied as a SQUARED gate: prose with structure barely loses
    // anything, while a buzzword-spray (low diversity + no function words) gets
    // crushed even if it matches every frontier term in the book.
    const adjusted = quality * axes.coherence * axes.coherence;
    const cosmicProgressScore = Math.max(1, Math.min(1000, Math.round(adjusted * 1000)));

    // Kardashev-style readout (clearly an illustrative log mapping, not a measurement).
    const universeControlPercentage = Math.min(100.00,
      parseFloat((Math.log10(Math.max(1, cosmicProgressScore)) / 3 * 100).toFixed(2)));

    // --- 3. Multi-scale placement across the whole human story -------------
    const scale = this._placeOnCivScale(cosmicProgressScore);
    const timeline = this._generateTimelineProjection(cosmicProgressScore);
    const motivationText = this._composeManj(cosmicProgressScore, scale, axes, matchedDomains);

    return {
      wordCount,
      cosmicProgressScore,                 // 0..1000, honest composite
      universeControlPercentage,           // illustrative Kardashev-III readout
      multiplierVs1950: scale.anchors.transistor, // kept for back-compat (now = x the transistor)
      axes,                                // specificity / depth / breadth / novelty / coherence
      scale,                               // civIndex + neighbouring milestones + anchor multipliers
      disciplineBreakdown: this._formatDisciplineScores(disciplineScores),
      matchedDomains: displayDomains.slice(0, 15),
      totalMatchedCount: matchedDomains.length,
      timeline,
      motivationText
    };
  }

  /**
   * Computes IDF (inverse document frequency) for every keyword across the
   * 2,500 domains, once, and memoises it. Common keywords -> ~0.1, rare -> ~1.
   */
  _ensureIdf() {
    if (this._idf) return;
    const df = {};
    this.domains.forEach(d => {
      new Set(d.keywords.map(k => k.toLowerCase())).forEach(k => {
        df[k] = (df[k] || 0) + 1;
      });
    });
    const N = this.domains.length;
    const logN = Math.log(N);
    this._idf = {};
    Object.keys(df).forEach(k => {
      this._idf[k] = Math.min(1, Math.log(N / df[k]) / logN);
    });
  }

  /** Rarity weight for a keyword; unknown keywords are treated as fairly rare. */
  _kw(keyword) {
    const v = this._idf ? this._idf[keyword.toLowerCase()] : undefined;
    return v == null ? 0.85 : Math.max(0.08, v);
  }

  /** Whole-word / whole-phrase match (no accidental substring hits). */
  _phraseInText(phrase, lowerText) {
    const esc = phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return new RegExp("(^|\\W)" + esc + "($|\\W)").test(lowerText);
  }

  /**
   * The heart of the "small smart engine": five interpretable axes that
   * measure MEANING and STRUCTURE rather than raw keyword counts.
   */
  _scoreAxes(text, tokens, tokenSet, matchedDomains, disciplineScores, conceptFrontier = 0) {
    const totalTokens = tokens.length || 1;
    const uniqueTokens = tokenSet.size;

    // Specificity: density of genuinely technical, distinctive vocabulary.
    let technical = 0;
    tokenSet.forEach(t => {
      const idf = this._idf[t];
      if (idf != null) technical += Math.max(0.25, idf);
    });
    const specificity = Math.min(1, technical / 11);

    // Depth: how strongly the top domains were actually hit.
    const depth = Math.min(1, matchedDomains.slice(0, 6)
      .reduce((s, d) => s + d.weighted, 0) / 26);

    // Breadth: distinct disciplines with real (not trace) evidence.
    const activeDisciplines = Object.values(disciplineScores).filter(v => v >= 2.5).length;
    const breadth = Math.min(1, activeDisciplines / 5);

    // Novelty: presence of frontier / ambition-signalling concepts, counting
    // both raw frontier terms and recognised frontier CONCEPTS (e.g. a
    // "time travel" idea is ambitious even with no frontier buzzwords typed).
    let frontierHits = conceptFrontier;
    tokenSet.forEach(t => { if (this.frontierTerms.has(t)) frontierHits++; });
    const novelty = Math.min(1, frontierHits / 5);

    // Coherence (anti-keyword-stuffing): real writing has lexical variety AND
    // connective function words. A comma-spray of buzzwords has neither, so
    // this multiplier collapses its final score.
    const lexicalDiversity = uniqueTokens / totalTokens;
    const rawWords = (text || "").toLowerCase().split(/\s+/).filter(Boolean);
    let fw = 0;
    rawWords.forEach(w => { if (this.functionWords.has(w.replace(/[^\w]/g, ""))) fw++; });
    const fwRatio = rawWords.length ? fw / rawWords.length : 0;
    // Real writing is mostly carried by SENTENCE STRUCTURE (function words like
    // "a / that / with / by"), which a buzzword-spray simply does not have. We
    // weight that signal heavily so a high-diversity salad of distinct frontier
    // words can't sneak past — diversity alone is cheap to fake.
    const proseSignal = Math.min(1, fwRatio / 0.16);
    const coherence = Math.max(0.15, Math.min(1,
      0.15 + 0.25 * lexicalDiversity + 0.60 * proseSignal));

    const round = v => Math.round(v * 100);
    return {
      specificity, depth, breadth, novelty, coherence,
      // pre-rounded percentages for the UI
      pct: {
        specificity: round(specificity),
        depth: round(depth),
        breadth: round(breadth),
        novelty: round(novelty),
        coherence: round(coherence)
      }
    };
  }

  /**
   * Places a 0..1000 score onto the illustrative civilizational capability
   * scale and reports the milestones it sits between, plus how it compares to
   * several anchor points at once (stone axe, wheel, transistor, today's AI).
   */
  _placeOnCivScale(score) {
    // Map the 0..1000 score across the WHOLE timeline (index 1..160). The curve
    // is tuned so weak/vague ideas sit in pre-history (stone -> agriculture),
    // solid modern innovations land around the transistor/web era, genuinely
    // advanced concepts reach Generative AI and beyond, and only a near-perfect
    // score approaches the projected Dyson-swarm frontier. (Exponent > 1 keeps
    // junk low; reaching 159 at score 1000 keeps the modern/future end usable —
    // previously even a perfect score never got past ~1969.)
    const civIndex = 1 + Math.pow(score / 1000, 1.25) * 159;
    const ms = this.milestones;

    let below = ms[0];
    let above = ms[ms.length - 1];
    for (let i = 0; i < ms.length; i++) {
      if (ms[i].index <= civIndex) below = ms[i];
      if (ms[i].index >= civIndex) { above = ms[i]; break; }
    }

    const by = key => ms.find(m => m.key === key).index;
    const fmt = m => parseFloat((m).toFixed(m < 1 ? 3 : (m < 10 ? 2 : 1)));

    return {
      civIndex: parseFloat(civIndex.toFixed(1)),
      below: { name: below.name, when: below.when, index: below.index, blurb: below.blurb },
      above: { name: above.name, when: above.when, index: above.index, blurb: above.blurb },
      anchors: {
        stone:      fmt(civIndex / by("stone")),
        wheel:      fmt(civIndex / by("wheel")),
        transistor: fmt(civIndex / by("transistor")),
        genai:      fmt(civIndex / by("genai"))
      }
    };
  }

  /**
   * Manj's cave wisdom — warm, genuine, and grounded in real history. Every
   * message: (1) acknowledges the person's effort with empathy, (2) ties their
   * idea to the actual human milestone it landed nearest (with a touch of that
   * milestone's story), and (3) leaves them with honest, encouraging direction.
   */
  _composeManj(score, scale, axes, matchedDomains) {
    const topField = matchedDomains[0] ? matchedDomains[0].name : "new ground";
    const near = scale.below;     // the milestone the idea stands beside
    const next = scale.above;     // the one it reaches toward
    // A short, plain retelling of why the nearby milestone mattered — reshaped
    // to flow naturally inside a sentence (each clause lowercased, joined by —).
    const story = (near.blurb || "a turning point for our kind")
      .replace(/\.$/, "")
      .split(/\. /)
      .map(s => s.charAt(0).toLowerCase() + s.slice(1))
      .join(" — ");

    // Gentle, specific guidance based on the weakest axis (never scolding).
    const weakest = Object.entries(axes.pct)
      .filter(([k]) => k !== "coherence")
      .sort((a, b) => a[1] - b[1])[0];
    const nudge = {
      specificity: "If you tell Manj the real details — the materials, the numbers, the how — your drop grow heavier.",
      depth: "Pick one part and dig deep, like Manj dig for the sharpest flint. Mastery of one beats a touch of many.",
      breadth: "Reach a hand to other tribes — borrow from other fields, and your idea grow wider.",
      novelty: "Do not fear the bold dream — the stars, the atom, the spark of life. Big questions carry far."
    }[weakest[0]] || "Keep carving — the ocean remembers every drop.";

    // Buzzword salad — kind but honest: invite them to speak as a real builder.
    if (axes.coherence < 0.45) {
      return "Manj says: Manj see shiny words here, but not yet the tool beneath them. No shame — every builder start rough. Tell Manj what it really does, in your own plain voice, and Manj will see your true work.";
    }

    if (score < 150) {
      return `Manj says: friend, Manj honour this. Even the smallest pebble feeds the great ocean of knowledge, and your drop rests beside ${near.name} (${near.when}) — ${story}. Proud company for a first step. ${nudge}`;
    }
    if (score < 400) {
      return `Manj says: this is a real tool, and Manj is glad you made it. Your work in ${topField} stands just past ${near.name} (${near.when}) — ${story} — and already reaches toward ${next.name}. You walk a good path, friend. ${nudge}`;
    }
    if (score < 750) {
      return `Manj says: big fire in the sky, friend! Your ${topField} idea takes its place between ${near.name} and ${next.name}. Remember ${near.name} — ${story}. The tribe sees farther because minds like yours keep building. ${nudge}`;
    }
    return `Manj says: Manj is moved. This stands shoulder to shoulder with ${near.name} — ${story} — and leans toward ${next.name}, where few dare to climb. The whole ocean rises for a drop like this. Carry it onward, and never stop carving the stars.`;
  }

  /**
   * Formats the discipline scores into a list with localized names and percentages
   */
  _formatDisciplineScores(disciplineScores) {
    const formatted = [];
    let grandTotal = 0;
    
    Object.keys(disciplineScores).forEach(key => {
      grandTotal += disciplineScores[key];
    });

    Object.keys(this.disciplines).forEach(key => {
      const rawScore = disciplineScores[key];
      const percentage = grandTotal > 0 ? Math.round((rawScore / grandTotal) * 100) : 0;
      formatted.push({
        id: key,
        name: this.disciplines[key],
        rawScore: Math.round(rawScore),
        percentage: percentage
      });
    });

    return formatted;
  }

  /**
   * Projects a future timeline (from 1950s to 2100s) based on where this technical innovation places us.
   */
  _generateTimelineProjection(score) {
    const place = this._placeOnCivScale(score);

    const nodes = this.milestones.map(m => ({
      when: m.when,
      year: m.when,                 // string label; renderer treats it as display text
      name: m.name,
      label: m.name,
      blurb: m.blurb,
      knowledgeIndex: m.index,
      isFuture: !!m.projected,
      projected: !!m.projected,
      isUserInnovation: false
    }));

    nodes.push({
      when: "YOUR DROP",
      year: "YOUR DROP",
      name: "Your Innovation",
      label: "Your Innovation",
      blurb: "This is where your contribution lands in the human story — a drop in the ocean of knowledge.",
      knowledgeIndex: place.civIndex,
      isFuture: false,
      projected: false,
      isUserInnovation: true
    });

    // Order by capability index so the user node slots between the right two milestones.
    nodes.sort((a, b) => a.knowledgeIndex - b.knowledgeIndex);
    return nodes;
  }
}

// Export the class for different environments (CommonJS, ESM, and Global Browser)
if (typeof exports !== 'undefined') {
  module.exports = CosmicSDK;
} else if (typeof window !== 'undefined') {
  window.CosmicSDK = CosmicSDK;
}
