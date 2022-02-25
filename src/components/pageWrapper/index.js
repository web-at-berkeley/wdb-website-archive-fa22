import React from 'react';
import { Container, Flex, Box } from '@chakra-ui/react';
import Footer from '../footer';

const PageWrapper = ({ children, ...props }) => {
  return (
    <Flex minH="100vh" w="100vw" direction="column" justify="space-between">
      <Container
        maxW="container.lg"
        {...props}
        px={[6, 8, 12, 12, 0]}
        pt={[6, null, 0]}
      >
        {children}
      </Container>
      <Box mt={[32, 56, 80, 96]} pt={[0, null, null, 6]}>
        <Footer />
      </Box>
    </Flex>
  );
};

export default PageWrapper;
