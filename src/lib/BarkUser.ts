export class BarkUser {
  private readonly key: string = '';
  private readonly server: string = '';
  constructor(keyOrURL: string) {
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
  getServer() {
    return this.server;
  }
  getKey() {
    return this.key;
  }
}
