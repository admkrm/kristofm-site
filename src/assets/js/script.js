let showMenuIcon = document.querySelector("header div.show_menu");
let header = document.querySelector("header");

showMenuIcon.addEventListener("click", function () {
	this.classList.toggle("active");
	header.classList.toggle("fold_out");
})


let asideNavLinks = document.querySelectorAll("aside nav ul li a");

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;
  asideNavLinks.forEach(link => {
    let article = document.querySelector(link.hash);
    if (
      article.offsetTop <= fromTop &&
      article.offsetTop + article.offsetHeight > fromTop
    ) {
      link.classList.add("current");
    } else {
      link.classList.remove("current");
    }
  });
});
