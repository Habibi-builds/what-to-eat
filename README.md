# What to Eat?

A local-first Nigerian food planner for one person, built with Next.js, TypeScript, Tailwind CSS, Lucide and Recharts.

## Run

Requires Node.js 22.16+ and npm.

```sh
npm install
npm run dev
```

Open http://127.0.0.1:3000. For production: `npm run build` then `npm start`. Run the budget and recommendation tests with `npm test`.

On this Windows machine, you can also double-click `start-app.cmd` after dependencies are installed. It supports the bundled Node runtime supplied by Cursor when Node is not on PATH.

## Included

- 27 Nigerian recipes with ingredient quantities, editable illustrative prices and nutritional estimates.
- Budget-constrained daily and weekly plans, quick meals, replacements, favorites, recent eaten history and kitchen-aware ranking.
- An animated food wheel for one selected breakfast, lunch or dinner. Review its recipe, confirm the actual amount paid, and update the monthly balance. Updating a payment replaces only that meal slot. Older whole-day payments remain in Spending. Plans can also be saved without payment.
- Monthly budget, actual purchase tracking, daily and weekly totals and spending charts.
- Kitchen stock, a quantity-aware weekly shopping list, recipe details and manual meal selection.
- Local storage persistence, JSON backup export and automatic monthly budget rollover.
- Responsive desktop sidebar and mobile bottom navigation.

## Important details

All prices and nutrition are illustrative estimates, not live market quotes. Meal costs are preparation estimates and never create expenses. Purchases and kitchen stock are recorded independently. Cooking does not automatically consume inventory: update your quantities after cooking. Meal history updates when you choose “I ate this.” Suggestions stay within the full preparation-cost allowance even when ingredients are in stock; pantry ranking helps reuse ingredients without assuming they are free or unlimited. If an allowance cannot cover three meals, the app leaves unsupported slots empty.

Data stays in this browser on this device. No backend, external AI, sign-in or cross-device sync is required. Food imagery uses remote Unsplash illustrative photos, with CSS fallback backgrounds; these photos are not verified depictions of the named recipes. Dates and month boundaries use Africa/Lagos.
