const menuIconElement = document.getElementById("menu-icon");
const listMenuElement = document.getElementById("list-menu");

menuIconElement.addEventListener("click", (event) => {
  event.preventDefault();

  let currentlistMenuStyleDisplay = listMenuElement.style.display;
  if (currentlistMenuStyleDisplay === "none") {
    menuIconElement.setAttribute("src", "/images/page/close.svg");
    listMenuElement.style.display = "flex";
  } else {
    menuIconElement.setAttribute("src", "/images/page/list.svg");
    listMenuElement.style.display = "none";
  }
});
