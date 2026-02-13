function togglePopup() {
  popupEle.classList.toggle("active");
}
function updateIndicators() {
  let activeImage = popupBox.querySelector(".indicators li.active");
  if (activeImage != null) {
    activeImage.classList.remove("active");
  }

  popupIndicators[currentImgIndex].classList.add("active");
}
function nextImage() {
  currentImgIndex = ++currentImgIndex % imagesList.length;
  let nextImgIndex = currentImgIndex,
    nextImgEle = imagesList[nextImgIndex],
    nextImgSrc = nextImgEle.getAttribute("src");
  popupImg.setAttribute("src", nextImgSrc);
  updateIndicators();
}
function prevImage() {
  currentImgIndex =
    --currentImgIndex < 0 ? imagesList.length - 1 : currentImgIndex;
  let prevImgIndex = currentImgIndex,
    prevImgEle = imagesList[prevImgIndex],
    prevImgSrc = prevImgEle.getAttribute("src");
  popupImg.setAttribute("src", prevImgSrc);
  updateIndicators();
}
