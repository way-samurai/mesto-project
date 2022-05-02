import "../pages/index.css";

import {
  popupAddForm,
  nameCardInput,
  linkCardInput,
  popupSubmitButton,
  profileName,
  profileCaption,
  profileImg,
  placesElements,
  confirmSubmitButton,
  confirmForm,
  editPopup,
  profileFormSubmit,
  confirmPopup
} from "./data";

import {
  addCard,
  createCard,
  handleDeleteCardButtonClick,
  submitDeleteCardAprove
} from "./card";

import { closePopup } from "./utils";
import {
  editProfile,
  openAddCardPopup,
  saveInfoPtofile,
} from "./modal";

import { enableValidation } from "./validate.js";

import {
  fetchGetUserInfo,
  fetchGetInitialCards
} from "./api.js";

openAddCardPopup();
editProfile();
profileFormSubmit.addEventListener("submit", saveInfoPtofile)
popupAddForm.addEventListener("submit", addCard);

//функция закрытия попапа
const popups = document.querySelectorAll(".popup");
popups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup_opened")) {
      closePopup(popup);
    }
  });
  popup.addEventListener("click", (evt) => {
    if (evt.target.closest(".popup__close")) {
      closePopup(popup);
    }
  });
});

Promise.all([fetchGetUserInfo(), fetchGetInitialCards()])
  .then(([userData, cardsData]) => {
    profileName.textContent = userData.name;
    profileCaption.textContent = userData.about;
    profileImg.src = userData.avatar; //Добавить разметку

    const cards = cardsData.map((card) => createCard(card, userData._id));
    placesElements.prepend(...cards);
  })
  .catch((err) => console.log(err));

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit",
  inactiveButtonClass: "popup__submit_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active",
});





