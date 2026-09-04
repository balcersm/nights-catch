(function () {
  const header = document.getElementById("site-header");
  const toggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const gallery = document.querySelector("[data-gallery]");

  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const setMenuOpen = (open) => {
    toggle.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    mobileMenu.hidden = !open;
    document.body.style.overflow = open ? "hidden" : "";
  };

  toggle.addEventListener("click", () => {
    setMenuOpen(mobileMenu.hidden);
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });

  if (gallery) {
    const track = gallery.querySelector(".gallery-track");
    track.innerHTML += track.innerHTML;
  }

  const reviews = document.querySelector("[data-reviews]");
  if (reviews) {
    const track = reviews.querySelector(".reviews-track");
    const cards = Array.from(reviews.querySelectorAll(".review-card"));
    const prev = reviews.querySelector(".review-nav--prev");
    const next = reviews.querySelector(".review-nav--next");
    const dotsWrap = reviews.querySelector(".review-dots");
    let index = 0;

    cards.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.setAttribute("aria-label", `Show review ${i + 1}`);
      dot.addEventListener("click", () => goTo(i));
      dotsWrap.appendChild(dot);
    });

    const goTo = (nextIndex) => {
      index = (nextIndex + cards.length) % cards.length;
      track.style.transform = `translateX(-${index * 100}%)`;
      dotsWrap.querySelectorAll("button").forEach((dot, i) => {
        dot.classList.toggle("is-active", i === index);
      });
    };

    prev.addEventListener("click", () => goTo(index - 1));
    next.addEventListener("click", () => goTo(index + 1));
    goTo(0);
  }

  const shot = new URLSearchParams(window.location.search).get("shot");
  if (shot) {
    const target = document.getElementById(shot);
    if (target) {
      window.scrollTo(0, Math.max(0, target.offsetTop - 80));
    }
  }
})();
