import "../pages/index.css";

import {
  popupAddForm,
  profileName,
  profileCaption,
  profileImg,
  placesElements,
  profileFormSubmit,
  formChangeAvatar,
  settings
} from "./data";

import {
  createCard,
  addCard
} from "./card";

import {
  saveInfoPtofile,
  changeAvatar
} from "./profile";


import {
  editProfileInfo,
  openAddCardPopup,
  openChangeAvatarPopup,
} from "./modal";


import { api
} from "./Api";

import {
  Promise
} from "core-js";


import {popupObjects} from "./Popup"

import UserInfo from "./UserInfo";


import FormValidator from "./FormValidator.js";

//Валидация редактирования профиля
const editProfileValidator = new FormValidator(profileFormSubmit, settings);
editProfileValidator.enableValidation();

//Валидация редактирования аватара
const editCreateAvatarValidator = new FormValidator(formChangeAvatar, settings);
editCreateAvatarValidator.enableValidation();

//Валидация добавления карточки
const addCardFormValidator = new FormValidator(popupAddForm, settings);
addCardFormValidator.enableValidation();

export let userDataFromServer = null;

openChangeAvatarPopup();
openAddCardPopup();
editProfileInfo();
popupObjects.forEach((popup) => popup.closePopupByEscAndClickOverlay())



//Создание экземпляра класса UserInfo
export const userInfo = new UserInfo({
  nameInput: ".info-box__name",
  aboutInput: ".info-box__caption",
  avatarLink: ".profile__avatar-img"
})

formChangeAvatar.addEventListener("submit", (evt) =>  changeAvatar(evt,api));
profileFormSubmit.addEventListener("submit",(evt) =>  saveInfoPtofile(evt,api));
popupAddForm.addEventListener("submit",(evt) => addCard(evt,api));


Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cardsData]) => {
    userDataFromServer = userData;
    userInfo.setUserInfo(userDataFromServer);

    const cards = cardsData.map((card) => createCard(card, userData._id, api));
    placesElements.prepend(...cards);
  })
  .catch((err) => console.log(err));

