<script setup>
import { ref } from "vue";

const logoRef = ref(null);
const menuOpen = ref(false);

function scrollToTop() {
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  window.scrollTo({
    top: 0,
    behavior: reduceMotion ? "auto" : "smooth",
  });
}

function replayLogoAnimation() {
  if (!logoRef.value) {
    return;
  }

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const parts = Array.from(logoRef.value.querySelectorAll(".logo__part"));
  if (!parts.length) {
    return;
  }

  parts.forEach((part) => {
    part.style.animation = "none";
  });

  void logoRef.value.getBoundingClientRect();

  parts.forEach((part) => {
    part.style.animation = "";
  });
}

function handleLogoActivate() {
  scrollToTop();
  replayLogoAnimation();
}

function handleLogoKeydown(event) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    handleLogoActivate();
  }
}
</script>

<template>
  <header class="site-header" :class="{ 'site-header--open': menuOpen }">
    <svg
      ref="logoRef"
      class="site-logo logo logo--build"
      viewBox="0 0 107.02662 86.868716"
      role="button"
      tabindex="0"
      aria-label="Niklas Franz logo"
      xmlns="http://www.w3.org/2000/svg"
      @mousedown.prevent
      @pointerdown.prevent
      @click="handleLogoActivate"
      @keydown="handleLogoKeydown"
    >
      <g transform="translate(-21.273437,-21.653497)">
        <rect
          class="logo__part logo__bar logo__bar-left"
          style="--d: 0ms"
          x="21.299999"
          y="22"
          width="4.8695898"
          height="86.522209"
          fill="#000000"
        />
        <rect
          class="logo__part logo__bar logo__bar-left"
          style="--d: 50ms"
          x="27.299999"
          y="31.435329"
          width="4.8695898"
          height="77.086884"
          fill="#121212"
        />
        <rect
          class="logo__part logo__bar logo__bar-left"
          style="--d: 100ms"
          x="33.300003"
          y="42.955498"
          width="5.0145216"
          height="65.566711"
          fill="#242424"
        />
        <rect
          class="logo__part logo__bar logo__bar-right"
          style="--d: 300ms"
          x="71.925865"
          y="22.706932"
          width="5.0145216"
          height="61.363899"
          fill="#000000"
        />
        <rect
          class="logo__part logo__bar logo__bar-right"
          style="--d: 350ms"
          x="78.940384"
          y="29.125343"
          width="4.8695898"
          height="66.999252"
          fill="#121212"
        />
        <path
          class="logo__part logo__bar logo__bar-right"
          style="--d: 450ms"
          d="m 85.615482,36.482238 h 4.86959 V 107.9199 h -4.86959 z"
          fill="#242424"
        />
        <path
          class="logo__part logo__cross logo__cross-right"
          style="--d: 450ms"
          d="m 71.876296,27.012483 v -4.724658 h 56.423754 v 4.724658 z"
          fill="#000000"
        />
        <path
          class="logo__part logo__cross logo__cross-right"
          style="--d: 500ms"
          d="m 78.932709,33.866021 v -5.014522 h 42.898311 v 5.014522 z"
          fill="#121212"
        />
        <path
          class="logo__part logo__cross logo__cross-right"
          style="--d: 550ms"
          d="m 85.559533,40.590239 v -4.724658 h 31.320707 v 4.724658 z"
          fill="#242424"
        />
        <path
          class="logo__part logo__cross logo__cross-right"
          style="--d: 600ms"
          d="m 79.941018,56.780226 v -4.579727 h 29.026532 v 4.579727 z"
          fill="#121212"
        />
        <rect
          class="logo__part logo__cross logo__cross-right"
          style="--d: 650ms"
          x="-63.348984"
          y="87.590126"
          width="4.5780244"
          height="17.232643"
          transform="rotate(-90)"
          fill="#242424"
        />
        <g class="logo__part logo__diag" style="--d: 100ms">
          <path
            d="M 7.4516576,29.640225 6.2006083,127.85339 11.205017,130.74268 12.72482,32.349983 Z"
            transform="rotate(-30)"
            fill="#000000"
          />
        </g>
        <g class="logo__part logo__diag" style="--d: 200ms">
          <path
            d="M 28.774533,22.104594 76.797677,107.7852 h 5.77859 L 34.696105,21.814732 Z"
            fill=""
          />
        </g>
        <g class="logo__part logo__diag" style="--d: 250ms">
          <path
            d="m 36.592382,22.313478 48.023145,85.680602 h 5.77859 L 42.513954,22.023616 Z"
            fill="#000000"
          />
        </g>
      </g>
    </svg>
    <button
      class="site-hamburger"
      :aria-expanded="menuOpen"
      aria-label="Toggle navigation"
      @click="menuOpen = !menuOpen"
    >
      <svg class="hb-icon" viewBox="0 0 20 16" fill="none" width="20" height="16" aria-hidden="true">
        <line class="hb-top" x1="0" y1="2" x2="20" y2="2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        <line class="hb-mid" x1="0" y1="8" x2="20" y2="8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        <line class="hb-bot" x1="0" y1="14" x2="20" y2="14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </button>

    <div class="topbar" :class="{ 'topbar--open': menuOpen }">
      <nav>
        <a href="#" @click.prevent="() => { scrollToTop(); menuOpen = false; }">Home</a>
        <a href="#expertise" @click="menuOpen = false">Experience</a>
        <a href="#tools" @click="menuOpen = false">Tools</a>
        <a href="#projects" @click="menuOpen = false">Projects</a>
        <a href="#contact" @click="menuOpen = false">Contact</a>
      </nav>
    </div>
  </header>
</template>
