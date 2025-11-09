import dealershipImg from "../assets/Projects/project-1.jpg";
import transportationImg from "../assets/Projects/project-2.jpg";
import project1 from "../assets/Projects/project1.jpg";
import project3 from "../assets/Projects/project3.png";
import project4 from "../assets/Projects/project4.jpg";

export const HERO_CONTENT = `Results-driven .NET Backend Engineer with 3+ years of hands-on experience in developing scalable enterprise applications using .NET Core and cloud technologies. Currently specializing in backend development with proven expertise in building microservices architecture, implementing CI/CD pipelines, and delivering high-performance server-side applications. Strong background in Agile methodologies with demonstrated ability to collaborate with cross-functional teams. Currently working on AI-driven dealership management systems with a specialized focus on enterprise resource planning solutions and exploring Generative AI technologies.`;

export const ABOUT_TEXT = `I am a passionate .NET Backend Engineer with 3+ years of experience, currently transitioning into the exciting world of Generative AI and enterprise solutions. At Netsmartz LLC, I architect AI-driven dealership management systems serving 500+ concurrent users across 50+ locations with 99.8% uptime. My expertise spans from traditional .NET Core 8.0, microservices architecture, Docker, and Kubernetes to cutting-edge AI technologies. I'm actively learning Generative AI through comprehensive coursework in LangChain and HuggingFace, with the vision of becoming an AI-First Backend Engineer. My integration of machine learning algorithms has achieved 85% improvement in revenue prediction accuracy, and I've modernized mission-critical ERP systems processing $50M+ annual transactions. I believe the future of backend development lies in intelligent, context-aware systems that don't just process data but generate insights and automate complex decision-making processes.`;

export const EXPERIENCES = [
  {
    year: "Feb 2025 - Present",
    role: "Software Engineer - Backend Developer",
    company: "Netsmartz LLC",
    description: `Architecting and developing an enterprise-grade AI-Driven Dealership Management System backend using .NET Core 8.0 and ASP.NET Core Web API, serving 500+ concurrent users across 50+ dealership locations with 99.8% uptime. Engineered microservices architecture with Docker containerization and Kubernetes orchestration, reducing deployment time by 70% and improving system scalability to handle 10x traffic spikes. Integrated advanced machine learning algorithms through RESTful APIs for inventory optimization, sales forecasting, and customer behavior analysis, increasing dealership revenue prediction accuracy by 85%. Currently pursuing advanced Generative AI training through comprehensive LangChain and HuggingFace coursework, working towards becoming an AI-First Backend Engineer.`,
    technologies: [".NET Core 8.0", "Docker", "Kubernetes", "ML APIs", "LangChain", "HuggingFace", "GenAI"],
  },
  {
    year: "May 2023 - Feb 2025",
    role: "IT Officer - .NET Developer",
    company: "TCI Express Ltd",
    description: `Modernized mission-critical Enterprise Resource Planning (ERP) Gateway system using .NET Core 6.0 and ASP.NET MVC, supporting 2000+ concurrent users across 150+ logistics hubs, processing $50M+ annual transactions. Architected and developed 25+ RESTful APIs managing complex multi-modal transportation workflows, integrating surface, air, and international logistics operations with real-time tracking capabilities. Implemented enterprise-grade JWT authentication and role-based authorization system, achieving 95% reduction in security incidents and ensuring SOC 2 compliance for financial data protection. Optimized database performance through advanced SQL stored procedures and indexing strategies, reducing report generation time from 45 minutes to 3 minutes.`,
    technologies: [".NET Core 6.0", "ASP.NET MVC", "SQL Server", "JWT Auth", "Web APIs"],
  },
  {
    year: "2022 - 2023",
    role: "MERN Stack Developer Intern",
    company: "Hoping Minds",
    description: `During my 10-month internship at Hoping Minds as a MERN Stack Developer, I gained extensive experience in building dynamic and responsive web applications using MongoDB, Express.js, React.js, and Node.js. I worked on various front-end and back-end components, ensuring seamless integration and optimal performance across projects. My responsibilities included creating scalable APIs, implementing user-friendly interfaces, and maintaining efficient database structures. This internship strengthened my problem-solving skills and gave me hands-on experience with full-stack development, preparing me to tackle complex challenges in real-world scenarios.`,
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs"],
  },
  {
    year: "MAR 2022 - JUL 2022",
    role: "Python Full Stack Developer Intern",
    company: "Oceana Tech",
    description: `During my 5-month internship at Oceana Tech as a Python Full Stack Developer, I honed my skills in both front-end and back-end development using Python, Django, HTML, CSS, and JavaScript. I was responsible for building and maintaining web applications, and managing databases for smooth operations. This experience allowed me to work on scalable solutions, optimize application performance, and collaborate with cross-functional teams. My time at Oceana Tech helped me refine my problem-solving abilities and deepened my understanding of full-stack development.`,
    technologies: ["Python", "Django", "MySQL", "Bootstrap", "JavaScript"],
  }
  //{
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
    title: "AI-Driven Dealership Management System",
    image: dealershipImg,
    description:
      "Leading backend architecture for comprehensive automotive DMS handling vehicle inventory, sales pipeline, service scheduling, and financial operations across 50+ dealerships. Implemented AI-powered predictive analytics for inventory optimization, customer lifetime value prediction, and dynamic pricing strategies. System processes 100,000+ daily transactions with real-time data synchronization and 99.8% uptime.",
    technologies: [".NET Core 8.0", "Azure Service Bus", "Docker", "Kubernetes", "ML APIs", "SignalR"],
  },
  {
    title: "Multi-Modal Transportation ERP Gateway", 
    image: transportationImg,
    description:
      "Architected enterprise-grade logistics ERP system managing end-to-end supply chain operations, including order management, route optimization, fleet tracking, and financial reconciliation. System handles $50M+ annual transaction volume across 150+ locations with real-time shipment tracking and automated billing for surface, air, and international logistics.",
    technologies: [".NET Core 6.0", "ASP.NET MVC", "SQL Server", "Oracle", "JWT Auth", "Web APIs"],
  },
  {
    title: "GenAI Learning Laboratory",
    image: project3,
    description:
      "Currently building a comprehensive learning laboratory for Generative AI applications using LangChain and HuggingFace. This project serves as my hands-on exploration of prompt engineering, RAG systems, vector databases, and AI agent development. Features include document Q&A systems, intelligent chatbots, and automated content generation tools representing my active journey into AI-first development.",
    technologies: ["Python", "LangChain", "HuggingFace", "OpenAI API", "Vector DBs", "Streamlit"],
  },
  {
    title: "AI Image Generator",
    image: project4,
    description:
      "Developed an AI Image Generator using Node.js, Express.js, and OpenAI API, enabling dynamic image creation based on user prompts. Implemented seamless API integration for efficient and scalable image generation with advanced prompt engineering and optimization techniques, showcasing early AI development skills.",
    technologies: ["Node.js", "Express.js", "OpenAI API", "JavaScript", "Prompt Engineering"],
  },
  {
    title: "Spotify Clone",
    image: project1,
    description:
      "Developed a fully responsive Spotify clone using React functional components, Redux Toolkit for state management, and Tailwind CSS for design. Integrated dynamic content fetching via RapidAPI, ensuring seamless user experience with advanced music streaming capabilities and modern web development practices.",
    technologies: ["React", "Redux Toolkit", "Tailwind CSS", "RapidAPI", "JavaScript"],
  },
];

export const CONTACT = {
  address: "Mohali, Punjab, India",
  phoneNo: "+91-7807050643",
  email: "kapilkaushal466@gmail.com",
};
