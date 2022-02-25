import React from 'react';
import {
  SimpleGrid,
  Center,
  VStack,
  Flex,
  Box,
  Text,
  Button,
} from '@chakra-ui/react';
import PageWrapper from '../../../components/pageWrapper';
import Header from '../../../components/header';
import roles from './constants/Roles';

import { Link } from 'react-router-dom';

import Clients from './img/clients.png';
// import RoleBlobs from './img/role-blobs.png';
// import ClientBlobs from './img/client-blobs.png';

const Industry = () => {
  return (
    <main>
      <PageWrapper>
        <Header
          title="industry"
          subtitle="building the next generation of Developers & Designers"
          description="In our development initiative, we allow experienced developers to gain hands-on experience working with industry clients. Students will partake in the software engineering lifecycle, leading the design, build, and deployment stages of the client's website."
        />

        <Text
          textStyle="subtitle1"
          textAlign="center"
          mt={12}
          mb={[20, null, 16]}
        >
          who we are
        </Text>
        {/* <img src={RoleBlobs} alt="" className={styles['blobs']} /> */}
        <SimpleGrid columns={[1, null, 3]} spacing={[24, null, 7]}>
          {roles.map(({ image, title, description }) => (
            <VStack
              layerStyle="glassy"
              border="2px solid white"
              spacing={4}
              px={6}
            >
              <Center h={32} w={32} mt={-20}>
                <img
                  src={image}
                  alt={title}
                  width="100%"
                  style={{ border: '5px solid white', borderRadius: '1000px' }}
                />
              </Center>
              <Text textStyle="subtitle1" fontSize="2xl" textAlign="center">
                {title}
              </Text>
              <Text textStyle="body3" textAlign="center">
                {description}
              </Text>
            </VStack>
          ))}
        </SimpleGrid>

        <Flex direction="column" align="center">
          <Text textStyle="subtitle1" mt={20} mb={4}>
            who we work with
          </Text>
          <Text
            textStyle="subtitle3"
            textAlign={['center', null, 'left']}
            fontSize="lg"
            mb={10}
          >
            Our partners, clients, and sponsors come from a wide array of
            industries.
          </Text>
          {/* <img src={ClientBlobs} alt="" className={styles['blobs']} /> */}
          <Box layerStyle="glassy" w="80%" px={10} mb={12}>
            <img src={Clients} alt="Clients and partners" />
          </Box>
          <Link to="/work-with-us" style={{ textDecoration: 'none' }}>
            <Button variant="primary" py={7} px={[24, 28, 32]}>
              work with us
            </Button>
          </Link>
        </Flex>
      </PageWrapper>
    </main>
  );
};

export default Industry;
