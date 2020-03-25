# 矩形 Rect

Rect 可绘制普通或圆角矩形

> 圆角值 < width/2

> 不设置 lineWidth 或 color 矩形不可见

## 属性

| 属性名 | 属性类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| radius | number | 0 | 设置圆角 |
| lineColor | number | 0 | 设置边框颜色 |
| lineWidth | number | 0 | 设置边框宽度 |
| color | number | | 设置填充色 |
| anchorX | 0-1 |  | 设置内部X坐标 |
| anchorY | 0-1 |  | 设置内部Y坐标 |

## 事件

| 事件名  | 说明 | 参数 |
| --- | --- | --- |

## 样式

> [基础样式](/handbook/style.html#样式)

## 定义
``` ts
const rect: gui.Rect = {
    name: "rect",
    type: guiType.rect,
    color:0xffffff,
    lineColor: 0xff00cc,
    lineWidth: 1,
    radius:10
};
```

## 使用
``` ts
{
id: "rect",
libId: ComponentId.rect,
style: {
    width: 100,
    height: 100
}
}
```

## 示例

> 示例使用的编程方式，在vf中，通过配置方式会有写法差异

> `运行 ⌘ + Enter` 查看修改后的效果

> [弹出](https://vipkid-edu.github.io/vf-gui-docs/play/#example/TestRect)

<iframe src="https://vipkid-edu.github.io/vf-gui-docs/play/#example/TestRect" height="500" width="100%"></iframe>