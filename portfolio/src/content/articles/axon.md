---
title: "I Wanted to Know What a Wallet Actually Does"
subtitle: "Moving beyond static blockchain labels to behavioural forensics with AXON."
date: "2026-07-28"
category: ["BUILT", "SECURITY"]
type: "PROJECT STORY"
tags: ["PROJECT", "SYSTEMS"]
heroImage: "TECHNICAL_BLACK"
readingTime: "14 min"
---

500 addresses. Each forwarding immediately to 5 more addresses. 

On a standard spreadsheet of hex strings, it looks like absolute noise. But when you plot it on a graph, it forms a mathematically perfect fractal. That's the exact moment I realized the criminals are incredibly predictable. 

If you want to investigate illicit activity on a blockchain, the traditional approach is to look at labels.

"Address X belongs to Exchange Y."
"Address Z is a known mixing service."

But static labels are fundamentally flawed. They tell you what an address is *supposedly* associated with. They do not tell you what it *actually* does. I kept wondering why we treat blockchain forensics like reading an outdated phonebook instead of analyzing a living ecosystem.

### THE QUESTION

Could you build a system that identifies malicious actors purely by how they behave, even if their addresses have never been flagged before?

### THE RABBIT HOLE

This question led to the creation of AXON, a blockchain behavioural forensics platform.

I realized that capital movement has a rhythm. A retail investor trading on a weekend looks completely different from an automated MEV bot, which looks completely different from a laundering operation trying to peel stolen funds across a labyrinth of shell wallets.

### HOW IT WORKS

AXON doesn't rely on blacklists. It relies on a multi-agent architecture that analyzes fan-out topology and transaction rhythms.

1. **The Ingestion Engine:** It pulls massive amounts of raw transaction data from the chain.
2. **The Graph Visualisation:** Instead of staring at tables of hex strings, AXON builds a live network graph. You can physically see the relationships and flow of liquidity.
3. **Behavioural Clustering:** The agents analyze the *velocity* and *structure* of the capital movement. If Address A sends funds to 50 addresses simultaneously, and they all immediately forward the funds to a centralized exchange, AXON flags the *pattern*, not the address.

### THE WEIRD PART

The weirdest part of this whole project is how automated crime actually makes the criminals easier to catch.

When you visualize a laundering operation on a graph, it looks beautiful. They write scripts to automate the rapid dispersion of funds, and those scripts create rigid geometric shapes in the transaction graph. They are trying to hide in the noise, but their automation makes them stand out spectacularly. They can't fake human randomness at scale.

> [!TIP]
> The moment you stop looking at individual transactions and start looking at the *topology* of the network, threat intelligence becomes significantly easier.

### MY TAKE

I built AXON because I wanted to see the internet. Or at least, the financial shadow-layer of it.

What I learned is that security systems that rely on "known bads" (signatures, blacklists, static labels) will always be one step behind the adversary. The future of forensics is behavioural. You have to understand the rhythm of the machine you are analyzing.

### SOURCES
01 AXON Architecture Documentation
02 Research on Heuristic Clustering in UTXO Networks
