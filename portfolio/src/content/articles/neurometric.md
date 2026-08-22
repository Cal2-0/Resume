---
title: "How to Measure Human Behavior Without Being Creepy"
subtitle: "An investigation into multimodal behavioral analytics using gaze, affect, and speech fusion."
date: "2026-08-10"
category: ["RESEARCH", "AI"]
type: "RESEARCH NOTE"
tags: ["AI", "COMPUTER VISION"]
heroImage: "TECHNICAL_BLACK"
readingTime: "9 min"
---

Humans are incredibly noisy signal generators. When we speak, our words convey one message, our micro-expressions convey another, and where we look tells an entirely different story.

I wanted to know if a machine could fuse these distinct, noisy signals into a coherent understanding of human state.

### THE QUESTION

How do you build a multimodal behavioral analytics system that is actually accurate in real-time, on a mobile device?

Most systems look at one thing: either sentiment analysis of text, or facial emotion recognition. But human behavior is multimodal. If you say "I'm fine" while avoiding eye contact and exhibiting micro-stress in your jaw, the text sentiment is positive, but the actual state is anxious.

### HOW IT WORKS: THE NEUROMETRIC PROTOTYPE

NeuroMetric is a research prototype I built to explore this exact problem.

The architecture runs entirely on edge hardware (React Native). It leverages Google's MediaPipe for lightweight, real-time computer vision.

1. **Gaze Tracking:** It maps the iris and tracks saccades (rapid eye movements) to determine focus and cognitive load.
2. **Affect Recognition:** It isolates micro-expressions by tracking facial landmarks.
3. **Speech Fusion:** It correlates the visual data with vocal intonation and speech patterns.

The magic happens in the fusion layer. It doesn't treat these inputs independently. It aligns them temporally. If a vocal hesitation occurs exactly 200ms after a gaze aversion, the system interprets that combination as a specific behavioral marker.

### THE ENGINEERING

Running this on a phone is ridiculous. 

Computer vision is computationally expensive. Running gaze tracking and facial landmark detection simultaneously at 30 frames per second will melt a smartphone battery in minutes.

The engineering solution was to aggressively downsample the video feed and only run the heavy inference models when a "trigger event" (like a sudden change in audio pitch) occurs. We essentially built an attention mechanism for the camera itself—it only looks closely when it needs to.

> [!CAUTION]
> Behavioral analytics sits on a very thin line between "useful insight" and "dystopian surveillance." The strict rule for NeuroMetric was: all processing happens on-device. No raw video or audio ever hits a server. 

### MY TAKE

What surprised me the most was how much our eyes give away. 

We can control our words, and we can mostly control our facial expressions. But saccades and pupil dilation are autonomic. If a system can read them accurately in real-time, it creates an incredibly powerful channel for human-computer interaction. Imagine an educational app that *knows* when you're confused just by how your eyes are scanning a paragraph, and dynamically adjusts the content.

That's the rabbit hole I'm still falling down.

### SOURCES
01 NeuroMetric Edge Inference Benchmarks
02 MediaPipe Face Mesh Documentation
