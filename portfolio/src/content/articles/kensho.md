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

Every company has that one person. The engineer who knows exactly why a specific server is configured with a weird timeout, or the analyst who understands the unwritten rules of a client's API. 

When that person leaves, the knowledge disappears. It isn't in the documentation. It isn't in the code comments. It's in their head. This is known as *tacit knowledge*.

I wanted to know if we could build a machine that captures this.

### THE QUESTION

How do you extract tacit knowledge from an organization without making it feel like a surveillance state or an administrative burden?

I initially thought we just needed a better wiki. But nobody writes in wikis. If you force engineers to document everything, they write terrible documentation just to close the Jira ticket. The solution had to be passive, privacy-first, and highly contextual.

### HOW IT WORKS: THE KENSHŌ SYSTEM

I designed Kenshō as an active research project into enterprise knowledge capture.

The architecture relies on an entirely offline, privacy-first pipeline. Instead of sending sensitive internal communications to a third-party API, Kenshō runs local LLaMA models.

1. **The Ingestion Layer:** It passively indexes internal communication (Slack, internal PRs, ticket discussions) and extracts entities and decisions.
2. **The Vector Store:** Using PostgreSQL with pgvector and Elasticsearch (ES), it builds a graph of *who* knows *what*.
3. **The Retrieval Engine:** When a junior engineer asks a question, the system doesn't just search a wiki. It searches the historical context of conversations and identifies the tacit patterns.

### THE WEIRD PART

The ridiculous part is how difficult it is to separate "actual knowledge" from "office chatter."

If two engineers are arguing about a database migration, 90% of the conversation is noise. The remaining 10% contains a critical decision about why they didn't use MongoDB. Training a local LLM to extract only the *decision rationale* without losing the context was a massive prompt engineering and fine-tuning problem.

> [!TIP]
> You cannot just dump raw chat logs into an embedding model. The noise floor destroys the retrieval accuracy. You need an intermediate summarization step that explicitly asks the model: "What technical decision was finalized here?"

### MY TAKE

The thing I find fascinating about Kenshō isn't just the AI. It's the human psychology. 

We build incredibly complex systems, but the documentation is always an afterthought. If we can build an agent that acts as a silent observer, continuously compiling the *rationale* behind our work, we might actually solve the bus factor in software engineering.

This is still active research, but the offline-first approach proves that enterprise AI doesn't have to mean handing all your data to OpenAI.

### SOURCES
01 Kenshō System Architecture Design Notes
02 Research on Tacit vs Explicit Knowledge Transfer
