export const name = "Niklas Franz";

export const heroDescription =
  "a software developer with strong roots in IT administration, systems architecture, DevOps, and secure on-premise infrastructure for research-driven applications.";

export const coreSkills = [
  {
    title: "IT Administration",
    iconPaths: [
      "M3.5 6.5A2.5 2.5 0 0 1 6 4h12a2.5 2.5 0 0 1 2.5 2.5v7A2.5 2.5 0 0 1 18 16H6a2.5 2.5 0 0 1-2.5-2.5v-7Z",
      "M9 20h6",
      "M12 16v4",
      "m4.5 11 2.3 2.3 4.4-4.4",
    ],
    points: [
      "Hardware-Beschaffung und Einrichtung von IT-Arbeitsplaetzen (Laptops, KVM, Konferenztechnik).",
      "Betreuung von Veranstaltungsraum mit PA-Technik und Fotostudio.",
      "First-Level Support ueber Ticketsystem mit starkem Fokus auf schnellen Self-Support (Layer 0).",
      "Groupware-Verwaltung (On-Premise HCL Notes, Private-Cloud Filesharing, Nutzer- und Rechteverwaltung, SSO).",
    ],
  },
  {
    title: "Software Development",
    iconPaths: ["M8 8 4 12l4 4", "m16 8 4 4-4 4", "m14.5 4-5 16"],
    points: [
      "Entwicklung datengetriebener Webanwendungen in Forschungsprojekten.",
      "Frontend-Modernisierung von Django auf Vue.js in einer Live-Audience-Interaction-Software.",
      "Entwicklung von Anwendungen wie Check-In-Kiosk und Andon Board 4.0 fuer Lernfabrik-Umgebungen.",
    ],
  },
  {
    title: "Software Architecture",
    iconPaths: [
      "M4 6h6v4H4z",
      "M14 6h6v4h-6z",
      "M9 14h6v4H9z",
      "M10 8h4M17 10v4M7 10v4M12 10v4",
    ],
    points: [
      "Umbau bestehender Backends und Anpassung gewachsener Systemlandschaften in Forschung und Lehre.",
      "Strukturierung von Services fuer Lehrstuhl und Forschungsprojekte (CRM, Kollaboration, CI/CD, Cloud-Tools).",
      "Vernetzung von Forschungsdesign, Anwendung und Datenerhebung im End-to-End Betrieb.",
    ],
  },
  {
    title: "DevOps & Containerization",
    iconPaths: [
      "m7 8-3 4 3 4",
      "m17 16 3-4-3-4",
      "M7 12h10",
      "M4 4h16v5H4z",
      "M4 15h16v5H4z",
    ],
    points: [
      "Betrieb von GitLab inklusive CI/CD Pipelines und Runner.",
      "Containerisierung mit Docker Compose und cloud-nativen Docker-Workflows.",
      "Anpassung und Weiterentwicklung bestehender DevOps-Architekturen in laufenden Projekten.",
    ],
  },
  {
    title: "Security & Infrastructure",
    iconPaths: [
      "M12 3 5.5 5v5.8A8.4 8.4 0 0 0 12 21a8.4 8.4 0 0 0-5.5-7.2V8L12 3Z",
      "m8.7 12.4 2.1 2.1 4.5-4.5",
    ],
    points: [
      "Server-Administration (HCL Domino, Nextcloud + OnlyOffice, CRM, Trello-Klon) inklusive Domains, DNS und Zertifikaten.",
      "Security-Hardening (Kernel/Pakete aktuell halten, SSH-Zugaenge, Firewall, TLS).",
      "On-Premise Rechenzentrumsbetrieb mit vSphere-Cluster, SAN, Backups (Veeam, Tape), Strom- und Netzwerkinfrastruktur (VLANs, Ubiquiti).",
    ],
  },
];

export const tools = [
  // web frameworks and languages
  { name: "Vue.js", icon: "vuedotjs", color: "#4FC08D", link: "https://vuejs.org/" },
  { name: "TypeScript", icon: "typescript", color: "#3178C6", link: "https://www.typescriptlang.org/" },
  { name: "Tailwind CSS", icon: "tailwindcss", color: "#06B6D4", link: "https://tailwindcss.com/" },
  { name: "shadcn/ui", icon: "shadcnui", color: "#000000", link: "https://ui.shadcn.com/" },
  { name: "Figma", icon: "figma", color: "#F24E1E", link: "https://www.figma.com/" },
  { name: "Django", icon: "django", color: "#092E20", link: "https://www.djangoproject.com/" },
  { name: "Express.js", icon: "express", color: "#000000", link: "https://expressjs.com/" },
  { name: "React", icon: "react", color: "#61DAFB", link: "https://react.dev/" },
  { name: "PHP", icon: "php", color: "#777BB4", link: "https://www.php.net/" },
  { name: "Sequelize", icon: "sequelize", color: "#52B0E7", link: "https://sequelize.org/" },
  // infrastrcture and architecture 
  { name: "Linux", icon: "linux", color: "#000000", link: "https://www.kernel.org/" },
  { name: "macOS", icon: "apple", color: "#000000", link: "https://www.apple.com/macos/" },
  { name: "Docker", icon: "docker", color: "#2496ED", link: "https://www.docker.com/" },
  { name: "GitLab CI/CD", icon: "gitlab", color: "#FC6D26", link: "https://docs.gitlab.com/ee/ci/" },
  { name: "vSphere", icon: "vmware", color: "#607078", link: "https://www.vmware.com/products/cloud-infrastructure/vsphere.html" },
  // other languages and frameworks
  { name: "Python", icon: "python", color: "#3776AB", link: "https://www.python.org/" },
  { name: "R", icon: "r", color: "#276DC3", link: "https://www.r-project.org/" },
  { name: "C#", icon: "csharp", color: "#512BD4", link: "https://dotnet.microsoft.com/en-us/languages/csharp" },
  { name: "Unity", icon: "unity", color: "#000000", link: "https://unity.com/" },
  { name: "AR/VR", icon: "meta", color: "#0467DF", link: "https://www.meta.com/quest/quest-3/" },
  // groupware
  { name: "M365", icon: "microsoftoffice", color: "#D83B01", link: "https://www.microsoft.com/microsoft-365" },
  { name: "HCL Notes", icon: "hcl", color: "#0066B3", link: "https://www.hcl-software.com/notes" },
  { name: "Nextcloud", icon: "nextcloud", color: "#0082C9", link: "https://nextcloud.com/" },
  { name: "OnlyOffice", icon: "onlyoffice", color: "#444444", link: "https://www.onlyoffice.com/" },
  // network stack
  { name: "SSL/TLS", icon: "openssl", color: "#721412", link: "https://www.openssl.org/" },
  // { name: "Firewall", icon: "fortinet", color: "#EE3124" },
  { name: "DNS", icon: "nextdns", color: "#007BFF", link: "https://nextdns.io/" },
  { name: "SSO", icon: "keycloak", color: "#4D4D4D", link: "https://www.keycloak.org/" },
];

