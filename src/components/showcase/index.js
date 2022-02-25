import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Showcase = ({ title, subtitle, image, imageMobile }) => {
  return (
    <Box layerStyle="glassy">
      <Text textStyle="subtitle1" textAlign="left">
        {title}
      </Text>
      <Text textStyle="body3" textAlign="left">
        {subtitle}
      </Text>
      <Box mt={subtitle ? 4 : 6}>
        {imageMobile ? (
          <>
            <Box display={['none', null, 'block']}>
              <img src={image} alt={title} />
            </Box>
            <Box display={['block', null, 'none']}>
              <img src={imageMobile} alt={title} />
            </Box>
          </>
        ) : (
          <img src={image} alt={title} />
        )}
      </Box>
    </Box>
  );
};

export default Showcase;
