import { extendTheme } from '@chakra-ui/react';

import textStyles from './textStyles';
import layerStyles from './layerStyles';

const theme = extendTheme({
  textStyles,
  layerStyles,
  components: {
    Text: {
      baseStyle: {
        color: 'black',
        zIndex: 2,
      },
    },
    Input: {
      variants: {
        primary: {
          bg: 'white',

          _focus: {
            border: 'none',
          },
        },
      },
    },
    Button: {
      baseStyle: {
        fontFamily: 'Cocogoose',
        fontSize: '20px',
        textTransform: 'uppercase',
        color: 'white',
        pt: 1,
      },
      variants: {
        primary: {
          bg: 'purple',
          px: 7,

          _hover: {
            bg: 'darkenedPurple',
          },
          _focus: {
            boxShadow: 'none',
          },
          _active: {
            boxShadow: 'none',
          },
        },
        secondary: {
          bg: 'transparent',
          borderWidth: 2,
          borderColor: 'purple',
          borderStyle: 'solid',
          color: 'purple',
          px: 7,

          _hover: {
            borderColor: 'darkenedPurple',
            color: 'darkenedPurple',
          },
          _focus: {
            boxShadow: 'none',
          },
          _active: {
            boxShadow: 'none',
          },
        },
      },
    },
  },
  colors: {
    darkPurple: '#5F60FF',
    darkenedPurple: '#4461fd',
    purple: '#5d76fe',
    lightPurple: '#cc5df3',
    white: '#F3F2FF',
    lightBlue: '#0AD3FF',
  },
});

export default theme;
