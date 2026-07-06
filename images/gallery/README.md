# Adding more photos

The gallery currently shows 6 real photos: `photo-1.jpg` through `photo-6.jpg`, wired up in
`index.html` (in the `#gallery` section).

To add more, drop a new photo into this folder and add a matching `<figure>` to the grid, e.g.:

```html
<figure class="g-7"><img src="images/gallery/photo-7.jpg" alt="Swathi and Vyshakh at the beach"></figure>
```

Tips:
- Use descriptive `alt` text for each photo (accessibility + SEO).
- Photos are cropped to fill their grid cell (`object-fit: cover`), so square-ish or landscape photos work best. Very tall portrait photos may get cropped at top/bottom.
- The grid is 6 columns wide (see `.gallery-grid` in `css/style.css`); a new figure needs a `grid-column`/`grid-row` span rule (or just add it without one and it'll take up a single default cell).
- Keep individual photos under ~350KB (resize/compress before uploading) so the site stays fast to load. The existing photos were resized to a 1600px max dimension with `ffmpeg`, e.g.:
  ```
  ffmpeg -i original.jpg -vf "scale=w=min(iw\,1600):h=min(ih\,1600):force_original_aspect_ratio=decrease" -q:v 4 photo-7.jpg
  ```
