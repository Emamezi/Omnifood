// console.log("helllo world");
// const myName = "Emamezi Ebebeinwe";
// const h1 = document.querySelector(".heading-primary");

// h1.addEventListener("click", function () {
//   h1.style.backgroundColor = "red";
//   h1.textContent = myName;
//   h1.style.padding = "5rem";
// });

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
