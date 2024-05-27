document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const leftButton = document.querySelector(".nav-button.left");
  const rightButton = document.querySelector(".nav-button.right");

  function updateButtons() {
    const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
    if (slider.scrollLeft > 0) {
      leftButton.style.display = "block";
    } else {
      leftButton.style.display = "none";
    }
    if (slider.scrollLeft < maxScrollLeft) {
      rightButton.style.display = "block";
    } else {
      rightButton.style.display = "none";
    }
  }

  leftButton.addEventListener("click", function () {
    slider.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  });

  rightButton.addEventListener("click", function () {
    slider.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  });

  slider.addEventListener("scroll", updateButtons);

  updateButtons();
});