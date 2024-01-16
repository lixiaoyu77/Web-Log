
DOM（文档对象模型）是一种用于表示和操作HTML、XML等文档结构的编程接口。它将文档解析成一个由节点和对象组成的树状结构，允许开发者通过编程方式修改文档的内容、结构和样式。

DOM 提供了一种编程接口，使得开发者可以使用脚本语言（通常是 JavaScript）来动态地访问、更新和操作文档的内容和结构。这种能力使得 web 开发中的交互性和动态性成为可能。

DOM 树的基本概念如下：

节点（Nodes）: 文档中的每个部分都是一个节点。节点可以是元素、属性、文本等。

元素节点（Element Nodes）: HTML文档中的标签都是元素节点。例如，<p>、<div>、<span>等。

属性节点（Attribute Nodes）: 元素的属性也是节点。例如，<img>元素的src属性。

文本节点（Text Nodes）: 元素中的文本内容也是节点。例如，<p>这是文本</p>中的“这是文本”。

通过DOM，开发者可以使用一系列的方法和属性来操作文档。常见的 DOM 操作包括：

查询元素: 使用 getElementById、getElementsByClassName、getElementsByTagName 等方法。

修改元素内容: 使用 innerHTML、innerText、textContent 等属性。

创建和删除元素: 使用 createElement、appendChild、removeChild 等方法。

修改元素属性: 使用 setAttribute、getAttribute、removeAttribute 等方法。

事件处理: 通过 DOM 可以为页面元素添加事件监听器，响应用户的交互行为。

<!DOCTYPE html>
<html>
<head>
  <title>DOM Example</title>
</head>
<body>

  <h1 id="myHeading">Hello World</h1>
  <button onclick="changeText()">Change Text</button>

  <script>
    function changeText() {
      var heading = document.getElementById("myHeading");
      heading.innerHTML = "New Text!";
    }
  </script>

</body>
</html>
在这个例子中，点击按钮时，JavaScript 通过 DOM 获取到 id 为 myHeading 的元素，并修改了它的 innerHTML 属性，从而改变了页面上的文本内容。这展示了 DOM 的基本用法。