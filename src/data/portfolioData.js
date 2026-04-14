export const name = "Niklas Franz";

export const heroDescription =
  "a final-year IT student who builds Vue 3 web applications and manages Linux server infrastructure. I take full ownership of assigned projects — from scoping and development to Docker deployment and production.";

export const heroStatus =
  "Open to full-time roles in web development or DevOps · Berlin & remote";

export const coreSkills = [
  {
    title: "Web Development",
    iconPaths: ["M8 8 4 12l4 4", "m16 8 4 4-4 4", "m14.5 4-5 16"],
    points: [
      "Built Vue 3 SPAs with TypeScript and Tailwind CSS, serving ~15 researchers and staff at a university research group.",
      "Migrated a live audience-interaction platform from a Django-rendered frontend to a Vue.js SPA — sole developer on this project, now serving ~200 weekly users.",
      "Designed and integrated REST APIs between Vue frontends and Django/Express backends across multiple research tools.",
      "Developed a Check-In Kiosk and Andon Board 4.0 for an Industry 4.0 learning factory, taking full ownership from spec to deployment.",
    ],
  },
  {
    title: "IT Administration",
    iconPaths: [
      "M3.5 6.5A2.5 2.5 0 0 1 6 4h12a2.5 2.5 0 0 1 2.5 2.5v7A2.5 2.5 0 0 1 18 16H6a2.5 2.5 0 0 1-2.5-2.5v-7Z",
      "M9 20h6",
      "M12 16v4",
      "m4.5 11 2.3 2.3 4.4-4.4",
    ],
    points: [
      "Provisioned and configured workstations, KVM switches, and conference AV equipment for a ~15-person research group.",
      "Managed first-level support via ticket system with emphasis on documented self-service guides, reducing repeat requests significantly.",
      "Administered groupware infrastructure including on-premise HCL Notes, Nextcloud file sharing, user access control, and SSO.",
    ],
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
    points: [
      "Operated a self-hosted GitLab instance with CI/CD pipelines and runners for internal project deployments.",
      "Containerized legacy monolithic services with Docker Compose, reducing multi-hour manual deployments to single-command startup.",
      "Administered on-premise servers — HCL Domino, Nextcloud + OnlyOffice, CRM — covering domains, DNS, TLS certificates, and firewall rules.",
      "Maintained a data centre with vSphere cluster, SAN, and Veeam backup to tape, plus VLAN segmentation via Ubiquiti.",
    ],
  },
  {
    title: "Security & Server Hardening",
    iconPaths: [
      "M12 3 5.5 5v5.8A8.4 8.4 0 0 0 12 21a8.4 8.4 0 0 0-5.5-7.2V8L12 3Z",
      "m8.7 12.4 2.1 2.1 4.5-4.5",
    ],
    points: [
      "Hardened Linux servers by enforcing TLS across all services, locking down SSH access, and maintaining a regular kernel/package update schedule.",
      "Configured and managed firewalls and VLAN segmentation to isolate services across a multi-tenant research environment.",
      "Audited and managed SSO and user permission structures to enforce least-privilege access across the research group's tooling.",
    ],
  },
];

