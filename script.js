//expanding effect!

const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClases();
    panel.classList.add("active");
    console.log(123);
  });
});

function removeActiveClases() {
  panels.forEach(panel => {
    panel.classList.remove("active");
  });
}
