<script setup>
import SiteHeader from "./components/SiteHeader.vue";
import HeroSection from "./components/HeroSection.vue";
import ExperienceSection from "./components/ExperienceSection.vue";
import ToolsSection from "./components/ToolsSection.vue";
import ProjectsSection from "./components/ProjectsSection.vue";
import ContactSection from "./components/ContactSection.vue";
import SiteFooter from "./components/SiteFooter.vue";
import ScrollArtifacts from "./components/ScrollArtifacts.vue";
import logoNF from "./img/logo_NF.svg";
import {
  contactLinks,
  coreSkills,
  footerLegalLinks,
  footerSitemapLinks,
  heroDescription,
  name,
  projects,
  tools,
} from "./data/portfolioData";
</script>

<template>
  <div class="page-shell">
    <ScrollArtifacts />
    <div class="page-content">
      <SiteHeader :logo-src="logoNF" />

      <main>
        <HeroSection :name="name" :description="heroDescription" />
        <ExperienceSection :skills="coreSkills" />
        <ToolsSection :tools="tools" />
        <ProjectsSection :projects="projects" />
        <ContactSection :contacts="contactLinks" />
      </main>

      <SiteFooter
        :contact-links="contactLinks"
        :legal-links="footerLegalLinks"
        :sitemap-links="footerSitemapLinks"
      />
    </div>
  </div>
</template>
