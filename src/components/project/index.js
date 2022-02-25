import React from 'react';
import { Box } from '@chakra-ui/react';

const Project = ({ project }) => {
  const { name, cover, color, link } = project;

  return (
    <Box>
      {link ? (
        <a href={link} target="_blank" rel="noreferrer">
          <Box>
            <img
              src={cover}
              alt={name}
              width="100%"
              style={{
                boxShadow: `4px 4px 21px ${color}`,
                borderRadius: '.35rem',
              }}
            />
          </Box>
        </a>
      ) : (
        <Box>
          <img
            src={cover}
            alt={name}
            width="100%"
            style={{
              boxShadow: `4px 4px 21px ${color}`,
              borderRadius: '.35rem',
            }}
          />
        </Box>
      )}
    </Box>
  );
};

export default Project;
