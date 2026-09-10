/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(
    ".why-card, .process-item, .contact-detail, .section-label"
);

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("reveal");
                entry.target.classList.add("active");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});

/* =========================
   MOBILE MENU
========================= */

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
    menuButton.setAttribute(
    "aria-expanded",
    mobileMenu.classList.contains("open")
);

    if (mobileMenu.classList.contains("open")) {
        menuButton.textContent = "✕";
        menuButton.setAttribute("aria-label", "Close menu");
    } else {
        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-label", "Open menu");
    }
});

const mobileLinks = mobileMenu.querySelectorAll("a");

mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-label", "Open menu");
    });
});

// Close menu when clicking outside
document.addEventListener("click", (event) => {
    const clickedInsideMenu = mobileMenu.contains(event.target);
    const clickedButton = menuButton.contains(event.target);

    if (!clickedInsideMenu && !clickedButton) {
        mobileMenu.classList.remove("open");
        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-label", "Open menu");
    }
});