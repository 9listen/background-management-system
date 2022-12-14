# svg

SVG是一种基于 XML 的图像文件格式，它的英文全称为Scalable Vector Graphics，意思为可缩放的矢量图形


## 基本的 SVG 元素
你可以深入 SVG 复杂的细节，但这对我们即将创建的图标不是必须的。以下列表涵盖了我们将用到的构建块。

- `<svg>` 包裹并定义整个矢量图。`<svg>` 标签之于矢量图就如同 `<html>` 标签之于一个 web 页面。
- `<line>` 创建一条直线。
- `<polyline>` 创建折线。
  
- `<rect>` 创建矩形。
- `<circle>` 创建圆。
- `<ellipse>` 创建圆和椭圆。
- `<polygon>` 创建多边形。
- `<path>` 通过指定点以及点和点之间的线来创建任意形状。

## 详细使用
所有标签都要包裹在 `<svg>` 中使用

1. `<line>`

```html
<!-- 
  x1 y1 是第一个点坐标
  x2 y2 是第二个点坐标
 -->
<line x1="" y1="" x2="" y2=""></line>
```

2. `<polyline>`
```html
<!-- 
  依次传入点坐标，即可绘制
 -->
<polyline points="
  x1 y1
  x2 y2
  x3 y3
  ...
"></polyline>
<!-- 你也可以把上面的代码写成： -->
<polyline points="x1 y1, x2 y2, x3 y3"></polyline>
<!-- 或 -->
<polyline points="x1 y1 x2 y2 x3 y3"></polyline>
```
3. `<rect>`
```html
<!-- 
  x y 左上角点坐标
  width 宽度
  height 高度
 -->
<rect x="" y="" width="" height=""></rect>
```
4. `<circle>`
```html
<!--  
  cx cy 圆心点坐标
  r 半径
  style 样式
-->
<circle cx='70' cy='95' r='50' style='stroke:black; fill:none'></circle>
```
5. `<ellipse>`
```html
<!-- 
  cx cy 圆心点坐标
  rx x轴半径
  ry y轴半径
 -->
<ellipse cx="" cy="" rx="" ry="" style="fill:black;"></ellipse>
```
6. `<polygon>`
```html
<polygon points="x1 y1, x2 y2, x3 y3" />
```
7. `<path>`
```html
<!--
  M 移动到初始位置
  L 画线
  Z 将结束和开始点闭合
-->
<path d="
  M x1 y1
  L x2 y2
  L x3 y3
  L x4 y4
  L x5 y5
  L x6 y6
  L x7 y7
  Z
"></path>
```

## 起始文件

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Hand Coded SVG</title>
  <style>
    html,
    body {
      height: 100%;
      width: 100%;
      background: #e9e9e9;
    }

    body {
      margin: 0;
      text-align: center;
    }

    .grid {
      width: 750px;
      height: 500px;
      margin: 0 auto;
      padding-top: 100px;
      padding-left: 100px;
      background-image: url('grid.png');
      position: relative;
    }

    .grid::before {
      content: "";
      border-left: 1px solid #7c7cea;
      position: absolute;
      top: 0;
      left: 100px;
      width: 750px;
      height: 600px;
    }

    .grid::after {
      content: "";
      border-top: 1px solid #7c7cea;
      position: absolute;
      top: 100px;
      left: 0;
      width: 850px;
      height: 500px;
    }

    svg {
      stroke: #000;
      stroke-width: 5;
      stroke-linecap: round;
      stroke-linejoin: round;
      fill: none;
    }
  </style>
</head>

<body>

  <div class="grid">

  </div>

</body>

</html>
```

::: tip
- [SVG入门—如何手写SVG](https://juejin.cn/post/6844903589807128590)
- [SVG 入门指南](https://juejin.cn/post/6844904017273815048)
:::
