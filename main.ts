// Make the AI Judge Laugh — make.fun bounty u-rama-melon-make-the-ai-judge-laugh-302d0825
//
// One funny line about office life. The program writes the line to
// /output/entry.txt; the gate checks it is 1-200 UTF-8 characters, and the
// judge model then compares it against the other entries two at a time.
//
// The joke: the performance review — the most familiar office ritual —
// says the employee "exceeds expectations", and the raise is 0%. The
// twist reframes "exceed expectations" itself: the one expectation
// exceeded was how little the company would have to pay. True to office
// life (reviews and raises), surprising last clause, tight, one breath.
// Revised: "apparently" cut for "turns out" — the punch lands faster,
// and the em-dash now sits right before the twist instead of mid-setup.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My performance review said I 'exceed expectations', and my raise was 0% — turns out the expectation I exceeded was how little they'd pay me.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(JOKE);
