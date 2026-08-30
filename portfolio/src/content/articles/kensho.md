---
title: "What Happens When the Person Who Knows Everything Leaves?"
subtitle: "Building a tacit knowledge capture system for the enterprise."
date: "2026-08-15"
category: ["RESEARCH", "AI", "SYSTEMS"]
type: "PROJECT STORY"
tags: ["AI", "SYSTEMS", "ENTERPRISE"]
heroImage: "TECHNICAL_BLACK"
readingTime: "10 min"
---

During my internship, there was a complete system outage. A database migration had locked up a critical table. Five engineers were frantically grepping through logs, staring at graphs, sweating. Then a senior engineer named Dave walked over, glanced at the terminal, typed one obscure SQL command, and the system instantly recovered. 

When I asked him how he knew to do that, he just shrugged. "The replica always lags on Tuesdays during the batch job. It's just a quirk."

Every company has a Dave. The engineer who knows exactly why a specific server is configured with a weird timeout, or the analyst who understands the unwritten, bizarre rules of a legacy client's API. 

When Dave leaves, that knowledge evaporates. It isn't in the documentation. It isn't in the code comments. It's strictly in his head. In academia, this is known as *tacit knowledge*. In the real world, it's known as a single point of failure.

I wanted to know if we could build a machine that captures this.

### THE QUESTION

How do you extract tacit knowledge from an organization without making it feel like a surveillance state or an administrative burden?

I initially thought we just needed a better wiki. But here's the truth: nobody writes in wikis. If you force engineers to document everything, they write terrible, useless documentation just to close the Jira ticket. The solution had to be passive, privacy-first, and highly contextual.

### HOW IT WORKS: THE KENSHŌ SYSTEM

I designed Kenshō as an active research project into enterprise knowledge capture.

The architecture relies on an entirely offline, privacy-first pipeline. Instead of sending sensitive internal communications to a third-party API (and terrifying the infosec team), Kenshō runs local LLaMA models on internal hardware.

1. **The Ingestion Layer:** It passively indexes internal communication (Slack threads, internal PR comments, ticket discussions) and extracts entities and decisions.
2. **The Vector Store:** Using PostgreSQL with pgvector and Elasticsearch, it builds a massive knowledge graph of *who* knows *what*.
3. **The Retrieval Engine:** When a junior engineer asks a question, the system doesn't just search a wiki for keywords. It searches the historical context of conversations and identifies the tacit patterns. It can literally tell you, "You should probably ask Sarah about this, she fought with this exact API two years ago."

### THE WEIRD PART

The ridiculous part of building this is how difficult it is to separate "actual knowledge" from "office chatter."

If two engineers are arguing in a Slack thread about a database migration, 90% of the conversation is noise, complaints, and memes. The remaining 10% contains a critical, unrecorded decision about why they didn't use MongoDB. Training a local LLM to extract only the *decision rationale* without losing the context was a massive prompt engineering and fine-tuning nightmare.

> [!TIP]
> You cannot just dump raw chat logs into an embedding model. The noise floor destroys the retrieval accuracy. You need an intermediate summarization step that explicitly asks the model: "What technical decision was finalized here, and why?"

### MY TAKE

The thing I find fascinating about Kenshō isn't just the AI. It's the human psychology. 

We build incredibly complex systems, but the documentation is always an afterthought. If we can build an agent that acts as a silent observer, continuously compiling the *rationale* behind our work without asking us to fill out a form, we might actually solve the bus factor in software engineering.

This is still active research, but the offline-first approach proves that enterprise AI doesn't have to mean handing all your proprietary data to OpenAI. Sometimes, the most valuable intelligence is already in your chat logs—you just need a system smart enough to read between the lines.

### SOURCES
01 Kenshō System Architecture Design Notes
02 Research on Tacit vs Explicit Knowledge Transfer
