# Healthy Peak Fitness — WordPress Setup

WordPress runs as a Docker Compose service alongside the Next.js frontend.

## Quick Setup (Dokploy)

1. In Dokploy, create a new **Docker Compose** project
2. Name it: `healthy-peak-fitness-wordpress`
3. Upload `docker-compose.yml` from this folder
4. Set environment variables:
   - `WP_DB_PASSWORD` = your secure DB password
   - `WP_ROOT_PASSWORD` = your root password
5. Set port to `9000` (internal: `80`)
6. Deploy

## After WordPress is Live

1. Visit `http://your-server:9000/wp-admin/install.php`
2. Complete the WordPress setup wizard
3. In WordPress, go to **Settings → Permalinks** → choose "Post name"
4. Note your WordPress URL and paste it in your Next.js `.env.local`:
   ```
   WP_API_URL=https://your-wordpress-site.com/wp-json/wp/v2
   NEXT_PUBLIC_SITE_URL=https://healthy-peak-fitness.com
   ```

## Recommended Plugins

- **Yoast SEO** — for meta tags and sitemap
- **WP Fastest Cache** — for performance
- **Contact Form 7** — for the contact form
- **Classic Editor** — stable editing experience

## Docker Commands (Local Dev)

```bash
cd wordpress
cp .env.example .env
# Edit .env with your passwords
docker-compose up -d
```

WordPress will be at: `http://localhost:9000`
Admin at: `http://localhost:9000/wp-admin`