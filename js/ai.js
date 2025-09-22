// Typing effect for hero phrases and simple scroll reveal
(function () {
  const target = document.querySelector(".type-target");
  const phrases = JSON.parse(target ? target.dataset.phrases || "[]" : "[]");
  let pi = 0;
  let ci = 0;
  let forward = true;

  function typeTick() {
    if (!phrases.length || !target) return;
    const phrase = phrases[pi];

    if (forward) {
      ci += 1;
      target.textContent = phrase.slice(0, ci);
      if (ci === phrase.length) {
        forward = false;
        setTimeout(typeTick, 1200);
        return;
      }
    } else {
      ci -= 1;
      target.textContent = phrase.slice(0, ci);
      if (ci === 0) {
        forward = true;
        pi = (pi + 1) % phrases.length;
      }
    }

    setTimeout(typeTick, forward ? 60 : 30);
  }

  typeTick();

  // simple reveal on scroll for elements with .glass-hover
  const revealEls = document.querySelectorAll(".glass-hover");

  function onScroll() {
    revealEls.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) el.classList.add("revealed");
    });
  }

  document.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("load", onScroll);
})();
