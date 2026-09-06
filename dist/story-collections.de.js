(()=>{var o=`/*! tailwindcss v4.1.11 | MIT License | https://tailwindcss.com */
@layer properties;
@layer theme, base, components, utilities;
@layer theme {
  :root, :host {
    --color-amber-50: oklch(98.7% 0.022 95.277);
    --color-amber-100: oklch(96.2% 0.059 95.617);
    --color-amber-200: oklch(92.4% 0.12 95.746);
    --color-amber-500: oklch(76.9% 0.188 70.08);
    --color-amber-600: oklch(66.6% 0.179 58.318);
    --color-amber-700: oklch(55.5% 0.163 48.998);
    --color-emerald-50: oklch(97.9% 0.021 166.113);
    --color-emerald-100: oklch(95% 0.052 163.051);
    --color-emerald-200: oklch(90.5% 0.093 164.15);
    --color-emerald-500: oklch(69.6% 0.17 162.48);
    --color-emerald-600: oklch(59.6% 0.145 163.225);
    --color-emerald-700: oklch(50.8% 0.118 165.612);
    --color-emerald-800: oklch(43.2% 0.095 166.913);
    --color-violet-50: oklch(96.9% 0.016 293.756);
    --color-violet-100: oklch(94.3% 0.029 294.588);
    --color-violet-200: oklch(89.4% 0.057 293.283);
    --color-violet-300: oklch(81.1% 0.111 293.571);
    --color-violet-400: oklch(70.2% 0.183 293.541);
    --color-violet-500: oklch(60.6% 0.25 292.717);
    --color-violet-600: oklch(54.1% 0.281 293.009);
    --color-violet-700: oklch(49.1% 0.27 292.581);
    --color-rose-50: oklch(96.9% 0.015 12.422);
    --color-rose-100: oklch(94.1% 0.03 12.58);
    --color-rose-200: oklch(89.2% 0.058 10.001);
    --color-rose-600: oklch(58.6% 0.253 17.585);
    --color-rose-700: oklch(51.4% 0.222 16.935);
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
    --color-black: #000;
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
    --font-weight-medium: 500;
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
  .visible {
    visibility: visible;
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
  .inset-x-0 {
    inset-inline: calc(var(--spacing) * 0);
  }
  .top-0 {
    top: calc(var(--spacing) * 0);
  }
  .top-\\[3px\\] {
    top: 3px;
  }
  .top-\\[86px\\] {
    top: 86px;
  }
  .right-0 {
    right: calc(var(--spacing) * 0);
  }
  .right-1\\.5 {
    right: calc(var(--spacing) * 1.5);
  }
  .right-2 {
    right: calc(var(--spacing) * 2);
  }
  .right-2\\.5 {
    right: calc(var(--spacing) * 2.5);
  }
  .right-\\[3px\\] {
    right: 3px;
  }
  .left-0 {
    left: calc(var(--spacing) * 0);
  }
  .left-2 {
    left: calc(var(--spacing) * 2);
  }
  .left-2\\.5 {
    left: calc(var(--spacing) * 2.5);
  }
  .z-10 {
    z-index: 10;
  }
  .mx-auto {
    margin-inline: auto;
  }
  .mt-1 {
    margin-top: calc(var(--spacing) * 1);
  }
  .mt-1\\.5 {
    margin-top: calc(var(--spacing) * 1.5);
  }
  .mt-3 {
    margin-top: calc(var(--spacing) * 3);
  }
  .mt-4 {
    margin-top: calc(var(--spacing) * 4);
  }
  .mt-6 {
    margin-top: calc(var(--spacing) * 6);
  }
  .-mb-0\\.5 {
    margin-bottom: calc(var(--spacing) * -0.5);
  }
  .mb-1 {
    margin-bottom: calc(var(--spacing) * 1);
  }
  .mb-2 {
    margin-bottom: calc(var(--spacing) * 2);
  }
  .mb-3 {
    margin-bottom: calc(var(--spacing) * 3);
  }
  .mb-3\\.5 {
    margin-bottom: calc(var(--spacing) * 3.5);
  }
  .mb-4 {
    margin-bottom: calc(var(--spacing) * 4);
  }
  .mb-5 {
    margin-bottom: calc(var(--spacing) * 5);
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
  .h-1\\.5 {
    height: calc(var(--spacing) * 1.5);
  }
  .h-2 {
    height: calc(var(--spacing) * 2);
  }
  .h-2\\.5 {
    height: calc(var(--spacing) * 2.5);
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
  .h-\\[18px\\] {
    height: 18px;
  }
  .h-\\[20px\\] {
    height: 20px;
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
  .h-\\[34px\\] {
    height: 34px;
  }
  .h-\\[38px\\] {
    height: 38px;
  }
  .h-\\[60px\\] {
    height: 60px;
  }
  .h-\\[70px\\] {
    height: 70px;
  }
  .h-\\[560px\\] {
    height: 560px;
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
  .w-2\\.5 {
    width: calc(var(--spacing) * 2.5);
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
  .w-\\[18px\\] {
    width: 18px;
  }
  .w-\\[20px\\] {
    width: 20px;
  }
  .w-\\[34px\\] {
    width: 34px;
  }
  .w-\\[38px\\] {
    width: 38px;
  }
  .w-\\[42px\\] {
    width: 42px;
  }
  .w-\\[46px\\] {
    width: 46px;
  }
  .w-\\[60px\\] {
    width: 60px;
  }
  .w-\\[64px\\] {
    width: 64px;
  }
  .w-\\[70px\\] {
    width: 70px;
  }
  .w-\\[74px\\] {
    width: 74px;
  }
  .w-\\[86px\\] {
    width: 86px;
  }
  .w-\\[96px\\] {
    width: 96px;
  }
  .w-\\[112px\\] {
    width: 112px;
  }
  .w-\\[130px\\] {
    width: 130px;
  }
  .w-\\[132px\\] {
    width: 132px;
  }
  .w-\\[150px\\] {
    width: 150px;
  }
  .w-\\[290px\\] {
    width: 290px;
  }
  .w-\\[440px\\] {
    width: 440px;
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
  .w-full {
    width: 100%;
  }
  .max-w-\\[190px\\] {
    max-width: 190px;
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
  .flex-col {
    flex-direction: column;
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
  .justify-end {
    justify-content: flex-end;
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
  .gap-\\[3px\\] {
    gap: 3px;
  }
  .space-y-3\\.5 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 3.5) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 3.5) * calc(1 - var(--tw-space-y-reverse)));
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
  .rounded-\\[2px\\] {
    border-radius: 2px;
  }
  .rounded-\\[3px\\] {
    border-radius: 3px;
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
  .border-amber-100 {
    border-color: var(--color-amber-100);
  }
  .border-emerald-200 {
    border-color: var(--color-emerald-200);
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
  .border-gray-200\\/70 {
    border-color: color-mix(in srgb, oklch(92.8% 0.006 264.531) 70%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-gray-200) 70%, transparent);
    }
  }
  .border-rose-100 {
    border-color: var(--color-rose-100);
  }
  .border-violet-100 {
    border-color: var(--color-violet-100);
  }
  .border-violet-200 {
    border-color: var(--color-violet-200);
  }
  .border-violet-300 {
    border-color: var(--color-violet-300);
  }
  .bg-amber-50 {
    background-color: var(--color-amber-50);
  }
  .bg-amber-50\\/40 {
    background-color: color-mix(in srgb, oklch(98.7% 0.022 95.277) 40%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-amber-50) 40%, transparent);
    }
  }
  .bg-amber-100 {
    background-color: var(--color-amber-100);
  }
  .bg-amber-500 {
    background-color: var(--color-amber-500);
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
  .bg-gray-50\\/60 {
    background-color: color-mix(in srgb, oklch(98.5% 0.002 247.839) 60%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-gray-50) 60%, transparent);
    }
  }
  .bg-gray-100 {
    background-color: var(--color-gray-100);
  }
  .bg-gray-200 {
    background-color: var(--color-gray-200);
  }
  .bg-rose-50 {
    background-color: var(--color-rose-50);
  }
  .bg-rose-50\\/40 {
    background-color: color-mix(in srgb, oklch(96.9% 0.015 12.422) 40%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-rose-50) 40%, transparent);
    }
  }
  .bg-rose-100 {
    background-color: var(--color-rose-100);
  }
  .bg-violet-50 {
    background-color: var(--color-violet-50);
  }
  .bg-violet-50\\/40 {
    background-color: color-mix(in srgb, oklch(96.9% 0.016 293.756) 40%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-violet-50) 40%, transparent);
    }
  }
  .bg-violet-50\\/60 {
    background-color: color-mix(in srgb, oklch(96.9% 0.016 293.756) 60%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-violet-50) 60%, transparent);
    }
  }
  .bg-violet-100 {
    background-color: var(--color-violet-100);
  }
  .bg-violet-400 {
    background-color: var(--color-violet-400);
  }
  .bg-violet-500 {
    background-color: var(--color-violet-500);
  }
  .bg-violet-600 {
    background-color: var(--color-violet-600);
  }
  .bg-white {
    background-color: var(--color-white);
  }
  .p-3\\.5 {
    padding: calc(var(--spacing) * 3.5);
  }
  .p-6 {
    padding: calc(var(--spacing) * 6);
  }
  .p-8 {
    padding: calc(var(--spacing) * 8);
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
  .py-4 {
    padding-block: calc(var(--spacing) * 4);
  }
  .py-20 {
    padding-block: calc(var(--spacing) * 20);
  }
  .pt-4 {
    padding-top: calc(var(--spacing) * 4);
  }
  .pt-5 {
    padding-top: calc(var(--spacing) * 5);
  }
  .pr-1 {
    padding-right: calc(var(--spacing) * 1);
  }
  .pr-2\\.5 {
    padding-right: calc(var(--spacing) * 2.5);
  }
  .pr-4 {
    padding-right: calc(var(--spacing) * 4);
  }
  .pb-3\\.5 {
    padding-bottom: calc(var(--spacing) * 3.5);
  }
  .pb-4 {
    padding-bottom: calc(var(--spacing) * 4);
  }
  .pl-1 {
    padding-left: calc(var(--spacing) * 1);
  }
  .pl-2 {
    padding-left: calc(var(--spacing) * 2);
  }
  .text-center {
    text-align: center;
  }
  .text-right {
    text-align: right;
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
  .leading-\\[18px\\] {
    --tw-leading: 18px;
    line-height: 18px;
  }
  .leading-\\[24px\\] {
    --tw-leading: 24px;
    line-height: 24px;
  }
  .leading-\\[26px\\] {
    --tw-leading: 26px;
    line-height: 26px;
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
  .font-medium {
    --tw-font-weight: var(--font-weight-medium);
    font-weight: var(--font-weight-medium);
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
  .text-amber-600 {
    color: var(--color-amber-600);
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
  .text-emerald-700\\/80 {
    color: color-mix(in srgb, oklch(50.8% 0.118 165.612) 80%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-emerald-700) 80%, transparent);
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
  .text-gray-800 {
    color: var(--color-gray-800);
  }
  .text-gray-900 {
    color: var(--color-gray-900);
  }
  .text-rose-600 {
    color: var(--color-rose-600);
  }
  .text-rose-700 {
    color: var(--color-rose-700);
  }
  .text-violet-400 {
    color: var(--color-violet-400);
  }
  .text-violet-600 {
    color: var(--color-violet-600);
  }
  .text-violet-700 {
    color: var(--color-violet-700);
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
  .shadow {
    --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
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
  .ring-2 {
    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .ring-amber-200 {
    --tw-ring-color: var(--color-amber-200);
  }
  .ring-black\\/10 {
    --tw-ring-color: color-mix(in srgb, #000 10%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-ring-color: color-mix(in oklab, var(--color-black) 10%, transparent);
    }
  }
  .ring-emerald-200 {
    --tw-ring-color: var(--color-emerald-200);
  }
  .ring-rose-200 {
    --tw-ring-color: var(--color-rose-200);
  }
  .ring-violet-200 {
    --tw-ring-color: var(--color-violet-200);
  }
  .ring-violet-500 {
    --tw-ring-color: var(--color-violet-500);
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
`;var c={"collections-loop":`<style>
        @keyframes cldRing  { 0%{transform:scale(.9);opacity:.5;} 70%{transform:scale(1.5);opacity:0;} 100%{transform:scale(1.5);opacity:0;} }
        @keyframes cldPulse { 0%,100%{opacity:1;} 50%{opacity:.3;} }

        /* signals arrive, and their leaders draw into the agent */
        
        @keyframes cldSig0 {
          0%,3%       { opacity:0; transform: translateX(-10px); }
          9%,100% { opacity:1; transform: translateX(0); }
        }
        @keyframes cldLead0 {
          0%,5%    { stroke-dashoffset:100; opacity:0; }
          7%       { opacity:1; }
          14%,100% { stroke-dashoffset:0; opacity:1; }
        }
        @keyframes cldSig1 {
          0%,7%       { opacity:0; transform: translateX(-10px); }
          13%,100% { opacity:1; transform: translateX(0); }
        }
        @keyframes cldLead1 {
          0%,9%    { stroke-dashoffset:100; opacity:0; }
          11%       { opacity:1; }
          18%,100% { stroke-dashoffset:0; opacity:1; }
        }
        @keyframes cldSig2 {
          0%,11%       { opacity:0; transform: translateX(-10px); }
          17%,100% { opacity:1; transform: translateX(0); }
        }
        @keyframes cldLead2 {
          0%,13%    { stroke-dashoffset:100; opacity:0; }
          15%       { opacity:1; }
          22%,100% { stroke-dashoffset:0; opacity:1; }
        }
        @keyframes cldSig3 {
          0%,15%       { opacity:0; transform: translateX(-10px); }
          21%,100% { opacity:1; transform: translateX(0); }
        }
        @keyframes cldLead3 {
          0%,17%    { stroke-dashoffset:100; opacity:0; }
          19%       { opacity:1; }
          26%,100% { stroke-dashoffset:0; opacity:1; }
        }

        /* the ranked worklist appears, highest risk first */
        
        @keyframes cldRow0 {
          0%,18%   { opacity:0; transform: translateX(12px); }
          25%,30% { opacity:1; transform:none; background:#ffffff; border-color:#e5e7eb; }
          34%        { opacity:1; background:#ecfdf5; border-color:#86efac; }
          41%       { opacity:1; background:#ecfdf5; border-color:#86efac; transform:none; }
          47%,100%  { opacity:0; transform: translateY(20px) scale(.94); }
        }
        @keyframes cldRisk0 { 0%,30%{opacity:1;} 33%,100%{opacity:0;} }
        @keyframes cldOut0  { 0%,31%{opacity:0;} 35%,100%{opacity:1;} }
        @keyframes cldTile0 {
          0%,30%        { transform:scale(1); }
          33%       { transform:scale(1.16); }
          38%,100%  { transform:scale(1); }
        }
        @keyframes cldRow1 {
          0%,20%   { opacity:0; transform: translateX(12px); }
          27%,44% { opacity:1; transform:none; background:#ffffff; border-color:#e5e7eb; }
          48%        { opacity:1; background:#ecfdf5; border-color:#86efac; }
          55%       { opacity:1; background:#ecfdf5; border-color:#86efac; transform:none; }
          61%,100%  { opacity:0; transform: translateY(20px) scale(.94); }
        }
        @keyframes cldRisk1 { 0%,44%{opacity:1;} 47%,100%{opacity:0;} }
        @keyframes cldOut1  { 0%,45%{opacity:0;} 49%,100%{opacity:1;} }
        @keyframes cldTile1 {
          0%,44%        { transform:scale(1); }
          47%       { transform:scale(1.16); }
          52%,100%  { transform:scale(1); }
        }
        @keyframes cldRow2 {
          0%,22%   { opacity:0; transform: translateX(12px); }
          29%,58% { opacity:1; transform:none; background:#ffffff; border-color:#e5e7eb; }
          62%        { opacity:1; background:#ecfdf5; border-color:#86efac; }
          69%       { opacity:1; background:#ecfdf5; border-color:#86efac; transform:none; }
          75%,100%  { opacity:0; transform: translateY(20px) scale(.94); }
        }
        @keyframes cldRisk2 { 0%,58%{opacity:1;} 61%,100%{opacity:0;} }
        @keyframes cldOut2  { 0%,59%{opacity:0;} 63%,100%{opacity:1;} }
        @keyframes cldTile2 {
          0%,58%        { transform:scale(1); }
          61%       { transform:scale(1.16); }
          66%,100%  { transform:scale(1); }
        }
        @keyframes cldRow3 {
          0%,24%   { opacity:0; transform: translateX(12px); }
          31%,72% { opacity:1; transform:none; background:#ffffff; border-color:#e5e7eb; }
          76%        { opacity:1; background:#ecfdf5; border-color:#86efac; }
          83%       { opacity:1; background:#ecfdf5; border-color:#86efac; transform:none; }
          89%,100%  { opacity:0; transform: translateY(20px) scale(.94); }
        }
        @keyframes cldRisk3 { 0%,72%{opacity:1;} 75%,100%{opacity:0;} }
        @keyframes cldOut3  { 0%,73%{opacity:0;} 77%,100%{opacity:1;} }
        @keyframes cldTile3 {
          0%,72%        { transform:scale(1); }
          75%       { transform:scale(1.16); }
          80%,100%  { transform:scale(1); }
        }
        /* the worklist header only makes sense once there is a list */
        @keyframes cldHead { 0%,16%{opacity:0;} 24%,100%{opacity:1;} }
        @keyframes cldEmpty { 0%,88%{opacity:0;} 94%,100%{opacity:1;} }

        @keyframes cldC0{0%{opacity:1;}33%{opacity:1;}34.5%{opacity:0;}100%{opacity:0;}}@keyframes cldC1{0%{opacity:0;}33.5%{opacity:0;}35%{opacity:1;}47%{opacity:1;}48.5%{opacity:0;}100%{opacity:0;}}@keyframes cldC2{0%{opacity:0;}47.5%{opacity:0;}49%{opacity:1;}61%{opacity:1;}62.5%{opacity:0;}100%{opacity:0;}}@keyframes cldC3{0%{opacity:0;}61.5%{opacity:0;}63%{opacity:1;}75%{opacity:1;}76.5%{opacity:0;}100%{opacity:0;}}@keyframes cldC4{0%{opacity:0;}75.5%{opacity:0;}77%{opacity:1;}100%{opacity:1;}}
        @keyframes cldBarGlow {
          0%,74%   { box-shadow:0 0 0 0 rgba(22,163,74,0); }
          82%      { box-shadow:0 0 0 6px rgba(22,163,74,.13); }
          90%,100% { box-shadow:0 0 0 0 rgba(22,163,74,0); }
        }
        /* what the agent is doing, in words, under its own name */
        @keyframes cldSt1 { 0%,16%{opacity:1;} 18%,100%{opacity:0;} }
        @keyframes cldSt2 { 0%,18%{opacity:0;} 20%,26%{opacity:1;} 28%,100%{opacity:0;} }
        @keyframes cldSt3 { 0%,28%{opacity:0;} 30%,84%{opacity:1;} 86%,100%{opacity:0;} }
        @keyframes cldSt4 { 0%,86%{opacity:0;} 88%,100%{opacity:1;} }

        .cld-ring  { animation: cldRing 2.6s ease-out infinite; }
        .cld-ring2 { animation: cldRing 2.6s ease-out infinite; animation-delay:1.3s; }
        .cld-pulse { animation: cldPulse 1.4s ease-in-out infinite; }
        
        .cld-sig0  { animation: cldSig0 10s ease-out infinite; opacity:0; }
        .cld-lead0 { animation: cldLead0 10s ease-out infinite; opacity:0; }
        .cld-sig1  { animation: cldSig1 10s ease-out infinite; opacity:0; }
        .cld-lead1 { animation: cldLead1 10s ease-out infinite; opacity:0; }
        .cld-sig2  { animation: cldSig2 10s ease-out infinite; opacity:0; }
        .cld-lead2 { animation: cldLead2 10s ease-out infinite; opacity:0; }
        .cld-sig3  { animation: cldSig3 10s ease-out infinite; opacity:0; }
        .cld-lead3 { animation: cldLead3 10s ease-out infinite; opacity:0; }
        
        .cld-row0  { animation: cldRow0 10s ease-out infinite; opacity:0; }
        .cld-risk0 { animation: cldRisk0 10s linear infinite; }
        .cld-out0  { animation: cldOut0 10s ease-out infinite; opacity:0; }
        .cld-tile0 { animation: cldTile0 10s ease-out infinite; }
        .cld-row1  { animation: cldRow1 10s ease-out infinite; opacity:0; }
        .cld-risk1 { animation: cldRisk1 10s linear infinite; }
        .cld-out1  { animation: cldOut1 10s ease-out infinite; opacity:0; }
        .cld-tile1 { animation: cldTile1 10s ease-out infinite; }
        .cld-row2  { animation: cldRow2 10s ease-out infinite; opacity:0; }
        .cld-risk2 { animation: cldRisk2 10s linear infinite; }
        .cld-out2  { animation: cldOut2 10s ease-out infinite; opacity:0; }
        .cld-tile2 { animation: cldTile2 10s ease-out infinite; }
        .cld-row3  { animation: cldRow3 10s ease-out infinite; opacity:0; }
        .cld-risk3 { animation: cldRisk3 10s linear infinite; }
        .cld-out3  { animation: cldOut3 10s ease-out infinite; opacity:0; }
        .cld-tile3 { animation: cldTile3 10s ease-out infinite; }
        .cld-head  { animation: cldHead 10s ease-out infinite; opacity:0; }
        .cld-empty { animation: cldEmpty 10s ease-out infinite; opacity:0; }
        .cld-c0{animation:cldC0 10s linear infinite;}.cld-c1{animation:cldC1 10s linear infinite;opacity:0;}.cld-c2{animation:cldC2 10s linear infinite;opacity:0;}.cld-c3{animation:cldC3 10s linear infinite;opacity:0;}.cld-c4{animation:cldC4 10s linear infinite;opacity:0;}
        .cld-bar { animation: cldBarGlow 10s ease-out infinite; }
        .cld-s1 { animation: cldSt1 10s linear infinite; }
        .cld-s2 { animation: cldSt2 10s linear infinite; opacity:0; }
        .cld-s3 { animation: cldSt3 10s linear infinite; opacity:0; }
        .cld-s4 { animation: cldSt4 10s linear infinite; opacity:0; }
      </style><div class="tf-cardonly"><div class="tf-card relative w-[620px] shrink-0" style="--card-w:620px"><div class="bg-white rounded-2xl shadow-xl border border-gray-100/80 p-6"><div class="flex items-center gap-3 pb-3.5 mb-3 border-b border-gray-100"><div title="Vero \u2014 thinking" class="flex-shrink-0 " style="width:30px;height:30px;background-color:#111827;border-radius:50%;display:flex;align-items:center;justify-content:center;overflow:hidden;user-select:none"><div style="font-family:&quot;Courier New&quot;, Courier, monospace;color:#6EE7B7;display:flex;font-size:12.6px;line-height:1;font-weight:bold;transition:color 0.3s ease;width:3ch;justify-content:space-between;margin-top:0.05em"><span style="width:1ch;text-align:center;display:inline-block">1</span><span style="width:1ch;text-align:center;display:inline-block">1</span></div></div><span class="relative block h-[24px] w-[290px] min-w-0"><span class="cld-s1 absolute inset-0 text-base font-bold text-gray-900 leading-[24px] whitespace-nowrap">Liest den Bestand</span><span class="cld-s2 absolute inset-0 text-base font-bold text-gray-900 leading-[24px] whitespace-nowrap">Sortiert nach Verzugsrisiko</span><span class="cld-s3 absolute inset-0 text-base font-bold text-gray-900 leading-[24px] whitespace-nowrap">Arbeitet die Liste ab</span><span class="cld-s4 absolute inset-0 text-base font-bold text-emerald-800 leading-[24px] whitespace-nowrap">F\xFCr heute alles erledigt</span></span><span class="ml-auto inline-flex items-center gap-1.5 shrink-0 text-sm font-bold text-violet-700"><span class="cld-pulse w-2 h-2 rounded-full bg-violet-500"></span> Live</span></div><div class="relative" style="height:256px"><svg class="absolute inset-0 pointer-events-none" width="236" height="256" fill="none" aria-hidden="true"><path class="cld-lead0" d="M132,47 C146.4,47 141.6,128 154,128" stroke="#7c3aed" stroke-opacity="0.45" stroke-width="2" stroke-linecap="round" stroke-dasharray="100" pathLength="100"></path><path class="cld-lead1" d="M132,97 C146.4,97 141.6,128 154,128" stroke="#7c3aed" stroke-opacity="0.45" stroke-width="2" stroke-linecap="round" stroke-dasharray="100" pathLength="100"></path><path class="cld-lead2" d="M132,147 C146.4,147 141.6,128 154,128" stroke="#7c3aed" stroke-opacity="0.45" stroke-width="2" stroke-linecap="round" stroke-dasharray="100" pathLength="100"></path><path class="cld-lead3" d="M132,203 C146.4,203 141.6,128 154,128" stroke="#7c3aed" stroke-opacity="0.8" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="100" pathLength="100"></path></svg><div class="cld-sig0 absolute left-0 flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-2" style="top:27px;width:132px;height:40px"><span class="w-7 h-7 rounded-lg bg-violet-50 text-violet-700 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text h-4 w-4"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg></span><span class="text-xs font-semibold text-gray-700 leading-tight">1.284 offene Rechnungen</span></div><div class="cld-sig1 absolute left-0 flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-2" style="top:77px;width:132px;height:40px"><span class="w-7 h-7 rounded-lg bg-violet-50 text-violet-700 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hand-coins h-4 w-4"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"></path><path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"></path><path d="m2 16 6 6"></path><circle cx="16" cy="9" r="2.9"></circle><circle cx="6" cy="5" r="3"></circle></svg></span><span class="text-xs font-semibold text-gray-700 leading-tight">92 Zahlungszusagen</span></div><div class="cld-sig2 absolute left-0 flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-2" style="top:127px;width:132px;height:40px"><span class="w-7 h-7 rounded-lg bg-violet-50 text-violet-700 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-down h-4 w-4"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline><polyline points="16 17 22 17 22 11"></polyline></svg></span><span class="text-xs font-semibold text-gray-700 leading-tight">9 Tage langsamer bezahlt</span></div><div class="cld-sig3 absolute left-0 flex items-center gap-2 rounded-xl border-2 border-violet-300 bg-white px-2 shadow-sm" style="top:177px;width:132px;height:52px"><span class="w-8 h-8 rounded-lg bg-violet-600 text-white flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brain h-4 w-4"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M19.967 17.484A4 4 0 0 1 18 18"></path></svg></span><span class="min-w-0 leading-tight"><span class="block text-[10px] font-bold uppercase tracking-wider text-violet-600">Modell</span><span class="block text-xs font-bold text-gray-900 truncate">Risikowert</span><span class="block text-[10px] text-gray-400 truncate">wer sp\xE4t zahlt</span></span></div><div class="absolute" style="left:186px;top:128px;transform:translate(-50%,-50%);z-index:20"><div class="relative flex items-center justify-center"><span class="cld-ring absolute w-[70px] h-[70px] rounded-full" style="box-shadow:0 0 0 2px rgba(124,58,237,.45)"></span><span class="cld-ring2 absolute w-[70px] h-[70px] rounded-full" style="box-shadow:0 0 0 2px rgba(124,58,237,.45)"></span><div class="relative w-[60px] h-[60px] rounded-full bg-white border-2 border-violet-200 shadow-lg flex items-center justify-center"><div title="Vero \u2014 thinking" class="flex-shrink-0 " style="width:32px;height:32px;background-color:#111827;border-radius:50%;display:flex;align-items:center;justify-content:center;overflow:hidden;user-select:none"><div style="font-family:&quot;Courier New&quot;, Courier, monospace;color:#6EE7B7;display:flex;font-size:13.44px;line-height:1;font-weight:bold;transition:color 0.3s ease;width:3ch;justify-content:space-between;margin-top:0.05em"><span style="width:1ch;text-align:center;display:inline-block">1</span><span style="width:1ch;text-align:center;display:inline-block">0</span></div></div></div></div></div><div class="absolute top-0" style="left:236px;right:0"><div class="cld-head flex items-center justify-between px-1 mb-1"><span class="text-xs font-semibold uppercase tracking-wider text-gray-400">Arbeitsliste heute</span><span class="text-xs font-semibold uppercase tracking-wider text-gray-400">Risiko</span></div><span class="cld-empty absolute inset-x-0 top-[86px] text-center text-sm font-semibold text-gray-400">Nichts mehr offen</span></div><div class="cld-row0 absolute flex items-center gap-2.5 rounded-xl border px-2.5" style="left:236px;right:0;top:24px;height:52px"><span class="cld-tile0 w-9 h-9 rounded-lg bg-violet-50 text-violet-600 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-bag h-5 w-5"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg></span><span class="text-sm font-bold text-gray-900 truncate">Merrick</span><span class="relative ml-auto block h-[24px] w-[132px] shrink-0"><span class="cld-risk0 absolute inset-0 flex items-center justify-end gap-1.5"><span class="text-sm font-bold text-gray-900 tabular-nums">94</span><span class="rounded-full bg-rose-50 px-2 py-0.5 text-xs font-bold text-rose-600">Wird sp\xE4t</span></span><span class="cld-out0 absolute inset-0 flex items-center justify-end gap-1.5 text-sm font-bold text-emerald-700 whitespace-nowrap"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check h-4 w-4 shrink-0"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Zusage \u20AC274k</span></span></div><div class="cld-row1 absolute flex items-center gap-2.5 rounded-xl border px-2.5" style="left:236px;right:0;top:84px;height:52px"><span class="cld-tile1 w-9 h-9 rounded-lg bg-violet-50 text-violet-600 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-factory h-5 w-5"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M17 18h1"></path><path d="M12 18h1"></path><path d="M7 18h1"></path></svg></span><span class="text-sm font-bold text-gray-900 truncate">Halvex</span><span class="relative ml-auto block h-[24px] w-[132px] shrink-0"><span class="cld-risk1 absolute inset-0 flex items-center justify-end gap-1.5"><span class="text-sm font-bold text-gray-900 tabular-nums">88</span><span class="rounded-full bg-rose-50 px-2 py-0.5 text-xs font-bold text-rose-600">Wird sp\xE4t</span></span><span class="cld-out1 absolute inset-0 flex items-center justify-end gap-1.5 text-sm font-bold text-emerald-700 whitespace-nowrap"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check h-4 w-4 shrink-0"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Bezahlt \u20AC96k</span></span></div><div class="cld-row2 absolute flex items-center gap-2.5 rounded-xl border px-2.5" style="left:236px;right:0;top:144px;height:52px"><span class="cld-tile2 w-9 h-9 rounded-lg bg-violet-50 text-violet-600 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-truck h-5 w-5"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg></span><span class="text-sm font-bold text-gray-900 truncate">Kestrel</span><span class="relative ml-auto block h-[24px] w-[132px] shrink-0"><span class="cld-risk2 absolute inset-0 flex items-center justify-end gap-1.5"><span class="text-sm font-bold text-gray-900 tabular-nums">71</span><span class="rounded-full bg-rose-50 px-2 py-0.5 text-xs font-bold text-rose-600">Risiko</span></span><span class="cld-out2 absolute inset-0 flex items-center justify-end gap-1.5 text-sm font-bold text-emerald-700 whitespace-nowrap"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check h-4 w-4 shrink-0"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Zusage \u20AC151k</span></span></div><div class="cld-row3 absolute flex items-center gap-2.5 rounded-xl border px-2.5" style="left:236px;right:0;top:204px;height:52px"><span class="cld-tile3 w-9 h-9 rounded-lg bg-violet-50 text-violet-600 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-store h-5 w-5"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"></path><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"></path><path d="M2 7h20"></path><path d="M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7"></path></svg></span><span class="text-sm font-bold text-gray-900 truncate">Brookq</span><span class="relative ml-auto block h-[24px] w-[132px] shrink-0"><span class="cld-risk3 absolute inset-0 flex items-center justify-end gap-1.5"><span class="text-sm font-bold text-gray-900 tabular-nums">64</span><span class="rounded-full bg-rose-50 px-2 py-0.5 text-xs font-bold text-rose-600">Pr\xFCfen</span></span><span class="cld-out3 absolute inset-0 flex items-center justify-end gap-1.5 text-sm font-bold text-emerald-700 whitespace-nowrap"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check h-4 w-4 shrink-0"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Bezahlt \u20AC118k</span></span></div></div><div class="cld-bar mt-4 flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4" style="height:60px"><span class="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check h-5 w-5"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg></span><span class="text-sm font-semibold text-emerald-700/80">Heute eingezogen</span><span class="relative ml-auto block h-[30px] w-[130px] shrink-0"><span class="cld-c0 absolute inset-0 text-right text-2xl font-bold text-emerald-800 tabular-nums leading-[30px]">\u20AC0</span><span class="cld-c1 absolute inset-0 text-right text-2xl font-bold text-emerald-800 tabular-nums leading-[30px]">\u20AC274k</span><span class="cld-c2 absolute inset-0 text-right text-2xl font-bold text-emerald-800 tabular-nums leading-[30px]">\u20AC370k</span><span class="cld-c3 absolute inset-0 text-right text-2xl font-bold text-emerald-800 tabular-nums leading-[30px]">\u20AC521k</span><span class="cld-c4 absolute inset-0 text-right text-2xl font-bold text-emerald-800 tabular-nums leading-[30px]">\u20AC639k</span></span></div></div></div></div>`,"collections-score":`<style>
        @keyframes csPulse { 0%,100%{opacity:1;} 50%{opacity:.3;} }

        
        /* the row physically changes place in the ranking */
        @keyframes csMove_mk {
          0%,26%        { transform: translateY(0); }
          30%       { transform: translateY(37.400000000000006px) scale(1); }
          35%,100%  { transform: translateY(68px) scale(1); }
        }
        /* and lights up if it was the one that moved for a reason */
        @keyframes csLit_mk {
          0%,26%        { border-color:#e5e7eb; box-shadow:0 0 0 0 rgba(225,29,72,0); }
          30%,42% { border-color:#e5e7eb; box-shadow:0 0 0 0px rgba(225,29,72,.12); }
          50%,100% { border-color:#e5e7eb; box-shadow:0 0 0 0 rgba(225,29,72,0); }
        }
        @keyframes csS0_mk { 0%,26%{opacity:1;} 29%,100%{opacity:0;} }
        @keyframes csS1_mk { 0%,26%{opacity:0;} 29%,100%{opacity:1;} }
        @keyframes csBar_mk {
          0%,26%       { width:88%; background:#e11d48; }
          33%,100% { width:88%; background:#e11d48; }
        }
        
        /* the row physically changes place in the ranking */
        @keyframes csMove_hv {
          0%,26%        { transform: translateY(0); }
          30%       { transform: translateY(-37.400000000000006px) scale(1.02); }
          35%,100%  { transform: translateY(-68px) scale(1); }
        }
        /* and lights up if it was the one that moved for a reason */
        @keyframes csLit_hv {
          0%,26%        { border-color:#e5e7eb; box-shadow:0 0 0 0 rgba(225,29,72,0); }
          30%,42% { border-color:#fda4af; box-shadow:0 0 0 3px rgba(225,29,72,.12); }
          50%,100% { border-color:#e5e7eb; box-shadow:0 0 0 0 rgba(225,29,72,0); }
        }
        @keyframes csS0_hv { 0%,26%{opacity:1;} 29%,100%{opacity:0;} }
        @keyframes csS1_hv { 0%,26%{opacity:0;} 29%,100%{opacity:1;} }
        @keyframes csBar_hv {
          0%,26%       { width:64%; background:#9ca3af; }
          33%,100% { width:91%; background:#e11d48; }
        }
        
        @keyframes csWhy_hv {
          0%,23%     { opacity:0; transform:translateY(4px); }
          26%,46% { opacity:1; transform:none; }
          52%,100%  { opacity:0; transform:translateY(-4px); }
        }
        /* the row physically changes place in the ranking */
        @keyframes csMove_bq {
          0%,58%        { transform: translateY(0); }
          62%       { transform: translateY(37.400000000000006px) scale(1); }
          67%,100%  { transform: translateY(68px) scale(1); }
        }
        /* and lights up if it was the one that moved for a reason */
        @keyframes csLit_bq {
          0%,58%        { border-color:#e5e7eb; box-shadow:0 0 0 0 rgba(225,29,72,0); }
          62%,74% { border-color:#e5e7eb; box-shadow:0 0 0 0px rgba(225,29,72,.12); }
          82%,100% { border-color:#e5e7eb; box-shadow:0 0 0 0 rgba(225,29,72,0); }
        }
        @keyframes csS0_bq { 0%,58%{opacity:1;} 61%,100%{opacity:0;} }
        @keyframes csS1_bq { 0%,58%{opacity:0;} 61%,100%{opacity:1;} }
        @keyframes csBar_bq {
          0%,58%       { width:57%; background:#9ca3af; }
          65%,100% { width:57%; background:#9ca3af; }
        }
        
        /* the row physically changes place in the ranking */
        @keyframes csMove_ks {
          0%,58%        { transform: translateY(0); }
          62%       { transform: translateY(-37.400000000000006px) scale(1.02); }
          67%,100%  { transform: translateY(-68px) scale(1); }
        }
        /* and lights up if it was the one that moved for a reason */
        @keyframes csLit_ks {
          0%,58%        { border-color:#e5e7eb; box-shadow:0 0 0 0 rgba(225,29,72,0); }
          62%,74% { border-color:#fda4af; box-shadow:0 0 0 3px rgba(225,29,72,.12); }
          82%,100% { border-color:#e5e7eb; box-shadow:0 0 0 0 rgba(225,29,72,0); }
        }
        @keyframes csS0_ks { 0%,58%{opacity:1;} 61%,100%{opacity:0;} }
        @keyframes csS1_ks { 0%,58%{opacity:0;} 61%,100%{opacity:1;} }
        @keyframes csBar_ks {
          0%,58%       { width:43%; background:#9ca3af; }
          65%,100% { width:76%; background:#d97706; }
        }
        
        @keyframes csWhy_ks {
          0%,55%     { opacity:0; transform:translateY(4px); }
          58%,78% { opacity:1; transform:none; }
          84%,100%  { opacity:0; transform:translateY(-4px); }
        }

        /* the rank number is a slot, so it never moves with the row */
        @keyframes csIn { 0%,4%{opacity:0;transform:translateX(10px);} 14%,100%{opacity:1;transform:none;} }

        .cs-pulse { animation: csPulse 1.4s ease-in-out infinite; }
        .cs-in    { animation: csIn 10s ease-out infinite; opacity:0; }
        
        .cs-move-mk { animation: csMove_mk 10s cubic-bezier(.4,0,.2,1) infinite, csLit_mk 10s ease-out infinite; }
        .cs-s0-mk   { animation: csS0_mk 10s linear infinite; }
        .cs-s1-mk   { animation: csS1_mk 10s linear infinite; opacity:0; }
        .cs-bar-mk  { animation: csBar_mk 10s cubic-bezier(.4,0,.2,1) infinite; }
        
        .cs-move-hv { animation: csMove_hv 10s cubic-bezier(.4,0,.2,1) infinite, csLit_hv 10s ease-out infinite; }
        .cs-s0-hv   { animation: csS0_hv 10s linear infinite; }
        .cs-s1-hv   { animation: csS1_hv 10s linear infinite; opacity:0; }
        .cs-bar-hv  { animation: csBar_hv 10s cubic-bezier(.4,0,.2,1) infinite; }
        .cs-why-hv { animation: csWhy_hv 10s ease-out infinite; opacity:0; }
        .cs-move-bq { animation: csMove_bq 10s cubic-bezier(.4,0,.2,1) infinite, csLit_bq 10s ease-out infinite; }
        .cs-s0-bq   { animation: csS0_bq 10s linear infinite; }
        .cs-s1-bq   { animation: csS1_bq 10s linear infinite; opacity:0; }
        .cs-bar-bq  { animation: csBar_bq 10s cubic-bezier(.4,0,.2,1) infinite; }
        
        .cs-move-ks { animation: csMove_ks 10s cubic-bezier(.4,0,.2,1) infinite, csLit_ks 10s ease-out infinite; }
        .cs-s0-ks   { animation: csS0_ks 10s linear infinite; }
        .cs-s1-ks   { animation: csS1_ks 10s linear infinite; opacity:0; }
        .cs-bar-ks  { animation: csBar_ks 10s cubic-bezier(.4,0,.2,1) infinite; }
        .cs-why-ks { animation: csWhy_ks 10s ease-out infinite; opacity:0; }
      </style><div class="tf-cardonly"><div class="tf-card relative w-[600px] shrink-0" style="--card-w:600px"><div class="bg-white rounded-2xl shadow-xl border border-gray-100/80 p-6"><div class="flex items-center gap-3 pb-3.5 mb-3 border-b border-gray-100"><div title="Vero \u2014 thinking" class="flex-shrink-0 " style="width:30px;height:30px;background-color:#111827;border-radius:50%;display:flex;align-items:center;justify-content:center;overflow:hidden;user-select:none"><div style="font-family:&quot;Courier New&quot;, Courier, monospace;color:#6EE7B7;display:flex;font-size:12.6px;line-height:1;font-weight:bold;transition:color 0.3s ease;width:3ch;justify-content:space-between;margin-top:0.05em"><span style="width:1ch;text-align:center;display:inline-block">1</span><span style="width:1ch;text-align:center;display:inline-block">0</span></div></div><span class="min-w-0 leading-tight"><span class="block text-base font-bold text-gray-900">Priorit\xE4t, live neu bewertet</span><span class="block text-sm text-gray-500">Die Reihenfolge \xE4ndert sich mit der Faktenlage</span></span><span class="ml-auto inline-flex items-center gap-1.5 shrink-0 text-sm font-bold text-violet-700"><span class="cs-pulse w-2 h-2 rounded-full bg-violet-500"></span> Live</span></div><div class="cs-in relative" style="height:264px"><span class="absolute left-0 flex items-center justify-center text-sm font-bold text-gray-300 tabular-nums" style="top:0;height:60px;width:22px">1</span><span class="absolute left-0 flex items-center justify-center text-sm font-bold text-gray-300 tabular-nums" style="top:68px;height:60px;width:22px">2</span><span class="absolute left-0 flex items-center justify-center text-sm font-bold text-gray-300 tabular-nums" style="top:136px;height:60px;width:22px">3</span><span class="absolute left-0 flex items-center justify-center text-sm font-bold text-gray-300 tabular-nums" style="top:204px;height:60px;width:22px">4</span><div class="cs-move-mk absolute flex items-center gap-3 rounded-xl border bg-white px-3" style="left:30px;right:0;top:0;height:60px"><span class="w-9 h-9 rounded-lg bg-violet-50 text-violet-600 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-bag h-5 w-5"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg></span><span class="min-w-0 leading-tight flex-1"><span class="block text-sm font-bold text-gray-900 truncate">Merrick</span><span class="mt-1 block h-1.5 w-full max-w-[190px] rounded-full bg-gray-100 overflow-hidden"><span class="cs-bar-mk block h-full rounded-full" style="width:88%"></span></span></span><span class="relative block h-[26px] w-[38px] shrink-0"><span class="cs-s0-mk absolute inset-0 text-right text-xl font-bold text-gray-900 tabular-nums leading-[26px]">88</span><span class="cs-s1-mk absolute inset-0 text-right text-xl font-bold tabular-nums leading-[26px]" style="color:#e11d48">88</span></span></div><div class="cs-move-hv absolute flex items-center gap-3 rounded-xl border bg-white px-3" style="left:30px;right:0;top:68px;height:60px"><span class="w-9 h-9 rounded-lg bg-violet-50 text-violet-600 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-factory h-5 w-5"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M17 18h1"></path><path d="M12 18h1"></path><path d="M7 18h1"></path></svg></span><span class="min-w-0 leading-tight flex-1"><span class="block text-sm font-bold text-gray-900 truncate">Halvex</span><span class="mt-1 block h-1.5 w-full max-w-[190px] rounded-full bg-gray-100 overflow-hidden"><span class="cs-bar-hv block h-full rounded-full" style="width:64%"></span></span></span><span class="cs-why-hv inline-flex items-center gap-1 rounded-full bg-rose-50 px-2 py-1 text-xs font-bold text-rose-600 shrink-0 whitespace-nowrap"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hand-coins h-3.5 w-3.5"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"></path><path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"></path><path d="m2 16 6 6"></path><circle cx="16" cy="9" r="2.9"></circle><circle cx="6" cy="5" r="3"></circle></svg> Nicht gezahlt<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up h-3.5 w-3.5"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg></span><span class="relative block h-[26px] w-[38px] shrink-0"><span class="cs-s0-hv absolute inset-0 text-right text-xl font-bold text-gray-900 tabular-nums leading-[26px]">64</span><span class="cs-s1-hv absolute inset-0 text-right text-xl font-bold tabular-nums leading-[26px]" style="color:#e11d48">91</span></span></div><div class="cs-move-bq absolute flex items-center gap-3 rounded-xl border bg-white px-3" style="left:30px;right:0;top:136px;height:60px"><span class="w-9 h-9 rounded-lg bg-violet-50 text-violet-600 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-store h-5 w-5"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"></path><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"></path><path d="M2 7h20"></path><path d="M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7"></path></svg></span><span class="min-w-0 leading-tight flex-1"><span class="block text-sm font-bold text-gray-900 truncate">Brookq</span><span class="mt-1 block h-1.5 w-full max-w-[190px] rounded-full bg-gray-100 overflow-hidden"><span class="cs-bar-bq block h-full rounded-full" style="width:57%"></span></span></span><span class="relative block h-[26px] w-[38px] shrink-0"><span class="cs-s0-bq absolute inset-0 text-right text-xl font-bold text-gray-900 tabular-nums leading-[26px]">57</span><span class="cs-s1-bq absolute inset-0 text-right text-xl font-bold tabular-nums leading-[26px]" style="color:#9ca3af">57</span></span></div><div class="cs-move-ks absolute flex items-center gap-3 rounded-xl border bg-white px-3" style="left:30px;right:0;top:204px;height:60px"><span class="w-9 h-9 rounded-lg bg-violet-50 text-violet-600 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-truck h-5 w-5"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg></span><span class="min-w-0 leading-tight flex-1"><span class="block text-sm font-bold text-gray-900 truncate">Kestrel</span><span class="mt-1 block h-1.5 w-full max-w-[190px] rounded-full bg-gray-100 overflow-hidden"><span class="cs-bar-ks block h-full rounded-full" style="width:43%"></span></span></span><span class="cs-why-ks inline-flex items-center gap-1 rounded-full bg-rose-50 px-2 py-1 text-xs font-bold text-rose-600 shrink-0 whitespace-nowrap"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-alert h-3.5 w-3.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg> Einwand offen<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up h-3.5 w-3.5"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg></span><span class="relative block h-[26px] w-[38px] shrink-0"><span class="cs-s0-ks absolute inset-0 text-right text-xl font-bold text-gray-900 tabular-nums leading-[26px]">43</span><span class="cs-s1-ks absolute inset-0 text-right text-xl font-bold tabular-nums leading-[26px]" style="color:#d97706">76</span></span></div></div></div></div></div>`,"collections-sequence":`<style>
        /* ---- the dragged row: grab -> lift -> drag one slot down -> STAY ---- */
        @keyframes csbDrag {
          0%,6%    { transform: translate(0,0) scale(1) rotate(0deg);
                     box-shadow: 0 0 0 0 rgba(124,58,237,0); border-color:#e5e7eb; }
          10%      { transform: translate(0,0) scale(1) rotate(0deg);
                     box-shadow: 0 0 0 0 rgba(124,58,237,0); border-color:#ddd6fe; }
          14%      { transform: translate(10px,-5px) scale(1.03) rotate(-1.2deg);
                     box-shadow: 0 16px 30px -12px rgba(124,58,237,.55); border-color:#c4b5fd; }
          25%      { transform: translate(14px,75px) scale(1.03) rotate(-1.2deg);
                     box-shadow: 0 18px 34px -12px rgba(124,58,237,.55); border-color:#c4b5fd; }
          29%      { transform: translate(0,83px) scale(1) rotate(0deg);
                     box-shadow: 0 0 0 7px rgba(124,58,237,.18); border-color:#c4b5fd; }
          33%      { transform: translate(0,80px) scale(1) rotate(0deg);
                     box-shadow: 0 0 0 11px rgba(124,58,237,0); border-color:#ddd6fe; }
          /* and it STAYS in the new slot for the rest of the loop */
          38%,100% { transform: translate(0,80px) scale(1) rotate(0deg);
                     box-shadow: 0 0 0 0 rgba(124,58,237,0); border-color:#e5e7eb; }
        }
        /* ---- the row below closes ranks and STAYS closed ---- */
        @keyframes csbShift {
          0%,13%   { transform: translateY(0); }
          24%,100% { transform: translateY(-80px); }
        }
        /* ---- dashed target, only while the row is in the air ---- */
        @keyframes csbGap {
          0%,15%   { opacity:0; }
          19%,27%  { opacity:1; }
          31%,100% { opacity:0; }
        }
        /* ---- the hand rides the dragged row ---- */
        @keyframes csbHand {
          0%,5%    { transform: translate(0,0) scale(1); opacity:0; }
          10%      { transform: translate(0,0) scale(1); opacity:1; }
          14%      { transform: translate(10px,-5px) scale(.88); opacity:1; }
          25%      { transform: translate(14px,75px) scale(.88); opacity:1; }
          29%      { transform: translate(0,83px) scale(1); opacity:1; }
          33%      { transform: translate(0,80px) scale(1); opacity:0; }
          100%     { transform: translate(0,80px) scale(1); opacity:0; }
        }
        @keyframes csbGrip {
          0%,5%    { color:#d1d5db; }
          10%,31%  { color:#7c3aed; }
          36%,100% { color:#d1d5db; }
        }

        /* ---- START: the cursor travels to the button and clicks it ---- */
        @keyframes csbCursor {
          0%,40%   { transform: translate(-46px,26px) scale(1); opacity:0; }
          45%      { transform: translate(-46px,26px) scale(1); opacity:1; }
          53%      { transform: translate(-6px,4px) scale(1); opacity:1; }
          56%      { transform: translate(-6px,4px) scale(.82); opacity:1; }
          59%      { transform: translate(-6px,4px) scale(1); opacity:1; }
          66%      { transform: translate(-6px,4px) scale(1); opacity:0; }
          100%     { transform: translate(-46px,26px) scale(1); opacity:0; }
        }
        /* button: idle -> armed (it only becomes clickable once the edit lands) */
        @keyframes csbBtn {
          0%,33%   { transform: scale(1); box-shadow: 0 0 0 0 rgba(124,58,237,0); }
          40%      { transform: scale(1); box-shadow: 0 0 0 0 rgba(124,58,237,.35); }
          50%      { transform: scale(1); box-shadow: 0 0 0 8px rgba(124,58,237,0); }
          56%      { transform: scale(.96); }
          59%,100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(124,58,237,0); }
        }
        @keyframes csbBtnStart { 0%,56%{opacity:1;} 58%,100%{opacity:0;} }
        @keyframes csbBtnLive  { 0%,56%{opacity:0;} 58%,100%{opacity:1;} }

        /* rows go live once started */
        @keyframes csbLive {
          0%,57%   { background:#ffffff; border-color:#e5e7eb; }
          62%,100% { background:#faf9ff; border-color:#ddd6fe; }
        }
        /* header state chip */
        @keyframes csbDraft { 0%,56%{opacity:1;} 58%,100%{opacity:0;} }
        @keyframes csbRun   { 0%,56%{opacity:0;} 58%,100%{opacity:1;} }
        @keyframes csbDot   { 0%,100%{opacity:1;} 50%{opacity:.25;} }

        /* the whole stack cross-fades at the seam so the reset is never seen */
        @keyframes csbReset { 0%,95%{opacity:1;} 98%{opacity:0;} 100%{opacity:1;} }

        .csb-drag   { animation: csbDrag 10s cubic-bezier(.4,0,.2,1) infinite, csbLive 10s ease-out infinite; will-change: transform; }
        .csb-shift  { animation: csbShift 10s cubic-bezier(.4,0,.2,1) infinite, csbLive 10s ease-out infinite; will-change: transform; }
        .csb-gap    { animation: csbGap 10s ease-in-out infinite; opacity:0; }
        .csb-hand   { animation: csbHand 10s cubic-bezier(.4,0,.2,1) infinite; opacity:0; }
        .csb-grip   { animation: csbGrip 10s ease-in-out infinite; }
        .csb-cursor { animation: csbCursor 10s cubic-bezier(.4,0,.2,1) infinite; opacity:0; }
        .csb-btn    { animation: csbBtn 10s ease-out infinite; }
        .csb-bstart { animation: csbBtnStart 10s linear infinite; }
        .csb-blive  { animation: csbBtnLive 10s linear infinite; opacity:0; }
        .csb-row    { animation: csbLive 10s ease-out infinite; }
        .csb-draft  { animation: csbDraft 10s linear infinite; }
        .csb-run    { animation: csbRun 10s linear infinite; opacity:0; }
        .csb-dot    { animation: csbDot 1.4s ease-in-out infinite; }
        .csb-reset  { animation: csbReset 10s linear infinite; }
      </style><div class="tf-cardonly"><div class="tf-card relative w-[560px] h-[560px] shrink-0 flex items-center" style="--card-w:560px"><div class="w-full bg-white rounded-2xl shadow-xl border border-gray-100/80 p-8"><div class="flex items-center justify-between mb-6"><div class="flex items-center gap-2 min-w-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sliders-vertical h-5 w-5 shrink-0" style="color:#7c3aed"><line x1="4" x2="4" y1="21" y2="14"></line><line x1="4" x2="4" y1="10" y2="3"></line><line x1="12" x2="12" y1="21" y2="12"></line><line x1="12" x2="12" y1="8" y2="3"></line><line x1="20" x2="20" y1="21" y2="16"></line><line x1="20" x2="20" y1="12" y2="3"></line><line x1="2" x2="6" y1="14" y2="14"></line><line x1="10" x2="14" y1="8" y2="8"></line><line x1="18" x2="22" y1="16" y2="16"></line></svg><span class="text-base font-bold text-gray-900 truncate">Standard-Mahnprozess</span><span class="text-sm font-medium text-gray-400 shrink-0">4 Schritte</span></div><div class="flex items-center gap-2 shrink-0"><span class="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-700 bg-violet-50 rounded-full pl-1 pr-2.5 py-1"><div title="Vero \u2014 thinking" class="flex-shrink-0 " style="width:22px;height:22px;background-color:#111827;border-radius:50%;display:flex;align-items:center;justify-content:center;overflow:hidden;user-select:none"><div style="font-family:&quot;Courier New&quot;, Courier, monospace;color:#6EE7B7;display:flex;font-size:9.24px;line-height:1;font-weight:bold;transition:color 0.3s ease;width:3ch;justify-content:space-between;margin-top:0.05em"><span style="width:1ch;text-align:center;display:inline-block">1</span><span style="width:1ch;text-align:center;display:inline-block">1</span></div></div>Vero \xFCbernimmt</span><span class="relative block h-[22px] w-[74px] shrink-0"><span class="csb-draft absolute right-0 top-0 inline-flex h-[22px] items-center rounded-full bg-gray-100 px-2 text-xs font-semibold text-gray-500">Entwurf</span><span class="csb-run absolute right-0 top-0 inline-flex h-[22px] items-center gap-1 rounded-full bg-emerald-50 px-2 text-xs font-semibold text-emerald-700"><span class="csb-dot w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Live</span></span></div></div><div class="csb-reset"><div class="relative" style="height:308px"><div class="absolute left-0 flex items-center" style="top:0;height:68px;width:60px"><span class="text-sm font-semibold text-gray-400 tabular-nums">Tag 3</span></div><div class="absolute left-0 flex items-center" style="top:80px;height:68px;width:60px"><span class="text-sm font-semibold text-gray-400 tabular-nums">Tag 10</span></div><div class="absolute left-0 flex items-center" style="top:160px;height:68px;width:60px"><span class="text-sm font-semibold text-gray-400 tabular-nums">Tag 17</span></div><div class="absolute left-0 flex items-center" style="top:240px;height:68px;width:60px"><span class="text-sm font-semibold text-gray-400 tabular-nums">Tag 24</span></div><div class="csb-gap absolute rounded-xl pointer-events-none" style="left:72px;right:0;top:160px;height:68px;border:2px dashed #c4b5fd;background:rgba(237,233,254,0.6);z-index:1"></div><div class="csb-row absolute rounded-xl border flex items-center gap-3 px-3" style="left:72px;right:0;top:0;height:68px;z-index:10"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-grip-vertical text-gray-300 h-5 w-5 shrink-0"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg><div class="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail h-5 w-5" style="color:#7c3aed"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg></div><div class="min-w-0 flex-1"><div class="text-sm font-semibold text-gray-900 leading-tight truncate">1. Erinnerung</div><div class="text-sm text-gray-400 leading-tight">E-Mail</div></div><span class="inline-block text-xs font-semibold rounded-full px-2.5 py-1 shrink-0 bg-emerald-100 text-emerald-700">L\xE4uft automatisch</span></div><div class="csb-drag absolute rounded-xl border flex items-center gap-3 px-3" style="left:72px;right:0;top:80px;height:68px;z-index:30"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-grip-vertical csb-grip h-5 w-5 shrink-0"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg><div class="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail h-5 w-5" style="color:#7c3aed"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg></div><div class="min-w-0 flex-1"><div class="text-sm font-semibold text-gray-900 leading-tight truncate">2. Erinnerung</div><div class="text-sm text-gray-400 leading-tight">E-Mail</div></div><span class="inline-block text-xs font-semibold rounded-full px-2.5 py-1 shrink-0 bg-emerald-100 text-emerald-700">L\xE4uft automatisch</span></div><div class="csb-shift absolute rounded-xl border flex items-center gap-3 px-3" style="left:72px;right:0;top:160px;height:68px;z-index:10"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-grip-vertical text-gray-300 h-5 w-5 shrink-0"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg><div class="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone h-5 w-5" style="color:#7c3aed"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></div><div class="min-w-0 flex-1"><div class="text-sm font-semibold text-gray-900 leading-tight truncate">Telefonat</div><div class="text-sm text-gray-400 leading-tight">Anruf</div></div><span class="inline-block text-xs font-semibold rounded-full px-2.5 py-1 shrink-0 bg-amber-100 text-amber-700">Ihr Team</span></div><div class="csb-row absolute rounded-xl border flex items-center gap-3 px-3" style="left:72px;right:0;top:240px;height:68px;z-index:10"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-grip-vertical text-gray-300 h-5 w-5 shrink-0"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg><div class="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-alert h-5 w-5" style="color:#7c3aed"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg></div><div class="min-w-0 flex-1"><div class="text-sm font-semibold text-gray-900 leading-tight truncate">Mahnung</div><div class="text-sm text-gray-400 leading-tight">E-Mail</div></div><span class="inline-block text-xs font-semibold rounded-full px-2.5 py-1 shrink-0 bg-rose-100 text-rose-700">Mit Ihrer Freigabe</span></div><div class="csb-hand absolute pointer-events-none" style="left:74px;top:96px;z-index:40"><span class="flex items-center justify-center w-[34px] h-[34px] rounded-full bg-white ring-2 ring-violet-500 shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-grab h-[20px] w-[20px]" style="color:#7c3aed"><path d="M18 11.5V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4"></path><path d="M14 10V8a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"></path><path d="M10 9.9V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5"></path><path d="M6 14a2 2 0 0 0-2-2a2 2 0 0 0-2 2"></path><path d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0"></path></svg></span></div></div><div class="mt-6 pt-5 border-t border-gray-100 flex items-center gap-3"><span class="text-sm font-medium text-gray-400">Ziehen zum Sortieren. Nichts l\xE4uft, bevor Sie starten.</span><span class="relative ml-auto shrink-0"><span class="csb-btn relative block h-[38px] w-[150px] rounded-xl"><span class="csb-bstart absolute inset-0 inline-flex items-center justify-center gap-1.5 rounded-xl bg-violet-600 text-sm font-bold text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-play h-4 w-4"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg> Ablauf starten</span><span class="csb-blive absolute inset-0 inline-flex items-center justify-center gap-1.5 rounded-xl bg-emerald-50 text-sm font-bold text-emerald-700 ring-1 ring-emerald-200"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check h-4 w-4"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Ablauf aktiv</span></span><svg class="csb-cursor absolute pointer-events-none" style="right:8px;bottom:-2px;width:20px;height:20px;z-index:50" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 3l14 8.5-6.2 1.2L10 19 5 3z" fill="#111827" stroke="#ffffff" stroke-width="1.6" stroke-linejoin="round"></path></svg></span></div></div></div></div></div>`,"collections-inbox":`<style>
        /* RE-TIMED 2026-08-25. It used to hold the finished state for the first
           third of the loop, then reset and replay - so on load you stared at a
           still picture for ~3s. Now it ACTS FIRST and HOLDS LAST: everything is
           resolved by 70% and simply sits there until the loop restarts. */

        /* ---- ACT 1: highlight sweeps, leader draws, chip lands ---- */
        @keyframes icMark {
          0%,3%    { transform: scaleX(0); opacity:1; }
          13%      { transform: scaleX(1.03); }
          16%,100% { transform: scaleX(1); opacity:1; }
        }
        @keyframes icLead {
          0%,7%    { stroke-dashoffset:100; opacity:0; }
          9%       { opacity:1; }
          24%,100% { stroke-dashoffset:0; opacity:1; }
        }
        @keyframes icDot {
          0%,9%    { opacity:0; transform:scale(.4); }
          24%,100% { opacity:1; transform:scale(1); }
        }
        @keyframes icChip {
          0%,12%   { opacity:0; transform: translateX(12px); }
          28%,100% { opacity:1; transform: translateX(0); }
        }

        /* ---- ACT 2: the draft, then the click ---- */
        @keyframes icDraft {
          0%,34%   { opacity:0; transform: translateY(8px); }
          44%,100% { opacity:1; transform:none; }
        }
        @keyframes icCursor {
          0%,48%   { transform: translate(-52px,22px); opacity:0; }
          52%      { transform: translate(-52px,22px); opacity:1; }
          60%      { transform: translate(-4px,2px); opacity:1; }
          63%      { transform: translate(-4px,2px) scale(.82); opacity:1; }
          66%      { transform: translate(-4px,2px) scale(1); opacity:1; }
          72%      { transform: translate(-4px,2px); opacity:0; }
          100%     { transform: translate(-4px,2px); opacity:0; }
        }
        @keyframes icBtn  { 0%,64%{opacity:1;} 66%,100%{opacity:0;} }
        @keyframes icSent { 0%,64%{opacity:0;} 66%,100%{opacity:1;} }

        .ic-mark   { animation: icMark 9s ease-out infinite; transform-origin:left center; }
        .ic-lead   { animation: icLead 9s ease-out infinite; }
        .ic-dot    { animation: icDot 9s ease-out infinite; }
        .ic-chip   { animation: icChip 9s ease-out infinite; }
        .ic-draft  { animation: icDraft 9s ease-out infinite; }
        .ic-cursor { animation: icCursor 9s cubic-bezier(.4,0,.2,1) infinite; opacity:0; }
        .ic-btn    { animation: icBtn 9s linear infinite; }
        .ic-sent   { animation: icSent 9s linear infinite; opacity:0; }
      </style><div class="tf-cardonly"><div class="tf-card relative w-[620px] shrink-0" style="--card-w:620px"><div class="bg-white rounded-2xl shadow-xl border border-gray-100/80 p-6"><div class="flex items-center gap-3 pb-3.5 mb-3.5 border-b border-gray-100"><div class="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-sm font-bold text-amber-700 shrink-0">RK</div><div class="min-w-0"><div class="text-base font-bold text-gray-900 truncate">Raymond Keller</div><div class="text-sm text-gray-400 truncate">Westwood Industrial Supply</div></div><span class="ml-auto inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700 bg-amber-50 rounded-full px-2.5 py-1 shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail h-3.5 w-3.5"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg> Eingang</span></div><div class="text-sm font-bold text-gray-900 truncate mb-3">AW: Mahnung \xB7 INV-WIS-2026-0812</div><div class="relative" style="height:216px"><div class="absolute left-0" style="top:23px;width:268px"><div class="flex items-center gap-2" style="height:34px"><span class="block h-2 rounded-full bg-gray-200 shrink-0" style="width:64%"></span></div><div class="flex items-center gap-2" style="height:34px"><span class="block h-2 rounded-full bg-gray-200 shrink-0" style="width:86%"></span></div><div class="flex items-center gap-2" style="height:34px"><span class="block h-2 rounded-full bg-gray-200 shrink-0" style="width:12%"></span><span class="relative inline-block text-sm font-semibold text-gray-900 whitespace-nowrap"><span class="ic-mark absolute inset-x-0 rounded-[3px]" style="top:-3px;bottom:-3px;background:rgba(244,63,94,.24);animation-delay:0s"></span><span class="relative">zur\xFCckgezogen</span></span><span class="block h-2 rounded-full bg-gray-200 shrink-0" style="width:26%"></span></div><div class="flex items-center gap-2" style="height:34px"><span class="block h-2 rounded-full bg-gray-200 shrink-0" style="width:16%"></span><span class="relative inline-block text-sm font-semibold text-gray-900 whitespace-nowrap"><span class="ic-mark absolute inset-x-0 rounded-[3px]" style="top:-3px;bottom:-3px;background:rgba(245,158,11,.28);animation-delay:.3s"></span><span class="relative">Restbetrag bis zum 25.</span></span></div><div class="flex items-center gap-2" style="height:34px"><span class="block h-2 rounded-full bg-gray-200 shrink-0" style="width:10%"></span><span class="relative inline-block text-sm font-semibold text-gray-900 whitespace-nowrap"><span class="ic-mark absolute inset-x-0 rounded-[3px]" style="top:-3px;bottom:-3px;background:rgba(124,58,237,.22);animation-delay:.6s"></span><span class="relative">warten</span></span><span class="block h-2 rounded-full bg-gray-200 shrink-0" style="width:34%"></span></div></div><svg class="absolute left-0 top-0 pointer-events-none" width="356" height="216" fill="none" aria-hidden="true"><g><path class="ic-lead" d="M272,108 C316,108 308,62 352,62" stroke="#f43f5e" stroke-opacity="0.45" stroke-width="2" stroke-linecap="round" stroke-dasharray="100" pathLength="100" style="animation-delay:0s"></path><circle class="ic-dot" cx="272" cy="108" r="3" fill="#f43f5e" style="animation-delay:0s"></circle><circle class="ic-dot" cx="352" cy="62" r="3" fill="#f43f5e" style="animation-delay:0s"></circle></g><g><path class="ic-lead" d="M272,142 C316,142 308,126 352,126" stroke="#f59e0b" stroke-opacity="0.45" stroke-width="2" stroke-linecap="round" stroke-dasharray="100" pathLength="100" style="animation-delay:.3s"></path><circle class="ic-dot" cx="272" cy="142" r="3" fill="#f59e0b" style="animation-delay:.3s"></circle><circle class="ic-dot" cx="352" cy="126" r="3" fill="#f59e0b" style="animation-delay:.3s"></circle></g><g><path class="ic-lead" d="M272,176 C316,176 308,190 352,190" stroke="#7c3aed" stroke-opacity="0.45" stroke-width="2" stroke-linecap="round" stroke-dasharray="100" pathLength="100" style="animation-delay:.6s"></path><circle class="ic-dot" cx="272" cy="176" r="3" fill="#7c3aed" style="animation-delay:.6s"></circle><circle class="ic-dot" cx="352" cy="190" r="3" fill="#7c3aed" style="animation-delay:.6s"></circle></g></svg><div class="absolute top-0 rounded-xl border border-gray-200 bg-gray-50/60" style="left:356px;right:0;height:216px"><div class="flex items-center gap-2 px-3 border-b border-gray-200/70" style="height:36px"><div title="Vero \u2014 done" class="flex-shrink-0 " style="width:20px;height:20px;background-color:#111827;border-radius:50%;display:flex;align-items:center;justify-content:center;overflow:hidden;user-select:none"><div style="font-family:&quot;Courier New&quot;, Courier, monospace;color:#10B981;display:flex;font-size:8.4px;line-height:1;font-weight:bold;transition:color 0.3s ease;width:3ch;justify-content:space-between;margin-top:0.05em"><span style="width:1ch;text-align:center;display:inline-block">^</span><span style="width:1ch;text-align:center;display:inline-block">^</span></div></div><span class="text-sm font-bold text-gray-700 truncate">Konto gepflegt</span></div><div class="ic-chip absolute left-2.5 right-2.5" style="top:36px;height:52px;animation-delay:0s"><div class="h-full flex items-center gap-2.5 rounded-lg bg-white px-2.5 ring-1 ring-rose-200"><span class="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 bg-rose-100 text-rose-600"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-alert h-5 w-5"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg></span><span class="min-w-0 leading-tight"><span class="block text-sm font-bold truncate text-rose-700">Einwand</span><span class="block text-sm text-gray-500 truncate">Gutschrift erfasst</span></span></div></div><div class="ic-chip absolute left-2.5 right-2.5" style="top:100px;height:52px;animation-delay:.3s"><div class="h-full flex items-center gap-2.5 rounded-lg bg-white px-2.5 ring-1 ring-amber-200"><span class="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 bg-amber-100 text-amber-600"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hand-coins h-5 w-5"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"></path><path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"></path><path d="m2 16 6 6"></path><circle cx="16" cy="9" r="2.9"></circle><circle cx="6" cy="5" r="3"></circle></svg></span><span class="min-w-0 leading-tight"><span class="block text-sm font-bold truncate text-amber-700">Zusage</span><span class="block text-sm text-gray-500 truncate">\u20AC101.600 \xB7 25.8.</span></span></div></div><div class="ic-chip absolute left-2.5 right-2.5" style="top:164px;height:52px;animation-delay:.6s"><div class="h-full flex items-center gap-2.5 rounded-lg bg-white px-2.5 ring-1 ring-violet-200"><span class="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 bg-violet-100 text-violet-600"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-pause h-5 w-5"><circle cx="12" cy="12" r="10"></circle><line x1="10" x2="10" y1="15" y2="9"></line><line x1="14" x2="14" y1="15" y2="9"></line></svg></span><span class="min-w-0 leading-tight"><span class="block text-sm font-bold truncate text-violet-700">Ablauf</span><span class="block text-sm text-gray-500 truncate">Ruht bis 25.8.</span></span></div></div></div></div><div class="ic-draft mt-4 pt-4 border-t border-gray-100"><div class="flex items-center gap-2 mb-2"><div title="Vero \u2014 thinking" class="flex-shrink-0 " style="width:20px;height:20px;background-color:#111827;border-radius:50%;display:flex;align-items:center;justify-content:center;overflow:hidden;user-select:none"><div style="font-family:&quot;Courier New&quot;, Courier, monospace;color:#6EE7B7;display:flex;font-size:8.4px;line-height:1;font-weight:bold;transition:color 0.3s ease;width:3ch;justify-content:space-between;margin-top:0.05em"><span style="width:1ch;text-align:center;display:inline-block">0</span><span style="width:1ch;text-align:center;display:inline-block">1</span></div></div><span class="text-sm font-bold text-gray-700">Antwortentwurf von Vero</span></div><div class="rounded-xl border border-violet-200 bg-violet-50/40 p-3.5"><div class="text-sm text-gray-700 leading-relaxed">Danke, Herr Keller. Die Gutschriftsanfrage ist erfasst, die Mahnung ausgesetzt. Wir erwarten \u20AC101.600 zum 25. August.</div><div class="relative flex items-center gap-2 mt-3"><span class="text-sm font-semibold text-gray-400 truncate">An: r.keller@westwood-industrial.com</span><span class="ml-auto relative shrink-0"><span class="relative block h-[34px] w-[96px]"><span class="ic-btn absolute inset-0 inline-flex items-center justify-center gap-1.5 rounded-lg bg-violet-600 text-sm font-bold text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send h-4 w-4"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg> Senden</span><span class="ic-sent absolute inset-0 inline-flex items-center justify-center gap-1.5 rounded-lg bg-emerald-50 text-sm font-bold text-emerald-700 ring-1 ring-emerald-200"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check h-4 w-4"><path d="M20 6 9 17l-5-5"></path></svg> Gesendet</span></span><svg class="ic-cursor absolute pointer-events-none" style="right:6px;bottom:-4px;width:20px;height:20px;z-index:40" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 3l14 8.5-6.2 1.2L10 19 5 3z" fill="#111827" stroke="#ffffff" stroke-width="1.6" stroke-linejoin="round"></path></svg></span></div></div></div></div></div></div>`,"collections-call":`<style>
        @keyframes cccWave { 0% {transform: scaleY(.25);} 50% {transform: scaleY(1);} 100% {transform: scaleY(.25);} }
        /* Each row: shows "Live" during its calling window, then resolves to the
           outcome pill and HOLDS there for the rest of the loop. Staggered
           per-row so the stack lands one after another. Every row is fully drawn
           at frame 0 (avatar, flag/language, waveform, a valid status), so a
           poster screenshot reads as complete. */
        @keyframes cccLive1 { 0%,10% {opacity:1;} 16%,100% {opacity:0;} }
        @keyframes cccOut1  { 0%,10% {opacity:0;} 16%,100% {opacity:1;} }
        @keyframes cccLive2 { 0%,30% {opacity:1;} 36%,100% {opacity:0;} }
        @keyframes cccOut2  { 0%,30% {opacity:0;} 36%,100% {opacity:1;} }
        @keyframes cccLive3 { 0%,50% {opacity:1;} 56%,100% {opacity:0;} }
        @keyframes cccOut3  { 0%,50% {opacity:0;} 56%,100% {opacity:1;} }
        @keyframes cccDot { 0%,45% {opacity:.4;} 50% {opacity:1;} 95% {opacity:1;} 100% {opacity:.4;} }
        @keyframes cccStatPulse { 0%,100% {opacity:.75;} 50% {opacity:1;} }

        .ccc-bar { transform-origin: center bottom; animation: cccWave 0.9s ease-in-out infinite; }
        .ccc-dot { animation: cccDot 8s ease-in-out infinite; }
        .ccc-stat-dot { animation: cccStatPulse 2s ease-in-out infinite; }

        .ccc-r1 .ccc-live { animation: cccLive1 8s ease-in-out infinite; }
        .ccc-r1 .ccc-out  { animation: cccOut1 8s ease-in-out infinite; }
        .ccc-r2 .ccc-live { animation: cccLive2 8s ease-in-out infinite; }
        .ccc-r2 .ccc-out  { animation: cccOut2 8s ease-in-out infinite; }
        .ccc-r3 .ccc-live { animation: cccLive3 8s ease-in-out infinite; }
        .ccc-r3 .ccc-out  { animation: cccOut3 8s ease-in-out infinite; }
      </style><div class="tf-cardonly"><div class="tf-card relative w-[560px] shrink-0 flex items-center" style="--card-w:560px"><div class="bg-white rounded-2xl shadow-xl border border-gray-100/80 p-6 w-[440px]" style="transform:rotate(-1deg)"><div class="flex items-center gap-2.5 mb-5"><span class="w-9 h-9 rounded-full bg-violet-600 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-call h-5 w-5 text-white"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><path d="M14.05 2a9 9 0 0 1 8 7.94"></path><path d="M14.05 6A5 5 0 0 1 18 10"></path></svg></span><div class="min-w-0"><div class="text-base font-bold text-gray-900 flex items-center gap-1.5"><span class="ccc-stat-dot w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>12 Anrufe laufen</div></div><span class="ml-auto inline-flex items-center gap-1.5 text-xs font-semibold text-violet-700 bg-violet-50 rounded-full pl-1 pr-2.5 py-1 shrink-0"><div title="Vero \u2014 thinking" class="flex-shrink-0 " style="width:15px;height:15px;background-color:#111827;border-radius:50%;display:flex;align-items:center;justify-content:center;overflow:hidden;user-select:none"><div style="font-family:&quot;Courier New&quot;, Courier, monospace;color:#6EE7B7;display:flex;font-size:6.3px;line-height:1;font-weight:bold;transition:color 0.3s ease;width:3ch;justify-content:space-between;margin-top:0.05em"><span style="width:1ch;text-align:center;display:inline-block">1</span><span style="width:1ch;text-align:center;display:inline-block">0</span></div></div> Vero</span></div><div class="space-y-3.5"><div class="ccc-r1 flex items-center gap-3 rounded-xl bg-violet-50/60 px-3.5 py-4"><div class="w-9 h-9 rounded-full bg-white flex items-center justify-center text-sm font-bold text-violet-700 shrink-0 shadow-sm">NW</div><div class="min-w-0 w-[112px] shrink-0"><div class="text-base font-semibold text-gray-900 truncate leading-tight">Northwind</div><div class="mt-1 text-sm text-gray-500 flex items-center gap-1.5 truncate"><span class="inline-block w-4 h-3 rounded-[2px] overflow-hidden ring-1 ring-black/10 shrink-0 leading-none"><svg viewBox="0 0 12 9" width="16" height="12" class="block" aria-hidden="true"><rect x="0" y="0" width="12" height="3" fill="#000000"></rect><rect x="0" y="3" width="12" height="3" fill="#DD0000"></rect><rect x="0" y="6" width="12" height="3" fill="#FFCE00"></rect></svg></span><span class="truncate">Deutsch</span></div></div><div class="flex items-end justify-between gap-[3px] h-7 flex-1 min-w-0"><span class="ccc-bar flex-1 rounded-full bg-violet-400" style="height:45%;animation-delay:0s"></span><span class="ccc-bar flex-1 rounded-full bg-violet-400" style="height:80%;animation-delay:0.09s"></span><span class="ccc-bar flex-1 rounded-full bg-violet-400" style="height:35%;animation-delay:0.18s"></span><span class="ccc-bar flex-1 rounded-full bg-violet-400" style="height:90%;animation-delay:0.27s"></span><span class="ccc-bar flex-1 rounded-full bg-violet-400" style="height:55%;animation-delay:0.36s"></span><span class="ccc-bar flex-1 rounded-full bg-violet-400" style="height:95%;animation-delay:0.44999999999999996s"></span><span class="ccc-bar flex-1 rounded-full bg-violet-400" style="height:40%;animation-delay:0s"></span><span class="ccc-bar flex-1 rounded-full bg-violet-400" style="height:75%;animation-delay:0.09s"></span><span class="ccc-bar flex-1 rounded-full bg-violet-400" style="height:50%;animation-delay:0.18s"></span><span class="ccc-bar flex-1 rounded-full bg-violet-400" style="height:65%;animation-delay:0.27s"></span></div><div class="relative w-[86px] h-6 shrink-0"><span class="ccc-live absolute inset-0 flex items-center justify-end gap-1.5 text-xs font-semibold text-amber-600"><span class="ccc-dot w-1.5 h-1.5 rounded-full bg-amber-500"></span> Live</span><span class="ccc-out absolute inset-0 flex items-center justify-end"><span class="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 rounded-full px-2 py-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check h-3 w-3 shrink-0"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Zusage \u20AC179K</span></span></div></div><div class="ccc-r2 flex items-center gap-3 rounded-xl bg-violet-50/60 px-3.5 py-4"><div class="w-9 h-9 rounded-full bg-white flex items-center justify-center text-sm font-bold text-violet-700 shrink-0 shadow-sm">VS</div><div class="min-w-0 w-[112px] shrink-0"><div class="text-base font-semibold text-gray-900 truncate leading-tight">Voltaire SA</div><div class="mt-1 text-sm text-gray-500 flex items-center gap-1.5 truncate"><span class="inline-block w-4 h-3 rounded-[2px] overflow-hidden ring-1 ring-black/10 shrink-0 leading-none"><svg viewBox="0 0 12 9" width="16" height="12" class="block" aria-hidden="true"><rect x="0" y="0" width="4" height="9" fill="#0055A4"></rect><rect x="4" y="0" width="4" height="9" fill="#FFFFFF"></rect><rect x="8" y="0" width="4" height="9" fill="#EF4135"></rect></svg></span><span class="truncate">Fran\xE7ais</span></div></div><div class="flex items-end justify-between gap-[3px] h-7 flex-1 min-w-0"><span class="ccc-bar flex-1 rounded-full bg-violet-400" style="height:45%;animation-delay:0s"></span><span class="ccc-bar flex-1 rounded-full bg-violet-400" style="height:80%;animation-delay:0.09s"></span><span class="ccc-bar flex-1 rounded-full bg-violet-400" style="height:35%;animation-delay:0.18s"></span><span class="ccc-bar flex-1 rounded-full bg-violet-400" style="height:90%;animation-delay:0.27s"></span><span class="ccc-bar flex-1 rounded-full bg-violet-400" style="height:55%;animation-delay:0.36s"></span><span class="ccc-bar flex-1 rounded-full bg-violet-400" style="height:95%;animation-delay:0.44999999999999996s"></span><span class="ccc-bar flex-1 rounded-full bg-violet-400" style="height:40%;animation-delay:0s"></span><span class="ccc-bar flex-1 rounded-full bg-violet-400" style="height:75%;animation-delay:0.09s"></span><span class="ccc-bar flex-1 rounded-full bg-violet-400" style="height:50%;animation-delay:0.18s"></span><span class="ccc-bar flex-1 rounded-full bg-violet-400" style="height:65%;animation-delay:0.27s"></span></div><div class="relative w-[86px] h-6 shrink-0"><span class="ccc-live absolute inset-0 flex items-center justify-end gap-1.5 text-xs font-semibold text-amber-600"><span class="ccc-dot w-1.5 h-1.5 rounded-full bg-amber-500"></span> Live</span><span class="ccc-out absolute inset-0 flex items-center justify-end"><span class="inline-flex items-center gap-1 text-xs font-semibold text-amber-700 bg-amber-50 rounded-full px-2 py-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check h-3 w-3 shrink-0"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> R\xFCckruf</span></span></div></div><div class="ccc-r3 flex items-center gap-3 rounded-xl bg-violet-50/60 px-3.5 py-4"><div class="w-9 h-9 rounded-full bg-white flex items-center justify-center text-sm font-bold text-violet-700 shrink-0 shadow-sm">HV</div><div class="min-w-0 w-[112px] shrink-0"><div class="text-base font-semibold text-gray-900 truncate leading-tight">Harborview</div><div class="mt-1 text-sm text-gray-500 flex items-center gap-1.5 truncate"><span class="inline-block w-4 h-3 rounded-[2px] overflow-hidden ring-1 ring-black/10 shrink-0 leading-none"><svg viewBox="0 0 12 9" width="16" height="12" class="block" aria-hidden="true"><rect x="0" y="0" width="12" height="9" fill="#012169"></rect><path d="M0,0 L12,9 M12,0 L0,9" stroke="#FFFFFF" stroke-width="2"></path><path d="M0,0 L12,9 M12,0 L0,9" stroke="#C8102E" stroke-width="0.9"></path><path d="M6,0 V9 M0,4.5 H12" stroke="#FFFFFF" stroke-width="3"></path><path d="M6,0 V9 M0,4.5 H12" stroke="#C8102E" stroke-width="1.7"></path></svg></span><span class="truncate">English</span></div></div><div class="flex items-end justify-between gap-[3px] h-7 flex-1 min-w-0"><span class="ccc-bar flex-1 rounded-full bg-violet-400" style="height:45%;animation-delay:0s"></span><span class="ccc-bar flex-1 rounded-full bg-violet-400" style="height:80%;animation-delay:0.09s"></span><span class="ccc-bar flex-1 rounded-full bg-violet-400" style="height:35%;animation-delay:0.18s"></span><span class="ccc-bar flex-1 rounded-full bg-violet-400" style="height:90%;animation-delay:0.27s"></span><span class="ccc-bar flex-1 rounded-full bg-violet-400" style="height:55%;animation-delay:0.36s"></span><span class="ccc-bar flex-1 rounded-full bg-violet-400" style="height:95%;animation-delay:0.44999999999999996s"></span><span class="ccc-bar flex-1 rounded-full bg-violet-400" style="height:40%;animation-delay:0s"></span><span class="ccc-bar flex-1 rounded-full bg-violet-400" style="height:75%;animation-delay:0.09s"></span><span class="ccc-bar flex-1 rounded-full bg-violet-400" style="height:50%;animation-delay:0.18s"></span><span class="ccc-bar flex-1 rounded-full bg-violet-400" style="height:65%;animation-delay:0.27s"></span></div><div class="relative w-[86px] h-6 shrink-0"><span class="ccc-live absolute inset-0 flex items-center justify-end gap-1.5 text-xs font-semibold text-amber-600"><span class="ccc-dot w-1.5 h-1.5 rounded-full bg-amber-500"></span> Live</span><span class="ccc-out absolute inset-0 flex items-center justify-end"><span class="inline-flex items-center gap-1 text-xs font-semibold text-violet-700 bg-violet-50 rounded-full px-2 py-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check h-3 w-3 shrink-0"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Bezahlt</span></span></div></div></div></div></div></div>`,"collections-escalation":`<style>
        @keyframes ceDot { 0%,100%{opacity:1;} 50%{opacity:.25;} }

        /* ---- an account clears, in whichever stage it happens to sit ---- */
        
        @keyframes cePaid_rem_ln {
          0%,30%        { background:#ffffff; border-color:#e5e7eb; transform:translateY(0) scale(1); opacity:1; }
          33%       { background:#ecfdf5; border-color:#86efac; transform:translateY(0) scale(1.03); opacity:1; }
          38%       { background:#ecfdf5; border-color:#86efac; transform:translateY(0) scale(1); opacity:1; }
          45%,100% { background:#ecfdf5; border-color:#86efac; transform:translateY(26px) scale(.92); opacity:0; }
        }
        @keyframes ceTile_rem_ln {
          0%,30%       { transform:scale(1); }
          33%      { transform:scale(1.18); }
          38%,100% { transform:scale(1); }
        }
        @keyframes ceTick_rem_ln {
          0%,32%   { opacity:0; transform:scale(.5); }
          36%,100% { opacity:1; transform:scale(1); }
        }
        @keyframes cePaid_rem_tp {
          0%,12%        { background:#ffffff; border-color:#e5e7eb; transform:translateY(0) scale(1); opacity:1; }
          15%       { background:#ecfdf5; border-color:#86efac; transform:translateY(0) scale(1.03); opacity:1; }
          20%       { background:#ecfdf5; border-color:#86efac; transform:translateY(0) scale(1); opacity:1; }
          27%,100% { background:#ecfdf5; border-color:#86efac; transform:translateY(26px) scale(.92); opacity:0; }
        }
        @keyframes ceTile_rem_tp {
          0%,12%       { transform:scale(1); }
          15%      { transform:scale(1.18); }
          20%,100% { transform:scale(1); }
        }
        @keyframes ceTick_rem_tp {
          0%,14%   { opacity:0; transform:scale(.5); }
          18%,100% { opacity:1; transform:scale(1); }
        }
        @keyframes cePaid_fu_et {
          0%,48%        { background:#ffffff; border-color:#e5e7eb; transform:translateY(0) scale(1); opacity:1; }
          51%       { background:#ecfdf5; border-color:#86efac; transform:translateY(0) scale(1.03); opacity:1; }
          56%       { background:#ecfdf5; border-color:#86efac; transform:translateY(0) scale(1); opacity:1; }
          63%,100% { background:#ecfdf5; border-color:#86efac; transform:translateY(26px) scale(.92); opacity:0; }
        }
        @keyframes ceTile_fu_et {
          0%,48%       { transform:scale(1); }
          51%      { transform:scale(1.18); }
          56%,100% { transform:scale(1); }
        }
        @keyframes ceTick_fu_et {
          0%,50%   { opacity:0; transform:scale(.5); }
          54%,100% { opacity:1; transform:scale(1); }
        }
        @keyframes cePaid_coll_rx {
          0%,21%        { background:#ffffff; border-color:#e5e7eb; transform:translateY(0) scale(1); opacity:1; }
          24%       { background:#ecfdf5; border-color:#86efac; transform:translateY(0) scale(1.03); opacity:1; }
          29%       { background:#ecfdf5; border-color:#86efac; transform:translateY(0) scale(1); opacity:1; }
          36%,100% { background:#ecfdf5; border-color:#86efac; transform:translateY(26px) scale(.92); opacity:0; }
        }
        @keyframes ceTile_coll_rx {
          0%,21%       { transform:scale(1); }
          24%      { transform:scale(1.18); }
          29%,100% { transform:scale(1); }
        }
        @keyframes ceTick_coll_rx {
          0%,23%   { opacity:0; transform:scale(.5); }
          27%,100% { opacity:1; transform:scale(1); }
        }
        @keyframes cePaid_agcy_mk {
          0%,39%        { background:#ffffff; border-color:#e5e7eb; transform:translateY(0) scale(1); opacity:1; }
          42%       { background:#ecfdf5; border-color:#86efac; transform:translateY(0) scale(1.03); opacity:1; }
          47%       { background:#ecfdf5; border-color:#86efac; transform:translateY(0) scale(1); opacity:1; }
          54%,100% { background:#ecfdf5; border-color:#86efac; transform:translateY(26px) scale(.92); opacity:0; }
        }
        @keyframes ceTile_agcy_mk {
          0%,39%       { transform:scale(1); }
          42%      { transform:scale(1.18); }
          47%,100% { transform:scale(1); }
        }
        @keyframes ceTick_agcy_mk {
          0%,41%   { opacity:0; transform:scale(.5); }
          45%,100% { opacity:1; transform:scale(1); }
        }

        /* ---- BEAT 1 (4-15%): Westwood advances Follow-up -> Collector ---- */
        @keyframes ceLeave  { 0%,5%{opacity:1;} 9%,100%{opacity:0;} }
        @keyframes ceArrive { 0%,12%{opacity:0;} 16%,100%{opacity:1;} }
        @keyframes ceFly {
          0%,4%    { transform: translate(0,0); opacity:0; }
          6%       { transform: translate(0,0); opacity:1; }
          14%      { transform: translate(142px,0); opacity:1; }
          16%,100% { transform: translate(142px,0); opacity:0; }
        }
        @keyframes ceArrow {
          0%,5%    { opacity:.25; transform:translateX(0); }
          10%      { opacity:1;   transform:translateX(3px); }
          16%,100% { opacity:.25; transform:translateX(0); }
        }

        /* ---- BEAT 2 (22-38%): the user moves a threshold, 21 -> 14 days ---- */
        @keyframes ceCursor {
          0%,16%   { transform: translate(26px,26px) scale(1); opacity:0; }
          19%      { transform: translate(0,0) scale(1); opacity:1; }
          22%      { transform: translate(0,0) scale(.8); opacity:1; }
          24%      { transform: translate(0,0) scale(1); opacity:1; }
          26%      { transform: translate(0,0) scale(.8); opacity:1; }
          28%      { transform: translate(0,0) scale(1); opacity:1; }
          33%      { transform: translate(26px,26px) scale(1); opacity:0; }
          100%     { transform: translate(26px,26px) scale(1); opacity:0; }
        }
        @keyframes ceDay21 { 0%,22%{opacity:1;} 24%,100%{opacity:0;} }
        @keyframes ceDay17 { 0%,22%{opacity:0;} 24%,26%{opacity:1;} 28%,100%{opacity:0;} }
        @keyframes ceDay14 { 0%,26%{opacity:0;} 28%,100%{opacity:1;} }
        @keyframes ceStepper {
          0%,23%   { box-shadow:0 0 0 0 rgba(124,58,237,0); border-color:#e5e7eb; }
          26%,36%  { box-shadow:0 0 0 3px rgba(124,58,237,.14); border-color:#c4b5fd; }
          41%,100% { box-shadow:0 0 0 0 rgba(124,58,237,0); border-color:#e5e7eb; }
        }
        @keyframes ceColEdit {
          0%,24%   { background:rgba(255,251,235,.4); }
          32%,42%  { background:rgba(237,233,254,.75); }
          50%,100% { background:rgba(255,251,235,.4); }
        }

        @keyframes ceT0{0%{opacity:1;}14%{opacity:1;}15.5%{opacity:0;}100%{opacity:0;}}@keyframes ceT1{0%{opacity:0;}14.5%{opacity:0;}16%{opacity:1;}24%{opacity:1;}25.5%{opacity:0;}100%{opacity:0;}}@keyframes ceT2{0%{opacity:0;}24.5%{opacity:0;}26%{opacity:1;}33%{opacity:1;}34.5%{opacity:0;}100%{opacity:0;}}@keyframes ceT3{0%{opacity:0;}33.5%{opacity:0;}35%{opacity:1;}42%{opacity:1;}43.5%{opacity:0;}100%{opacity:0;}}@keyframes ceT4{0%{opacity:0;}42.5%{opacity:0;}44%{opacity:1;}51%{opacity:1;}52.5%{opacity:0;}100%{opacity:0;}}@keyframes ceT5{0%{opacity:0;}51.5%{opacity:0;}53%{opacity:1;}100%{opacity:1;}}
        @keyframes ceTrayGlow {
          0%,64%   { box-shadow:0 0 0 0 rgba(22,163,74,0); }
          72%      { box-shadow:0 0 0 6px rgba(22,163,74,.13); }
          80%,100% { box-shadow:0 0 0 0 rgba(22,163,74,0); }
        }

        .ce-dot     { animation: ceDot 1.5s ease-in-out infinite; }
        .ce-leave   { animation: ceLeave 9s ease-out infinite; }
        .ce-arrive  { animation: ceArrive 9s ease-out infinite; opacity:0; }
        .ce-fly     { animation: ceFly 9s cubic-bezier(.4,0,.2,1) infinite; opacity:0; }
        .ce-arrow   { animation: ceArrow 9s ease-in-out infinite; }
        .ce-cursor  { animation: ceCursor 9s cubic-bezier(.4,0,.2,1) infinite; opacity:0; }
        .ce-d21     { animation: ceDay21 9s linear infinite; }
        .ce-d17     { animation: ceDay17 9s linear infinite; opacity:0; }
        .ce-d14     { animation: ceDay14 9s linear infinite; opacity:0; }
        .ce-stepper { animation: ceStepper 9s ease-out infinite; }
        .ce-coledit { animation: ceColEdit 9s ease-out infinite; }
        
        .ce-paid-rem-ln  { animation: cePaid_rem_ln 9s ease-out infinite; }
        .ce-ptile-rem-ln { animation: ceTile_rem_ln 9s ease-out infinite; }
        .ce-ptick-rem-ln { animation: ceTick_rem_ln 9s ease-out infinite; opacity:0; }
        .ce-paid-rem-tp  { animation: cePaid_rem_tp 9s ease-out infinite; }
        .ce-ptile-rem-tp { animation: ceTile_rem_tp 9s ease-out infinite; }
        .ce-ptick-rem-tp { animation: ceTick_rem_tp 9s ease-out infinite; opacity:0; }
        .ce-paid-fu-et  { animation: cePaid_fu_et 9s ease-out infinite; }
        .ce-ptile-fu-et { animation: ceTile_fu_et 9s ease-out infinite; }
        .ce-ptick-fu-et { animation: ceTick_fu_et 9s ease-out infinite; opacity:0; }
        .ce-paid-coll-rx  { animation: cePaid_coll_rx 9s ease-out infinite; }
        .ce-ptile-coll-rx { animation: ceTile_coll_rx 9s ease-out infinite; }
        .ce-ptick-coll-rx { animation: ceTick_coll_rx 9s ease-out infinite; opacity:0; }
        .ce-paid-agcy-mk  { animation: cePaid_agcy_mk 9s ease-out infinite; }
        .ce-ptile-agcy-mk { animation: ceTile_agcy_mk 9s ease-out infinite; }
        .ce-ptick-agcy-mk { animation: ceTick_agcy_mk 9s ease-out infinite; opacity:0; }
        .ce-t0{animation:ceT0 9s linear infinite;}.ce-t1{animation:ceT1 9s linear infinite;opacity:0;}.ce-t2{animation:ceT2 9s linear infinite;opacity:0;}.ce-t3{animation:ceT3 9s linear infinite;opacity:0;}.ce-t4{animation:ceT4 9s linear infinite;opacity:0;}.ce-t5{animation:ceT5 9s linear infinite;opacity:0;}
        .ce-tray { animation: ceTrayGlow 9s ease-out infinite; }
      </style><div class="tf-cardonly"><div class="tf-card relative w-[600px] shrink-0" style="--card-w:600px"><div class="bg-white rounded-2xl shadow-xl border border-gray-100/80 p-6"><div class="flex items-center gap-3 pb-4 mb-4 border-b border-gray-100"><div title="Vero \u2014 thinking" class="flex-shrink-0 " style="width:30px;height:30px;background-color:#111827;border-radius:50%;display:flex;align-items:center;justify-content:center;overflow:hidden;user-select:none"><div style="font-family:&quot;Courier New&quot;, Courier, monospace;color:#6EE7B7;display:flex;font-size:12.6px;line-height:1;font-weight:bold;transition:color 0.3s ease;width:3ch;justify-content:space-between;margin-top:0.05em"><span style="width:1ch;text-align:center;display:inline-block">1</span><span style="width:1ch;text-align:center;display:inline-block">1</span></div></div><span class="min-w-0 leading-tight"><span class="block text-base font-bold text-gray-900">Autopilot</span><span class="block text-sm text-gray-500">Vero eskaliert nach Ihrem Zeitplan</span></span><span class="ml-auto flex items-center gap-2 shrink-0"><span class="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-700"><span class="ce-dot w-2 h-2 rounded-full bg-emerald-500"></span> An</span><span class="relative block w-[42px] h-[24px] rounded-full bg-emerald-500"><span class="absolute top-[3px] right-[3px] w-[18px] h-[18px] rounded-full bg-white shadow"></span></span></span></div><div class="relative" style="height:230px"><div class="absolute top-0" style="left:0;width:144px"><div class="flex flex-col items-center" style="height:62px"><div class="flex items-center gap-1.5"><span class="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 bg-violet-100 text-violet-600"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail h-3.5 w-3.5"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg></span><span class="text-sm font-bold text-gray-900">Erinnerung</span></div><span class="relative mt-1.5 inline-flex items-center"><span class="inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white pl-2 pr-1 py-0.5"><span class="text-sm font-semibold text-gray-700 tabular-nums leading-[18px]">Tag 3</span><span class="flex flex-col text-gray-400"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-up h-2.5 w-2.5 -mb-0.5"><path d="m18 15-6-6-6 6"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-2.5 w-2.5"><path d="m6 9 6 6 6-6"></path></svg></span></span></span></div><div class="relative rounded-xl border bg-violet-50/40 border-violet-100" style="height:168px"><div class="absolute left-2 right-2 flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-1.5" style="top:8px;height:36px"><span class="w-6 h-6 rounded-md flex items-center justify-center shrink-0 bg-violet-50 text-violet-600"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-factory h-3.5 w-3.5"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M17 18h1"></path><path d="M12 18h1"></path><path d="M7 18h1"></path></svg></span><span class="text-sm font-semibold text-gray-800 truncate ">Halvex</span></div><div class="absolute left-2 right-2 flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-1.5" style="top:52px;height:36px"><span class="w-6 h-6 rounded-md flex items-center justify-center shrink-0 bg-violet-50 text-violet-600"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-store h-3.5 w-3.5"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"></path><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"></path><path d="M2 7h20"></path><path d="M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7"></path></svg></span><span class="text-sm font-semibold text-gray-800 truncate ">Brookq</span></div><div class="ce-paid-rem-ln absolute left-2 right-2 flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-1.5" style="top:96px;height:36px"><span class="ce-ptile-rem-ln w-6 h-6 rounded-md flex items-center justify-center shrink-0 bg-violet-50 text-violet-600"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-truck h-3.5 w-3.5"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg></span><span class="text-sm font-semibold text-gray-800 truncate pr-4">Kestrel</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check ce-ptick-rem-ln absolute right-1.5 h-4 w-4 text-emerald-600"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg></div><div class="ce-paid-rem-tp absolute left-2 right-2 flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-1.5" style="top:140px;height:36px"><span class="ce-ptile-rem-tp w-6 h-6 rounded-md flex items-center justify-center shrink-0 bg-violet-50 text-violet-600"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pill h-3.5 w-3.5"><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"></path><path d="m8.5 8.5 7 7"></path></svg></span><span class="text-sm font-semibold text-gray-800 truncate pr-4">Torpa</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check ce-ptick-rem-tp absolute right-1.5 h-4 w-4 text-emerald-600"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg></div></div></div><div class="absolute top-0" style="left:150px;width:136px"><div class="flex flex-col items-center" style="height:62px"><div class="flex items-center gap-1.5"><span class="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 bg-violet-100 text-violet-600"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone h-3.5 w-3.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></span><span class="text-sm font-bold text-gray-900">Mahnung</span></div><span class="relative mt-1.5 inline-flex items-center"><span class="inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white pl-2 pr-1 py-0.5"><span class="text-sm font-semibold text-gray-700 tabular-nums leading-[18px]">Tag 10</span><span class="flex flex-col text-gray-400"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-up h-2.5 w-2.5 -mb-0.5"><path d="m18 15-6-6-6 6"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-2.5 w-2.5"><path d="m6 9 6 6 6-6"></path></svg></span></span></span></div><div class="relative rounded-xl border bg-violet-50/40 border-violet-100" style="height:168px"><div class="ce-paid-fu-et absolute left-2 right-2 flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-1.5" style="top:8px;height:36px"><span class="ce-ptile-fu-et w-6 h-6 rounded-md flex items-center justify-center shrink-0 bg-violet-50 text-violet-600"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap h-3.5 w-3.5"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg></span><span class="text-sm font-semibold text-gray-800 truncate pr-4">Enterra</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check ce-ptick-fu-et absolute right-1.5 h-4 w-4 text-emerald-600"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg></div><div class="ce-leave absolute left-2 right-2 flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-1.5" style="top:52px;height:36px"><span class="w-6 h-6 rounded-md flex items-center justify-center shrink-0 bg-violet-50 text-violet-600"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wrench h-3.5 w-3.5"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg></span><span class="text-sm font-semibold text-gray-800 truncate ">Westwood</span></div></div></div><div class="absolute top-0" style="left:292px;width:130px"><div class="flex flex-col items-center" style="height:62px"><div class="flex items-center gap-1.5"><span class="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 bg-amber-100 text-amber-600"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users h-3.5 w-3.5"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></span><span class="text-sm font-bold text-gray-900">Mitarbeiter</span></div><span class="relative mt-1.5 inline-flex items-center"><span class="ce-stepper inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white pl-2 pr-1 py-0.5"><span class="relative block h-[18px] w-[46px]"><span class="ce-d21 absolute inset-0 text-sm font-semibold text-gray-700 tabular-nums leading-[18px]">Tag 21</span><span class="ce-d17 absolute inset-0 text-sm font-semibold text-gray-700 tabular-nums leading-[18px]">Tag 17</span><span class="ce-d14 absolute inset-0 text-sm font-semibold text-violet-700 tabular-nums leading-[18px]">Tag 14</span></span><span class="flex flex-col text-gray-400"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-up h-2.5 w-2.5 -mb-0.5"><path d="m18 15-6-6-6 6"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-2.5 w-2.5"><path d="m6 9 6 6 6-6"></path></svg></span></span><svg class="ce-cursor absolute pointer-events-none" style="right:-4px;bottom:-12px;width:18px;height:18px;z-index:40" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 3l14 8.5-6.2 1.2L10 19 5 3z" fill="#111827" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"></path></svg></span></div><div class="ce-coledit relative rounded-xl border bg-amber-50/40 border-amber-100" style="height:168px"><div class="ce-paid-coll-rx absolute left-2 right-2 flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-1.5" style="top:8px;height:36px"><span class="ce-ptile-coll-rx w-6 h-6 rounded-md flex items-center justify-center shrink-0 bg-amber-50 text-amber-600"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cpu h-3.5 w-3.5"><rect width="16" height="16" x="4" y="4" rx="2"></rect><rect width="6" height="6" x="9" y="9" rx="1"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M2 9h2"></path><path d="M20 15h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path></svg></span><span class="text-sm font-semibold text-gray-800 truncate pr-4">Redix</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check ce-ptick-coll-rx absolute right-1.5 h-4 w-4 text-emerald-600"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg></div><div class="ce-arrive absolute left-2 right-2 flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-1.5" style="top:52px;height:36px"><span class="w-6 h-6 rounded-md flex items-center justify-center shrink-0 bg-amber-50 text-amber-600"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wrench h-3.5 w-3.5"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg></span><span class="text-sm font-semibold text-gray-800 truncate ">Westwood</span></div></div></div><div class="absolute top-0" style="left:428px;width:124px"><div class="flex flex-col items-center" style="height:62px"><div class="flex items-center gap-1.5"><span class="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 bg-rose-100 text-rose-600"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-building2 h-3.5 w-3.5"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg></span><span class="text-sm font-bold text-gray-900">Inkasso</span></div><span class="relative mt-1.5 inline-flex items-center"><span class="inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white pl-2 pr-1 py-0.5"><span class="text-sm font-semibold text-gray-700 tabular-nums leading-[18px]">Tag 45</span><span class="flex flex-col text-gray-400"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-up h-2.5 w-2.5 -mb-0.5"><path d="m18 15-6-6-6 6"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-2.5 w-2.5"><path d="m6 9 6 6 6-6"></path></svg></span></span></span></div><div class="relative rounded-xl border bg-rose-50/40 border-rose-100" style="height:168px"><div class="ce-paid-agcy-mk absolute left-2 right-2 flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-1.5" style="top:8px;height:36px"><span class="ce-ptile-agcy-mk w-6 h-6 rounded-md flex items-center justify-center shrink-0 bg-rose-50 text-rose-600"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-bag h-3.5 w-3.5"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg></span><span class="text-sm font-semibold text-gray-800 truncate pr-4">Merrick</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check ce-ptick-agcy-mk absolute right-1.5 h-4 w-4 text-emerald-600"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg></div></div></div><span class="absolute text-violet-400" style="left:141px;top:86px;opacity:0.25"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right h-3.5 w-3.5"><path d="m9 18 6-6-6-6"></path></svg></span><span class="ce-arrow absolute text-violet-400" style="left:283px;top:86px"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right h-3.5 w-3.5"><path d="m9 18 6-6-6-6"></path></svg></span><span class="absolute text-violet-400" style="left:419px;top:86px;opacity:0.25"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right h-3.5 w-3.5"><path d="m9 18 6-6-6-6"></path></svg></span><div class="ce-fly absolute flex items-center gap-1.5 rounded-lg border border-violet-300 bg-white px-1.5 shadow-lg" style="left:158px;top:114px;height:36px;width:120px;z-index:30"><span class="w-6 h-6 rounded-md bg-violet-50 text-violet-600 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wrench h-3.5 w-3.5"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg></span><span class="text-sm font-semibold text-gray-800 truncate">Westwood</span></div></div><div class="ce-tray mt-4 flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4" style="height:60px"><span class="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check h-5 w-5"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg></span><span class="leading-tight"><span class="block text-sm font-semibold text-emerald-700/80">Diese Woche eingezogen</span><span class="relative block h-[26px] w-[112px]"><span class="ce-t0 absolute inset-0 text-2xl font-bold text-emerald-800 tabular-nums leading-[26px]">\u20AC0</span><span class="ce-t1 absolute inset-0 text-2xl font-bold text-emerald-800 tabular-nums leading-[26px]">\u20AC96k</span><span class="ce-t2 absolute inset-0 text-2xl font-bold text-emerald-800 tabular-nums leading-[26px]">\u20AC247k</span><span class="ce-t3 absolute inset-0 text-2xl font-bold text-emerald-800 tabular-nums leading-[26px]">\u20AC343k</span><span class="ce-t4 absolute inset-0 text-2xl font-bold text-emerald-800 tabular-nums leading-[26px]">\u20AC617k</span><span class="ce-t5 absolute inset-0 text-2xl font-bold text-emerald-800 tabular-nums leading-[26px]">\u20AC768k</span></span></span><span class="ml-auto text-right leading-tight shrink-0"><span class="block text-sm font-semibold text-emerald-700/80">Erledigt</span><span class="relative block h-[26px] w-[64px]"><span class="ce-t0 absolute inset-0 text-right text-2xl font-bold text-emerald-800 tabular-nums leading-[26px]">0</span><span class="ce-t1 absolute inset-0 text-right text-2xl font-bold text-emerald-800 tabular-nums leading-[26px]">1</span><span class="ce-t2 absolute inset-0 text-right text-2xl font-bold text-emerald-800 tabular-nums leading-[26px]">2</span><span class="ce-t3 absolute inset-0 text-right text-2xl font-bold text-emerald-800 tabular-nums leading-[26px]">3</span><span class="ce-t4 absolute inset-0 text-right text-2xl font-bold text-emerald-800 tabular-nums leading-[26px]">4</span><span class="ce-t5 absolute inset-0 text-right text-2xl font-bold text-emerald-800 tabular-nums leading-[26px]">5</span></span></span></div></div></div></div>`};var d=()=>location.pathname.startsWith("/de/")||location.pathname==="/de";var t={css:"",stories:{},locale:"en"};function p({css:n,stories:e,locale:a}){t.css=n,t.stories=e,t.locale=a||"en",customElements.get("transformance-story")||customElements.define("transformance-story",l)}var g=":host(.tf-off) *{animation-play-state:paused!important}",l=class extends HTMLElement{connectedCallback(){if(this._wired)return;this._wired=!0;let e=this.getAttribute("data-story")||"";if(t.locale==="en"&&d()){this.style.display="none";return}if(!t.stories[e]){console.warn("[transformance-story] unknown story:",e,"(locale "+t.locale+")");return}this._html=t.stories[e],this.style.display="block";let i=window.matchMedia("(max-width: 1023px)").matches&&this.getAttribute("data-h-sm")||this.getAttribute("data-h")||560;if(this.style.minHeight=i+"px",!("IntersectionObserver"in window)){this._mount();return}let s=new IntersectionObserver(h=>{if(!h.some(x=>x.isIntersecting))return;s.disconnect();let r=()=>this._mount();"requestIdleCallback"in window?requestIdleCallback(r,{timeout:600}):requestAnimationFrame(()=>setTimeout(r,0))},{rootMargin:"400px 0px"});s.observe(this)}disconnectedCallback(){this._vis&&(this._vis.disconnect(),this._vis=null)}_mount(){if(this._mounted)return;this._mounted=!0;let e=this.attachShadow({mode:"open"}),a=document.createElement("style");a.textContent=t.css+g,e.appendChild(a),e.appendChild(document.createRange().createContextualFragment(this._html)),this.style.minHeight="",this._vis=new IntersectionObserver(i=>{i.forEach(s=>this.classList.toggle("tf-off",!s.isIntersecting))},{rootMargin:"100px 0px"}),this._vis.observe(this)}};p({css:o,stories:c,locale:"de"});})();
