// Office Joke Open — writes a single-line office joke to /output/entry.txt
// Deterministic: the joke is a constant in this file; same output every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const JOKE =
  "IT fixed the office printer: it no longer jams — it just emails the whole office a 40-page report explaining why it jammed.";

const OUT = "/output/entry.txt";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, JOKE + "\n", "utf8");
console.log(`Wrote ${JOKE.length} characters to ${OUT}`);
