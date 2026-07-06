# Adding your own photos

`swathi.svg` and `vyshakh.svg` are placeholder circular avatars shown beside the names in the
hero section. To swap in real photos, drop square (or centered) photos into this folder and
update the `src` values in `index.html` (in the `.hero-names-row` markup near the top), e.g.:

```html
<img class="couple-avatar" src="images/couple/swathi.svg" alt="Swathi">
```

becomes:

```html
<img class="couple-avatar" src="images/couple/swathi.jpg" alt="Swathi">
```

Tips:
- Square photos work best — they're cropped to a circle with CSS (`object-fit: cover`), so
  off-center square crops may cut off part of the photo.
- Keep photos under ~300KB so the hero stays fast to load.
