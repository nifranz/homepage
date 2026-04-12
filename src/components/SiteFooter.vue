<script setup>
defineProps({
  contactLinks: {
    type: Array,
    required: true,
  },
  legalLinks: {
    type: Array,
    required: true,
  },
  sitemapLinks: {
    type: Array,
    required: true,
  },
});

const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="site-footer" id="footer">
    <div class="footer-grid">
      <section class="footer-col">
        <h3>Contact</h3>
        <ul>
          <li v-for="contact in contactLinks" :key="contact.label">
            <a :href="contact.href">{{ contact.label }}</a>
          </li>
        </ul>
      </section>

      <section class="footer-col">
        <h3>Legal</h3>
        <ul>
          <li v-for="item in legalLinks" :key="item.label">
            <a :href="item.href">{{ item.label }}</a>
          </li>
        </ul>
      </section>

      <section class="footer-col">
        <h3>Sitemap</h3>
        <ul>
          <li v-for="item in sitemapLinks" :key="item.label">
            <a :href="item.href">{{ item.label }}</a>
          </li>
        </ul>
      </section>
    </div>

    <div class="footer-meta">
      <span>&copy; {{ currentYear }} Niklas Franz</span>
      <span>Portfolio Website</span>
    </div>
  </footer>
</template>
