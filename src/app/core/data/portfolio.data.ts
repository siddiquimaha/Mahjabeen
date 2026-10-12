import { PortfolioData } from '../models/portfolio.models';

export const PORTFOLIO_DATA: PortfolioData = {
  profile: {
    name: 'Mahjabeen Siddiqui',
    title: '.NET Full Stack Developer',
    summary:
      'Adaptable and detail-oriented software developer with hands-on experience building secure, scalable web applications using ASP.NET Core and Angular. Passionate about clean architecture, continuous learning, and delivering reliable solutions across fintech, enterprise, and geospatial domains.',
    email: 'Siddiqui.mahajabeen@gmail.com',
    phone: '+92 332 2392917',
    linkedIn: 'https://www.linkedin.com/in/mahjabeen-siddiqui-126a4734/',
    gitHub: 'https://github.com/siddiquimaha',
    location: 'Karachi, Pakistan',
  },

  navLinks: [
    { label: 'About', fragment: 'about' },
    { label: 'Skills', fragment: 'skills' },
    { label: 'Experience', fragment: 'experience' },
    { label: 'Projects', fragment: 'projects' },
    { label: 'Education', fragment: 'education' },
    { label: 'Contact', fragment: 'contact' },
  ],

  skills: [
    {
      category: 'Backend',
      skills: [
        'ASP.NET Core MVC',
        'Web API',
        'C#',
        'CQRS',
        'MediatR',
        'REST APIs',
        'JWT Authentication',
        'SignalR',
        'gRPC',
      ],
    },
    {
      category: 'Frontend',
      skills: ['Angular', 'React', 'TypeScript', 'JavaScript (ES6+)'],
    },
    {
      category: 'Database',
      skills: ['SQL Server', 'NoSQL', 'Stored Procedures', 'Query Optimization'],
    },
    {
      category: 'Architecture',
      skills: [
        'Clean Architecture',
        'SOLID Principles',
        'Repository Pattern',
        'Dependency Injection',
      ],
    },
    {
      category: 'Cloud & DevOps',
      skills: [
        'AWS (EC2, VPC)',
        'Docker',
        'Git & GitHub',
        'Linux',
        'CI/CD',
        'Jenkins',
        'GitHub Actions',
      ],
    },
  ],

  experiences: [
    {
      company: 'ZeroCash Technology',
      role: '.NET Developer',
      period: 'May 2026 – July 2026',
      domain: 'Fintech · Payment Gateway',
      clientContext:
        'Supported a payment processing platform serving financial transaction workflows. Work focused on API reliability, performance, and secure bank-debit integrations — relevant for fintech, banking, and payment-service providers.',
      highlights: [
        'Enhanced an existing payment gateway application to improve maintainability and performance.',
        'Developed and integrated gRPC services for faster server-to-server communication.',
        'Optimized SQL Server stored procedures to improve database performance.',
        'Built RESTful APIs for bank debit transactions integrated with the payment gateway.',
        'Validated APIs using Swagger and Apidog to ensure reliability and accuracy.',
      ],
    },
    {
      company: 'Codinets',
      role: 'Software Developer (.NET)',
      period: 'June 2025 – April 2026',
      domain: 'Enterprise Software · IoT',
      clientContext:
        'Delivered business-critical web applications for organizations needing secure APIs, role-based access, and operational dashboards. Experience applies to SaaS, internal enterprise tools, and IoT data visualization use cases.',
      highlights: [
        'Developed and maintained scalable web applications using ASP.NET Core and Angular.',
        'Built secure RESTful APIs with JWT authentication and role-based authorization.',
        'Implemented CQRS, Clean Architecture, and MediatR for separation of concerns.',
        'Designed reusable backend architecture using Repository Pattern and Dependency Injection.',
        'Integrated Angular frontends with backend APIs including token handling and route guards.',
        'Improved performance through code optimization and SQL query tuning.',
        'Developed IoT-based data visualization features using Angular components.',
      ],
    },
    {
      company: 'Xauzit Pvt. Limited',
      role: 'Junior Software Engineer (Full Stack)',
      period: 'Aug 2024 – Nov 2024',
      domain: 'Geospatial · Public Web Platform',
      clientContext:
        'Contributed to a public-facing mapping platform with interactive visualization. Relevant for clients in GIS, logistics, location services, and data-rich web experiences.',
      highlights: [
        'Refactored legacy JavaScript code to improve maintainability and performance.',
        'Implemented custom tooltips, zoom functionality, and SVG map integration.',
        'Enhanced code structure using modular design and proper scope handling.',
        'Collaborated with the team using Git for version control.',
      ],
    },
  ],

  projects: [
    {
      name: 'Service Desk Portal System',
      status: 'In Progress',
      description:
        'An internal service management portal built with modern .NET and Angular practices. Includes secure authentication, structured backend layers, and maintainable API design suitable for IT support and operations teams.',
      technologies: [
        'ASP.NET Core',
        'Angular',
        'SQL Server',
        'CQRS',
        'MediatR',
        'JWT',
        'Clean Architecture',
      ],
    },
    {
      name: 'GeomapHub Pakistan',
      status: 'Completed',
      description:
        'Public geospatial web platform featuring interactive maps, SVG integration, and responsive UI components. Demonstrates front-end engineering for location-based applications.',
      technologies: ['JavaScript', 'SVG', 'Interactive Maps', 'Modular UI'],
      url: 'https://www.geomaphub.com/pk',
    },
  ],

  education: [
    {
      degree: 'MS Software Engineering',
      institution: 'Sir Syed University of Engineering and Technology',
      year: '2026',
      status: 'In Progress',
    },
    {
      degree: 'PGD Software Engineering',
      institution: 'NED University of Engineering and Technology',
      year: '2024',
      status: 'Completed',
    },
    {
      degree: 'MBA (Finance)',
      institution: 'Federal University of Arts, Science and Technology',
      year: '2008',
      status: 'Completed',
    },
  ],

  certifications: [
    {
      name: 'DevOps Engineer',
      issuer: 'Saylani IT Training Institute',
      year: '2026',
      status: 'In Progress',
    },
    {
      name: 'Web & Mobile App Development',
      issuer: 'Saylani IT Training Institute',
      year: '2025',
      status: 'Completed',
    },
  ],
};
