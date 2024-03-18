// Updating current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.innerHTML = currentYear;

// Implementing mobile navigation button
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// Implementing smooth scrolling behaviour

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    console.log(e);
    e.preventDefault(); //prevent default scroll behaviopur of the anchor tag
    const href = link.getAttribute("href");
    // scroll to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      console.log(href);
      const sectionEl = document.querySelector(href);
      console.log(sectionEl);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // close mobile navigation
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

// Sticky navigation
const heroSectionEl = document.querySelector(".section-hero");
const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (!ent.isIntersecting) document.body.classList.add("sticky");
    else {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null, //where the element should be appearing (observe inside the viewport)
    threshold: 0, //event will fire as soon as 0% of the hero section is in the viewport
    rootMargin: "-80px",
  }
);
observer.observe(heroSectionEl);
