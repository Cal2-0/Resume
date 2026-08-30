---
title: "Everyone Is Building Agents. But What Actually Makes One Useful?"
subtitle: "An investigation into why AI coding feels different now, and the gap between a demo and an actual tool."
date: "2026-08-20"
category: ["AI", "RESEARCH", "SYSTEMS"]
type: "DEEP DIVE"
tags: ["AI", "SYSTEMS"]
heroImage: "TECHNICAL_BLACK"
readingTime: "12 min"
---

I kept wondering why 90% of AI agent demos look absolutely incredible on Twitter but fail catastrophically when you try to use them for real work.

The current narrative is that if you give an LLM enough tools and a prompt that says "You are a 10x senior engineer," it will figure things out. But when I went down the rabbit hole of building autonomous systems, I found something entirely different. 

I tried building a simple coding agent. The "Hello World" demo worked perfectly. I felt like a genius. Then, during a real test, `npm install` failed with a peer dependency conflict. The agent panicked, entered an infinite loop, and started hallucinating linux commands that didn't exist to try and format my hard drive.

### THE RABBIT HOLE

What does it actually take for an agent to be useful?

It's not about the size of the foundation model. It's about context retention, error recovery, and state management. An agent that just runs a naive loop of `Thought -> Action -> Observation` is incredibly fragile. 

I saw this firsthand during the GitHub Copilot Dev Days. We were looking at how developers actually interact with AI tools. The friction doesn't come from the AI writing bad code; it comes from the AI having no memory of *why* it wrote the code five minutes ago.

### THE ENGINEERING

The breakthrough isn't in prompting; it's in the system architecture around the model.

1. **Deterministic Fallbacks:** When the agent fails to parse an output, it shouldn't try to guess. It should gracefully fail back to a deterministic script or simply ask the human. 
2. **Context Pruning:** If you feed a 100,000-token log into the agent, it loses the plot. The system needs a specialized sub-agent just to summarize the observation before feeding it back to the planner.
3. **Implicit Memory:** The agent needs a workspace. It needs to know that it created a file 10 steps ago without having to re-read the entire timeline.

### MY READ

We are currently treating agents like very smart but incredibly amnesiac interns. The architecture we actually need looks more like a distributed operating system, where the LLM is just the CPU, and we need to build the RAM, the filesystem, and the kernel scheduler around it.

This is the part that got me: the most impressive agents I've seen aren't the ones with the most verbose system prompts. They're the ones with the most robust error-handling pipelines. 

### WHAT I LEARNED

Next time you see a viral video of an AI agent building a fully functional SaaS platform in 10 seconds, look closely. Ask what happens when the API key expires, or when the linter throws a weird warning. That's where the illusion breaks, and that's exactly where the real engineering starts.
