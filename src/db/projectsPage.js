// 1260 img size
// img_project_one
import p1Algerio from '../images/projects/Algerio/project_one.png';
import p1Aura from '../images/projects/Aura/project_one.png';
import p1Ctg from '../images/projects/CareerToGo/project_one.png';
import p1Novid from '../images/projects/Novid/project_one.png';
import p1Portfolio from '../images/projects/Porfolio/project_one.png';
import p1Repack from '../images/projects/RePack/project_one.png';
import p1Nts from '../images/projects/Scrapper/project_one.png';
//

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
      'I think all of this goals was achieved on final stage of product. Since this project is still under active development The product owner is thinking about expanding page even more by adding a shop functionality.',
    header_explanation: 'Web Stack and Reasoning',
    paragraph_explanation_one:
      "For this project I used React, but many different Javascript libraries could've been used, and even vanilla Javascript could have been easily implemented. I chose to use React because of its ease of use and the ability to smoothly manipulate states without having to re-render the pages.",
    paragraph_explanation_two:
      'In this project I also found out way to use EmailJS to provide smoth direct message system between Client and Aura Tattoo studio.',
    stack_badges: ['ReactLogo', 'StyledComponents', 'Netlify'],
    img_project_overall: '',
    header_problems: 'Thought Process and Encountered Problems',
    paragraph_problems:
      'This project was created after learning about React, therefore during the process of coding I encountered lots of small challenges. I tried to build and structure code as clean as I could.',
    img_project_two: '',
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
      'The main goal of this challenge was to build functional product within one day. Beside obvious timeframe secondary goal was to practice usage og NodeJS with Express and React. As a extra tool I decided to use Puppeteer. This project was made only for learning purposes.',
    paragraph_goal_two:
      'I was always amazed with concept of data crawling and web scrapping therefore I decided to build own automated web scrapper.',
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
    img_project_overall: '',
    header_problems: 'Thought Process and Encountered Problems',
    paragraph_problems:
      'Biggest problem which I encountered during this project was to build proper scrapper - Since Puppeteer have not clear documentation in this field. But by the end of the day I menage to build scrapper with satisfy complicity.',
    img_project_two: '',
    header_lesson: 'Lesson Learned',
    paragraph_lesson:
      'As a main Lesson taken from this challenge I can point a process of building scrapper itself, and at the same time it was really rewarding to see how big impact your program have. As a future development I could see stepping away from storing data locally in JSON format and move it to some more organized db like MongoDB, or FaunaDB'
  },
  {
    name: '/projectNovid',
    header_main: 'Novid',
    paragraph:
      'Novid is a project I build alongside with Einar and Torbjorn as a final project at Salt. Novid allows you to easy track movement of your employees during their work time like also witll allert people which were exposed fot potential COVID-19 risk',
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
        link: 'https://novid-client.netlify.app/'
      }
    },
    img_project_one: `${p1Novid}`,
    header_goal: 'Project Goal and Purpose',
    paragraph_goal_one:
      'Main goal was to create COVID-19 relate app, which could be used for further developing and potential leading as a startup. After making research we decided that this field needs to be improved because some companies still are using Exel sheet to track people in company',
    paragraph_goal_two:
      'Since we had a timeframe of around 10 days we decided to be more focused on functionality and logic which at this time we delivered on a promising level.',
    header_explanation: 'Web Stack and Reasoning',
    paragraph_explanation_one:
      'React was the clear choice for this project, because of its ease of state management and the amount of packages available. We also utilized Netlify as a server to host Novid, because it allows live updates alongside github.',
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
    img_project_overall: '',
    header_problems: 'Thought Process and Encountered Problems',
    paragraph_problems:
      'The biggest challenge encountered during this task was to sync remote work during COVID-19 isolation. Beside this obvious reason, main problem which we overcome was to provide good level of security of personal data.',
    img_project_two: '',
    header_lesson: 'Lesson Learned and Future Improvements',
    paragraph_lesson:
      'This project helped to solidify a lot my React knowledge, such as using hooks or updating the states. I also got a lot of great practice using ES6+ syntax across the entirety of the project. This was a large code base to manage across a team, and we all got some more great experience with version control and reviewing each others code.'
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
        text: 'Official website',
        link: 'https://www.careertogo.dk/'
      }
    },
    img_project_one: `${p1Ctg}`,
    header_goal: 'Project Goal and Purpose',
    paragraph_goal_one:
      'Finding a job should be simple & engaging. That is why we have developed CareerToGo, where students and graduates meet their future employers in informal coffee meetings.',
    paragraph_goal_two:
      'This project is still under strong development process.',
    header_explanation: 'Web Stack and Reasoning',
    paragraph_explanation_one:
      "In this project we decided to use NuxtJS/VueJS framework since it's not as demanding as React and entry level for new developer was less lower. We decided to use NuxtJS since it provide for us better optimisation towards SEO, also sever-side rendering gave us better performance results. TailwindCSS was choose mainly for purpose of being able to style our product in same way, no matter who will work over code.",
    paragraph_explanation_two:
      "This product is using PHP and its framework Laravel 6. As a way to store data we decided to use MySQL because in our case data which we collect in expected - therefore it's fits into Schema approach provided by SQL languages. Whole product is hosted on AWS S3 bucket",
    stack_badges: ['Vuejs', 'NuxtDotJs', 'Amazonaws', 'Mysql', 'Tailwindcss'],
    img_project_overall: '',
    header_problems: 'Thought Process and Encountered Problems',
    paragraph_problems:
      'During my working days usually we were trying to solve problems on fly. Since that was my first real life project I had opportunity to learn from the best Designers and Developers.',
    img_project_two: '',
    header_lesson: 'Lesson Learned',
    paragraph_lesson:
      'As a first real product work experience it was amazing to be able to see and relay on knowledge of my older colleges. Each day we had morning meeting where we disposed daily tasks like also we talked about long time runs. Time spent in CareerToGo ground me even more in that that being a Software Developer is something what I really want to do.'
  },
  {
    name: '/projectToDo',
    header_main: 'ToDo',
    paragraph:
      'This project is a fully functional Back-end for todo Application, you can find here features like: Logging in, Registration with authorization, storing Todos in Database and more',
    table: {
      type: 'Co-Project',
      stack: ['NodeJS', 'Express', 'MongoDB', 'Mongoose', 'GraphQL', 'Heroku'],
      code: {
        text: 'Repository',
        link: 'https://github.com/Ryjekk/ToDo_Server'
      },
      live: {
        text: 'Live view',
        link: 'https://github.com/Ryjekk/ToDo_Server'
      }
    },
    img_project_one: '',
    header_goal: 'Project Goal and Purpose',
    paragraph_goal_one:
      'Main goal of this project was to use knowledge and skills gained after lesson about GraphQL. We tried to put all useful tools to make fully functional and ready todo list backend service',
    paragraph_goal_two:
      'I created this project with Maciej during stay at Salt in Stockholm',
    header_explanation: 'Web Stack and Reasoning',
    paragraph_explanation_one:
      'We decided to use NodeJS with MongoDB since we didnt know what exact input of data we will expect. Also MongoDB gave us a easy profit of scalable our product if this will be needed.',
    paragraph_explanation_two:
      "GraphQL was mainly chosen because I wanted to improve my abilities with it, but also because their server performance is extremely fast, and I knew there wouldn't be any wait time.",
    stack_badges: ['Nodejs', 'Express', 'Graphql', 'Heroku'],
    img_project_overall: '',
    header_problems: 'Thought Process and Encountered Problems',
    paragraph_problems:
      'Since we worked on this code in small team we decided to go over coding process and logic by creating list of necessary logic and features with we will need for this project. Because if that we were able to speed up process of developing',
    img_project_two:
      'In this case we found the most difficult to work with JWT and creating process of authorisation and authentication. After doing some research we were able to pull and deliver this product.',
    header_lesson: 'Future Improvements',
    paragraph_lesson:
      'As a next step I see possibility to plug our ready backed to some frontend part of application to show real power and advance of our product'
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
      'Man purpose and goal of this App was to improve skills in writing algorithms in JavaScript like also to use knowledge of React',
    paragraph_goal_two: '',
    header_explanation: 'Web Stack and Reasoning',
    paragraph_explanation_one:
      "For this project I used React, but many different Javascript libraries could've been used, and even vanilla Javascript could have been easily implemented.",
    paragraph_explanation_two:
      " To publish the application, I hosted it through Netlify, because its easy, free and how I've hosted many of my projects.",
    stack_badges: ['ReactLogo', 'Netlify'],
    img_project_overall: '',
    header_problems: 'Thought Process and Encountered Problems',
    paragraph_problems:
      'During the process of developing I founded the most difficult to Visualise process of sort using CSS styles, but with help of Google I menage to organise correct way to display it',
    img_project_two: '',
    header_lesson: 'Future Improvements',
    paragraph_lesson:
      'As na natural way I could see as a natural process of further improvements adding new sort algorithms. Also as a interesting way it would be to add field where you can decide how big have to be sorting array and how fast it should sort. Beside that since UI seems little bit old I could spice it little bit up'
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
        link: 'https://ryjewsky.netlify.app/'
      }
    },
    img_project_one: `${p1Portfolio}`,
    header_goal: 'Project Goal and Purpose',
    paragraph_goal_one:
      'Main gaol was to have personal portfolio ready to present during the process of recreation',
    paragraph_goal_two: '',
    header_explanation: 'Web Stack and Reasoning',
    paragraph_explanation_one:
      "For this project I used VueJS, but many different Javascript libraries could've been used, and even vanilla Javascript could have been easily implemented. ",
    paragraph_explanation_two:
      'I chose to use Vue because of its ease of use and the ability to smoothly manipulate states without having to re-render the pages.',
    stack_badges: ['Vuejs', 'Sass', 'Netlify'],
    img_project_overall: '',
    header_problems: 'Thought Process and Encountered Problems',
    paragraph_problems: '',
    img_project_two: '',
    header_lesson: 'Lesson Learned',
    paragraph_lesson:
      'During the process of creating my portfolio I definitely got better grasp over VueJS concept. As a future improvements I could see to move and separate all data and place them as an API'
  },
  {
    name: '/projectRepack',
    header_main: 'RePack Battery Cloud',
    paragraph: '',
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
        text: 'Repository',
        link: ''
      },
      live: {
        text: 'Live view',
        link: ''
      }
    },
    img_project_one: `${p1Repack}`,
    header_goal: '',
    paragraph_goal_one: '',
    paragraph_goal_two: '',
    header_explanation: '',
    paragraph_explanation_one: '',
    paragraph_explanation_two: '',
    stack_badges: [
      'ReactLogo',
      'Nodejs',
      'Express',
      'Postgresql',
      'MaterialUi',
      'Netlify',
      'Heroku'
    ],
    img_project_overall: '',
    header_problems: '',
    paragraph_problems: '',
    img_project_two: '',
    header_lesson: '',
    paragraph_lesson: ''
  }
];
