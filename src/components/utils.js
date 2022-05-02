import {
  confirmPopup,
  confirmSubmitButton,
} from "./data";

import {
  aprovedCardDeletion
} from "./card";

//функция открытия модального окна
export function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeByEscape);
}

//Функция закрытия модального окна
export function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeByEscape);

  if (popup === confirmPopup) {
    confirmSubmitButton.removeEventListener("click", aprovedCardDeletion);
  }
}

//UPP Функция закрытия модального окна клавишей esc
function closeByEscape(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

//Прорисовка кнопки при выполнения fetch запроса
export function renderLoading(isLoading, someButton) {
  const ellipsisText = `${someButton.textContent}...`.replace(/\s/g, '');
   if (isLoading) {
     someButton.textContent = ellipsisText;
   } else {
     const someButonTextContent = someButton.textContent;
     someButton.textContent = someButonTextContent.slice(0, -3);
   }
 }

