---
title: "I Wanted My Notes to Teach Me Back"
subtitle: "Building an adaptive AI study companion with OuchMyBrain.io."
date: "2026-06-15"
category: ["BUILT", "AI"]
type: "PROJECT STORY"
tags: ["AI", "EDUCATION"]
heroImage: "TECHNICAL_BLACK"
readingTime: "7 min"
---

Taking notes is essentially a one-way street. You put information into a system, and it just sits there, waiting for you to re-read it. 

I kept wondering: what if the notes were active? What if the system could read what you wrote and then interrogate you about it?

### THE QUESTION

How do you transform passive documentation into an active learning environment without just generating generic flashcards?

### HOW IT WORKS: THE PROFESSOR MODE

OuchMyBrain.io was built to solve this. It takes raw text inputs (OCR scans, typed notes, PDFs) and processes them through an LLM pipeline. But instead of just summarizing the text, it creates an adaptive interrogator we call "Professor Mode."

1. **Extraction:** It pulls the core concepts and relationships from the text.
2. **Generation:** It uses OpenAI to generate targeted questions based on the complexity of the material.
3. **Voice Integration:** It uses ElevenLabs to actually speak to you, making the study session feel like an oral exam rather than a written test.

### MY TAKE

The most interesting part of building educational AI isn't the model itself. It's the UX. If a system feels like a generic quiz app, it's boring. If it feels like an actual professor pushing you to explain *why* something works, it's engaging. OuchMyBrain proved that the interface layer of AI is just as important as the backend prompt.

### SOURCES
01 OuchMyBrain Architecture Documentation
02 ACEathon 2025 Submission Log
