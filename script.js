let socialEl = document.querySelector(".social");
let shareBtn = document.querySelector(".share");

shareBtn.addEventListener("click", () => {
  socialEl.classList.toggle("active");
});
