// Assets
import auraPic from '../images/projects/Aura/pic_desktop_one.png';
import repackPic from '../images/projects/RePack/pic_desktop_two.png';
import ntsPic from '../images/projects/Scrapper/pic_desktop_one.png';
import novidPic from '../images/projects/Novid/pic_desktop_one.png';
import ctgPic from '../images/projects/CareerToGo/pic_desktop_two.png';
// import todoPic from '../images/projects/'
import algerioPic from '../images/projects/Thumbnails/algo_thumb.png';
import portPic from '../images/projects/Porfolio/pic_desktop_one.png';

export const projectsCard = [
  {
    header_main: 'AuraTattoo',
    desc: 'Website of an amazing tattoo shop based in Reykjavik Iceland',
    link_text: 'Check details',
    link: '/aura',
    img: `${auraPic}`
  },
  {
    header_main: 'RePack',
    desc: 'xxx',
    link_text: 'Check details',
    link: '/repack',
    img: `${repackPic}`
  },

  {
    header_main: 'Novid',
    desc:
      'Two-weeks full stack final project product build with Pepper Team at Salt.',
    link_text: 'Check details',
    link: '/novid',
    img: `${novidPic}`
  },
  {
    header_main: 'CareerToGo',
    desc:
      'A job platform for youth, build with VueJS and NuxtJS. This project is developing as a startup in Denmark',
    link_text: 'Check details',
    link: '/ctg',
    img: `${ctgPic}`
  },
  {
    header_main: 'NTS-Radio Scrapper',
    desc:
      'Hackathon project build around fully automated web scrapper and data aggregation',
    link_text: 'Check details',
    link: '/nts',
    img: `${ntsPic}`
  },
  {
    header_main: 'Algerio',
    desc:
      'interesting way for visual representation of sort algorithms, build with React and deployed on Netlify',
    link_text: 'Check details',
    link: '/algerio',
    img: `${algerioPic}`
  },
  {
    header_main: 'ToDo',
    desc:
      'Out of the box ready Server-side part for Todo app with all functionality. Build with Node, MongoDB, GraphQL.',
    link_text: 'Check details',
    link: '/todo',
    img: `xxx`
  },
  {
    header_main: 'VueJS Portfolio',
    desc:
      'My personal previous portfolio, build in VueJS as a way to practice my skills.',
    link_text: 'Check details',
    link: '/portfolio',
    img: `${portPic}`
  }
];
