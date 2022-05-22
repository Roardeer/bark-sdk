import { BarkConfig, BarkSound, BarkLevel, BarkConfigKey } from '../index';
export class BarkNotification {
  protected config: Partial<BarkConfig> = {};
  constructor(private content: string, private title?: string) {}
  setTitle(title: string) {
    this.title = title;
    return this;
  }
  setContent(content: string) {
    this.content = content;
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
  autoCopy(copy?: string) {
    this.config.autoCopy = copy ? 1 : 0;
    this.config.copy = copy;
    return this;
  }
  archive(archive?: boolean) {
    this.config.isArchive = archive === false ? 0 : 1;
    return this;
  }
  clone() {
    const newInstance = new BarkNotification(this.content, this.title);
    newInstance.config = this.config;
    return newInstance;
  }
  buildPathAndParams(): string {
    const urlSchema = new URLSearchParams();
    Object.keys(this.config).forEach(k => {
      const item = this.config[k as BarkConfigKey];
      if (item !== undefined) urlSchema.append(k, item.toString());
    });
    const str = urlSchema.toString();
    return [[this.title, this.content].filter(Boolean).join('/'), str].join('?');
  }
}
