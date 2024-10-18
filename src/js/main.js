import Swiper from 'swiper'
import {Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/manipulation'
import '../scss/style.scss'

(function () {
    const isOpen = document.querySelector(".header__box-burger");
    const isClose = document.querySelector(".header__nav-close");
    const navigation = document.querySelector(".header__nav");

    isOpen.addEventListener("click", () => {
        navigation.classList.add("active")
    });

    isClose.addEventListener("click", () => {
        navigation.classList.remove("active")
    });
})();

// SWIPER
const swiper = new Swiper('.swiper', {
    modules: [Pagination],
    // options
    loop: true,
    spaceBetween: 30,
    
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

(function() {
    const tabItems = document.querySelectorAll(".tabs__links-item");
    const tabContents = document.querySelectorAll(".tabs__content-item");

    tabItems.forEach((tab, inx) => {
        tab.addEventListener("click", () => {
            tabItems.forEach(tab => {
                tab.classList.remove("active");
            })
            tabContents.forEach(content => {
                content.classList.remove("active");
            })

            tabItems[inx].classList.add("active");
            tabContents[inx].classList.add("active");
        })
    })
})();

//   modal window 

(function() {
    const btnOpenModal = document.querySelector(".commerce__button");
    const modalWindow = document.querySelector(".modal");
    const btnCloseModal = document.querySelector(".form__close");

    btnOpenModal.addEventListener("click", function() {
        modalWindow.classList.toggle("active");
        document.body.classList.toggle("modal-open");
    });

    btnCloseModal.addEventListener("click", function() {
        modalWindow.classList.toggle("active");
        document.body.classList.toggle("modal-open");
    });
})();
