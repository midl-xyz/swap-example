import { cva } from '~/styled-system/css';
import { styled } from '~/styled-system/jsx';

const buttonStyle = cva({
  defaultVariants: {
    appearance: 'primary',
    size: 'medium',
  },
  base: {
    flexGrow: 0,
    flexShrink: 0,
    appearance: 'none',
    display: 'inline-flex',
    gap: 2,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'medium',
    _hover: {
      cursor: 'pointer',
    },
    _disabled: {
      bg: 'neutral.300',
      pointerEvents: 'none',
    },
    _loading: {
      bg: 'neutral.300',
    },
  },
  variants: {
    appearance: {
      primary: {
        backgroundColor: '#5107FFD6',
        color: 'white',
        _hover: {
          backgroundColor: '#5107FF',
        },
        _disabled: {
          backgroundColor: '#5107FF3D',
        },
      },
      tertiary: {
        backgroundColor: '#FF4C00D6',
        color: 'white',
        _hover: {
          backgroundColor: '#FF4C00',
        },
        _disabled: {
          backgroundColor: '#FF4C003D',
        },
      },
      secondary: {
        backgroundColor: 'neutral.100',
        color: 'neutral.800',
        _hover: {
          backgroundColor: 'neutral.200',
        },
      },
      ghost: {
        backgroundColor: 'transparent',
        color: 'neutral.800',
        _hover: {
          backgroundColor: 'neutral.100',
        },
      },
      outline: {
        backgroundColor: 'transparent',
        color: 'neutral.800',
        border: '1px solid',
        borderColor: 'neutral.200',
        _hover: {
          backgroundColor: 'neutral.100',
        },
      },
    },
    size: {
      small: {
        fontSize: 'sm',
      },
      medium: {
        h: 11,
        px: 4,
        py: 2,
        borderRadius: 0,
        fontSize: 'md',
      },
      large: {
        fontSize: 'lg',
      },
    },
  },
});

export const Button = styled('button', buttonStyle, {
  defaultProps: {
    type: 'button',
  },
});
