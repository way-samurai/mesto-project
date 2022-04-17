import { openPopup, closePopup } from "./utils";
import {
  profileName,
  profileCaption,
  editPopup,
  profileEditButton,
  profileFormSubmit,
  nameInput,
  operationInput,
  addPopup,
  addCardButton,
  popupAddForm,
  openImage,
} from "./data";

function closePopupEdit() {
  //закрытие попапа редактирования
  const popupEditCloseButton = editPopup.querySelector(".popup__close");
  popupEditCloseButton.addEventListener("click", (evt) => {
    const clickClose = evt.target.closest(".popup");
    closePopup(clickClose);
    popupAddForm.reset();
  });
}

function addPopupCardClose() {
  //закрытие попапа добавления
  const popupAddCardClose = addPopup.querySelector(".popup__close");
  popupAddCardClose.addEventListener("click", (evt) => {
    const clickClose = evt.target.closest(".popup");
    closePopup(clickClose);
    popupAddForm.reset();
  });
}

function closePopupPhoto() {
  //закрытие попапа с фото по клику
  const photoCloseButton = openImage.querySelector(".popup__close");
  photoCloseButton.addEventListener("click", (evt) => {
    const clickClose = evt.target.closest(".popup");
    closePopup(clickClose);
  });
}

function editProfile() {
  //Слушатель на кнопке редактирование профиля
  profileEditButton.addEventListener("click", function () {
    nameInput.value = profileName.textContent;
    operationInput.value = profileCaption.textContent;
    openPopup(editPopup);
  });
}

function openAddCardPopup() {
  //слушатель на кнопке добавления карточки
  addCardButton.addEventListener("click", function () {
    openPopup(addPopup);
  });
}

function saveInfoPtofile() {
  //сохранение профиля
  profileFormSubmit.addEventListener("submit", (evt) => {
    evt.preventDefault();
    //заполнение полей из введенных данных
    profileName.textContent = nameInput.value;
    profileCaption.textContent = operationInput.value;
    const clickClose = evt.target.closest(".popup");
    closePopup(clickClose);
  });
}

export {
  closePopupEdit,
  addPopupCardClose,
  closePopupPhoto,
  editProfile,
  openAddCardPopup,
  saveInfoPtofile,
};

