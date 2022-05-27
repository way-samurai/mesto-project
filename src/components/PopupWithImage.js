import Popup from "./Popup";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imgTitle = document.querySelector('.popup__fullscreen-image');
    this._imgLink = document.querySelector('.popup__image-caption');
  }

  open(name, link) {
    super.open();
    this._imgLink.src = link;
    this._imgTitle.alt = name;
    this._imgTitle.textContent = name;
  }
}
