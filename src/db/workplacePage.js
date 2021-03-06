// TODO add different pics
// img_me
import w1Ctg from '../images/workspace/CTG/work_one.png';
import w1Repack from '../images/workspace/Repack/work_one.png';
import w1Salt from '../images/workspace/Salt/work_one.png';
// img_interiors
import w2Ctg from '../images/workspace/CTG/pic_desktop_one.png';
import w2Salt from '../images/workspace/Salt/pic_desktop_one.png';
import w2Repack from '../images/workspace/Repack/pic_desktop_one.png';

export const workplacePage = [
  {
    name: '/workCTG',
    header_main: 'Working at CareerToGo',
    paragraph_main_one:
      'I had the opportunity to work at CareerToGo, a Startup in Denmark for my 2019 Internship where I gained a position of Frontend Developer afterwards. This was an amazing experience where I was able to work alongside senior Developers and experienced Designers to build amazing Job platform for youth',
    paragraph_main_two:
      'Throughout this time I was pushed and challenged in every aspect of my skills and walked away as a much more refined developer.',
    img_me: `${w1Ctg}`,
    header_goal: 'Goal of work',
    paragraph_goal_one:
      'Prior to arriving at CareerToGo, I set some personal goals for myself so I had clear objectives on what I wanted to improve on and accomplish. My main priority involved improving my abilities with VueJS.',
    paragraph_goal_two:
      'Another specific goal I had for my worktime was to improve my abilities as a member of a team. I wanted to understand how every phase of the development process works, from idea to launch. This included grasping more advanced concepts of git, such as rebasing, checkouts, and reverting.',
    stack_badges: [
      'Vuejs',
      'Vuetify',
      'NuxtDotJs',
      'Sass',
      'Tailwindcss',
      'Amazonaws',
      'Mysql'
    ],
    header_challenges: 'Personal Challenges and Growth',
    paragraph_challenges_one:
      "Time at CareerToGo was one of the most challenging and rewarding experience I've ever had. Traveling overseas and experiencing a completely new team taught me so much about myself and about the profession I want to be in.",
    paragraph_challenges_two:
      'At CareerToGo, I learned a ton about VueJS, NuxtJS, TailwindCSS, MySQL, PHP, Git, you name it, but I also learned so much about how to be a developer with integrity and a valuable member of a team. Working alongside extremely talented developers inspired me and pushed my bounds of what I believed any developer can do.',
    img_interiors: `${w2Ctg}`,
    header_contribution: 'My Contributions',
    paragraph_contribution_one:
      'During the time at CareerToGo I was responsible for building and transforming designs to code. I worked alongside designer and app developer, to create a full experience for the user of app.',
    header_overview: 'Overview',
    paragraph_overview:
      'My experience at CareerToGo will be something I remember forever, and I want to thank everyone at CareerToGo for the time they took teaching me so many new lessons and giving me such an amazing experience.'
  },
  {
    name: '/workSalt',
    header_main: 'Studying at Salt',
    paragraph_main_one:
      'I had the opportunity to be chosen for student program at Salt in Sweden. During my time I had a chance to improve my skills like also to expand my knowledge in Computer Science subject.',
    paragraph_main_two:
      'Thankfully to excellent teaching crew I had opportunity to challenge myself with advanced topic like Databases, Design, Frontend, Backend technologies and much more.',
    img_me: `${w1Salt}`,
    header_goal: 'Goal of School',
    paragraph_goal_one:
      'My main goal which I set personally for myself was to improve skills as a Backend developer and expand knowledge in fields like Databases management etc.',
    paragraph_goal_two:
      'Also another goal which I put on end line was to immerse myself as a team player with random mob group. I wanted to understand basic mob team strategies and way to approaching the problem which is little different than regular team work',
    stack_badges: [
      'ReactLogo',
      'Redux',
      'Nodejs',
      'Express',
      'Postgresql',
      'Mongodb',
      'Jest',
      'Mocha',
      'Docker',
      'Webpack',
      'Netlify',
      'Heroku'
    ],
    header_challenges: 'Personal Challenges and Growth',
    paragraph_challenges_one:
      'Time dedicated to Salt was the most challenging and rewarding. After 16 weeks I feel like I learned so much about myself like also I got some extra baggage of knowledge and deeper understanding of agile type of work.',
    paragraph_challenges_two:
      'At Salt I learned a ton about technologies like: React, Redux, NodeJS, Express, GraphQL, PostgreSQL, MongoDB, AWS, Docker and much more, you name it, but also I gain deeper understanding of agile type of work and working in team.',
    img_interiors: `${w2Salt}`,
    header_contribution: 'My Contributions',
    paragraph_contribution_one:
      'During time at Salt we had occasion to challenge ourselves almost everyday, but I can point two major events which changed the way of my thinking of mine. First one was a Hackathon where I was able to build random product on my own within time frame and Final project which we build in period of 10 days with my team.',
    paragraph_contribution_two: 'Here you can read about this projects:',
    header_overview: 'Overview',
    paragraph_overview:
      'My experience at Salt will be something I remember forever. I want to thank everyone at Salt for the time they took teaching me so many new lessons and giving me such an amazing experience.'
  },
  {
    name: '/workRepack',
    header_main: 'Working for RePack',
    paragraph_main_one:
      'In January, I had the occasion to support Repack Team during the process of creating their MVP. In two weeks me and my team of developers from </salt> faced the process of setting up the foundations of Repack cloud solution.',
    paragraph_main_two: '',
    img_me: `${w1Repack}`,
    header_goal: 'Goal of work',
    paragraph_goal_one:
      'The goal was to build whole application from the scratch witch opportunity of choosing tech stack. The purpose of Battery cloud MVP was to create program witch monitors all important data aspects from reusable battery packs. Those packs could be used to fast charge cars or provide external mobile electricity for events or construction workers.  ',
    paragraph_goal_two:
      'Our application had chance to be pitched in front of potential clients for investments purposes ',
    stack_badges: [
      'ReactLogo',
      'Nodejs',
      'Express',
      'Postgresql',
      'MaterialUi',
      'Netlify',
      'Heroku'
    ],
    header_challenges: 'Personal Challenges and Growth',
    paragraph_challenges_one:
      'Science amount of freedom given to us the biggest challenge witch we encounter was to choose the right tools for this project. We decided to use modular front end solution provided by React with MaterialUI. ',
    paragraph_challenges_two:
      'Another challenge was to choose the right way of storing data. We decided to utilized well established and documented SQL, since we knew how our data will be structured. Thanks to that we had opportunity to get better grasp on data modeling and structuring.',
    img_interiors: `${w2Repack}`,
    header_contribution: 'My Contribution',
    paragraph_contribution_one:
      'We spend first week of work on modeling and structuring back end code and data base, afterwards we moved forward to implementing front end mockups provided by our designers. Whole process went smoothly, but also we spend some time on diving deeper into mentioned above topics.',
    header_overview: 'Overview',
    paragraph_overview:
      'As a final result of this project, we have granted 350 kNOK by Regionale Forskningsfond Oslo.'
  }
];
