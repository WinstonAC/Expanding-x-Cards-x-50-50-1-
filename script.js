//expanding effect!

const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    panel.classList.add("active");
    console.log(123);
  });
});
console.log(panels[0]);
