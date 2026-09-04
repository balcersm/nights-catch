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

  const shot = new URLSearchParams(window.location.search).get("shot");
  if (shot) {
    const target = document.getElementById(shot);
    if (target) {
      window.scrollTo(0, Math.max(0, target.offsetTop - 80));
    }
  }
})();
