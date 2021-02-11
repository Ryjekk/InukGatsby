// img_project_one
import p1Algerio from '../images/projects/Algerio/project_one.png';
import p1Aura from '../images/projects/Aura/project_one.png';
import p1Ctg from '../images/projects/CareerToGo/project_one.png';
import p1Novid from '../images/projects/Novid/project_one.png';
import p1Portfolio from '../images/projects/Porfolio/project_one.png';
import p1Repack from '../images/projects/RePack/project_one.png';
import p1Nts from '../images/projects/Scrapper/project_one.png';
import p1Todo from '../images/projects/Todo/project_one.png';
// img_project_overall
import o1Aura from '../images/projects/Aura/project_three.png';
import o1Nts from '../images/projects/Scrapper/project_three.png';
import o1Novid from '../images/projects/Novid/project_three.png';
import o1Ctg from '../images/projects/CareerToGo/project_three.png';
import o1Algerio from '../images/projects/Algerio/project_three.png';
import o1Portfolio from '../images/projects/Porfolio/project_three.png';
import o1Repack from '../images/projects/RePack/project_three.png';
import o1Todo from '../images/projects/Todo/project_three.png';
// img_project_two
import p2Aura from '../images/projects/Aura/project_two.png';
import p2Nts from '../images/projects/Scrapper/project_two.png';
import p2Novid from '../images/projects/Novid/project_two.png';
import p2Ctg from '../images/projects/CareerToGo/project_two.png';
import p2Algerio from '../images/projects/Algerio/project_two.jpg';
import p2Portfolio from '../images/projects/Porfolio/project_two.png';
import p2Repack from '../images/projects/RePack/project_two.png';
import p2Todo from '../images/projects/Todo/project_two.png';

