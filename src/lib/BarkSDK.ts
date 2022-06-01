import { default as axios } from 'axios';
import { BarkNotification } from './BarkNotification';
import { BarkUser } from './BarkUser';
import { BarkConfig } from "../types";

const demo: BarkConfig = {
  automaticallyCopy: "",
  badge: 0,
  body: "",
  category: "",
  copy: "",
  device_key: "",
  group: "",
  icon: "",
  isArchive: "",
  level: "",
  sound: "",
  title: "",
  url: ""
}

export class BarkSDK {
  private axiosInstance = axios.create({ validateStatus: () => true });
  constructor(private barkServer: string) {}
  resetServer(barkServer: string) {
    this.barkServer = barkServer;
    return this;
  }
  private async notifySingle(user: BarkUser, notification: BarkNotification) {
    const url = `${user.getServer() || this.barkServer}/push`;
    const config = notification.buildBarkMessageConfig();
    const keys = Object.keys(config) as (keyof BarkConfig)[] ;
    const filtered: {[k: string]: any} = {};
    keys.forEach((key) => {
      if (demo.hasOwnProperty(key) && config[key]) {
        filtered[key] = config[key];
      }
    });
    const data: Partial<BarkConfig> = {
      ...filtered,
      device_key: user.getKey(),
    }
    return await this.axiosInstance.post(url, data).then((res) => {
      return true;
    }).catch(() => {
      return false;
    });
  }
  async notify(user: BarkUser | BarkUser[], notification: BarkNotification): Promise<boolean[]> {
    if (user instanceof Array) {
      return Promise.all(user.map(u => this.notifySingle(u, notification)));
    }
    return [await this.notifySingle(user, notification)];
  }
}
