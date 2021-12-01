import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      {/* <img src={profile.jpg}/> */}
      <SectionTitle main center>
        Hello <br/>
        Welcome to my portfolio!
      </SectionTitle>
      <SectionText>
        The purpose of this project is to learn and develop my skills in React. I am working on sprucing up my portfolio 
        and furthing my progress in software development. 
      </SectionText>
      <Button onClick={() => window.location="https://github.com/art-weinstein"}>Check out my GitHub!</Button>
    </LeftSection>
  </Section>
);

export default Hero;