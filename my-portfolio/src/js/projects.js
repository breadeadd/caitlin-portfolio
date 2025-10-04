document.querySelectorAll(".project-card").forEach(card => {
  const inner = card.querySelector(".card-inner");
  card.addEventListener("click", () => {
    inner.classList.toggle("rotate-y-180");
  });
});
