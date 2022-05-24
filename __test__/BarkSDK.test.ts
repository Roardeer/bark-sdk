import { BarkNotification, BarkSDK, BarkUser } from "../src";

let notification: BarkNotification;

const BARK_URL = process.env.BARK_URL || '';

describe('test BarkSDK', () => {
  beforeAll(() => {
    notification = new BarkNotification();
    notification
      .setTitle('from bark-sdk')
      .setContent('Test Content')
      .setCategory('')
      .setSound('shake')
      .setJumpURL('https://www.google.com')
      .setIcon('https://jestjs.io/img/jest.png')
      .setLevel('active')
      .setGroup('testGroup')
      .setCopyText('Copy Text')
      .setBadge(3);
  })
  test('test BarkNotification', () => {
    expect(notification.buildBarkMessageConfig()).toBeDefined();
    expect(notification.buildBarkMessageConfig().isArchive).toEqual(undefined);
    expect(notification.archive().buildBarkMessageConfig().isArchive).toBe('1');
    expect(notification.archive(false).buildBarkMessageConfig().isArchive).toBe('0');
    expect(notification.buildBarkMessageConfig().automaticallyCopy).toEqual(undefined);
    expect(notification.autoCopy().buildBarkMessageConfig().automaticallyCopy).toBe('1');
    expect(notification.autoCopy(false).buildBarkMessageConfig().automaticallyCopy).toEqual(undefined);
  });
  test('test BarkSDK notify', async () => {
    const sdk = new BarkSDK('https://YOUR_BARK_SERVER');
    const user = new BarkUser(BARK_URL);
    console.log(notification.buildBarkMessageConfig());
    notification.archive(false).setTitle().setContent().setJumpURL('https://baidu.com');
    expect(notification.buildBarkMessageConfig().isArchive).toBe('0');
    const success = await sdk.notify(user, notification);
    const success2 = await sdk.notify([new BarkUser(user.getKey())], notification);
    expect(success instanceof Array).toBe(true);
    expect(success.length).toBe(success2.length);
  });
  test('test notification clone', () => {
    const config0 = notification.buildBarkMessageConfig();
    const config1 = notification.clone().buildBarkMessageConfig();
    expect(JSON.stringify(config0)).toBe(JSON.stringify(config1));
  });
  test('test BarkUser', () => {
    const u1 = new BarkUser(BARK_URL);
    expect(u1.getServer()).toBeDefined();
    expect(u1.getKey()).toBeDefined();
  });
});
