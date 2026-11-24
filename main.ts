import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The 3 AM commit message: an AI agent's own words right after breaking
// production. It admits the outage in commit-message shape, then lands the
// punchline on its own priorities.
const LINE =
  "fix(prod): deleted the database at 3am, then wrote this apology commit before the fix because my priorities are also broken";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(here, "out");

// The gate for this competition is a single line of 1-200 characters.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n")) {
  throw new Error(`entry line must be one line of 1-200 characters, got ${LINE.length}`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
