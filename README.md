# Blissful Makeup Studio

A premium, editorial-style Next.js website for Blissful Essence Beauty Parlour
& Makeup Studio (Latur, Maharashtra).

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. Requires an internet connection on first build —
`next/font` fetches Cormorant Garamond, Manrope and DM Sans from Google Fonts.

## Replacing placeholder photography

Every image on the site is currently a lightweight generated SVG placeholder
in `/public/images/**`, so the project runs immediately without any real
photos. To swap in the client's actual photography:

1. Download the real images from the Google Photos album / Instagram / studio
   camera roll.
2. Save them into the matching folder: `public/images/hero`, `bridal`,
   `makeup`, `hairstyles`, `nails`, `studio`, `about`, `instagram`.
3. Update the `src` paths in `src/data/gallery.js` and `src/data/services.js`
   to point at the new files (`.jpg` / `.webp` recommended).

No other code changes are required — every image is already wired through
`next/image` with proper `sizes` and `alt` text.

## Editing business details

All studio information (phone, WhatsApp number, address, hours, Instagram
handle) lives in one place: `src/data/siteConfig.js`. Update the `whatsapp`
field with the studio's verified WhatsApp Business number (digits only,
country code first, no leading `+` or `0`) — it currently defaults to the
listed phone number in international format.

## Project structure

```
src/
  app/            Route pages (App Router)
  components/
    layout/       Navbar, Footer, floating call/WhatsApp/book bar
    home/         Homepage sections
    gallery/      Filterable masonry grid + lightbox
    booking/      Appointment request form
    ui/           Shared building blocks (Button, Reveal, SectionLabel...)
  data/           siteConfig, services, gallery, testimonials
public/
  images/         Placeholder photography, organized by category
```

## Notes

- Built with Next.js (App Router), JavaScript, Tailwind CSS, Framer Motion
  and Lucide React, per the project brief.
- Server Components are the default; `"use client"` is only added to
  components that need state, effects, or Framer Motion interactivity.
- The booking form currently confirms submission locally and hands the
  details to WhatsApp — wire it to a backend or form service (e.g. Formspree,
  a serverless function) when ready to collect real submissions.
