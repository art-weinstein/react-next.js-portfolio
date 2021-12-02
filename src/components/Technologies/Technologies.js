import React from 'react';
import { DiFirebase, DiFsharp, DiHtml53DEffects, DiJava, DiJavascript, DiJavascript1, DiMysql, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        During my time at Epicodus, I've worked on a number of techonlogies. I gained familiarity with Git, learned 
        about databases and SQL, as well as gained fundamentals in JavaScript, C#, React, HMTL and CSS. To fast-track my learning,
        I was educated in full-stack development, and learned how to work with both front-end and back-end code.
        Prior to working software, I made a hobby of working with hardware, and putting together components to make functional PCs. 
      </SectionText>
      <List>
        <ListItem>
          <DiHtml53DEffects size="3rem"/>
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Experience with <br/>
              JavaScript and HTML
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiReact size="3rem"/>
          <ListContainer>
            <ListTitle>Full-Stack</ListTitle>
            <ListParagraph>
              Experience with <br/>
              React and JavaScript
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiMysql size="3rem"/>
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Experience with <br/>
              Node, Databases, C#, CSS and MySQL
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
  </Section>
);

export default Technologies;
