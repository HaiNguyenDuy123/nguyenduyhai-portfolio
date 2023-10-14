import {
  //about
  mobile,
  backend,
  creator,
  web,
  //tech
  css,
  docker,
  git,
  html,
  java,
  javascript,
  mongodb,
  nodejs,
  python,
  reactjs,
  sql,
  spring,
  //company
  utehy,
  comit,
  //work
  carhub,
  weather_app,
  Ecommerce_admin,
  ecommerce,
  profile,
  review_backend,
  review_frontend
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "feedbacks",
    title: "Feedback",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Java Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Spring",
    icon: spring,
  }, 
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title_companny
    : "Education & Certifications",
    company_name: "utehy",
    icon: utehy,
    iconBg: "#383E56",
    date: "August 2019 - July 2023",
    points: [
      "Hung Yen University of Technology and Education.",
      "Information Technology Engineer", "Major in Computer Science",
      "I am a recent graduate with a strong foundation in various programming languages and web development technologies such as HTML, CSS, JavaScript, Python and framework like React.",
    ],
  },
  {
    title: "Web Developer Intern",
    title_companny: "COMIT Telecommunication Services Joint Stock Company",
    company_name: "COMIT Telecommunication Services Joint Stock Company",
    icon: comit,
    iconBg: "#E6DEDD",
    date: "July 2022 - September 2022",
    points: [
      "Building User Interfaces (UI/UX): I have been tasked with developing the user interfaces of websites or applications. Using HTML, CSS, and JavaScript to create appealing and user-friendly interfaces.",
      "Server-side Functionality Development: I have been involved in developing server-side processing logic of applications, including writing programming code in languages like Node.js, Python.",
      "Database Integration: I have learned how to interact with databases by executing queries, updates, and data storage.",
      "Learning and Researching New Technologies: I have had the opportunity to learn and research the latest technologies and frameworks in the field of web development.",
    ],
  },
  {
    title: "Backend Developer Fresher",
    title_companny: "COMIT Telecommunication Services Joint Stock Company",
    company_name: "COMIT Telecommunication Services Joint Stock Company",
    icon: comit,
    iconBg: "#383E56",
    date: "October 2022 - January 2023",
    points: [
      "Developed and implemented efficient database management systems, resulting in a 30% decrease in response time for data retrieval and storage.",
      "Integrated third-party APIs into web platforms, resulting in a 10% increase in user engagement. Collaborated with front-end developers and other team members to design code that was more cohesive and functional, resulting in a 20% reduction in bugs.",
      "Conducted rigorous testing and debugging of backend systems to ensure high-quality, bug-free software delivery, reducing post-release issues by 40%.",
      "Managed SQL queries and data transport, resulting in a 10% increase in data processing speed.",
      "Developed server-side logic in Java and JavaScript for web applications, mobile applications, and data science projects.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Hai proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHXQVx4YoM0udnjuHwFR0QJ7GnSOu6c6-tW7VQ2G0Aog&s",
  },
  {
    testimonial:
      "Tôi chưa bao giờ gặp một nhà phát triển web thực sự quan tâm đến thành công của khách hàng như Hải.",
    name: "Phan Thanh Đức",
    designation: "COO",
    company: "DEF Corp",
    image: "https://static.vecteezy.com/system/resources/previews/002/002/403/original/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
  },
  {
    testimonial:
      "私たちの製品と同じくらい美しいウェブサイトを作るのは不可能だと思っていましたが、Hai は私が間違っていることを証明してくれました。",
    name: "パンタンゲン",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
  },
  {
    testimonial:
      "Hai가 웹사이트를 최적화한 후 트래픽이 50% 증가했습니다. 우리는 그들에게 아무리 감사해도 부족하지 않습니다!",
    name: "판탄득",
    designation: "CTO",
    company: "352 Enterprises",
    image: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
  },
];

const projects = [
    {
    name: "Content-Calendar",
    description:
      "This project utilizes Spring Boot, including Spring Core, Spring MVC, and JDBC/Spring Data, to create the content calendar.",
    tags: [
      {
        name: "Spring Core",
        color: "blue-text-gradient",
      },
      {
        name: "Spring MVC",
        color: "green-text-gradient",
      },
      {
        name: "JDBC/Spring Data",
        color: "pink-text-gradient",
      },
    ],
    image: review_backend,
    source_code_link: "https://github.com/HaiNguyenDuy123/content-calendar",
  },
  {
    name: "Review_Movie_Backend",
    description:
      "Create and develop a movie review application that features separation of concerns between client code and server code.",
    tags: [
      {
        name: "Spring Boot",
        color: "blue-text-gradient",
      },
      {
        name: "Java",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: review_backend,
    source_code_link: "https://github.com/HaiNguyenDuy123/Movie_Review_Backend",
  },
  {
    name: "Review_Movie_Frontend",
    description:
      "Create and develop a movie review application that features separation of concerns between client code and server code.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Css",
        color: "pink-text-gradient",
      },
    ],
    
    image:review_frontend,
    source_code_link: "https://github.com/HaiNguyenDuy123/Review_movie-FrontEnd",
  },
  {
    name: "Portfolio",
    description:
      "This personal portfolio website about me and how you get in touch with me. This project combines ThreeJS, React Three Fiber, TailwindCSS and Framer Motion.",
    tags: [
      {
        name: "ThreeJS",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS ",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: profile,
    source_code_link: "https://github.com/HaiNguyenDuy123/nguyenduyhai-portfolio/tree/main",
  },
  {
    name: "E-commerce",
    description:
      "This site is for users to buy clothes. This is a repository for a Full Stack E-Commerce + Dashboard & CMS: Next.js 13 App Router, React, Tailwind, Prisma, MySQL.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/HaiNguyenDuy123/E-commerce.git",
  },
  {
    name: "E-commerce_admin",
    description:
      "This site is for admin to monitor and install user site.. This is a repository for a Full Stack E-Commerce + Dashboard & CMS: Next.js 13 App Router, React, Tailwind, Prisma, MySQL.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: Ecommerce_admin,
    source_code_link: "https://github.com/HaiNguyenDuy123/E-commerce_admin.git",
  },
  {
    name: "Car_Hub",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient ",
      },
      {
        name: "Next.js",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
    ],
    image: carhub,
    source_code_link: "https://github.com/HaiNguyenDuy123/Car_Rent.git",
  },
  {
    name: "Weather_app",
    description:
      "This project utilizes HTML, CSS, and JavaScript to create a weather forecasting website. I fetch current weather data from the Fess API and display weather.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: weather_app,
    source_code_link: "https://github.com/HaiNguyenDuy123/Weather_app/tree/main",
  },
  
];

export { services, technologies, experiences, testimonials, projects };