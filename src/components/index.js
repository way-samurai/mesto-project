import {createCard, addCard, renderingCards}  from './card' //скорее всего глюк vs code
import {initialCards} from './initialCards'; 
import {closePopup} from './utils';

import {
  closePopupEdit,
  addPopupCardClose,
  closePopupPhoto,
  editProfile,
  openAddCardPopup,
  saveInfoPtofile
} from './modal'

const popups = document.querySelectorAll('.popup');

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup)
    }
    if (evt.target.classList.contains('popup__close')) {
      closePopup(popup)
    }
  })
})

renderingCards(initialCards)

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

