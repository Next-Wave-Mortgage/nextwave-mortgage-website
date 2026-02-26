/**
 * NextWave Mortgage Brand Kit
 * Extracted from the live HubSpot site (nextwavemortgage.com).
 * Single source of truth for colors, fonts, and spacing tokens.
 */

export const brand = {
  colors: {
    /** Deep teal — headings, nav text, footer bg */
    navy: "#2B5464",
    /** Bright teal — CTAs, accent links, highlights */
    teal: "#1C96C5",
    /** Light teal tint — hero/section backgrounds */
    tealLight: "#E5F7FD",
    /** Near-black — body text fallback */
    dark: "#141413",
    /** Warm off-white — page/section backgrounds */
    cream: "#FAF9F5",
    /** White */
    white: "#FFFFFF",
    /** Dark overlay */
    overlay: "rgba(0, 0, 0, 0.7)",
    /** Subtle border */
    border: "rgba(31, 30, 29, 0.3)",
    /** Muted dark — dark sections, footer text area */
    charcoal: "#30302E",
  },

  fonts: {
    /** Primary typeface — headings + body */
    heading: "Montserrat",
    body: "Montserrat",
    fallback: "system-ui, -apple-system, sans-serif",
  },

  typography: {
    h1: { size: "50px", weight: "800", lineHeight: "1.15" },
    h2: { size: "38px", weight: "700", lineHeight: "1.2" },
    h3: { size: "28px", weight: "700", lineHeight: "1.3" },
    body: { size: "19px", weight: "400", lineHeight: "1.6" },
    small: { size: "15px", weight: "400", lineHeight: "1.5" },
    nav: { size: "15px", weight: "600", lineHeight: "1" },
  },

  radius: {
    button: "10px",
    card: "12px",
    pill: "9999px",
  },

  spacing: {
    /** Max content width */
    container: "1280px",
    /** Standard section padding */
    sectionY: "80px",
    /** Standard horizontal padding */
    pageX: "24px",
  },
} as const;
