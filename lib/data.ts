// ============================================================
// lib/data.ts — All portfolio content in one place
// Replace placeholder URLs with your actual links before deploy
// ============================================================


export const PERSONAL = {
  name: "Kashif Ahmad",
  title: "MERN Stack Developer",
  tagline:
    "Building Scalable MERN Stack Applications & Solving Real-World Problems with AI-Powered Development",
  bio: `I am a passionate developer focused on building practical web applications that solve real
business problems. My journey started with frontend development using React.js and gradually
expanded into full-stack development with Node.js, Express.js, and MongoDB.

Rather than only creating portfolio demos, I enjoy building systems that involve authentication,
dashboards, data management, API integration, and deployment. I also actively adopt AI tools
to improve productivity and deliver features faster.`,
  location: "Lahore, Punjab, Pakistan",
  email: "17kashifahmad@gmail.com",
  github: "https://github.com/KashifAhmad-786",         // ← Replace with your link
  linkedin: "https://www.linkedin.com/in/muhammad-kashif167",  // ← Replace with your link
  resumePdf: "/resume.pdf",                          // ← Place resume.pdf in /public
  avatar: "/kashif.jpeg",                             // ← Place avatar.jpg in /public
  openTo: ["Remote", "On-site", "Internship", "Full-Time"],
  willingToRelocate: true,
  responseTime: "Within 24 hours",
  availableNow: true,
  phone: "+923019418167",
};

export const METRICS = [
  { value: "10+", label: "Real-World Projects" },
  { value: "2+", label: "Years Experience" },
  { value: "10+", label: "Deployed Apps" },
  { value: "100%", label: "On-site Ready" },
];

export const CAREER_PATH = [
  "Frontend",
  "React.js",
  "Next.js",
  "Backend",
  "MERN Stack",
  "AI Integration",
];

export const EDUCATION = {
  degree: "BS Computer Science",
  university: "Islamia University of Bahawalpur",
  status: "Graduate",
  year: "2026",
};

export const ABOUT_ACHIEVEMENTS = [
  { icon: "🚀", value: "10+", label: "Real-Time Projects Deployed" },
  { icon: "🏗️", value: "10+", label: "Complete Real Time Apps" },
  { icon: "🔐", value: "5+", label: "Auth Flows & Admin Panels Built" },
  { icon: "🤖", value: "Daily", label: "AI Tools in Workflow" },
];

