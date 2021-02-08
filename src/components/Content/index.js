import React, { useContext } from 'react';
// Context
import { GlobalStateContext } from '../../context/DataContext';
// Styles
import {
  Full,
  Heading,
  Image,
  Inner,
  Mid,
  BorderSpan
} from '../../styles/styles';
// Assets
import bgMain from '../../images/me.jpg';
// Components
import Columns from '../Columns';
import Skills from '../Skills';
import Cards from '../Cards';
import CardLarge from '../Cards/CardLarge';

const Content = () => {
  const { skills, welcome, largeCard } = useContext(GlobalStateContext);
  const {
    header: headerSkill,
    paragraph: paragraphSkill,
    skills: skill
  } = skills[0];
  const { main, projects, work } = welcome[0];
  const projectLarge = largeCard[0];
  const workLarge = largeCard[1];

  const themeColors = {
    margin: '50px auto 0 auto',
    mixBlendMode: 'difference',
    color: 'white'
  };

  return (
    <>
      <Mid style={{ mixBlendMode: 'difference', marginBottom: '150px' }}>
        <Heading
          style={{
            mixBlendMode: 'difference',
            color: 'white'
          }}
        >
          Hello, I'm <BorderSpan>Inuk</BorderSpan>. <br />
          Software Developer, who will create your next dream product!
        </Heading>
      </Mid>
      <Full>
        <Image style={{ backgroundImage: `url(${bgMain})` }} />
      </Full>
      <Inner style={{ margin: '50px auto' }}>
        <Columns
          leftContent={main.welcomeLeft}
          rightContent={main.welcomeRight}
        />
      </Inner>
      <Inner style={themeColors}>
        <Columns headingContent={headerSkill} leftContent={paragraphSkill} />
        <Skills skills={skill} />
      </Inner>
      <Inner style={themeColors}>
        <Columns
          headingContent={projects.header}
          leftContent={projects.paragraph}
        />
      </Inner>
      <Inner>
        <Cards type="project" />
        <CardLarge
          title={projectLarge.header_main}
          desc={projectLarge.desc}
          link={projectLarge.link}
          linkText={projectLarge.link_text}
          image={projectLarge.img}
        />
      </Inner>
      <Inner style={themeColors}>
        <Columns headingContent={work.header} leftContent={work.paragraph} />
      </Inner>
      <Inner>
        <Cards type="work" />
        <CardLarge
          title={workLarge.header_main}
          desc={workLarge.desc}
          link={workLarge.link}
          linkText={workLarge.link_text}
          image={workLarge.img}
        />
      </Inner>
    </>
  );
};

export default Content;