export const tools = [
  // Row 1 — core languages & frameworks
  { name: "Vue.js", icon: "vuedotjs", color: "#4FC08D", link: "https://vuejs.org/" },
  { name: "TypeScript", icon: "typescript", color: "#3178C6", link: "https://www.typescriptlang.org/" },
  { name: "Python", icon: "python", color: "#3776AB", link: "https://www.python.org/" },
  { name: "Django", icon: "django", color: "#092E20", link: "https://www.djangoproject.com/" },
  { name: "Tailwind CSS", icon: "tailwindcss", color: "#06B6D4", link: "https://tailwindcss.com/" },
  { name: "Express.js", icon: "express", color: "#000000", link: "https://expressjs.com/" },
  { name: "shadcn/ui", icon: "shadcnui", color: "#000000", link: "https://ui.shadcn.com/" },
  // Row 2 — infrastructure & DevOps
  { name: "Linux", icon: "linux", color: "#000000", link: "https://www.kernel.org/" },
  { name: "Docker", icon: "docker", color: "#2496ED", link: "https://www.docker.com/" },
  { name: "GitLab CI/CD", icon: "gitlab", color: "#FC6D26", link: "https://docs.gitlab.com/ee/ci/" },
  { name: "Nextcloud", icon: "nextcloud", color: "#0082C9", link: "https://nextcloud.com/" },
  { name: "vSphere", icon: "vmware", color: "#607078", link: "https://www.vmware.com/products/cloud-infrastructure/vsphere.html" },
  { name: "SSL/TLS", icon: "openssl", color: "#721412", link: "https://www.openssl.org/" },
  { name: "SSO", icon: "keycloak", color: "#4D4D4D", link: "https://www.keycloak.org/" },
  // Row 3 — databases & secondary tooling
  { name: "React", icon: "react", color: "#61DAFB", link: "https://react.dev/" },
  { name: "PHP", icon: "php", color: "#777BB4", link: "https://www.php.net/" },
  { name: "Sequelize", icon: "sequelize", color: "#52B0E7", link: "https://sequelize.org/" },
  { name: "Figma", icon: "figma", color: "#F24E1E", link: "https://www.figma.com/" },
  { name: "M365", icon: "microsoftoffice", color: "#D83B01", link: "https://www.microsoft.com/microsoft-365" },
  { name: "HCL Notes", icon: "hcl", color: "#0066B3", link: "https://www.hcl-software.com/notes" },
  { name: "macOS", icon: "apple", color: "#000000", link: "https://www.apple.com/macos/" },
];

export const projects = [
  {
    title: "Bachelor's Thesis Research Tool",
    date: "2023 – 2024",
    place: "Web Development & Experiment Design",
    logoPaths: ["M12 3v18", "M7 8h10", "M7 16h10", "M5 12h14"],
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
    description:
      "An existing Django-based lecture tool had a tightly coupled, hard-to-maintain frontend that blocked further feature development. I replaced the Django-rendered frontend with a Vue.js SPA backed by the existing Python API, and refactored the backend infrastructure to support the new architecture. I was the sole developer on this project, responsible for both the frontend migration and DevOps — the platform now serves ~200 weekly users across active lectures.",
    tags: [
      "Vue 3",
      "Django",
      "TypeScript",
      "Frontend Migration",
      "REST API",
      "DevOps",
    ],
  },
  {
    title: "Industry 4.0 Lab Applications",
    date: "2025 – present",
    place: "Industrial Transformation Lab",
    logoPaths: ["M4 18h16", "M7 18V8l5-4 5 4v10", "M10 12h4", "M10 15h4"],
    description:
      "The lab's production simulation environment ran on legacy monolithic services that were slow to deploy and difficult to update. I developed an Andon Board 4.0 and a Check-In Kiosk application for the learning factory, and migrated the underlying services from a monolith to Docker-based containers. I had full ownership of this project — application development, containerization, and DevOps architecture updates.",
    tags: [
      "Vue 3",
      "Docker",
      "Docker Compose",
      "DevOps Architecture",
      "REST API",
      "Industry 4.0",
    ],
  },
  {
    title: "XR Application Development & Teaching",
    date: "2024 – 2025",
    place: "Human Augmented Learning Lab",
    logoPaths: [
      "M3.5 11.5C3.5 8 7 5.5 12 5.5s8.5 2.5 8.5 6c0 3.5-3.5 6-8.5 6s-8.5-2.5-8.5-6Z",
      "M7 11.5h2.5",
      "M14.5 11.5H17",
      "M10 11.5h4",
    ],
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
    title: "Personal Portfolio",
    date: "2025",
    place: null,
    logoPaths: ["M4 6h16", "M4 12h16", "M4 18h16"],
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
