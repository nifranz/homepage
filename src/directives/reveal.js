const observers = new WeakMap();
const lastEntryTops = new WeakMap();

function resolveOptions(bindingValue) {
  const defaults = {
    direction: "down",
    delay: 0,
    once: false,
    threshold: 0.18,
    rootMargin: "0px 0px -8% 0px",
  };

  if (typeof bindingValue === "string") {
    return { ...defaults, direction: bindingValue };
  }

  if (bindingValue && typeof bindingValue === "object") {
    return { ...defaults, ...bindingValue };
  }

  return defaults;
}

function applyRevealOptions(el, options) {
  el.classList.add("reveal");
  el.classList.remove(
    "reveal-from-left",
    "reveal-from-right",
    "reveal-from-up",
    "reveal-from-down",
  );

  const direction = options.direction || "down";
  el.classList.add(`reveal-from-${direction}`);
  el.style.setProperty("--reveal-delay", `${options.delay}ms`);
}

const revealDirective = {
  mounted(el, binding) {
    const options = resolveOptions(binding.value);
    applyRevealOptions(el, options);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const currentTop = entry.boundingClientRect.top;
          const previousTop = lastEntryTops.get(el);
          const scrollDirection =
            previousTop === undefined
              ? "none"
              : currentTop > previousTop
                ? "up"
                : currentTop < previousTop
                  ? "down"
                  : "none";

          if (entry.isIntersecting) {
            el.classList.add("is-visible");
            if (options.once) {
              observer.unobserve(el);
            }
          } else if (!options.once) {
            const viewportBottom = entry.rootBounds?.bottom ?? window.innerHeight;
            const exitedTowardBottom = currentTop >= viewportBottom;

            // Reverse only when scrolling up and the element leaves below viewport.
            if (scrollDirection === "up" && exitedTowardBottom) {
              el.classList.remove("is-visible");
            }
          }

          lastEntryTops.set(el, currentTop);
        }
      },
      {
        threshold: options.threshold,
        rootMargin: options.rootMargin,
      },
    );

    observer.observe(el);
    observers.set(el, observer);
    lastEntryTops.set(el, el.getBoundingClientRect().top);
  },
  updated(el, binding) {
    const options = resolveOptions(binding.value);
    applyRevealOptions(el, options);
  },
  unmounted(el) {
    const observer = observers.get(el);
    observer?.disconnect();
    observers.delete(el);
    lastEntryTops.delete(el);
  },
};

export default revealDirective;
