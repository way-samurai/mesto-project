import { openPopup } from "./utils";
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
    profileSubmitButton.disabled = true;
    profileSubmitButton.classList.add("popup__submit_disabled");
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
    changeAvatarSubmit.disabled = true;
    changeAvatarSubmit.classList.add("popup__submit_disabled");
  });
}

export { editProfileInfo, openAddCardPopup, openchangeAvatarPopup };
