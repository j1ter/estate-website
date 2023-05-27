/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header");
  // Когда прокрутка больше или равна 50, добавляем класс scroll-header в тег заголовка
  if (window.scrollY >= 50) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}

window.addEventListener("scroll", scrollHeader);

/*=============== SWIPER POPULAR ===============*/
var swiperPopular = new Swiper(".popular__container", {
  spaceBetween: 32,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*=============== VALUE ACCORDION ===============*/
const accorddionItems = document.querySelectorAll(".value__accordion-item");

accorddionItems.forEach((item) => {
  const accorddionHeader = item.querySelector(".value__accordion-header");

  accorddionHeader.addEventListener("click", () => {
    const openItem = document.querySelector(".accordion-open");

    toggleItem(item);

    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});

const toggleItem = (item) => {
  const accorddionContent = item.querySelector(".value__accordion-content");

  if (item.classList.contains("accordion-open")) {
    accorddionContent.removeAttribute("style");
    item.classList.remove("accordion-open");
  } else {
    accorddionContent.style.height = accorddionContent.scrollHeight + "px";
    item.classList.add("accordion-open");
  }
};

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  //Когда прокрутка превышает высоту области просмотра 350, добавьте класс show-scroll в тег a с классом scrollup
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

// Ранее выбранная тема (если выбрана пользователем)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = () => localStorage.getItem("selected-icon");

// Мы получаем текущую тему интерфейса, проверяя класс темной темы
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

// Мы проверяем, выбрал ли пользователь ранее тему
if (selectedTheme) {
  // Если проверка выполнена, мы спрашиваем, в чем проблема, чтобы узнать, активировали мы или деактивировали темную
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Активировать/деактивировать тему вручную кнопкой
themeButton.addEventListener("click", () => {
  // Добавить или удалить темную тему / тему значков
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // Сохраняем тему и текущую иконку, которую выбрал пользователь
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
