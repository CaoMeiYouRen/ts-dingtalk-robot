# ts-dingtalk-robot

在[dingtalk-robot-sdk](https://github.com/ineo6/dingtalk-robot-sdk) 的基础上使用Typescript重构了一下，用法几乎完全一致。
钉钉自定义机器人SDk, 支持文本 (text)、链接 (link)、markdown(markdown)、ActionCard、FeedCard消息类型。

## 功能特性

- 支持加签安全设置（HmacSHA256）
- 链式调用

## Installation

```shell
npm install  ts-dingtalk-robot --save 
```

## Usage

### 初始化

```ts
import { Robot } from "ts-dingtalk-robot"

const robot = new Robot({
    accessToken: 'accessToken',
    secret: 'secret',
});
```

### 发送text

```js
import { Text } from "ts-dingtalk-robot"

const text = new Text('我就是我,  @1825718XXXX 是不一样的烟火');
text.atPhone('1825718XXXX');

robot.send(text);
```


### 发送link

```js
import { Link } from "ts-dingtalk-robot"

const link = new Link('这个即将发布的新版本，创始人xx称它为“红树林');
link.setTitle('时代的火车向前开')
    .setImage("https://images")
    .setUrl("https://www.dingtalk.com/s?__biz=MzA4NjMwMTA2Ng==&mid=2650316842&idx=1&sn=60da3ea2b29f1dcc43a7c8e4a7c97a16&scene=2&srcid=09189AnRJEdIiWVaKltFzNTw&from=timeline&isappinstalled=0&key=&ascene=2&uin=&devicetype=android-23&version=26031933&nettype=WIFI")

robot.send(link);
```


### 发送markdown

```js
import { Markdown } from "ts-dingtalk-robot"

const markDown = new Markdown();

markDown.setTitle("杭州天气").add("#### 杭州天气 @156xxxx8827\n")
  .add("> 9度，西北风1级，空气良89，相对温度73%\n\n").atPhone('1825718XXXX')

robot.send(markDown);
```


### 发送ActionCard

#### 整体跳转ActionCard类型

```js
import { ActionCard } from "ts-dingtalk-robot"

const actionCard = new ActionCard();

actionCard.setTitle("乔布斯 20 年前想打造一间苹果咖啡厅，而它正是 Apple Store 的前身")
  .setText(`![screenshot](@lADOpwk3K80C0M0FoA)
### 乔布斯 20 年前想打造的苹果咖啡厅
Apple Store 的设计正从原来满满的科技感走向生活化，而其生活化的走向其实可以追溯到 20 年前苹果一个建立咖啡馆的计划`)
  .setHideAvatar(1).setBtnOrientation(1)
  .setSingleTitle("阅读全文")
  .setSingleURL("https://www.dingtalk.com/");

robot.send(actionCard);
```

#### 独立跳转ActionCard类型

```js
import { ActionCard } from "ts-dingtalk-robot"

const actionCard = new ActionCard();

actionCard.setTitle("乔布斯 20 年前想打造一间苹果咖啡厅，而它正是 Apple Store 的前身")
  .setText(`![screenshot](@lADOpwk3K80C0M0FoA)
### 乔布斯 20 年前想打造的苹果咖啡厅
Apple Store 的设计正从原来满满的科技感走向生活化，而其生活化的走向其实可以追溯到 20 年前苹果一个建立咖啡馆的计划`)
  .setHideAvatar(1).setBtnOrientation(1)
  .setBtns([
    {
      "title": "内容不错",
      "actionURL": "https://www.dingtalk.com/"
    },
    {
      "title": "不感兴趣",
      "actionURL": "https://www.dingtalk.com/"
    }
  ]);

robot.send(actionCard);
```

### 发送FeedCard
```js
import { FeedCard } from "ts-dingtalk-robot"

const feedCard = new FeedCard([{
  "title": "时代的火车向前开",
  "messageURL": "https://www.dingtalk.com/s?__biz=MzA4NjMwMTA2Ng==&mid=2650316842&idx=1&sn=60da3ea2b29f1dcc43a7c8e4a7c97a16&scene=2&srcid=09189AnRJEdIiWVaKltFzNTw&from=timeline&isappinstalled=0&key=&ascene=2&uin=&devicetype=android-23&version=26031933&nettype=WIFI",
  "picURL": "https://www.dingtalk.com/"
},
  {
    "title": "时代的火车向前开2",
    "messageURL": "https://www.dingtalk.com/s?__biz=MzA4NjMwMTA2Ng==&mid=2650316842&idx=1&sn=60da3ea2b29f1dcc43a7c8e4a7c97a16&scene=2&srcid=09189AnRJEdIiWVaKltFzNTw&from=timeline&isappinstalled=0&key=&ascene=2&uin=&devicetype=android-23&version=26031933&nettype=WIFI",
    "picURL": "https://www.dingtalk.com/"
  }]);

robot.send(feedCard);
```
