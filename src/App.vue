<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import SiteHeader from "./components/SiteHeader.vue";
import HeroSection from "./components/HeroSection.vue";
import ExperienceSection from "./components/ExperienceSection.vue";
import ToolsSection from "./components/ToolsSection.vue";
import ProjectsSection from "./components/ProjectsSection.vue";
import ContactSection from "./components/ContactSection.vue";
import SiteFooter from "./components/SiteFooter.vue";
import ScrollArtifacts from "./components/ScrollArtifacts.vue";
import ImprintPage from "./components/ImprintPage.vue";
import {
  contactLinks,
  coreSkills,
  footerLegalLinks,
  footerSitemapLinks,
  heroDescription,
  heroStatus,
  name,
  projects,
  tools,
} from "./data/portfolioData";

const route = ref(window.location.pathname);

function navigate(path) {
  window.history.pushState(null, "", path);
  route.value = path;
  window.scrollTo({ top: 0, behavior: "instant" });
}

function onPopState() {
  route.value = window.location.pathname;
}

onMounted(() => window.addEventListener("popstate", onPopState));
onUnmounted(() => window.removeEventListener("popstate", onPopState));
</script>

<template>
  <ImprintPage v-if="route === '/imprint'" :navigate="navigate" />

  <div v-else class="page-shell">
    <ScrollArtifacts />
    <div class="page-content">
      <SiteHeader />

      <main>
        <HeroSection :name="name" :description="heroDescription" :hero-status="heroStatus" />
        <ExperienceSection :skills="coreSkills" />
        <ToolsSection :tools="tools" />
        <ProjectsSection :projects="projects" />
        <ContactSection :contacts="contactLinks" />
      </main>

      <SiteFooter
        :contact-links="contactLinks"
        :legal-links="footerLegalLinks"
        :sitemap-links="footerSitemapLinks"
        :navigate="navigate"
      />
    </div>
  </div>
</template>
