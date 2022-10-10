export interface ExperienceItem {
  date: string;
  companyType: string;
  role: string;
  responsabilities: string[];
}

export const experienceItemsList: ExperienceItem[] = [
  {
    date: 'Feb 2021- Present',
    companyType: '[Cartago, Costa Rica] [E-Commerce, B2B]',
    role: 'Frontend Developer at BCard',
    responsabilities: [
      'Turn UI & UX mock-up to a fully functional web application using Angular, JavaScript Framework, including a responsive design that allows the optimal operation of the system regardless of the resolution of the device.',
      'Fix application/system problems or any incident that is disrupting the application Frontend service that business users depend on.',
      'Implementation of the backend service through NodeJS with the creation of a REST API using ExpressJS for the query of product information.',
      'Being part of a SCRUM team in an agile environment to maintain brand consistency throughout the development process, so a balance between functional, aesthetic design and customer interaction can be stroked.',
    ],
  },
  {
    date: 'July 2020- Nov 2020',
    companyType:
      '[Cartago, Costa Rica] [Handmade Accessories Marketplace, B2C]',
    role: 'Freelance Web Developer at MyVAccesorios',
    responsabilities: [
      'Taking software requirements according to the company needs, in addition to the implementation of an agile methodology for the constant review and feedback of the requirements.',
      ' Develop web application using JavaScript, CSS and HTML for the visualization and promotion of the product catalog and business social media.',
      'Implementation of the backend service through NodeJS with the creation of a REST API using ExpressJS for the query of product information.',
      'Implementation of a non-relational database system through a data modeling and schema design for a MongoDB database in order to store product information.',
    ],
  },
  {
    date: 'Dec 2019- Sep 2020',
    companyType:
      '[Cartago, Costa Rica] [Fitness App, Subscription Based Business]',
    role: 'Mobile Development building StrongerMe App',
    responsabilities: [
      'Analysis and definition of software requirements according to the niche of the mobile application, and a deep understanding of a target audience.',
      'Development of the mobile application based on the Flutter SDK and the connection to the Firebase cloud platform for the backend service and data storage administration.',
      'Conceptual design and implementation of SQLite database, taking into account efficient use of local memory on mobile devices.',
    ],
  },
];
