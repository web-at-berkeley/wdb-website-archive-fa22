import React, { useState } from 'react';
import { Input, Flex, Box, Text, Button } from '@chakra-ui/react';
import Instagram from '../../components/instagram';
// import Event from '../../components/event';
import PageWrapper from '../../components/pageWrapper';
import Showcase from '../../components/showcase';
import stats from './constants/Stats';

import axios from 'axios';
import { Link } from 'react-router-dom';
import VisibilitySensor from 'react-visibility-sensor';
import Fade from 'react-reveal/Fade';

import CountUp from 'react-countup';

import Bg from './img/bg.png';
import NewsletterBlob from './img/newsletter-blob.png';
// import Blobs from './img/blobs.png';
import Clients from './img/clients.png';
import Partners from './img/partners.png';
import LandingBlobs from './img/landing-blobs.png';
import LogoBlack from './img/logo-black.png';
import Meta from './img/meta.png';

import BlobsMobile from './img/landing-blobs-mobile.png';
import NewsletterBlobMobile from './img/newsletter-blob-mobile.png';
import ClientsMobile from './img/clients-mobile.png';
import PartnersMobile from './img/partners-mobile.png';

import styles from './style.module.scss';
import breakpoints from '../../breakpoints.module.scss';

const Landing = () => {
  const [emailAddress, setEmailAddress] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [emailSuccess, setEmailSuccess] = useState(false);

  const submitEmail = (e) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(e)) {
      setEmailError(false);
      setEmailSuccess(true);
      let emailObject = { email: e };
      console.log(emailObject);
      axios
        .post(
          'https://sheet.best/api/sheets/d67bcf77-3da2-475c-85b9-a1863ded112e',
          emailObject,
          {
            headers: {
              'X-API-Key':
                'm3RSp-wizXAM3jBcCP2Eo06bfE!2KcEmupS55XMXoscTWg-ivegf#rKQiTUmHpIJ',
            },
          }
        )
        .then((response) => {
          console.log(response);
        });
    } else {
      setEmailError(true);
    }
  };

  return (
    <>
      {/* Meta Image */}
      <img src={Meta} alt="" style={{ display: 'none' }} />
      {/* Splash Page */}
      <div className={styles['hero']}>
        <img src={Bg} alt="" className={styles['bg']} />

        {/* Desktop top graphics */}
        <img
          src={LandingBlobs}
          alt=""
          className={`${styles['landing-blobs']} ${breakpoints['desktop']}`}
        />

        {/* Mobile top graphics */}
        <img
          src={BlobsMobile}
          alt=""
          className={`${styles['landing-blobs']} ${breakpoints['mobile']}`}
        />

        <div className={styles['text']}>
          <Link to="/" className={breakpoints['mobile']}>
            <img src={LogoBlack} alt="Web Development at Berkeley" />
          </Link>
          <Fade up>
            <h3>
              Builders, Creatives,
              <br />
              and entrepreneurs
            </h3>
          </Fade>
          <Fade up delay={500}>
            <h2 className={breakpoints['desktop']}>
              UC Berkeley's premier web design
              <br />
              and development organization.
            </h2>
          </Fade>
          <Fade up delay={1000}>
            <div className={styles['button-temp']}>
              <Link to="/join">
                <Button
                  variant="primary"
                  style={{ width: '20rem', maxWidth: '80vw', padding: '1rem' }}
                >
                  {' '}
                  Join Us!
                </Button>
              </Link>
            </div>
          </Fade>
        </div>
      </div>
      <PageWrapper pt={[16, 60, 0, 72]} align="center">
        <Fade up>
          <Text textStyle="body5" w={['100%', '90%', '80%']}>
            <Text as="span" fontWeight={800}>
              Web Development at Berkeley
            </Text>{' '}
            is UC Berkeley's first web development-focused organization,
            bringing full-stack web development education and hands-on industry
            development experience to UC Berkeley students.
          </Text>
        </Fade>

        {/* Newsletter */}
        <Fade up>
          <Box mt={[16]} position="relative">
            <Box
              position="absolute"
              w="100%"
              h="100%"
              zIndex={-1}
              display={['none', 'block']}
            >
              <img
                src={NewsletterBlob}
                alt=""
                style={{ width: '100%', height: '100%' }}
              />
            </Box>
            <Box
              position="absolute"
              w="100%"
              h="100%"
              zIndex={-1}
              display={['block', 'none']}
            >
              <img
                src={NewsletterBlobMobile}
                alt=""
                style={{ width: '100%', height: '100%' }}
              />
            </Box>
            <Box py={20} px={[12, 20, 24, 40]}>
              <Text textStyle="body5" textAlign="left" mb={4}>
                📫 Sign up for our email list for updates, resources, and more!
              </Text>

              <Flex as="form" direction={['column', null, 'row']}>
                <Input
                  variant="primary"
                  id="emailField"
                  type="text"
                  placeholder="Email Address"
                  onChange={(e) => setEmailAddress(e.target.value)}
                />
                <Button
                  variant="primary"
                  mt={[4, null, 0]}
                  ml={[0, null, 6]}
                  px={12}
                  onClick={() => submitEmail(emailAddress)}
                >
                  Gimme the news!
                </Button>
              </Flex>
              <Box position="relative" mt={2.5}>
                <Text
                  textStyle="body5"
                  textAlign="left"
                  color={emailError ? 'red.500' : 'darkPurple'}
                  fontSize="md"
                  position="absolute"
                  top={0}
                >
                  {emailError && 'Please enter a valid email.'}
                  {emailSuccess && 'Thanks for subscribing!'}
                </Text>
              </Box>
            </Box>
          </Box>
        </Fade>

        {/* Club Statistics */}
        <Flex
          justify="space-between"
          direction={['column', null, null, 'row']}
          mt={[20, null, null, 28]}
        >
          {stats.map(({ description, image, end, plus }) => (
            <Box px={4} mb={[10, null, null, 0]}>
              <CountUp start={0} end={end} duration={2}>
                {({ countUpRef, start }) => (
                  <Flex align="center" justify="center" onScroll={start} mb={5}>
                    <Box w={20} mr={5}>
                      <img src={image} alt="" width="100%" />
                    </Box>
                    <VisibilitySensor onChange={start} delayedCall>
                      <>
                        <Text
                          as="span"
                          textStyle="number"
                          color="darkPurple"
                          ref={countUpRef}
                        />
                        {plus && (
                          <Text as="span" textStyle="number" color="darkPurple">
                            +
                          </Text>
                        )}
                      </>
                    </VisibilitySensor>
                  </Flex>
                )}
              </CountUp>
              <Text textStyle="body5">{description}</Text>
            </Box>
          ))}
        </Flex>

        {/* <img src={Blobs} alt="" className={styles['blobs']} /> */}
        <Fade up>
          <Box mt={[12, null, null, 28]}>
            <Showcase
              title="Past Projects"
              image={Clients}
              imageMobile={ClientsMobile}
            />
          </Box>
        </Fade>
        <Fade up>
          <Box my={[20, null, null, 24]}>
            <Showcase
              title="Partners & Sponsors"
              image={Partners}
              imageMobile={PartnersMobile}
            />
          </Box>
        </Fade>

        <Fade up>
          <Instagram />
        </Fade>
      </PageWrapper>
    </>
  );
};

export default Landing;
