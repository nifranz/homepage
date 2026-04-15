export const name = "Niklas Franz";

export const heroDescription =
  "a final-year IT student who builds Vue 3 web applications and manages Linux server infrastructure. I take full ownership of assigned projects — from scoping and development to Docker deployment and production.";

export const heroStatus =
  "Open to full-time roles in web development or DevOps · Berlin & remote";

export const coreSkills = [
  {
    title: "Web Development",
    iconPaths: ["M8 8 4 12l4 4", "m16 8 4 4-4 4", "m14.5 4-5 16"],
    summary: "Building Vue 3 SPAs and REST APIs — from research tools to production platforms serving hundreds of weekly users. Full ownership across all projects, including leading trainees on select engagements.",
    tags: ["Vue 3", "TypeScript", "REST API", "Django"],
  },
  {
    title: "IT Administration",
    iconPaths: [
      "M3.5 6.5A2.5 2.5 0 0 1 6 4h12a2.5 2.5 0 0 1 2.5 2.5v7A2.5 2.5 0 0 1 18 16H6a2.5 2.5 0 0 1-2.5-2.5v-7Z",
      "M9 20h6",
      "M12 16v4",
      "m4.5 11 2.3 2.3 4.4-4.4",
    ],
    summary: "Leading a 2–3 person IT team — provisioning, supporting, and maintaining infrastructure and groupware for a ~25-person university research group.",
    tags: ["Helpdesk", "Nextcloud", "SSO", "HCL Notes"],
  },
  {
    title: "DevOps & Infrastructure",
    iconPaths: [
      "m7 8-3 4 3 4",
      "m17 16 3-4-3-4",
      "M7 12h10",
      "M4 4h16v5H4z",
      "M4 15h16v5H4z",
    ],
    summary: "Containerizing services, running CI/CD pipelines, and administering on-premise servers end to end.",
    tags: ["Docker", "GitLab CI/CD", "Linux", "vSphere"],
  },
];

export const tools = [
  // Frontend
  { category: "Frontend", name: "TypeScript", icon: "typescript", color: "#3178C6", link: "https://www.typescriptlang.org/" },
  { category: "Frontend", name: "Vue.js", icon: "vuedotjs", color: "#4FC08D", link: "https://vuejs.org/" },
  { category: "Frontend", name: "Tailwind CSS", icon: "tailwindcss", color: "#06B6D4", link: "https://tailwindcss.com/" },
  { category: "Frontend", name: "shadcn/ui", icon: "shadcnui", color: "#000000", link: "https://ui.shadcn.com/" },
  // Backend
  { category: "Backend", name: "Python", icon: "python", color: "#3776AB", link: "https://www.python.org/" },
  { category: "Backend", name: "Django", icon: "django", color: "#092E20", link: "https://www.djangoproject.com/" },
  { category: "Backend", name: "Express.js", icon: "express", color: "#000000", link: "https://expressjs.com/" },
  { category: "Backend", name: "Sequelize", icon: "sequelize", color: "#52B0E7", link: "https://sequelize.org/" },
  { category: "Backend", name: "MariaDB", icon: "mariadb", color: "#003545", link: "https://mariadb.org/" },
  { category: "Backend", name: "Node-RED", icon: "nodered", color: "#8F0000", link: "https://nodered.org/" },
  // DevOps
  { category: "DevOps", name: "Linux", icon: "linux", color: "#000000", link: "https://www.kernel.org/" },
  { category: "DevOps", name: "Docker", icon: "docker", color: "#2496ED", link: "https://www.docker.com/" },
  { category: "DevOps", name: "GitLab CI/CD", icon: "gitlab", color: "#FC6D26", link: "https://docs.gitlab.com/ee/ci/" },
  { category: "DevOps", name: "vSphere", icon: "vmware", color: "#607078", link: "https://www.vmware.com/products/cloud-infrastructure/vsphere.html" },
  { category: "DevOps", name: "Proxmox", icon: "proxmox", color: "#E57000", link: "https://www.proxmox.com/" },
  { category: "DevOps", name: "Keycloak", icon: "keycloak", color: "#4D4D4D", link: "https://www.keycloak.org/" },
  // IT Admin
  { category: "IT Admin", name: "M365", icon: "microsoftoffice", color: "#D83B01", link: "https://www.microsoft.com/microsoft-365" },
  { category: "IT Admin", name: "HCL Notes", icon: "hcl", color: "#0066B3", link: "https://www.hcl-software.com/notes" },
  { category: "IT Admin", name: "Nextcloud", icon: "nextcloud", color: "#0082C9", link: "https://nextcloud.com/" },
  { category: "IT Admin", name: "phpMyAdmin", icon: "phpmyadmin", color: "#F89C0E", link: "https://www.phpmyadmin.net/" },
];

