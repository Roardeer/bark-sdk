import { BarkConfig, BarkSound, BarkLevel } from '../index';
export class BarkNotification {
  protected config: Partial<BarkConfig> = {};
  constructor(content?: string, title?: string) {
    this.config.body = content;
    this.config.title = title;
  }
  setTitle(title?: string) {
    this.config.title = title;
    return this;
  }
  setContent(content?: string) {
    this.config.body = content;
    return this;
  }
  setCategory(category?: string) {
    this.config.category = category || this.config.category;
    return this;
  }
  setBadge(num?: number) {
    this.config.badge = num;
    return this;
  }
  setSound(sound?: BarkSound) {
    this.config.sound = sound;
    return this;
  }
  setIcon(icon?: string) {
    this.config.icon = icon;
    return this;
  }
  setGroup(groupName?: string) {
    this.config.group = groupName;
    return this;
  }
  setLevel(level?: BarkLevel) {
    this.config.level = level;
    return this;
  }
  setJumpURL(url?: string) {
    this.config.url = url;
    return this;
  }
  autoCopy(autoCopy?: boolean) {
    this.config.automaticallyCopy = autoCopy === false ? void(0) : '1';
    return this;
  }
  setCopyText(text: string) {
    this.config.copy = text;
    return this;
  }
  archive(archive?: boolean) {
    // false 一定是不保存，调用方法但不穿参数则认为需要保存，不调用此方法将有客户端决定是否保存。
    this.config.isArchive = archive === false ? '0' : '1';
    return this;
  }
  buildBarkMessageConfig() {
    return { ...this.config };
  }
  clone() {
    const newInstance = new BarkNotification();
    newInstance.config = this.config;
    return newInstance;
  }
  merge(config: Partial<BarkConfig>) {
    this.config = { ...this.config, ...config };
    return this;
  }
}
