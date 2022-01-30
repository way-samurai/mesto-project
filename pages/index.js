"use strict";

//Массив с карточками
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const pageContent = document.querySelector(".content");

//Шаблон карточки
const cardTemplate = document.querySelector(".card-template");

//Поля вставки значений из редактора профиля
const profile = pageContent.querySelector(".profile");
const profileInfo = pageContent.querySelector(".profile__info-box");

const profileName = profileInfo.querySelector(".info-box__name");
const profileCaption = profileInfo.querySelector(".info-box__caption");

//Редактирование
//Попап редактирования профиля
const editPopup = document.querySelector("#editPopup");
//Кнопка редактирования профиля
const profileEditButton = profileInfo.querySelector(".info-box__edit-button");
//Кнопка сохранения сохранения информации профиля
const profileSaveButton = editPopup.querySelector(".popup__submit");
//Поле ввода "Имя профиля" в форме редактирования профиля
const nameInput = editPopup.querySelector(".popup__item_data_name");
//Поле ввода "Деятельность" в форме редактирования профиля
const operationInput = editPopup.querySelector(".popup__item_data_operation");

//Добавление карточек
//Попап добавления карточек мест
const addPopup = document.querySelector("#addPopup");
//Кнопка добавления карточки места
const addCardButton = profile.querySelector(".profile__add-button");
//Форма добавления карточек
const popupAddForm = addPopup.querySelector(".popup__container");
//Кнопка создания карточки
const saveCardButton = addPopup.querySelector(".popup__submit");
//Поле ввода названия карточки места
const nameCardInput = addPopup.querySelector(".popup__item_data_name");
//Поле для ввода ссылки на картинку места
const linkCardInput = addPopup.querySelector(".popup__item_data_operation");

//Открытие изображения
//Попап открытия изображения
const openImage = document.querySelector("#openImage");
//Картинка
const popupImage = openImage.querySelector(".popup__fullscreen-image");
//Подпись к картинке
const popupImageCaption = openImage.querySelector(".popup__image-caption");

//Секция в которую вставляем карточки
const placesElements = pageContent.querySelector(".elements");

//Функция добавления карточек
function togglePopup(popup) {
  popup.classList.toggle("popup_opened");
}

//Добавление карточек
const addCardToContainer = (cardElement) => {
  //клонируем разметку шаблона карточки
  const cardsElement = cardTemplate.content.cloneNode(true);
  //Название места
  cardsElement.querySelector(".place__title").textContent = cardElement.name;
  //Изображение места
  cardsElement.querySelector(".place__image").src = cardElement.link;
  //Альтернативное название изображение в случае не прогрузки картинки или нерабочей ссылки
  cardsElement.querySelector(".place__image").alt = cardElement.name;
  //кнопка лайка
  cardsElement
    .querySelector(".place__like-button")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("place__like-button_active");
    });
  //Удаление карточки
  cardsElement
    .querySelector(".place__delete-button")
    .addEventListener("click", (evt) => {
      const cardItem = evt.target.closest(".place");
      cardItem.remove();
    });

  //Данные для попапа с фото
  cardsElement
    .querySelector(".place__image")
    .addEventListener("click", (evt) => {
      const cardLink = evt.target.src;
      const cardName = evt.target.closest(".place");
      const cardText = cardName.querySelector(".place__title").textContent;

      //открытие попапа с фото
      openImage.classList.toggle("popup_opened");
      //присвоение ссылки картинке
      popupImage.src = cardLink;
      popupImageCaption.textContent = cardText;
    });

  //вставка карточки в DOM
  placesElements.prepend(cardsElement);
};

//рендер элементов массива
const reverseCards = initialCards.reverse();
initialCards.forEach(addCardToContainer);

//закрытие попапа редактирования
const popupEditCloseButton = editPopup.querySelector(".popup__close");
popupEditCloseButton.addEventListener("click", (evt) => {
  const clickClose = evt.target.closest(".popup");
  clickClose.classList.toggle("popup_opened");
});

//закрытие попапа добавления
const popupAddCardClose = addPopup.querySelector(".popup__close");
popupAddCardClose.addEventListener("click", (evt) => {
  const clickClose = evt.target.closest(".popup");
  clickClose.classList.toggle("popup_opened");
  popupAddForm.reset();
});

//закрытие попапа с фото
const photoCloseButton = openImage.querySelector(".popup__close");
photoCloseButton.addEventListener("click", (evt) => {
  const clickClose = evt.target.closest(".popup");
  clickClose.classList.toggle("popup_opened");
});

//Слушатель на кнопке редактирование профиля
profileEditButton.addEventListener("click", function () {
  nameInput.value = profileName.textContent;
  operationInput.value = profileCaption.textContent;
  togglePopup(editPopup);
});

//слушатель на кнопке добавления карточки
addCardButton.addEventListener("click", function () {
  togglePopup(addPopup);
});

//сохранение профиля
profileSaveButton.addEventListener("click", (evt) => {
  evt.preventDefault();
  //заполнение полей из введенных данных
  profileName.textContent = nameInput.value;
  profileCaption.textContent = operationInput.value;
  //сброс полей формы
  popupAddForm.reset();
  const clickClose = evt.target.closest(".popup");
  clickClose.classList.toggle("popup_opened");
});

//Добавление карточки
saveCardButton.addEventListener("click", (evt) => {
  evt.preventDefault();
  //создаем объект из введенных данных
  const newCard = {
    name: nameCardInput.value,
    link: linkCardInput.value,
  };
  //вызов функции добавления карточки с новым объектом
  addCardToContainer(newCard);
  popupAddForm.reset();
  //закрытие попапа
  const clickClose = evt.target.closest(".popup");
  clickClose.classList.toggle("popup_opened");
});

