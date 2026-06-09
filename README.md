# AlgDevs

**The Largest Curated Directory of Free Digital Resources for Algerians**

[![Live Site](https://img.shields.io/badge/Live-algdevs.marwan--naili.me-10b981)](https://algdevs.marwan-naili.me/)
[![GitHub](https://img.shields.io/badge/GitHub-marwangpt237/AlgDevz-181717)](https://github.com/marwangpt237/AlgDevz)

**4,000+ free tools, platforms, communities & learning resources** — bilingual (Arabic/English), ad-free, and built specifically for Algerian developers, freelancers, students, and digital entrepreneurs.

## Why AlgDevs?

- **Clear Positioning**: The largest *curated* directory of free digital resources for Algerians. No confusion, no noise.
- **Grouped for Usability**:
  - **Core Tools** (أدوات أساسية): Artificial Intelligence, Hosting & Cloud, Business & Payments, Reading
  - **Productivity & Utilities** (أدوات الإنتاجية): Adblock, Downloading
  - **Leisure & Lifestyle** (أسلوب حياة): Streaming, Gaming, Music
- **Trust & Curation Signals**: Verified badges, last-updated dates, Algeria availability metadata, difficulty levels, recommended use cases, and bilingual descriptions.
- **Powerful yet Simple**: Instant search across everything, tag filters, personal bookmarks with Markdown export, "Similar resources" recommendations, PWA support, dark/light themes, full RTL Arabic experience.
- **Nonprofit & Sustainable**: Focused on high-value curation that a solo founder can maintain long-term (no community management, no news feeds, no complex features).

**Live Site**: [https://algdevs.marwan-naili.me/](https://algdevs.marwan-naili.me/)

## Quick Start

Just visit the site and start exploring. Use the search bar (press `/` anywhere), browse by category in the sidebar, or filter within categories.

- Bookmark resources you like (persisted locally, exportable).
- Suggest new resources using the **+ Suggest** button (goes through a simple form with email fallback).

## Recent Improvements

The project recently adopted clearer positioning and UX improvements to better serve users while remaining sustainable for solo development:
- Removed the Torrenting category (brand trust and professionalism).
- Reorganized navigation and homepage to prioritize Core professional tools.
- Updated hero messaging to match the "Largest Curated Directory" positioning.
- Removed simulated/fake engagement metrics.
- Added Verified curation badges on qualifying resources.
- Enhanced Business & Payments section with production-grade, verified local Algerian resources (banking, payments, funding, startups, freelancing).

## Run Locally

**Prerequisites:** Node.js

```bash
git clone https://github.com/marwangpt237/AlgDevz.git
cd AlgDevz
npm install
npm run dev
```

The app runs at `http://localhost:3000`.

- `npm run build` — production build
- `npm run preview` — preview the build
- `npm run lint` — type check

**Note:** The `GEMINI_API_KEY` in `.env` (or `.env.local`) is only required when hosting via Google AI Studio. It is not needed for local development or the public site.

## Tech Stack

- React 19 + TypeScript
- Vite 6 + @tailwindcss/vite + Tailwind 4
- Lucide React icons
- Vite PWA (installable, offline-capable)
- Umami analytics (privacy-friendly)
- Pure client-side (no backend required)

## Contributing

AlgDevs is a nonprofit curation project.

- **Easiest**: Use the in-app Suggest modal on the live site.
- **GitHub**: Open an issue using the "Suggest a Resource" template (includes required bilingual descriptions).
- Data lives in `src/data/*.ts` (one file per category). Pull requests for high-quality, verified additions (especially with Algerian availability details) are welcome.

Please keep changes aligned with the focused "curated free directory" mission.

## Contact & Links

- **Live Site**: https://algdevs.marwan-naili.me/
- **GitHub**: https://github.com/marwangpt237/AlgDevz
- **About / Contact** (emails, Telegram @mr1labs, Algerian phone): Available on the site under the "About" section in the sidebar.

This is a solo-founder project focused on delivering maximum value with minimal ongoing operational burden.

## License

This project is open source. See the repository for license details.

---

*Built with care for the Algerian developer community. Updated June 2026 with strategic improvements for clarity, trust, and sustainability.*