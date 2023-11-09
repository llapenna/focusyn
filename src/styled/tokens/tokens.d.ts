/* eslint-disable */
export type Token = "spacing.xxs" | "spacing.xs" | "spacing.sm" | "spacing.md" | "spacing.lg" | "spacing.xl" | "spacing.xxl" | "spacing.huge" | "sizes.xxs" | "sizes.xs" | "sizes.sm" | "sizes.md" | "sizes.lg" | "sizes.xl" | "sizes.breakpoint-sm" | "sizes.breakpoint-md" | "sizes.breakpoint-lg" | "sizes.breakpoint-xl" | "sizes.breakpoint-2xl" | "breakpoints.sm" | "breakpoints.md" | "breakpoints.lg" | "breakpoints.xl" | "breakpoints.2xl" | "spacing.-xxs" | "spacing.-xs" | "spacing.-sm" | "spacing.-md" | "spacing.-lg" | "spacing.-xl" | "spacing.-xxl" | "spacing.-huge"

export type SpacingToken = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "huge" | "-xxs" | "-xs" | "-sm" | "-md" | "-lg" | "-xl" | "-xxl" | "-huge"

export type SizeToken = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "breakpoint-sm" | "breakpoint-md" | "breakpoint-lg" | "breakpoint-xl" | "breakpoint-2xl"

export type BreakpointToken = "sm" | "md" | "lg" | "xl" | "2xl"

export type AnimationName = "spin" | "ping" | "pulse" | "bounce"

export type Tokens = {
		spacing: SpacingToken
		sizes: SizeToken
		breakpoints: BreakpointToken
		animationName: AnimationName
} & { [token: string]: never }

export type TokenCategory = "zIndex" | "opacity" | "colors" | "fonts" | "fontSizes" | "fontWeights" | "lineHeights" | "letterSpacings" | "sizes" | "shadows" | "spacing" | "radii" | "borders" | "durations" | "easings" | "animations" | "blurs" | "gradients" | "breakpoints" | "assets"