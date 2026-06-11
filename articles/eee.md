# Efficacy, Effectiveness & Efficiency in Softwares

12 June 2026 (Source: [Claude Private](https://claude.ai/chat/4fb2eb18-88e5-4925-b3a9-896a1a981c5d))

- Efficacy — Does the algorithm/solution correctly solve the problem in theory or Proof of concept or unit tests pass?
- Effectiveness — Does it actually work in production? (Handles edge cases, real data, real users)
- Efficiency — How well does it use resources — CPU, memory, time, network?

Example (a search feature):

- Efficacy: Returns correct results in a controlled test.
- Effectiveness: Still returns correct results with 10M records, concurrent users, messy input.
- Efficiency: Does it query in O(log n) or O(n²)? RAM usage? Response time at scale?

In SE, you often nail efficacy in dev, lose effectiveness in prod, and only optimize efficiency at scale. That's basically the engineering lifecycle.