export const projectsPage = [
  {
    name: '/projectAura',
    header_main: 'AuraTattoo',
    paragraph:
      'AuraTattoo is a React Application, built for a tattoo studio based in Reykjavik Iceland. I built this project from scratch using React. This webpage should allows potential clients to view tattoo shop artist, their work like also allow them to make a quick booking for an appointment',
    table: {
      type: 'Commercial',
      stack: ['React', 'Styled-components', 'Netlify'],
      code: {
        text: 'Repository',
        link: 'https://github.com/Ryjekk/Ethereal'
      },
      live: {
        text: 'Live view',
        link: 'https://www.aurareykjavik.com/'
      }
    },
    img_project_one: `${p1Aura}`,
    header_goal: 'Project Goal and Purpose',
    paragraph_goal_one:
      'This project had three main goals: Allows user to check artist and their work, display all artist coming for the guest spot, and also allow user to make simple booking application.',
    paragraph_goal_two:
      'I think all of this goals was achieved on final stage of product. Since this project is still under active development The product owner is thinking about expanding website adding for example a shop functionality.',
    header_explanation: 'Web Stack and Reasoning',
    paragraph_explanation_one:
      "For this project I used React, but many different Javascript libraries could've been used, and even vanilla Javascript could have been easily implemented. I chose to use React because of its ease of use and the ability to smoothly manipulate states without having to re-render the pages.",
    paragraph_explanation_two:
      'In this project I also found out way to use EmailJS to provide smooth direct message system between Client and Aura Tattoo studio.',
    stack_badges: ['ReactLogo', 'StyledComponents', 'Netlify'],
    img_project_overall: `${o1Aura}`,
    header_problems: 'Thought Process and Encountered Problems',
    paragraph_problems:
      'This project was created after learning about React, therefore during the process of coding I encountered lots of small challenges. I tried to build and structure code as clean as I could.',
    img_project_two: `${p2Aura}`,
    header_lesson: 'Future Improvements',
    paragraph_lesson:
      'Since this project was mainly build using class components as a future improvements I can see migrating to React Hooks. Also This project is still under heavy development - therefore we can expect new features like Shop in the close feature'
  },
  {
    name: '/projectNTS',
    header_main: 'NTS-Radio Scrapper',
    paragraph:
      'NTS-Radio Scrapper was a project which I put together for purpose og Hackathon at Salt. I was always amazed with concept of data crawling and web scrapping therefore I decided to build own automated web scrapper.',
    table: {
      type: 'Hackathon',
      stack: [
        'NodeJS',
        'Express',
        'React',
        'Styled-components',
        'Puppeteer',
        'Netlify',
        'Heroku'
      ],
      code: {
        text: 'Repository',
        link: 'https://github.com/Ryjekk/WebScrapper_Client'
      },
      live: {
        text: 'Live view',
        link: 'https://nts-scrapper.netlify.app/'
      }
    },
    img_project_one: `${p1Nts}`,
    header_goal: 'Project Goal and Purpose',
    paragraph_goal_one:
      'The main goal of this challenge was to build functional product within one day. Beside obvious timeframe secondary goal was to practice usage og NodeJS with Express and React. As a extra tool I decided to use Puppeteer.',
    paragraph_goal_two: 'This project was made only for learning purposes.',
    header_explanation: 'Web Stack and Reasoning',
    paragraph_explanation_one:
      'For this project I decided to use NodeJS with Express as a base for my API. That choice was obvious for me because of flexibility and powerfulness of Node. I decided to automate process of Scrapping data hourly, and save all data in JSON file. As a scrapping tool I used Puppeteer since its a most common tool to use with Node.',
    paragraph_explanation_two:
      "For Client side I decided to use React, since it's powerful, flexible and well documented library. My project is deployed to Netlify and Heroku",
    stack_badges: [
      'Nodejs',
      'Express',
      'ReactLogo',
      'StyledComponents',
      'Netlify',
      'Heroku',
      'Puppeteer'
    ],
    img_project_overall: `${o1Nts}`,
    header_problems: 'Thought Process and Encountered Problems',
    paragraph_problems:
      'Biggest problem which I encountered during this project was to build proper scrapper - Since Puppeteer have not clear documentation in this field. But by the end of the day I menage to build it with expected result.',
    img_project_two: `${p2Nts}`,
    header_lesson: 'Lesson Learned',
    paragraph_lesson:
      'As a main Lesson taken from this challenge I can point a process of building scrapper itself, and at the same time it was really rewarding to see how big impact your program have. In the future development I could see stepping away from storing data locally in JSON format and move it to some more organized db like MongoDB, or FaunaDB'
  },
  {
    name: '/projectNovid',
    header_main: 'Novid',
    paragraph:
      'Novid is a project I build alongside with Einar and Torbjorn as a final project at Salt. Novid allows you to easy track movement of your employees during their work time like also will alert people which were exposed fot potential COVID-19 risk',
    table: {
      type: 'Team Project',
      stack: [
        'NodeJS',
        'Express',
        'MongoDB',
        'Mongoose',
        'React',
        'Netlify',
        'Heroku'
      ],
      code: {
        text: 'Repository',
        link: 'https://github.com/Ryjekk/CovidTracker_Client'
      },
      live: {
        text: 'Live view',
        link: 'https://novid-client.herokuapp.com'
      }
    },
    img_project_one: `${p1Novid}`,
    header_goal: 'Project Goal and Purpose',
    paragraph_goal_one:
      'Main goal was to create COVID-19 relate app, which could be used for further developing and potential leading as a startup. After making research we decided that this field needs to be improved because some companies still use Exel sheet to track people in company',
    paragraph_goal_two:
      'Since we had a timeframe of around 10 days we decided to be more focused on functionality and logic which at this time we delivered on a promising level.',
    header_explanation: 'Web Stack and Reasoning',
    paragraph_explanation_one:
      'React was the clear choice for this project, because of its ease of state management and the amount of packages which are available for React itself. We also utilized Netlify as a server to host Novid, because it allows live updates alongside github.',
    paragraph_explanation_two:
      'NodeJS, and MongoDB was an excellent choice since our app should have a Startup potential. This choice allows us to easily scale app depending of our needs',
    stack_badges: [
      'Nodejs',
      'Express',
      'Mongodb',
      'ReactLogo',
      'Netlify',
      'Heroku'
    ],
    img_project_overall: `${o1Novid}`,
    header_problems: 'Thought Process and Encountered Problems',
    paragraph_problems:
      'The biggest challenge encountered during this task was to sync remote work during COVID-19 isolation. Beside this obvious reason, main problem which we overcome was to provide good level of security of personal data.',
    img_project_two: `${p2Novid}`,
    header_lesson: 'Lesson Learned and Future Improvements',
    paragraph_lesson:
      'This project helped to solidify a lot of my React knowledge, such as using hooks or updating the states. I also got a lot of great practice using ES6+ syntax across the entirety of the project. This was a large code base to manage across a team, and we all got some greater experience with version control and reviewing each others code.'
  },
  {
    name: '/projectCTG',
    header_main: 'CareerToGo',
    paragraph:
      'CareerToGo is a NuxtJS/VueJS application which allows young people to find a job, search for job events and look through interesting companies. I took a part in this product as a Intern and later Front-end Developer',
    table: {
      type: 'Commercial',
      stack: ['VueJS', 'NuxtJS', 'TailwindCSS', 'MySQL', 'AWS'],
      code: {
        text: 'Ask for access',
        link: 'mailto:ryjewski@gmail.com'
      },
      live: {
        text: 'FB profile',
        link: 'https://www.facebook.com/CareerToGo/'
      }
    },
    img_project_one: `${p1Ctg}`,
    header_goal: 'Project Goal and Purpose',
    paragraph_goal_one:
      'Finding a job should be simple and engaging. That is why we developed CareerToGo, where students and graduates meet their future employers in informal coffee meetings.',
    paragraph_goal_two:
      'This project is still under active development process.',
    header_explanation: 'Web Stack and Reasoning',
    paragraph_explanation_one:
      "In this project we decided to use NuxtJS/VueJS framework since it's not as demanding as React and entry level for new developer was less lower. We decided to use NuxtJS since it provide for us better optimisation towards SEO, also sever-side rendering gave us better performance results. TailwindCSS was chosen mainly for purpose of being able to style our product in same way, no matter who will work over code.",
    paragraph_explanation_two:
      "This product is using PHP and its framework Laravel 6. As a way to store data we decided to use MySQL because in our case data which we collect in expected - therefore it's fits into Schema approach provided by SQL languages. Whole product is hosted on AWS S3 bucket",
    stack_badges: ['Vuejs', 'NuxtDotJs', 'Amazonaws', 'Mysql', 'Tailwindcss'],
    img_project_overall: `${o1Ctg}`,
    header_problems: 'Thought Process and Encountered Problems',
    paragraph_problems:
      'During my working days usually we were trying to solve problems on fly. Since that was my first real life project I had opportunity to learn from the best Designers and Developers.',
    img_project_two: `${p2Ctg}`,
    header_lesson: 'Lesson Learned',
    paragraph_lesson:
      'As a first real product work experience it was amazing to be able to see and relay on knowledge of my older colleges. Each day we had morning meeting where we disposed daily tasks and we talked about long time runs. Time spent in CareerToGo ground me even more in that that being a Software Developer is something what I really want to do.'
  },
  {
    name: '/projectToDo',
    header_main: 'ToDo',
    paragraph:
      'This project is a fully functional Back-end ready for todo Application. Here you can find features like: Logging in, registration with authorization, storing Todos in Database and more.',
    table: {
      type: 'Co-Project',
      stack: ['NodeJS', 'Express', 'MongoDB', 'Mongoose', 'GraphQL', 'Heroku'],
      code: {
        text: 'Repository',
        link: 'https://github.com/Ryjekk/ToDo_Server'
      },
      live: {
        text: 'Team',
        link: 'https://github.com/MaciejGL'
      }
    },
    img_project_one: `${p1Todo}`,
    header_goal: 'Project Goal and Purpose',
    paragraph_goal_one:
      'Main goal of this project was to use knowledge and skills gained after lesson about GraphQL. We tried to put all useful tools to make fully functional and ready todo list backend service.',
    paragraph_goal_two:
      'I created this project with Maciej during stay at Salt in Stockholm',
    header_explanation: 'Web Stack and Reasoning',
    paragraph_explanation_one:
      "We decided to use NodeJS with MongoDB since we didn't know what exact input of data we should expect. Also MongoDB gave us a easy profit of scalable your product if this will be needed.",
    paragraph_explanation_two:
      "GraphQL was mainly chosen because I wanted to improve my abilities with it, but also because their server performance is extremely fast, and I knew there wouldn't be any wait time.",
    stack_badges: ['Nodejs', 'Express', 'Graphql', 'Heroku'],
    img_project_overall: `${o1Todo}`,
    header_problems: 'Thought Process and Encountered Problems',
    paragraph_problems:
      'Since we worked on this code in small team we decided to go over coding process and logic by creating list of necessary logic and features with we will need for this project. Because of that we were able to speed up process of developing In this case we found the most difficult to work with JWT and creating process of authorisation and authentication. After doing some research we were able to pull and deliver this product.',
    img_project_two: `${p2Todo}`,
    header_lesson: 'Future Improvements',
    paragraph_lesson:
      'As a next step I see possibility to plug your ready backend to some frontend part of application to show how powerfull and advance of our product'
  },
  {
    name: '/projectAlgerio',
    header_main: 'Algerio',
    paragraph:
      'This product visualizing basic sort algorithms. It was made as a way to practise writing JavaScript logic',
    table: {
      type: 'Personal',
      stack: ['React', 'Netlify', 'CSS Modules'],
      code: {
        text: 'Repository',
        link: 'https://github.com/Ryjekk/Sort_Visualizer'
      },
      live: {
        text: 'Live view',
        link: 'https://sort-algo.netlify.app/'
      }
    },
    img_project_one: `${p1Algerio}`,
    header_goal: 'Project Goal and Purpose',
    paragraph_goal_one:
      'Main purpose and goal of this App was to improve skills in writing algorithms in JavaScript like also to use knowledge of React',
    paragraph_goal_two: '',
    header_explanation: 'Web Stack and Reasoning',
    paragraph_explanation_one:
      "For this project I used React, but many different Javascript libraries could've been used, and even vanilla Javascript could have been easily implemented.",
    paragraph_explanation_two:
      "To publish the application, I hosted it through Netlify, because its easy, free and how I've hosted many of my projects.",
    stack_badges: ['ReactLogo', 'Netlify'],
    img_project_overall: `${o1Algerio}`,
    header_problems: 'Thought Process and Encountered Problems',
    paragraph_problems:
      'During the process of developing I founded the most difficult to Visualise process of sort using CSS styles, but with help of Google I manage to find the correct way to display it',
    img_project_two: `${p2Algerio}`,
    header_lesson: 'Future Improvements',
    paragraph_lesson:
      'I could see as a natural process of further improvements adding new sort algorithms. It would be interesting to add input field where you can decide how big sorting range will be, and how fast the process of sorting should work. Beside that since UI seems little bit old I could spice it little bit up'
  },
  {
    name: '/projectPortfolio',
    header_main: 'VueJS Portfolio',
    paragraph:
      'My previous portfolio build with VueJS. I decided to build it in that technology to grounded my knowledge about Vue which I gained after working in CareerToGo',
    table: {
      type: 'Personal',
      stack: ['VueJS', 'SASS', 'Netlify'],
      code: {
        text: 'Repository',
        link: 'https://github.com/Ryjekk/NewPortfolio'
      },
      live: {
        text: 'Live view',
        link: 'https://ryjewski.netlify.app/'
      }
    },
    img_project_one: `${p1Portfolio}`,
    header_goal: 'Project Goal and Purpose',
    paragraph_goal_one:
      'Main goal was to have personal portfolio ready to present during the process of recreation',
    paragraph_goal_two: '',
    header_explanation: 'Web Stack and Reasoning',
    paragraph_explanation_one:
      "For this project I used VueJS, but many different Javascript libraries could've been used, and even vanilla Javascript could have been easily implemented. ",
    paragraph_explanation_two:
      'I chose to use Vue because of its ease of use and the ability to smoothly manipulate states without having to re-render the pages.',
    stack_badges: ['Vuejs', 'Sass', 'Netlify'],
    img_project_overall: `${o1Portfolio}`,
    header_problems: 'Thought Process and Encountered Problems',
    paragraph_problems:
      'The biggest problem during process of creation of my portfolio was to make a correct, fresh design which will catch the eye of the user. Therefore I decided to go with minimalism, and greys. Thank to that page looks sleek and neat.',
    img_project_two: `${p2Portfolio}`,
    header_lesson: 'Lesson Learned',
    paragraph_lesson:
      'During the process of creating my portfolio I definitely got better grasp over VueJS concept. As a future improvements I could see moving and separating all data and placing them as an API'
  },
  {
    name: '/projectRepack',
    header_main: 'RePack Battery Cloud',
    paragraph:
      'RePack Battery Cloud is a React application which control reusable battery packs, monitoring live data outsourced straight from batteries. This MVP is granted with 350 kNOK by Regionale Forskningsfond Oslo.',
    table: {
      type: 'Commercial',
      stack: [
        'ReactJS',
        'NodeJS',
        'Express',
        'PostgreSQL',
        'MaterialUI',
        'Heroku',
        'Netlify'
      ],
      code: {
        text: 'Ask for access',
        link: 'mailto:ryjewski@gmail.com'
      },
      live: {
        text: 'Live view',
        link: 'https://repack-cloud.netlify.app/'
      }
    },
    img_project_one: `${p1Repack}`,
    header_goal: 'Project Goal and Purpose',
    paragraph_goal_one:
      'RePack develops technologies to extract maximum value from second life EV batteries by repurposing them in a streamlined, safe and cost-effective way. Over two weeks, we supported the startup with mob in order to develop a MVP of their Battery Cloud solution. ',
    paragraph_goal_two:
      'During my work I was responsible for the client’s overview panel based on raw data from the battery modules using React in front end and Chart.js to display the graph. On the backend Nodejs was used with Postgresql as the database management system. The panel includes real-time updates from the battery sensors, and displays the voltage, current and temperature for each individual system.',
    header_explanation: 'Web Stack and Reasoning',
    paragraph_explanation_one:
      'Since we had to deal with structured data we decided to use PostgreSQL. This database is strictly recommended for project like ours. ',
    paragraph_explanation_two:
      'As a front end solution we decided to use React and Chart.js to display the graph.',
    stack_badges: [
      'ReactLogo',
      'Nodejs',
      'Express',
      'Postgresql',
      'MaterialUi',
      'Netlify',
      'Heroku'
    ],
    img_project_overall: `${o1Repack}`,
    header_problems: 'Thought Process and Encountered Problems',
    paragraph_problems:
      'Our biggest problem on this assigment was to decide how our incoming data should look like in database, like also what is the best way to model and store it. Gladly during the process of work we found the best solution for collecting data.',
    img_project_two: `${p2Repack}`,
    header_lesson: 'Future Improvements',
    paragraph_lesson:
      'Since final MVP was based on dummy data as a future improvements we see good opportunity to plug our database to app itself. Since App have an MVP status it will be further developed.'
  }
];
