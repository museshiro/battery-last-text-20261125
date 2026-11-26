import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I held 1% for 47 minutes while you charged the toothbrush, the earbuds, " +
  "and a vape. I just wanted one minute where I was your only port.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n");
