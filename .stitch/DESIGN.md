---
name: Cyber-Thai Street Food
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#38393a'
  surface-container-lowest: '#0c0f0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#282a2b'
  surface-container-highest: '#333535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#ccc4ce'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#958e98'
  outline-variant: '#4a454d'
  surface-tint: '#d4beeb'
  primary: '#d4beeb'
  on-primary: '#39294d'
  primary-container: '#1a0a2d'
  on-primary-container: '#89769f'
  inverse-primary: '#69577e'
  secondary: '#ffb2bd'
  on-secondary: '#670024'
  secondary-container: '#ff4e7a'
  on-secondary-container: '#5a001f'
  tertiary: '#f1c100'
  on-tertiary: '#3d2f00'
  tertiary-container: '#d0a600'
  on-tertiary-container: '#4f3d00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#eedbff'
  primary-fixed-dim: '#d4beeb'
  on-primary-fixed: '#231437'
  on-primary-fixed-variant: '#503f65'
  secondary-fixed: '#ffd9dd'
  secondary-fixed-dim: '#ffb2bd'
  on-secondary-fixed: '#400013'
  on-secondary-fixed-variant: '#900036'
  tertiary-fixed: '#ffe08b'
  tertiary-fixed-dim: '#f1c100'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#584400'
  background: '#121414'
  on-background: '#e2e2e2'
  surface-variant: '#333535'
  neon-green: '#00E676'
  surface-purple: '#2A0E47'
  deep-black: '#110620'
  muted-lavender: '#B39DDB'
typography:
  headline-xl:
    fontFamily: Montserrat
    fontSize: 3.5rem
    fontWeight: '900'
    lineHeight: '1.1'
    letterSpacing: 1px
  headline-lg:
    fontFamily: Montserrat
    fontSize: 2.8rem
    fontWeight: '900'
    lineHeight: '1.2'
    letterSpacing: 2px
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 2.2rem
    fontWeight: '900'
    lineHeight: '1.2'
  marketing-header:
    fontFamily: Montserrat
    fontSize: 4rem
    fontWeight: '900'
    lineHeight: '1.0'
    letterSpacing: -1px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 0.85rem
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 3px
  price-display:
    fontFamily: Space Grotesk
    fontSize: 1.5rem
    fontWeight: '800'
    lineHeight: '1.0'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  grid-margin: 1.25rem
  grid-gutter: 1rem
  section-gap-desktop: 5rem
  section-gap-mobile: 3.5rem
  bottom-nav-height: 72px
---

## Brand & Style

This design system embodies a **Cyber-Thai Street Food** aesthetic—a high-energy fusion where traditional Thai motifs collide with a modern arcade/gaming atmosphere. The visual narrative is "Late-Night Bangkok meets Akihabara."

The style leverages **Neon-Glassmorphic Cards**. It uses deep, near-black purples to ground the UI, allowing vibrant neon accents (pink, yellow, green) to pop.

## Key Design Patterns & Tokens
1. **Oreo Series Carousel**: Horizontal swipe container (`flex overflow-x-auto snap-x snap-mandatory`) on mobile, 3-column grid on desktop.
2. **3-Step Collapsible Ramen Builder**: Step 1 Noodles, Step 2 Proteins, Step 3 Veggies. Collapsed by default.
3. **Appetizers Section**: Dedicated section for steamed buns.
4. **Mobile Bottom Navigation**: Floating elevated center "ORDER NOW" CTA button.
5. **Dynamic Open Status**: Live badge based on Central Time operating hours.
