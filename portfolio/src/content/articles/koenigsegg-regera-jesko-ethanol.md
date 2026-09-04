---
title: "No Gearbox and the E85 Paradox: Two Thermodynamic Masterclasses from Ängelholm"
subtitle: "Why the Koenigsegg Regera eliminated the transmission entirely, and the chemistry behind why the Jesko gains 320 horsepower simply by drinking corn."
date: "2026-08-28"
category: ["MACHINES", "ENGINEERING", "RABBIT HOLES"]
type: "DEEP DIVE"
tags: ["KOENIGSEGG", "THERMODYNAMICS", "HYPERCARS"]
heroImage: "CINEMATIC"
readingTime: "11 min"
---

Every production automobile since the 1890s has obeyed a fundamental rule: internal combustion engines produce power in a narrow RPM band, so you must use a gearbox with multiple ratios to match engine speed to wheel speed.

In 2015, Christian von Koenigsegg decided that rule was an unnecessary thermodynamic penalty.

The result was the Koenigsegg Regera and its Koenigsegg Direct Drive (KDD) system. It has no first gear. It has no second gear. It has no reverse gear. It has no gearbox at all.

### THE QUESTION

How does a car accelerate from 0 to 400 km/h in a single gear without bogging down at launch or grenading the engine at top speed?

And while we're talking about Swedish madness: why does the Koenigsegg Jesko make 1,280 hp on premium 95-octane pump fuel, but leaps to an astronomical 1,600 hp and 1,500 Nm of torque the moment you fill it with E85 biofuel?

### HOW IT WORKS: THE REGERA DIRECT DRIVE

A traditional transmission accounts for a 5% to 10% drivetrain parasitic loss due to spinning gears, friction, and heat. The KDD eliminates this by placing a hydraulic torque converter called the *HydraCoup* directly on the crank of the 5.0L twin-turbo V8, connecting directly to a fixed 2.73:1 rear final drive.

From 0 to 50 km/h:
1. Two axial-flux YASA electric motors on the rear half-shafts provide instant, silent electric launch torque (over 800 Nm).
2. The third electric motor on the crankshaft assists the V8, while the HydraCoup slips hydraulically, letting the combustion engine rev freely without stalling.
3. Above 50 km/h (31 mph), the hydraulic converter locks up solid with a direct clutch. From that point all the way to 404 km/h (251 mph), the rear wheels and the twin-turbo V8 are locked in a 1:1 mechanical ratio.

When you step on the gas at 150 km/h, there is zero downshift lag. No clutches disengaging. No synchros lining up. It feels like pulling back an elastic band and letting go in a vacuum.

### THE WEIRD PART: THE JESKO ETHANOL PARADOX

Most people assume "higher octane fuel gives more power" because it burns hotter or faster. That is completely wrong. 

Gasoline actually has a *higher* energy density by mass (approx. 43 MJ/kg) than pure ethanol (approx. 27 MJ/kg). If ethanol has 33% less energy per litre, why does the Jesko make 320 horsepower *more* on E85?

The answer is two thermodynamic concepts: **Latent Heat of Vaporization** and **Flame Speed**.

```
Fuel Property               Standard 95 Octane    E85 Biofuel
─────────────────────────────────────────────────────────────
Research Octane Number      95 RON                105-108 RON
Latent Heat of Vaporization ~350 kJ/kg            ~840 kJ/kg (2.4x cooling!)
Stoichiometric Ratio (AFR)  14.7:1                9.76:1
Energy Density (MJ/kg)      43.5 MJ/kg            29.2 MJ/kg
```

1. **Massive In-Cylinder Charge Cooling:** Ethanol absorbs 2.4 times more heat energy as it changes phase from liquid to vapor in the intake port. When the Jesko's 21 fuel injectors spray massive volumes of E85 into the intake, the intake charge drops by up to 30°C. Cold air is denser air, packing significantly more oxygen molecules per cubic centimeter.
2. **Knock Resistance & Peak Cylinder Pressure:** In a turbocharged engine pushing 2.2 bar of boost, standard gasoline will self-ignite prematurely (engine knock/detonation), which bends connecting rods. The ECU must retard ignition timing to protect the block. E85's effective 108 octane rating allows Koenigsegg's ECU to advance timing to the absolute thermodynamic optimum, pushing peak cylinder pressures past 250 bar without detonation.

> [!TIP]
> The Jesko burns approximately 40% more volume of E85 to achieve this, but because ethanol acts as a liquid chemical intercooler, the engine can safely ingest more air and ignite it earlier.

### MY TAKE

The contrast between the Regera and the Jesko highlights two completely different philosophies of solving the same problem:
- The Regera uses electric torque to erase mechanical complexity.
- The Jesko embraces mechanical complexity and uses chemical thermodynamics to push the limits of internal combustion.

In both cases, Koenigsegg doesn't accept the industry consensus. When someone says "you need 10 gears to be fast," they build zero gears. When someone says "biofuels are just for emissions," they use it to generate 1,600 horsepower.

### SOURCES

01 Christian von Koenigsegg on Direct Drive (Apex One Engineering Series)  
02 Heywood, J. B., *Internal Combustion Engine Fundamentals*, McGraw-Hill  
03 Koenigsegg Jesko Technical Specification & Dyno Calibration Whitepaper
