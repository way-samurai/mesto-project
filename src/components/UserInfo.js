export default class UserInfo {
  constructor({ userNameSelector, captionInputSelector, avatarSelectorLink }) {
    this._userNameSelector = document.querySelector(userNameSelector);
    this._userCaptionSelector = document.querySelector(userCaptionSelector);
    this._avatarSelectorLink = document.querySelector(avatarSelectorLink);
  }

  getUserInfo() {
    return {
      name: this._userNameSelector.textContent,
      caption: this._userCaptionSelector.textContent,
      avatarLink: this._avatarSelectorLink.textContent
    }
  }

  setUserInfo(data) {
    this._userNameSelector.textContent = data.name;
    this._userCaptionSelector.textContent = data.caption;
    this._avatarSelectorLink.textContent = data.avatarLink;
  }
}

