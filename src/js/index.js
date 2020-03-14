const openModalA = document.querySelector(".main__container__featured-works__modal-a");
const openModalB = document.querySelector(".main__container__featured-works__modal-b");
const openModalC = document.querySelector(".main__container__featured-works__modal-c");
const openModalD = document.querySelector(".main__container__featured-works__modal-d");
const openModalE = document.querySelector(".main__container__featured-works__modal-e");
const openModalF = document.querySelector(".main__container__featured-works__modal-f");
const backgroundModal = document.querySelector(".main__container__featured-works__overlay");

let stylaA = getComputedStyle(openModalA);

function showModalWindow(modal){
  if(modal.style.display = "none") {
    backgroundModal.style.display = "flex";
    modal.style.display = "flex";
  } else {
    modal.style.display = "none";
    backgroundModal.style.display = "none";
  }
};

function hideModalWindow(modal){
  if(modal.style.display = "flex") {
    backgroundModal.style.display = "none";
    modal.style.display = "none";
  }
};
