import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "The database is full, so your save went nowhere \u2014 not even to a better place. We're deleting our own logs to make room; try again in ten minutes.";

// The line is a fixed literal — no network, no randomness, no input — so
// the sealed scorer always sees the same 145 characters on every run. The
// gate rejects a blank-only line and a trailing newline, which would count
// as an extra character in the scorer's byte read.
if (line.length < 1 || line.length > 200) {
  throw new Error(`entry must be 1–200 characters, got ${line.length}`);
}
if (!line.trim()) {
  throw new Error("entry must not be only whitespace");
}
if (line.endsWith("\n") || line.endsWith("\r")) {
  throw new Error("entry must not end with a newline");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
