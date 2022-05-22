import { BarkNotification, BarkSDK, BarkUser } from "../src/";

let notification: BarkNotification;

describe('test BarkSDK', () => {
  beforeAll(() => {
    notification = new BarkNotification('This is Content');
    notification
      .setTitle('Test Title')
      .setContent('Update Content')
      .setSound('shake')
      .setJumpURL('https://www.google.com')
      .setIcon('https://jestjs.io/img/jest.png')
      .setLevel('active')
      .setGroup('testGroup')
      .setSound('gotosleep')
      .archive(false)
      .archive()
      .autoCopy()
      .autoCopy('Copy To Clipboard')
  })
  test('test BarkNotification', () => {
    expect(notification.buildPathAndParams()).toBeDefined();
  });
  test('test BarkSDK notify', async () => {
    const key = 'YOUR_BARK_KEY';
    const sdk = new BarkSDK('https://yourbark');
    const success = await sdk.notify(new BarkUser(key), notification);
    expect(typeof success).toBe('boolean');
  });
  test('test notification clone', () => {
    expect(notification.clone().buildPathAndParams()).toBe(notification.buildPathAndParams());
  });
  test('test BarkUser', () => {
    const key = 'YOUR_BARK_KEY';
    const u1 = new BarkUser('https://yourbark/YOUR_BARK_KEY/这里改成你自己的推送内容');
    const u2 = new BarkUser(key);
    expect(u1.getServer()).toBe('https://yourbark');
    expect(u1.getKey()).toBe(u2.getKey());
  });
});
