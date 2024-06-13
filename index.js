const popUpContainer = document.querySelector(".pop-up-container");
const popUp = document.querySelector(".pop-up");
const closeIcon = document.querySelector(".close-icon");
const popUpBtnContainer = document.querySelector(".pop-up-btn-container");
const popUpBtn = document.querySelector(".pop-up-btn");
const input = document.querySelector("input");
const form = document.querySelector("form");
const subscribe = document.querySelector(".subscribe");

popUpBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  popUpContainer.classList.add("open");
  popUpBtnContainer.classList.add("hide-btn");
});

closeIcon.addEventListener("click", (e) => {
  e.stopPropagation();
  popUpContainer.classList.remove("open");
  popUpBtnContainer.classList.remove("hide-btn");
});

popUp.addEventListener("click", (e) => {
  e.stopPropagation();
});

window.addEventListener("click", () => {
  popUpContainer.classList.remove("open");
  popUpBtnContainer.classList.remove("hide-btn");
});

subscribe.addEventListener("click", (e) => {
  if (input.value) {
    popUpContainer.classList.remove("open");
    popUpBtnContainer.classList.remove("hide-btn");
    setTimeout(() => {
      form.submit();
    }, 1000);
  }
});
