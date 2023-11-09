const tokens = {
  "spacing.xxs": {
    "value": "2px",
    "variable": "var(--spacing-xxs)"
  },
  "spacing.xs": {
    "value": "4px",
    "variable": "var(--spacing-xs)"
  },
  "spacing.sm": {
    "value": "8px",
    "variable": "var(--spacing-sm)"
  },
  "spacing.md": {
    "value": "16px",
    "variable": "var(--spacing-md)"
  },
  "spacing.lg": {
    "value": "24px",
    "variable": "var(--spacing-lg)"
  },
  "spacing.xl": {
    "value": "32px",
    "variable": "var(--spacing-xl)"
  },
  "spacing.xxl": {
    "value": "48px",
    "variable": "var(--spacing-xxl)"
  },
  "spacing.huge": {
    "value": "64px",
    "variable": "var(--spacing-huge)"
  },
  "sizes.xxs": {
    "value": "8px",
    "variable": "var(--sizes-xxs)"
  },
  "sizes.xs": {
    "value": "16px",
    "variable": "var(--sizes-xs)"
  },
  "sizes.sm": {
    "value": "24px",
    "variable": "var(--sizes-sm)"
  },
  "sizes.md": {
    "value": "32px",
    "variable": "var(--sizes-md)"
  },
  "sizes.lg": {
    "value": "48px",
    "variable": "var(--sizes-lg)"
  },
  "sizes.xl": {
    "value": "64px",
    "variable": "var(--sizes-xl)"
  },
  "sizes.breakpoint-sm": {
    "value": "640px",
    "variable": "var(--sizes-breakpoint-sm)"
  },
  "sizes.breakpoint-md": {
    "value": "768px",
    "variable": "var(--sizes-breakpoint-md)"
  },
  "sizes.breakpoint-lg": {
    "value": "1024px",
    "variable": "var(--sizes-breakpoint-lg)"
  },
  "sizes.breakpoint-xl": {
    "value": "1280px",
    "variable": "var(--sizes-breakpoint-xl)"
  },
  "sizes.breakpoint-2xl": {
    "value": "1536px",
    "variable": "var(--sizes-breakpoint-2xl)"
  },
  "breakpoints.sm": {
    "value": "640px",
    "variable": "var(--breakpoints-sm)"
  },
  "breakpoints.md": {
    "value": "768px",
    "variable": "var(--breakpoints-md)"
  },
  "breakpoints.lg": {
    "value": "1024px",
    "variable": "var(--breakpoints-lg)"
  },
  "breakpoints.xl": {
    "value": "1280px",
    "variable": "var(--breakpoints-xl)"
  },
  "breakpoints.2xl": {
    "value": "1536px",
    "variable": "var(--breakpoints-2xl)"
  },
  "spacing.-xxs": {
    "value": "calc(var(--spacing-xxs) * -1)",
    "variable": "var(--spacing-xxs)"
  },
  "spacing.-xs": {
    "value": "calc(var(--spacing-xs) * -1)",
    "variable": "var(--spacing-xs)"
  },
  "spacing.-sm": {
    "value": "calc(var(--spacing-sm) * -1)",
    "variable": "var(--spacing-sm)"
  },
  "spacing.-md": {
    "value": "calc(var(--spacing-md) * -1)",
    "variable": "var(--spacing-md)"
  },
  "spacing.-lg": {
    "value": "calc(var(--spacing-lg) * -1)",
    "variable": "var(--spacing-lg)"
  },
  "spacing.-xl": {
    "value": "calc(var(--spacing-xl) * -1)",
    "variable": "var(--spacing-xl)"
  },
  "spacing.-xxl": {
    "value": "calc(var(--spacing-xxl) * -1)",
    "variable": "var(--spacing-xxl)"
  },
  "spacing.-huge": {
    "value": "calc(var(--spacing-huge) * -1)",
    "variable": "var(--spacing-huge)"
  }
}

export function token(path, fallback) {
  return tokens[path]?.value || fallback
}

function tokenVar(path, fallback) {
  return tokens[path]?.variable || fallback
}

token.var = tokenVar