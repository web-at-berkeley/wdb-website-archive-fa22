import React from 'react';
import { SimpleGrid, Text } from '@chakra-ui/react';
import Header from '../../components/header';
import Project from '../../components/project';
import PageWrapper from '../../components/pageWrapper';

import clientProjects from './data/client';
import nonprofitProjects from './data/nonprofit';
// import studentProjects from './data/student';

const Projects = () => {
  const currentProjects = clientProjects
    .filter((project) => project.semester === 'Fall 2021')
    .concat(
      nonprofitProjects.filter((project) => project.semester === 'Fall 2021')
    );

  const columnNumbers = [1, null, 2, 3];

  return (
    <main>
      <PageWrapper>
        <Header
          title="Our work"
          subtitle="Projects completed for various clients"
          description="Our work encompasses all facets of web design and development, 
				including full-stack web app development, web design, and cloud-based services. 
				We have worked with a wide range of clients, including startups, nonprofits, and student
				organizations. We do pro-bono work for Berkeley campus organizations. For
				external clients, we will work with you to negotiate fair and
				transparent pricing schemes for your specific needs."
        />
        <Text textStyle="subtitle1" mt={12} mb={8}>
          Current Projects
        </Text>
        <SimpleGrid columns={columnNumbers} spacing={8}>
          {currentProjects.map((project) => (
            <Project project={project} />
          ))}
        </SimpleGrid>
        <Text textStyle="subtitle1" mt={[12, null, 20]} mb={8}>
          Industry Clients
        </Text>
        <SimpleGrid columns={columnNumbers} spacing={8}>
          {clientProjects
            .filter((project) => project.semester !== 'Fall 2021')
            .map((project) => (
              <Project project={project} />
            ))}
        </SimpleGrid>
        <Text textStyle="subtitle1" mt={[12, null, 20]} mb={8}>
          Non-Profits
        </Text>
        <SimpleGrid columns={columnNumbers} spacing={8}>
          {nonprofitProjects
            .filter((project) => project.semester !== 'Fall 2021')
            .map((project) => (
              <Project project={project} />
            ))}
        </SimpleGrid>
        {/* <h3 className={styles['header']}>Student Projects</h3>
				<Row>
					{studentProjects.map((project) => (
						<Project project={project} />
					))}
				</Row> */}
      </PageWrapper>
    </main>
  );
};

export default Projects;
