import { default as axios } from 'axios';
import { BarkNotification } from './BarkNotification';
import { BarkUser } from './BarkUser';

export class BarkSDK {
  private axiosInstance = axios.create({ validateStatus: () => true });
  constructor(private barkServer: string) {}
  private buildNotifyURL(key: string, pathAndParams: string) {
    return `${this.barkServer}/${key}/${pathAndParams}`;
  }
  async notify(user: BarkUser, notification: BarkNotification): Promise<boolean> {
    const url = this.buildNotifyURL(user.getKey(), notification.buildPathAndParams());
    return await this.axiosInstance.get(url).then(() => true).catch(() => false);
  }
}
