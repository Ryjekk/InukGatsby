import React, { useContext, useEffect } from 'react';
// Context
import { SkillsContext, WelcomeContext } from '../../context/DataContext';
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
  const skills = useContext(SkillsContext).shift();
  const welcome = useContext(WelcomeContext).shift();
  const { header, paragraph } = skills;
  const { welcomeLeft, welcomeRight } = welcome;

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
          leftContent={welcomeLeft}
          rightContent={welcomeRight}
        />
      </Inner>
      <Inner style={{ margin: '50px auto' }}>
        <Columns
          style={{ mixBlendMode: 'difference' }}
          headingContent={header}
          leftContent={paragraph}
        />
        <Skills theme={theme} skills={skills.skills} />
      </Inner>
      <Inner style={{ margin: '50px auto' }}>
        <Columns
          style={{ mixBlendMode: 'difference' }}
          headingContent="Latest Projects"
          leftContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        />
        <Cards />
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
          headingContent="Previous Work"
          leftContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
        />
        <Cards />
      </Inner>
    </>
  );
};

export default Content;
