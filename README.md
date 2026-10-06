# Creator Bridge Landing Page ⚡

A high-converting, mobile-first creator bridge landing page optimized for **Instagram** and **TikTok** in-app WebViews. Built with **React 19**, **Vite**, and **Tailwind CSS**.

---

## 📱 Features

- **Ultra-Fast Performance**: Under 1s load time, lightweight bundle (~76 kB gzipped JS, ~5 kB CSS), zero heavy dependencies.
- **In-App WebView Optimized**: Supports iOS and Android notch safe areas (`env(safe-area-inset-top)` & `bottom`), tap-highlight suppression, and 60fps animations.
- **Dual Dynamic View Architecture**:
  - **View 1 (Email Opt-in)**: Creator avatar with pulsing online badge, high-value "Free VIP Access" incentive card, client-side email validation, simulated API submission, and animated success confirmation card.
  - **View 2 (Social Directory)**: Filtered directory with featured glow-border cards, external link indicators, platform icons, and quick-toggle return button.
- **Configuration-Driven**: All text, social links, incentive copy, and creator handles live in a single config file: [`src/config/creator.js`](./src/config/creator.js). Non-developers can modify content in seconds without touching JSX.
- **Web Share Integration**: Native OS share sheet via Web Share API with clipboard copy fallback and toast confirmation.

---

## 🛠️ Project Structure

```
├── public/                 # Static assets and icons
├── src/
│   ├── config/
│   │   └── creator.js      # Centralized creator configuration (Edit copy & links here!)
│   ├── App.jsx             # Main interactive application logic and dual views
│   ├── index.css           # Tailwind base styles and WebView touch optimizations
│   └── main.jsx            # Application entry point
├── vercel.json             # Vercel SPA routing and build configuration
├── tailwind.config.js      # Tailwind theme, keyframes, and animations
└── package.json            # Project dependencies & scripts
```

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser (switch to Mobile Device emulation in DevTools for best view).

### 3. Production Build & Lint
```bash
npm run lint    # Zero-error validation
npm run build   # Production bundle to /dist
```

---

## ✍️ Customizing Creator Copy & Links

Open [`src/config/creator.js`](./src/config/creator.js) to customize:
- `profile`: Avatar image URL, name, handle, bio, verified status, and metrics.
- `leadMagnet`: Incentive title, perks/highlights, input placeholder, button copy, and success confirmation message.
- `directory`: Quick-return button text, section heading, and the array of links (with `featured: true` support).

---

## 📧 Connecting an Email Marketing Provider

Inside [`src/App.jsx`](./src/App.jsx#L67), the `handleEmailSubmit` function contains an asynchronous hook ready for your newsletter service:

### Example: Beehiiv API
```javascript
const response = await fetch(`https://api.beehiiv.com/v2/publications/${PUB_ID}/subscriptions`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_KEY}`
  },
  body: JSON.stringify({ email: trimmedEmail, send_welcome_email: true })
});
```

### Example: ConvertKit / Kit API
```javascript
const response = await fetch(`https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ api_key: API_KEY, email: trimmedEmail })
});
```

### Example: Zapier / Make / Webhook
```javascript
const response = await fetch('https://hooks.zapier.com/hooks/catch/.../.../', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email: trimmedEmail, source: 'instagram_bio' })
});
```

---

## 🌐 Deployment

### Vercel
```bash
npx vercel
```
Or connect your GitHub repository directly on [vercel.com](https://vercel.com).
The included [`vercel.json`](./vercel.json) automatically handles SPA routing and builds.

### Netlify / Cloudflare Pages
Run `npm run build` and publish the generated `dist/` directory.
