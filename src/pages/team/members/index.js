import React from 'react';
import { SimpleGrid, Text } from '@chakra-ui/react';
import Profile from '../../../components/profile';
import Header from '../../../components/header';
import PageWrapper from '../../../components/pageWrapper';

import leadership from './data/leadership';
import developers from './data/developers';
import designers from './data/designers';
import coursestaff from './data/coursestaff';

import Side1 from './img/side-1.png';
import Side2 from './img/side-2.png';

const Members = () => {
  const groups = [
    { title: 'Leadership', data: leadership },
    { title: 'DeCal Course Staff', data: coursestaff },
    { title: 'Developers', data: developers },
    { title: 'Designers', data: designers },
  ];

  return (
    <main>
      {/* <img src={Side1} alt="" className={styles['side-1']} />
      <img src={Side2} alt="" className={styles['side-2']} /> */}
      <PageWrapper>
        <Header
          title="Meet the team"
          subtitle="Students with a passion for building."
        />

        {groups.map(({ title, data }) => (
          <>
            <Text textStyle="subtitle1" mt={12} mb={8}>
              {title}
            </Text>
            <SimpleGrid
              columns={[2, 3, 4, 5]}
              spacing={10}
              mb={[12, null, null, 20]}
            >
              {data.map((data, i) => (
                <Profile data={data} key={i} />
              ))}
            </SimpleGrid>
          </>
        ))}
      </PageWrapper>
    </main>
  );
};

export default Members;
