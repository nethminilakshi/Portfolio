document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById("burger");
  const menuPanel = document.getElementById("menu-panel-id");
  const closeBtn = document.getElementById("btn-close");

  burger.addEventListener("click", function () {
    menuPanel.classList.add("active");
  });

  closeBtn.addEventListener("click", function () {
    menuPanel.classList.remove("active");
  });

  document.addEventListener("click", function (event) {
    if (!menuPanel.contains(event.target) && !burger.contains(event.target)) {
      menuPanel.classList.remove("active");
    }
  });

  const menuLinks = menuPanel.getElementsByTagName("a");
  for (let link of menuLinks) {
    link.addEventListener("click", function () {
      menuPanel.classList.remove("active");
    });
  }
});
