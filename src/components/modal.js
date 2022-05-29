import {
  deactivatingButton
} from "./utils";

import {
  profileName,
  profileCaption,
  editPopup,
  profileEditButton,
  nameInput,
  operationInput,
  addPopup,
  addCardButton,
  profileAvatarContainer,
  changeAvatarPopup,
  changeAvatarSubmit,
  profileSubmitButton,
} from "./data";

import {Popup} from "./Popup";

function editProfileInfo() {
  //Слушатель на кнопке редактирование профиля
  profileEditButton.addEventListener("click", function () {
    nameInput.value = profileName.textContent;
    operationInput.value = profileCaption.textContent;
    editPopupObject.openPopup();
    deactivatingButton(profileSubmitButton);
  });
}

function openAddCardPopup() {
  //слушатель на кнопке добавления карточки
  addCardButton.addEventListener("click", function () {
    addPopupObject.openPopup();
  });
}

function openChangeAvatarPopup() {
  //Слушатель на кнопке аватара
  profileAvatarContainer.addEventListener("click", function () {
    changeAvatarPopupObject.openPopup();
    deactivatingButton(changeAvatarSubmit);
  });
}

export {
  editProfileInfo,
  openAddCardPopup,
  openChangeAvatarPopup
};
