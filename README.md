# Healthy Peak Fitness

A bold, clean fitness blog built with **Next.js 16** (App Router, Turbopack) + **WordPress REST API** as headless CMS.

## Stack

- **Frontend:** Next.js 16, React 19, TypeScript, Tailwind CSS 4
- **Package Manager:** Bun
- **CMS:** WordPress (headless, via REST API)
- **Hosting:** Dokploy (VPS)

## Getting Started

```bash
# Install dependencies
bun install

# Run dev server
bun run dev

# Build for production
bun run build
```

## WordPress Setup

1. Set your WordPress site URL in `.env.local`:
   ```
   WP_API_URL=https://your-wordpress-site.com/wp-json/wp/v2
   ```
2. The site works without WordPress — it'll show skeleton loaders until connected.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, featured post, latest posts |
| `/blog` | Blog listing with sidebar |
| `/blog/[slug]` | Individual blog post |
| `/about` | About page |
| `/contact` | Contact form |
| `/sitemap.xml` | Auto-generated sitemap |
| `/robots.txt` | Robots.txt |

## Deploy

**Dokploy (recommended):**
1. Push to GitHub
2. Connect repo to Dokploy as a Node.js application
3. Set build command: `bun run build`
4. Set output directory: `.next`
5. Add domain and enable Let's Encrypt SSL

**Vercel:**
```bash
bun run build
vercel deploy
```

## Tech Notes

- Static generation with ISR (1-hour revalidation)
- WordPress `_embed` parameter used for featured images + categories
- Graceful fallback when WordPress is unreachable
- Responsive, mobile-first design
- Auto-generated sitemap from WordPress posts