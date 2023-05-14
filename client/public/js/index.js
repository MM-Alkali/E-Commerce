const hamburer = document.querySelector(".hamburger");
const navList = document.querySelector(".navlist");

if (hamburer) {
  hamburer.addEventListener("click", () => {
    navList.classList.toggle("open");
  });
}

// Popup
const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".popupclose");

if (popup) {
  closePopup.addEventListener("click", () => {
    popup.classList.add("hidepopup");
  });

  window.addEventListener("load", () => {
    setTimeout(() => {
      popup.classList.remove("hidepopup");
    }, 1000);
  });
}
