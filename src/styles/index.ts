import { createStitches, ScaleValue } from '@stitches/react';

const convertToRem = (value: number) => `${value / 16}rem`;

const space = {
  4: convertToRem(4),
  8: convertToRem(8),
  12: convertToRem(12),
  16: convertToRem(16),
  20: convertToRem(20),
  24: convertToRem(24),
  28: convertToRem(28),
  32: convertToRem(32),
  36: convertToRem(36),
  40: convertToRem(40),
}

export const { styled: zusStyled } = createStitches({
  prefix: 'zus',
  theme: {
    colors: {
      black: '#000000',
      white: '#ffffff',

      gray800: '#1a1a1a',
      gray700: '#202020',
      gray600: '#333333',

      'zus-red': '#ff014d',

      background: '#1a1a1a',
      shape: '#202020',

      'text-default': '#ffffff',
      'text-highlight': '#ff014d',

      'button-primary-bg': '#ff014d',
      'button-primary-text': '#ffffff',
      'button-secondary-bg': 'transparent',
      'button-secondary-text': '#ffffff',
    },
    radii: {
      default: '4px',
      pill: '999999px'
    },
    space,
    sizes: space,
  },
  utils: {
    px: (value: ScaleValue<'space'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: ScaleValue<'space'>) => ({
      paddingTop: value,
      paddingBottom: value,
    })
  }
});