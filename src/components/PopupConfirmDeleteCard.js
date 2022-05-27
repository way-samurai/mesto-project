import Popup from "./Popup";

export default class PopupConfirmDeleteCard extends Popup{
  constructor(popupSelector, submitForm) {
    super(popupSelector)
    this._submitForm = submitForm;
  }

  setEventListeners() {
    super.setEventListeners();
    document.querySelector("#confirmDeleteButton")
    .addEventListener("mousedown", this._handleFormSubmit);
  }

  open(id, card) {
    this._id = id;
    this.card = card;
    super.open();
  }
}
