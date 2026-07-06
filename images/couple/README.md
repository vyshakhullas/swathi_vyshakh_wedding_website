# Couple photos

`swathi.jpg` and `vyshakh.jpg` are the real circular avatars shown beside the names in the hero
section (resized to 400x400 and compressed from the originals with `ffmpeg`).

To swap in new photos, replace the files in this folder (keeping the same names) or update the
`src` values in `index.html` (in the `.hero-names-row` markup near the top), e.g.:

```html
<img class="couple-avatar" src="images/couple/swathi.jpg" alt="Swathi">
```

Tips:
- Square photos work best — they're cropped to a circle with CSS (`object-fit: cover`), so
  off-center square crops may cut off part of the photo.
- Keep photos under ~300KB so the hero stays fast to load.
