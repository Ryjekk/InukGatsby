import React from 'react';
import { BoxCol } from '../components/Skills/Skill/styles';
import { Paragraph } from '../styles/styles';
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
  Nodejs,
  ReactLogo,
  Redux,
  Sass,
  Vuejs
} from '@styled-icons/boxicons-logos/';

import {
  Typescript,
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
  Heroku,
  Mysql
} from '@styled-icons/simple-icons/';

export const perkCreator = (desc) =>
  desc.map((el) => {
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
      case 'Typescript':
        return (
          <BoxCol key={el}>
            <Typescript style={{ width: '50px', padding: '6px' }} />
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
      case 'Mysql':
        return (
          <BoxCol key={el}>
            <Mysql style={{ width: '50px' }} />
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
                fill: '#eee'
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
      case 'Puppeteer':
        return (
          <BoxCol key={el}>
            <svg viewBox="0 0 256 383" height="50px">
              <path
                d="M253.422 214.246H2.192v-14.168c0-9.52 7.717-17.237 17.236-17.237h216.757c9.52 0 17.237 7.717 17.237 17.237v14.168z"
                fill="#DFDEDF"
              />
              <path
                d="M235.92 378.553H19.692c-9.666 0-17.502-7.836-17.502-17.502V214.246h251.23V361.05c0 9.666-7.835 17.502-17.502 17.502"
                fill="#FFF"
              />
              <path
                d="M250.302 211.398v-12.706c0-7.501-6.08-13.582-13.581-13.582H19.279c-7.501 0-13.581 6.08-13.581 13.582v12.706h244.604zm0 151.469V217.096H5.698v145.77c0 7.502 6.08 13.582 13.581 13.582h217.442c7.501 0 13.581-6.08 13.581-13.581zM20.554 179.413l.846-9.236l-3.592 9.31c.487-.037.974-.074 1.471-.074h1.275zm213.401-15.57l1.254 15.57h1.512c.809 0 1.601.066 2.384.163l-5.15-15.733zm17.247 22.164c2.977 3.394 4.798 7.826 4.798 12.685v164.175c0 10.63-8.649 19.279-19.279 19.279H19.279C8.649 382.146 0 373.498 0 362.866V198.693c0-5.152 2.043-9.827 5.347-13.29l19.22-49.817l8.381-91.554l9.456.865l-7.552 82.492l2.66 1.026l-3.61 9.358l-3.812 41.64h195.593L214.829 44.669l9.464-.763l6.402 79.469l.004-.001l20.503 62.634zm-230.046 8.39a4.302 4.302 0 1 1 0 8.603a4.302 4.302 0 0 1 0-8.603zm14.709 0a4.302 4.302 0 1 1 0 8.603a4.302 4.302 0 0 1 0-8.603zm14.244 0a4.302 4.302 0 1 1 0 8.603a4.302 4.302 0 0 1 0-8.603z"
                fill="#000"
              />
              <path
                d="M36.022 287.748c.739-.855 1.128-1.979 1.128-3.374c0-1.396-.39-2.475-1.128-3.33c-.778-.855-1.868-1.26-3.268-1.26h-6.847v9.223h6.847c1.4 0 2.49-.405 3.268-1.259zm-3.268-13.497c2.956 0 5.29.9 7.04 2.744c1.752 1.844 2.608 4.318 2.608 7.38c0 3.102-.856 5.532-2.567 7.376c-1.751 1.846-4.085 2.79-7.081 2.79h-6.847v12.414h-5.291v-32.704h12.138zm28.544 20.057v-9.54h5.698v21.54h-5.698v-1.942c-1.727 1.726-3.97 2.589-6.777 2.589c-2.59 0-4.662-.863-6.259-2.546c-1.597-1.683-2.374-3.842-2.374-6.518v-13.123h5.698v11.914c0 1.51.388 2.763 1.208 3.67c.777.906 1.813 1.38 3.151 1.38c3.583 0 5.353-2.46 5.353-7.424zm27.926 5.914c1.122-1.166 1.683-2.72 1.683-4.662c0-1.942-.56-3.54-1.683-4.705c-1.166-1.166-2.59-1.77-4.36-1.77c-1.597 0-3.02.604-4.273 1.813c-1.252 1.209-1.856 2.762-1.856 4.662c0 1.899.604 3.454 1.856 4.618c1.252 1.21 2.676 1.814 4.273 1.814c1.77 0 3.194-.604 4.36-1.77zm-3.367-16.101c2.806 0 5.31 1.08 7.425 3.238c2.115 2.2 3.15 4.92 3.15 8.2c0 3.28-1.035 6-3.15 8.159c-2.116 2.159-4.576 3.237-7.425 3.237c-2.806 0-5.18-.777-7.122-2.33v11.959h-5.698v-31.816h5.698v1.727c1.9-1.597 4.273-2.374 7.122-2.374zm31.078 16.1c1.122-1.165 1.683-2.72 1.683-4.661c0-1.942-.561-3.54-1.683-4.705c-1.166-1.166-2.59-1.77-4.36-1.77c-1.597 0-3.021.604-4.273 1.813c-1.252 1.209-1.857 2.762-1.857 4.662c0 1.899.605 3.454 1.857 4.618c1.252 1.21 2.676 1.814 4.273 1.814c1.77 0 3.194-.604 4.36-1.77zm-3.368-16.1c2.806 0 5.31 1.08 7.426 3.238c2.114 2.2 3.15 4.92 3.15 8.2c0 3.28-1.036 6-3.15 8.159c-2.116 2.159-4.576 3.237-7.426 3.237c-2.805 0-5.18-.777-7.122-2.33v11.959h-5.697v-31.816h5.697v1.727c1.9-1.597 4.274-2.374 7.122-2.374zm18.991 8.935h10.403c-.345-1.338-.993-2.33-1.899-2.98c-.907-.646-1.985-.991-3.195-.991a5.684 5.684 0 0 0-3.28 1.036c-1.036.69-1.727 1.683-2.029 2.935zm5.31-8.935c2.935 0 5.482 1.036 7.597 3.065c2.115 2.072 3.194 4.704 3.324 7.942v1.943h-16.403c.302 1.51.95 2.718 1.943 3.626c.992.906 2.114 1.38 3.452 1.38c2.461 0 4.231-.95 5.353-2.848l5.094 1.079c-.907 2.202-2.288 3.843-4.1 4.965c-1.814 1.122-3.929 1.682-6.347 1.682c-3.108 0-5.74-1.078-7.856-3.193c-2.115-2.115-3.195-4.878-3.195-8.202c0-3.323 1.08-6.086 3.238-8.245c2.115-2.114 4.75-3.194 7.9-3.194zm26.632 17.526c1.079 0 2.288-.346 3.583-1.036l1.64 4.748c-1.986 1.079-3.842 1.597-5.612 1.597c-2.633 0-4.705-.734-6.216-2.16c-1.51-1.422-2.244-3.538-2.244-6.43v-8.936h-4.62v-4.662h4.62v-6.517h5.698v6.517h7.036v4.662h-7.036v8.504c0 2.46 1.036 3.713 3.15 3.713zm11.954-8.591h10.403c-.345-1.338-.993-2.33-1.899-2.98c-.907-.646-1.985-.991-3.195-.991a5.684 5.684 0 0 0-3.28 1.036c-1.036.69-1.727 1.683-2.029 2.935zm5.31-8.935c2.935 0 5.482 1.036 7.597 3.065c2.115 2.072 3.194 4.704 3.324 7.942v1.943h-16.403c.302 1.51.95 2.718 1.943 3.626c.992.906 2.114 1.38 3.452 1.38c2.461 0 4.231-.95 5.353-2.848l5.093 1.079c-.906 2.202-2.287 3.843-4.1 4.965c-1.813 1.122-3.928 1.682-6.346 1.682c-3.108 0-5.74-1.078-7.856-3.193c-2.115-2.115-3.195-4.878-3.195-8.202c0-3.323 1.08-6.086 3.238-8.245c2.115-2.114 4.75-3.194 7.9-3.194zm20.285 8.935h10.403c-.345-1.338-.993-2.33-1.898-2.98c-.907-.646-1.986-.991-3.196-.991a5.684 5.684 0 0 0-3.28 1.036c-1.036.69-1.727 1.683-2.029 2.935zm5.31-8.935c2.935 0 5.482 1.036 7.597 3.065c2.115 2.072 3.195 4.704 3.325 7.942v1.943h-16.404c.302 1.51.95 2.718 1.944 3.626c.992.906 2.114 1.38 3.452 1.38c2.46 0 4.23-.95 5.352-2.848l5.095 1.079c-.907 2.202-2.288 3.843-4.101 4.965c-1.814 1.122-3.929 1.682-6.346 1.682c-3.108 0-5.742-1.078-7.856-3.193c-2.115-2.115-3.196-4.878-3.196-8.202c0-3.323 1.08-6.086 3.238-8.245c2.115-2.114 4.75-3.194 7.9-3.194zm28.66.345c.649 0 1.167.043 1.513.172l-.303 5.483h-1.251c-5.137 0-7.685 3.065-7.685 9.238v6.949h-5.697v-21.54h5.697v3.928c1.943-2.806 4.533-4.23 7.727-4.23z"
                fill="#000"
              />
              <path
                fill="#fff"
                d="M211.095 132.638l30.741-14.84v-14.84l-71.023-33.923l71.023-36.57v-14.31l-29.68-13.782l-84.097 41.871l-85.51-41.87l-27.56 14.84v12.72L81.77 68.505l-66.782 33.922v15.37l28.621 14.841l84.803-43.462z"
              />
              <path
                d="M214.95 126.585v-6.392l23.14-11.991v7.18l-23.14 11.203zm-198.1-18.551l22.36 12.836v5.11l-22.36-11.312v-6.634zM131.383 81.04l76.92 38.005v7.642l-76.92-39.405V81.04zm-85.526 39.117l78.88-39.11v6.233l-78.88 39.908v-7.031zm55.852-63.905L21.887 17.714L42.561 7.207L128.06 51.53l84.067-44.304l21.404 10.963l-77.84 39.174c-3.113 1.566-3.108 6.01.007 7.57l77.038 38.557l-19.968 10.347l-84.708-43.403l-86.206 44.289l-19.689-11.303l79.59-39.562c3.152-1.567 3.126-6.075-.045-7.606zM17.844 30.77v-7.014L92.29 60.899l-7.526 3.007l-66.92-33.135zm152.654 33.548c-.102-.062-7.13-3.378-7.13-3.378l74.721-37.605v7.045L170.5 64.319zm7.48 3.683l65.674-32.976a1.969 1.969 0 0 0 1.085-1.76V17.665a1.97 1.97 0 0 0-1.07-1.752L213.032.222a1.97 1.97 0 0 0-1.788-.003l-82.303 41.764a1.965 1.965 0 0 1-1.769.006L43.42.207a1.97 1.97 0 0 0-1.77.007L11.28 15.648a1.969 1.969 0 0 0-1.078 1.755v15.855c0 .749.425 1.433 1.097 1.765L77.25 67.607l-65.646 32.595a1.968 1.968 0 0 0-1.092 1.727l-.287 15.59a1.969 1.969 0 0 0 1.08 1.793l31.536 15.956a1.97 1.97 0 0 0 1.772.002l82.558-41.455a1.968 1.968 0 0 1 1.775.004l81.53 41.454a1.97 1.97 0 0 0 1.748.017l31.402-15.203a1.969 1.969 0 0 0 1.111-1.771v-16.29c0-.751-.427-1.436-1.1-1.767l-65.66-32.257z"
                fill="#000"
              />
            </svg>
            <Paragraph>{el}</Paragraph>
          </BoxCol>
        );
      default:
        return null;
    }
  });
