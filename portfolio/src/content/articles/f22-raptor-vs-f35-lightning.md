---
title: "The Assassin vs The Quarterback: F-22 Raptor, F-35 Lightning II, and the Death of the Dogfight"
subtitle: "Why 2D thrust vectoring and Mach 2.2 supercruise matter less in modern air combat than MADL data-linking and a helmet that lets you see through the cockpit floor."
date: "2026-08-16"
category: ["MACHINES", "ENGINEERING", "SYSTEMS"]
type: "DEEP DIVE"
tags: ["AEROSPACE", "MILITARY", "NETWORKS", "RADAR"]
heroImage: "CINEMATIC"
readingTime: "10 min"
---

If you ask an aviation purist to choose between the Lockheed Martin F-22 Raptor and the F-35 Lightning II, they will almost always choose the F-22.

The Raptor is a kinetic monster: twin Pratt & Whitney F119 turbofans with 2D pitch-axis thrust-vectoring nozzles, supercruise at Mach 1.82 without afterburners, and an aerodynamic envelope that allows it to execute a power-pitch Cobra maneuver or turn on a dime at 50,000 feet. It is the undisputed king of air dominance.

And yet, the US Air Force stopped buying F-22s at just 187 airframes and committed over $1.7 trillion to the F-35 program.

Why did the military deprioritize the greatest kinematic dogfighter in human history in favor of a single-engine jet that can barely reach Mach 1.6?

### THE QUESTION

Has software, sensor fusion, and distributed networking officially rendered kinetic dogfighting obsolete?

### THE TWO PHILOSOPHIES

To understand the difference, you have to look at the era each jet was designed for:

```
Attribute               F-22A Raptor                      F-35 Lightning II
─────────────────────────────────────────────────────────────────────────────
Primary Role            Air Dominance / Interceptor       Multirole / Strike / ISR Node
Kinetic Top Speed       Mach 2.25 (Supercruise Mach 1.82) Mach 1.6 (Requires afterburner)
Thrust Vectoring        2D Hydraulic Pitch (±20°)        None (Conventional nozzle)
Radar Cross Section     ~0.0001 m² (Size of a bumblebee)  ~0.001 m² (Size of a golf ball)
Sensors & Datalink      IFDL (F-22 only closed loop)      MADL + Electro-Optical DAS + EOTS
Pilot Interface         Multi-screen MFDs + HUD           Gen III Helmet-Mounted Display
Computing Architecture  Ada / Custom 1990s avionics       C++ / Integrated Core Processor
```

The F-22 was conceived in the late Cold War to defeat high-performance Soviet fighters (Su-27 Flankers and MiG-29s) in contested airspace. Its design priority was kinematic overwhelming superiority: fly higher, fly faster, turn harder, and carry internal AMRAAM missiles so radar cross-section remains microscopic.

The F-35 was designed around a completely different doctrine: **Distributed Sensor Fusion**.

### HOW SENSOR FUSION ACTUALLY WORKS

In an F-22 or an older 4th-gen fighter (like an F-15 or Su-30), the pilot is the computer. The radar screen shows raw blips; the Radar Warning Receiver (RWR) beeps tones in the headset; the infrared pod shows a separate thermal video. The pilot has to mentally fuse these disparate feeds into an operational picture.

In the F-35, the pilot never sees raw sensor feeds. 

1. **AN/APG-81 AESA Radar:** Interleaves active radar tracking with electronic attack jamming and synthetic aperture ground mapping simultaneously.
2. **Distributed Aperture System (AN/AAQ-37 DAS):** Six high-resolution infrared cameras mounted around the fuselage feed a 360-degree real-time spherical image directly into the pilot's $400,000 Rockwell Collins helmet. If the pilot looks down between their knees, the cockpit floor is rendered completely invisible; they see the terrain and targets directly beneath them.
3. **Multi-Function Advanced Data Link (MADL):** A daisy-chained, low-probability-of-intercept directional data link. A four-ship formation of F-35s shares target tracks silently. Jet #1 can fly with its radar completely passive (invisible to enemy receivers), while Jet #4—flying 80 miles to the east—paints the target and passes high-fidelity coordinates over MADL. Jet #1 launches a missile without ever emitting a single electromagnetic signal.

### THE WEIRD PART: THE KINETIC PARADOX

During Red Flag exercises at Nellis Air Force Base, aggressive 4th-gen "Aggressor" pilots flying F-16s and F-15s report that fighting F-35s is profoundly anticlimactic.

You never get into a turning knife-fight. You never see the other aircraft. Your radar never displays an active radar lock. Suddenly, your cockpit alarm sounds indicating that an AIM-120D AMRAAM has gone pitbull 5 miles away, fired from a jet 35 miles beyond visual range that you never even knew was in the same airspace.

> [!NOTE]
> The F-22 is an assassin that sneaks into your house and slits your throat. The F-35 is the quarterback that knows the address of your house, turns off the municipal power grid, and calls in an artillery strike while ordering lunch.

### MY TAKE

The evolution from the F-22 to the F-35 mirrors the evolution of software engineering over the last thirty years:
- The F-22 is like a finely hand-tuned C++ binary running on bare metal with maximum clock speed.
- The F-35 is a distributed Kubernetes cluster of sensor nodes that wins not through raw single-threaded clock cycles, but through seamless networking and data throughput.

Kinematic agility will always look cooler in airshow demonstrations. But in real-world complex systems, whoever processes and distributes information fastest wins every single time.

### SOURCES

01 USAF Red Flag Tactical Assessment Reports (Declassified Briefs)  
02 Lockheed Martin F-35 Mission Systems & Sensor Fusion Whitepaper  
03 Sweetman, Bill, *Lockheed Stealth*, Motorbooks
