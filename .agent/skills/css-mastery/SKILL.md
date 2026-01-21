---
name: css-mastery
description: Comprehensive guide for the project's visual design, focusing on Tailwind CSS v4 and Premium Glassmorphism aesthetics. Use when styling components, managing themes, or fixing UI issues.
---

# CSS Mastery (Tailwind CSS v4 & Glassmorphism)

This skill provides the guidelines and technical details for maintaining and evolving the visual design of the `vue-tailwind-template` project. The project uses **Tailwind CSS v4** and a strictly defined **Glassmorphism** aesthetic.

## 🎨 Core Design Principles

1.  **Premium Aesthetics**: Every UI element must wow the user. Use vibrant colors, smooth gradients, and subtle animations.
2.  **Glassmorphism**: Use semi-transparent backgrounds with backdrop stickiness to create depth.
    *   *Standard Glass*: `bg-white/10 backdrop-blur-md border border-white/20 shadow-xl`
    *   *Dark Glass*: `bg-black/30 backdrop-blur-lg border border-white/10`
3.  **Tailwind CSS v4**: This project runs on Tailwind v4. **Configuration is done in CSS**, not JS.

## 🛠 Tech Stack & Setup

*   **Framework**: Tailwind CSS v4 (configured via `src/index.css`)
*   **Fonts**:
    *   `font-main`: Zen Maru Gothic
    *   `font-title`: ChenYuluoyan
    *   `font-pearl`: FakePearl (Primary aesthetic font)
*   **Theme Colors**:
    *   `primary`: #ff9671 (Peach)

## ⚠️ Tailwind v4 Specifics

Tailwind v4 introduces breaking changes and new patterns.

### 1. Configuration in CSS
We do NOT use `tailwind.config.js` for theme extensions. We use `@theme` in `src/index.css`:

```css
@import "tailwindcss";

@theme {
  --color-primary: #ff9671;
  --font-main: "Zen Maru Gothic", sans-serif;
  /* ... other theme tokens ... */
}
```

### 2. Renamed Utilities
*   **Gradients**: `bg-gradient-to-r` is now **`bg-linear-to-r`**.
*   **Shadows**: Default shadows are more refined.
*   **Opacity**: Color opacity modifiers like `bg-red-500/50` work natively with CSS variable definition.

### 3. Native CSS Variables
Tailwind v4 embraces native CSS variables. If you need a dynamic value, bind it to a style property/CSS variable on the element.

## 🖌 Common Patterns

### Glass Card
```html
<div class="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-xl p-6 transition-all hover:bg-white/20">
  <!-- Content -->
</div>
```

### Premium Button
```html
<button class="rounded-xl bg-linear-to-r from-primary to-orange-400 px-6 py-2 text-white shadow-lg transition-transform hover:scale-105 active:scale-95">
  Action
</button>
```

### Typography
Always use the custom font families for headings and distinct UI text.
```html
<h1 class="font-title text-4xl text-gray-800">Page Title</h1>
<p class="font-main text-gray-600">Body text...</p>
```

## 🚀 Workflow for Styling

1.  **Check `src/index.css`** for existing tokens before adding arbitrary values.
2.  **Use `bg-linear-to-*`** for all gradients.
3.  **Validate on Mobile**: Glassmorphism can sometimes cause readability issues on small screens. Ensure contrast is sufficient.
4.  **No Placeholders**: Never use gray box placeholders. Use `generate_image` or high-quality solid colors if assets are missing.
