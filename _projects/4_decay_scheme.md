---
layout: page
title: Sr-88 decay-scheme analyser
description: Object-oriented MATLAB code for atomic level-structure simulations and branching-ratio analysis.
img: assets/img/projects/decay_scheme.jpg
importance: 4
category: phd
related_publications: false
---

The full Sr-88 level structure has a lot of metastable bookkeeping — singlet ground state, triplet manifold, intercombination transitions, repump pathways. I wrote an object-oriented MATLAB framework that represents each state and transition as a class and lets me compute decay rates, branching ratios, and steady-state populations under arbitrary laser drives without copy-pasting Clebsch–Gordan factors every time.

Useful for choosing which transitions to drive in the cooling cycle so we don't need extra repump lasers — a constraint that drives a lot of platform-level decisions.

**Stack:** MATLAB (object-oriented).