export const SKILLS = [
  {
    category: "Frontend",
    icon: "🎨",
    color: "from-violet-500 to-purple-600",
    items: [
      "React.js",
      "Next.js",
      "JavaScript (ES6+)",
      "HTML5 / CSS3",
      "Tailwind CSS",
      "Responsive Design",
      "React Router",
      "Context API",
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    color: "from-cyan-500 to-blue-600",
    items: [
      "Node.js",
      "Express.js",
      "REST API Development",
      "Authentication & Authorization",
      "Middleware Architecture",
      "Error Handling",
    ],
  },
  {
    category: "Database",
    icon: "🗄️",
    color: "from-emerald-500 to-teal-600",
    items: ["MongoDB", "MongoDB Atlas", "Mongoose", "MySQL (Basic)"],
  },
  {
    category: "Tools & Deploy",
    icon: "🚀",
    color: "from-orange-500 to-red-500",
    items: [
      "Git / GitHub",
      "Vercel",
      "VS Code",
      "Postman",
      "Docker (Learning)",
      "Cloudinary",
      "UploadThing",
    ],
  },
  {
    category: "AI & Productivity",
    icon: "🤖",
    color: "from-pink-500 to-rose-600",
    items: [
      "AI-Assisted Development",
      "Code Generation Workflows",
      "Debugging with AI",
      "Rapid Prototyping",
    ],
  },
  {
    category: "Soft Skills",
    icon: "🧠",
    color: "from-yellow-500 to-amber-600",
    items: [
      "Problem-Solving",
      "Self-Learning",
      "Communication",
      "Team Collaboration",
      "Agile Mindset",
    ],
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Real Estate Rental Web Application",
    role: "Mern Full-Stack Developer",
    // type: "Final Year Project",
    featured: true,
    // status: "deployed",
    image: "/projects/real-estate.png",   // ← Add screenshot here
    problem:
      "Users needed a platform to browse rental and sale properties, while admins required a system to manage listings, agents, and users.",
    solution: [
      "User registration & secure login",
      "Property search & advanced filtering",
      "Agent & property management system",
      "Full admin dashboard with analytics",
      "Fully responsive mobile-first design",
      "MongoDB Atlas cloud integration",
    ],
    outcome:
      "Complete end-to-end MERN application demonstrating authentication, CRUD operations, and dashboard architecture. Used as Final Year Project.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "Tailwind CSS"],
    github: "https://github.com/KashifAhmad-786/Real-Estate-Rental-Application",  // ← Replace
    demo: "https://real-estate-rental-application-t2fp.vercel.app",                 // ← Replace
  },
 {
  id: 2,
  title: "Company Management System",
  role: "Full Stack MERN Developer",
  type: "Business Management Web App",
  featured: true,
  status: "deployed",
  image: "/projects/company.png", // ← Add screenshot here
  problem:
    "Managing employees, departments, attendance, and company operations manually leads to inefficiency and poor data management.",
  solution: [
    "Role-based authentication and authorization",
    "Employee and department management",
    "Attendance and leave management",
    "Dashboard with real-time company statistics",
    "Secure CRUD operations with REST APIs",
  ],
  outcome:
    "Built a scalable MERN Stack application that streamlines company operations through a centralized dashboard, secure authentication, and efficient employee management.",
  tech: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "JWT",
  ],
  github: "https://github.com/KashifAhmad-786/Company_Management_System",
  demo: "https://company-management-system-mu.vercel.app",
},
  {
    id: 3,
    title: "Food Ordering Web Application",
    role: "MERN Stack Developer",
    type: "Full-Stack App",
    featured: true,
    status: "deployed",
    image: "/projects/store.webp", // ← Add screenshot here
    problem:
      "Restaurants need a simple, intuitive online ordering system without complexity.",
    solution: [
      "Product/menu listing with categories",
      "Shopping cart with quantity management",
      "Order tracking & management",
      "Full backend REST API integration",
    ],
    outcome:
      "Practiced complete full-stack MERN workflow. Implemented reusable components and clean API architecture.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/KashifAhmad-786/frontend-groceryStore", // ← Replace
    demo: "https://frontend-grocery-store-two.vercel.app",               // ← Replace
  },
  {
    id: 4,
    title: "E-Commerce Store",
    role: "Frontend Developer",
    type: "E-Commerce",
    featured: false,
    status: "deployed",
    image: "/projects/ecommerce.webp",     // ← Add screenshot here
    problem: "Building a complete e-commerce shopping experience with cart and API integration.",
    solution: [
      "Product listing & detail pages",
      "Shopping cart & checkout flow",
      "API-driven product data",
      "Responsive mobile-first UI",
    ],
    outcome: "Demonstrated strong frontend skills with real-world e-commerce UX patterns.",
    tech: ["React.js", "Tailwind CSS", "API Integration"],
    github: "https://github.com/KashifAhmad-786/Ecommerce-garment-shop",   // ← Replace
    demo: "https://ecommerce-garment-shop.vercel.app",                  // ← Replace
  },
  {
    id: 5,
    title: "Core Banking System",
    role: "System Designer / MERN Developer",
    type: "Enterprise App",
    featured: false,
    status: "inprogress",
    image: "/projects/bank.png",       // ← Add screenshot when ready
    problem: "Designing a scalable modular banking architecture for real-world financial operations.",
    solution: [
      "Modular MERN architecture design",
      "Docker containerization",
      "Accounts, transactions & ledger modules",
      "Secure auth & role-based access",
    ],
    outcome: "Currently in active development. Pushing boundaries with enterprise-grade system design.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Docker"],
    github: "",
    demo: "",
  },
];

