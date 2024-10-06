const mobileNav = () => {
  const headerBtn = document.querySelector(".header__bars");
  const mobileNavigation = document.querySelector(".mobile__nav");
  const mobileLink = document.querySelectorAll(".mobile__nav-link");

  let isMobileNav = false;
  headerBtn.addEventListener("click", () => {
    isMobileNav = !isMobileNav;
    if (isMobileNav) {
      mobileNavigation.style.display = "flex";
      document.body.style.overflowY = "hidden";
    } else {
      mobileNavigation.style.display = "none";
      document.body.style.overflowY = "auto ";
    }
  });

  mobileLink.forEach((link) => {
    link.addEventListener("click", () => {
      isMobileNav = false;
      mobileNavigation.style.display = "none";
      document.body.style.overflowY = "auto ";
    });
  });
};

export default mobileNav;
