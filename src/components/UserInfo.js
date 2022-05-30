export default class UserInfo {
  constructor({ nameInput, aboutInput, avatarLink }) {
    this._nameInput = document.querySelector(nameInput);
    this._aboutInput = document.querySelector(aboutInput);
    this._avatarLink = document.querySelector(avatarLink);
  }

  getInfoProfile() {
    return {
      username: this._nameInput.textContent,
      operation: this._aboutInput.textContent,
      avatarLink: this._avatarLink.src,
    };
  }

  setUserInfo(data) {
    this._nameInput.textContent = data.name;
    this._aboutInput.textContent = data.about;
    this._avatarLink.src = data.avatar;
  }

  getUserId(data) {
    //Если не понадобится, то удалить!
    return (this._id = data._id);
  }
}
