import React from 'react';
// Styles
import { Full, Heading, Image, Inner, Mid } from '../../styles/styles';
// Assets
import bg1 from '../../images/projects/Aura/pic_desktop_one.png';
// Components
import Columns from '../Columns';

const Content = ({ theme }) => {
  return (
    <>
      <Mid style={{ mixBlendMode: 'difference', marginBottom: '100px' }}>
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
          leftContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap"
          rightContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the lea"
        />
      </Inner>
      <Inner style={{ margin: '100px auto' }}>
        <Columns
          style={{ mixBlendMode: 'difference' }}
          headingContent="My Skills"
          leftContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        />
      </Inner>
    </>
  );
};

export default Content;
