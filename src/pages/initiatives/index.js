import React from 'react';
import {
  SimpleGrid,
  VStack,
  Center,
  Flex,
  Text,
  Button,
} from '@chakra-ui/react';
import Header from '../../components/header';
import PageWrapper from '../../components/pageWrapper';
import initiatives from './constants/Initiatives';

import { Link } from 'react-router-dom';

// import Frame from './img/frame.png';

const Initiatives = () => {
  return (
    <main>
      {/* <img src={Frame} alt="" className={styles['frame']} /> */}
      <PageWrapper>
        <Header
          title="our initiatives"
          subtitle="shaping the WDB member experience"
          description="Web Development at Berkeley's initiatives cater to student developers and designers of all levels, starting from beginners, to experienced developers and designers who want hands on experience. Whether you’ve had years of experience as a full-stack developer, or have zero programming experience, WDB has an initiative for you."
        />

        <SimpleGrid
          columns={[1, null, null, 3]}
          spacing={10}
          mt={[12, null, 16]}
        >
          {initiatives.map(({ title, description, image, link }) => (
            <VStack layerStyle="glassy" spacing={5} px={6}>
              <Center h={24} w={24}>
                <img src={image} alt={title} width="100%" />
              </Center>
              <Text textStyle="subtitle1" fontSize="2xl">
                {title}
              </Text>
              <Text textStyle="body3" textAlign="center" fontSize="16px">
                {description}
              </Text>
              <Link to={`/${link}`} style={{ textDecoration: 'none' }}>
                <Button variant="secondary">Learn More</Button>
              </Link>
            </VStack>
          ))}
        </SimpleGrid>

        <Flex direction="column" gap={5} mt={20}>
          <Header
            title="Interested in Joining Us?"
            description="Applications to join Web Development at Berkeley open in August 2022 for the Fall 2022 semester! Check back here or on our “Join Us” page to fill out our application! We welcome all experience levels and encourage you to apply to learn new skills and hone your existing ones!"
          />
          <Link to="/join" style={{ textDecoration: 'none' }}>
            <Button variant="primary" px={16}>
              Apply Here
            </Button>
          </Link>
        </Flex>
      </PageWrapper>
    </main>
  );
};

export default Initiatives;
