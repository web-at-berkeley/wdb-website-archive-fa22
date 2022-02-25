const layerStyles = {
  glassy: {
    bg: 'rgba(255, 255, 255, 0.6)',
    backdropFilter: 'blur(27px)',
    borderRadius: 'lg',
    px: [6, null, 8],
    py: [8, null, 10],
    zIndex: 2,
  },
  solid: {
    bg: '#ffffff',
    boxShadow: '4px 4px 35px rgba(0, 0, 0, 0.1)',
    borderRadius: 'lg',
    px: 6,
    py: 4,
    zIndex: 2,
  },
  red: {
    bg: 'red.500',
    w: 'fit-content',
    align: 'center',
    justify: 'center',
    px: 4,
    py: 1,
    borderRadius: 'lg',
    transitionDuration: '.25s',
    _hover: { bg: 'red.600' },
  },
};

export default layerStyles;
