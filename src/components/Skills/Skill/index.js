import React from 'react';
// Styles
import { BoxCol, SkillWrapper } from './styles';
import { Paragraph } from '../../../styles/styles';
// Assets
import {
  Html5,
  Bootstrap,
  Css3,
  Figma,
  Firebase,
  Git,
  Github,
  Javascript,
  Jquery,
  Nodejs,
  ReactLogo,
  Redux,
  Sass,
  Vuejs
} from '@styled-icons/boxicons-logos/';

import {
  NextDotJs,
  Adobexd,
  Amazonaws,
  Gatsby,
  Vuetify,
  NuxtDotJs,
  Express,
  Graphql,
  StyledComponents,
  MaterialUi,
  Tailwindcss,
  Mongodb,
  Postgresql,
  Docker,
  Webpack,
  Mocha,
  Jest,
  Netlify,
  Heroku
} from '@styled-icons/simple-icons/';

const Skill = ({ desc, theme }) => {
  const perk = desc.map((el) => {
    switch (el) {
      case 'Html5':
        return (
          <BoxCol key={el}>
            <Html5 style={{ width: '50px' }} />
            <Paragraph>{el}</Paragraph>
          </BoxCol>
        );
      case 'Css3':
        return (
          <BoxCol key={el}>
            <Css3 style={{ width: '50px' }} />
            <Paragraph>{el}</Paragraph>
          </BoxCol>
        );
      case 'Javascript':
        return (
          <BoxCol key={el}>
            <Javascript style={{ width: '50px' }} />
            <Paragraph>{el}</Paragraph>
          </BoxCol>
        );
      case 'ReactLogo':
        return (
          <BoxCol key={el}>
            <ReactLogo style={{ width: '50px' }} />
            <Paragraph>React</Paragraph>
          </BoxCol>
        );
      case 'Redux':
        return (
          <BoxCol key={el}>
            <Redux style={{ width: '50px' }} />
            <Paragraph>{el}</Paragraph>
          </BoxCol>
        );
      case 'NextDotJs':
        return (
          <BoxCol key={el}>
            <NextDotJs style={{ width: '50px' }} />
            <Paragraph>Next</Paragraph>
          </BoxCol>
        );
      case 'Gatsby':
        return (
          <BoxCol key={el}>
            <Gatsby style={{ width: '50px' }} />
            <Paragraph>{el}</Paragraph>
          </BoxCol>
        );
      case 'Vuejs':
        return (
          <BoxCol key={el}>
            <Vuejs style={{ width: '50px' }} />
            <Paragraph>{el}</Paragraph>
          </BoxCol>
        );
      case 'Vuetify':
        return (
          <BoxCol key={el}>
            <Vuetify style={{ width: '50px' }} />
            <Paragraph>{el}</Paragraph>
          </BoxCol>
        );
      case 'NuxtDotJs':
        return (
          <BoxCol key={el}>
            <NuxtDotJs style={{ width: '50px' }} />
            <Paragraph>Nuxt</Paragraph>
          </BoxCol>
        );
      // case 'Jquery':
      //   return (
      //     <BoxCol key={el}>
      //       <Jquery style={{ width: '50px' }} />
      //       <Paragraph>{el}</Paragraph>
      //     </BoxCol>
      //   );
      case 'Nodejs':
        return (
          <BoxCol key={el}>
            <Nodejs style={{ width: '50px' }} />
            <Paragraph>{el}</Paragraph>
          </BoxCol>
        );
      case 'Express':
        return (
          <BoxCol key={el}>
            <Express style={{ width: '50px' }} />
            <Paragraph>{el}</Paragraph>
          </BoxCol>
        );
      case 'Graphql':
        return (
          <BoxCol key={el}>
            <Graphql style={{ width: '50px' }} />
            <Paragraph>{el}</Paragraph>
          </BoxCol>
        );
      case 'Sass':
        return (
          <BoxCol key={el}>
            <Sass style={{ width: '50px' }} />
            <Paragraph>{el}</Paragraph>
          </BoxCol>
        );
      case 'StyledComponents':
        return (
          <BoxCol key={el}>
            <StyledComponents style={{ width: '50px' }} />
            <Paragraph>StyledComp.</Paragraph>
          </BoxCol>
        );
      case 'MaterialUi':
        return (
          <BoxCol key={el}>
            <MaterialUi style={{ width: '50px' }} />
            <Paragraph>{el}</Paragraph>
          </BoxCol>
        );
      case 'Tailwindcss':
        return (
          <BoxCol key={el}>
            <Tailwindcss style={{ width: '50px' }} />
            <Paragraph>TailwindCSS</Paragraph>
          </BoxCol>
        );
      case 'Bootstrap':
        return (
          <BoxCol key={el}>
            <Bootstrap style={{ width: '50px' }} />
            <Paragraph>{el}</Paragraph>
          </BoxCol>
        );
      case 'Mongodb':
        return (
          <BoxCol key={el}>
            <Mongodb style={{ width: '50px' }} />
            <Paragraph>{el}</Paragraph>
          </BoxCol>
        );
      case 'Postgresql':
        return (
          <BoxCol key={el}>
            <Postgresql style={{ width: '50px' }} />
            <Paragraph>{el}</Paragraph>
          </BoxCol>
        );
      case 'FaunaDB':
        return (
          <BoxCol key={el}>
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 64 64"
              style={{
                width: '50px',
                fill: theme === 'light' ? '#000' : '#eee'
              }}
            >
              <path
                className="st0"
                d="M50.4,17.1l-6.9,1.4l-5.4,7.1L6.1,0l5.2,23.6l20.3,10l-18.5-5l8.9,15L32.4,41l-10,6.1L11.9,64l38.5-21.3V27.2
	l7.5-11.6L50.4,17.1z"
              />
            </svg>
            <Paragraph>{el}</Paragraph>
          </BoxCol>
        );
      case 'Git':
        return (
          <BoxCol key={el}>
            <Git style={{ width: '50px' }} />
            <Paragraph>{el}</Paragraph>
          </BoxCol>
        );
      case 'Github':
        return (
          <BoxCol key={el}>
            <Github style={{ width: '50px' }} />
            <Paragraph>{el}</Paragraph>
          </BoxCol>
        );
      case 'Mocha':
        return (
          <BoxCol key={el}>
            <Mocha style={{ width: '50px' }} />
            <Paragraph>{el}</Paragraph>
          </BoxCol>
        );
      case 'Jest':
        return (
          <BoxCol key={el}>
            <Jest style={{ width: '50px' }} />
            <Paragraph>{el}</Paragraph>
          </BoxCol>
        );
      case 'Docker':
        return (
          <BoxCol key={el}>
            <Docker style={{ width: '50px' }} />
            <Paragraph>{el}</Paragraph>
          </BoxCol>
        );
      case 'Webpack':
        return (
          <BoxCol key={el}>
            <Webpack style={{ width: '50px' }} />
            <Paragraph>{el}</Paragraph>
          </BoxCol>
        );
      case 'Firebase':
        return (
          <BoxCol key={el}>
            <Firebase style={{ width: '50px' }} />
            <Paragraph>{el}</Paragraph>
          </BoxCol>
        );
      case 'Amazonaws':
        return (
          <BoxCol key={el}>
            <Amazonaws style={{ width: '50px' }} />
            <Paragraph>AWS</Paragraph>
          </BoxCol>
        );
      case 'Netlify':
        return (
          <BoxCol key={el}>
            <Netlify style={{ width: '50px' }} />
            <Paragraph>{el}</Paragraph>
          </BoxCol>
        );
      case 'Heroku':
        return (
          <BoxCol key={el}>
            <Heroku style={{ width: '50px' }} />
            <Paragraph>{el}</Paragraph>
          </BoxCol>
        );
      case 'Figma':
        return (
          <BoxCol key={el}>
            <Figma style={{ width: '50px' }} />
            <Paragraph>{el}</Paragraph>
          </BoxCol>
        );
      case 'Adobexd':
        return (
          <BoxCol key={el}>
            <Adobexd style={{ width: '50px' }} />
            <Paragraph>AdobeXD</Paragraph>
          </BoxCol>
        );
      default:
        return null;
    }
  });

  return (
    <SkillWrapper style={{ maxWidth: '550px', paddingRight: '50px' }}>
      {perk}
    </SkillWrapper>
  );
};

export default Skill;
