import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:artur.weinstein@gmail.com">artur.weinstein@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Furthering my development through constant learning.</Slogan>
        </CompanyContainer>
        <SocialContainer>
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
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
