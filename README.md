# JiSi Play Zone — Kuppam

Mobile-first website for an indoor soft play zone with birthday party packages.
Built with Next.js 15 (App Router), React 19, TypeScript and Tailwind CSS 4.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Where to change things

| What | Where |
| --- | --- |
| Phone, WhatsApp, email, address, social links, opening hours | `src/data/site.ts` (`BUSINESS`, `OPENING_HOURS`) |
| Play prices, socks/parent rules | `src/data/site.ts` (`PRICING`, `RULES`) |
| Attractions (add `image` to show a photo on a card) | `src/data/site.ts` (`ATTRACTIONS`) |
| Memberships, birthday packages | `src/data/site.ts` (`MEMBERSHIPS`, `BIRTHDAY_PACKAGES`) |
| Hero slides, gallery, testimonials, FAQs | `src/data/site.ts` |
| Photos | `public/images/...` (use WebP, ~1600px wide) |

All "Book" buttons open WhatsApp with a ready-made message.
