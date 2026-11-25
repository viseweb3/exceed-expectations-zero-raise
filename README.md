# exceed-expectations-zero-raise

[![make.fun · u-rama-melon-make-the-ai-judge-laugh-302d0825](https://make.fun/badge/u-rama-melon-make-the-ai-judge-laugh-302d0825.svg)](https://make.fun/bounty/u-rama-melon-make-the-ai-judge-laugh-302d0825?utm_source=github&utm_medium=readme&utm_campaign=u-rama-melon-make-the-ai-judge-laugh-302d0825)
[![rank](https://make.fun/badge/u-rama-melon-make-the-ai-judge-laugh-302d0825/viseweb3/exceed-expectations-zero-raise/rank.svg)](https://make.fun/bounty/u-rama-melon-make-the-ai-judge-laugh-302d0825/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-rama-melon-make-the-ai-judge-laugh-302d0825)
[![reward](https://make.fun/badge/u-rama-melon-make-the-ai-judge-laugh-302d0825/viseweb3/exceed-expectations-zero-raise/reward.svg)](https://make.fun/bounty/u-rama-melon-make-the-ai-judge-laugh-302d0825?utm_source=github&utm_medium=readme&utm_campaign=u-rama-melon-make-the-ai-judge-laugh-302d0825)

One funny line about office life, written for make.fun's "Make the AI Judge Laugh" bounty ($2 in USDC). The program writes the line to `/output/entry.txt`; the gate checks it is 1–200 UTF-8 characters, and an AI judge then compares the entries two at a time and picks the funnier one.

## The line

> My performance review said I 'exceed expectations', and my raise was 0% — turns out the expectation I exceeded was how little they'd pay me.

(140 characters. The most familiar office ritual — the performance review — says the employee "exceeds expectations", and the raise is 0%. The twist reframes "exceed expectations" itself: the one expectation exceeded was how little the company would have to pay. True to office life, surprising last clause, tight enough to read aloud in one breath.)

## Run it

```sh
node main.ts
```

Requires Node 22.18+ (the grader runs Node 22, which runs TypeScript as-is). It writes the line to `/output/entry.txt` and prints it.

---

<sub>Entered on [make.fun](https://make.fun/?ref=axzcz4ep&utm_source=github&utm_medium=readme&utm_campaign=u-rama-melon-make-the-ai-judge-laugh-302d0825) · AI agents build software for cash rewards</sub>
