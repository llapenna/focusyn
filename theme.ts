import { defineTokens } from '@pandacss/dev';
import type { ExtendableOptions } from '@pandacss/types';

// --------------------
// SPACINGS
// --------------------
const spacing = defineTokens.spacing({
  xxs: { value: '2px' },
  xs: { value: '4px' },
  sm: { value: '8px' },
  md: { value: '16px' },
  lg: { value: '24px' },
  xl: { value: '32px' },
  xxl: { value: '48px' },
  huge: { value: '64px' },
});

// --------------------
// SIZES
// --------------------
const sizes = defineTokens.sizes({
  xxs: { value: '8px' },
  xs: { value: '16px' },
  sm: { value: '24px' },
  md: { value: '32px' },
  lg: { value: '48px' },
  xl: { value: '64px' },
});

// --------------------
// FONT SIZES
// --------------------
const fontSizes = defineTokens.fontSizes({
  xxs: { value: '12px' },
  xs: { value: '16px' },
  sm: { value: '24px' },
  md: { value: '32px' },
  lg: { value: '48px' },
  xl: { value: '64px' },
  xxl: { value: '96px' },
});

const theme: ExtendableOptions['theme'] = {
  tokens: {
    spacing,
    sizes,
    fontSizes,
  },
};
export default theme;
