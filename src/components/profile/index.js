import React from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';
import socials from './constants/Socials';

const Profile = ({ data }) => {
  return (
    <Box>
      <img src={data.image} alt={data.name} width="100%" />

      <Text textStyle="body2" mt={2.5}>
        {data.name}
      </Text>

      <Text textStyle="body3" fontSize="14px">
        {data.role}
      </Text>

      {data.at && (
        <Text textStyle="body3" fontSize="14px" mt={0.5}>
          {data.at}
        </Text>
      )}

      <Flex gap={3.5} mt={2}>
        {socials.map(({ name, id, image }) => {
          return (
            data[id] && (
              <a
                href={data[id]}
                id={id}
                target="_blank"
                rel="noopener noreferrer"
                key={id}
              >
                <Box w={6}>
                  <img src={image} alt={name} width="100%" />
                </Box>
              </a>
            )
          );
        })}
      </Flex>
    </Box>
  );
};

export default Profile;
