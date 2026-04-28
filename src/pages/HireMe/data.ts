export const CAPABILITIES = [
  {
    icon: "[architecture]",
    title: "Scalable Structure",
    desc: "Structure applications for scalability, maintainability, and performance.",
  },
  {
    icon: "[apps]",
    title: "Mobile & Web Applications",
    desc: "Build mobile and web applications with complex state and role-based logic using React, React Native, and TypeScript.",
  },
  {
    icon: "[api]",
    title: "Backend Systems",
    desc: "Design and implement backend services using Node.js and GraphQL.",
  },
  {
    icon: "[workers]",
    title: "Background Processing",
    desc: "Process large datasets using parallel workers and background jobs.",
  },
  {
    icon: "[cloud]",
    title: "Cloud-Native Deployments",
    desc: "Deploy and manage cloud-native applications with Google Cloud Run.",
  },
] as const;

export const MINDSET = [
  {
    num: "01",
    strong: "I design systems before writing code.",
    text: "Architecture comes first so implementation stays clear and maintainable.",
  },
  {
    num: "02",
    strong: "I prioritize long-term maintainability.",
    text: "I avoid short-term hacks in favor of solutions that support growth.",
  },
  {
    num: "03",
    strong: "I focus on real-world usage.",
    text: "I optimize for practical reliability, not technical demos.",
  },
  {
    num: "04",
    strong: "I keep solutions simple, but scalable.",
    text: "Clear systems beat clever abstractions when products evolve.",
  },
] as const;

export const EXPERIENCE = [
  {
    role: "Full-Stack Developer",
    company: "AOMVSR a.s.",
    location: "Slovakia – Bratislava",
    date: "Oct. 2022 – Apr. 2024",
    bullets: [
      "Developed a nationwide firefighter management platform using React, Node.js, and Sequelize.",
      "Designed features to streamline firefighter registration and data management, reducing administrative workload by X%.",
      "Improved platform scalability and security, ensuring compliance with government IT standards.",
    ],
  },
  {
    role: "Full-Stack Developer (Freelance)",
    company: "Summer Bash",
    location: "Belgium – Antwerp",
    date: "Apr. 2024 – Now",
    bullets: [
      "Continued in a similar role, working with React, Node.js, and related technologies.",
      "Took primary responsibility for developing a management dashboard (CMS), mobile applications, and websites for internal and external use.",
      "Drove the implementation of new features to digitize and automate manual tasks, and overhauled key processes (e.g., booking flow, traveller account) to align with new interfaces.",
    ],
  },
] as const;

export const STACK_GROUPS = [
  {
    label: "Frontend",
    items: [
      "TypeScript",
      "React Native",
      "Expo",
      "Styled Components",
      "React",
      "Modern JavaScript",
    ],
  },
  {
    label: "Backend",
    items: [
      "Node.js",
      "Express",
      "Jest",
      "Sequelize",
      "GraphQL",
      "Redis",
      "Postgres",
      "TypeORM",
      "MongoDB",
      "MariaDB",
    ],
  },
  {
    label: "DevOps / Cloud",
    items: [
      "Google Cloud Platform (GCP)",
      "Google Cloud Run",
      "Ansible",
      "Git",
      "CI/CD",
      "Scaling",
    ],
  },
  {
    label: "Processing",
    items: [
      "Worker threads",
      "Pub/Sub",
      "Background job handling",
      "CRON jobs",
      "WebSockets",
    ],
  },
  {
    label: "Currently exploring",
    items: ["AWS", "Lambda", "CDK", "API Gateway", "DynamoDB"],
  },
] as const;

export const WIP_ITEMS = [
  {
    badge: "Active",
    title: "Rental platform (multi-role mobile app)",
    text: "Finalising beta version for testing release to improve flow and features based on user input; expanding role-based product flows and backend support.",
  },
  {
    badge: "Planned",
    title: "Mobile solutions for small businesses",
    text: "Focusing on offering mobile application solutions to smaller businesses to help improve their client handling and engagement.",
  },
] as const;