export const projects = [
  {
    title: "Bachelorarbeit",
    logoPaths: ["M12 3v18", "M7 8h10", "M7 16h10", "M5 12h14"],
    description:
      "Entwicklung eines Forschungsinstruments zur Untersuchung von KI-Transparenz und Autonomie auf Vertrauen und Frustration in einer Industrie-4.0-Prozesssimulation als Webapp. Forschungsdesign, Entwicklung, Docker-Deployment und SSL-Security lagen vollstaendig in meiner Verantwortung.",
    tags: [
      "Research Design",
      "Web Development",
      "Docker",
      "SSL/TLS",
      "Data Collection",
      "System Architecture",
    ],
  },
  {
    title: "HQA - Forschungsgruppe Wissen, Lernen, Weiterbildung",
    logoPaths: ["M4 5h16v14H4z", "M8 9h8", "M8 13h8", "M12 5v14"],
    description:
      "Transformation und Neuaufbau einer Live-Audience-Interaction-Software mit Modernisierung von Django-Frontend auf Vue.js und Umbau der bestehenden Backend-Infrastruktur. Ich habe sowohl Entwicklung als auch DevOps verantwortet.",
    tags: [
      "Vue.js",
      "Django",
      "Frontend Migration",
      "Backend Refactoring",
      "DevOps",
      "Team Lead",
    ],
  },
  {
    title: "Industrial Transformation Lab",
    logoPaths: ["M4 18h16", "M7 18V8l5-4 5 4v10", "M10 12h4", "M10 15h4"],
    description:
      "Simulation und Untersuchung von Produktionsprozessen in einem Industrie-4.0-Lernfabrik-Labor mit Entwicklung eines Andon Boards 4.0 und einer Check-In-Kiosk-Anwendung. Monolithische Services wurden in cloud-native Docker-Container ueberfuehrt und die DevOps-Architektur angepasst.",
    tags: [
      "Industry 4.0",
      "Docker",
      "Microservices",
      "DevOps Architecture",
      "Infrastructure Admin",
      "Kiosk App",
    ],
  },
  {
    title: "Praktikum im Human Augmented Learning Lab (HALL)",
    logoPaths: [
      "M3.5 11.5C3.5 8 7 5.5 12 5.5s8.5 2.5 8.5 6c0 3.5-3.5 6-8.5 6s-8.5-2.5-8.5-6Z",
      "M7 11.5h2.5",
      "M14.5 11.5H17",
      "M10 11.5h4",
    ],
    description:
      "Konzipierung und Durchfuehrung einer Lehrveranstaltung sowie Entwicklung von AR/VR-Applikationen fuer Apple Vision Pro, Meta Quest 3 und Microsoft HoloLens 2. Zusaetzlich habe ich einen Digital Twin der Lernfabrik gestaltet und umgesetzt.",
    tags: [
      "AR/VR",
      "Apple Vision Pro",
      "Meta Quest 3",
      "HoloLens 2",
      "Digital Twin",
      "Education",
    ],
  },
];

export const contactLinks = [
  {
    label: "Email",
    title: "Drop me a line",
    description: "hello@niklasfranz.de",
    icon: "gmail",
    href: "mailto:hello@niklasfranz.de?subject=Hello%20Niklas",
    color: "#EA4335",
  },
  {
    label: "LinkedIn",
    title: "Let us connect",
    description: "Professional profile and networking",
    icon: "linkedin",
    color: "#0A66C2",
    href: "https://www.linkedin.com/in/your-profile",
  },
  {
    label: "GitHub",
    title: "See my repositories",
    description: "Code, experiments, and project history",
    icon: "github",
    color: "#181717",
    href: "https://github.com/nifranz",
  },
];

export const footerLegalLinks = [
  {
    label: "Imprint",
    href: "mailto:your.email@example.com?subject=Imprint%20Request",
  },
  {
    label: "Privacy",
    href: "mailto:your.email@example.com?subject=Privacy%20Request",
  },
  {
    label: "Legal Inquiries",
    href: "mailto:your.email@example.com?subject=Legal%20Inquiry",
  },
];

export const footerSitemapLinks = [
  { label: "Home", href: "#hero" },
  { label: "Expertise", href: "#expertise" },
  { label: "Tools", href: "#tools" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
