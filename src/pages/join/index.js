import React from 'react';
import { Button, Flex, Box, Text } from '@chakra-ui/react';
import PageWrapper from '../../components/pageWrapper';
import testimonials from './constants/Testimonials';
import timeline from './constants/Timeline';
import Header from '../../components/header';

import { Link } from 'react-router-dom';

import Row from 'react-bootstrap/Row';

// import Bg from './img/bg.png';
// import Blobs from './img/blobs.png';
// import Blobs2 from './img/blobs2.png';
// import Blobs3 from './img/blobs3.png';
import anjan from './img/Anjan.png';
import caelin from './img/caelin-test.png';
import lizzie from './img/lizzie-test.png';

import styles from './style.module.scss';

const Join = () => {
  return (
    <main>
      <PageWrapper>
        <Header
          title="Join the team"
          subtitle="We're excited to meet you!"
          description="If you're looking to join either the Introduction to Full-Stack Development DeCal or join Web Development at Berkeley as a Developer or Designer, you're in the right place!"
        />
        <Text textStyle="subtitle1" mt={12} textAlign="left">
          {/* Applications are Open! */}
          Applications are Closed.
        </Text>
        <Text textStyle="body3">
          {/* Fill out our application to get started with our recruitment process!
          You can find links to our infosession Facebook events for both the
          Introduction to Full-Stack DeCal and Web Development at Berkley below. */}
          Check back in the beginning of the Fall 2022 semester to learn more
          about joining WDB! In the meantime, check out our{' '}
          <Link
            to="/initiatives/education"
            style={{ textDecoration: 'underline' }}
          >
            Educational Resources
          </Link>{' '}
          to learn more about Web Development and Design, or subscribe to our
          mailing list to keep up with our organization!
        </Text>
        <Flex
          direction={['column', null, 'row']}
          gap={6}
          mt={[10, null, 5]}
          mb={[12, null, 16]}
        >
          <a
            href="https://forms.gle/4fWFUVuifTqu4hYj7"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <Button variant="primary">Dev & Designer Application</Button>
          </a>
          <a
            href="https://forms.gle/uw6P28m7eicTeDm47"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <Button variant="primary">Full-Stack DeCal Application</Button>
          </a>
        </Flex>

        {timeline.map(
          ({
            title,
            date,
            location,
            locationLink,
            description,
            link,
            linkDescription,
          }) => (
            <Box layerStyle="glassy" mt={6}>
              <Text textStyle="subtitle4" mb={[3, 1.5]}>
                {title} -{' '}
                <Text as="span" color="purple">
                  {date}
                </Text>
              </Text>
              {locationLink ? (
                <a href={locationLink} target="_blank" rel="noreferrer">
                  <Text textStyle="body3" fontWeight={500} mb={3}>
                    📍 {location}
                  </Text>
                </a>
              ) : (
                <Text textStyle="body3" fontWeight={500} mb={4}>
                  📍 {location}
                </Text>
              )}

              <Text textStyle="body5" mb={link ? 5 : 0}>
                {description}
              </Text>

              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: 'none' }}
                >
                  <Button
                    variant="primary"
                    maxW="100%"
                    whiteSpace="normal"
                    wordWrap="break-word"
                    py={[12, 8, 0]}
                    pt={[0, 0, 1]}
                  >
                    {linkDescription}
                  </Button>
                </a>
              )}
            </Box>
          )
        )}

        <Text textStyle="subtitle1" textAlign="center" mt={32}>
          Member Experiences
        </Text>
        {/* <img className={styles['blob']} src={Blobs3} alt="" /> */}

        <div className={styles['experiences']}>
          <Row lg="3" med="1" sm="1" className={styles['experience-group']}>
            <div className={styles['testimonial1']}>
              <img src={lizzie} alt="{role.title}" />
              <p className={styles['text']}>
                "WDB has allowed me to become a design sponge! Exploring my
                interests in front-end design was something I gathered the
                courage to pursue thanks to WDB and the support from fellow
                designers as well as the freedom to learn design freely has been
                fire!"
              </p>
              <p className={styles['title']}>Lizzie ‘24, Designer</p>
            </div>
            <div className={styles['testimonial2']}>
              <img src={anjan} alt="{role.title}" />
              {/* <p className={styles['title']}>Anjan</p> */}
              <p className={styles['text']}>
                "The main reason I wanted to join WDB at first was purely
                because I had never really gotten the chance to dabble in web
                development, and I thought this would be a great opportunity for
                me to actually nail down the fundamentals and then transition
                into working hands-on on projects, something that’s pretty
                unique to WDB. Later on I realized a lot of the friends I’ve
                made at Berkeley have been through this club, WDB has been a
                really important part of my Berkeley experience thus far :)"
              </p>
              <p className={styles['title']}>Anjan ‘24, Full Stack Developer</p>
            </div>

            <div className={styles['testimonial1']}>
              <img src={caelin} alt="{role.title}" />

              <p className={styles['text']}>
                "The development branch has exposed me to awesome clients and
                developers. It’s been a great opportunity to expand my personal
                network and meet some incredible people. I’ve also had a great
                time exploring new technology stacks and seeing how others
                think."
              </p>
              <p className={styles['title']}>Caelin '24, Product Manager</p>
            </div>
          </Row>
        </div>
      </PageWrapper>
    </main>
  );
};

export default Join;
