# efficacy, effectiveness & efficiency in softwares

12 June 2026 (Source: Claude)

- Efficacy — Does the algorithm/solution correctly solve the problem in theory or Proof of concept or unit tests pass?
- Effectiveness — Does it actually work in production? (Handles edge cases, real data, real users)
- Efficiency — How well does it use resources — CPU, memory, time, network?

Example (a search feature):

- Efficacy: Returns correct results in a controlled test.
- Effectiveness: Still returns correct results with 10M records, concurrent users, messy input.
- Efficiency: Does it query in O(log n) or O(n²)? RAM usage? Response time at scale?

