# Art slots

All art here is placeholder art and is easy to swap. Keep the file names.

| File | Used for |
|---|---|
| `hero.jpg` | Home hero fallback (1280 × 720 or larger, 16:9) |
| `hero-640/960/1280.avif`, `.webp` | Responsive hero variants, made from `hero.jpg` |
| `logo-mark.png` | Logo master (512 × 512, square) |
| `logo-mark.webp` | Header mark (128 × 128) |

The favicon set in `public/` (`favicon.ico`, `favicon-16.png`, `favicon-32.png`,
`apple-touch-icon.png`, `icon-192.png`, `icon-512.png`) is made from the logo master.

Hero composition: eclipse upper-left, storm centre, the Watcher and Blodmåne
upper-right, travellers bottom centre-left. The CSS in `src/styles/globals.css`
(`.hero__art img` object-position) keeps the eclipse and travellers in frame;
check it again if the composition changes.

## Remaking the variants (Python with Pillow 11 or later)

```python
from PIL import Image
im = Image.open('hero.jpg').convert('RGB')
for w in (640, 960, 1280):
    r = im.resize((w, round(w * im.height / im.width)), Image.LANCZOS)
    r.save(f'hero-{w}.webp', quality=80, method=6)
    r.save(f'hero-{w}.avif', quality=60)

logo = Image.open('logo-mark.png').convert('RGB')
logo.resize((128, 128), Image.LANCZOS).save('logo-mark.webp', quality=88, method=6)
for s, n in ((180, 'apple-touch-icon.png'), (192, 'icon-192.png'), (512, 'icon-512.png'),
             (32, 'favicon-32.png'), (16, 'favicon-16.png')):
    logo.resize((s, s), Image.LANCZOS).save(f'../../../public/{n}')
logo.resize((48, 48), Image.LANCZOS).save('../../../public/favicon.ico', sizes=[(16, 16), (32, 32), (48, 48)])
```