export const EXPERIENCE = [
  {
    role: "Freelance MERN Stack Developer",
    company: "Self-Employed",
    type: "Freelance",
    period: "2024 – Present",
    current: true,
    icon: "💼",
    color: "from-violet-500 to-purple-600",
    responsibilities: [
      "Develop responsive React.js and Next.js interfaces for clients",
      "Integrate REST APIs with frontend applications",
      "Build authentication systems and admin dashboards",
      "Deploy projects on cloud hosting platforms (Vercel, etc.)",
      "Collaborate with clients on feature requirements and bug fixes",
    ],
    achievements: [
      "Delivered multiple freelance web solutions",
      "Built reusable React component libraries",
    ],
  },
  {
    role: "React.js Frontend Developer Intern",
    company: "Zamionic Forge",
    type: "Internship",
    period: "2026",
    current: false,
    icon: "🏢",
    color: "from-cyan-500 to-blue-600",
    responsibilities: [
      "Worked on React.js frontend tasks and component development",
      "Participated in code reviews and mentorship sessions",
      "Improved UI responsiveness and user experience",
      "Followed Git/GitHub-based team workflow",
    ],
    achievements: [
      "Gained production-style workflow experience",
      "Improved team collaboration & code review skills",
    ],
  },
];

export const LEARNING = [
  {
    title: "Advanced React.js Patterns",
    icon: "⚛️",
    status: "active",
    description: "Custom hooks, compound components, render props, and performance optimization.",
  },
  {
    title: "Next.js App Router",
    icon: "▲",
    status: "active",
    description: "Server components, streaming, parallel routes, and the new data fetching paradigm.",
  },
  {
    title: "Node.js Backend Architecture",
    icon: "🟢",
    status: "active",
    description: "Scalable API design, microservices patterns, and production-grade error handling.",
  },
  {
    title: "MongoDB Performance & Schema Design",
    icon: "🍃",
    status: "active",
    description: "Indexing strategies, aggregation pipelines, and optimized schema patterns.",
  },
  {
    title: "Authentication & Security",
    icon: "🔐",
    status: "active",
    description: "JWT, OAuth 2.0, session management, and web security best practices.",
  },
  {
    title: "Docker & DevOps",
    icon: "🐳",
    status: "learning",
    description: "Containerization, Docker Compose, and CI/CD pipeline fundamentals.",
  },
  {
    title: "AI Integration in Web Apps",
    icon: "🤖",
    status: "active",
    description: "Integrating LLM APIs, prompt engineering, and AI-enhanced UX patterns.",
  },
  {
    title: "System Design",
    icon: "🏗️",
    status: "learning",
    description: "Scalability fundamentals, CAP theorem, database sharding, and caching strategies.",
  },
];

export const RESUME_SKILLS = [
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "RESTful APIs",
  "API Design",
  "Responsive Design",
  "MongoDB / Atlas",
  "Tailwind CSS",
  "REST APIs",
  "Authentication",
  "Git / GitHub",
  "Database Design",
  "Problem Solving",
  "AI Integration",
  "Vercel",
  "Hostinger",
];

export const SEO = {
  title: "Kashif Ahmad | MERN Developer",
  description:
    "Kashif Ahmad is a MERN Stack Developer from Bahawalpur, Pakistan specializing in React.js, Next.js, Node.js, Express.js, and MongoDB. Available for remote, internship, and full-time opportunities.",
  keywords:
    "MERN Stack Developer Pakistan, React.js Developer, Next.js Developer, Full Stack JavaScript Developer, Node.js Developer, MongoDB Atlas, Tailwind CSS, REST API Developer, AI Web Integration, Freelance MERN Developer, Remote Developer Pakistan",
  url: "https://kashifahmad.vercel.app", // ← Update with your actual domain
  ogImage: "/og-image.png",
};
