import React from 'react';
import { VStack, Center, Flex, Box, Text } from '@chakra-ui/react';

import values from './constants/Values';
import Header from '../../components/header';
import Showcase from '../../components/showcase';
import PageWrapper from '../../components/pageWrapper';

// import Frame from './img/frame.png';
// import Blobs from './img/blobs.png';
import Team from './img/aboutus.png';
import HackSC from './img/hacksc.png';
import HackSCFlowers from './img/hacksc-flowers.png';
import Startups from './img/startups.png';
import Destinations from './img/destinations.png';

const About = () => {
  return (
    <main>
      {/* <img src={Frame} alt="" className={styles['frame']} /> */}

      <PageWrapper>
        <Header
          title="About us"
          subtitle="Who we are and what we do"
          description="Web Development @ Berkeley (WDB) is UC Berkeley’s Premier Web Design and Development organization. We’re a group of students focusing on building the web development and design community."
        />

        <Box
          px={[0, null, 4, 12]}
          mt={[12, null, 16, 24]}
          mb={[16, null, 20, 32]}
        >
          <img src={Team} alt="Our WDB Team" width="100%" />
        </Box>

        <Text textStyle="subtitle1" mb={[8, null, 10, 12]} textAlign="center">
          Our values and culture
        </Text>
        <Flex gap={8} direction={['column', null, null, 'row']}>
          {values.map(({ title, description, image }) => (
            <VStack layerStyle="glassy" spacing={4}>
              <Center h={32} w={32}>
                <img src={image} alt={title} width="100%" />
              </Center>

              <Text textStyle="body2" fontSize="24px" textAlign="center">
                {title}
              </Text>
              <Text textStyle="body3" textAlign="center">
                {description}
              </Text>
            </VStack>
          ))}
        </Flex>

        <Box position="relative" mt={[24, null, 28, 32, 40]}>
          {/* <img src={Blobs} alt="" className={styles['blobs']} /> */}

          <Box layerStyle="glassy">
            <Box w={44} mb={3}>
              <img src={HackSCFlowers} alt="HackSC" width="100%" />
            </Box>

            <Flex direction={['column', null, null, 'row']}>
              <Box flex={2}>
                <img
                  src={HackSC}
                  alt="WDB Founding Team"
                  width="100%"
                  style={{ borderRadius: '.5rem' }}
                />
              </Box>

              <Box pl={[0, null, null, 10]} mt={[6, null, null, 0]} flex={3}>
                <Text textStyle="subtitle1" textAlign="left" mb={1}>
                  Our Roots
                </Text>
                <Text textStyle="body3">
                  WDB was born out of one sleepless weekend at a hackathon at
                  USC. Our organization continuously seeks to capture the
                  essence and energy of a hackathon, a place where people of all
                  backgrounds go to code, learn, and help one another, all while
                  building something they're passionate for.
                </Text>
              </Box>
            </Flex>
          </Box>

          <Box mt={[20, null, null, 24]}>
            <Showcase title="Built by our entrepreneurs" image={Startups} />
          </Box>

          <Box mt={[12, null, 20, 24]}>
            <Showcase title="Our Destinations" image={Destinations} />
          </Box>
        </Box>
      </PageWrapper>
    </main>
  );
};

export default About;
