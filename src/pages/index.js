import "../pages/index.css";  //++++

import {
  popupAddForm,
  profileName,
  profileCaption,
  profileImg,
  placesElements,
  profileFormSubmit,
  formChangeAvatar,
  settings,
  confirmPopup,
  openImage
} from "../components/utils/data"; //++++

import { api
} from "../components/Api"; //++++

// import {
//   Promise
// } from "core-js"; //Зачем это?

import UserInfo from "../components/UserInfo"; //++++

import FormValidator from "../components/FormValidator.js"; //++++

import PopupConfirmDeleteCard from "../components/PopupConfirmDeleteCard"; //++++

import PopupWithImage from "../components/PopupWithImage"; //++++

import PopupWithForm from "../components/PopupWithForm";  //++++

//Валидация редактирования профиля
const editProfileValidator = new FormValidator(profileFormSubmit, settings);
editProfileValidator.enableValidation();  //+++

//Валидация редактирования аватара
const editCreateAvatarValidator = new FormValidator(formChangeAvatar, settings);
editCreateAvatarValidator.enableValidation();  //+++

//Валидация добавления карточки
const addCardFormValidator = new FormValidator(popupAddForm, settings);
addCardFormValidator.enableValidation();  //+++

export let userDataFromServer = null;  //++++

// openChangeAvatarPopup();
// openAddCardPopup();
// editProfileInfo();
// popupObjects.forEach((popup) => popup.closePopupByEscAndClickOverlay())

//Создание экземпляра класса UserInfo
export const userInfo = new UserInfo({
  nameInput: ".info-box__name",
  aboutInput: ".info-box__caption",
  avatarLink: ".profile__avatar-img"
}); //++++



// formChangeAvatar.addEventListener("submit", (evt) =>  changeAvatar(evt,api));
// profileFormSubmit.addEventListener("submit",(evt) =>  saveInfoPtofile(evt,api));
// popupAddForm.addEventListener("submit",(evt) => addCard(evt,api));

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cardsData]) => {
    userDataFromServer = userData;
    userInfo.setUserInfo(userDataFromServer);


    // const cards = cardsData.map((card) => createCard(card, userDataFromServer._id, api));
    placesElements.prepend(...cards);
  })
  .catch((err) => console.log(err));


//Удаление карточки со страницы
const popupConfirmDeleteCard = new PopupConfirmDeleteCard (confirmPopup,
  function handleFormSubmit() {
    api.deleteCard(popupConfirmDeleteCard._id)
      .then(() => {
        popupConfirmDeleteCard.card.remove();
        popupConfirmDeleteCard.close();
      })
      .catch((err) => console.log(err))
  }); //++++


//Попап с изображением
const popupWithImage = new PopupWithImage(openImage);


//Пример использования PopupWithForm
// const popupFormProfileEdit = new PopupWithForm(modalProfile,
//   function handleFormSubmit(data) {
//     'форма редактирования профиля'.renderLoading(true);
//     api.'функция из Api'(..., ...)
//       .then((...) => {

//       })
//       .catch((err) => console.error(err))
//       .finally(() => {
//
//       })
//   }, form);

popupWithImage.setEventListeners(); //+++
popupConfirmDeleteCard.setEventListeners();  //+++
