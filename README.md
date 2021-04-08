# IntegralUI Web - Grid, v21.1

IntegralUI Web - Grid is a native Web Component that displays tabular data sets. 

<b>Note</b> This component is also part of [IntegralUI Web](https://github.com/lidorsystems/integralui-web.git) product suite.

## Main Features

- High Performance, loading and scrolling of thousands of records 
- Dynamic grouping with custom aggregation functions
- Advanced filtering and Sorting
- Built-in Editors
- Fully customizable with column and row templates 

A complete feature list is available here: [IntegralUI Web - Grid features](https://lidorsystems.com/products/web/studio/features/grid/).


## Dependencies

IntegralUI Web - Grid is built on top of [LitElement](https://github.com/Polymer/lit-element). All necessary files from that library are already included in the /external subfolder of this repository.


## DEMO

[Online QuickStart App](https://www.lidorsystems.com/products/web/studio/samples/web-components/) - An online demo of each component included


## Installation

Install the repository by running

```bash
npm install https://github.com/lidorsystems/integralui-web-grid.git
```

or directly from NPM

```bash
npm i integralui-web
```

Open your application and add a reference to a component you want to use. For example, if you are using the IntegralUI Grid component:</p>

### Angular

```bash
import 'integralui-web-grid/components/integralui.grid.js';
```

### React

```bash
import IntegralUIGridComponent from 'integralui-web-grid/wrappers/react.integralui.grid.js';
```

<b>Note</b>   Currently [ReactJS doesn't have full support for Web Components](https://custom-elements-everywhere.com/#react). Mainly because of the way data is passed to the component via attributes and their own synthetic event system. For this reason, you can use available wrappers located under /wrappers directory, which are ReactJS components that provide all public API from an IntegralUI component.</p>

### Vanilla JavaScript

```bash
<script type="module" src="integralui-web-grid/components/integralui.grid.js"></script>
```


## Icons

Because of the web component specification that defines URLs to be always relative to the main document, the path that leads to the icons used by the IntegralUI Web components needs to be set. In addition you may also need to copy/paste the /icons folder in your application folder. Depending on the framework of your choosing this may differ.

### Angular

Follow these steps:
1. Copy/Paste the content of the integralui-web-grid/icons folder under /assets/integralui-web-grid/icons subfolder in your React application. 
2. Set the resourcePath property of IntegralUI Web components to point to the location set in your /assets folder. In this case, for Grid for example:

```bash
<iui-grid [resourcePath]="'assets/integralui-web-grid/icons'"></iui-grid>
```

### React

Follow these steps:
1. Copy/Paste the content of the integralui-web-grid/icons folder under /public/integralui-web-grid/icons subfolder in your React application. 
2. Set the resourcePath property of IntegralUI Web components to point to the location set in your /public folder. In this case, for Grid for example:

```bash
<IntegralUIGridComponent resourcePath="integralui-web-grid/icons"></IntegralUIGridComponent>
```

### Vanilla JavaScript

Set the resourcePath property of IntegralUI Web components to point to /integralui-web-grid/icons folder. In this case, for Grid for example:

```bash
<iui-grid resource-path="../../integralui-web-grid/icons"></iui-grid>
```


## QuickStart App

There is a demo application with source code that contains samples for each component included in the IntegralUI Web Lite library. It can help you to get started quickly with learning about the components and write tests immediatelly. 

From [IntegralUI Web - QuickStart](https://github.com/lidorsystems/integralui-web-quickstart) you can download a demo app for Angular, AngularJS, React and Vanilla JavaScript. A detailed information about each of these quick-start demos is available in ReadMe file, located in the root folder of the demo app.


## License Information

You may use this version for the limited purposes of demonstrations, trials or design-time evaluations.

This project has been released under the IntegralUI Web License, and may not be used except in compliance with the License.
A copy of the License should have been installed in the product's root installation directory or it can be found here: [License Agreement](https://lidorsystems.com/products/web/grid/license-agreement.aspx).

This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language governing rights and limitations under the License.
