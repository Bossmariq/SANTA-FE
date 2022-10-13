let dropDownNavBar = document.getElementById("dropdownNavbar");
let dropDown = document.getElementById("dropdown");
let menuBtn = document.getElementById("menu-btn");
let mySidenav = document.getElementById("mySidenav");
let mobileMenu1 = document.getElementById("mobile-menu1");
let mobile = document.getElementById("mobile");
let contactPage = document.getElementById("contact-page");
let body = document.getElementById("body");
let contactPageCloseBtn = document.getElementById("contact-close-btn");
let contactBtn = document.getElementsByClassName("contact-page-btn");
let emailInput = document.getElementById("email-input");
let allInput = document.getElementsByClassName("input");
let contactSubmit = document.getElementById("contact-submit");
let newDate = new Date();
newDate = newDate.getFullYear();
// let year = newDate.getFullYear();
// let month = newDate.getMonth() + 1;
// let day = newDate.getDate();
// newDate = `${day}/${month}/${year}`;
let lastStatement = document.getElementById("lastStatement");

contactSubmit.addEventListener("click", isEmpty);

function isEmpty() {
  for (var i = 0, len = allInput.length; i < len; i++) {
    if (allInput[i].value === "") {
      allInput[i].classList.add("border-2");
      allInput[i].classList.add("border-red-600");
      return false;
    } else {
      allInput[i].classList.remove("border-2");
      allInput[i].classList.remove("border-red-600");
      allInput[i].value = '';
      window.location.reload()
    }
  }
}

function ValidateEmail(inputText) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.value.match(mailformat)) {
    emailInput.classList.remove("border-2");
    emailInput.classList.remove("border-red-600");
    document.form1.text1.focus();
    return true;
  } else {
    alert("You have entered an invalid email address!");
    emailInput.classList.add("border-red-600");
    emailInput.classList.remove("border-green-700");
    document.form1.text1.focus();
    return false;
  }
}

// LANDING PAGE CAROUSEL
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 1,
  centeredSlides: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// ABOUT US DROPDOWN
dropDown.addEventListener("mouseover", navToggle);
dropDown.addEventListener("mouseout", navToggle);

function navToggle() {
  dropDownNavBar.classList.toggle("h-0");
  dropDownNavBar.classList.toggle("h-36");
}

// MOBILE MENU AND OTHER SUB MENUS
menuBtn.addEventListener("click", openNav);
mobileMenu1.addEventListener("click", showMenu);

function openNav() {
  mySidenav.classList.toggle("w-full");
  mySidenav.classList.toggle("w-0");
  menuBtn.classList.toggle("open");
}

function showMenu() {
  mobile.classList.toggle("h-0");
  mobile.classList.toggle("h-44");
}

// CONTACT PAGE
contactPageCloseBtn.addEventListener("click", showContactPage);
for (var i = 0, len = contactBtn.length; i < len; i++) {
  contactBtn[i].addEventListener("click", showContactPage);
}

function showContactPage() {
  contactPage.classList.toggle("w-full");
  contactPage.classList.toggle("w-0");
  body.classList.toggle("overflow-y-hidden");
  body.classList.toggle("overflow-y-visible");
}

// DYNAMIC YEAR
lastStatement.innerText = `@ ${newDate} Santa FE Homes. All Rights Reserved. Site Designed By: `;
lastStatement.innerHTML +=
  "<span class='text-white text-sm'>BM TECH.</span>";

