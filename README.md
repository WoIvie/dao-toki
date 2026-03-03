# dao-toki

Bilingual landing for **Chinese Wisdom in toki pona**.

- Domain: https://dao-toki.abvx.xyz
- Languages: `/en` and `/tp`
- Root redirect: `/` -> `/en`

## Launch Books

1. Dao De Jing
2. Sunzi: The Art of War in toki pona
3. Mozi — Universal Love (free)

## Architecture

This project uses the same landing architecture style as the `stoic-wisdom-series` codebase:
- Next.js App Router
- TypeScript
- CSS Modules
- dictionary-based EN/TP content

## Where To Edit

- Dictionaries:
  - `src/dictionaries/en.json`
  - `src/dictionaries/tp.json`
- Books dataset:
  - `src/data/books.ts`
- Book assets:
  - `public/<book>/assets` (in this repo: `public/assets/books/<book-slug>/`)

## Local Commands

```bash
npm install
npm run dev
npm run build
```
