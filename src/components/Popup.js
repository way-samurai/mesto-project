import {
  addPopup,
  changeAvatarPopup,
  confirmPopup,
  editPopup,
  openImage
} from "./data";

export class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._closeByEscape = this._closeByEscape.bind(this);
  }

  //функция открытия модального окна
  openPopup() {
    this._popupSelector.classList.add("popup_opened");
    document.addEventListener("keydown", this._closeByEscape);
  }

//Функция закрытия модального окна
  closePopup() {
    this._popupSelector.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._closeByEscape);
  }

//UPP Функция закрытия модального окна клавишей esc
  _closeByEscape(evt) {
    if (evt.key === "Escape") {
      const openedPopup = document.querySelector(".popup_opened");
      this.closePopup(openedPopup);
    }
  }

  //функция закрытия попапа разными способами
  closePopupByEscAndClickOverlay() {
    this._popupSelector.addEventListener("mousedown", (evt) => {
      if (evt.target.classList.contains("popup_opened")) {
        this.closePopup(this._popupSelector);
      }
    });
    this._popupSelector.addEventListener("click", (evt) => {
      if (evt.target.closest(".popup__close")) {
        this.closePopup(this._popupSelector);
      }
    });
  }
}

export let editPopupObject = new Popup(editPopup)
export let addPopupObject = new Popup(addPopup)
export let changeAvatarPopupObject = new Popup(changeAvatarPopup)
export let confirmPopupObject = new Popup(confirmPopup)
export let openImageObject = new Popup(openImage)
export let popupObjects = Array.from(document.querySelectorAll(".popup")).map((popup) => new Popup(popup));
