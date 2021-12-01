import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>My Projects</SectionTitle>
    <GridContainer>
      {[{
        title: 'Project 1',
        description: 'description here'
      }].map((project) => (
        <div>
          {project.title} <br />
          {project.description}
        </div>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;