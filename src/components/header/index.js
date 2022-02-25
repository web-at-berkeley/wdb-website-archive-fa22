import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Header = ({ title, subtitle, description }) => {
  return (
    <Box>
      <Text textStyle="title2" mb={-1.5}>
        {title}
      </Text>
      <Text textStyle="subtitle2" mb={1}>
        {subtitle}
      </Text>
      {description && <Text textStyle="body3">{description}</Text>}
    </Box>
  );
};

export default Header;