export const projects = [
  {
    title: "Bachelor's Thesis Research Tool",
    date: "2023 – 2024",
    place: "Web Development & Experiment Design",
    logoPaths: ["M12 3v18", "M7 8h10", "M7 16h10", "M5 12h14"],
    links: [
      { label: "Download Thesis", href: "/Bachelorthesis_Niklas_Franz.pdf", download: "Bachelorthesis_Niklas_Franz.pdf" },
      { label: "View on GitHub", href: "https://github.com/nifranz/bachelor-thesis" },
    ],
    shortDescription: "A Vue 3 experiment platform simulating industrial AI workflows to study user trust — sole developer from research design to Docker deployment.",
    description:
      "Researchers needed a controlled digital environment to study how AI transparency and autonomy affect user trust in Industry 4.0 workflows. I built a Vue 3 web application that simulated an industrial process, collected behavioral and survey data in real time, and exposed a REST API for results export — deployed via Docker with TLS. I was the sole developer on this project, with full responsibility for research instrument design, frontend and backend development, and production deployment.",
    tags: [
      "Vue 3",
      "REST API",
      "Docker",
      "SSL/TLS",
      "Research Design",
      "Data Collection",
    ],
  },
  {
    title: "Live Audience Interaction Platform",
    date: "2024 – present",
    place: "Web Development & DevOps",
    logoPaths: ["M4 5h16v14H4z", "M8 9h8", "M8 13h8", "M12 5v14"],
    links: [
      { label: "Open Live App", href: "https://quiz.lswi.de/" },
    ],
    shortDescription: "Migrated a Django-rendered lecture tool to a Vue.js SPA — now serving ~200 weekly users across active university lectures.",
    description:
      "An existing Django-based lecture tool had a tightly coupled, hard-to-maintain frontend that blocked further feature development. I replaced the Django-rendered frontend with a Vue.js SPA backed by the existing Python API, and refactored the backend infrastructure to support the new architecture. I was the sole developer on this project, responsible for both the frontend migration and DevOps — the platform now serves ~200 weekly users across active lectures.",
    tags: [
      "Vue 3",
      "Django",
      "Docker",
      "CI/CD Pipeline",
      "TypeScript",
      "Frontend Migration",
      "REST API",
      "DevOps",
    ],
  },
  {
    title: "XR Application Development & Teaching",
    date: "2024 – 2025",
    place: "Human Augmented Learning Lab",
    links: [],
    logoPaths: [
      "M3.5 11.5C3.5 8 7 5.5 12 5.5s8.5 2.5 8.5 6c0 3.5-3.5 6-8.5 6s-8.5-2.5-8.5-6Z",
      "M7 11.5h2.5",
      "M14.5 11.5H17",
      "M10 11.5h4",
    ],
    shortDescription: "Designed and delivered a university XR course and built AR/VR demos for Apple Vision Pro, Meta Quest 3, and HoloLens 2.",
    description:
      "The lab needed practical XR course content and working application demos for three different headset platforms. I designed and delivered a university-level XR development course, built AR/VR applications for Apple Vision Pro, Meta Quest 3, and HoloLens 2, and created a digital twin of the research group's learning factory. Delivered independently as part of a supervised internship within the lab team.",
    tags: [
      "AR/VR",
      "Apple Vision Pro",
      "Meta Quest 3",
      "HoloLens 2",
      "Digital Twin",
      "Education",
    ],
  },
  {
    title: "Industry 4.0 Lab Applications",
    date: "2025 – present",
    place: "Industrial Transformation Lab",
    logoPaths: ["M4 18h16", "M7 18V8l5-4 5 4v10", "M10 12h4", "M10 15h4"],
    links: [
      { label: "Lab Homepage", href: "https://lswi.de/industrial-transformation-lab" },
    ],
    shortDescription: "Containerized a legacy learning factory environment and built an Andon Board 4.0 with Vue and Node-RED — full ownership from architecture to deployment.",
    description: [
      "The lab's production simulation environment ran on legacy monolithic services that were slow to deploy and difficult to update. I migrated the underlying services from a monolith to Docker-based containers, including the migration of the DNS and many IoT and Industry 4.0 clients. The learning factory also needed a way to communicate the current progress of the simulation process, therefore I developed an Andon Board 4.0 using Vue and NodeRED. I had full ownership of these projects — application development, system architecture, containerization, and DevOps architecture updates.",
      "Beyond my own scope, I mentored junior developers integrating new features and components into the existing architecture — reviewing their work and helping them navigate the codebase independently.",
    ],
    tags: [
      "Vue 3",
      "Docker",
      "NodeRED",
      "DevOps Architecture",
      "REST API",
      "Industry 4.0",
    ],
  },
  {
    title: "Personal Portfolio",
    date: "2025",
    place: null,
    links: [{ label: "View on GitHub", href: "https://github.com/nifranz" }],
    logoPaths: ["M4 6h16", "M4 12h16", "M4 18h16"],
    shortDescription: "Built from scratch with Vue 3, scroll-driven animations, and content structured to show both frontend and infrastructure depth.",
    description:
      "Most portfolio templates look generic and say nothing specific about the person behind them. I built this site from scratch with Vue 3, scroll-driven animations, a custom typed-text effect, and content structured to communicate both frontend and infrastructure depth. Sole developer and designer — built and deployed independently as an open-source project on GitHub.",
    tags: [
      "Vue 3",
      "TypeScript",
      "CSS Animations",
      "Open Source",
    ],
  },
];

