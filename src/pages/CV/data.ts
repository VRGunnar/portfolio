export const CV_CONTACT = {
  email: "contact.gunnar.digital@gmail.com",
  phone: "+32 478 05 05 80",
  website: "https://gunnar.digital",
  github: "https://github.com/VRGunnar",
  linkedin: "https://www.linkedin.com/in/gunnar-van-remoortere-ab1267171/",
  location: "Slovakia, Bratislava",
} as const;

export const CV_KEY_TECH = [
  "Node.js",
  "React Native",
  "GraphQL",
  "TypeScript",
  "Cloud Systems",
] as const;

export const CV_EXPERIENCE = [
  {
    company: "Summer Bash",
    role: "Full-Stack Developer (Freelancer since 2025)",
    location: "Belgium - Antwerp",
    date: "Apr. 2024 - Present",
    summary:
      "Leading full-stack feature delivery across traveller-facing apps and internal tooling while improving scalability of booking and communication flows.",
  },
  {
    company: "AOMVSR a.s.",
    role: "Full-Stack Developer",
    location: "Slovakia - Bratislava",
    date: "Oct. 2022 - Apr. 2024",
    summary:
      "Developed a nationwide firefighter management platform with React, Node.js, and Sequelize, improving operational workflows while meeting government IT standards.",
  },
] as const;

export const SUMMER_BASH_PROJECTS = [
  {
    title: "Multi-repo Automated Email System",
    description:
      "Built scalable email automation with Pub/Sub architecture and cron jobs, coordinating cross-repository communication for event-driven notifications.",
    stack: ["Node.js", "Pub/Sub", "Cloud Scheduler", "GCP"],
  },
  {
    title: "High-Performance Booking Processor",
    description:
      "Implemented worker-thread based processing to handle high-volume booking operations and improved concurrent request handling for peak traffic.",
    stack: ["Node.js", "Worker Threads", "PostgreSQL", "Redis"],
  },
  {
    title: "Traveller Mobile Application",
    description:
      "Developed a full-featured mobile app for trip management with integrated payment flows and secure checkout handling.",
    stack: ["React Native", "Expo Router", "GraphQL", "Payments"],
  },
  {
    title: "Booking Flow Redesign",
    description:
      "Rebuilt the booking flow based on professional UI/UX redesign, modernizing traveller account management and improving conversion pathways.",
    stack: ["React", "TypeScript", "Design System"],
  },
  {
    title: "Data Flow Infrastructure",
    description:
      "Designed and implemented processing pipelines for plane and bus ticket assignment systems with near real-time availability updates.",
    stack: ["Cloud Functions", "Pub/Sub", "PostgreSQL"],
  },
  {
    title: "CMS & Internal Tools",
    description:
      "Contributed to management dashboard development and digitized manual operational tasks through targeted internal tooling.",
    stack: ["React", "Node.js", "GraphQL"],
  },
] as const;

export const CV_SKILLS = {
  Frontend: [
    "TypeScript",
    "React",
    "React Native",
    "Expo Router",
    "Styled Components",
  ],
  Backend: [
    "Node.js",
    "Express",
    "GraphQL",
    "Sequelize",
    "TypeORM",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Jest",
  ],
  Cloud: [
    "Google Cloud Platform",
    "Cloud Run",
    "Cloud Functions",
    "Pub/Sub",
    "Cloud Scheduler",
    "Serverless",
  ],
  Architecture: [
    "Background Jobs",
    "Worker Threads",
    "Pub/Sub Messaging",
    "API-driven Architectures",
    "Scalable Systems",
    "Automation",
  ],
} as const;

export const CV_EDUCATION = [
  {
    title: "Thomas More University",
    subtitle: "Bachelor in Software Development",
    locationDate: "Belgium - Mechelen - 2019 - 2022",
    description:
      "Studied software development with a focus on modern web frameworks and digital product design, alongside SEO and usability best practices.",
  },
  {
    title: "Internship - PixelLab",
    subtitle: "Web Development Internship",
    locationDate: "Belgium - Brugge - 2021 - 2022",
    description:
      "Completed a three-month internship focused on Ruby on Rails and practical software delivery in a professional product team environment.",
  },
] as const;

export const CV_LANGUAGES = [
  { name: "Dutch", level: "C2 (Native)" },
  { name: "English", level: "C2 (Fluent)" },
  { name: "French", level: "B1 (Intermediate)" },
  { name: "Slovak", level: "Starter - Learning" },
] as const;

export const CV_ADDITIONAL_INFO = [
  { label: "Work authorization", value: "EU citizen, Belgian nationality" },
  { label: "Work model", value: "Remote / Hybrid preferred" },
  { label: "Employment type", value: "Freelance / Full-time" },
  { label: "Driver's license", value: "B" },
] as const;
