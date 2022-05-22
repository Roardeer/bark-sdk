# bark-sdk

## install
``` bash
npm i @kyuuseiryuu/bark-sdk
```
## usage

```typescript
const barkServer = new BarkSDK('YOUR_BARK_SERVER');
const user = new BarkUser('YOUR_BARK_KEY');
// const user = new BarkUser('https://YOUR_BARK_SERVER/YOUR_BARK_KEY/这里改成你自己的推送内容');
const notification = new BarkNotification('这里是推送内容');
// const notification = new BarkNotification('这里是推送内容', '标题可有可无');
notification
    .setJumpURL('https://google.com')
    .setSound('bell')
    .setGroup('group1');
// 链式调用设置参数
const newNotification = notification.clone().setTitle('新的一个通知');
barkServer.notify(user, notification);
barkServer.notify(user, newNotification);
```

[View test case demo](./__test__)

# resources
- [https://github.com/Finb/Bark](https://github.com/Finb/Bark)

# License
Code released under the [MIT](./LICENSE) license.
