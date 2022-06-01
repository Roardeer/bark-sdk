export class BarkUser {
  private key: string = '';
  private server: string = '';
  constructor(keyOrURL: string) {
    this.makeUserFormKeyOrUrl(keyOrURL);
  }
  private makeUserFormKeyOrUrl(keyOrURL: string) {
    if (!BarkUser.isURL(keyOrURL)) {
      this.key = keyOrURL;
      return;
    }
    const url = new URL(keyOrURL);
    this.server = `${url.protocol}//${url.host}`;
    this.key = url.pathname.split('/').filter(Boolean)[0];
  }
  private static isURL(keyOrURL: string) {
    try {
      const url = new URL(keyOrURL);
      return Boolean(url);
    } catch (e) {
      return false;
    }
  }
  switchTo(user: string | BarkUser): BarkUser {
    if (typeof user === "string") {
      this.makeUserFormKeyOrUrl(user);
      return this;
    }
    this.key = user.getKey();
    this.server = user.getServer();
    return this;
  }
  getServer() {
    return this.server;
  }
  getKey() {
    return this.key;
  }
}
