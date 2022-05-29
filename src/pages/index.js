import "../pages/index.css"; //++++

import {
  popupAddForm,
  editPopup,
  profileName,
  profileCaption,
  profileImg,
  placesElements,
  profileFormSubmit,
  formChangeAvatar,
  settings,
  confirmPopup,
  openImage,
  profileEditButton,
  changeAvatarPopup,
  profileAvatarContainer,
  linkAvatarInput
} from "../components/utils/data.js"; //++++

import { api } from "../components/api.js"; //++++

// import {
//   Promise
// } from "core-js"; //Зачем это?

import UserInfo from "../components/UserInfo"; //++++

import Section from "../components/Section";

import Card from "../components/Card";

import FormValidator from "../components/FormValidator.js"; //++++

import PopupConfirmDeleteCard from "../components/PopupConfirmDeleteCard"; //++++

import PopupWithImage from "../components/PopupWithImage"; //++++

import PopupWithForm from "../components/PopupWithForm"; //++++

//Валидация редактирования профиля
const editProfileValidator = new FormValidator(profileFormSubmit, settings);
editProfileValidator.enableValidation(); //???

//Валидация редактирования аватара
const editCreateAvatarValidator = new FormValidator(formChangeAvatar, settings);
editCreateAvatarValidator.enableValidation(); //???

//Валидация добавления карточки
const addCardFormValidator = new FormValidator(popupAddForm, settings);
addCardFormValidator.enableValidation(); //???

export let userDataFromServer = null; //++++

//Создание экземпляра класса UserInfo
const userInfo = new UserInfo({
  nameInput: ".info-box__name",
  aboutInput: ".info-box__caption",
  avatarLink: ".profile__avatar-img",
}); //++++

const cardList = new Section(renderCard, ".elements");

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cardsData]) => {
    userDataFromServer = userData;
    userInfo.setUserInfo(userDataFromServer);
    cardList.renderItems(cardsData);
  })
  .catch((err) => console.log(err));

//Удаление карточки со страницы
const popupConfirmDeleteCard = new PopupConfirmDeleteCard(
  confirmPopup,
  function () {
    popupConfirmDeleteCard.renderLoading(true);
    api
      .deleteCard(popupConfirmDeleteCard._id)
      .then(() => {
        popupConfirmDeleteCard.card.remove();
        popupConfirmDeleteCard.close();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        popupConfirmDeleteCard.renderLoading(false);
      });
  }
); //++++

//Попап с изображением
const popupWithImage = new PopupWithImage(openImage);

//Попап редактирования профиля
const popupChangeUserInfo = new PopupWithForm(
  editPopup,
  function (data) {
    popupChangeUserInfo.renderLoading(true);
    api
      .editUserInfo(data.name, data.about)
      .then((user) => {
        console.log(user)
        userInfo.setUserInfo(user);
        popupChangeUserInfo.close();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        popupChangeUserInfo.renderLoading(false);
      });
  },
  profileFormSubmit
);




//Попап редактирования аватара
const popupChangeUserAvatar = new PopupWithForm(
  changeAvatarPopup,
  function (data) {
    popupChangeUserAvatar.renderLoading(true);
    api
      .editUserAvatar(data['avatar-link']) //Найти причину и исправить!!!
      .then((user) => {
        userInfo.setUserInfo(user);
        popupChangeUserAvatar.close();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        popupChangeUserAvatar.renderLoading(false);

      });


  },
  formChangeAvatar
);




//Попап редактирования карточки

//Пример использования PopupWithForm
// const popupFormProfileEdit = new PopupWithForm(modalProfile,
//   function handleFormSubmit(data) {
//     'форма редактирования профиля'.renderLoading(true);
//     api.'функция из Api'(..., ...)
//       .then((...) => {

//       })
//       .catch((err) => console.error(err))
//       .finally(() => {

//       })
//   }, form);

popupWithImage.setEventListeners(); //+++
popupConfirmDeleteCard.setEventListeners(); //+++
popupChangeUserInfo.setEventListeners(); //+++
popupChangeUserAvatar.setEventListeners(); //+++

function renderCard(item) {
  const newCard = new Card(
    {
      selector: ".card-template",
    },
    item,
    api,
    userDataFromServer,
    handleCardClick,
    handleCardDelete
  ).generate();

  return newCard;
}

function handleCardClick(name, link) {
  popupWithImage.open(name, link);
}

function handleCardDelete(id, card) {
  popupConfirmDeleteCard.open(id, card);
}

//слушатель открытия попапа редактирования профиля
profileEditButton.addEventListener("click", () => {
  popupChangeUserInfo.setInputValues(userInfo.getInfoProfile());
  popupChangeUserInfo.open();
  addCardFormValidator.resetValidation();
});

//слушатель открытия попапа изменения аватара
profileAvatarContainer.addEventListener("click", () => {
  popupChangeUserAvatar.open();
});
