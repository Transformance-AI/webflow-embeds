(()=>{var l=`/*! tailwindcss v4.1.11 | MIT License | https://tailwindcss.com */
@layer properties;
@layer theme, base, components, utilities;
@layer theme {
  :root, :host {
    --color-amber-100: oklch(96.2% 0.059 95.617);
    --color-amber-200: oklch(92.4% 0.12 95.746);
    --color-amber-700: oklch(55.5% 0.163 48.998);
    --color-emerald-50: oklch(97.9% 0.021 166.113);
    --color-emerald-100: oklch(95% 0.052 163.051);
    --color-emerald-200: oklch(90.5% 0.093 164.15);
    --color-emerald-300: oklch(84.5% 0.143 164.978);
    --color-emerald-500: oklch(69.6% 0.17 162.48);
    --color-emerald-600: oklch(59.6% 0.145 163.225);
    --color-emerald-700: oklch(50.8% 0.118 165.612);
    --color-emerald-800: oklch(43.2% 0.095 166.913);
    --color-gray-50: oklch(98.5% 0.002 247.839);
    --color-gray-100: oklch(96.7% 0.003 264.542);
    --color-gray-200: oklch(92.8% 0.006 264.531);
    --color-gray-300: oklch(87.2% 0.01 258.338);
    --color-gray-400: oklch(70.7% 0.022 261.325);
    --color-gray-500: oklch(55.1% 0.027 264.364);
    --color-gray-600: oklch(44.6% 0.03 256.802);
    --color-gray-700: oklch(37.3% 0.034 259.733);
    --color-gray-900: oklch(21% 0.034 264.665);
    --color-white: #fff;
    --spacing: 0.25rem;
    --container-md: 28rem;
    --text-xs: 0.75rem;
    --text-xs--line-height: calc(1 / 0.75);
    --text-sm: 0.875rem;
    --text-sm--line-height: calc(1.25 / 0.875);
    --text-base: 1rem;
    --text-base--line-height: calc(1.5 / 1);
    --text-xl: 1.25rem;
    --text-xl--line-height: calc(1.75 / 1.25);
    --text-2xl: 1.5rem;
    --text-2xl--line-height: calc(2 / 1.5);
    --text-3xl: 1.875rem;
    --text-3xl--line-height: calc(2.25 / 1.875);
    --text-5xl: 3rem;
    --text-5xl--line-height: 1;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
    --tracking-wider: 0.05em;
    --leading-tight: 1.25;
    --leading-relaxed: 1.625;
    --radius-md: 0.375rem;
    --radius-lg: 0.5rem;
    --radius-xl: 0.75rem;
    --radius-2xl: 1rem;
    --ease-out: cubic-bezier(0, 0, 0.2, 1);
    --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
    --default-transition-duration: 150ms;
    --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
}
@layer utilities {
  .pointer-events-none {
    pointer-events: none;
  }
  .absolute {
    position: absolute;
  }
  .fixed {
    position: fixed;
  }
  .relative {
    position: relative;
  }
  .static {
    position: static;
  }
  .inset-0 {
    inset: calc(var(--spacing) * 0);
  }
  .top-0 {
    top: calc(var(--spacing) * 0);
  }
  .right-0 {
    right: calc(var(--spacing) * 0);
  }
  .left-0 {
    left: calc(var(--spacing) * 0);
  }
  .left-3 {
    left: calc(var(--spacing) * 3);
  }
  .z-10 {
    z-index: 10;
  }
  .mx-auto {
    margin-inline: auto;
  }
  .mt-1\\.5 {
    margin-top: calc(var(--spacing) * 1.5);
  }
  .mt-2 {
    margin-top: calc(var(--spacing) * 2);
  }
  .mt-4 {
    margin-top: calc(var(--spacing) * 4);
  }
  .mt-5 {
    margin-top: calc(var(--spacing) * 5);
  }
  .mb-1 {
    margin-bottom: calc(var(--spacing) * 1);
  }
  .mb-3 {
    margin-bottom: calc(var(--spacing) * 3);
  }
  .mb-4 {
    margin-bottom: calc(var(--spacing) * 4);
  }
  .mb-6 {
    margin-bottom: calc(var(--spacing) * 6);
  }
  .ml-auto {
    margin-left: auto;
  }
  .block {
    display: block;
  }
  .flex {
    display: flex;
  }
  .hidden {
    display: none;
  }
  .inline {
    display: inline;
  }
  .inline-block {
    display: inline-block;
  }
  .inline-flex {
    display: inline-flex;
  }
  .table {
    display: table;
  }
  .h-1\\.5 {
    height: calc(var(--spacing) * 1.5);
  }
  .h-2 {
    height: calc(var(--spacing) * 2);
  }
  .h-3 {
    height: calc(var(--spacing) * 3);
  }
  .h-3\\.5 {
    height: calc(var(--spacing) * 3.5);
  }
  .h-4 {
    height: calc(var(--spacing) * 4);
  }
  .h-5 {
    height: calc(var(--spacing) * 5);
  }
  .h-6 {
    height: calc(var(--spacing) * 6);
  }
  .h-7 {
    height: calc(var(--spacing) * 7);
  }
  .h-8 {
    height: calc(var(--spacing) * 8);
  }
  .h-9 {
    height: calc(var(--spacing) * 9);
  }
  .h-10 {
    height: calc(var(--spacing) * 10);
  }
  .h-\\[3px\\] {
    height: 3px;
  }
  .h-\\[22px\\] {
    height: 22px;
  }
  .h-\\[24px\\] {
    height: 24px;
  }
  .h-\\[26px\\] {
    height: 26px;
  }
  .h-\\[30px\\] {
    height: 30px;
  }
  .h-\\[40px\\] {
    height: 40px;
  }
  .h-\\[60px\\] {
    height: 60px;
  }
  .h-\\[70px\\] {
    height: 70px;
  }
  .h-auto {
    height: auto;
  }
  .h-full {
    height: 100%;
  }
  .min-h-screen {
    min-height: 100vh;
  }
  .w-1\\.5 {
    width: calc(var(--spacing) * 1.5);
  }
  .w-2 {
    width: calc(var(--spacing) * 2);
  }
  .w-3 {
    width: calc(var(--spacing) * 3);
  }
  .w-3\\.5 {
    width: calc(var(--spacing) * 3.5);
  }
  .w-4 {
    width: calc(var(--spacing) * 4);
  }
  .w-5 {
    width: calc(var(--spacing) * 5);
  }
  .w-6 {
    width: calc(var(--spacing) * 6);
  }
  .w-7 {
    width: calc(var(--spacing) * 7);
  }
  .w-8 {
    width: calc(var(--spacing) * 8);
  }
  .w-9 {
    width: calc(var(--spacing) * 9);
  }
  .w-10 {
    width: calc(var(--spacing) * 10);
  }
  .w-\\[60px\\] {
    width: 60px;
  }
  .w-\\[70px\\] {
    width: 70px;
  }
  .w-\\[76px\\] {
    width: 76px;
  }
  .w-\\[92px\\] {
    width: 92px;
  }
  .w-\\[130px\\] {
    width: 130px;
  }
  .w-\\[132px\\] {
    width: 132px;
  }
  .w-\\[158px\\] {
    width: 158px;
  }
  .w-\\[240px\\] {
    width: 240px;
  }
  .w-\\[280px\\] {
    width: 280px;
  }
  .w-\\[560px\\] {
    width: 560px;
  }
  .w-\\[600px\\] {
    width: 600px;
  }
  .w-\\[620px\\] {
    width: 620px;
  }
  .w-auto {
    width: auto;
  }
  .max-w-\\[1300px\\] {
    max-width: 1300px;
  }
  .max-w-md {
    max-width: var(--container-md);
  }
  .min-w-0 {
    min-width: calc(var(--spacing) * 0);
  }
  .flex-1 {
    flex: 1;
  }
  .flex-shrink-0 {
    flex-shrink: 0;
  }
  .shrink-0 {
    flex-shrink: 0;
  }
  .transform {
    transform: var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,);
  }
  .items-center {
    align-items: center;
  }
  .items-end {
    align-items: flex-end;
  }
  .justify-between {
    justify-content: space-between;
  }
  .justify-center {
    justify-content: center;
  }
  .gap-1 {
    gap: calc(var(--spacing) * 1);
  }
  .gap-1\\.5 {
    gap: calc(var(--spacing) * 1.5);
  }
  .gap-2 {
    gap: calc(var(--spacing) * 2);
  }
  .gap-2\\.5 {
    gap: calc(var(--spacing) * 2.5);
  }
  .gap-3 {
    gap: calc(var(--spacing) * 3);
  }
  .gap-16 {
    gap: calc(var(--spacing) * 16);
  }
  .gap-20 {
    gap: calc(var(--spacing) * 20);
  }
  .space-y-2\\.5 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 2.5) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 2.5) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
  .truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .overflow-hidden {
    overflow: hidden;
  }
  .rounded-2xl {
    border-radius: var(--radius-2xl);
  }
  .rounded-full {
    border-radius: calc(infinity * 1px);
  }
  .rounded-lg {
    border-radius: var(--radius-lg);
  }
  .rounded-md {
    border-radius: var(--radius-md);
  }
  .rounded-xl {
    border-radius: var(--radius-xl);
  }
  .border {
    border-style: var(--tw-border-style);
    border-width: 1px;
  }
  .border-2 {
    border-style: var(--tw-border-style);
    border-width: 2px;
  }
  .border-t {
    border-top-style: var(--tw-border-style);
    border-top-width: 1px;
  }
  .border-b {
    border-bottom-style: var(--tw-border-style);
    border-bottom-width: 1px;
  }
  .border-emerald-200 {
    border-color: var(--color-emerald-200);
  }
  .border-emerald-300 {
    border-color: var(--color-emerald-300);
  }
  .border-gray-100 {
    border-color: var(--color-gray-100);
  }
  .border-gray-100\\/80 {
    border-color: color-mix(in srgb, oklch(96.7% 0.003 264.542) 80%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-gray-100) 80%, transparent);
    }
  }
  .border-gray-200 {
    border-color: var(--color-gray-200);
  }
  .bg-amber-100 {
    background-color: var(--color-amber-100);
  }
  .bg-emerald-50 {
    background-color: var(--color-emerald-50);
  }
  .bg-emerald-100 {
    background-color: var(--color-emerald-100);
  }
  .bg-emerald-500 {
    background-color: var(--color-emerald-500);
  }
  .bg-emerald-600 {
    background-color: var(--color-emerald-600);
  }
  .bg-gray-50\\/70 {
    background-color: color-mix(in srgb, oklch(98.5% 0.002 247.839) 70%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-gray-50) 70%, transparent);
    }
  }
  .bg-gray-50\\/80 {
    background-color: color-mix(in srgb, oklch(98.5% 0.002 247.839) 80%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-gray-50) 80%, transparent);
    }
  }
  .bg-gray-100 {
    background-color: var(--color-gray-100);
  }
  .bg-gray-200 {
    background-color: var(--color-gray-200);
  }
  .bg-white {
    background-color: var(--color-white);
  }
  .object-contain {
    object-fit: contain;
  }
  .p-3 {
    padding: calc(var(--spacing) * 3);
  }
  .p-6 {
    padding: calc(var(--spacing) * 6);
  }
  .px-1 {
    padding-inline: calc(var(--spacing) * 1);
  }
  .px-1\\.5 {
    padding-inline: calc(var(--spacing) * 1.5);
  }
  .px-2 {
    padding-inline: calc(var(--spacing) * 2);
  }
  .px-2\\.5 {
    padding-inline: calc(var(--spacing) * 2.5);
  }
  .px-3 {
    padding-inline: calc(var(--spacing) * 3);
  }
  .px-3\\.5 {
    padding-inline: calc(var(--spacing) * 3.5);
  }
  .px-4 {
    padding-inline: calc(var(--spacing) * 4);
  }
  .px-16 {
    padding-inline: calc(var(--spacing) * 16);
  }
  .py-0\\.5 {
    padding-block: calc(var(--spacing) * 0.5);
  }
  .py-1 {
    padding-block: calc(var(--spacing) * 1);
  }
  .py-2\\.5 {
    padding-block: calc(var(--spacing) * 2.5);
  }
  .py-3 {
    padding-block: calc(var(--spacing) * 3);
  }
  .py-4 {
    padding-block: calc(var(--spacing) * 4);
  }
  .py-20 {
    padding-block: calc(var(--spacing) * 20);
  }
  .pt-5 {
    padding-top: calc(var(--spacing) * 5);
  }
  .pr-2\\.5 {
    padding-right: calc(var(--spacing) * 2.5);
  }
  .pb-2 {
    padding-bottom: calc(var(--spacing) * 2);
  }
  .pb-3\\.5 {
    padding-bottom: calc(var(--spacing) * 3.5);
  }
  .pl-1\\.5 {
    padding-left: calc(var(--spacing) * 1.5);
  }
  .text-right {
    text-align: right;
  }
  .font-mono {
    font-family: var(--font-mono);
  }
  .text-2xl {
    font-size: var(--text-2xl);
    line-height: var(--tw-leading, var(--text-2xl--line-height));
  }
  .text-3xl {
    font-size: var(--text-3xl);
    line-height: var(--tw-leading, var(--text-3xl--line-height));
  }
  .text-5xl {
    font-size: var(--text-5xl);
    line-height: var(--tw-leading, var(--text-5xl--line-height));
  }
  .text-base {
    font-size: var(--text-base);
    line-height: var(--tw-leading, var(--text-base--line-height));
  }
  .text-sm {
    font-size: var(--text-sm);
    line-height: var(--tw-leading, var(--text-sm--line-height));
  }
  .text-xl {
    font-size: var(--text-xl);
    line-height: var(--tw-leading, var(--text-xl--line-height));
  }
  .text-xs {
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
  }
  .text-\\[10px\\] {
    font-size: 10px;
  }
  .leading-\\[22px\\] {
    --tw-leading: 22px;
    line-height: 22px;
  }
  .leading-\\[24px\\] {
    --tw-leading: 24px;
    line-height: 24px;
  }
  .leading-\\[30px\\] {
    --tw-leading: 30px;
    line-height: 30px;
  }
  .leading-none {
    --tw-leading: 1;
    line-height: 1;
  }
  .leading-relaxed {
    --tw-leading: var(--leading-relaxed);
    line-height: var(--leading-relaxed);
  }
  .leading-tight {
    --tw-leading: var(--leading-tight);
    line-height: var(--leading-tight);
  }
  .font-bold {
    --tw-font-weight: var(--font-weight-bold);
    font-weight: var(--font-weight-bold);
  }
  .font-semibold {
    --tw-font-weight: var(--font-weight-semibold);
    font-weight: var(--font-weight-semibold);
  }
  .tracking-wider {
    --tw-tracking: var(--tracking-wider);
    letter-spacing: var(--tracking-wider);
  }
  .whitespace-nowrap {
    white-space: nowrap;
  }
  .text-amber-700 {
    color: var(--color-amber-700);
  }
  .text-emerald-600 {
    color: var(--color-emerald-600);
  }
  .text-emerald-700 {
    color: var(--color-emerald-700);
  }
  .text-emerald-700\\/70 {
    color: color-mix(in srgb, oklch(50.8% 0.118 165.612) 70%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-emerald-700) 70%, transparent);
    }
  }
  .text-emerald-800 {
    color: var(--color-emerald-800);
  }
  .text-gray-300 {
    color: var(--color-gray-300);
  }
  .text-gray-400 {
    color: var(--color-gray-400);
  }
  .text-gray-500 {
    color: var(--color-gray-500);
  }
  .text-gray-600 {
    color: var(--color-gray-600);
  }
  .text-gray-700 {
    color: var(--color-gray-700);
  }
  .text-gray-900 {
    color: var(--color-gray-900);
  }
  .text-white {
    color: var(--color-white);
  }
  .uppercase {
    text-transform: uppercase;
  }
  .tabular-nums {
    --tw-numeric-spacing: tabular-nums;
    font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);
  }
  .shadow-lg {
    --tw-shadow: 0 10px 15px -3px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 4px 6px -4px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-sm {
    --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-xl {
    --tw-shadow: 0 20px 25px -5px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 8px 10px -6px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .ring {
    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .ring-1 {
    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .ring-amber-200 {
    --tw-ring-color: var(--color-amber-200);
  }
  .ring-emerald-200 {
    --tw-ring-color: var(--color-emerald-200);
  }
  .transition {
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter, display, visibility, content-visibility, overlay, pointer-events;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .ease-in-out {
    --tw-ease: var(--ease-in-out);
    transition-timing-function: var(--ease-in-out);
  }
  .ease-out {
    --tw-ease: var(--ease-out);
    transition-timing-function: var(--ease-out);
  }
}
@property --tw-rotate-x {
  syntax: "*";
  inherits: false;
}
@property --tw-rotate-y {
  syntax: "*";
  inherits: false;
}
@property --tw-rotate-z {
  syntax: "*";
  inherits: false;
}
@property --tw-skew-x {
  syntax: "*";
  inherits: false;
}
@property --tw-skew-y {
  syntax: "*";
  inherits: false;
}
@property --tw-space-y-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-border-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}
@property --tw-leading {
  syntax: "*";
  inherits: false;
}
@property --tw-font-weight {
  syntax: "*";
  inherits: false;
}
@property --tw-tracking {
  syntax: "*";
  inherits: false;
}
@property --tw-ordinal {
  syntax: "*";
  inherits: false;
}
@property --tw-slashed-zero {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-figure {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-spacing {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-fraction {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-inset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-ring-inset {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-offset-width {
  syntax: "<length>";
  inherits: false;
  initial-value: 0px;
}
@property --tw-ring-offset-color {
  syntax: "*";
  inherits: false;
  initial-value: #fff;
}
@property --tw-ring-offset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-ease {
  syntax: "*";
  inherits: false;
}
@layer properties {
  @supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))) {
    *, ::before, ::after, ::backdrop {
      --tw-rotate-x: initial;
      --tw-rotate-y: initial;
      --tw-rotate-z: initial;
      --tw-skew-x: initial;
      --tw-skew-y: initial;
      --tw-space-y-reverse: 0;
      --tw-border-style: solid;
      --tw-leading: initial;
      --tw-font-weight: initial;
      --tw-tracking: initial;
      --tw-ordinal: initial;
      --tw-slashed-zero: initial;
      --tw-numeric-figure: initial;
      --tw-numeric-spacing: initial;
      --tw-numeric-fraction: initial;
      --tw-shadow: 0 0 #0000;
      --tw-shadow-color: initial;
      --tw-shadow-alpha: 100%;
      --tw-inset-shadow: 0 0 #0000;
      --tw-inset-shadow-color: initial;
      --tw-inset-shadow-alpha: 100%;
      --tw-ring-color: initial;
      --tw-ring-shadow: 0 0 #0000;
      --tw-inset-ring-color: initial;
      --tw-inset-ring-shadow: 0 0 #0000;
      --tw-ring-inset: initial;
      --tw-ring-offset-width: 0px;
      --tw-ring-offset-color: #fff;
      --tw-ring-offset-shadow: 0 0 #0000;
      --tw-ease: initial;
    }
  }
}
@layer base {
  *,*::before,*::after{box-sizing:border-box;border:0 solid;margin:0;padding:0}
  svg{display:block}
  img{max-width:100%;height:auto}
}
:host{all:initial;display:block;contain:layout style;
  font-family:var(--font-sans);font-size:16px;line-height:1.5;
  -webkit-font-smoothing:antialiased;color:var(--color-gray-900);text-align:left}

/* Below the two-column breakpoint the copy stacks above the card, and the card
   keeps its intrinsic width inside a swipeable rail. It is drawn at fixed pixel
   geometry, so scaling it to a phone would put 14px body text at 8px. A rail
   keeps it legible and is the same pattern any wide table uses. */
@media (max-width: 1023px) {
  .tf-wrap{padding-left:1.25rem;padding-right:1.25rem;padding-top:3rem;padding-bottom:3rem}
  .tf-row{flex-direction:column;align-items:stretch;gap:2rem}
  .tf-row > div:first-child{max-width:none}
  .tf-row > div:first-child h2{font-size:2rem;line-height:1.15}
  .tf-row > div:first-child p{font-size:1.0625rem}
  .tf-card{overflow-x:auto;overflow-y:hidden;max-width:100%;width:auto;
    -webkit-overflow-scrolling:touch;scrollbar-width:none;
    padding-bottom:1.25rem}
  .tf-card::-webkit-scrollbar{display:none}
  .tf-card > *{width:var(--card-w,640px);flex:none}
  /* Do NOT re-width the card here. Its internals are absolutely positioned
     against a fixed inner width, so squeezing it to a round number silently
     truncates every lane inside. The rail scrolls; the card keeps its size. */
}
`;var c={"clearmatch-loop":`<style>
        @keyframes calRing  { 0%{transform:scale(.9);opacity:.5;} 70%{transform:scale(1.5);opacity:0;} 100%{transform:scale(1.5);opacity:0;} }
        @keyframes calPulse { 0%,100%{opacity:1;} 50%{opacity:.3;} }

        
        @keyframes calSig0 {
          0%,3%       { opacity:0; transform: translateX(-10px); }
          9%,100% { opacity:1; transform: translateX(0); }
        }
        @keyframes calLead0 {
          0%,5%    { stroke-dashoffset:100; opacity:0; }
          7%       { opacity:1; }
          14%,100% { stroke-dashoffset:0; opacity:1; }
        }
        @keyframes calSig1 {
          0%,7%       { opacity:0; transform: translateX(-10px); }
          13%,100% { opacity:1; transform: translateX(0); }
        }
        @keyframes calLead1 {
          0%,9%    { stroke-dashoffset:100; opacity:0; }
          11%       { opacity:1; }
          18%,100% { stroke-dashoffset:0; opacity:1; }
        }
        @keyframes calSig2 {
          0%,11%       { opacity:0; transform: translateX(-10px); }
          17%,100% { opacity:1; transform: translateX(0); }
        }
        @keyframes calLead2 {
          0%,13%    { stroke-dashoffset:100; opacity:0; }
          15%       { opacity:1; }
          22%,100% { stroke-dashoffset:0; opacity:1; }
        }
        @keyframes calSig3 {
          0%,15%       { opacity:0; transform: translateX(-10px); }
          21%,100% { opacity:1; transform: translateX(0); }
        }
        @keyframes calLead3 {
          0%,17%    { stroke-dashoffset:100; opacity:0; }
          19%       { opacity:1; }
          26%,100% { stroke-dashoffset:0; opacity:1; }
        }

        /* each match lands, already tied together */
        
        @keyframes calRow0 {
          0%,26%       { opacity:0; transform: translateX(12px); background:#ffffff; border-color:#e5e7eb; }
          31%      { opacity:1; transform:none; background:#f0fdf4; border-color:#86efac; }
          38%,100%{ opacity:1; transform:none; background:#ffffff; border-color:#d1fae5; }
        }
        @keyframes calLink0 {
          0%,28%   { opacity:0; transform:scale(.5); }
          33%,100% { opacity:1; transform:scale(1); }
        }
        @keyframes calRow1 {
          0%,36%       { opacity:0; transform: translateX(12px); background:#ffffff; border-color:#e5e7eb; }
          41%      { opacity:1; transform:none; background:#f0fdf4; border-color:#86efac; }
          48%,100%{ opacity:1; transform:none; background:#ffffff; border-color:#d1fae5; }
        }
        @keyframes calLink1 {
          0%,38%   { opacity:0; transform:scale(.5); }
          43%,100% { opacity:1; transform:scale(1); }
        }
        @keyframes calRow2 {
          0%,46%       { opacity:0; transform: translateX(12px); background:#ffffff; border-color:#e5e7eb; }
          51%      { opacity:1; transform:none; background:#f0fdf4; border-color:#86efac; }
          58%,100%{ opacity:1; transform:none; background:#ffffff; border-color:#d1fae5; }
        }
        @keyframes calLink2 {
          0%,48%   { opacity:0; transform:scale(.5); }
          53%,100% { opacity:1; transform:scale(1); }
        }
        @keyframes calHead { 0%,20%{opacity:0;} 26%,100%{opacity:1;} }

        /* the rate Vero expects to clear on its own, stated up front */
        @keyframes calRate { 0%,16%{opacity:0;} 24%,100%{opacity:1;} }

        /* one approve-and-post, by a person */
        @keyframes calBtn {
          0%,58%   { transform:scale(1); box-shadow:0 0 0 0 rgba(22,163,74,0); }
          66%      { transform:scale(1); box-shadow:0 0 0 0 rgba(22,163,74,.35); }
          74%      { transform:scale(1); box-shadow:0 0 0 8px rgba(22,163,74,0); }
          78%      { transform:scale(.96); }
          82%,100% { transform:scale(1); box-shadow:0 0 0 0 rgba(22,163,74,0); }
        }
        @keyframes calCursor {
          0%,62%   { transform: translate(-46px,26px) scale(1); opacity:0; }
          66%      { transform: translate(-46px,26px) scale(1); opacity:1; }
          75%      { transform: translate(-6px,4px) scale(1); opacity:1; }
          78%      { transform: translate(-6px,4px) scale(.82); opacity:1; }
          81%      { transform: translate(-6px,4px) scale(1); opacity:1; }
          88%      { transform: translate(-6px,4px) scale(1); opacity:0; }
          100%     { transform: translate(-46px,26px) scale(1); opacity:0; }
        }
        @keyframes calBtnA { 0%,79%{opacity:1;} 81%,100%{opacity:0;} }
        @keyframes calBtnB { 0%,79%{opacity:0;} 81%,100%{opacity:1;} }
        @keyframes calSt1 { 0%,14%{opacity:1;} 16%,100%{opacity:0;} }
        @keyframes calSt2 { 0%,16%{opacity:0;} 18%,54%{opacity:1;} 56%,100%{opacity:0;} }
        @keyframes calSt3 { 0%,56%{opacity:0;} 58%,78%{opacity:1;} 80%,100%{opacity:0;} }
        @keyframes calSt4 { 0%,80%{opacity:0;} 82%,100%{opacity:1;} }

        .cal-ring  { animation: calRing 2.6s ease-out infinite; }
        .cal-ring2 { animation: calRing 2.6s ease-out infinite; animation-delay:1.3s; }
        .cal-pulse { animation: calPulse 1.4s ease-in-out infinite; }
        
        .cal-sig0  { animation: calSig0 10s ease-out infinite; opacity:0; }
        .cal-lead0 { animation: calLead0 10s ease-out infinite; opacity:0; }
        .cal-sig1  { animation: calSig1 10s ease-out infinite; opacity:0; }
        .cal-lead1 { animation: calLead1 10s ease-out infinite; opacity:0; }
        .cal-sig2  { animation: calSig2 10s ease-out infinite; opacity:0; }
        .cal-lead2 { animation: calLead2 10s ease-out infinite; opacity:0; }
        .cal-sig3  { animation: calSig3 10s ease-out infinite; opacity:0; }
        .cal-lead3 { animation: calLead3 10s ease-out infinite; opacity:0; }
        
        .cal-row0  { animation: calRow0 10s ease-out infinite; opacity:0; }
        .cal-link0 { animation: calLink0 10s cubic-bezier(.3,1.5,.5,1) infinite; opacity:0; }
        .cal-row1  { animation: calRow1 10s ease-out infinite; opacity:0; }
        .cal-link1 { animation: calLink1 10s cubic-bezier(.3,1.5,.5,1) infinite; opacity:0; }
        .cal-row2  { animation: calRow2 10s ease-out infinite; opacity:0; }
        .cal-link2 { animation: calLink2 10s cubic-bezier(.3,1.5,.5,1) infinite; opacity:0; }
        .cal-head { animation: calHead 10s ease-out infinite; opacity:0; }
        .cal-rate { animation: calRate 10s ease-out infinite; opacity:0; }
        .cal-btn  { animation: calBtn 10s ease-out infinite; }
        .cal-cursor { animation: calCursor 10s cubic-bezier(.4,0,.2,1) infinite; opacity:0; }
        .cal-a { animation: calBtnA 10s linear infinite; }
        .cal-b { animation: calBtnB 10s linear infinite; opacity:0; }
        .cal-s1 { animation: calSt1 10s linear infinite; }
        .cal-s2 { animation: calSt2 10s linear infinite; opacity:0; }
        .cal-s3 { animation: calSt3 10s linear infinite; opacity:0; }
        .cal-s4 { animation: calSt4 10s linear infinite; opacity:0; }
      </style><div class="tf-cardonly"><div class="tf-card relative w-[620px] shrink-0" style="--card-w:620px"><div class="bg-white rounded-2xl shadow-xl border border-gray-100/80 p-6"><div class="flex items-center gap-3 pb-3.5 mb-3 border-b border-gray-100"><div title="Vero \u2014 thinking" class="flex-shrink-0 " style="width:30px;height:30px;background-color:#111827;border-radius:50%;display:flex;align-items:center;justify-content:center;overflow:hidden;user-select:none"><div style="font-family:&quot;Courier New&quot;, Courier, monospace;color:#6EE7B7;display:flex;font-size:12.6px;line-height:1;font-weight:bold;transition:color 0.3s ease;width:3ch;justify-content:space-between;margin-top:0.05em"><span style="width:1ch;text-align:center;display:inline-block">1</span><span style="width:1ch;text-align:center;display:inline-block">0</span></div></div><span class="relative block h-[24px] w-[280px] min-w-0"><span class="cal-s1 absolute inset-0 text-base font-bold text-gray-900 leading-[24px] whitespace-nowrap">Reading today\u2019s bank feed</span><span class="cal-s2 absolute inset-0 text-base font-bold text-gray-900 leading-[24px] whitespace-nowrap">Matching against open items</span><span class="cal-s3 absolute inset-0 text-base font-bold text-gray-900 leading-[24px] whitespace-nowrap">Ready for your approval</span><span class="cal-s4 absolute inset-0 text-base font-bold text-emerald-800 leading-[24px] whitespace-nowrap">Posted to your ERP</span></span><span class="ml-auto inline-flex items-center gap-1.5 shrink-0 text-sm font-bold text-emerald-700"><span class="cal-pulse w-2 h-2 rounded-full bg-emerald-500"></span> Live</span></div><div class="relative" style="height:208px"><svg class="absolute inset-0 pointer-events-none" width="236" height="208" fill="none" aria-hidden="true"><path class="cal-lead0" d="M132,26 C146.4,26 141.6,104 154,104" stroke="#16a34a" stroke-opacity="0.45" stroke-width="2" stroke-linecap="round" stroke-dasharray="100" pathLength="100"></path><path class="cal-lead1" d="M132,74 C146.4,74 141.6,104 154,104" stroke="#16a34a" stroke-opacity="0.45" stroke-width="2" stroke-linecap="round" stroke-dasharray="100" pathLength="100"></path><path class="cal-lead2" d="M132,122 C146.4,122 141.6,104 154,104" stroke="#16a34a" stroke-opacity="0.45" stroke-width="2" stroke-linecap="round" stroke-dasharray="100" pathLength="100"></path><path class="cal-lead3" d="M132,176 C146.4,176 141.6,104 154,104" stroke="#16a34a" stroke-opacity="0.8" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="100" pathLength="100"></path></svg><div class="cal-sig0 absolute left-0 flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-2" style="top:6px;width:132px;height:40px"><span class="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-landmark h-4 w-4"><line x1="3" x2="21" y1="22" y2="22"></line><line x1="6" x2="6" y1="18" y2="11"></line><line x1="10" x2="10" y1="18" y2="11"></line><line x1="14" x2="14" y1="18" y2="11"></line><line x1="18" x2="18" y1="18" y2="11"></line><polygon points="12 2 20 7 4 7"></polygon></svg></span><span class="text-xs font-semibold text-gray-700 leading-tight">128 payments in</span></div><div class="cal-sig1 absolute left-0 flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-2" style="top:54px;width:132px;height:40px"><span class="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-search h-4 w-4"><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"></path><path d="m9 18-1.5-1.5"></path><circle cx="5" cy="14" r="3"></circle></svg></span><span class="text-xs font-semibold text-gray-700 leading-tight">Remittances read</span></div><div class="cal-sig2 absolute left-0 flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-2" style="top:102px;width:132px;height:40px"><span class="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text h-4 w-4"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg></span><span class="text-xs font-semibold text-gray-700 leading-tight">1,284 open items</span></div><div class="cal-sig3 absolute left-0 flex items-center gap-2 rounded-xl border-2 border-emerald-300 bg-white px-2 shadow-sm" style="top:150px;width:132px;height:52px"><span class="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brain h-4 w-4"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M19.967 17.484A4 4 0 0 1 18 18"></path></svg></span><span class="min-w-0 leading-tight"><span class="block text-[10px] font-bold uppercase tracking-wider text-emerald-600">Model</span><span class="block text-xs font-bold text-gray-900 truncate">Match rate</span><span class="block text-[10px] text-gray-400 truncate">what will clear</span></span></div><div class="absolute" style="left:186px;top:104px;transform:translate(-50%,-50%);z-index:20"><div class="relative flex items-center justify-center"><span class="cal-ring absolute w-[70px] h-[70px] rounded-full" style="box-shadow:0 0 0 2px rgba(22,163,74,.45)"></span><span class="cal-ring2 absolute w-[70px] h-[70px] rounded-full" style="box-shadow:0 0 0 2px rgba(22,163,74,.45)"></span><div class="relative w-[60px] h-[60px] rounded-full bg-white border-2 border-emerald-200 shadow-lg flex items-center justify-center"><div title="Vero \u2014 thinking" class="flex-shrink-0 " style="width:32px;height:32px;background-color:#111827;border-radius:50%;display:flex;align-items:center;justify-content:center;overflow:hidden;user-select:none"><div style="font-family:&quot;Courier New&quot;, Courier, monospace;color:#6EE7B7;display:flex;font-size:13.44px;line-height:1;font-weight:bold;transition:color 0.3s ease;width:3ch;justify-content:space-between;margin-top:0.05em"><span style="width:1ch;text-align:center;display:inline-block">1</span><span style="width:1ch;text-align:center;display:inline-block">1</span></div></div></div></div></div><div class="cal-head absolute top-0 flex items-center justify-between px-1" style="left:236px;right:0"><span class="text-xs font-semibold uppercase tracking-wider text-gray-400">Matched</span><span class="cal-rate text-xs font-bold text-emerald-700">94% expected to auto-clear</span></div><div class="cal-row0 absolute flex items-center gap-2.5 rounded-xl border px-3" style="left:236px;right:0;top:24px;height:56px"><span class="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-banknote h-5 w-5"><rect width="20" height="12" x="2" y="6" rx="2"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg></span><span class="text-sm font-bold text-gray-900 tabular-nums shrink-0">\u20AC12,480</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link2 cal-link0 h-4 w-4 text-emerald-600 shrink-0"><path d="M9 17H7A5 5 0 0 1 7 7h2"></path><path d="M15 7h2a5 5 0 1 1 0 10h-2"></path><line x1="8" x2="16" y1="12" y2="12"></line></svg><span class="min-w-0 leading-tight"><span class="block font-mono text-sm font-bold text-gray-900 truncate">INV-4471</span><span class="block text-xs text-gray-400">1 invoice</span></span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check cal-link0 ml-auto h-5 w-5 text-emerald-600 shrink-0"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg></div><div class="cal-row1 absolute flex items-center gap-2.5 rounded-xl border px-3" style="left:236px;right:0;top:88px;height:56px"><span class="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-banknote h-5 w-5"><rect width="20" height="12" x="2" y="6" rx="2"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg></span><span class="text-sm font-bold text-gray-900 tabular-nums shrink-0">\u20AC9,300</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link2 cal-link1 h-4 w-4 text-emerald-600 shrink-0"><path d="M9 17H7A5 5 0 0 1 7 7h2"></path><path d="M15 7h2a5 5 0 1 1 0 10h-2"></path><line x1="8" x2="16" y1="12" y2="12"></line></svg><span class="min-w-0 leading-tight"><span class="block font-mono text-sm font-bold text-gray-900 truncate">INV-4488</span><span class="block text-xs text-gray-400">1 invoice</span></span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check cal-link1 ml-auto h-5 w-5 text-emerald-600 shrink-0"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg></div><div class="cal-row2 absolute flex items-center gap-2.5 rounded-xl border px-3" style="left:236px;right:0;top:152px;height:56px"><span class="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-banknote h-5 w-5"><rect width="20" height="12" x="2" y="6" rx="2"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg></span><span class="text-sm font-bold text-gray-900 tabular-nums shrink-0">\u20AC21,140</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link2 cal-link2 h-4 w-4 text-emerald-600 shrink-0"><path d="M9 17H7A5 5 0 0 1 7 7h2"></path><path d="M15 7h2a5 5 0 1 1 0 10h-2"></path><line x1="8" x2="16" y1="12" y2="12"></line></svg><span class="min-w-0 leading-tight"><span class="block font-mono text-sm font-bold text-gray-900 truncate">INV-4512 +1</span><span class="block text-xs text-gray-400">2 invoices</span></span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check cal-link2 ml-auto h-5 w-5 text-emerald-600 shrink-0"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg></div></div><div class="mt-4 flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50/70 px-4" style="height:62px"><span class="min-w-0 leading-tight"><span class="block text-sm font-bold text-gray-900">120 matched \xB7 8 need you</span><span class="block text-sm text-gray-500">\u20AC2.34M ready to post</span></span><span class="relative ml-auto shrink-0"><span class="cal-btn relative block h-[40px] w-[158px] rounded-xl"><span class="cal-a absolute inset-0 inline-flex items-center justify-center gap-1.5 rounded-xl bg-emerald-600 text-sm font-bold text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check h-4 w-4"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Approve &amp; post</span><span class="cal-b absolute inset-0 inline-flex items-center justify-center gap-1.5 rounded-xl bg-emerald-50 text-sm font-bold text-emerald-700 ring-1 ring-emerald-200"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check h-4 w-4"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Posted</span></span><svg class="cal-cursor absolute pointer-events-none" style="right:8px;bottom:-2px;width:20px;height:20px;z-index:40" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 3l14 8.5-6.2 1.2L10 19 5 3z" fill="#111827" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"></path></svg></span></div></div></div></div>`,"clearmatch-extract":`<style>
        /* ---- the scan beam sweeps the page ---- */
        @keyframes cexBeam {
          0%,6%    { top: 0; opacity: 0; }
          10%      { top: 0; opacity: 1; }
          46%      { top: 247px; opacity: 1; }
          52%      { top: 247px; opacity: 0; }
          100%     { top: 0; opacity: 0; }
        }
        /* the page tints while it is being read */
        @keyframes cexDoc {
          0%,8%    { border-color:#e5e7eb; box-shadow:0 0 0 0 rgba(22,163,74,0); }
          16%,44%  { border-color:#86efac; box-shadow:0 0 0 3px rgba(22,163,74,.10); }
          54%,100% { border-color:#e5e7eb; box-shadow:0 0 0 0 rgba(22,163,74,0); }
        }
        /* ---- a field lands as the beam clears its band ---- */
        @keyframes cexRow {
          0%,10%   { opacity:0; transform: translateX(14px); }
          22%,100% { opacity:1; transform: translateX(0); }
        }
        @keyframes cexTotal {
          0%,44%   { opacity:0; transform: translateY(8px); }
          54%,100% { opacity:1; transform:none; }
        }
        @keyframes cexGlow {
          0%,50%   { box-shadow: 0 0 0 0 rgba(22,163,74,0); }
          58%      { box-shadow: 0 0 0 7px rgba(22,163,74,.14); }
          68%,100% { box-shadow: 0 0 0 0 rgba(22,163,74,0); }
        }
        /* ---- "any format": the badge cycles on its own rhythm ---- */
        @keyframes cexFmt1 { 0%,22%{opacity:1;} 25%,97%{opacity:0;} 100%{opacity:1;} }
        @keyframes cexFmt2 { 0%,22%{opacity:0;} 25%,47%{opacity:1;} 50%,100%{opacity:0;} }
        @keyframes cexFmt3 { 0%,47%{opacity:0;} 50%,72%{opacity:1;} 75%,100%{opacity:0;} }
        @keyframes cexFmt4 { 0%,72%{opacity:0;} 75%,97%{opacity:1;} 100%{opacity:0;} }

        .cex-beam  { animation: cexBeam 10s cubic-bezier(.5,0,.5,1) infinite; }
        .cex-doc   { animation: cexDoc 10s ease-out infinite; }
        .cex-row   { animation: cexRow 10s ease-out infinite; }
        .cex-total { animation: cexTotal 10s ease-out infinite, cexGlow 10s ease-out infinite; }
        .cex-f1 { animation: cexFmt1 10s linear infinite; }
        .cex-f2 { animation: cexFmt2 10s linear infinite; opacity:0; }
        .cex-f3 { animation: cexFmt3 10s linear infinite; opacity:0; }
        .cex-f4 { animation: cexFmt4 10s linear infinite; opacity:0; }
      </style><div class="tf-cardonly"><div class="tf-card relative w-[620px] shrink-0" style="--card-w:620px"><div class="bg-white rounded-2xl shadow-xl border border-gray-100/80 p-6"><div class="flex items-center gap-2.5 pb-3.5 mb-4 border-b border-gray-100"><div title="Vero \u2014 thinking" class="flex-shrink-0 " style="width:28px;height:28px;background-color:#111827;border-radius:50%;display:flex;align-items:center;justify-content:center;overflow:hidden;user-select:none"><div style="font-family:&quot;Courier New&quot;, Courier, monospace;color:#6EE7B7;display:flex;font-size:11.76px;line-height:1;font-weight:bold;transition:color 0.3s ease;width:3ch;justify-content:space-between;margin-top:0.05em"><span style="width:1ch;text-align:center;display:inline-block">0</span><span style="width:1ch;text-align:center;display:inline-block">1</span></div></div><span class="text-base font-bold text-gray-900">Reading the remittance</span><span class="ml-auto relative block h-[26px] w-[76px] shrink-0"><span class="cex-f1 absolute inset-0 inline-flex items-center justify-center rounded-full bg-emerald-50 text-xs font-bold text-emerald-700 ring-1 ring-emerald-200">PDF</span><span class="cex-f2 absolute inset-0 inline-flex items-center justify-center rounded-full bg-emerald-50 text-xs font-bold text-emerald-700 ring-1 ring-emerald-200">Email</span><span class="cex-f3 absolute inset-0 inline-flex items-center justify-center rounded-full bg-emerald-50 text-xs font-bold text-emerald-700 ring-1 ring-emerald-200">Portal</span><span class="cex-f4 absolute inset-0 inline-flex items-center justify-center rounded-full bg-emerald-50 text-xs font-bold text-emerald-700 ring-1 ring-emerald-200">Scan</span></span></div><div class="relative" style="height:250px"><div class="cex-doc absolute left-0 top-0 rounded-xl border bg-gray-50/70 overflow-hidden" style="width:204px;height:250px"><div class="px-4 py-4 space-y-2.5"><div class="flex items-center gap-2"><span class="block h-2 rounded-full" style="width:58%;background:#cbd5e1"></span></div><div class="flex items-center gap-2"><span class="block h-2 rounded-full" style="width:38%;background:#e2e8f0"></span></div><div class="h-2"></div><div class="flex items-center gap-2"><span class="block h-2 rounded-full" style="width:72%;background:#e2e8f0"></span><span class="block h-2 rounded-full ml-auto" style="width:22%;background:#e2e8f0"></span></div><div class="flex items-center gap-2"><span class="block h-2 rounded-full" style="width:64%;background:#e2e8f0"></span><span class="block h-2 rounded-full ml-auto" style="width:20%;background:#e2e8f0"></span></div><div class="flex items-center gap-2"><span class="block h-2 rounded-full" style="width:68%;background:#e2e8f0"></span><span class="block h-2 rounded-full ml-auto" style="width:18%;background:#e2e8f0"></span></div><div class="flex items-center gap-2"><span class="block h-2 rounded-full" style="width:60%;background:#e2e8f0"></span><span class="block h-2 rounded-full ml-auto" style="width:24%;background:#e2e8f0"></span></div><div class="flex items-center gap-2"><span class="block h-2 rounded-full" style="width:70%;background:#e2e8f0"></span><span class="block h-2 rounded-full ml-auto" style="width:19%;background:#e2e8f0"></span></div><div class="h-2"></div><div class="flex items-center gap-2"><span class="block h-2 rounded-full" style="width:66%;background:#e2e8f0"></span><span class="block h-2 rounded-full ml-auto" style="width:21%;background:#e2e8f0"></span></div><div class="flex items-center gap-2"><span class="block h-2 rounded-full" style="width:54%;background:#e2e8f0"></span><span class="block h-2 rounded-full ml-auto" style="width:23%;background:#e2e8f0"></span></div><div class="h-2"></div><div class="flex items-center gap-2"><span class="block h-2 rounded-full" style="width:44%;background:#cbd5e1"></span><span class="block h-2 rounded-full ml-auto" style="width:26%;background:#cbd5e1"></span></div></div><div class="cex-beam absolute left-0 right-0 h-[3px]" style="background:linear-gradient(90deg,rgba(22,163,74,0),#16a34a,rgba(22,163,74,0));box-shadow:0 0 14px 3px rgba(22,163,74,.45)"></div></div><span class="absolute left-3 inline-flex items-center gap-1 rounded-md bg-white px-1.5 py-0.5 text-xs font-bold text-emerald-700 ring-1 ring-emerald-200" style="top:224px"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scan-line h-3 w-3"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><path d="M7 12h10"></path></svg> Scanning</span><div class="absolute top-0" style="left:236px;right:0"><div class="flex items-center gap-1.5" style="height:40px"><div title="Vero \u2014 done" class="flex-shrink-0 " style="width:18px;height:18px;background-color:#111827;border-radius:50%;display:flex;align-items:center;justify-content:center;overflow:hidden;user-select:none"><div style="font-family:&quot;Courier New&quot;, Courier, monospace;color:#10B981;display:flex;font-size:7.56px;line-height:1;font-weight:bold;transition:color 0.3s ease;width:3ch;justify-content:space-between;margin-top:0.05em"><span style="width:1ch;text-align:center;display:inline-block">^</span><span style="width:1ch;text-align:center;display:inline-block">^</span></div></div><span class="text-sm font-bold text-gray-700">Extracted</span></div><div class="cex-row absolute left-0 right-0 flex items-center gap-2.5 rounded-xl bg-white px-3 ring-1 ring-emerald-200" style="top:40px;height:62px;animation-delay:0s"><span class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-emerald-100 text-emerald-700"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text h-5 w-5"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg></span><span class="min-w-0 leading-tight"><span class="block text-sm text-gray-500 truncate">Invoice</span><span class="block font-mono text-sm font-bold text-gray-900 truncate">INV-4471</span></span><span class="ml-auto text-sm font-bold text-gray-900 tabular-nums whitespace-nowrap">\u20AC12,480</span></div><div class="cex-row absolute left-0 right-0 flex items-center gap-2.5 rounded-xl bg-white px-3 ring-1 ring-emerald-200" style="top:112px;height:62px;animation-delay:.8s"><span class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-emerald-100 text-emerald-700"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text h-5 w-5"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg></span><span class="min-w-0 leading-tight"><span class="block text-sm text-gray-500 truncate">Invoice</span><span class="block font-mono text-sm font-bold text-gray-900 truncate">INV-4488</span></span><span class="ml-auto text-sm font-bold text-gray-900 tabular-nums whitespace-nowrap">\u20AC9,300</span></div><div class="cex-row absolute left-0 right-0 flex items-center gap-2.5 rounded-xl bg-white px-3 ring-1 ring-amber-200" style="top:184px;height:62px;animation-delay:1.6s"><span class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-amber-100 text-amber-700"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-minus h-5 w-5"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path></svg></span><span class="min-w-0 leading-tight"><span class="block text-sm text-gray-500 truncate">Credit note</span><span class="block font-mono text-sm font-bold text-gray-900 truncate">CN-219</span></span><span class="ml-auto text-sm font-bold text-gray-900 tabular-nums whitespace-nowrap">\u2212\u20AC640</span></div></div></div><div class="mt-5 pt-5 border-t border-gray-100"><div class="cex-total flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3"><span class="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check h-5 w-5"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg></span><span class="block leading-none"><span class="block text-3xl font-bold text-emerald-700 tabular-nums leading-none">\u20AC21,140</span><span class="block mt-1.5 text-sm font-semibold text-emerald-700/70">matched</span></span><span class="ml-auto shrink-0"><div title="Vero \u2014 done" class="flex-shrink-0 " style="width:26px;height:26px;background-color:#111827;border-radius:50%;display:flex;align-items:center;justify-content:center;overflow:hidden;user-select:none"><div style="font-family:&quot;Courier New&quot;, Courier, monospace;color:#10B981;display:flex;font-size:10.92px;line-height:1;font-weight:bold;transition:color 0.3s ease;width:3ch;justify-content:space-between;margin-top:0.05em"><span style="width:1ch;text-align:center;display:inline-block">^</span><span style="width:1ch;text-align:center;display:inline-block">^</span></div></div></span></div></div></div></div></div>`,"clearmatch-match":`<style>
        /* Each group holds the stage for a third of the loop: its curves
           brighten, its rows lift, and a small shape chip names what happened. */
        
        @keyframes cmLink1 {
          0%,6%    { stroke-opacity:.22; stroke-width:2; }
          12%,28% { stroke-opacity:1;   stroke-width:3; }
          33%,100%  { stroke-opacity:.22; stroke-width:2; }
        }
        @keyframes cmRow1 {
          0%,6%    { border-color:#e5e7eb; background:#ffffff; transform:none; }
          12%,28% { border-color:#86efac; background:#f0fdf4; transform:translateY(-1px); }
          33%,100%  { border-color:#e5e7eb; background:#ffffff; transform:none; }
        }
        @keyframes cmChip1 {
          0%,6%    { opacity:0; transform:scale(.8); }
          12%,28% { opacity:1; transform:scale(1); }
          33%,100%  { opacity:0; transform:scale(.8); }
        }
        @keyframes cmLink2 {
          0%,37%    { stroke-opacity:.22; stroke-width:2; }
          43%,59% { stroke-opacity:1;   stroke-width:3; }
          64%,100%  { stroke-opacity:.22; stroke-width:2; }
        }
        @keyframes cmRow2 {
          0%,37%    { border-color:#e5e7eb; background:#ffffff; transform:none; }
          43%,59% { border-color:#86efac; background:#f0fdf4; transform:translateY(-1px); }
          64%,100%  { border-color:#e5e7eb; background:#ffffff; transform:none; }
        }
        @keyframes cmChip2 {
          0%,37%    { opacity:0; transform:scale(.8); }
          43%,59% { opacity:1; transform:scale(1); }
          64%,100%  { opacity:0; transform:scale(.8); }
        }
        @keyframes cmLink3 {
          0%,68%    { stroke-opacity:.22; stroke-width:2; }
          74%,90% { stroke-opacity:1;   stroke-width:3; }
          95%,100%  { stroke-opacity:.22; stroke-width:2; }
        }
        @keyframes cmRow3 {
          0%,68%    { border-color:#e5e7eb; background:#ffffff; transform:none; }
          74%,90% { border-color:#86efac; background:#f0fdf4; transform:translateY(-1px); }
          95%,100%  { border-color:#e5e7eb; background:#ffffff; transform:none; }
        }
        @keyframes cmChip3 {
          0%,68%    { opacity:0; transform:scale(.8); }
          74%,90% { opacity:1; transform:scale(1); }
          95%,100%  { opacity:0; transform:scale(.8); }
        }

        
        .cm-link-1 { animation: cmLink1 10s ease-in-out infinite; }
        .cm-row-1  { animation: cmRow1 10s ease-in-out infinite; }
        .cm-chip-1 { animation: cmChip1 10s ease-out infinite; opacity:0; }
        .cm-link-2 { animation: cmLink2 10s ease-in-out infinite; }
        .cm-row-2  { animation: cmRow2 10s ease-in-out infinite; }
        .cm-chip-2 { animation: cmChip2 10s ease-out infinite; opacity:0; }
        .cm-link-3 { animation: cmLink3 10s ease-in-out infinite; }
        .cm-row-3  { animation: cmRow3 10s ease-in-out infinite; }
        .cm-chip-3 { animation: cmChip3 10s ease-out infinite; opacity:0; }
      </style><div class="tf-cardonly"><div class="tf-card w-[600px] shrink-0" style="--card-w:600px"><div class="bg-white rounded-2xl shadow-xl border border-gray-100/80 p-6"><div class="flex items-center gap-2.5 pb-3.5 mb-4 border-b border-gray-100"><div title="Vero \u2014 thinking" class="flex-shrink-0 " style="width:28px;height:28px;background-color:#111827;border-radius:50%;display:flex;align-items:center;justify-content:center;overflow:hidden;user-select:none"><div style="font-family:&quot;Courier New&quot;, Courier, monospace;color:#6EE7B7;display:flex;font-size:11.76px;line-height:1;font-weight:bold;transition:color 0.3s ease;width:3ch;justify-content:space-between;margin-top:0.05em"><span style="width:1ch;text-align:center;display:inline-block">1</span><span style="width:1ch;text-align:center;display:inline-block">0</span></div></div><span class="text-base font-bold text-gray-900">Matching today\u2019s cash</span><span class="ml-auto shrink-0 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700 ring-1 ring-emerald-200">Live</span></div><div class="relative" style="height:264px"><div class="absolute left-0 top-0 text-xs font-semibold uppercase tracking-wider text-gray-400" style="width:208px">Payments in</div><div class="absolute top-0 text-xs font-semibold uppercase tracking-wider text-gray-400" style="left:344px;right:0">Open invoices</div><svg class="absolute left-0 top-0 pointer-events-none" width="552" height="264" fill="none" aria-hidden="true"><path class="cm-link-1" d="M208,52 C282.8,52 269.2,52 344,52" stroke="#16a34a" stroke-width="2" stroke-linecap="round"></path><path class="cm-link-2" d="M208,114 C282.8,114 269.2,114 344,114" stroke="#16a34a" stroke-width="2" stroke-linecap="round"></path><path class="cm-link-2" d="M208,176 C282.8,176 269.2,114 344,114" stroke="#16a34a" stroke-width="2" stroke-linecap="round"></path><path class="cm-link-3" d="M208,238 C282.8,238 269.2,176 344,176" stroke="#16a34a" stroke-width="2" stroke-linecap="round"></path><path class="cm-link-3" d="M208,238 C282.8,238 269.2,238 344,238" stroke="#16a34a" stroke-width="2" stroke-linecap="round"></path></svg><span class="cm-chip-1 absolute inline-flex items-center rounded-full bg-white px-2 py-0.5 text-xs font-bold text-emerald-700 ring-1 ring-emerald-200 shadow-sm" style="left:254px;top:41px">1 \u2192 1</span><span class="cm-chip-2 absolute inline-flex items-center rounded-full bg-white px-2 py-0.5 text-xs font-bold text-emerald-700 ring-1 ring-emerald-200 shadow-sm" style="left:254px;top:134px">2 \u2192 1</span><span class="cm-chip-3 absolute inline-flex items-center rounded-full bg-white px-2 py-0.5 text-xs font-bold text-emerald-700 ring-1 ring-emerald-200 shadow-sm" style="left:254px;top:196px">1 \u2192 2</span><div class="cm-row-1 absolute left-0 flex items-center gap-2.5 rounded-xl border bg-white px-2.5" style="top:26px;width:208px;height:52px"><span class="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-banknote h-5 w-5"><rect width="20" height="12" x="2" y="6" rx="2"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg></span><span class="min-w-0 leading-tight"><span class="block text-sm font-bold text-gray-900 tabular-nums">\u20AC12,480</span><span class="block text-xs text-gray-400 truncate">SEPA \xB7 88-2210</span></span></div><div class="cm-row-2 absolute left-0 flex items-center gap-2.5 rounded-xl border bg-white px-2.5" style="top:88px;width:208px;height:52px"><span class="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-banknote h-5 w-5"><rect width="20" height="12" x="2" y="6" rx="2"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg></span><span class="min-w-0 leading-tight"><span class="block text-sm font-bold text-gray-900 tabular-nums">\u20AC5,100</span><span class="block text-xs text-gray-400 truncate">SEPA \xB7 88-2214</span></span></div><div class="cm-row-2 absolute left-0 flex items-center gap-2.5 rounded-xl border bg-white px-2.5" style="top:150px;width:208px;height:52px"><span class="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-banknote h-5 w-5"><rect width="20" height="12" x="2" y="6" rx="2"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg></span><span class="min-w-0 leading-tight"><span class="block text-sm font-bold text-gray-900 tabular-nums">\u20AC4,200</span><span class="block text-xs text-gray-400 truncate">SEPA \xB7 88-2219</span></span></div><div class="cm-row-3 absolute left-0 flex items-center gap-2.5 rounded-xl border bg-white px-2.5" style="top:212px;width:208px;height:52px"><span class="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-banknote h-5 w-5"><rect width="20" height="12" x="2" y="6" rx="2"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg></span><span class="min-w-0 leading-tight"><span class="block text-sm font-bold text-gray-900 tabular-nums">\u20AC21,140</span><span class="block text-xs text-gray-400 truncate">SEPA \xB7 88-2226</span></span></div><div class="cm-row-1 absolute flex items-center gap-2.5 rounded-xl border bg-white px-2.5" style="left:344px;top:26px;width:208px;height:52px"><span class="w-9 h-9 rounded-lg bg-gray-100 text-gray-600 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text h-5 w-5"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg></span><span class="min-w-0 leading-tight"><span class="block font-mono text-sm font-bold text-gray-900 truncate">INV-4471</span><span class="block text-xs text-gray-400 tabular-nums">\u20AC12,480</span></span></div><div class="cm-row-2 absolute flex items-center gap-2.5 rounded-xl border bg-white px-2.5" style="left:344px;top:88px;width:208px;height:52px"><span class="w-9 h-9 rounded-lg bg-gray-100 text-gray-600 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text h-5 w-5"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg></span><span class="min-w-0 leading-tight"><span class="block font-mono text-sm font-bold text-gray-900 truncate">INV-4488</span><span class="block text-xs text-gray-400 tabular-nums">\u20AC9,300</span></span></div><div class="cm-row-3 absolute flex items-center gap-2.5 rounded-xl border bg-white px-2.5" style="left:344px;top:150px;width:208px;height:52px"><span class="w-9 h-9 rounded-lg bg-gray-100 text-gray-600 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text h-5 w-5"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg></span><span class="min-w-0 leading-tight"><span class="block font-mono text-sm font-bold text-gray-900 truncate">INV-4512</span><span class="block text-xs text-gray-400 tabular-nums">\u20AC8,900</span></span></div><div class="cm-row-3 absolute flex items-center gap-2.5 rounded-xl border bg-white px-2.5" style="left:344px;top:212px;width:208px;height:52px"><span class="w-9 h-9 rounded-lg bg-gray-100 text-gray-600 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text h-5 w-5"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg></span><span class="min-w-0 leading-tight"><span class="block font-mono text-sm font-bold text-gray-900 truncate">INV-4527</span><span class="block text-xs text-gray-400 tabular-nums">\u20AC12,240</span></span></div></div><div class="mt-4 flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-3.5 py-3"><span class="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check h-5 w-5"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg></span><span class="text-base font-bold text-emerald-800 whitespace-nowrap">All matched</span><span class="ml-auto shrink-0 text-sm font-bold text-emerald-700 tabular-nums whitespace-nowrap">0 unapplied</span></div></div></div></div>`,"clearmatch-post":`<style>
        /* each chip drops into the ledger, one after another */
        
        @keyframes cpaChip0 {
          0%,4%   { transform: translateY(0) scale(1); opacity:1; }
          14%     { transform: translateY(30px) scale(.86); opacity:0; }
          100%               { transform: translateY(30px) scale(.86); opacity:0; }
        }
        @keyframes cpaChip1 {
          0%,8%   { transform: translateY(0) scale(1); opacity:1; }
          18%     { transform: translateY(30px) scale(.86); opacity:0; }
          100%               { transform: translateY(30px) scale(.86); opacity:0; }
        }
        @keyframes cpaChip2 {
          0%,12%   { transform: translateY(0) scale(1); opacity:1; }
          22%     { transform: translateY(30px) scale(.86); opacity:0; }
          100%               { transform: translateY(30px) scale(.86); opacity:0; }
        }
        @keyframes cpaChip3 {
          0%,16%   { transform: translateY(0) scale(1); opacity:1; }
          26%     { transform: translateY(30px) scale(.86); opacity:0; }
          100%               { transform: translateY(30px) scale(.86); opacity:0; }
        }

        /* once the strip is empty it collapses, and the ledger takes the space */
        @keyframes cpaStrip {
          0%,30%   { height:38px; opacity:1; margin-bottom:10px; }
          40%,100% { height:0px; opacity:0; margin-bottom:0px; }
        }
        @keyframes cpaArrow { 0%,28%{opacity:1;} 34%,100%{opacity:0; height:0;} }

        /* the ledger assembles, line by line */
        
        @keyframes cpaRow0 {
          0%,10%   { opacity:0; transform: translateY(-8px); }
          20%,100% { opacity:1; transform:none; }
        }
        @keyframes cpaRow1 {
          0%,17%   { opacity:0; transform: translateY(-8px); }
          27%,100% { opacity:1; transform:none; }
        }
        @keyframes cpaRow2 {
          0%,24%   { opacity:0; transform: translateY(-8px); }
          34%,100% { opacity:1; transform:none; }
        }
        @keyframes cpaTable {
          0%,10%   { border-color:#e5e7eb; }
          24%,60%  { border-color:#86efac; }
          68%,100% { border-color:#e5e7eb; }
        }

        /* a real button, pressed by a real cursor */
        @keyframes cpaBtnArm {
          0%,44%   { transform:scale(1); box-shadow:0 0 0 0 rgba(22,163,74,0); }
          52%      { transform:scale(1); box-shadow:0 0 0 0 rgba(22,163,74,.35); }
          60%      { transform:scale(1); box-shadow:0 0 0 8px rgba(22,163,74,0); }
          64%      { transform:scale(.96); }
          68%,100% { transform:scale(1); box-shadow:0 0 0 0 rgba(22,163,74,0); }
        }
        @keyframes cpaCursor {
          0%,48%   { transform: translate(-46px,26px) scale(1); opacity:0; }
          52%      { transform: translate(-46px,26px) scale(1); opacity:1; }
          61%      { transform: translate(-6px,4px) scale(1); opacity:1; }
          64%      { transform: translate(-6px,4px) scale(.82); opacity:1; }
          67%      { transform: translate(-6px,4px) scale(1); opacity:1; }
          74%      { transform: translate(-6px,4px) scale(1); opacity:0; }
          100%     { transform: translate(-46px,26px) scale(1); opacity:0; }
        }
        @keyframes cpaBtnPost { 0%,65%{opacity:1;} 67%,100%{opacity:0;} }
        @keyframes cpaBtnDone { 0%,65%{opacity:0;} 67%,100%{opacity:1;} }
        @keyframes cpaTick {
          0%,66%   { opacity:0; transform:scale(.4); }
          72%      { opacity:1; transform:scale(1.15); }
          78%,100% { opacity:1; transform:scale(1); }
        }
        @keyframes cpaPosted { 0%,66%{opacity:0;} 74%,100%{opacity:1;} }

        .cpa-chip0{animation:cpaChip0 10s cubic-bezier(.5,0,.4,1) infinite;}.cpa-chip1{animation:cpaChip1 10s cubic-bezier(.5,0,.4,1) infinite;}.cpa-chip2{animation:cpaChip2 10s cubic-bezier(.5,0,.4,1) infinite;}.cpa-chip3{animation:cpaChip3 10s cubic-bezier(.5,0,.4,1) infinite;}
        .cpa-row0{animation:cpaRow0 10s ease-out infinite;opacity:0;}.cpa-row1{animation:cpaRow1 10s ease-out infinite;opacity:0;}.cpa-row2{animation:cpaRow2 10s ease-out infinite;opacity:0;}
        .cpa-strip  { animation: cpaStrip 10s ease-in-out infinite; overflow:hidden; }
        .cpa-arrow  { animation: cpaArrow 10s ease-in-out infinite; }
        .cpa-table  { animation: cpaTable 10s ease-out infinite; }
        .cpa-btn    { animation: cpaBtnArm 10s ease-out infinite; }
        .cpa-cursor { animation: cpaCursor 10s cubic-bezier(.4,0,.2,1) infinite; opacity:0; }
        .cpa-post   { animation: cpaBtnPost 10s linear infinite; }
        .cpa-done   { animation: cpaBtnDone 10s linear infinite; opacity:0; }
        .cpa-tick   { animation: cpaTick 10s cubic-bezier(.3,1.5,.5,1) infinite; opacity:0; }
        .cpa-posted { animation: cpaPosted 10s ease-out infinite; opacity:0; }
      </style><div class="tf-cardonly"><div class="tf-card relative w-[560px] shrink-0" style="--card-w:560px"><div class="bg-white rounded-2xl shadow-xl border border-gray-100/80 p-6"><div class="flex items-center gap-2.5 mb-3"><div title="Vero \u2014 thinking" class="flex-shrink-0 " style="width:28px;height:28px;background-color:#111827;border-radius:50%;display:flex;align-items:center;justify-content:center;overflow:hidden;user-select:none"><div style="font-family:&quot;Courier New&quot;, Courier, monospace;color:#6EE7B7;display:flex;font-size:11.76px;line-height:1;font-weight:bold;transition:color 0.3s ease;width:3ch;justify-content:space-between;margin-top:0.05em"><span style="width:1ch;text-align:center;display:inline-block">1</span><span style="width:1ch;text-align:center;display:inline-block">0</span></div></div><span class="text-base font-bold text-gray-900">Payment data</span></div><div class="cpa-strip relative" style="height:38px"><span class="cpa-chip0 absolute inline-flex items-center gap-1.5 rounded-lg bg-gray-100 pl-1.5 pr-2.5 text-sm font-semibold text-gray-600 tabular-nums" style="left:0;width:104px;height:34px"><span class="w-6 h-6 rounded-md bg-white flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-banknote h-3.5 w-3.5 text-gray-500"><rect width="20" height="12" x="2" y="6" rx="2"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg></span>\u20AC21,140</span><span class="cpa-chip1 absolute inline-flex items-center gap-1.5 rounded-lg bg-gray-100 pl-1.5 pr-2.5 text-sm font-semibold text-gray-600 tabular-nums" style="left:112px;width:106px;height:34px"><span class="w-6 h-6 rounded-md bg-white flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text h-3.5 w-3.5 text-gray-500"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg></span>INV-4471</span><span class="cpa-chip2 absolute inline-flex items-center gap-1.5 rounded-lg bg-gray-100 pl-1.5 pr-2.5 text-sm font-semibold text-gray-600 tabular-nums" style="left:226px;width:112px;height:34px"><span class="w-6 h-6 rounded-md bg-white flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-landmark h-3.5 w-3.5 text-gray-500"><line x1="3" x2="21" y1="22" y2="22"></line><line x1="6" x2="6" y1="18" y2="11"></line><line x1="10" x2="10" y1="18" y2="11"></line><line x1="14" x2="14" y1="18" y2="11"></line><line x1="18" x2="18" y1="18" y2="11"></line><polygon points="12 2 20 7 4 7"></polygon></svg></span>Bank 1800</span><span class="cpa-chip3 absolute inline-flex items-center gap-1.5 rounded-lg bg-gray-100 pl-1.5 pr-2.5 text-sm font-semibold text-gray-600 tabular-nums" style="left:346px;width:100px;height:34px"><span class="w-6 h-6 rounded-md bg-white flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-receipt-text h-3.5 w-3.5 text-gray-500"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"></path><path d="M14 8H8"></path><path d="M16 12H8"></path><path d="M13 16H8"></path></svg></span>CN-219</span></div><div class="cpa-arrow flex justify-center" style="height:20px"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-down h-4 w-4 text-gray-300"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg></div><div class="cpa-table rounded-xl border-2 bg-white p-3"><div class="flex items-center justify-between px-1 pb-2 mb-1 border-b border-gray-100"><span class="text-xs font-semibold uppercase tracking-wider text-gray-400">General ledger</span><span class="text-xs font-semibold uppercase tracking-wider text-gray-400">Amount</span></div><div class="relative" style="height:172px"><div class="cpa-row0 absolute left-0 right-0 flex items-center gap-2.5 rounded-lg bg-gray-50/80 px-2.5" style="top:0;height:52px"><span class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-emerald-100 text-emerald-700"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-landmark h-5 w-5"><line x1="3" x2="21" y1="22" y2="22"></line><line x1="6" x2="6" y1="18" y2="11"></line><line x1="10" x2="10" y1="18" y2="11"></line><line x1="14" x2="14" y1="18" y2="11"></line><line x1="18" x2="18" y1="18" y2="11"></line><polygon points="12 2 20 7 4 7"></polygon></svg></span><span class="min-w-0 leading-tight"><span class="block text-sm font-semibold text-gray-900 truncate">Bank</span><span class="block text-sm text-gray-500 tabular-nums">1800</span></span><span class="ml-auto shrink-0 rounded-md px-1.5 py-0.5 text-xs font-bold bg-emerald-50 text-emerald-700">Dr</span><span class="w-[92px] text-right text-sm font-bold text-gray-900 tabular-nums shrink-0">21,140.00</span></div><div class="cpa-row1 absolute left-0 right-0 flex items-center gap-2.5 rounded-lg bg-gray-50/80 px-2.5" style="top:60px;height:52px"><span class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-gray-200 text-gray-600"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open h-5 w-5"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg></span><span class="min-w-0 leading-tight"><span class="block text-sm font-semibold text-gray-900 truncate">Accounts receivable</span><span class="block text-sm text-gray-500 tabular-nums">1400</span></span><span class="ml-auto shrink-0 rounded-md px-1.5 py-0.5 text-xs font-bold bg-gray-200 text-gray-600">Cr</span><span class="w-[92px] text-right text-sm font-bold text-gray-900 tabular-nums shrink-0">21,780.00</span></div><div class="cpa-row2 absolute left-0 right-0 flex items-center gap-2.5 rounded-lg bg-gray-50/80 px-2.5" style="top:120px;height:52px"><span class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-emerald-100 text-emerald-700"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-receipt-text h-5 w-5"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"></path><path d="M14 8H8"></path><path d="M16 12H8"></path><path d="M13 16H8"></path></svg></span><span class="min-w-0 leading-tight"><span class="block text-sm font-semibold text-gray-900 truncate">Credit note</span><span class="block text-sm text-gray-500 tabular-nums">4900</span></span><span class="ml-auto shrink-0 rounded-md px-1.5 py-0.5 text-xs font-bold bg-emerald-50 text-emerald-700">Dr</span><span class="w-[92px] text-right text-sm font-bold text-gray-900 tabular-nums shrink-0">640.00</span></div></div></div><div class="mt-4 flex items-center gap-3"><span class="cpa-posted inline-flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check cpa-tick h-5 w-5 text-emerald-600"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg><span class="text-sm font-semibold text-gray-500">to</span><img src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxuczp4PSJuc19leHRlbmQ7IiB4bWxuczppPSJuc19haTsiIHhtbG5zOmdyYXBoPSJuc19ncmFwaHM7IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDkxIDQ1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA5MSA0NTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KICAuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6dXJsKCNTVkdJRF8xXyk7fQoJLnN0MXtmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtmaWxsOiNGRkZGRkY7fQogPC9zdHlsZT4KIDxtZXRhZGF0YT4KICA8c2Z3IHhtbG5zPSJuc19zZnc7Ij4KICAgPHNsaWNlcz4KICAgPC9zbGljZXM+CiAgIDxzbGljZVNvdXJjZUJvdW5kcyBib3R0b21MZWZ0T3JpZ2luPSJ0cnVlIiBoZWlnaHQ9IjQ1IiB3aWR0aD0iOTEiIHg9IjAiIHk9IjAiPgogICA8L3NsaWNlU291cmNlQm91bmRzPgogIDwvc2Z3PgogPC9tZXRhZGF0YT4KIDxnPgogIDxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMV8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iNDUuNDgzIiB5MT0iNDYiIHgyPSI0NS40ODMiIHkyPSIxIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgNDYpIj4KICAgPHN0b3Agb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojMDBBRUVGIj4KICAgPC9zdG9wPgogICA8c3RvcCBvZmZzZXQ9IjAuMjEyIiBzdHlsZT0ic3RvcC1jb2xvcjojMDA5N0RDIj4KICAgPC9zdG9wPgogICA8c3RvcCBvZmZzZXQ9IjAuNTE5IiBzdHlsZT0ic3RvcC1jb2xvcjojMDA3Q0M1Ij4KICAgPC9zdG9wPgogICA8c3RvcCBvZmZzZXQ9IjAuNzkyIiBzdHlsZT0ic3RvcC1jb2xvcjojMDA2Q0I4Ij4KICAgPC9zdG9wPgogICA8c3RvcCBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMDY2QjMiPgogICA8L3N0b3A+CiAgPC9saW5lYXJHcmFkaWVudD4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMCw0NWg0Nkw5MSwwSDBWNDUiPgogIDwvcGF0aD4KICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNTQsOWgtOWwwLDIxLjFMMzcuMiw5aC03LjhsLTYuNywxNy43Yy0wLjctNC41LTUuNC02LTktNy4yYy0yLjQtMC44LTUtMS45LTQuOS0zLjJjMC0xLDEuNC0yLDQuMS0xLjkKCQljMS44LDAuMSwzLjQsMC4yLDYuNiwxLjhsMy4xLTUuNGMtMi45LTEuNS02LjktMi40LTEwLjEtMi40aDBjLTMuOCwwLTcsMS4yLTksMy4zYy0xLjQsMS40LTIuMSwzLjItMi4xLDUuMmMwLDIuNywxLDQuNywzLjEsNi4zCgkJYzEuOCwxLjMsNC4xLDIuMiw2LjEsMi44YzIuNSwwLjgsNC41LDEuNCw0LjUsMi45YzAsMC41LTAuMiwxLTAuNiwxLjRjLTAuNiwwLjYtMS42LDAuOS0yLjksMC45QzguOSwzMS4xLDcsMzAuNyw0LDI5bC0yLjgsNS41CgkJYzMsMS43LDYuMiwyLjYsOS44LDIuNmwwLjgsMGMzLjEtMC4xLDUuNy0wLjgsNy43LTIuNGMwLjEtMC4xLDAuMi0wLjIsMC4zLTAuM0wxOS42LDM2bDcuNiwwbDEuNC0zLjVjMS40LDAuNSwzLjEsMC44LDQuOCwwLjgKCQljMS43LDAsMy4zLTAuMyw0LjctMC43bDAuOSwzLjRsMTMuNiwwbDAtNy45aDIuOWM3LDAsMTEuMS0zLjYsMTEuMS05LjVDNjYuNiwxMS45LDYyLjUsOSw1NCw5eiBNMzMuMywyNy4xYy0xLDAtMi0wLjItMi45LTAuNQoJCWwyLjgtOWgwLjFsMi44LDlDMzUuMywyNi45LDM0LjMsMjcuMSwzMy4zLDI3LjFMMzMuMywyNy4xeiBNNTQuNSwyMS45aC0ydi03LjJoMmMyLjYsMCw0LjcsMC45LDQuNywzLjYKCQlDNTkuMiwyMSw1Ny4xLDIxLjksNTQuNSwyMS45Ij4KICA8L3BhdGg+CiA8L2c+Cjwvc3ZnPg==" alt="SAP" class="w-auto h-auto object-contain" style="max-height:24px;max-width:58px"/></span><span class="relative ml-auto shrink-0"><span class="cpa-btn relative block h-[40px] w-[132px] rounded-xl"><span class="cpa-post absolute inset-0 inline-flex items-center justify-center gap-1.5 rounded-xl bg-emerald-600 text-sm font-bold text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-building2 h-4 w-4"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg> Post</span><span class="cpa-done absolute inset-0 inline-flex items-center justify-center gap-1.5 rounded-xl bg-emerald-50 text-sm font-bold text-emerald-700 ring-1 ring-emerald-200"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check h-4 w-4"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Posted</span></span><svg class="cpa-cursor absolute pointer-events-none" style="right:8px;bottom:-2px;width:20px;height:20px;z-index:40" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 3l14 8.5-6.2 1.2L10 19 5 3z" fill="#111827" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"></path></svg></span></div></div></div></div>`,"clearmatch-unapplied":`<style>
        @keyframes cubP0{0%{opacity:1;}23%{opacity:1;}24.5%{opacity:0;}100%{opacity:0;}}@keyframes cubP1{0%{opacity:0;}23.5%{opacity:0;}25%{opacity:1;}41%{opacity:1;}42.5%{opacity:0;}100%{opacity:0;}}@keyframes cubP2{0%{opacity:0;}41.5%{opacity:0;}43%{opacity:1;}59%{opacity:1;}60.5%{opacity:0;}100%{opacity:0;}}@keyframes cubP3{0%{opacity:0;}59.5%{opacity:0;}61%{opacity:1;}100%{opacity:1;}}

        /* each step: pending -> Vero is on it -> done */
        
        @keyframes cubStep0 {
          0%,6%      { background:#ffffff; border-color:#e5e7eb; }
          8%,16% { background:#f0fdf4; border-color:#6ee7b7; }
          20%,100%   { background:#ffffff; border-color:#d1fae5; }
        }
        @keyframes cubTile0 {
          0%,6%      { background:#f3f4f6; color:#9ca3af; transform:scale(1); }
          8%             { background:#16a34a; color:#ffffff; transform:scale(1.1); }
          16%         { background:#16a34a; color:#ffffff; transform:scale(1); }
          20%,100%   { background:#dcfce7; color:#15803d; transform:scale(1); }
        }
        @keyframes cubText0 {
          0%,6%    { opacity:.35; }
          8%,100%      { opacity:1; }
        }
        @keyframes cubTick0 {
          0%,15%     { opacity:0; transform:scale(.5); }
          19%,100%  { opacity:1; transform:scale(1); }
        }
        /* the "working" pip only sits on the step currently being done */
        @keyframes cubDoing0 {
          0%,7%     { opacity:0; }
          9%,15% { opacity:1; }
          17%,100%   { opacity:0; }
        }
        @keyframes cubStep1 {
          0%,24%      { background:#ffffff; border-color:#e5e7eb; }
          26%,34% { background:#f0fdf4; border-color:#6ee7b7; }
          38%,100%   { background:#ffffff; border-color:#d1fae5; }
        }
        @keyframes cubTile1 {
          0%,24%      { background:#f3f4f6; color:#9ca3af; transform:scale(1); }
          26%             { background:#16a34a; color:#ffffff; transform:scale(1.1); }
          34%         { background:#16a34a; color:#ffffff; transform:scale(1); }
          38%,100%   { background:#dcfce7; color:#15803d; transform:scale(1); }
        }
        @keyframes cubText1 {
          0%,24%    { opacity:.35; }
          26%,100%      { opacity:1; }
        }
        @keyframes cubTick1 {
          0%,33%     { opacity:0; transform:scale(.5); }
          37%,100%  { opacity:1; transform:scale(1); }
        }
        /* the "working" pip only sits on the step currently being done */
        @keyframes cubDoing1 {
          0%,25%     { opacity:0; }
          27%,33% { opacity:1; }
          35%,100%   { opacity:0; }
        }
        @keyframes cubStep2 {
          0%,42%      { background:#ffffff; border-color:#e5e7eb; }
          44%,52% { background:#f0fdf4; border-color:#6ee7b7; }
          56%,100%   { background:#ffffff; border-color:#d1fae5; }
        }
        @keyframes cubTile2 {
          0%,42%      { background:#f3f4f6; color:#9ca3af; transform:scale(1); }
          44%             { background:#16a34a; color:#ffffff; transform:scale(1.1); }
          52%         { background:#16a34a; color:#ffffff; transform:scale(1); }
          56%,100%   { background:#dcfce7; color:#15803d; transform:scale(1); }
        }
        @keyframes cubText2 {
          0%,42%    { opacity:.35; }
          44%,100%      { opacity:1; }
        }
        @keyframes cubTick2 {
          0%,51%     { opacity:0; transform:scale(.5); }
          55%,100%  { opacity:1; transform:scale(1); }
        }
        /* the "working" pip only sits on the step currently being done */
        @keyframes cubDoing2 {
          0%,43%     { opacity:0; }
          45%,51% { opacity:1; }
          53%,100%   { opacity:0; }
        }


        /* Vero reacts on every step and every clear */
        @keyframes cubVero {
          0%,6%    { transform:scale(1); }
          10%      { transform:scale(1.14); }
          16%,24%  { transform:scale(1); }
          28%      { transform:scale(1.14); }
          34%,42%  { transform:scale(1); }
          46%      { transform:scale(1.14); }
          52%,100% { transform:scale(1); }
        }
        @keyframes cubPulse { 0%,100%{opacity:1;} 50%{opacity:.3;} }
        @keyframes cubBlink { 0%,100%{opacity:1;} 50%{opacity:.2;} }
        @keyframes cubBar {
          0%,6%    { width:100%; }
          30%      { width:56%; }
          48%      { width:25%; }
          64%      { width:11%; }
          80%,100% { width:0%; }
        }
        /* the account being worked, and the closing state */
        @keyframes cubWorking { 0%,60%{opacity:1;} 64%,100%{opacity:0;} }
        @keyframes cubCleared { 0%,60%{opacity:0;} 64%,100%{opacity:1;} }

        .cub-p0{animation:cubP0 10s linear infinite;}.cub-p1{animation:cubP1 10s linear infinite;opacity:0;}.cub-p2{animation:cubP2 10s linear infinite;opacity:0;}.cub-p3{animation:cubP3 10s linear infinite;opacity:0;}
        
        .cub-step0 { animation: cubStep0 10s ease-out infinite; }
        .cub-tile0 { animation: cubTile0 10s ease-out infinite; }
        .cub-text0 { animation: cubText0 10s ease-out infinite; opacity:.35; }
        .cub-tick0 { animation: cubTick0 10s ease-out infinite; opacity:0; }
        .cub-doing0{ animation: cubDoing0 10s linear infinite; opacity:0; }
        .cub-step1 { animation: cubStep1 10s ease-out infinite; }
        .cub-tile1 { animation: cubTile1 10s ease-out infinite; }
        .cub-text1 { animation: cubText1 10s ease-out infinite; opacity:.35; }
        .cub-tick1 { animation: cubTick1 10s ease-out infinite; opacity:0; }
        .cub-doing1{ animation: cubDoing1 10s linear infinite; opacity:0; }
        .cub-step2 { animation: cubStep2 10s ease-out infinite; }
        .cub-tile2 { animation: cubTile2 10s ease-out infinite; }
        .cub-text2 { animation: cubText2 10s ease-out infinite; opacity:.35; }
        .cub-tick2 { animation: cubTick2 10s ease-out infinite; opacity:0; }
        .cub-doing2{ animation: cubDoing2 10s linear infinite; opacity:0; }
        .cub-vero  { animation: cubVero 10s ease-out infinite; }
        .cub-pulse { animation: cubPulse 1.2s ease-in-out infinite; }
        .cub-blink { animation: cubBlink .9s ease-in-out infinite; }
        .cub-bar   { animation: cubBar 10s cubic-bezier(.4,0,.3,1) infinite; }
        .cub-working { animation: cubWorking 10s linear infinite; }
        .cub-cleared { animation: cubCleared 10s linear infinite; opacity:0; }
      </style><div class="tf-cardonly"><div class="tf-card relative w-[600px] shrink-0" style="--card-w:600px"><div class="bg-white rounded-2xl shadow-xl border border-gray-100/80 p-6"><div class="flex items-center gap-3 mb-4"><span class="cub-vero flex items-center justify-center shrink-0"><div title="Vero \u2014 thinking" class="flex-shrink-0 " style="width:34px;height:34px;background-color:#111827;border-radius:50%;display:flex;align-items:center;justify-content:center;overflow:hidden;user-select:none"><div style="font-family:&quot;Courier New&quot;, Courier, monospace;color:#6EE7B7;display:flex;font-size:14.28px;line-height:1;font-weight:bold;transition:color 0.3s ease;width:3ch;justify-content:space-between;margin-top:0.05em"><span style="width:1ch;text-align:center;display:inline-block">0</span><span style="width:1ch;text-align:center;display:inline-block">1</span></div></div></span><span class="min-w-0 leading-tight"><span class="relative block h-[22px] w-[240px]"><span class="cub-working absolute inset-0 text-base font-bold text-gray-900 leading-[22px] whitespace-nowrap">Working on Northwind Pharma</span><span class="cub-cleared absolute inset-0 text-base font-bold text-emerald-800 leading-[22px] whitespace-nowrap">Backlog cleared</span></span><span class="block text-sm text-gray-500">\u20AC530,000 received \xB7 12 Aug</span></span><span class="ml-auto inline-flex items-center gap-1.5 shrink-0 text-sm font-bold text-emerald-700"><span class="cub-pulse w-2 h-2 rounded-full bg-emerald-500"></span> Live</span></div><div class="rounded-xl border border-gray-100 bg-gray-50/70 px-4 py-2.5 mb-4"><div class="flex items-end justify-between"><span class="text-sm font-semibold text-gray-500">Unapplied</span><span class="relative block h-[30px] w-[130px]"><span class="cub-p0 absolute inset-0 text-right text-2xl font-bold text-gray-900 tabular-nums leading-[30px]">\u20AC1.19M</span><span class="cub-p1 absolute inset-0 text-right text-2xl font-bold text-gray-900 tabular-nums leading-[30px]">\u20AC660k</span><span class="cub-p2 absolute inset-0 text-right text-2xl font-bold text-gray-900 tabular-nums leading-[30px]">\u20AC300k</span><span class="cub-p3 absolute inset-0 text-right text-2xl font-bold text-gray-900 tabular-nums leading-[30px]">\u20AC0</span></span></div><div class="mt-2 h-1.5 rounded-full bg-gray-200 overflow-hidden"><div class="cub-bar h-full rounded-full" style="background:linear-gradient(90deg,#6ee7b7,#16a34a)"></div></div></div><div class="relative" style="height:184px"><div class="cub-step0 absolute left-0 right-0 flex items-center gap-3 rounded-xl border px-3" style="top:0;height:56px"><span class="cub-tile0 w-9 h-9 rounded-lg flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link2 h-5 w-5"><path d="M9 17H7A5 5 0 0 1 7 7h2"></path><path d="M15 7h2a5 5 0 1 1 0 10h-2"></path><line x1="8" x2="16" y1="12" y2="12"></line></svg></span><span class="cub-text0 min-w-0 leading-tight"><span class="block text-sm font-bold text-gray-900 truncate">Matched 2 invoices</span><span class="block text-sm text-gray-500 truncate">INV-4471 + INV-4488</span></span><span class="ml-auto flex items-center gap-2 shrink-0"><span class="cub-doing0 inline-flex items-center gap-1 text-xs font-bold text-emerald-700"><span class="cub-blink w-1.5 h-1.5 rounded-full bg-emerald-500"></span> working</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check cub-tick0 h-5 w-5 text-emerald-600"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg></span></div><div class="cub-step1 absolute left-0 right-0 flex items-center gap-3 rounded-xl border px-3" style="top:64px;height:56px"><span class="cub-tile1 w-9 h-9 rounded-lg flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scissors h-5 w-5"><circle cx="6" cy="6" r="3"></circle><path d="M8.12 8.12 12 12"></path><path d="M20 4 8.12 15.88"></path><circle cx="6" cy="18" r="3"></circle><path d="M14.8 14.8 20 20"></path></svg></span><span class="cub-text1 min-w-0 leading-tight"><span class="block text-sm font-bold text-gray-900 truncate">Split the short pay</span><span class="block text-sm text-gray-500 truncate">\u20AC640 credit note, not a shortfall</span></span><span class="ml-auto flex items-center gap-2 shrink-0"><span class="cub-doing1 inline-flex items-center gap-1 text-xs font-bold text-emerald-700"><span class="cub-blink w-1.5 h-1.5 rounded-full bg-emerald-500"></span> working</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check cub-tick1 h-5 w-5 text-emerald-600"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg></span></div><div class="cub-step2 absolute left-0 right-0 flex items-center gap-3 rounded-xl border px-3" style="top:128px;height:56px"><span class="cub-tile2 w-9 h-9 rounded-lg flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open h-5 w-5"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg></span><span class="cub-text2 min-w-0 leading-tight"><span class="block text-sm font-bold text-gray-900 truncate">Posted to your ERP</span><span class="block text-sm text-gray-500 truncate">Cash cleared against the account</span></span><span class="ml-auto flex items-center gap-2 shrink-0"><span class="cub-doing2 inline-flex items-center gap-1 text-xs font-bold text-emerald-700"><span class="cub-blink w-1.5 h-1.5 rounded-full bg-emerald-500"></span> working</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check cub-tick2 h-5 w-5 text-emerald-600"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg></span></div></div></div></div></div>`};var p=()=>location.pathname.startsWith("/de/")||location.pathname==="/de";var t={css:"",stories:{},locale:"en"};function d({css:r,stories:e,locale:a}){t.css=r,t.stories=e,t.locale=a||"en",customElements.get("transformance-story")||customElements.define("transformance-story",n)}var g=":host(.tf-off) *{animation-play-state:paused!important}",n=class extends HTMLElement{connectedCallback(){if(this._wired)return;this._wired=!0;let e=this.getAttribute("data-story")||"";if(t.locale==="en"&&p()){this.style.display="none";return}if(!t.stories[e]){console.warn("[transformance-story] unknown story:",e,"(locale "+t.locale+")");return}this._html=t.stories[e],this.style.display="block";let i=window.matchMedia("(max-width: 1023px)").matches&&this.getAttribute("data-h-sm")||this.getAttribute("data-h")||560;if(this.style.minHeight=i+"px",!("IntersectionObserver"in window)){this._mount();return}let s=new IntersectionObserver(h=>{if(!h.some(x=>x.isIntersecting))return;s.disconnect();let o=()=>this._mount();"requestIdleCallback"in window?requestIdleCallback(o,{timeout:600}):requestAnimationFrame(()=>setTimeout(o,0))},{rootMargin:"400px 0px"});s.observe(this)}disconnectedCallback(){this._vis&&(this._vis.disconnect(),this._vis=null)}_mount(){if(this._mounted)return;this._mounted=!0;let e=this.attachShadow({mode:"open"}),a=document.createElement("style");a.textContent=t.css+g,e.appendChild(a),e.appendChild(document.createRange().createContextualFragment(this._html)),this.style.minHeight="",this._vis=new IntersectionObserver(i=>{i.forEach(s=>this.classList.toggle("tf-off",!s.isIntersecting))},{rootMargin:"100px 0px"}),this._vis.observe(this)}};d({css:l,stories:c,locale:"en"});})();