export const contactLinks = [
  {
    label: "Email",
    title: "Best way to reach me",
    description: "Best way to reach me for opportunities or project enquiries.",
    icon: "gmail",
    href: "mailto:hello@niklasfranz.de?subject=Hello%20Niklas",
    color: "#EA4335",
  },
  {
    label: "LinkedIn",
    title: "Professional background",
    description: "Work history, skills, and professional background.",
    icon: "linkedin",
    color: "#0A66C2",
    href: "https://www.linkedin.com/in/your-profile",
  },
  {
    label: "GitHub",
    title: "Code & open-source work",
    description: "Open-source projects and code samples, including this portfolio.",
    icon: "github",
    color: "#181717",
    href: "https://github.com/nifranz",
  },
];

export const footerLegalLinks = [
  {
    label: "Imprint",
    href: "mailto:hello@niklasfranz.de?subject=Imprint%20Request",
  },
  {
    label: "Privacy",
    href: "mailto:hello@niklasfranz.de?subject=Privacy%20Request",
  },
  {
    label: "Legal Inquiries",
    href: "mailto:hello@niklasfranz.de?subject=Legal%20Inquiry",
  },
];

export const footerSitemapLinks = [
  { label: "Home", href: "#hero" },
  { label: "Experience", href: "#expertise" },
  { label: "Tools", href: "#tools" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
