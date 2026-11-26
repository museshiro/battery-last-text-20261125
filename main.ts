import { mkdirSync, writeFileSync } from "node:fs";

// One line for the charger that kept it waiting all day.
const message =
  "I held 1% for 47 minutes while you charged the toothbrush, " +
  "the earbuds, and a vape. I just wanted one minute where I was your only port.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", `${message}\n`);
