import { zusStyled } from '../../styles';

export const Container = zusStyled('button', {
  appearance: 'none',
  border: 0,
  cursor: 'pointer',
  px: '$32',
  py: '$16',
  borderRadius: '$default',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  variants: {
    variant: {
      primary: {
        background: '$button-primary-bg',
        color: '$button-primary-text',
      },
      secondary: {
        background: '$button-secondary-bg',
        color: '$button-secondary-text',
        border: '1px solid',
        borderColor: '$zus-red',
      },
    },
    pill: {
      true: {
        borderRadius: '$pill',
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
});
