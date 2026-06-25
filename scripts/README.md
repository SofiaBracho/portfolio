# Demo capture (GIFs + screenshots)

Assisted recorders for the portfolio work cards. **You** drive the browser and
perform each flow (including logins) by hand — no credentials are ever stored or
read by these scripts. They just record and encode.

## One-time setup

```bash
cd portfolio/scripts
npm install            # installs Playwright
npx playwright install chromium   # if it didn't auto-install
# ffmpeg must be on PATH (already installed on this machine)
```

## Record the GIFs

```bash
npm run rec:nest      # unlock diary + write an entry + browse the views
npm run rec:piensa    # student logs in + opens a live class
npm run rec:nexus     # log in + run a diagnosis
```

Each command:
1. Opens a headed Chromium recording at 1000×640.
2. You perform the flow.
3. Press **Enter** in the terminal to stop.
4. An optimized looping GIF is written to `../img/projects/<name>.gif`.

Tips:
- Keep flows tight (8–15s) so files stay small.
- Smaller file: re-run with `--width 820`.
- Different target: `node record-demo.mjs nexus --url http://localhost:5173`.

## Grab the new PIENSA still

The current PIENSA card image is the legacy PHP version. Replace it with a real
shot of the new Angular app:

```bash
node screenshot.mjs piensa     # log in, open dashboard/live class, Enter -> img/projects/piensa.jpg
```

## Wiring

The work cards already point at:
- `img/projects/nexus.png`, `img/projects/nest.jpg`, `img/projects/piensa.jpg` (still images)

To show the GIFs instead of the stills, tell me and I'll switch the `<img src>`
in `index.html` to the `.gif` files (with a static poster fallback for reduced-motion).
