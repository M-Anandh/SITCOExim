let menuList = document.getElementById("menuList");
let navbar = document.getElementById("navbar");
menuList.style.maxHeight = "0px";

function toggleMenu() {
  if (menuList.style.maxHeight === "0px") {
    menuList.style.maxHeight = "450px";
  } else {
    menuList.style.maxHeight = "0px";
  }
}

// Change navbar background on scroll and close menu if open
window.onscroll = function () {
  if (window.pageYOffset > 0) {
    navbar.classList.add("sticky");

    // Close the menu if it's open
    menuList.style.maxHeight = "0px";
  } else {
    navbar.classList.remove("sticky");
  }
};

// Close menu if clicked outside
document.addEventListener("click", function (event) {
  const isClickInsideNavbar = navbar.contains(event.target);
  const isClickInsideMenu = menuList.contains(event.target);

  if (!isClickInsideNavbar && !isClickInsideMenu) {
    menuList.style.maxHeight = "0px"; // Close the menu
  }
});

// Close menu on touch
document.addEventListener("touchstart", function (event) {
  const isTouchInsideNavbar = navbar.contains(event.target);
  const isTouchInsideMenu = menuList.contains(event.target);

  if (!isTouchInsideNavbar && !isTouchInsideMenu) {
    menuList.style.maxHeight = "0px"; // Close the menu
  }
});

// transition stopper
let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-trans-stop");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-trans-stop");
  }, 400);
});

// text change
const icons = ["ship", "box", "globe"];
const subtext = [
  "global trade solutions",
  "connecting businesses",
  "seamless logistics",
];
const largeText = [
  "Connecting Businesses Beyond Borders",
  "Simplifying Global Trade Every Day",
  "Empowering Growth Through Trade Solutions",
];

let count = 1;

function textChange() {
  const mainDiv = document.querySelector(".hero-content-change");

  setInterval(() => {
    mainDiv.innerHTML = `
            <div>
                <span>
                    <i class = "fas fa-${icons[count]}"></i>
                </span>
                <h3>
                    <div class = "line"></div>
                    <span>${subtext[count]}</span>
                    <div class = "line"></div>
                </h3>
                <h1 class = "hero-lg-text">
                    ${largeText[count]}
                </h1>
            </div>
        `;
    count++;
    if (count > 2) count = 0;
  }, 4000);
}
textChange();

document.addEventListener("DOMContentLoaded", function () {
  const whatsappFloat = document.querySelector(".whatsapp-float");
  whatsappFloat.style.transform = "translateY(100px)";
  whatsappFloat.style.opacity = 0;
  setTimeout(() => {
    whatsappFloat.style.transition = "all 0.5s ease";
    whatsappFloat.style.transform = "translateY(0)";
    whatsappFloat.style.opacity = 1;
  }, 300);
});

window.onload = function () {
  const loader = document.getElementById("loader");
  loader.style.display = "none";
};

// Disable Right Click
// document.addEventListener("contextmenu", (event) => event.preventDefault());

// // Disable Certain Key Combinations
// document.addEventListener("keydown", (event) => {
//   if (
//     event.key === "F12" || // Disable F12
//     (event.ctrlKey &&
//       event.shiftKey &&
//       (event.key === "I" || event.key === "J")) || // Disable Ctrl+Shift+I/J
//     (event.ctrlKey && event.key === "U") ||
//     (event.ctrlKey && event.key === "u") // Disable Ctrl+U
//   ) {
//     event.preventDefault();
//   }
// });
