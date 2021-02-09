import React from 'react';
import {
  ContactLink,
  FooterContent,
  FooterLogo,
  FooterSocial,
  FooterWrapper,
  SocialLink
} from './styles';
import { Full, Heading, Paragraph } from '../../styles/styles';
import Logo from '../Nav/Logo';

const Footer = () => {
  return (
    <FooterWrapper>
      <Full>
        <Heading>Slide into my DM's!</Heading>
        <Paragraph>
          Feel free to reach out if you're looking for a developer, have a
          question, or just want to say “hi” :)
        </Paragraph>
        <ContactLink href="mailto:ryjewski@gmail.com">Contact me</ContactLink>
        <FooterContent>
          <FooterSocial>
            <Paragraph>
              <SocialLink href="https://github.com/Ryjekk" target="_blank">
                Github
              </SocialLink>
            </Paragraph>
            <Paragraph>
              <SocialLink
                href="https://www.linkedin.com/in/ryjewski/"
                target="_blank"
              >
                LinkedIn
              </SocialLink>
            </Paragraph>
            <Paragraph>
              <SocialLink
                href="https://www.instagram.com/ryjewsky/"
                target="_blank"
              >
                Instagram
              </SocialLink>
            </Paragraph>
          </FooterSocial>
          <FooterLogo>
            <Logo />
          </FooterLogo>
        </FooterContent>
      </Full>
    </FooterWrapper>
  );
};

export default Footer;
