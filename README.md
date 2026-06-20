# Beauty Box — Premium Salon & Beauty Academy

Premium, responsive, high-end creative brochure website for **Beauty Box**, a beauty salon and professional cosmetic institute brand based in **Meerut, Uttar Pradesh, India**. Built using **React (v19)** with **Vite**, **TypeScript**, **Tailwind CSS**, and **Motion (Framer Motion v12)** animations.

## Key Design & Functional highlights

- **Premium Cinematics**: Features a highly immersive, slow-scrolling Ken Burns hero banner using a customized, ultra-premium generated photo asset.
- **Micro-interactions**: Clean headers with reactive underline effects, interactive scale multipliers on card hovers, and clean tab fades.
- **Before & After interactive slider**: An elegant, dynamic, touch-and-mouse supported drag handles comparing curly hair transformations, radiant bridal skin polishing, and high-glam cosmetic couture.
- **Academic Certifications Section**: Highlighting specialized vocational syllabus tracks (Haircuts, Advanced Skin, Bridal Makeup, Nail Artistry, Waxing) with certificate seals and student career testimony.
- **Reservation Engine**: Robust client-side validation that guarantees slot coordinates, blocks historic bookings, confirms timings are strictly between 10:00 AM – 9:00 PM, and simulates clean reservation receipts with dynamic Booking IDs and direct WhatsApp triggers.
- **Contact & Map integrations**: Includes fully dynamic action launchers connecting mobile callers with standard `tel:` dials and immediate floating `wa.me/` WhatsApp threads, together with encapsulated responsive Google Maps frames.

---

## Technical Stack & Optimization Specs

- **Framework**: React 19 + TypeScript (strict mode)
- **Styling**: Tailwind CSS (with highly customized font definitions for `Playfair Display` and `Sora` paired dynamically)
- **Fluid layouts**: Mobile-first fluid structures centered via responsive containers to maintain pixel-perfect readability across both Ultra-wide desktops and mobile touch devices.
- **Aesthetic standard alignment**: Hand-picked editorial palettes emphasizing Soft Ivory (`#FAF6F1`), Matte Black (`#1A1A1A`), and refined Rose Gold (`#B76E79`) details.

---

## 🚀 GitHub Pages Deployment Guide

To deploy this static application easily to **GitHub Pages**, follow these steps:

### 1. Modify Configuration (if using custom sub-paths)
If your repository is hosted as a sub-path on GitHub (e.g. `https://<your-username>.github.io/beauty-box/`), open `vite.config.ts` and declare your repository base path inside the config block:
```typescript
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/beauty-box/', // Set base folder to your github repository name
  // ... other configurations
});
```
*Note: If you are connecting a custom domain (e.g. `https://beautyboxmeerut.com`), keep base as `'/'`.*

### 2. Install GitHub Pages Deploy Tool
Run the following build package command to install the automated deployment helper:
```bash
npm install -D gh-pages
```

### 3. Add Predeploy and Deploy Scripts to `package.json`
Update the `"scripts"` declaration in your `package.json` with these commands:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

### 4. Deploy!
Run the deployment script. Node will automatically compile your project and push standard static distribution outputs from `/dist` to a secure `gh-pages` branch on GitHub:
```bash
npm run deploy
```

Now, in your GitHub Repository settings, scroll down to the **GitHub Pages** tab and select the `gh-pages` branch as your deployment source!

---

## 🌐 Connecting a Custom Domain

To link a custom premium domain name (e.g., `beautyboxmeerut.com`) with your GitHub Pages deployment:

1. **Add Domain in GitHub Settings**: In your GitHub Repository, go to `Settings` -> `Pages` -> Under `Custom Domain`, type your target domain name and click `Save`.
2. **Configure DNS Records with your Registrar**: Open your DNS provider dashboard (e.g., GoDaddy, Namecheap) and create these A-records directing to GitHub IPs:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
3. **Configure CNAME Record**: Create a CNAME record with Host `www` resolved to your default domain URL (e.g., `<username>.github.io`).
4. **Enable HTTPS**: Check the `Enforce HTTPS` box in your GitHub Repository Settings to secure browser payloads automatically!
