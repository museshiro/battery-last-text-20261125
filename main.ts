import { mkdirSync, writeFileSync } from "node:fs";

const SETUP = "I saved my last 5% to send this.";
const PUNCH = "You spent all day charging the earbuds.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SETUP + " " + PUNCH);
