// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// Keyka menu diklik
document.querySelector("#menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// search diklik toggle
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-btn").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
  // searchBox focus();
};
// klik diluar side bar utk mengj=hilangkan anvabar

const menu = document.querySelector("#menu");
const sb = document.querySelector("#search-btn");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});
