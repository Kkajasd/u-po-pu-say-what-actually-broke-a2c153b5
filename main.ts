import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "The database is full, so your save went nowhere \u2014 not even to a better place. We're deleting our own logs to make room; try again in ten minutes.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
