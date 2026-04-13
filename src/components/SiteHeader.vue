<script setup>
import { ref } from "vue";

const logoRef = ref(null);
let isLogoAnimating = false;

const FADE_OUT_DURATION = 230;
const FADE_IN_DURATION = 280;
const FADE_IN_START_RATIO = 0.5;

function parseDelay(delayValue) {
  const parsed = Number.parseFloat(delayValue);
  return Number.isFinite(parsed) ? parsed : 0;
}

function getMotionOffset(part) {
  const styles = window.getComputedStyle(part);
  const moveX = styles.getPropertyValue("--move-x").trim() || "0px";
  const moveY = styles.getPropertyValue("--move-y").trim() || "0px";
  return `${moveX} ${moveY}`;
}

function waitForAnimations(animations) {
  return Promise.all(
    animations.map((animation) => animation.finished.catch(() => undefined)),
  );
}

function scrollToTop() {
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  window.scrollTo({
    top: 0,
    behavior: reduceMotion ? "auto" : "smooth",
  });
}

async function replayLogoAnimation() {
  if (isLogoAnimating || !logoRef.value) {
    return;
  }

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const parts = Array.from(logoRef.value.querySelectorAll(".logo__part"));
  if (!parts.length) {
    return;
  }

  isLogoAnimating = true;

  try {
    const delays = parts.map((part) =>
      parseDelay(part.style.getPropertyValue("--d")),
    );
    const maxDelay = Math.max(...delays, 0);
    const fadeInPhaseOffset =
      (maxDelay + FADE_OUT_DURATION) * FADE_IN_START_RATIO;

    const fadeOutAnimations = parts.map((part, index) => {
      const delay = delays[index];
      const currentOpacity = Number.parseFloat(
        window.getComputedStyle(part).opacity,
      );
      const fromOpacity = Number.isFinite(currentOpacity) ? currentOpacity : 1;

      return part.animate(
        [{ opacity: fromOpacity }, { opacity: 0 }],
        {
          duration: FADE_OUT_DURATION,
          delay,
          easing: "cubic-bezier(0.25, 0.8, 0.2, 1)",
          fill: "forwards",
        },
      );
    });

    const fadeInAnimations = parts.map((part, index) => {
      const delay = delays[index] + fadeInPhaseOffset;
      const motionOffset = getMotionOffset(part);
      return part.animate(
        [
          { opacity: 0, translate: motionOffset },
          { opacity: 1, translate: "0px 0px" },
        ],
        {
          duration: FADE_IN_DURATION,
          delay,
          easing: "cubic-bezier(0.22, 0.78, 0.2, 1)",
          fill: "forwards",
        },
      );
    });

    await waitForAnimations([...fadeOutAnimations, ...fadeInAnimations]);
  } finally {
    isLogoAnimating = false;
  }
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
  <header class="site-header">
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
          style="--d: 70ms"
          x="27.299999"
          y="31.435329"
          width="4.8695898"
          height="77.086884"
          fill="#121212"
        />
        <rect
          class="logo__part logo__bar logo__bar-left"
          style="--d: 140ms"
          x="33.300003"
          y="42.955498"
          width="5.0145216"
          height="65.566711"
          fill="#242424"
        />
        <rect
          class="logo__part logo__bar logo__bar-right"
          style="--d: 420ms"
          x="71.925865"
          y="22.706932"
          width="5.0145216"
          height="61.363899"
          fill="#000000"
        />
        <rect
          class="logo__part logo__bar logo__bar-right"
          style="--d: 490ms"
          x="78.940384"
          y="29.125343"
          width="4.8695898"
          height="66.999252"
          fill="#121212"
        />
        <path
          class="logo__part logo__bar logo__bar-right"
          style="--d: 560ms"
          d="m 85.615482,36.482238 h 4.86959 V 107.9199 h -4.86959 z"
          fill="#242424"
        />
        <path
          class="logo__part logo__cross"
          style="--d: 640ms"
          d="m 71.876296,27.012483 v -4.724658 h 56.423754 v 4.724658 z"
          fill="#000000"
        />
        <path
          class="logo__part logo__cross"
          style="--d: 700ms"
          d="m 78.932709,33.866021 v -5.014522 h 42.898311 v 5.014522 z"
          fill="#121212"
        />
        <path
          class="logo__part logo__cross"
          style="--d: 760ms"
          d="m 85.559533,40.590239 v -4.724658 h 31.320707 v 4.724658 z"
          fill="#242424"
        />
        <path
          class="logo__part logo__cross"
          style="--d: 640ms"
          d="m 79.941018,56.780226 v -4.579727 h 29.026532 v 4.579727 z"
          fill="#121212"
        />
        <rect
          class="logo__part logo__cross"
          style="--d: 700ms"
          x="-63.348984"
          y="87.590126"
          width="4.5780244"
          height="17.232643"
          transform="rotate(-90)"
          fill="#242424"
        />
        <path
          class="logo__part logo__diag"
          style="--d: 210ms"
          d="M 7.4516576,29.640225 6.2006083,127.85339 11.205017,130.74268 12.72482,32.349983 Z"
          transform="rotate(-30)"
          fill="#000000"
        />
        <path
          class="logo__part logo__diag"
          style="--d: 280ms"
          d="M 28.774533,22.104594 76.797677,107.7852 h 5.77859 L 34.696105,21.814732 Z"
          fill="#000000"
        />
        <path
          class="logo__part logo__diag"
          style="--d: 350ms"
          d="m 36.592382,22.313478 48.023145,85.680602 h 5.77859 L 42.513954,22.023616 Z"
          fill="#000000"
        />
      </g>
    </svg>
    <div class="topbar">
      <nav>
        <a href="#hero">Home</a>
        <a href="#expertise">Expertise</a>
        <a href="#tools">Tools</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  </header>
</template>
