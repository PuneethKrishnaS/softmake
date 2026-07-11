# System Architecture Documentation

This monorepo layout separates concerns by splitting the user portal layers from backend APIs and isolating integrations into discrete packages.

```mermaid
graph TD
    Client[Web Browsers]
    Nginx[Nginx Reverse Proxy]
    
    Sub1[marketing.softmake.in]
    Sub2[student.softmake.in]
    Sub3[business.softmake.in]
    Sub4[admin.softmake.in]
    
    API[Django Daphne ASGI API]
    DB[(Neon PostgreSQL)]
    Redis[(Redis Channel Layer)]
    
    Client --> Nginx
    Nginx --> Sub1
    Nginx --> Sub2
    Nginx --> Sub3
    Nginx --> Sub4
    
    Sub2 --> API
    Sub3 --> API
    Sub4 --> API
    
    API --> DB
    API --> Redis
```

## Shared Packages (`packages/`)
- `@softmade/ui`: Shared React components (button, card, badge, progress, separator) built with Radix UI and Tailwind CSS v4.
- `@softmade/types`: Shared TypeScript interfaces representing models and API payloads.
- `@softmade/utils`: Common utility functions.

## Backend Modularity (`apps/backend/apps/`)
Django apps are decoupled and reference each other using lazy model strings rather than absolute imports to avoid circular reference loops:
- `accounts`: Authentication database tables and views.
- `students`: Student details, credentials, profile links.
- `projects`: Project stage trackers and repository links.
- `tickets`: Technical support tickets, dynamic ticket message rows, and custom WebSocket chat channels.
- `payments`: Payments log and balance status updates.
