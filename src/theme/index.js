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
      },
    },
  },
  colors: {
    darkPurple: '#5F60FF',
    purple: '#CC5DF3',
    white: '#F3F2FF',
    lightBlue: '#0AD3FF',
  },
});

export default theme;
