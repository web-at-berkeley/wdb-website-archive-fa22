import React from 'react';
import { VStack, Flex, Box, Text, Button } from '@chakra-ui/react';
import PageWrapper from '../../../components/pageWrapper';

import notionResources from './constants/Notion';
import Header from '../../../components/header';
// import Blog from '../../../components/blog';

import CuteComputer from './img/edu-image.png';
import Youtube from './img/youtube.png';
import Logo from './img/logo.png';
// import Blobs from './img/blobs.png';

const Education = () => {
  return (
    <main>
      <PageWrapper>
        <Header
          title="education"
          subtitle="giving back to the community"
          description="WDB strives to share our knowledge and resources to allow everyone to experience web development education. From hosting UC Berkeley’s first full stack web development course, to providing public resources and workshops, we are always looking for new ways to share the joys of web development and design."
        />
        {/* <img src={Blobs} alt="" className={styles['blobs']} /> */}
        <Box layerStyle="glassy" mt={12}>
          <Text textStyle="subtitle1" fontSize="3xl" mb={[6, null, 8]}>
            Introduction to Full Stack Development Decal
          </Text>

          <Flex direction={['column-reverse', null, null, 'row']}>
            <VStack flex={1} spacing={4}>
              <Box w={40}>
                <img
                  src={CuteComputer}
                  alt="Introduction to Full Stack Development Decal Logo"
                  width="100%"
                />
              </Box>
              <a
                href="https://www.fullstackdecal.com"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <Button variant="primary">Learn More</Button>
              </a>
            </VStack>

            <Box pl={[0, null, null, 8]} mb={[8, null, null, 0]} flex={3}>
              <Text textStyle="body3">
                WDB runs the Introduction to Full-Stack DeCal every semester
                starting Fall 2021. We aim to take students with any level of
                previous programming experience and equip them with the tools to
                build whatever they put their mind to. In addition to attending
                lecture twice a week, students participate in a weekend-long
                hackathon and spend the last month developing a larger-scale
                final project in groups.
              </Text>
            </Box>
          </Flex>
        </Box>

        <Flex
          layerStyle="glassy"
          gap={12}
          direction={['column', null, null, 'row']}
          mt={16}
        >
          <Flex flex={4} direction="column" align="center">
            <Text textStyle="subtitle1" fontSize="3xl" mb={6}>
              Notion Resources
            </Text>
            <VStack spacing={6}>
              {notionResources.map(({ title, description, link, image }) => (
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    textDecoration: 'none',
                    width: '100%',
                  }}
                >
                  <Flex layerStyle="solid" align="center" w="100%">
                    <Box w={[20, 16, 12]}>
                      <img src={image} alt={`WDB ${title}`} width="100%" />
                    </Box>
                    <Box ml={6}>
                      <Text textStyle="body2" fontSize="xl">
                        {title}
                      </Text>
                      <Text textStyle="body3" fontSize="lg">
                        {description}
                      </Text>
                    </Box>
                  </Flex>
                </a>
              ))}
            </VStack>
          </Flex>

          <Flex flex={3} direction="column" align="center">
            <Box w={48} mb={8}>
              <img src={Youtube} alt="Youtube" width="100%" />
            </Box>
            <a
              href="https://www.youtube.com/channel/UCGpukPda1pJ8Ei20e02oR0w"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <Flex layerStyle="solid" align="center">
                <Flex flex={2}>
                  <img
                    src={Logo}
                    alt="Web Development at Berkeley"
                    width="100%"
                  />
                </Flex>
                <Flex direction="column" flex={7} pl={6}>
                  <Text textStyle="body2" fontSize="xl">
                    Web Dev at Berkeley
                  </Text>
                  <Text textStyle="body3">10,034,890 Subscribers</Text>
                  <Flex layerStyle="red" mt={2}>
                    <Text textStyle="body3" color="white" fontSize="lg">
                      Subscribe 10M
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </a>
            <Text textStyle="body3" textAlign="center" mt={6}>
              Visit our YouTube for past workshops, education lectures,
              recruiting events and more!
            </Text>
          </Flex>
        </Flex>

        {/* <div className={styles['blog']}>
          <Blog />
        </div> */}
      </PageWrapper>
    </main>
  );
};

export default Education;
