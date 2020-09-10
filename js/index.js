var slideIndex = 0;

var slides = $(".testimony-slide");

var endSlide = slides.length - 1;

function moveSlide(index) {
  slideIndex += index;
  showSlide(slideIndex);
}

function showSlide(index) {
  if (index < 0) {
    slideIndex = endSlide;
  } else if (index > endSlide) {
    slideIndex = 0;
  }

  if (slideIndex == endSlide) {
    slides[0].style.display = "none";
    slides[slideIndex - 1].style.display = "none";
  } else if (slideIndex == 0) {
    slides[endSlide].style.display = "none";
    slides[slideIndex + 1].style.display = "none";
  } else {
    slides[slideIndex - 1].style.display = "none";
    slides[slideIndex + 1].style.display = "none";
  }

  slides[slideIndex].style.display = "block";
}

function changeImage(imgButton) {
  let imgIndex = $(".image-big");

  imgIndex[imgButton].style.cssText = "display: block;";

  

  switch (imgButton) {
    case 0:
      imgIndex[imgButton + 1].style.display = "none";
      imgIndex[imgButton + 2].style.display = "none";
      break;
    case 1:
      imgIndex[imgButton + 1].style.display = "none";
      imgIndex[imgButton - 1].style.display = "none";
      break;
    case 2:
      imgIndex[imgButton - 1].style.display = "none";
      imgIndex[imgButton - 2].style.display = "none";
      break;
  }
}
