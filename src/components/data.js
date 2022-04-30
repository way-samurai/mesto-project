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
//Форма отправки информации профиля
const profileFormSubmit = editPopup.querySelector(".popup__form");
//Поле ввода "Имя профиля" в форме редактирования профиля
const nameInput = editPopup.querySelector(".popup__input_data_name");
//Поле ввода "Деятельность" в форме редактирования профиля
const operationInput = editPopup.querySelector(".popup__input_data_operation");

//Добавление карточек
//Попап добавления карточек мест
const addPopup = document.querySelector("#addPopup");
//Кнопка добавления карточки места
const addCardButton = profile.querySelector(".profile__add-button");
//Форма добавления карточек
const popupAddForm = addPopup.querySelector(".popup__form");
//Кнопка сабмита формы добавления карточки
const popupSubmitButton = popupAddForm.querySelector('.popup__submit');
//Поле ввода названия карточки места
const nameCardInput = addPopup.querySelector(".popup__input_data_name");
//Поле для ввода ссылки на картинку места
const linkCardInput = addPopup.querySelector(".popup__input_data_operation");




//Изменение карточек
//Попап изменения аватара
const changeAvatarPopup = document.querySelector("#changeAvatarPopup");
//Форма изменения фото аватара
const formChangeAvatar = changeAvatarPopup.querySelector(".popup__form");
//Поле ввода ссылки на картинку аватара
const linkAvatarInput = formChangeAvatar.querySelector("#avarar-link");
//Кнопка сабмита формы изменения аватара
const changeAvatarSubmit = formChangeAvatar.querySelector(".popup__submit");




//Открытие изображения
//Попап открытия изображения
const openImage = document.querySelector("#openImage");
//Картинка
const popupImage = openImage.querySelector(".popup__fullscreen-image");
//Подпись к картинке
const popupImageCaption = openImage.querySelector(".popup__image-caption");

//Секция в которую вставляем карточки
const placesElements = pageContent.querySelector(".elements");

export {
  pageContent,
  cardTemplate,
  profile,
  profileInfo,
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
  nameCardInput,
  linkCardInput,
  openImage,
  popupImage,
  popupImageCaption,
  placesElements,
  popupSubmitButton,

  changeAvatarPopup,
  formChangeAvatar,
  linkAvatarInput,
  changeAvatarSubmit
}
