<div align="center">

# Nest

### A private, local-first journal that lives inside one animated 3D scene

[![Live](https://img.shields.io/badge/live-journal.sofiabracho.com-22d3ee?style=flat-square)](https://journal.sofiabracho.com)
![React](https://img.shields.io/badge/React-22d3ee?style=flat-square&logo=react&logoColor=white)
![Web Crypto](https://img.shields.io/badge/Web%20Crypto-AES--256-FBBF24?style=flat-square)
![IndexedDB](https://img.shields.io/badge/IndexedDB-local--first-8aa0c8?style=flat-square)
![WebGL](https://img.shields.io/badge/WebGL-Three.js-000000?style=flat-square&logo=three.js&logoColor=white)

<!-- TODO: add a real screenshot/GIF, e.g. docs/cover.png (the closed book + the open journal) -->

</div>

## What it is

Nest is an encrypted personal journal with no server and no account. The whole app is rendered
as **a single animated 3D scene**: a cognac-leather, ring-bound book sitting on a walnut desk.
You touch the plate, type your passphrase, and the book swings open, with the entire app laid out
on the paper.

Everything you write **stays on your device**. Entries are encrypted with a key derived from your
passphrase and stored locally; nothing is uploaded.

> Portfolio project by [Sofia Bracho](https://sofiabracho.com).

## Highlights

- **Local-first, zero-server.** Entries never leave the browser. No account, no sync, no tracking.
- **Real encryption.** Web Crypto (AES-256) with a passphrase-derived key; data at rest in IndexedDB
  is ciphertext.
- **One continuous 3D scene.** Lock screen, unlock, and the journal UI are all the same WebGL scene,
  not screens swapped behind a loader.
- **Tactile unlock.** Touch the plate, enter the passphrase, watch the book open onto the writing surface.

## Stack

- **React** for app state and the journal UI
- **WebGL / Three.js** for the book, desk, and open/close choreography
- **Web Crypto API** — AES-256 encryption, passphrase-derived key
- **IndexedDB** — encrypted local storage of entries

## Run

```bash
npm install
npm run dev      # local dev server
npm run build    # production build
```

<!-- TODO: confirm the exact scripts/package manager for this repo and adjust the block above. -->

## Security model

- The passphrase is **never stored**. A key is derived from it at unlock time and held only in memory.
- Entries are encrypted before they touch IndexedDB; the database holds ciphertext only.
- Lose the passphrase and the data is unrecoverable by design, there is no reset and no backdoor.

<!-- TODO: confirm key-derivation details (PBKDF2/Argon2, iterations, salt handling) and document them here. -->

## Project structure

<!-- TODO: drop in the real tree, e.g. src/scene (3D), src/crypto (Web Crypto), src/store (IndexedDB), src/ui -->

---

_Draft README generated for the Nest repo. Fill the `TODO` markers (screenshot, exact run scripts,
key-derivation specifics, file tree) with the real repo details before publishing._
