# Swapping in real photos

The gallery currently shows 8 placeholder images: `placeholder-1.svg` through `placeholder-8.svg`.

To use real photos, replace the `src` in each `<figure>` inside `index.html` (in the `#gallery` section), for example:

```html
<figure class="g-1"><img src="images/gallery/placeholder-1.svg" alt="Photo coming soon"></figure>
```

becomes:

```html
<figure class="g-1"><img src="images/gallery/photo-1.jpg" alt="Swathi and Vyshakh at the beach"></figure>
```

Tips:
- Drop your photo files into this folder (`images/gallery/`).
- Use descriptive `alt` text for each photo (accessibility + SEO).
- Photos are cropped to fill their grid cell (`object-fit: cover`), so square-ish or landscape photos work best. Very tall portrait photos may get cropped at top/bottom.
- You can add more than 8 photos — just copy a `<figure class="g-2">...</figure>` block and add it to the grid; it'll flow into the next row automatically.
- Keep individual photos under ~500KB (resize/compress before uploading) so the site stays fast to load.
