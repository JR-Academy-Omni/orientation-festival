# Brisbane branch recovery — 2026-10-18

Recovered the existing `codex/brisbane-sponsor-truth-2026-s2` activity branch (16 commits, tip `802af748804ea01285da828d1fb5cf318493d190`) into current source main `9d474b9fc6650aada3a6a7652e3ded6a121b65dd`.

The parent project records an unavailable jr-omni object `1d6f60985987fb46ac60cf1cb0abc9762a5cbb6f`. The extant jr-omni history contains a matching author, timestamp and English-handout change at `1d6f6098bbc8187a0a9cf8c258f654fa0d694f23`, along with the preceding Brisbane change sequence. That commit itself records unavailable activity object `802af7494b1c454e41c0c74c31b66d08f1e36477`. The actual activity branch above contains the corresponding original author/time/message and full editable files and outputs. Exact unavailable Git objects were not reconstructed; existing source and history were recovered instead. No assertion is made that the old and extant full SHAs are identical.

The merged source restores the English and Chinese A4 handouts, nine-page gift catalog, mobile poster series, partner campaign assets and sponsor/prize corrections. Ten conflicts were reviewed; Brisbane source facts and affected historical partner artifacts use the requested branch, including Airbotix Dyson attribution, merged Mobile Connect/Telstra and missing-data markers. Current unrelated campaign assets, current Sydney decks, repository policies and HTML-first printing support remain.

Validation: eight changed JavaScript modules passed node syntax checks; changed HTML/CSS local src/href/url dependencies exist; no conflict markers or diff whitespace errors. The existing English A4 PNG was opened and visually inspected. Existing PDFs and media were recovered unchanged, not regenerated or newly certified. This source recovery is not a new product Demo or publication acceptance. Historical model-produced artwork remains archival; no generation/provider call or posting was performed.

No build, full test, CI, deployment, gh-pages push or public publication was run. The activity repository has no workflow files or active Git hooks and no branch protection/rulesets at inspection. Merge commit uses [skip ci].
