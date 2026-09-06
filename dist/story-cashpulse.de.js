(()=>{var l=`/*! tailwindcss v4.1.11 | MIT License | https://tailwindcss.com */
@layer properties;
@layer theme, base, components, utilities;
@layer theme {
  :root, :host {
    --color-amber-50: oklch(98.7% 0.022 95.277);
    --color-amber-300: oklch(87.9% 0.169 91.605);
    --color-amber-700: oklch(55.5% 0.163 48.998);
    --color-amber-800: oklch(47.3% 0.137 46.201);
    --color-emerald-50: oklch(97.9% 0.021 166.113);
    --color-emerald-100: oklch(95% 0.052 163.051);
    --color-emerald-200: oklch(90.5% 0.093 164.15);
    --color-emerald-300: oklch(84.5% 0.143 164.978);
    --color-emerald-600: oklch(59.6% 0.145 163.225);
    --color-emerald-700: oklch(50.8% 0.118 165.612);
    --color-emerald-800: oklch(43.2% 0.095 166.913);
    --color-emerald-900: oklch(37.8% 0.077 168.94);
    --color-indigo-50: oklch(96.2% 0.018 272.314);
    --color-indigo-100: oklch(93% 0.034 272.788);
    --color-indigo-200: oklch(87% 0.065 274.039);
    --color-indigo-300: oklch(78.5% 0.115 274.713);
    --color-indigo-500: oklch(58.5% 0.233 277.117);
    --color-indigo-600: oklch(51.1% 0.262 276.966);
    --color-indigo-700: oklch(45.7% 0.24 277.023);
    --color-indigo-900: oklch(35.9% 0.144 278.697);
    --color-rose-50: oklch(96.9% 0.015 12.422);
    --color-rose-100: oklch(94.1% 0.03 12.58);
    --color-rose-200: oklch(89.2% 0.058 10.001);
    --color-rose-600: oklch(58.6% 0.253 17.585);
    --color-gray-50: oklch(98.5% 0.002 247.839);
    --color-gray-100: oklch(96.7% 0.003 264.542);
    --color-gray-200: oklch(92.8% 0.006 264.531);
    --color-gray-300: oklch(87.2% 0.01 258.338);
    --color-gray-400: oklch(70.7% 0.022 261.325);
    --color-gray-500: oklch(55.1% 0.027 264.364);
    --color-gray-600: oklch(44.6% 0.03 256.802);
    --color-gray-700: oklch(37.3% 0.034 259.733);
    --color-gray-800: oklch(27.8% 0.033 256.848);
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
    --text-5xl: 3rem;
    --text-5xl--line-height: 1;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
    --tracking-wide: 0.025em;
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
  .right-1 {
    right: calc(var(--spacing) * 1);
  }
  .bottom-0 {
    bottom: calc(var(--spacing) * 0);
  }
  .left-0 {
    left: calc(var(--spacing) * 0);
  }
  .z-10 {
    z-index: 10;
  }
  .mx-auto {
    margin-inline: auto;
  }
  .mt-2 {
    margin-top: calc(var(--spacing) * 2);
  }
  .mt-3 {
    margin-top: calc(var(--spacing) * 3);
  }
  .mt-4 {
    margin-top: calc(var(--spacing) * 4);
  }
  .mt-5 {
    margin-top: calc(var(--spacing) * 5);
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
  .h-2 {
    height: calc(var(--spacing) * 2);
  }
  .h-3 {
    height: calc(var(--spacing) * 3);
  }
  .h-4 {
    height: calc(var(--spacing) * 4);
  }
  .h-5 {
    height: calc(var(--spacing) * 5);
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
  .h-\\[2px\\] {
    height: 2px;
  }
  .h-\\[20px\\] {
    height: 20px;
  }
  .h-\\[30px\\] {
    height: 30px;
  }
  .h-\\[38px\\] {
    height: 38px;
  }
  .h-\\[40px\\] {
    height: 40px;
  }
  .h-\\[42px\\] {
    height: 42px;
  }
  .h-\\[64px\\] {
    height: 64px;
  }
  .h-\\[76px\\] {
    height: 76px;
  }
  .h-full {
    height: 100%;
  }
  .min-h-screen {
    min-height: 100vh;
  }
  .w-2 {
    width: calc(var(--spacing) * 2);
  }
  .w-3 {
    width: calc(var(--spacing) * 3);
  }
  .w-4 {
    width: calc(var(--spacing) * 4);
  }
  .w-5 {
    width: calc(var(--spacing) * 5);
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
  .w-\\[64px\\] {
    width: 64px;
  }
  .w-\\[76px\\] {
    width: 76px;
  }
  .w-\\[120px\\] {
    width: 120px;
  }
  .w-\\[150px\\] {
    width: 150px;
  }
  .w-\\[250px\\] {
    width: 250px;
  }
  .w-\\[260px\\] {
    width: 260px;
  }
  .w-\\[640px\\] {
    width: 640px;
  }
  .w-full {
    width: 100%;
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
  .grow {
    flex-grow: 1;
  }
  .transform {
    transform: var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,);
  }
  .items-baseline {
    align-items: baseline;
  }
  .items-center {
    align-items: center;
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
  .gap-3 {
    gap: calc(var(--spacing) * 3);
  }
  .gap-4 {
    gap: calc(var(--spacing) * 4);
  }
  .gap-16 {
    gap: calc(var(--spacing) * 16);
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
  .rounded-xl {
    border-radius: var(--radius-xl);
  }
  .rounded-t-md {
    border-top-left-radius: var(--radius-md);
    border-top-right-radius: var(--radius-md);
  }
  .border {
    border-style: var(--tw-border-style);
    border-width: 1px;
  }
  .border-2 {
    border-style: var(--tw-border-style);
    border-width: 2px;
  }
  .border-r-2 {
    border-right-style: var(--tw-border-style);
    border-right-width: 2px;
  }
  .border-b {
    border-bottom-style: var(--tw-border-style);
    border-bottom-width: 1px;
  }
  .border-dashed {
    --tw-border-style: dashed;
    border-style: dashed;
  }
  .border-amber-300 {
    border-color: var(--color-amber-300);
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
  .border-gray-300 {
    border-color: var(--color-gray-300);
  }
  .border-indigo-200 {
    border-color: var(--color-indigo-200);
  }
  .border-indigo-300 {
    border-color: var(--color-indigo-300);
  }
  .border-indigo-500 {
    border-color: var(--color-indigo-500);
  }
  .border-rose-200 {
    border-color: var(--color-rose-200);
  }
  .border-white {
    border-color: var(--color-white);
  }
  .bg-amber-50 {
    background-color: var(--color-amber-50);
  }
  .bg-emerald-50 {
    background-color: var(--color-emerald-50);
  }
  .bg-emerald-100 {
    background-color: var(--color-emerald-100);
  }
  .bg-emerald-600 {
    background-color: var(--color-emerald-600);
  }
  .bg-gray-50 {
    background-color: var(--color-gray-50);
  }
  .bg-gray-50\\/70 {
    background-color: color-mix(in srgb, oklch(98.5% 0.002 247.839) 70%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-gray-50) 70%, transparent);
    }
  }
  .bg-gray-100 {
    background-color: var(--color-gray-100);
  }
  .bg-gray-200 {
    background-color: var(--color-gray-200);
  }
  .bg-gray-800 {
    background-color: var(--color-gray-800);
  }
  .bg-gray-900 {
    background-color: var(--color-gray-900);
  }
  .bg-indigo-50 {
    background-color: var(--color-indigo-50);
  }
  .bg-indigo-50\\/60 {
    background-color: color-mix(in srgb, oklch(96.2% 0.018 272.314) 60%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-indigo-50) 60%, transparent);
    }
  }
  .bg-indigo-100 {
    background-color: var(--color-indigo-100);
  }
  .bg-indigo-500 {
    background-color: var(--color-indigo-500);
  }
  .bg-indigo-600 {
    background-color: var(--color-indigo-600);
  }
  .bg-rose-50 {
    background-color: var(--color-rose-50);
  }
  .bg-rose-100 {
    background-color: var(--color-rose-100);
  }
  .bg-rose-600 {
    background-color: var(--color-rose-600);
  }
  .bg-white {
    background-color: var(--color-white);
  }
  .p-6 {
    padding: calc(var(--spacing) * 6);
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
  .py-2 {
    padding-block: calc(var(--spacing) * 2);
  }
  .py-20 {
    padding-block: calc(var(--spacing) * 20);
  }
  .pb-3\\.5 {
    padding-bottom: calc(var(--spacing) * 3.5);
  }
  .text-center {
    text-align: center;
  }
  .text-2xl {
    font-size: var(--text-2xl);
    line-height: var(--tw-leading, var(--text-2xl--line-height));
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
  .leading-\\[20px\\] {
    --tw-leading: 20px;
    line-height: 20px;
  }
  .leading-\\[30px\\] {
    --tw-leading: 30px;
    line-height: 30px;
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
  .tracking-wide {
    --tw-tracking: var(--tracking-wide);
    letter-spacing: var(--tracking-wide);
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
  .text-amber-800 {
    color: var(--color-amber-800);
  }
  .text-emerald-600 {
    color: var(--color-emerald-600);
  }
  .text-emerald-700 {
    color: var(--color-emerald-700);
  }
  .text-emerald-700\\/80 {
    color: color-mix(in srgb, oklch(50.8% 0.118 165.612) 80%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-emerald-700) 80%, transparent);
    }
  }
  .text-emerald-800 {
    color: var(--color-emerald-800);
  }
  .text-emerald-900 {
    color: var(--color-emerald-900);
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
  .text-indigo-600 {
    color: var(--color-indigo-600);
  }
  .text-indigo-700 {
    color: var(--color-indigo-700);
  }
  .text-indigo-700\\/80 {
    color: color-mix(in srgb, oklch(45.7% 0.24 277.023) 80%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-indigo-700) 80%, transparent);
    }
  }
  .text-indigo-900 {
    color: var(--color-indigo-900);
  }
  .text-rose-600 {
    color: var(--color-rose-600);
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
  .ring-emerald-200 {
    --tw-ring-color: var(--color-emerald-200);
  }
  .ring-indigo-200 {
    --tw-ring-color: var(--color-indigo-200);
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
  .last\\:border-r-0 {
    &:last-child {
      border-right-style: var(--tw-border-style);
      border-right-width: 0px;
    }
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
`;var p={"cashpulse-loop":`<style>
        @keyframes cpRing  { 0%{transform:scale(.9);opacity:.5;} 70%{transform:scale(1.55);opacity:0;} 100%{transform:scale(1.55);opacity:0;} }
        @keyframes cpPulse { 0%,100%{opacity:1;} 50%{opacity:.3;} }

        
        @keyframes cpSig0 {
          0%,3%       { opacity:0; transform: translateX(-10px); }
          9%,100% { opacity:1; transform: translateX(0); }
        }
        @keyframes cpLead0 {
          0%,5%    { stroke-dashoffset:100; opacity:0; }
          7%       { opacity:1; }
          14%,100% { stroke-dashoffset:0; opacity:1; }
        }
        @keyframes cpSig1 {
          0%,8%       { opacity:0; transform: translateX(-10px); }
          14%,100% { opacity:1; transform: translateX(0); }
        }
        @keyframes cpLead1 {
          0%,10%    { stroke-dashoffset:100; opacity:0; }
          12%       { opacity:1; }
          19%,100% { stroke-dashoffset:0; opacity:1; }
        }
        @keyframes cpSig2 {
          0%,13%       { opacity:0; transform: translateX(-10px); }
          19%,100% { opacity:1; transform: translateX(0); }
        }
        @keyframes cpLead2 {
          0%,15%    { stroke-dashoffset:100; opacity:0; }
          17%       { opacity:1; }
          24%,100% { stroke-dashoffset:0; opacity:1; }
        }
        @keyframes cpSig3 {
          0%,18%       { opacity:0; transform: translateX(-10px); }
          24%,100% { opacity:1; transform: translateX(0); }
        }
        @keyframes cpLead3 {
          0%,20%    { stroke-dashoffset:100; opacity:0; }
          22%       { opacity:1; }
          29%,100% { stroke-dashoffset:0; opacity:1; }
        }

        /* the cone opens, then tightens once the gap is closed */
        @keyframes cpConeIn    { 0%,22%{opacity:0;} 30%,100%{opacity:1;} }
        @keyframes cpConeWide  { 0%,60%{opacity:1;} 70%,100%{opacity:0;} }
        @keyframes cpConeTight { 0%,60%{opacity:0;} 70%,100%{opacity:1;} }
        @keyframes cpP50In { 0%,24%{stroke-dashoffset:400;opacity:0;} 27%{opacity:1;} 38%,100%{stroke-dashoffset:0;opacity:1;} }
        @keyframes cpDipOut{ 0%,60%{opacity:1;} 68%,100%{opacity:0;} }
        @keyframes cpGhost { 0%,60%{opacity:0;} 70%,100%{opacity:.45;} }
        @keyframes cpFixIn { 0%,62%{stroke-dashoffset:400;opacity:0;} 65%{opacity:1;} 76%,100%{stroke-dashoffset:0;opacity:1;} }

        /* the gap is spotted, named, then closed */
        @keyframes cpFlag { 0%,38%{opacity:0;transform:scale(.6);} 44%,62%{opacity:1;transform:scale(1);} 68%,100%{opacity:0;transform:scale(.6);} }
        @keyframes cpRisk { 0%,42%{opacity:0;transform:translateY(6px);} 48%,60%{opacity:1;transform:none;} 66%,100%{opacity:0;transform:translateY(-6px);} }
        @keyframes cpAct  { 0%,62%{opacity:0;transform:translateY(6px);} 70%,100%{opacity:1;transform:none;} }
        @keyframes cpVal1 { 0%,64%{opacity:1;} 68%,100%{opacity:0;} }
        @keyframes cpVal2 { 0%,64%{opacity:0;} 68%,100%{opacity:1;} }

        /* one human decision, on a real button, with a real cursor */
        @keyframes cpBtn {
          0%,48%   { transform:scale(1); box-shadow:0 0 0 0 rgba(79,70,229,0); }
          54%      { transform:scale(1); box-shadow:0 0 0 0 rgba(79,70,229,.35); }
          60%      { transform:scale(1); box-shadow:0 0 0 8px rgba(79,70,229,0); }
          62%      { transform:scale(.96); }
          66%,100% { transform:scale(1); box-shadow:0 0 0 0 rgba(79,70,229,0); }
        }
        @keyframes cpCursor {
          0%,48%   { transform: translate(-46px,26px); opacity:0; }
          52%      { transform: translate(-46px,26px); opacity:1; }
          60%      { transform: translate(-6px,4px); opacity:1; }
          62%      { transform: translate(-6px,4px) scale(.82); opacity:1; }
          66%      { transform: translate(-6px,4px); opacity:1; }
          74%      { transform: translate(-6px,4px); opacity:0; }
          100%     { transform: translate(-46px,26px); opacity:0; }
        }
        @keyframes cpBtnA { 0%,63%{opacity:1;} 65%,100%{opacity:0;} }
        @keyframes cpBtnB { 0%,63%{opacity:0;} 65%,100%{opacity:1;} }

        @keyframes cpSt1 { 0%,18%{opacity:1;} 20%,100%{opacity:0;} }
        @keyframes cpSt2 { 0%,20%{opacity:0;} 22%,38%{opacity:1;} 40%,100%{opacity:0;} }
        @keyframes cpSt3 { 0%,40%{opacity:0;} 42%,62%{opacity:1;} 64%,100%{opacity:0;} }
        @keyframes cpSt4 { 0%,64%{opacity:0;} 66%,100%{opacity:1;} }

        .cp-ring  { animation: cpRing 2.6s ease-out infinite; }
        .cp-ring2 { animation: cpRing 2.6s ease-out infinite; animation-delay:1.3s; }
        .cp-pulse { animation: cpPulse 1.4s ease-in-out infinite; }
        
        .cp-sig0  { animation: cpSig0 10s ease-out infinite; opacity:0; }
        .cp-lead0 { animation: cpLead0 10s ease-out infinite; opacity:0; }
        .cp-sig1  { animation: cpSig1 10s ease-out infinite; opacity:0; }
        .cp-lead1 { animation: cpLead1 10s ease-out infinite; opacity:0; }
        .cp-sig2  { animation: cpSig2 10s ease-out infinite; opacity:0; }
        .cp-lead2 { animation: cpLead2 10s ease-out infinite; opacity:0; }
        .cp-sig3  { animation: cpSig3 10s ease-out infinite; opacity:0; }
        .cp-lead3 { animation: cpLead3 10s ease-out infinite; opacity:0; }
        .cp-conein    { animation: cpConeIn 10s ease-out infinite; opacity:0; }
        .cp-conewide  { animation: cpConeWide 10s ease-out infinite; }
        .cp-conetight { animation: cpConeTight 10s ease-out infinite; opacity:0; }
        .cp-p50   { animation: cpP50In 10s ease-out infinite, cpDipOut 10s ease-out infinite; }
        .cp-ghost { animation: cpGhost 10s ease-out infinite; opacity:0; }
        .cp-fix   { animation: cpFixIn 10s ease-out infinite; opacity:0; }
        .cp-flag  { animation: cpFlag 10s ease-out infinite; opacity:0; }
        .cp-risk  { animation: cpRisk 10s ease-out infinite; opacity:0; }
        .cp-act   { animation: cpAct 10s ease-out infinite; opacity:0; }
        .cp-v1    { animation: cpVal1 10s linear infinite; }
        .cp-v2    { animation: cpVal2 10s linear infinite; opacity:0; }
        .cp-btn   { animation: cpBtn 10s ease-out infinite; }
        .cp-cursor{ animation: cpCursor 10s cubic-bezier(.4,0,.2,1) infinite; opacity:0; }
        .cp-a { animation: cpBtnA 10s linear infinite; }
        .cp-b { animation: cpBtnB 10s linear infinite; opacity:0; }
        .cp-s1 { animation: cpSt1 10s linear infinite; }
        .cp-s2 { animation: cpSt2 10s linear infinite; opacity:0; }
        .cp-s3 { animation: cpSt3 10s linear infinite; opacity:0; }
        .cp-s4 { animation: cpSt4 10s linear infinite; opacity:0; }
      </style><div class="tf-cardonly"><div class="tf-card relative w-[640px] shrink-0" style="--card-w:640px"><div class="bg-white rounded-2xl shadow-xl border border-gray-100/80 p-6"><div class="flex items-center gap-3 pb-3.5 mb-3 border-b border-gray-100"><div title="Vero \u2014 thinking" class="flex-shrink-0 " style="width:30px;height:30px;background-color:#111827;border-radius:50%;display:flex;align-items:center;justify-content:center;overflow:hidden;user-select:none"><div style="font-family:&quot;Courier New&quot;, Courier, monospace;color:#6EE7B7;display:flex;font-size:12.6px;line-height:1;font-weight:bold;transition:color 0.3s ease;width:3ch;justify-content:space-between;margin-top:0.05em"><span style="width:1ch;text-align:center;display:inline-block">0</span><span style="width:1ch;text-align:center;display:inline-block">1</span></div></div><span class="min-w-0 leading-tight"><span class="block text-base font-bold text-gray-900">Liquidit\xE4t, n\xE4chste 90 Tage</span><span class="relative block h-[20px] w-[250px]"><span class="cp-s1 absolute inset-0 text-sm text-gray-500 leading-[20px]">Liest den Bestand</span><span class="cp-s2 absolute inset-0 text-sm text-gray-500 leading-[20px]">Bestimmt jeden Zahltermin</span><span class="cp-s3 absolute inset-0 text-sm font-semibold text-rose-600 leading-[20px]">\u20AC274k L\xFCcke in Woche 6</span><span class="cp-s4 absolute inset-0 text-sm font-semibold text-emerald-700 leading-[20px]">L\xFCcke gedeckt</span></span></span><span class="ml-auto inline-flex items-center gap-1.5 shrink-0 text-sm font-bold text-indigo-700"><span class="cp-pulse w-2 h-2 rounded-full bg-indigo-500"></span> Live</span></div><div class="relative" style="height:212px"><svg class="absolute inset-0 pointer-events-none" width="592" height="212" fill="none" aria-hidden="true"><path class="cp-lead0" d="M140,24 C159.8,24 153.2,105 171,105" stroke="#4f46e5" stroke-opacity="0.45" stroke-width="2" stroke-linecap="round" stroke-dasharray="100" pathLength="100"></path><path class="cp-lead1" d="M140,74 C159.8,74 153.2,105 171,105" stroke="#4f46e5" stroke-opacity="0.45" stroke-width="2" stroke-linecap="round" stroke-dasharray="100" pathLength="100"></path><path class="cp-lead2" d="M140,124 C159.8,124 153.2,105 171,105" stroke="#4f46e5" stroke-opacity="0.45" stroke-width="2" stroke-linecap="round" stroke-dasharray="100" pathLength="100"></path><path class="cp-lead3" d="M140,180 C159.8,180 153.2,105 171,105" stroke="#4f46e5" stroke-opacity="0.8" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="100" pathLength="100"></path><g class="cp-conein"><path class="cp-conewide" d="M245,105 L592,43 L592,171 Z" fill="#4f46e5" fill-opacity="0.10"></path><path class="cp-conetight" d="M245,105 L592,65 L592,135 Z" fill="#16a34a" fill-opacity="0.12"></path><path d="M245,29 V185" stroke="#d1d5db" stroke-width="1.5" stroke-dasharray="3 4"></path><path class="cp-p50" d="M245,105 C300,97 330,139 380,135 C440,131 500,111 592,107" stroke="#4f46e5" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="400" pathLength="400"></path><path class="cp-ghost" d="M245,105 C300,97 330,139 380,135 C440,131 500,111 592,107" stroke="#9ca3af" stroke-width="2" stroke-linecap="round" stroke-dasharray="4 5"></path><path class="cp-fix" d="M245,105 C300,95 330,89 380,85 C440,81 500,75 592,71" stroke="#16a34a" stroke-width="3" stroke-linecap="round" stroke-dasharray="400" pathLength="400"></path></g><g class="cp-flag"><circle cx="380" cy="135" r="14" fill="#e11d48" fill-opacity="0.12"></circle><circle cx="380" cy="135" r="7" fill="#fff" stroke="#e11d48" stroke-width="2.5"></circle></g></svg><div class="cp-sig0 absolute left-0 flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-2" style="top:4px;width:140px;height:40px"><span class="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text h-4 w-4"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg></span><span class="text-xs font-semibold text-gray-700 leading-tight">1.284 Rechnungen</span></div><div class="cp-sig1 absolute left-0 flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-2" style="top:54px;width:140px;height:40px"><span class="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-landmark h-4 w-4"><line x1="3" x2="21" y1="22" y2="22"></line><line x1="6" x2="6" y1="18" y2="11"></line><line x1="10" x2="10" y1="18" y2="11"></line><line x1="14" x2="14" y1="18" y2="11"></line><line x1="18" x2="18" y1="18" y2="11"></line><polygon points="12 2 20 7 4 7"></polygon></svg></span><span class="text-xs font-semibold text-gray-700 leading-tight">Kontost\xE4nde</span></div><div class="cp-sig2 absolute left-0 flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-2" style="top:104px;width:140px;height:40px"><span class="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-receipt h-4 w-4"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"></path><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 17.5v-11"></path></svg></span><span class="text-xs font-semibold text-gray-700 leading-tight">Zahlungsausg\xE4nge</span></div><div class="cp-sig3 absolute left-0 flex items-center gap-2 rounded-xl border-2 border-indigo-300 bg-white px-2 shadow-sm" style="top:154px;width:140px;height:52px"><span class="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brain h-4 w-4"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M19.967 17.484A4 4 0 0 1 18 18"></path></svg></span><span class="min-w-0 leading-tight"><span class="block text-[10px] font-bold uppercase tracking-wider text-indigo-600">Modell</span><span class="block text-xs font-bold text-gray-900 truncate">Zahltermin</span><span class="block text-[10px] text-gray-400 truncate">wann Geld kommt</span></span></div><div class="absolute" style="left:205px;top:105px;transform:translate(-50%,-50%);z-index:20"><div class="relative flex items-center justify-center"><span class="cp-ring absolute w-[76px] h-[76px] rounded-full" style="box-shadow:0 0 0 2px rgba(79,70,229,.45)"></span><span class="cp-ring2 absolute w-[76px] h-[76px] rounded-full" style="box-shadow:0 0 0 2px rgba(79,70,229,.45)"></span><div class="relative w-[64px] h-[64px] rounded-full bg-white border-2 border-indigo-200 shadow-lg flex items-center justify-center"><div title="Vero \u2014 thinking" class="flex-shrink-0 " style="width:34px;height:34px;background-color:#111827;border-radius:50%;display:flex;align-items:center;justify-content:center;overflow:hidden;user-select:none"><div style="font-family:&quot;Courier New&quot;, Courier, monospace;color:#6EE7B7;display:flex;font-size:14.28px;line-height:1;font-weight:bold;transition:color 0.3s ease;width:3ch;justify-content:space-between;margin-top:0.05em"><span style="width:1ch;text-align:center;display:inline-block">0</span><span style="width:1ch;text-align:center;display:inline-block">0</span></div></div></div></div></div><span class="absolute text-xs font-semibold text-gray-400" style="left:233px;top:198px">heute</span><span class="absolute text-xs font-semibold text-gray-400" style="left:366px;top:198px">Woche 6</span><span class="absolute text-xs font-semibold text-gray-400" style="right:0;top:198px">+90 Tage</span></div><div class="relative mt-2" style="height:62px"><div class="cp-risk absolute inset-0 flex items-center gap-3 rounded-xl border border-rose-200 bg-rose-50 px-3.5"><span class="w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-triangle-alert h-5 w-5"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg></span><span class="min-w-0 leading-tight"><span class="block text-sm font-bold text-gray-900">Merrick \xB7 \u20AC274k f\xE4llig 14.9.</span><span class="block text-sm text-gray-500">Zwei gebrochene Zusagen, zahlt 11 Tage langsamer</span></span></div><div class="cp-act absolute inset-0 flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-3.5"><span class="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-call h-5 w-5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><path d="M14.05 2a9 9 0 0 1 8 7.94"></path><path d="M14.05 6A5 5 0 0 1 18 10"></path></svg></span><span class="min-w-0 leading-tight"><span class="block text-sm font-bold text-emerald-900">Gemahnt und terminiert</span><span class="block text-sm text-emerald-700/80">\u20AC274k zugesagt zum 9.9.</span></span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check ml-auto h-5 w-5 shrink-0 text-emerald-600"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg></div></div><div class="mt-3 flex items-center gap-4 rounded-xl border border-gray-100 bg-gray-50/70 px-4" style="height:62px"><span class="min-w-0 leading-tight"><span class="block text-sm font-semibold text-gray-500">Erwartet in 90 Tagen</span><span class="relative block h-[30px] w-[120px]"><span class="cp-v1 absolute inset-0 text-2xl font-bold text-gray-900 tabular-nums leading-[30px]">\u20AC4.10M</span><span class="cp-v2 absolute inset-0 text-2xl font-bold text-emerald-700 tabular-nums leading-[30px]">\u20AC4.37M</span></span></span><span class="relative ml-auto shrink-0"><span class="cp-btn relative block h-[40px] w-[150px] rounded-xl"><span class="cp-a absolute inset-0 inline-flex items-center justify-center rounded-xl bg-indigo-600 text-sm font-bold text-white">L\xFCcke schlie\xDFen</span><span class="cp-b absolute inset-0 inline-flex items-center justify-center gap-1.5 rounded-xl bg-emerald-50 text-sm font-bold text-emerald-700 ring-1 ring-emerald-200"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check h-4 w-4"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Geschlossen</span></span><svg class="cp-cursor absolute pointer-events-none" style="right:8px;bottom:-2px;width:20px;height:20px;z-index:40" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 3l14 8.5-6.2 1.2L10 19 5 3z" fill="#111827" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"></path></svg></span></div></div></div></div>`,"cashpulse-paydate":`<style>
        @keyframes cpdPulse { 0%,100%{opacity:1;} 50%{opacity:.3;} }
        @keyframes cpdGrid  { 0%,2%{opacity:0;} 8%,100%{opacity:1;} }

        
        @keyframes cpdRow_mk {
          0%,8%        { opacity:0; transform: translateY(8px); }
          14%,100%  { opacity:1; transform: translateY(0); }
        }
        /* the chip moves from the week it is due to the week it will pay */
        @keyframes cpdChip_mk {
          0%,30%        { transform: translateX(0); }
          40%,100% { transform: translateX(164px); }
        }
        @keyframes cpdWhy_mk {
          0%,32%    { opacity:0; transform: translateY(4px); }
          39%,100%  { opacity:1; transform: none; }
        }
        
        @keyframes cpdGhost_mk {
          0%,31%    { opacity:0; }
          37%,100%  { opacity:1; }
        }
        @keyframes cpdLink_mk {
          0%,32%    { stroke-dashoffset:100; opacity:0; }
          34%       { opacity:1; }
          41%,100% { stroke-dashoffset:0; opacity:1; }
        }
        @keyframes cpdRow_hv {
          0%,13%        { opacity:0; transform: translateY(8px); }
          19%,100%  { opacity:1; transform: translateY(0); }
        }
        /* the chip moves from the week it is due to the week it will pay */
        @keyframes cpdChip_hv {
          0%,40%        { transform: translateX(0); }
          50%,100% { transform: translateX(0px); }
        }
        @keyframes cpdWhy_hv {
          0%,42%    { opacity:0; transform: translateY(4px); }
          49%,100%  { opacity:1; transform: none; }
        }
        
        @keyframes cpdRow_ks {
          0%,18%        { opacity:0; transform: translateY(8px); }
          24%,100%  { opacity:1; transform: translateY(0); }
        }
        /* the chip moves from the week it is due to the week it will pay */
        @keyframes cpdChip_ks {
          0%,50%        { transform: translateX(0); }
          60%,100% { transform: translateX(-82px); }
        }
        @keyframes cpdWhy_ks {
          0%,52%    { opacity:0; transform: translateY(4px); }
          59%,100%  { opacity:1; transform: none; }
        }
        
        @keyframes cpdGhost_ks {
          0%,51%    { opacity:0; }
          57%,100%  { opacity:1; }
        }
        @keyframes cpdLink_ks {
          0%,52%    { stroke-dashoffset:100; opacity:0; }
          54%       { opacity:1; }
          61%,100% { stroke-dashoffset:0; opacity:1; }
        }

        @keyframes cpdSum1 { 0%,58%{opacity:1;} 63%,100%{opacity:0;} }
        @keyframes cpdSum2 { 0%,58%{opacity:0;} 63%,100%{opacity:1;} }
        @keyframes cpdSumIn{ 0%,20%{opacity:0;transform:translateY(6px);} 28%,100%{opacity:1;transform:none;} }
        @keyframes cpdSt1 { 0%,22%{opacity:1;} 24%,100%{opacity:0;} }
        @keyframes cpdSt2 { 0%,24%{opacity:0;} 26%,58%{opacity:1;} 60%,100%{opacity:0;} }
        @keyframes cpdSt3 { 0%,60%{opacity:0;} 62%,100%{opacity:1;} }

        .cpd-pulse { animation: cpdPulse 1.4s ease-in-out infinite; }
        .cpd-grid  { animation: cpdGrid 10s ease-out infinite; opacity:0; }
        
        .cpd-row-mk   { animation: cpdRow_mk 10s ease-out infinite; opacity:0; }
        .cpd-chip-mk  { animation: cpdChip_mk 10s cubic-bezier(.4,0,.2,1) infinite; }
        .cpd-why-mk   { animation: cpdWhy_mk 10s ease-out infinite; opacity:0; }
        
        .cpd-ghost-mk { animation: cpdGhost_mk 10s ease-out infinite; opacity:0; }
        .cpd-link-mk  { animation: cpdLink_mk 10s ease-out infinite; opacity:0; }
        .cpd-row-hv   { animation: cpdRow_hv 10s ease-out infinite; opacity:0; }
        .cpd-chip-hv  { animation: cpdChip_hv 10s cubic-bezier(.4,0,.2,1) infinite; }
        .cpd-why-hv   { animation: cpdWhy_hv 10s ease-out infinite; opacity:0; }
        
        .cpd-row-ks   { animation: cpdRow_ks 10s ease-out infinite; opacity:0; }
        .cpd-chip-ks  { animation: cpdChip_ks 10s cubic-bezier(.4,0,.2,1) infinite; }
        .cpd-why-ks   { animation: cpdWhy_ks 10s ease-out infinite; opacity:0; }
        
        .cpd-ghost-ks { animation: cpdGhost_ks 10s ease-out infinite; opacity:0; }
        .cpd-link-ks  { animation: cpdLink_ks 10s ease-out infinite; opacity:0; }
        .cpd-sumin { animation: cpdSumIn 10s ease-out infinite; opacity:0; }
        .cpd-s1 { animation: cpdSum1 10s linear infinite; }
        .cpd-s2 { animation: cpdSum2 10s linear infinite; opacity:0; }
        .cpd-t1 { animation: cpdSt1 10s linear infinite; }
        .cpd-t2 { animation: cpdSt2 10s linear infinite; opacity:0; }
        .cpd-t3 { animation: cpdSt3 10s linear infinite; opacity:0; }
      </style><div class="tf-cardonly"><div class="tf-card relative w-[640px] shrink-0" style="--card-w:640px"><div class="bg-white rounded-2xl shadow-xl border border-gray-100/80 p-6"><div class="flex items-center gap-3 pb-3.5 mb-3 border-b border-gray-100"><div title="Vero \u2014 thinking" class="flex-shrink-0 " style="width:30px;height:30px;background-color:#111827;border-radius:50%;display:flex;align-items:center;justify-content:center;overflow:hidden;user-select:none"><div style="font-family:&quot;Courier New&quot;, Courier, monospace;color:#6EE7B7;display:flex;font-size:12.6px;line-height:1;font-weight:bold;transition:color 0.3s ease;width:3ch;justify-content:space-between;margin-top:0.05em"><span style="width:1ch;text-align:center;display:inline-block">0</span><span style="width:1ch;text-align:center;display:inline-block">0</span></div></div><span class="min-w-0 leading-tight"><span class="block text-base font-bold text-gray-900">Prognostizierte Zahltermine</span><span class="relative block h-[20px] w-[250px]"><span class="cpd-t1 absolute inset-0 text-sm text-gray-500 leading-[20px]">Liest drei Jahre Zahlverhalten</span><span class="cpd-t2 absolute inset-0 text-sm text-gray-500 leading-[20px]">Datiert jede Rechnung</span><span class="cpd-t3 absolute inset-0 text-sm font-semibold text-indigo-700 leading-[20px]">Woche 38 korrigiert</span></span></span><span class="ml-auto inline-flex items-center gap-1.5 shrink-0 text-sm font-bold text-indigo-700"><span class="cpd-pulse w-2 h-2 rounded-full bg-indigo-500"></span> Live</span></div><div class="relative" style="height:228px"><div class="cpd-grid absolute inset-0"><span class="absolute text-xs font-semibold text-gray-400 text-center" style="left:182px;top:0;width:82px">W37</span><span class="absolute text-xs font-semibold text-gray-400 text-center" style="left:264px;top:0;width:82px">W38</span><span class="absolute text-xs font-semibold text-gray-400 text-center" style="left:346px;top:0;width:82px">W39</span><span class="absolute text-xs font-semibold text-gray-400 text-center" style="left:428px;top:0;width:82px">W40</span><span class="absolute text-xs font-semibold text-gray-400 text-center" style="left:510px;top:0;width:82px">W41</span><svg class="absolute inset-0 pointer-events-none" width="592" height="228" fill="none" aria-hidden="true"><path d="M182,18 V228" stroke="#e5e7eb" stroke-width="1" stroke-dasharray="3 4"></path><path d="M264,18 V228" stroke="#e5e7eb" stroke-width="1" stroke-dasharray="3 4"></path><path d="M346,18 V228" stroke="#e5e7eb" stroke-width="1" stroke-dasharray="3 4"></path><path d="M428,18 V228" stroke="#e5e7eb" stroke-width="1" stroke-dasharray="3 4"></path><path d="M510,18 V228" stroke="#e5e7eb" stroke-width="1" stroke-dasharray="3 4"></path><path d="M592,18 V228" stroke="#e5e7eb" stroke-width="1" stroke-dasharray="3 4"></path><path class="cpd-link-mk" d="M337,48 H437" stroke="#4f46e5" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-dasharray="100" pathLength="100"></path><path class="cpd-link-ks" d="M437,180 H419" stroke="#4f46e5" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-dasharray="100" pathLength="100"></path></svg></div><div class="cpd-row-mk absolute left-0 right-0" style="top:26px;height:44px"><div class="absolute left-0 flex items-center gap-2" style="width:174px;height:44px"><span class="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-bag h-5 w-5"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg></span><span class="min-w-0 leading-tight"><span class="block text-sm font-bold text-gray-900 truncate">Merrick</span></span></div><span class="cpd-ghost-mk absolute rounded-lg border-2 border-dashed border-gray-300" style="left:273px;top:7px;width:64px;height:30px"></span><span class="cpd-chip-mk absolute inline-flex items-center justify-center rounded-lg border-2 text-sm font-bold tabular-nums bg-amber-50 border-amber-300 text-amber-800" style="left:273px;top:7px;width:64px;height:30px;z-index:10">\u20AC690k</span><span class="cpd-why-mk absolute inline-flex items-center rounded-full px-2.5 text-sm font-semibold whitespace-nowrap bg-amber-50 text-amber-700" style="left:44px;top:42px;height:24px;z-index:12">Zahlt immer 9 Tage zu sp\xE4t</span></div><div class="cpd-row-hv absolute left-0 right-0" style="top:92px;height:44px"><div class="absolute left-0 flex items-center gap-2" style="width:174px;height:44px"><span class="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-factory h-5 w-5"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M17 18h1"></path><path d="M12 18h1"></path><path d="M7 18h1"></path></svg></span><span class="min-w-0 leading-tight"><span class="block text-sm font-bold text-gray-900 truncate">Halvex</span></span></div><span class="cpd-chip-hv absolute inline-flex items-center justify-center rounded-lg border-2 text-sm font-bold tabular-nums bg-gray-50 border-gray-300 text-gray-700" style="left:273px;top:7px;width:64px;height:30px;z-index:10">\u20AC420k</span><span class="cpd-why-hv absolute inline-flex items-center rounded-full px-2.5 text-sm font-semibold whitespace-nowrap bg-gray-100 text-gray-600" style="left:44px;top:42px;height:24px;z-index:12">Zahlt immer p\xFCnktlich</span></div><div class="cpd-row-ks absolute left-0 right-0" style="top:158px;height:44px"><div class="absolute left-0 flex items-center gap-2" style="width:174px;height:44px"><span class="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-truck h-5 w-5"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg></span><span class="min-w-0 leading-tight"><span class="block text-sm font-bold text-gray-900 truncate">Kestrel</span></span></div><span class="cpd-ghost-ks absolute rounded-lg border-2 border-dashed border-gray-300" style="left:437px;top:7px;width:64px;height:30px"></span><span class="cpd-chip-ks absolute inline-flex items-center justify-center rounded-lg border-2 text-sm font-bold tabular-nums bg-emerald-50 border-emerald-300 text-emerald-800" style="left:437px;top:7px;width:64px;height:30px;z-index:10">\u20AC500k</span><span class="cpd-why-ks absolute inline-flex items-center rounded-full px-2.5 text-sm font-semibold whitespace-nowrap bg-emerald-50 text-emerald-700" style="left:44px;top:42px;height:24px;z-index:12">Zieht 2% Skonto</span></div></div><div class="cpd-sumin mt-4 flex items-center gap-3 rounded-xl border border-indigo-200 bg-indigo-50/60 px-4" style="height:62px"><span class="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-clock h-5 w-5"><path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path><path d="M16 2v4"></path><path d="M8 2v4"></path><path d="M3 10h5"></path><path d="M17.5 17.5 16 16.3V14"></path><circle cx="16" cy="16" r="6"></circle></svg></span><span class="relative block h-[38px] flex-1"><span class="cpd-s1 absolute inset-0 leading-tight"><span class="block text-sm font-semibold text-gray-500">Woche 38, laut Rechnung</span><span class="block text-2xl font-bold text-gray-900 tabular-nums">\u20AC1.11M</span></span><span class="cpd-s2 absolute inset-0 leading-tight"><span class="block text-sm font-semibold text-indigo-700/80">Woche 38, laut Prognose</span><span class="block text-2xl font-bold text-indigo-900 tabular-nums">\u20AC0.42M</span></span></span></div></div></div></div>`,"cashpulse-group":`<style>
        @keyframes cpgPulse { 0%,100%{opacity:1;} 50%{opacity:.3;} }

        
        @keyframes cpgRow_de {
          0%,4%       { opacity:0; transform: translateY(8px); }
          10%,100% { opacity:1; transform: none; }
        }
        /* local currency converts to the group currency */
        @keyframes cpgFx_de {
          0%,12%    { opacity:0; transform: translateX(-6px); }
          18%,100% { opacity:1; transform: none; }
        }
        /* and takes its place in the group position */
        @keyframes cpgSeg_de {
          0%,38%       { width:0px; }
          46%,100%     { width:395px; }
        }
        @keyframes cpgRow_uk {
          0%,10%       { opacity:0; transform: translateY(8px); }
          16%,100% { opacity:1; transform: none; }
        }
        /* local currency converts to the group currency */
        @keyframes cpgFx_uk {
          0%,18%    { opacity:0; transform: translateX(-6px); }
          24%,100% { opacity:1; transform: none; }
        }
        /* and takes its place in the group position */
        @keyframes cpgSeg_uk {
          0%,44%       { width:0px; }
          52%,100%     { width:144px; }
        }
        @keyframes cpgRow_pl {
          0%,16%       { opacity:0; transform: translateY(8px); }
          22%,100% { opacity:1; transform: none; }
        }
        /* local currency converts to the group currency */
        @keyframes cpgFx_pl {
          0%,24%    { opacity:0; transform: translateX(-6px); }
          30%,100% { opacity:1; transform: none; }
        }
        /* and takes its place in the group position */
        @keyframes cpgSeg_pl {
          0%,50%       { width:0px; }
          58%,100%     { width:53px; }
        }

        /* the part you cannot move */
        @keyframes cpgLock  { 0%,62%{opacity:0;} 68%,100%{opacity:1;} }
        @keyframes cpgFree  { 0%,62%{opacity:1;} 68%,100%{opacity:0;} }
        @keyframes cpgTag   { 0%,64%{opacity:0;transform:translateY(6px);} 71%,100%{opacity:1;transform:none;} }
        @keyframes cpgTot1  { 0%,64%{opacity:1;} 69%,100%{opacity:0;} }
        @keyframes cpgTot2  { 0%,64%{opacity:0;} 69%,100%{opacity:1;} }
        @keyframes cpgTotIn { 0%,54%{opacity:0;transform:translateY(6px);} 61%,100%{opacity:1;transform:none;} }

        @keyframes cpgSt1 { 0%,30%{opacity:1;} 32%,100%{opacity:0;} }
        @keyframes cpgSt2 { 0%,32%{opacity:0;} 34%,62%{opacity:1;} 64%,100%{opacity:0;} }
        @keyframes cpgSt3 { 0%,64%{opacity:0;} 66%,100%{opacity:1;} }

        .cpg-pulse { animation: cpgPulse 1.4s ease-in-out infinite; }
        
        .cpg-row-de { animation: cpgRow_de 10s ease-out infinite; opacity:0; }
        .cpg-fx-de  { animation: cpgFx_de 10s ease-out infinite; opacity:0; }
        .cpg-seg-de { animation: cpgSeg_de 10s cubic-bezier(.4,0,.2,1) infinite; width:0; }
        .cpg-row-uk { animation: cpgRow_uk 10s ease-out infinite; opacity:0; }
        .cpg-fx-uk  { animation: cpgFx_uk 10s ease-out infinite; opacity:0; }
        .cpg-seg-uk { animation: cpgSeg_uk 10s cubic-bezier(.4,0,.2,1) infinite; width:0; }
        .cpg-row-pl { animation: cpgRow_pl 10s ease-out infinite; opacity:0; }
        .cpg-fx-pl  { animation: cpgFx_pl 10s ease-out infinite; opacity:0; }
        .cpg-seg-pl { animation: cpgSeg_pl 10s cubic-bezier(.4,0,.2,1) infinite; width:0; }
        .cpg-lock { animation: cpgLock 10s ease-out infinite; opacity:0; }
        .cpg-free { animation: cpgFree 10s ease-out infinite; }
        .cpg-tag  { animation: cpgTag 10s ease-out infinite; opacity:0; }
        .cpg-t1   { animation: cpgTot1 10s linear infinite; }
        .cpg-t2   { animation: cpgTot2 10s linear infinite; opacity:0; }
        .cpg-totin{ animation: cpgTotIn 10s ease-out infinite; opacity:0; }
        .cpg-s1 { animation: cpgSt1 10s linear infinite; }
        .cpg-s2 { animation: cpgSt2 10s linear infinite; opacity:0; }
        .cpg-s3 { animation: cpgSt3 10s linear infinite; opacity:0; }
      </style><div class="tf-cardonly"><div class="tf-card relative w-[640px] shrink-0" style="--card-w:640px"><div class="bg-white rounded-2xl shadow-xl border border-gray-100/80 p-6"><div class="flex items-center gap-3 pb-3.5 mb-4 border-b border-gray-100"><div title="Vero \u2014 thinking" class="flex-shrink-0 " style="width:30px;height:30px;background-color:#111827;border-radius:50%;display:flex;align-items:center;justify-content:center;overflow:hidden;user-select:none"><div style="font-family:&quot;Courier New&quot;, Courier, monospace;color:#6EE7B7;display:flex;font-size:12.6px;line-height:1;font-weight:bold;transition:color 0.3s ease;width:3ch;justify-content:space-between;margin-top:0.05em"><span style="width:1ch;text-align:center;display:inline-block">1</span><span style="width:1ch;text-align:center;display:inline-block">0</span></div></div><span class="min-w-0 leading-tight"><span class="block text-base font-bold text-gray-900">Konzernliquidit\xE4t</span><span class="relative block h-[20px] w-[250px]"><span class="cpg-s1 absolute inset-0 text-sm text-gray-500 leading-[20px]">Liest 40 Konten, 3 Gesellschaften</span><span class="cpg-s2 absolute inset-0 text-sm text-gray-500 leading-[20px]">Rechnet zu Tageskursen um</span><span class="cpg-s3 absolute inset-0 text-sm font-semibold text-indigo-700 leading-[20px]">\u20AC310k sind gebunden</span></span></span><span class="ml-auto inline-flex items-center gap-1.5 shrink-0 text-sm font-bold text-indigo-700"><span class="cpg-pulse w-2 h-2 rounded-full bg-indigo-500"></span> Live</span></div><div class="relative" style="height:172px"><div class="cpg-row-de absolute left-0 right-0 flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-3" style="top:0;height:52px"><span class="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center shrink-0 text-xs font-bold tracking-wide">EUR</span><span class="min-w-0 leading-tight"><span class="block text-sm font-bold text-gray-900 truncate">Deutschland</span><span class="block text-sm text-gray-500 tabular-nums">\u20AC2,280,000</span></span><span class="cpg-fx-de ml-auto flex items-center gap-2 shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right h-4 w-4 text-gray-300"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg><span class="text-base font-bold text-gray-900 tabular-nums">\u20AC2.28M</span></span></div><div class="cpg-row-uk absolute left-0 right-0 flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-3" style="top:60px;height:52px"><span class="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center shrink-0 text-xs font-bold tracking-wide">GBP</span><span class="min-w-0 leading-tight"><span class="block text-sm font-bold text-gray-900 truncate">Gro\xDFbritannien</span><span class="block text-sm text-gray-500 tabular-nums">\xA3710,000</span></span><span class="cpg-fx-uk ml-auto flex items-center gap-2 shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right h-4 w-4 text-gray-300"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg><span class="text-base font-bold text-gray-900 tabular-nums">\u20AC830k</span></span></div><div class="cpg-row-pl absolute left-0 right-0 flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-3" style="top:120px;height:52px"><span class="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center shrink-0 text-xs font-bold tracking-wide">PLN</span><span class="min-w-0 leading-tight"><span class="block text-sm font-bold text-gray-900 truncate">Polen</span><span class="block text-sm text-gray-500 tabular-nums">1,340,000 z\u0142</span></span><span class="cpg-fx-pl ml-auto flex items-center gap-2 shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right h-4 w-4 text-gray-300"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg><span class="text-base font-bold text-gray-900 tabular-nums">\u20AC310k</span></span></div></div><div class="relative mt-5" style="height:70px"><span class="cpg-tag absolute right-0 top-0 inline-flex items-center gap-1 rounded-full bg-gray-800 px-2.5 py-1 text-xs font-bold text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lock h-3 w-3"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> Gebunden</span><span class="cpg-tag absolute" style="left:560.5px;top:20px;width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:6px solid #1f2937"></span><div class="absolute left-0 right-0 flex overflow-hidden rounded-xl" style="top:26px;height:44px"><span class="cpg-seg-de relative flex items-center justify-center shrink-0 border-r-2 border-white last:border-r-0" style="height:44px"><span class="absolute inset-0" style="background:#4f46e5"></span><span class="relative text-sm font-bold text-white tabular-nums">\u20AC2.28M</span></span><span class="cpg-seg-uk relative flex items-center justify-center shrink-0 border-r-2 border-white last:border-r-0" style="height:44px"><span class="absolute inset-0" style="background:#818cf8"></span><span class="relative text-sm font-bold text-white tabular-nums">\u20AC830k</span></span><span class="cpg-seg-pl relative flex items-center justify-center shrink-0 border-r-2 border-white last:border-r-0" style="height:44px"><span class="cpg-free absolute inset-0" style="background:#818cf8"></span><span class="cpg-lock absolute inset-0" style="background:repeating-linear-gradient(45deg,#9ca3af,#9ca3af 5px,#d1d5db 5px,#d1d5db 10px)"></span></span></div></div><div class="cpg-totin mt-4 flex items-center gap-3 rounded-xl border border-indigo-200 bg-indigo-50/60 px-4" style="height:66px"><span class="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wallet h-5 w-5"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg></span><span class="relative block h-[42px] flex-1"><span class="cpg-t1 absolute inset-0 leading-tight"><span class="block text-sm font-semibold text-gray-500">Liquidit\xE4t im Konzern</span><span class="block text-2xl font-bold text-gray-900 tabular-nums">\u20AC3.42M</span></span><span class="cpg-t2 absolute inset-0 leading-tight"><span class="block text-sm font-semibold text-indigo-700/80">Heute f\xFCr den Konzern verf\xFCgbar</span><span class="flex items-baseline gap-2"><span class="text-2xl font-bold text-indigo-900 tabular-nums">\u20AC3.11M</span><span class="text-sm font-semibold text-gray-500">\u20AC310k in Polen gebunden</span></span></span></span></div></div></div></div>`,"cashpulse-scenario":`<style>
        @keyframes cpsPulse { 0%,100%{opacity:1;} 50%{opacity:.3;} }
        @keyframes cpsIn    { 0%,3%{opacity:0;transform:translateY(8px);} 10%,100%{opacity:1;transform:none;} }

        
        @keyframes cpsBar0 {
          0%,10%      { height:0px; }
          18%,56% { height:133px; }
          64%,100%         { height:133px; }
        }
        @keyframes cpsCol0 {
          0%,30%   { background:#818cf8; }
          34%,58%  { background:#818cf8; }
          64%,100% { background:#4f46e5; }
        }
        @keyframes cpsBar1 {
          0%,12%      { height:0px; }
          20%,56% { height:92px; }
          64%,100%         { height:92px; }
        }
        @keyframes cpsCol1 {
          0%,30%   { background:#818cf8; }
          34%,58%  { background:#818cf8; }
          64%,100% { background:#4f46e5; }
        }
        @keyframes cpsBar2 {
          0%,14%      { height:0px; }
          22%,56% { height:30px; }
          64%,100%         { height:92px; }
        }
        @keyframes cpsCol2 {
          0%,30%   { background:#818cf8; }
          34%,58%  { background:#e11d48; }
          64%,100% { background:#4f46e5; }
        }
        @keyframes cpsBar3 {
          0%,16%      { height:0px; }
          24%,56% { height:71px; }
          64%,100%         { height:133px; }
        }
        @keyframes cpsCol3 {
          0%,30%   { background:#818cf8; }
          34%,58%  { background:#818cf8; }
          64%,100% { background:#4f46e5; }
        }
        @keyframes cpsBar4 {
          0%,18%      { height:0px; }
          26%,56% { height:116px; }
          64%,100%         { height:116px; }
        }
        @keyframes cpsCol4 {
          0%,30%   { background:#818cf8; }
          34%,58%  { background:#818cf8; }
          64%,100% { background:#4f46e5; }
        }
        @keyframes cpsBar5 {
          0%,20%      { height:0px; }
          28%,56% { height:148px; }
          64%,100%         { height:148px; }
        }
        @keyframes cpsCol5 {
          0%,30%   { background:#818cf8; }
          34%,58%  { background:#818cf8; }
          64%,100% { background:#4f46e5; }
        }

        @keyframes cpsFloor { 0%,24%{stroke-dashoffset:100;opacity:0;} 27%{opacity:1;} 34%,100%{stroke-dashoffset:0;opacity:1;} }
        @keyframes cpsFloorL{ 0%,26%{opacity:0;} 33%,100%{opacity:1;} }

        /* the option you start on, and the one you move to */
        /* the selection swaps ON the click, not across it - a crossfade lets the
           unselected label bleed through and reads as double-printed text */
        @keyframes cpsSelA { 0%,55%{opacity:1;} 55.5%,100%{opacity:0;} }
        @keyframes cpsSelB { 0%,55%{opacity:0;} 55.5%,100%{opacity:1;} }
        @keyframes cpsCursor {
          0%,40%   { transform: translate(-44px,36px); opacity:0; }
          44%      { transform: translate(-44px,36px); opacity:1; }
          53%      { transform: translate(0,0); opacity:1; }
          55%      { transform: translate(0,0) scale(.82); opacity:1; }
          58%      { transform: translate(0,0); opacity:1; }
          70%      { transform: translate(0,0); opacity:0; }
          100%     { transform: translate(-44px,36px); opacity:0; }
        }

        @keyframes cpsV1 { 0%,34%{opacity:0;transform:translateY(6px);} 40%,56%{opacity:1;transform:none;} 60%,100%{opacity:0;transform:translateY(-6px);} }
        @keyframes cpsV2 { 0%,62%{opacity:0;transform:translateY(6px);} 70%,100%{opacity:1;transform:none;} }

        @keyframes cpsSt1 { 0%,32%{opacity:1;} 34%,100%{opacity:0;} }
        @keyframes cpsSt2 { 0%,34%{opacity:0;} 36%,58%{opacity:1;} 60%,100%{opacity:0;} }
        @keyframes cpsSt3 { 0%,60%{opacity:0;} 62%,100%{opacity:1;} }

        .cps-pulse { animation: cpsPulse 1.4s ease-in-out infinite; }
        .cps-in    { animation: cpsIn 10s ease-out infinite; opacity:0; }
        
        .cps-bar0 { animation: cpsBar0 10s cubic-bezier(.4,0,.2,1) infinite, cpsCol0 10s linear infinite; height:0; }
        .cps-bar1 { animation: cpsBar1 10s cubic-bezier(.4,0,.2,1) infinite, cpsCol1 10s linear infinite; height:0; }
        .cps-bar2 { animation: cpsBar2 10s cubic-bezier(.4,0,.2,1) infinite, cpsCol2 10s linear infinite; height:0; }
        .cps-bar3 { animation: cpsBar3 10s cubic-bezier(.4,0,.2,1) infinite, cpsCol3 10s linear infinite; height:0; }
        .cps-bar4 { animation: cpsBar4 10s cubic-bezier(.4,0,.2,1) infinite, cpsCol4 10s linear infinite; height:0; }
        .cps-bar5 { animation: cpsBar5 10s cubic-bezier(.4,0,.2,1) infinite, cpsCol5 10s linear infinite; height:0; }
        .cps-floor  { animation: cpsFloor 10s ease-out infinite; opacity:0; }
        .cps-floorl { animation: cpsFloorL 10s ease-out infinite; opacity:0; }
        .cps-sela   { animation: cpsSelA 10s linear infinite; }
        .cps-selb   { animation: cpsSelB 10s linear infinite; opacity:0; }
        .cps-cursor { animation: cpsCursor 10s cubic-bezier(.4,0,.2,1) infinite; opacity:0; }
        .cps-v1 { animation: cpsV1 10s ease-out infinite; opacity:0; }
        .cps-v2 { animation: cpsV2 10s ease-out infinite; opacity:0; }
        .cps-s1 { animation: cpsSt1 10s linear infinite; }
        .cps-s2 { animation: cpsSt2 10s linear infinite; opacity:0; }
        .cps-s3 { animation: cpsSt3 10s linear infinite; opacity:0; }
      </style><div class="tf-cardonly"><div class="tf-card relative w-[640px] shrink-0" style="--card-w:640px"><div class="bg-white rounded-2xl shadow-xl border border-gray-100/80 p-6"><div class="flex items-center gap-3 pb-3.5 mb-4 border-b border-gray-100"><div title="Vero \u2014 thinking" class="flex-shrink-0 " style="width:30px;height:30px;background-color:#111827;border-radius:50%;display:flex;align-items:center;justify-content:center;overflow:hidden;user-select:none"><div style="font-family:&quot;Courier New&quot;, Courier, monospace;color:#6EE7B7;display:flex;font-size:12.6px;line-height:1;font-weight:bold;transition:color 0.3s ease;width:3ch;justify-content:space-between;margin-top:0.05em"><span style="width:1ch;text-align:center;display:inline-block">1</span><span style="width:1ch;text-align:center;display:inline-block">0</span></div></div><span class="min-w-0 leading-tight"><span class="block text-base font-bold text-gray-900">Der Zahllauf \xFCber \u20AC660k</span><span class="relative block h-[20px] w-[250px]"><span class="cps-s1 absolute inset-0 text-sm text-gray-500 leading-[20px]">Endsaldo, Woche f\xFCr Woche</span><span class="cps-s2 absolute inset-0 text-sm font-semibold text-rose-600 leading-[20px]">Woche 3 rei\xDFt Ihr Minimum</span><span class="cps-s3 absolute inset-0 text-sm font-semibold text-emerald-700 leading-[20px]">Quartal ohne L\xFCcke</span></span></span><span class="ml-auto inline-flex items-center gap-1.5 shrink-0 text-sm font-bold text-indigo-700"><span class="cps-pulse w-2 h-2 rounded-full bg-indigo-500"></span> Live</span></div><div class="cps-in relative" style="height:46px"><span class="absolute flex items-center gap-2 rounded-xl border-2 border-gray-200 bg-white px-2.5" style="left:0;width:190px;height:46px"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-clock h-4 w-4 shrink-0 text-gray-400"><path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path><path d="M16 2v4"></path><path d="M8 2v4"></path><path d="M3 10h5"></path><path d="M17.5 17.5 16 16.3V14"></path><circle cx="16" cy="16" r="6"></circle></svg><span class="text-sm font-semibold text-gray-600 leading-tight">Am 15. zahlen</span></span><span class="absolute flex items-center gap-2 rounded-xl border-2 border-gray-200 bg-white px-2.5" style="left:201px;width:190px;height:46px"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-pause h-4 w-4 shrink-0 text-gray-400"><circle cx="12" cy="12" r="10"></circle><line x1="10" x2="10" y1="15" y2="9"></line><line x1="14" x2="14" y1="15" y2="9"></line></svg><span class="text-sm font-semibold text-gray-600 leading-tight">Auf den 25. schieben</span></span><span class="absolute flex items-center gap-2 rounded-xl border-2 border-gray-200 bg-white px-2.5" style="left:402px;width:190px;height:46px"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-landmark h-4 w-4 shrink-0 text-gray-400"><line x1="3" x2="21" y1="22" y2="22"></line><line x1="6" x2="6" y1="18" y2="11"></line><line x1="10" x2="10" y1="18" y2="11"></line><line x1="14" x2="14" y1="18" y2="11"></line><line x1="18" x2="18" y1="18" y2="11"></line><polygon points="12 2 20 7 4 7"></polygon></svg><span class="text-sm font-semibold text-gray-600 leading-tight">Kreditlinie ziehen</span></span><span class="cps-sela absolute flex items-center gap-2 rounded-xl border-2 border-indigo-500 bg-indigo-50 px-2.5" style="left:0;width:190px;height:46px"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-clock h-4 w-4 shrink-0 text-indigo-600"><path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path><path d="M16 2v4"></path><path d="M8 2v4"></path><path d="M3 10h5"></path><path d="M17.5 17.5 16 16.3V14"></path><circle cx="16" cy="16" r="6"></circle></svg><span class="text-sm font-bold text-indigo-900 leading-tight">Am 15. zahlen</span></span><span class="cps-selb absolute flex items-center gap-2 rounded-xl border-2 border-indigo-500 bg-indigo-50 px-2.5" style="left:201px;width:190px;height:46px"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-pause h-4 w-4 shrink-0 text-indigo-600"><circle cx="12" cy="12" r="10"></circle><line x1="10" x2="10" y1="15" y2="9"></line><line x1="14" x2="14" y1="15" y2="9"></line></svg><span class="text-sm font-bold text-indigo-900 leading-tight">Auf den 25. schieben</span></span><svg class="cps-cursor absolute pointer-events-none" style="left:365px;top:34px;width:20px;height:20px;z-index:40" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 3l14 8.5-6.2 1.2L10 19 5 3z" fill="#111827" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"></path></svg></div><div class="relative mt-5" style="height:172px"><div class="absolute left-0 right-0" style="top:0;height:150px"><span class="absolute bottom-0" style="left:21px;width:56px"><span class="cps-bar0 block w-full rounded-t-md"></span></span><span class="absolute bottom-0" style="left:119px;width:56px"><span class="cps-bar1 block w-full rounded-t-md"></span></span><span class="absolute bottom-0" style="left:217px;width:56px"><span class="cps-bar2 block w-full rounded-t-md"></span></span><span class="absolute bottom-0" style="left:315px;width:56px"><span class="cps-bar3 block w-full rounded-t-md"></span></span><span class="absolute bottom-0" style="left:413px;width:56px"><span class="cps-bar4 block w-full rounded-t-md"></span></span><span class="absolute bottom-0" style="left:511px;width:56px"><span class="cps-bar5 block w-full rounded-t-md"></span></span><svg class="absolute inset-0 pointer-events-none" width="592" height="150" fill="none" aria-hidden="true"><path d="M0,150 H592" stroke="#e5e7eb" stroke-width="1.5"></path><path class="cps-floor" d="M0,103 H592" stroke="#e11d48" stroke-width="2" stroke-dasharray="100" pathLength="100" stroke-linecap="round" style="stroke-dasharray:100"></path></svg><span class="cps-floorl absolute right-1 inline-flex items-center rounded-full bg-rose-600 px-2 py-0.5 text-xs font-bold text-white" style="top:81px">\u20AC500k Minimum</span></div><span class="absolute text-xs font-semibold text-gray-400 text-center" style="left:0;top:156px;width:98px">Woche 1</span><span class="absolute text-xs font-semibold text-gray-400 text-center" style="left:98px;top:156px;width:98px">Woche 2</span><span class="absolute text-xs font-semibold text-gray-400 text-center" style="left:196px;top:156px;width:98px">Woche 3</span><span class="absolute text-xs font-semibold text-gray-400 text-center" style="left:294px;top:156px;width:98px">Woche 4</span><span class="absolute text-xs font-semibold text-gray-400 text-center" style="left:392px;top:156px;width:98px">Woche 5</span><span class="absolute text-xs font-semibold text-gray-400 text-center" style="left:490px;top:156px;width:98px">Woche 6</span></div><div class="relative mt-3" style="height:62px"><div class="cps-v1 absolute inset-0 flex items-center gap-3 rounded-xl border border-rose-200 bg-rose-50 px-3.5"><span class="w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-triangle-alert h-5 w-5"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg></span><span class="min-w-0 leading-tight"><span class="block text-sm font-bold text-gray-900">\u20AC180k L\xFCcke in Woche 3</span><span class="block text-sm text-gray-500">Neun Tage in der \xDCberziehung</span></span></div><div class="cps-v2 absolute inset-0 flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-3.5"><span class="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-check h-5 w-5"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg></span><span class="min-w-0 leading-tight"><span class="block text-sm font-bold text-emerald-900">Gedeckt, mit \u20AC480k Puffer</span><span class="block text-sm text-emerald-700/80">Tiefpunkt r\xFCckt auf Woche 2, bei \u20AC980k</span></span></div></div></div></div></div>`,"cashpulse-accuracy":`<style>
        @keyframes cpaPulse { 0%,100%{opacity:1;} 50%{opacity:.3;} }

        
        @keyframes cpaRow_ontime {
          0%,6%       { opacity:0; transform: translateY(10px); }
          13%,100% { opacity:1; transform: none; }
        }
        @keyframes cpaAmt_ontime {
          0%,10%    { opacity:0; transform: scale(.7); }
          16%,100% { opacity:1; transform: scale(1); }
        }
        
        @keyframes cpaRow_early {
          0%,16%       { opacity:0; transform: translateY(10px); }
          23%,100% { opacity:1; transform: none; }
        }
        @keyframes cpaAmt_early {
          0%,20%    { opacity:0; transform: scale(.7); }
          26%,100% { opacity:1; transform: scale(1); }
        }
        
        @keyframes cpaRow_miss {
          0%,26%       { opacity:0; transform: translateY(10px); }
          33%,100% { opacity:1; transform: none; }
        }
        @keyframes cpaAmt_miss {
          0%,30%    { opacity:0; transform: scale(.7); }
          36%,100% { opacity:1; transform: scale(1); }
        }
        
        @keyframes cpaWhy_miss {
          0%,36%   { opacity:0; transform: translateY(4px); }
          43%,100% { opacity:1; transform: none; }
        }

        /* the line that makes it a reconciliation rather than a list */
        @keyframes cpaRule  { 0%,48%{transform:scaleX(0);} 56%,100%{transform:scaleX(1);} }
        @keyframes cpaTotal { 0%,54%{opacity:0;transform:translateY(6px);} 62%,100%{opacity:1;transform:none;} }
        @keyframes cpaScore { 0%,64%{opacity:0;transform:scale(.8);} 72%,100%{opacity:1;transform:scale(1);} }

        @keyframes cpaSt1 { 0%,24%{opacity:1;} 26%,100%{opacity:0;} }
        @keyframes cpaSt2 { 0%,26%{opacity:0;} 28%,60%{opacity:1;} 62%,100%{opacity:0;} }
        @keyframes cpaSt3 { 0%,62%{opacity:0;} 64%,100%{opacity:1;} }

        .cpa-pulse { animation: cpaPulse 1.4s ease-in-out infinite; }
        
        .cpa-row-ontime { animation: cpaRow_ontime 9s ease-out infinite; opacity:0; }
        .cpa-amt-ontime { animation: cpaAmt_ontime 9s cubic-bezier(.3,1.5,.5,1) infinite; opacity:0; }
        
        .cpa-row-early { animation: cpaRow_early 9s ease-out infinite; opacity:0; }
        .cpa-amt-early { animation: cpaAmt_early 9s cubic-bezier(.3,1.5,.5,1) infinite; opacity:0; }
        
        .cpa-row-miss { animation: cpaRow_miss 9s ease-out infinite; opacity:0; }
        .cpa-amt-miss { animation: cpaAmt_miss 9s cubic-bezier(.3,1.5,.5,1) infinite; opacity:0; }
        .cpa-why-miss { animation: cpaWhy_miss 9s ease-out infinite; opacity:0; }
        .cpa-rule  { animation: cpaRule 9s cubic-bezier(.4,0,.2,1) infinite; transform-origin:left center; transform:scaleX(0); }
        .cpa-total { animation: cpaTotal 9s ease-out infinite; opacity:0; }
        .cpa-score { animation: cpaScore 9s cubic-bezier(.3,1.5,.5,1) infinite; opacity:0; }
        .cpa-s1 { animation: cpaSt1 9s linear infinite; }
        .cpa-s2 { animation: cpaSt2 9s linear infinite; opacity:0; }
        .cpa-s3 { animation: cpaSt3 9s linear infinite; opacity:0; }
      </style><div class="tf-cardonly"><div class="tf-card relative w-[640px] shrink-0" style="--card-w:640px"><div class="bg-white rounded-2xl shadow-xl border border-gray-100/80 p-6"><div class="flex items-center gap-3 pb-3.5 mb-4 border-b border-gray-100"><div title="Vero \u2014 thinking" class="flex-shrink-0 " style="width:30px;height:30px;background-color:#111827;border-radius:50%;display:flex;align-items:center;justify-content:center;overflow:hidden;user-select:none"><div style="font-family:&quot;Courier New&quot;, Courier, monospace;color:#6EE7B7;display:flex;font-size:12.6px;line-height:1;font-weight:bold;transition:color 0.3s ease;width:3ch;justify-content:space-between;margin-top:0.05em"><span style="width:1ch;text-align:center;display:inline-block">1</span><span style="width:1ch;text-align:center;display:inline-block">0</span></div></div><span class="min-w-0 leading-tight"><span class="block text-base font-bold text-gray-900">Woche 34, Prognose \u20AC1,84M</span><span class="relative block h-[20px] w-[260px]"><span class="cpa-s1 absolute inset-0 text-sm text-gray-500 leading-[20px]">Gleicht mit der Bank ab</span><span class="cpa-s2 absolute inset-0 text-sm text-gray-500 leading-[20px]">Erkl\xE4rt jede Abweichung</span><span class="cpa-s3 absolute inset-0 text-sm font-semibold text-indigo-700 leading-[20px]">Abgeglichen, eine Ausnahme</span></span></span><span class="ml-auto inline-flex items-center gap-1.5 shrink-0 text-sm font-bold text-indigo-700"><span class="cpa-pulse w-2 h-2 rounded-full bg-indigo-500"></span> Live</span></div><div class="relative" style="height:184px"><div class="cpa-row-ontime absolute left-0 right-0 flex items-center gap-3 rounded-xl border bg-white px-3 border-emerald-200" style="top:0;height:56px"><span class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-emerald-100 text-emerald-700"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check h-5 w-5"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg></span><span class="min-w-0 leading-tight"><span class="block text-sm font-bold text-gray-900 truncate">Am prognostizierten Tag</span><span class="block text-sm text-gray-500">1.102 Rechnungen</span></span><span class="cpa-amt-ontime ml-auto shrink-0 text-base font-bold tabular-nums text-gray-900">\u20AC1.71M</span></div><div class="cpa-row-early absolute left-0 right-0 flex items-center gap-3 rounded-xl border bg-white px-3 border-indigo-200" style="top:64px;height:56px"><span class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-indigo-100 text-indigo-700"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap h-5 w-5"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg></span><span class="min-w-0 leading-tight"><span class="block text-sm font-bold text-gray-900 truncate">Fr\xFCher als prognostiziert</span><span class="block text-sm text-gray-500">84 Rechnungen</span></span><span class="cpa-amt-early ml-auto shrink-0 text-base font-bold tabular-nums text-indigo-700">+\u20AC0.16M</span></div><div class="cpa-row-miss absolute left-0 right-0 flex items-center gap-3 rounded-xl border bg-white px-3 border-rose-200" style="top:128px;height:56px"><span class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-rose-100 text-rose-600"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-slash h-5 w-5"><circle cx="12" cy="12" r="10"></circle><line x1="9" x2="15" y1="15" y2="9"></line></svg></span><span class="min-w-0 leading-tight"><span class="block text-sm font-bold text-gray-900 truncate">Gar nicht eingegangen</span><span class="cpa-why-miss block text-sm font-semibold text-rose-600 truncate">Northbay stoppte den Zahllauf: ERP-Migration</span></span><span class="cpa-amt-miss ml-auto shrink-0 text-base font-bold tabular-nums text-rose-600">\u2212\u20AC0.09M</span></div></div><div class="mt-4 h-[2px] w-full bg-gray-200"><span class="cpa-rule block h-full w-full bg-gray-900"></span></div><div class="cpa-total mt-4 flex items-center gap-4 rounded-xl border border-indigo-200 bg-indigo-50/60 px-4" style="height:66px"><span class="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-target h-5 w-5"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg></span><span class="min-w-0 leading-tight"><span class="block text-sm font-semibold text-indigo-700/80">Tats\xE4chlich eingegangen</span><span class="block text-2xl font-bold text-indigo-900 tabular-nums">\u20AC1.78M</span></span><span class="cpa-score ml-auto flex items-center gap-3 shrink-0 rounded-xl bg-white px-3.5 py-2 ring-1 ring-indigo-200"><span class="text-2xl font-bold text-gray-900 tabular-nums">96.7%</span><span class="leading-tight"><span class="block text-sm font-semibold text-gray-500">genau</span><span class="block text-sm font-semibold text-gray-500">seit 13 Wochen</span></span></span></div></div></div></div>`};var c=()=>location.pathname.startsWith("/de/")||location.pathname==="/de";var e={css:"",stories:{},locale:"en"};function d({css:o,stories:t,locale:a}){e.css=o,e.stories=t,e.locale=a||"en",customElements.get("transformance-story")||customElements.define("transformance-story",n)}var x=":host(.tf-off) *{animation-play-state:paused!important}",n=class extends HTMLElement{connectedCallback(){if(this._wired)return;this._wired=!0;let t=this.getAttribute("data-story")||"";if(e.locale==="en"&&c()){this.style.display="none";return}if(!e.stories[t]){console.warn("[transformance-story] unknown story:",t,"(locale "+e.locale+")");return}this._html=e.stories[t],this.style.display="block";let i=window.matchMedia("(max-width: 1023px)").matches&&this.getAttribute("data-h-sm")||this.getAttribute("data-h")||560;if(this.style.minHeight=i+"px",!("IntersectionObserver"in window)){this._mount();return}let s=new IntersectionObserver(h=>{if(!h.some(g=>g.isIntersecting))return;s.disconnect();let r=()=>this._mount();"requestIdleCallback"in window?requestIdleCallback(r,{timeout:600}):requestAnimationFrame(()=>setTimeout(r,0))},{rootMargin:"400px 0px"});s.observe(this)}disconnectedCallback(){this._vis&&(this._vis.disconnect(),this._vis=null)}_mount(){if(this._mounted)return;this._mounted=!0;let t=this.attachShadow({mode:"open"}),a=document.createElement("style");a.textContent=e.css+x,t.appendChild(a),t.appendChild(document.createRange().createContextualFragment(this._html)),this.style.minHeight="",this._vis=new IntersectionObserver(i=>{i.forEach(s=>this.classList.toggle("tf-off",!s.isIntersecting))},{rootMargin:"100px 0px"}),this._vis.observe(this)}};d({css:l,stories:p,locale:"de"});})();
