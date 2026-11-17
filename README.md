<p align="center">
  🕷️ 🌌
</p>

# dsh-theme-spiderverse

A Spider-Verse inspired wallpaper theme for DeepSeek Harness.

The wallpaper fills the main conversation area on the right; the strip on the
left is a transparent night sky with a subtle animated star field — twinkling
stars and the occasional shooting meteor. Comic halftone dots and slowly
drifting dust complete the look. All visuals are configurable from
**Settings → General**.

![Spider-Verse theme preview](static/preview.png)

## What it does

- **Full-bleed wallpaper** on the right of the sidebar, centered with `cover`.
  The left edge follows the sidebar width automatically.
- **Transparent left strip** tinted with the exact sky palette sampled from the
  wallpaper, so both sides read as one sky.
- **Animated star field**: dozens of softly twinkling stars, with bright stars
  pulsing a gentle halo. Meteors sweep across the entire theme every few
  seconds, leaving a warm glowing trail.
- **Comic halftone dots** and **floating dust particles** that drift upward and
  scatter gently when the pointer approaches.
- **Complete dark palette** mapped onto the harness tokens, so panels, bubbles,
  scrollbars and buttons blend with the artwork.

## Settings

| Setting | Description |
| --- | --- |
| Enabled | Turn the whole theme on/off |
| Floating dust | Toggle the dust particle layer |
| Particle density | 20%–100% |
| Drift speed | 10%–100% |

## Install

Search for `dsh-theme-spiderverse` in the plugin market and install it, or:

```sh
dsh plugin --profile <profile> add github:Cober1/dsh-theme-spiderverse
```

Themes are mutually exclusive: install it, then switch to it from the market's
**Themes** tab. No restart needed.

## Notes

- `prefers-reduced-motion` disables the animations automatically.
- The wallpaper image is a third-party Spider-Verse style artwork; please
  respect its copyright when redistributing.

MIT.
