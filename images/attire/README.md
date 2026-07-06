# Adding real outfit reference photos

The Outfit Guide section currently shows two placeholders: `wedding-outfit.svg` and
`reception-outfit.svg`.

To swap in real photos, drop your images into this folder and update the `src` in
`index.html` (in the `#attire` section), for example:

```html
<img class="attire-img" src="images/attire/wedding-outfit.svg" alt="Wedding outfit reference">
```

becomes:

```html
<img class="attire-img" src="images/attire/wedding-outfit.jpg" alt="Wedding outfit reference">
```

Tips:
- Portrait photos (taller than wide) work best — the card is sized for a 3:4 ratio.
- Keep photos under ~350KB (resize/compress before uploading) so the site stays fast to load,
  e.g. with `ffmpeg`:
  ```
  ffmpeg -i original.jpg -vf "scale=w=min(iw\,1200):h=min(ih\,1200):force_original_aspect_ratio=decrease" -q:v 4 wedding-outfit.jpg
  ```
