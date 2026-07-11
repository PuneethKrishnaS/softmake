# Deployment & Production Guides

## Local Environments

### Backend Setup
1. Setup Python 3.11 virtual environment.
2. Install dependencies: `pip install -r requirements.txt`.
3. Re-generate local migrations: `python manage.py makemigrations`.
4. Apply migrations: `python manage.py migrate`.
5. Start local server: `python manage.py runserver` (or run ASGI Daphne: `daphne config.asgi:application`).

### Frontend Setup
1. Run `npm install` at the workspace root to symlink workspace dependencies.
2. Start development servers:
   - Student Portal: `npm run dev:student`
   - Admin Portal: `npm run dev:admin`
   - Marketing Landing page: `npm run dev:marketing`
   - Business Portal: `npm run dev:business`

---

## Production Environments
- **Backend API**: Deployed via Docker / ASGI Daphne containers behind Nginx reverse proxy.
- **Database**: Production scale Neon PostgreSQL / AWS RDS instances.
- **Caching**: Redis cluster for channels routing and database caches.
- **Frontend Static Assets**: Pre-built static pages deployed on Vercel, Netlify, or AWS CloudFront CDN.
