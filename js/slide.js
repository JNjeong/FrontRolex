/* 클래식 컬렉션 좌우 슬라이드 */
let slides = document.querySelector(".slide_pic"),
  slide = document.querySelectorAll(".slide_pic li"),
  currentIdx = 0,
  slideCount = slide.length,
  slideWidth = 280,
  slideMargin = 45,
  prevBtn = document.querySelector(".prev"),
  nextBtn = document.querySelector(".next");

function moveSlide(num) {
  slides.style.transform =
    "translate(-" + num * (slideWidth + slideMargin) + "px)";
  currentIdx = num;
}

nextBtn.addEventListener("click", function () {
  if (currentIdx < slideCount - 4) {
    moveSlide(currentIdx + 1);
  }
});

prevBtn.addEventListener("click", function () {
  if (currentIdx > 0) {
    moveSlide(currentIdx - 1);
  }
});

/* 프로페셔널 컬렉션 좌우 슬라이드 */
let slides2 = document.querySelector(".slide_pic2"),
  slide2 = document.querySelectorAll(".slide_pic2 li"),
  currentIdx2 = 0,
  slideCount2 = slide2.length,
  prevBtn2 = document.querySelector(".prev2"),
  nextBtn2 = document.querySelector(".next2");

function moveSlide2(num) {
  slides2.style.transform =
    "translate(-" + num * (slideWidth + slideMargin) + "px)";
  currentIdx2 = num;
}

nextBtn2.addEventListener("click", function () {
  if (currentIdx2 < slideCount2 - 4) {
    moveSlide2(currentIdx2 + 1);
  }
});

prevBtn2.addEventListener("click", function () {
  if (currentIdx2 > 0) {
    moveSlide2(currentIdx2 - 1);
  }
});
