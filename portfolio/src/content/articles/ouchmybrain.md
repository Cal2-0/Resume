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

We had 24 hours. At hour 3, we still didn't have a working OCR pipeline.

I was rage-studying for my signal processing finals the week prior, staring at a static PDF, wishing the document would just talk back to me. Taking notes is essentially a one-way street. You put information into a system, and it just sits there, completely lifeless, waiting for you to re-read it. 

I kept wondering: what if the notes were active? What if the system could read what you wrote and then interrogate you about it?

### THE QUESTION

How do you transform passive documentation into an active learning environment without just generating generic, boring flashcards?

By 3am at the hackathon, the team dynamics were fraying. The OCR API we were using decided to randomly rotate every image 90 degrees, turning our text extraction into absolute garbage. We were running on energy drinks and spite. But around 4am, the LLM finally started talking back.

### HOW IT WORKS: THE PROFESSOR MODE

OuchMyBrain.io was built to solve this exact frustration. It takes raw text inputs (OCR scans, typed notes, PDFs) and processes them through an LLM pipeline. But instead of just summarizing the text—which is what every other AI tool does—it creates an adaptive interrogator. 

We called it "Professor Mode" at 5am because the tone of the AI was so relentlessly pedantic it actually felt like an angry tenured professor grilling you on your thesis.

1. **Extraction:** It pulls the core concepts and relationships from the text.
2. **Generation:** It uses OpenAI to generate targeted questions based on the complexity of the material. If you get it wrong, it doesn't just give you the answer. It asks a leading question.
3. **Voice Integration:** It uses ElevenLabs to actually speak to you, making the study session feel like a grueling oral exam rather than a written test.

### MY TAKE

The most interesting part of building educational AI isn't the model itself. It's the UX. 

If a system feels like a generic quiz app, it's boring. If it feels like an actual professor pushing you to explain *why* something works, it's engaging. OuchMyBrain proved to me that the interface layer of AI—the personality, the friction, the voice—is just as important as the backend prompt.

### SOURCES
01 OuchMyBrain Architecture Documentation
02 ACEathon 2025 Submission Log
