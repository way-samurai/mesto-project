import "../pages/index.css";

import {
  popupAddForm,
  profileName,
  profileCaption,
  profileImg,
  placesElements,
  profileFormSubmit,
  formChangeAvatar,
} from "./data";

import { createCard, addCard } from "./card";

import { saveInfoPtofile, changeAvatar } from "./profile";

import {
  closePopupByEscAndClickOverlay
} from "./utils";

import {
  editProfileInfo,
  openAddCardPopup,
  openchangeAvatarPopup,
} from "./modal";

import { enableValidation } from "./validate.js";

import { getUserInfo, getInitialCards } from "./api.js";
import { Promise } from "core-js";

export let userDataFromServer = null;

openchangeAvatarPopup();
openAddCardPopup();
editProfileInfo();
closePopupByEscAndClickOverlay();

formChangeAvatar.addEventListener("submit", changeAvatar);
profileFormSubmit.addEventListener("submit", saveInfoPtofile);
popupAddForm.addEventListener("submit", addCard);

Promise.all([getUserInfo(), getInitialCards()])
  .then(([userData, cardsData]) => {
    userDataFromServer = userData;
    profileName.textContent = userData.name;
    profileCaption.textContent = userData.about;
    profileImg.src = userData.avatar;
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

