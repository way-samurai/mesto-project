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
} from "./data";

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
  editProfile,
  openAddCardPopup,
  saveInfoPtofile,
};

