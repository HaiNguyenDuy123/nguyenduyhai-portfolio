import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  utehy,
  tesla,
  shopify,
  carhub,
  jobit,
  Ecommerce_admin,
  ecommerce,
  threejs,
  profile,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Python Developer",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
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
    title_companny: "Nhat Minh Telecommunications Electric Production Business Company Limited",
    company_name: "Nhat Minh Telecommunications Electric Production Business Company Limited",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "August 2022 - November 2022",
    points: [
      "Building User Interfaces (UI/UX): I have been tasked with developing the user interfaces of websites or applications. Using HTML, CSS, and JavaScript to create appealing and user-friendly interfaces.",
      "Server-side Functionality Development: I have been involved in developing server-side processing logic of applications, including writing programming code in languages like Node.js, Python.",
      "Database Integration: I have learned how to interact with databases by executing queries, updates, and data storage.",
      "Learning and Researching New Technologies: I have had the opportunity to learn and research the latest technologies and frameworks in the field of web development.",
    ],
  },
  {
    title_companny: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title_companny: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
      "I've never met a web developer who truly cares about their clients' success like Hai does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://static.vecteezy.com/system/resources/previews/002/002/403/original/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
  },
  {
    testimonial:
      "After Hai optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
  },
];

const projects = [
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
    image: jobit,
    source_code_link: "https://github.com/HaiNguyenDuy123/Weather_app/tree/main",
  },
  
];

export { services, technologies, experiences, testimonials, projects };