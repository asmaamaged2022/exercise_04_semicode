let popupKeys = document.querySelectorAll(" #Gallery .item i"),
  popupEle = document.querySelector(".popup"),
  popupBox = popupEle.querySelector(".box"),
  popupClose = popupBox.querySelector(".close"),
  popupImg = popupEle.querySelector("img"),
  currentImgIndex,
  imagesList = document.querySelectorAll("#Gallery .item img"),
  next = popupBox.querySelector(".next"),
  prev = popupBox.querySelector(".prev"),
  popupIndicatorsCounters = popupBox.querySelector("ul");

for (let i = 0; i < imagesList.length; i++) {
  let newIndicator = document.createElement("li");
  if (i != imagesList.length - 1) {
    newIndicator.classList.add("me-2");
  }
  newIndicator.textContent = i + 1;
  popupIndicatorsCounters.append(newIndicator);
}
let popupIndicators = popupBox.querySelectorAll(".indicators li");

popupKeys.forEach(function (popupKeys) {
  popupKeys.addEventListener("click", (e) => {
    let currentImg = popupKeys.parentElement.previousElementSibling,
      currentImgSrc = currentImg.getAttribute("src");

    currentImgIndex = currentImg.dataset.index;

    updateIndicators();
    updatePopupImg(currentImgSrc, currentImgIndex);
    togglePopup();
  });
});

popupClose.addEventListener("click", togglePopup);
popupEle.addEventListener("click", togglePopup);
next.addEventListener("click", nextImage);
prev.addEventListener("click", prevImage);

popupBox.addEventListener("click", (e) => {
  e.stopPropagation();
});
popupIndicators.forEach(function (item, index) {
  item.addEventListener("click", function () {
    let currentImgSrc = imagesList[index].getAttribute("src");
    updatePopupImg(currentImgSrc, index);
    updateIndicators();
  });
});
// --------------------------------------Keyboard----------------------------------------
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    togglePopup();
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    nextImage();
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    prevImage();
  }
});
