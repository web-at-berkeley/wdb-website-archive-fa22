import React from 'react';
import { SimpleGrid, Text } from '@chakra-ui/react';
import Profile from '../../../components/profile';
import Header from '../../../components/header';
import PageWrapper from '../../../components/pageWrapper';

import alum from './data/alumni';
import advisors from './data/advisors';

const Alumni = () => {
  const groups = [
    { title: 'UC Berkeley Graduates', data: alum },
    { title: 'Senior Advisors', data: advisors },
  ];

  return (
    <main>
      <PageWrapper>
        <Header title="Our alumni" subtitle="we <3 our alumni!" />
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

export default Alumni;
