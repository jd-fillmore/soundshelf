![SoundShelf Overview](https://i.imgur.com/SoyUAcP.png)

# SoundShelf

A full-stack music album organization and listening-status tracker designed to centralize your collection with fast search, clean filtering, and simple album management.

## Tech Stack
- **Frontend**: React, TypeScript, Vite  
- **UI Framework**: Chakra UI  
- **State/Data**: TanStack Query, Axios  
- **Backend**: Node.js, Express  
- **Database**: PostgreSQL  
- **Styling & Tooling**: SCSS, Jest

## Key Features
- **Album CRUD** — Create, view, edit, and delete albums  
- **Listening Status Tracking** — *Will Listen*, *Listening*, *Listened*  
- **Fast Search** — Search by album name or artist  
- **Advanced Filters** — Genre + status filtering  
- **Responsive UI** — Clean and mobile-friendly  
- **Optimized Data Fetching** — Caching and performance via TanStack Query

## API Endpoints (Express)
- **GET /album** — List all albums  
- **GET /album/:id** — Get a single album  
- **POST /album** — Create a new album  
- **PUT /album/:id** — Update an album  
- **DELETE /album/:id** — Delete an album  
