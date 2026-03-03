# dao-toki — Chinese Wisdom in toki pona

Bilingual landing site (EN / TP) for the **Chinese Wisdom in toki pona** book series.

Live target domain: **https://dao-toki.abvx.xyz**

## What This Repo Contains

- Next.js App Router landing with localized routes:
  - `/en`
  - `/tp`
- Root redirect:
  - `/` -> `/en`
- Launch catalog:
  - Dao De Jing
  - Sunzi: The Art of War in toki pona
  - Mozi — Universal Love (FREE)
- Book detail pages:
  - `/en/books/dao-de-jing`, `/tp/books/dao-de-jing`
  - `/en/books/sunzi`, `/tp/books/sunzi`
  - `/en/books/mozi-universal-love`, `/tp/books/mozi-universal-love`

## Where To Edit Content

### Dictionaries (all UI copy, hero/why/faq/book text)

- `src/dictionaries/en.json`
- `src/dictionaries/tp.json`

### Books dataset (slugs, assets, CTAs, links, flags)

- `src/data/books.ts`

### Assets

- Book assets:
  - `public/assets/books/dao-de-jing/`
  - `public/assets/books/sunzi/`
  - `public/assets/books/mozi-universal-love/`
- Global OG/Twitter images:
  - `public/og-image.jpg`
  - `public/twitter-card.jpg`

## Local Development

```bash
npm install
npm run dev
```

Open:
- http://localhost:3000/en
- http://localhost:3000/tp

## Production Check

```bash
npm run build
```

## Tech Stack

- Next.js (App Router)
- TypeScript
- CSS Modules
- Dictionary-based i18n (EN / TP)

## License

MIT — see `LICENSE`.
