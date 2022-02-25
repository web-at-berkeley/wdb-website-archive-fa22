import React from 'react';
import {
  SimpleGrid,
  VStack,
  Center,
  Flex,
  Button,
  Box,
  Text,
} from '@chakra-ui/react';
import Header from '../../components/header';
import PageWrapper from '../../components/pageWrapper';
import Instagram from '../../components/instagram';

import services from './constants/Services';
import sponsorships from './constants/Sponsorships';

import { Link } from 'react-router-dom';

// import ServiceBlobs from './img/service-blobs.png';
// import FormBlobs from './img/form-blobs.png';

const WorkWithUs = () => {
  // const [name, setName] = useState('');
  // const [company, setCompany] = useState('');
  // const [email, setEmail] = useState('');
  // const [orgDescription, setOrgDescription] = useState('');
  // const [request, setRequest] = useState('');
  // const [comments, setComments] = useState('');
  // const [error, setError] = useState([]);
  // const [submitted, setSubmitted] = useState(false);

  // const submit = () => {
  //   const errors = [];
  //   const fields = [
  //     { field: name, name: 'name' },
  //     { field: company, name: 'company' },
  //     { field: email, name: 'email' },
  //     { field: orgDescription, name: 'orgDescription' },
  //     { field: request, name: 'request' },
  //   ];
  //   for (let i = 0; i < fields.length; i++) {
  //     const current = fields[i];
  //     if (!current.field) {
  //       errors.push(current.name);
  //     }
  //   }
  //   setError(error);
  //   if (!errors.length) {
  //     setSubmitted(true);
  //   }
  // };

  // const errorText = () => {
  //   const text = error.map((message) => `${message}, `);
  //   return text;
  // };

  return (
    <main>
      <PageWrapper>
        <Header
          title="Work with us"
          subtitle="we're open for work!"
          description="Interested in working with us? Want to ask questions about our past projects or see our 
							design portfolios? Feel free to reach out and contact us!"
        />
        <Flex direction={['column', null, 'row']} gap={6} mt={5}>
          <a
            href="https://forms.gle/tDLdLqd8psNfNTbo8"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <Button variant="primary">Contact Us</Button>
          </a>
          <Link to="/projects" style={{ textDecoration: 'none' }}>
            <Button variant="primary">Check out our past work</Button>
          </Link>
        </Flex>

        {/* <img src={ServiceBlobs} alt="" className={styles['blobs']} /> */}
        <Text textStyle="subtitle1" mt={12} mb={8}>
          Services we offer
        </Text>

        <SimpleGrid columns={[1, 2, 4]} spacing={6}>
          {services.map(({ image, title, description }) => (
            <VStack layerStyle="glassy" spacing={4} px={4}>
              <Center h={24} w={24}>
                <img src={image} alt={title} width="100%" />
              </Center>
              <Text textStyle="subtitle1" fontSize="2xl">
                {title}
              </Text>
              <Text textStyle="body3" textAlign="center">
                {description}
              </Text>
            </VStack>
          ))}
        </SimpleGrid>

        <Text textStyle="subtitle1" mt={[12, 16, 24]} mb={8}>
          Other ways you can work with us
        </Text>
        <SimpleGrid columns={[1, null, 3]} spacing={6}>
          {sponsorships.map(({ image, title, description }) => (
            <VStack layerStyle="glassy" spacing={4} px={6}>
              <Center h={24} w={24}>
                <img src={image} alt={title} width="100%" />
              </Center>
              <Text textStyle="subtitle1" fontSize="2xl">
                {title}
              </Text>
              <Text textStyle="body3" textAlign="center">
                {description}
              </Text>
            </VStack>
          ))}
        </SimpleGrid>

        <Flex
          layerStyle="glassy"
          direction="column"
          align="center"
          mt={[12, 20]}
          px={[6, 10]}
        >
          <Text
            textStyle="subtitle1"
            fontSize={['2xl', '3xl']}
            textAlign="center"
          >
            Looking to build something great?
            <br /> Let's get to{' '}
            <Text as="span" textDecoration="underline">
              work.
            </Text>
          </Text>
          <Text textStyle="body3" textAlign="center" mt={4}>
            Fill out the form below with some basic information about your
            organization or startup, and we'll reach out to schedule a time to
            chat.
          </Text>
          <a
            href="https://forms.gle/tDLdLqd8psNfNTbo8"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <Button variant="primary" h={12} w={[60, 80]} mt={10}>
              Contact Us
            </Button>
          </a>
          {/* <form 
					action='https://docs.google.com/forms/d/e/1FAIpQLSf_HkQ06zaYExGMX8LTSvyPbApQ90wvfbW6_MUYFct-jH_1ow/formResponse'
					target='_self'
					method='post'
					id='asdf'
					className={styles['form']}>
						<div className={classnames(styles['row'], styles['top-row'])}>
							<div className={classnames(styles['field'], styles['name'])}>
							<Form.Group className={styles['form_group']} >
								
								<Form.Control
									placeholder="Full Name"
									type="text"
									required
									name="entry.194553479"
									id="first"
									style={style.FormBox}
								/>
							</Form.Group>
							</div>
							<div className={classnames(styles['field'], styles['company'])}>
								<Form.Group className={styles['form_group']}>
									
									<Form.Control
										placeholder="Organization/Company"
										type="text" 
										required
										name="entry.1946864254"
										id="first"
										style={style.FormBox}
									/>
								</Form.Group>
							</div>
							<div className={classnames(styles['field'], styles['email'])}>
							<Form.Group className={styles['form_group']}>
									
									<Form.Control
										placeholder="Email Address"
										type="text"
										required
										name="entry.1287541880"
										id="first"
										style={style.FormBox}
									/>
								</Form.Group>
							</div>
						</div>

						<div
							className={classnames(
								styles['row'],
								styles['field'],
								styles['org-description']
							)}
						>
							<Form.Group className={styles['form_group_area']}>
								<Form.Control
									as="textarea"
									rows="6"
									type="text"
									required
									name="entry.634684828"
									id="first"
									placeholder="Tell us about your organization/company."
									class="big"
									style={style.FormBox}
								/>
							</Form.Group>
						</div>

						<div
							className={classnames(
								styles['row'],
								styles['field'],
								styles['request']
							)}
						>
							<Form.Group className={styles['form_group_area']}>
								<Form.Control
									as="textarea"
									rows="6"
									type="text"
									required
									name="entry.554707180"
									id="first"
									placeholder="What can we do for you?"
									class="big"
									style={style.FormBox}
								/>
							</Form.Group>
						</div>

						<div
							className={classnames(
								styles['row'],
								styles['field'],
								styles['comments']
							)}
						>
							<Form.Group className={styles['form_group_area']}>
								<Form.Control
									as="textarea"
									rows="6"
									type="text"
									required
									name="entry.1974357149"
									id="first"
									placeholder="Any other comments or questions for us?"
									class="big"
									style={style.FormBox}
								/>
							</Form.Group>
						</div>

						{error.length ? (
							<p className={styles['error']}>
								Error: please enter your {errorText()}.
							</p>
						) : null}

						<div className={styles['submit']}>
						<Button
						text="Submit"
						type="submit"
						id="submit"
						value="Send message"
						// style={{
						// 	width: '100%',
						// 	marginTop: '1.5rem',
						// 	background: 'transparent',
						// 	fontSize: '18px',
						// 	padding: '.7rem',
						// 	border: '1px solid #dee2e6',
						// }}
						// className="text-center"
					>
						
					</Button>
							
						</div>
					</form> */}
        </Flex>

        <Box mt={24} pt={3}>
          <Instagram />
        </Box>
      </PageWrapper>
    </main>
  );
};

export default WorkWithUs;
