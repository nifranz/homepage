<script setup>
import SiteHeader from "./SiteHeader.vue";
import SiteFooter from "./SiteFooter.vue";
import ScrollArtifacts from "./ScrollArtifacts.vue";
import {
  imprintData,
  contactLinks,
  footerLegalLinks,
  footerSitemapLinks,
} from "../data/portfolioData";

defineProps({
  navigate: {
    type: Function,
    required: true,
  },
});
</script>

<template>
  <div class="page-shell">
    <ScrollArtifacts />
    <div class="page-content">
      <SiteHeader :navigate="navigate" />

      <main>
        <section class="section imprint-section">
          <div class="imprint-content">
            <p class="imprint-kicker">Legal</p>
            <h1 class="imprint-heading">Impressum</h1>

            <div class="imprint-block">
              <h2>Angaben gemäß § 5 TMG</h2>
              <p>
                {{ imprintData.name }}<br />
                {{ imprintData.address.street }}<br />
                {{ imprintData.address.zip }} {{ imprintData.address.city }}
              </p>
            </div>

            <div class="imprint-block">
              <h2>Kontakt</h2>
              <table class="imprint-table">
                <tbody>
                  <tr>
                    <td>E-Mail</td>
                    <td>
                      <a :href="`mailto:${imprintData.email}`">{{ imprintData.email }}</a>
                    </td>
                  </tr>
                  <tr>
                    <td>Telefon</td>
                    <td>{{ imprintData.phone }}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="imprint-block imprint-back">
              <a href="/" @click.prevent="navigate('/')">← Back to portfolio</a>
            </div>
          </div>
        </section>
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
