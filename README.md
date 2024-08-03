# LatelyX.js

当前版本: 1.0.2

原生 JavaScript，仅 800 字节！简单、好用的 Timeago 插件

[原作者在此:https://github.com/Tokinx/lately](https://github.com/Tokinx/lately)

所有的功能请见原作者gitpage，原作者并未上传至npmjs，为了引用和自己用，优化了部分代码，目前所有的权利都归原作者所有.

## 食用方法

```
<script src="//unpkg.com/latelyx@1.0.2/latelyx.min.js"></script>
<script>Lately.init('.datatime');</script>
```

## 改了些神马

1. 初始化方法有改动，init参数有改，改为直接双传值 

```js
Lately.init('.datatime', {second: "秒", minute: "分钟", hour: "小时", day: "天", month: "个月", year: "年", ago: "前", error: "NaN", yestoday: "昨天", tda: "前天"});
```
2. 修复了翻页时会重复渲染和因为渲染过后元素卡住不再渲染的BUG
3. 删除了title标签和dateTime标签的扫描，只支持innerHtml中的时间
4. 渲染过的元素会添加一个datetimed样式，不会因翻页重新渲染
5. 3天内的时间会显示昨天、前天。