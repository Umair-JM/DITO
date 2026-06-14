# Cosmic SDK 🌌 — `cosmic-sdk.js`

The standalone evaluation engine behind **DITO (Drop In The Ocean)**. It scores a
technical-innovation summary (≤ 400 words) **entirely offline** — no API key, no
network, no build step. Drop the single file into any project and call it.

This is the *small, local, compute-efficient "understanding" layer*: a curated
**concept lexicon** + an **IDF-weighted domain matcher** + **five interpretable
scoring axes** + a **multi-scale civilizational timeline**. It understands whole
*ideas* (e.g. "time travel" → Physics), not just stray keywords.

---

## Install / include

**Browser**
```html
<script src="cosmic-sdk.js"></script>
<script>
  const sdk = new CosmicSDK();
  const result = sdk.analyzeInnovation("A laptop that helps time travel");
  console.log(result.cosmicProgressScore, result.disciplineBreakdown);
</script>
```

**Node.js / CommonJS**
```js
const CosmicSDK = require("./cosmic-sdk.js");
const sdk = new CosmicSDK();
const result = sdk.analyzeInnovation("A CRISPR gene therapy delivered by an mRNA nanoparticle");
console.log(result);
```

No dependencies. The file exports as a CommonJS module **and** attaches
`window.CosmicSDK` in the browser, so the same file works in both.

---

## API

### `new CosmicSDK()`
Constructs the engine (loads the domain database + concept lexicon).

### `sdk.getWordCount(text) → number`
Word count, for enforcing the 400-word limit before calling `analyzeInnovation`.

### `sdk.analyzeInnovation(text) → object`
Evaluates the summary. Throws if the text exceeds **400 words**. Returns:

| Field | Type | Meaning |
|---|---|---|
| `cosmicProgressScore` | `number` 0–1000 | Honest composite impact score |
| `universeControlPercentage` | `number` | Illustrative Kardashev-III readout |
| `axes` | `object` | The five scoring axes (see below), plus `axes.pct` rounded to 0–100 |
| `scale` | `object` | `civIndex`, neighbouring milestones (`below`/`above`) and `anchors` (× the stone axe / wheel / transistor / today's AI) |
| `disciplineBreakdown` | `array` | Per-discipline `{ id, name, rawScore, percentage }` across 10 divisions |
| `matchedDomains` | `array` | Up to 15 relevant domains/concepts `{ name, discipline, score, weight, isConcept }` |
| `totalMatchedCount` | `number` | Total domains matched |
| `timeline` | `array` | Milestone nodes + the user's placement (`isUserInnovation`) |
| `motivationText` | `string` | Caveman-voice ("Manj") feedback referencing the idea |

### The five axes (each `0..1`, and `*.pct` as `0..100`)
- **specificity** — density of genuinely technical, distinctive vocabulary.
- **depth** — how strongly the text engages its core field.
- **breadth** — how many disciplines it genuinely spans.
- **novelty** — reach toward frontier / ambitious concepts.
- **coherence** — anti-keyword-stuffing gate (real prose vs. buzzword salad).

Final score ≈ `(0.30·specificity + 0.27·depth + 0.18·breadth + 0.25·novelty) · coherence²`.

---

## How it stays honest

- **IDF rarity weighting** — generic words (`system`, `studies`) barely count; rare,
  distinctive ones (`entanglement`, `perovskite`) count a lot.
- **Word-boundary matching** — `"ion"` never matches inside *"station"*.
- **Generic-only discount** — a domain whose *only* evidence is a common word (e.g.
  `"time"` lighting up every *"Real-Time …"* CS domain) is heavily discounted.
- **Concept lexicon** — multi-word ideas are mapped to the *correct* disciplines, so a
  time-travel device reads as **Physics**, not Computer Science.
- **Coherence² gate** — a high-diversity spray of frontier words still collapses,
  because it has no real sentence structure.

> The capability `index` values on the civilizational scale are an **illustrative
> heuristic**, not measured physical constants. A single idea is, honestly, a drop
> in the ocean — which is the whole point.

---

## Regenerating the domain database
The bundled domain list is produced by [`../generate_domains.js`](../generate_domains.js).
Run `node ../generate_domains.js` to rebuild it. The concept lexicon is hand-curated
inside `cosmic-sdk.js` (the `this.concepts` array) and is easy to extend — add an
entry with `phrases`, target `disciplines` (weighted shares), related `terms`, an
impact `weight`, and a `frontier` flag.

## License
MIT — see [`../LICENSE`](../LICENSE).
