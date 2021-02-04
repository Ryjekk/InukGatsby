import React, { useContext } from 'react';
// Context
import { GlobalStateContext } from '../../context/DataContext';
// Styles
import { Full, Heading, Image, Inner, Mid } from '../../styles/styles';
// Assets
import bg1 from '../../images/projects/Aura/pic_desktop_one.png';
// Components
import Columns from '../Columns';
import Skills from '../Skills';
import Cards from '../Cards';
import CardLarge from '../Cards/CardLarge';

const Content = ({ theme }) => {
  const { skills, welcome } = useContext(GlobalStateContext);
  const {
    header: headerSkill,
    paragraph: paragraphSkill,
    skills: skill
  } = skills[0];
  const { main, projects, work } = welcome[0];

  return (
    <>
      <Mid style={{ mixBlendMode: 'difference', marginBottom: '150px' }}>
        <Heading
          style={{
            mixBlendMode: 'difference',
            color: 'white'
          }}
        >
          Hello, I'm <span style={{ color: '#DE8D14' }}>Inuk</span>. <br />
          Software Developer, who will create your next dream product!
        </Heading>
      </Mid>
      <Full>
        <Image style={{ backgroundImage: `url(${bg1})` }} />
      </Full>
      <Inner style={{ margin: '50px auto' }}>
        <Columns
          style={{ mixBlendMode: 'difference' }}
          leftContent={main.welcomeLeft}
          rightContent={main.welcomeRight}
        />
      </Inner>
      <Inner style={{ margin: '50px auto' }}>
        <Columns
          style={{ mixBlendMode: 'difference' }}
          headingContent={headerSkill}
          leftContent={paragraphSkill}
        />
        <Skills theme={theme} skills={skill} />
      </Inner>
      <Inner style={{ margin: '50px auto' }}>
        <Columns
          style={{ mixBlendMode: 'difference' }}
          headingContent={projects.header}
          leftContent={projects.paragraph}
        />
        <Cards type="project" />
      </Inner>
      <Inner>
        <CardLarge
          title="AuraTattoo"
          desc="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem"
        />
      </Inner>
      <Inner style={{ margin: '50px auto' }}>
        <Columns
          style={{ mixBlendMode: 'difference' }}
          headingContent={work.header}
          leftContent={work.paragraph}
        />
        <Cards type="work" />
      </Inner>
    </>
  );
};

export default Content;
