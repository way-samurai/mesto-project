import { openPopup, closePopup, renderLoading } from "./utils";
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
  profileSubmitButton
} from "./data";
import {fetchEditUserInfo} from "./api";

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

function saveInfoPtofile(evt) {
  evt.preventDefault();
  renderLoading(true, profileSubmitButton);
  fetchEditUserInfo(nameInput.value, operationInput.value)
    .then(() => {
      profileName.textContent = nameInput.value;
      profileCaption.textContent = operationInput.value;
      closePopup(editPopup);
    })
    .catch((err) => console.log(err))
    .finally(() => renderLoading(false, profileSubmitButton));
}

export {
  editProfile,
  openAddCardPopup,
  saveInfoPtofile,
};

