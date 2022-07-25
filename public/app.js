const burger = document.getElementById("burger");
const sidebar = document.getElementById("sidebar");

burger.addEventListener("click", () => {
  sidebar.classList.contains("hidden")
    ? sidebar.classList.remove("hidden")
    : sidebar.classList.add("hidden");
});
