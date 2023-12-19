const listImage = document.querySelector(".list-images");
const imgs = document.querySelectorAll(".box-img");
const length = imgs.length;
let current = 0;

const changeSlide = (index, previous) => {
  let width = imgs[0].offsetWidth;
  listImage.style.transform = `translateX(${width * -1 * index}px`;


  if (previous !== undefined) {
    document
      .querySelector(".index-item-" + previous)
      .classList.remove("active-dot");
  }

  document.querySelector(".index-item-" + index).classList.add("active-dot");
};

const indexItems = document.querySelectorAll(".index-item");
indexItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    const previous = current;
    current = index;
    changeSlide(current, previous);
  });
});
$(".slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  
  dots: true,
  // customPaging: function(slider, i) {
  //   // this example would render "tabs" with titles
  //   return '<span class="msdocs"></span>';
  // },
 
  customPaging: function(slider, i) {
    return i === slider.currentSlide ? '<div class="doticon"></div>' : '<div class="doticon"></div>';
},
  centerMode: true,
  variableWidth: true,
  infinite: true,
  focusOnSelect: true,
  cssEase: "linear",
  touchMove: true,
  prevArrow:
    '<button class="slick-prev"> <img src="../resources/img/l.png" alt="" class="icon-next"> </button>',
  nextArrow:
    '<button class="slick-next"> <img src="../resources/img/r.png" alt="" class="icon-prev"> </button>',
});

var imgse = $(".slider .item-img");
imgse.each(function () {
  var item = $(this).closest(".item");
  item.css({
    "background-image": "url(" + $(this).attr("src") + ")",
    "background-position": "center",
    "-webkit-background-size": "cover",
    "background-size": "cover",
    "background-repeat": "no-repeat",
  });
  $(this).hide();
});

const tabsNav = document.querySelector(".tabs__nav");
const tabsBtn = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".tabs__item");

tabsNav.addEventListener("click", function (event) {
  const targetButton = event.target.closest(".tabs__nav-btn");

  if (targetButton) {
    const tabId = targetButton.getAttribute("data-tab");
    const currentTab = document.querySelector(tabId);

    tabsBtn.forEach((btn) =>
      btn.classList.toggle("active", btn === targetButton)
    );
    tabsItems.forEach((item) =>
      item.classList.toggle("active", item === currentTab)
    );
  }
});

tabsBtn[0].click();
