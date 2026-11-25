import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINES: readonly [string, string] = [
  "Don't blow up at sixteen-year-old Sam in the driveway when he admits he scraped your bumper.",
  "He learns truth costs more than hiding, so when his driver gets drunk in November he gets in the car anyway instead of calling you.",
];

const ENTRY = `${LINES[0]}\n${LINES[1]}`;

function main(): void {
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
}

main();
