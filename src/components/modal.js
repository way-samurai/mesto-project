import { openPopup, deactivatingButton } from "./utils";

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

function editProfileInfo() {
  //Слушатель на кнопке редактирование профиля
  profileEditButton.addEventListener("click", function () {
    nameInput.value = profileName.textContent;
    operationInput.value = profileCaption.textContent;
    openPopup(editPopup);
    deactivatingButton(profileSubmitButton);
  });
}

function openAddCardPopup() {
  //слушатель на кнопке добавления карточки
  addCardButton.addEventListener("click", function () {
    openPopup(addPopup);
  });
}

function openchangeAvatarPopup() {
  //Слушатель на кнопке аватара
  profileAvatarContainer.addEventListener("click", function () {
    openPopup(changeAvatarPopup);
    deactivatingButton(changeAvatarSubmit);
  });
}

export { editProfileInfo, openAddCardPopup, openchangeAvatarPopup };
