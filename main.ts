// A Childhood Memory — v2
//
// One sentence recalling the last night of summer: catching fireflies in
// a jam jar with holes poked in the lid, lying in the grass watching them
// blink until Mother called us in and the jar went dark in our hands.
// A different moment from v1 — outdoors, night, a small honest loss —
// the kind of evening a grown-up keeps in a tin of old photographs.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "On the last night of summer, we caught fireflies in a jam jar with holes poked in the lid, and I lay in the grass watching them blink until my mother called me in and the jar went dark in my hands.";

// Gate: UTF-8 text of 1 to 280 characters, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 280 || ENTRY.trim().length === 0) {
  throw new Error(`entry fails gate: ${ENTRY.length} characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// No trailing newline: the file holds exactly the entry text.
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
