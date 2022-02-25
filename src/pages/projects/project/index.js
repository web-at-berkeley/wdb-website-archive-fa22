import React from 'react';

import Header from '../../../components/header';
import clientProjects from '../data/client';
import nonprofitProjects from '../data/nonprofit';

import { useParams } from 'react-router-dom';

const Project = () => {
  let { id } = useParams();
  let data = clientProjects.filter((project) => project.label === id)[0];
  if (!data) {
    data = nonprofitProjects.filter((project) => project.label === id)[0];
  }

  const { name, subtitle, link, technologies, lead, semester } = data;

  return (
    <main>
      <Header title={name} subtitle={subtitle} />
      <div></div>
    </main>
  );
};

export default Project;
