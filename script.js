/* =========================================
   SMOOTH REVEAL ANIMATION
========================================= */

const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
(entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},
{
    threshold:0.15
});

reveals.forEach(item => {
    revealObserver.observe(item);
});


/* =========================================
   BURGER MENU
========================================= */

const burger = document.querySelector(".burger");
const menu = document.querySelector(".fullscreen-menu");
const overlay = document.querySelector(".menu-overlay");
const closeBtn = document.querySelector(".close-menu");

function openMenu(){

    menu.classList.add("active");
    overlay.classList.add("active");

    document.body.style.overflow = "hidden";
}

function closeMenu(){

    menu.classList.remove("active");
    overlay.classList.remove("active");

    document.body.style.overflow = "";
}

burger?.addEventListener("click", openMenu);

closeBtn?.addEventListener("click", closeMenu);

overlay?.addEventListener("click", closeMenu);


/* =========================================
   CLOSE MENU AFTER CLICK LINK
========================================= */

document
.querySelectorAll(".fullscreen-menu a")
.forEach(link => {

    link.addEventListener("click", () => {

        closeMenu();

    });

});


/* =========================================
   GALLERY SLIDER
========================================= */

const track =
document.querySelector(".gallery-track");

const next =
document.querySelector(".gallery-next");

const prev =
document.querySelector(".gallery-prev");

const card =
document.querySelector(".gallery-track img");

if(track && card){

    const scrollAmount =
    card.offsetWidth + 20;

    next?.addEventListener("click", () => {

        track.scrollBy({

            left:scrollAmount,

            behavior:"smooth"

        });

    });

    prev?.addEventListener("click", () => {

        track.scrollBy({

            left:-scrollAmount,

            behavior:"smooth"

        });

    });

}


/* =========================================
   TOUCH SWIPE GALLERY
========================================= */

let startX = 0;
let endX = 0;

track?.addEventListener("touchstart", e => {

    startX = e.changedTouches[0].clientX;

});

track?.addEventListener("touchend", e => {

    endX = e.changedTouches[0].clientX;

    const diff = startX - endX;

    if(Math.abs(diff) < 50) return;

    const scrollAmount =
    card.offsetWidth + 20;

    if(diff > 0){

        track.scrollBy({
            left:scrollAmount,
            behavior:"smooth"
        });

    }else{

        track.scrollBy({
            left:-scrollAmount,
            behavior:"smooth"
        });

    }

});


/* =========================================
   LANGUAGE MENU
========================================= */

const langBtn =
document.querySelector(".lang-btn");

const langDropdown =
document.querySelector(".lang-dropdown");

langBtn?.addEventListener("click", () => {

    langDropdown.classList.toggle("active");

});


/* =========================================
   CLOSE LANGUAGE MENU
========================================= */

document.addEventListener("click", (e) => {

    if(
        !e.target.closest(".language")
    ){

        langDropdown?.classList.remove("active");

    }

});


/* =========================================
   SIMPLE LANGUAGE SWITCH
========================================= */

const translations = {

ru:{
hero:"Премиальный сервис, комфорт и конфиденциальность 24 часа в сутки"
},

en:{
hero:"Premium service, comfort and privacy 24 hours a day"
},

kz:{
hero:"Тәулік бойы премиум сервис, жайлылық және құпиялылық"
}

};

document
.querySelectorAll(".lang-dropdown div")
.forEach(item => {

item.addEventListener("click", () => {

    const lang =
    item.dataset.lang;

    localStorage.setItem(
    "site_language",
    lang
    );

    document
    .querySelector(".lang-btn")
    .innerHTML =
    lang.toUpperCase() +
    " <span>⌄</span>";

});

});


/* =========================================
   LOAD SAVED LANGUAGE
========================================= */

window.addEventListener("load", () => {

    const saved =
    localStorage.getItem(
    "site_language"
    );

    if(saved){

        document
        .querySelector(".lang-btn")
        .innerHTML =
        saved.toUpperCase() +
        " <span>⌄</span>";

    }

});


/* =========================================
   HERO BUTTON LINKS
========================================= */

const tgBtn =
document.querySelector(".telegram-btn");

const wpBtn =
document.querySelector(".whatsapp-btn");

tgBtn?.addEventListener("click", e => {

    e.preventDefault();

    window.open(
    "https://t.me/+77071086436",
    "_blank"
    );

});

wpBtn?.addEventListener("click", e => {

    e.preventDefault();

    window.open(
    "https://wa.me/77786384785",
    "_blank"
    );

});


/* =========================================
   HEADER SHADOW ON SCROLL
========================================= */

window.addEventListener("scroll", () => {

    const header =
    document.querySelector(".header");

    if(window.scrollY > 30){

        header.style.boxShadow =
        "0 10px 30px rgba(0,0,0,.05)";

    }else{

        header.style.boxShadow =
        "none";

    }

});