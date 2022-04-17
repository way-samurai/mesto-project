import "../pages/index.css";

import { popupAddForm, nameCardInput, linkCardInput } from "./data";

import { addCard, renderingCards } from "./card";
import { initialCards } from "./initialCards";
import { closePopup } from "./utils";
import {
  closePopupEdit,
  addPopupCardClose,
  closePopupPhoto,
  editProfile,
  openAddCardPopup,
  saveInfoPtofile,
} from "./modal";

import { enableValidation } from "./validate.js";

openAddCardPopup();
addPopupCardClose();
closePopupPhoto();
editProfile();
closePopupEdit();
saveInfoPtofile();

//функция закрытия попапа по клику на оверлей
const popups = document.querySelectorAll(".popup");
popups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup_opened")) {
      closePopup(popup);
    }
    if (evt.target.classList.contains("popup__close")) {
      closePopup(popup);
    }
  });
});

renderingCards(initialCards);

//Добавление карточки
popupAddForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  //создаем объект из введенных данных
  const newCard = {
    name: nameCardInput.value,
    link: linkCardInput.value,
  };
  //вызов функции добавления карточки с новым объектом
  addCard(newCard);
  popupAddForm.reset();
  //закрытие попапа
  const clickClose = evt.target.closest(".popup");
  closePopup(clickClose);
});

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit",
  inactiveButtonClass: "popup__submit_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active",
});
