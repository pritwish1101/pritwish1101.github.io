---
layout: page
title: Red Pitaya as a PID controller
description: Using a Red Pitaya FPGA board as a digital PID lock via PyRPL, with documented setup notes.
img: assets/img/projects/red_pitaya.jpg
importance: 1
category: instrumentation
related_publications: false
---

The Red Pitaya STEMlab is a fast FPGA dev board (125 MS/s ADC, dual-channel) that can be made to behave as a digital PID controller via the PyRPL library — but getting from "out of the box" to "actually closing a loop on a real interferometer" involves a fair amount of fiddling that isn't well-documented in one place.

I wrote up the full setup process: flashing the right OS image, network configuration, Python environment, PyRPL installation, and how to wire it into a Pound–Drever–Hall lock. Currently using it to stabilise an interferometer in the lab.

Next step is implementing a band-pass filter directly in the FPGA fabric for signal conditioning before the PID input.

**Stack:** Red Pitaya, Python, PyRPL, FPGA (Vivado).

<!-- TODO: replace this with a direct GitHub URL once the setup notes are posted publicly. -->
[Setup instructions and notes](https://tinyurl.com/pyrpl-ins)
