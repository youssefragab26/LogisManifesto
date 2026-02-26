## Port Logistics – Vessel & Berth UI

Modern Next.js UI for exploring vessel information and berth capabilities in a port logistics context.

### Tech stack
- **Framework**: Next.js 16 (App Router)
- **Language**: React 19 / JavaScript
- **Styling**: Tailwind CSS 4 (via `@import "tailwindcss"` in `globals.css`)
- **Fonts**: Geist Sans & Geist Mono

### Features
- **Vessel information flow**
  - App-style layout with sticky top navigation (`Navbar`).
  - `VesselInfoMinimal` form for entering vessel name, IMO, type, LOA, draft, cargo, ETA, and last port.
  - Live summary panel (`informationCard`) that updates as you type.

- **Berth overview**
  - `BerthCard` component with app-like card styling.
  - Berths page listing berths with capacity and cargo constraints.

### Getting started
1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run the dev server**
   ```bash
   npm run dev
   ```

3. **Open the app**
   - Visit `http://localhost:3000` for the **Vessel** screen.
   - Visit `http://localhost:3000/berths` for the **Berths** screen.

### Project structure (src)
- `src/app/layout.js` – Root layout, global styles, and navbar.
- `src/app/page.js` – Home route rendering `VesselInfoMinimal`.
- `src/app/berths/page.js` – Berths view.
- `src/components/Navbar.js` – Top navigation bar.
- `src/components/VesselInfoMinimal.js` – Main vessel form UI.
- `src/components/informationCard.js` – Live vessel summary card.
- `src/components/berthCard.js` – Berth summary card.
- `src/Data/Vessels.js` – Sample vessel data.
- `src/Data/Berths.js` – Sample berth data.

### Notes
- This project is focused on **UI only** – no real backend or API calls.
- You can wire real data into the components by passing props from pages or hooks.

