/* eslint-disable no-undef */
if (typeof bootstrap === "undefined") {
  throw new Error(
    "Bootstrap JS is not loaded. Please include Bootstrap's JavaScript before main.js.",
  );
}

(function () {
  const nav = document.getElementById("mainNav");
  const collapse = document.getElementById("navbarContent");

  function onScroll() {
    const offset = window.scrollY;
    if (offset > 0) {
      nav.classList.add("navbar-scrolled");
    } else {
      nav.classList.remove("navbar-scrolled");
    }
  }

  document.querySelectorAll("#navbarContent .nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      if (
        window.getComputedStyle(document.querySelector(".navbar-toggler"))
          .display !== "none"
      ) {
        const bsCollapse =
          bootstrap.Collapse.getInstance(collapse) ||
          new bootstrap.Collapse(collapse, { toggle: false });
        bsCollapse.hide();
      }
    });
  });

  let rafId = null;
  document.addEventListener(
    "scroll",
    () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        onScroll();
        rafId = null;
      });
    },
    { passive: true },
  );

  window.addEventListener("load", () => {
    onScroll();
    if (window.scrollY === 0) {
      nav.classList.remove("navbar-scrolled");
    }
  });

  onScroll();
})();

const konamiCodePattern = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

let pressedKeys = [];

document.addEventListener("keydown", (event) => {
  pressedKeys.push(event.key);

  if (pressedKeys.length > konamiCodePattern.length) {
    pressedKeys.shift();
  }

  if (JSON.stringify(pressedKeys) === JSON.stringify(konamiCodePattern)) {
    console.log("Konami Code activated!");
    alert("Konami Code Activated!");
    pressedKeys = [];
  }
});
