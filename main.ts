import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINES: readonly [string, string] = [
  'Don\'t call Uncle Carl\'s power of attorney "just routine" when Grandma hesitates at her kitchen table after Grandpa\'s funeral.',
  "She signs on your word, and within six months he drains her savings, sells that house, and leaves her in a county nursing home.",
];

const ENTRY = `${LINES[0]}\n${LINES[1]}`;

function assertValidEntry(text: string): void {
  const lines = text.split("\n");
  if (lines.length !== 2 || !lines[0].trim() || !lines[1].trim()) {
    throw new Error(`Expected exactly 2 non-empty lines, got ${lines.length}`);
  }
  const chars = [...text].length;
  if (chars < 1 || chars > 280) {
    throw new Error(`Entry length ${chars} exceeds 1..280 character gate`);
  }
}

function main(): void {
  assertValidEntry(ENTRY);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
}

main();
