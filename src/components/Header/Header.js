import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <div>
    <Container>
      <Div1>
        <Link href="/">
          <a style={{ display:"flex", alignItems: "center", color:"white", marginBottom:"20px" }}>
            <DiCssdeck size="3rem"/> <Span>My Portfolio</Span>
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href="#projects">
            <NavLink>My Projects</NavLink>
          </Link>
          </li>
          <li>
          <Link href="#tech">
            <NavLink>Technologies</NavLink>
          </Link>
          </li>
          <li>
          <Link href="#about">
            <NavLink>About Me</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href="https://github.com/art-weinstein">
          <AiFillGithub size = "3rem"/>
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/art-weinstein/">
          <AiFillLinkedin size = "3rem"/>
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/art.weinstein/">
          <AiFillInstagram size = "3rem"/>
        </SocialIcons>
        <SocialIcons href="https://www.youtube.com/channel/UCz4QzcaKTllbcaDXSwKFeJg">
          <AiFillYoutube size = "3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
  </div>
);

export default Header;
