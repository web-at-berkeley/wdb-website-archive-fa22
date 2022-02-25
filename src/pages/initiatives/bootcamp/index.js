import React, { useState } from 'react';
import { VStack, Flex, Box, Text, Button } from '@chakra-ui/react';
import Header from '../../../components/header';
import PageWrapper from '../../../components/pageWrapper';
import timeline from './constants/Timeline';
import tenants from './constants/Tenants';

import Carousel, {
  slidesToShowPlugin,
  arrowsPlugin,
} from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { Link } from 'react-router-dom';

import left from './img/leftarrow.png';
import right from './img/rightarrow.png';
// import Blobs from './img/blobs.png';
import Bg from './img/bg.png';

import styles from './style.module.scss';

const Bootcamp = () => {
  const [category, setCategory] = useState('Mentorship');
  const [categoryData, setCategoryData] = useState(tenants[0].data);

  const toggleCategory = (newCategory, categoryData) => {
    setCategory(newCategory);
    setCategoryData(categoryData);
  };

  return (
    <main>
      <PageWrapper>
        <Header
          title="Product Bootcamp"
          subtitle="transforming students into professionals"
          description="WDB's Product Bootcamp bridges the gap between classroom-based education and industry-level design and development through the use of siloed projects, real-world experiences, best practices and industry standards, and personalized mentorship. Our goal it to transform eager and motivated students with the prerequisite knowledge into fully-fledges designers and developers. "
        />

        {/* <img src={Blobs} alt="" className={styles['blobs']} /> */}
        {/* Desktop */}
        <Flex
          layerStyle="glassy"
          direction="column"
          align="center"
          px={16}
          mt={16}
          display={['none', null, null, 'flex']}
        >
          <Flex justify="space-between" w="100%">
            {tenants.map(({ name, data }) => (
              <Text
                textStyle="body2"
                fontSize="lg"
                borderBottomWidth={3}
                borderStyle="solid"
                borderColor={name === category ? 'darkPurple' : 'transparent'}
                cursor="pointer"
                onClick={() => toggleCategory(name, data)}
              >
                {name}
              </Text>
            ))}
          </Flex>
          <Flex align="center" justify="space-between" flex={1} mt={12}>
            <Box flex={1}>
              <img src={categoryData.image} alt={category} width="100%" />
            </Box>
            <Box flex={2} pl={12}>
              <Text textStyle="body5">{categoryData.description}</Text>
            </Box>
          </Flex>
        </Flex>

        {/* Mobile */}
        {tenants.map(({ name, data }) => (
          <VStack
            layerStyle="glassy"
            mt={12}
            spacing={4}
            display={['flex', null, null, 'none']}
          >
            <Text textStyle="body2" fontSize="2xl">
              {name}
            </Text>
            <Text textStyle="body5" textAlign="center">
              {data.description}
            </Text>
            <Box flex={1} maxW={80} pt={6}>
              <img src={data.image} alt={category} width="100%" />
            </Box>
          </VStack>
        ))}

        <Text textStyle="subtitle1" textAlign="center" mt={20}>
          Bootcamp Timeline
        </Text>
        <Text textStyle="subtitle3" textAlign="center" mb={5}>
          Swipe to view timeline!
        </Text>

        <Carousel
          className={styles['carousel']}
          breakpoints={{
            770: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 1,
                  },
                },
              ],
            },
            900: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 2,
                  },
                },
              ],
            },
            1200: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 3,
                  },
                },
              ],
            },
          }}
          plugins={[
            // 'infinite',
            {
              resolve: arrowsPlugin,
              options: {
                arrowLeft: (
                  <img className={styles['carousel-arrow']} src={left} alt="" />
                ),
                arrowLeftDisabled: (
                  <img className={styles['carousel-arrow']} src={left} alt="" />
                ),
                arrowRight: (
                  <img
                    className={styles['carousel-arrow']}
                    src={right}
                    alt=""
                  />
                ),
                arrowRightDisabled: (
                  <img className={styles['carousel-arrow']} src={left} alt="" />
                ),
                addArrowClickHandler: true,
              },
            },
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 4,
              },
            },
          ]}
        >
          {timeline.map(({ image, title, description }) => (
            <div className={styles['col']}>
              <img src={image} alt="inclusion & acceptance" />
              <h6>{title}</h6>
              <p>{description}</p>
            </div>
          ))}
        </Carousel>
        <div className={styles['interested']}>
          <img src={Bg} alt="" />
          <div className={styles['text']}>
            <h3>Interested?</h3>
            <p className={styles['blurb']}>
              The applications for the training program will open in August 2021
              for the Fall 2021 semester! Check back here or on our “Join Us”
              page to fill out our application! Don't miss your chance to join a
              passionate team of builders, mentors, and creatives.
            </p>
            <Link to="/join">
              <Button variant="primary">Apply Here</Button>
            </Link>
          </div>
        </div>
      </PageWrapper>
    </main>
  );
};

export default Bootcamp;
