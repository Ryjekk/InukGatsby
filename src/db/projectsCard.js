// Assets
import auraPic from '../images/projects/Aura/pic_desktop_one.png';
import repackPic from '../images/projects/RePack/pic_desktop_one.png';
import ntsPic from '../images/projects/Scrapper/pic_desktop_one.png';
import novidPic from '../images/projects/Novid/pic_desktop_one.png';
import ctgPic from '../images/projects/CareerToGo/pic_desktop_one.png';
import algerioPic from '../images/projects/Algerio/pic_desktop_one.png';
import portPic from '../images/projects/Porfolio/pic_desktop_one.png';
import todoPic from '../images/projects/Todo/pic_desktop_one.png';

export const projectsCard = [
  {
    header_main: 'AuraTattoo',
    desc:
      'Commercial project for amazing Tattoo Shop based in center of Icelandic Capital - Reykjavik.',
    link_text: 'Check Project',
    link: '/projectAura',
    img: `${auraPic}`
  },
  {
    header_main: 'RePack',
    desc:
      'Commercial project for Norwegian company focused on reusable source of energy.',
    link_text: 'Check Project',
    link: '/projectRepack',
    img: `${repackPic}`
  },

  {
    header_main: 'Novid',
    desc:
      'Two-weeks full stack project build at Salt. The purpose of app is tracing movement of employees in company.',
    link_text: 'Check Project',
    link: '/projectNovid',
    img: `${novidPic}`
  },
  {
    header_main: 'CareerToGo',
    desc:
      'Commercial project for Danish startup. Job platform for youth, build with VueJS and NuxtJS.',
    link_text: 'Check Project',
    link: '/projectCTG',
    img: `${ctgPic}`
  },
  {
    header_main: 'NTS-Radio Scrapper',
    desc:
      'Hackathon project build around fully automated web scrapper and data aggregation.',
    link_text: 'Check Project',
    link: '/projectNTS',
    img: `${ntsPic}`
  },
  {
    header_main: 'VueJS Portfolio',
    desc:
      'My personal previous portfolio, build in VueJS as a way to practice my skills.',
    link_text: 'Check Project',
    link: '/projectPortfolio',
    img: `${portPic}`
  },
  {
    header_main: 'ToDo',
    desc:
      'Out of the box ready Server-side part for Todo app with all functionality. Build with Node, MongoDB, GraphQL.',
    link_text: 'Check Project',
    link: '/projectToDo',
    img: `${todoPic}`
  },
  {
    header_main: 'Algerio',
    desc:
      'Interesting way for visual representation of sort algorithms, build with React and deployed on Netlify',
    link_text: 'Check Project',
    link: '/projectAlgerio',
    img: `${algerioPic}`
  }
];
