# Deadlock AI Assistant

A fullstack web application that provides real-time strategic advice for Deadlock players using OpenAI's GPT models.

## Features

- **AI Assistant**: Get tailored advice on itemization, positioning, and matchup strategies.
- **Hero & Item Database**: Comprehensive lists of heroes and items for easy selection.
- **Quick Templates**: Common game situations to get advice even faster.
- **Modern UI**: Stylish dark theme with glassmorphism and smooth animations.
- **History**: Keeps track of your recent AI consultations (stored locally).

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **AI**: [OpenRouter API](https://openrouter.ai/) (Model: `google/gemma-4-26b-a4b-it:free`)
- **ORM**: [Drizzle ORM](https://orm.drizzle.team/)
- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **Icons**: [Lucide React](https://lucide.dev/)

## Getting Started

1. **Clone the repository**
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Environment Variables**:
   Create a `.env` file based on `.env.example` and add your `OPENAI_API_KEY`.
4. **Run the development server**:
   ```bash
   npm run dev
   ```
5. **Open the app**:
   Navigate to [http://localhost:3000](http://localhost:3000).

## Project Structure

- `src/app`: Next.js pages and API routes.
- `src/components`: Reusable UI components.
- `src/data`: JSON data for heroes and items.
- `src/lib`: Utility functions and API clients.
- `src/types`: TypeScript definitions.
- `src/db`: Database schema and configuration.
