---
layout: page
title: Measuring g with an Arduino and a pendulum
description: Using an Arduino-based microphone to find gravitational acceleration from a pendulum's acoustic response.
img: assets/img/projects/find_g.jpg
importance: 1
category: undergrad
related_publications: false
---

A short project on home-built physics measurements. A pendulum is set swinging next to a microphone; the Arduino records the audio signal at the swing tops, FFTs it, and extracts the swing frequency. From that you can recover the gravitational acceleration with surprising precision, without ever timing a stopwatch.

A nice introductory demo for instrumentation: shows how much you can get out of a cheap microcontroller plus careful signal processing.

**Stack:** Arduino, Python (FFT analysis).
