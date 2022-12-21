(() => {
  const hamburger = document.querySelector(".hamburger");
  const search = document.querySelector(".search");
  const navMenu = document.querySelector(".nav-menu");
  const navItem = document.querySelectorAll(".nav-item");


  hamburger.addEventListener("click", mobileMenu);
  search.addEventListener("click", mobileSearch);
  navItem.forEach(n => n.addEventListener("click", navItemClick));

  function navItemClick(e) {
    e.preventDefault();
    console.log("Nav item clicked");
  }

  function mobileSearch() {
    navMenu.classList.toggle("active");

    for (let i = 0; i < navMenu.children.length; i++) {
      if (navMenu.children[i].classList.contains("nav-item") || navMenu.children[i].classList.contains("nav-banner")) {
        navMenu.children[i].setAttribute("style", "display: none;");
      } if (navMenu.children[i].classList.contains("search-container")) {
        navMenu.children[i].setAttribute("style", "display: block;");
      }
    }
  }

  function mobileMenu() {
    hamburger.classList.toggle("active");

    for (let i = 0; i < navMenu.children.length; i++) {
      if (navMenu.children[i].classList.contains("nav-item") || navMenu.children[i].classList.contains("nav-banner")) {
        navMenu.children[i].setAttribute("style", "display: block;");
      } if (navMenu.children[i].classList.contains("search-container")) {
        navMenu.children[i].setAttribute("style", "display: none;");
      }
    }
    navMenu.classList.toggle("active");
  }
})();
