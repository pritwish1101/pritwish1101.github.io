---
layout: page
permalink: /research/
title: research
description: Single strontium atoms coupled to nanophotonic cavities for hybrid quantum systems.
nav: true
nav_order: 2
---

## The platform

The experiment couples a single neutral strontium-88 atom, held in an optical tweezer, to a suspended Si₃N₄ photonic-crystal defect cavity resonant with the narrow 689 nm ¹S₀ → ³P₁ intercombination transition. The cavity hosts a co-localised nanomechanical mode of the same membrane, giving us a three-way interface between the atom, the optical mode, and a macroscopic mechanical oscillator.

Strontium is a convenient platform here for three reasons. Its singlet–triplet level structure provides both a broad 461 nm transition for laser cooling and a narrow 7.5 kHz 689 nm transition for high-cooperativity coupling to the photonic-crystal cavity. The bosonic ⁸⁸Sr isotope has zero nuclear spin, so the level structure stays simple. And the branching ratios on the cooling cycles let us run the experiment without auxiliary repump lasers.

## Why it matters

A coherent atom–phonon interface is one of the cleaner routes to preparing macroscopic mechanical objects in non-classical states. The atom is a well-understood, low-noise quantum emitter; the membrane is a gram-scale-by-comparison mechanical object that, if entangled with the atom, would sit firmly in the regime where quantum mechanics and classical mechanics meet. Beyond the fundamental physics, the same platform is a testbed for cavity-mediated quantum networks, optically cooled mechanical sensors, and hybrid quantum memories.

## What I work on

The experiment is in its build-up phase, so my day-to-day spans hardware, simulation, and software:

- **Vacuum and atom source.** Design and assembly of the UHV chamber, oven, Zeeman slower, and 2D/3D MOT regions. I maintain the full SolidWorks assembly of the chamber and surrounding optics, and run the build sequence from dummy-sample tests through to installing real photonic-crystal devices.
- **Magnetic-field control.** Engineering water-cooled Helmholtz coils for the MOT and bias fields — 84-turn hollow-conductor coils at 80–100 A with parallel-hydraulic / series-electrical topology. Currently sourcing from external vendors after a COMSOL-validated design.
- **Lasers and stabilisation.** Custom diode laser assemblies, beam delivery, and Pound–Drever–Hall locks. I built a Red Pitaya-based PID controller (in Python via PyRPL) for an interferometer lock and am developing a band-pass filter on the same FPGA.
- **Photonic devices and cryogenics.** Imaging photons scattered from atoms into the photonic-crystal defect cavity, and commissioning a cryogenic setup to characterise devices at low temperature.
- **Simulation and analysis.** Object-oriented MATLAB modelling of the Sr-88 level structure for decay-scheme and branching-ratio analysis; smaller utilities in Python and C++ (Eigen) for sparse linear algebra in optical Bloch and master-equation problems.

## The group

I joined the [Hybrid Quantum Systems Laboratory](https://www.hqlab.se) at its founding — it is the first Sr atom group in Sweden — and we are part of the Quantum Technology division at the Department of Microtechnology and Nanoscience (MC2). The project is funded by the ERC Consolidator Grant [SEQUENCE](https://cordis.europa.eu/project/id/101117144).

For the full research context, see the [group website](https://www.hqlab.se).
