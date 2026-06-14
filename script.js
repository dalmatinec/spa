/* ==========================
BURGER MENU
========================== */

const burger =
document.querySelector(".burger");

const sideMenu =
document.querySelector(".side-menu");

const menuOverlay =
document.querySelector(".menu-overlay");

function closeMenu(){
  if(sideMenu) sideMenu.classList.remove("active");
  if(menuOverlay) menuOverlay.classList.remove("active");
}

if(burger && sideMenu && menuOverlay){

burger.addEventListener("click",()=>{

sideMenu.classList.toggle("active");

menuOverlay.classList.toggle("active");

});

}

if(menuOverlay){

menuOverlay.addEventListener("click",()=>{

closeMenu();

});

}

/* ==========================
CLOSE MENU AFTER CLICK
========================== */

document
.querySelectorAll(".side-menu a")
.forEach(link=>{

link.addEventListener("click",()=>{

closeMenu();

});

});

/* ==========================
LANGUAGE SWITCHER
========================== */

const langBtn =
document.querySelector(".lang-btn");

const langDropdown =
document.querySelector(".lang-dropdown");

if(langBtn && langDropdown){

langBtn.addEventListener("click",(e)=>{

e.stopPropagation();

langDropdown.classList.toggle("active");

});

}

document.addEventListener("click",(e)=>{

if(langDropdown && !e.target.closest(".language")){

langDropdown.classList.remove("active");

}

});

const translations = {

ru:{

heroText:
"Премиальный сервис, комфорт и конфиденциальность 24 часа в сутки",

advantages:
"Преимущества",

services:
"Услуги и цены",

contacts:
"Контакты",

about:
"О салоне",

gallery:
"Галерея"

},

en:{

heroText:
"Premium service, comfort and confidentiality 24 hours a day",

advantages:
"Advantages",

services:
"Services & Prices",

contacts:
"Contacts",

about:
"About",

gallery:
"Gallery"

},

kz:{

heroText:
"Тәулік бойы жоғары деңгейдегі сервис, жайлылық және құпиялылық",

advantages:
"Артықшылықтар",

services:
"Қызметтер мен бағалар",

contacts:
"Байланыс",

about:
"Салон туралы",

gallery:
"Галерея"

}

};

function applyLanguage(lang){

localStorage.setItem(
"siteLanguage",
lang
);

const current =
translations[lang] || translations.ru;

const heroTextEl =
document.querySelector(".hero p");

if(heroTextEl){
heroTextEl.textContent =
current.heroText;
}

const titles =
document.querySelectorAll(
".section-title h2"
);

if(titles[0])
titles[0].textContent =
current.advantages;

if(titles[1])
titles[1].textContent =
current.services;

if(titles[2])
titles[2].textContent =
current.contacts;

if(titles[3])
titles[3].textContent =
current.about;

if(titles[4])
titles[4].textContent =
current.gallery;

if(langBtn){

langBtn.innerHTML =
lang.toUpperCase() +
" <span>▼</span>";

}

}

document
.querySelectorAll("[data-lang]")
.forEach(item=>{

item.addEventListener("click",()=>{

applyLanguage(
item.dataset.lang
);

if(langDropdown)
langDropdown.classList.remove("active");

});

});

applyLanguage(

localStorage.getItem(
"siteLanguage"
) || "ru"

);

/* ==========================
REVEAL ANIMATION
========================== */

const revealElements =
document.querySelectorAll(
".reveal"
);

const revealObserver =
new IntersectionObserver(

(entries, observer)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add(
"show"
);

observer.unobserve(entry.target);

}

});

},

{
threshold:.15
}

);

revealElements.forEach(el=>{

revealObserver.observe(el);

});

/* ==========================
LIGHTBOX
========================== */

const galleryImages =
document.querySelectorAll(
".masonry img"
);

const lightbox =
document.querySelector(
".lightbox"
);

const lightboxImage =
document.querySelector(
".lightbox img"
);

const closeLightbox =
document.querySelector(
".close-lightbox"
);

galleryImages.forEach(img=>{

img.addEventListener("click",()=>{

if(!lightbox || !lightboxImage) return;

lightbox.classList.add(
"active"
);

lightboxImage.src =
img.src;

});

});

if(closeLightbox){

closeLightbox.addEventListener(
"click",
()=>{

if(lightbox)
lightbox.classList.remove("active");

}

);
}

if(lightbox){

lightbox.addEventListener(
"click",
(e)=>{

if(
e.target === lightbox
){

lightbox.classList.remove(
"active"
);

}

}
);

}

/* ==========================
TELEGRAM
========================== */

const telegramUrl =
"https://t.me/YOUR_USERNAME";

document
.querySelectorAll(
".tg-btn,.telegram"
)
.forEach(link=>{

if(link.tagName === "A"){

link.href =
telegramUrl;

link.target =
"_blank";

}

});

/* ==========================
WHATSAPP
========================== */

const whatsappMessage =
encodeURIComponent(
"Здравствуйте. Хочу узнать подробнее об услугах ALL IN."
);

const whatsappUrl =
"https://wa.me/77786384785?text=" +
whatsappMessage;

document
.querySelectorAll(
".wp-btn,.whatsapp"
)
.forEach(link=>{

if(link.tagName === "A"){

link.href =
whatsappUrl;

link.target =
"_blank";

}

});

/* ==========================
CARD TOUCH EFFECT
========================== */

document
.querySelectorAll(
".adv-card,.service-card,.contact-card"
)
.forEach(card=>{

card.addEventListener(
"touchstart",
()=>{

card.style.transform =
"translateY(-6px)";

card.style.boxShadow =
"0 0 35px rgba(212,176,106,.18)";

}
);

card.addEventListener(
"touchend",
()=>{

setTimeout(()=>{

card.style.transform =
"";

card.style.boxShadow =
"";

},200);

}
);

});
