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
      'Tattoo Shop web page, which can help to find and book the best tattoo artist from Reykjavik.',
    link_text: 'Check Project',
    link: '/projectAura',
    img: `${auraPic}`
  },
  {
    header_main: 'RePack',
    desc:
      'MVP built for Norwegian company focused on the reusable source of energy.',
    link_text: 'Check Project',
    link: '/projectRepack',
    img: `${repackPic}`
  },

  {
    header_main: 'Novid',
    desc:
      'Two-week full-stack project build at Salt. The purpose of the app is to track the movement of employees in the company.',
    link_text: 'Check Project',
    link: '/projectNovid',
    img: `${novidPic}`
  },
  {
    header_main: 'CareerToGo',
    desc:
      'MVP project built for Danish startup. Job platform for youth with job events, build with VueJS and NuxtJS.',
    link_text: 'Check Project',
    link: '/projectCTG',
    img: `${ctgPic}`
  },
  {
    header_main: 'NTS-Radio Scrapper',
    desc:
      'Hackathon project built around fully automated web scraper and data aggregation.',
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
      'Interesting way for the visual representation of sort algorithms, build with React and deployed on Netlify',
    link_text: 'Check Project',
    link: '/projectAlgerio',
    img: `${algerioPic}`
  }
];
