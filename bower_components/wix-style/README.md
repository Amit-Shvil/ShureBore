# Welcome to Wix Style

Wix-Style provides a set of reusable, well-tested, and accessible UI components that implement the Wix Funcationality & Style requirements. 

A demo & documentation of the components is available here: http://wix.github.io/wix-style/dist/styleguide/

Note that some components rely on NG-Material and the library supplies a Wix custom style for it.

## Installation

#### **New to Wix Style**

Install wix-style via bower:

```sh
$ bower install wix-style
```

#### **Already using old Wix Style**

1. Make sure your `wix-style` bower version is set to `~2.2`.
2. Update your bower:
```sh
$ bower update
```
3. **Support the old Wix Style:** The file path to your old wix-style has been changed. you need to replace your old link:
```sh
@import '../bower_components/wix-style/dist/styles/sass/style';
```
With the new one:
```sh
@import '../bower_components/wix-style/dist/styles/legacy/style';
```
#### **Adding Javascript/Angular**

Wix Style currently support only AngularJS framework.

1. Add these scripts to your html:
```sh
<script src="bower_components/wix-style/dist/scripts/locale/messages_${locale}.js"></script>
<script src="bower_components/wix-style/dist/scripts/scripts.js"></script>
```
2. Include `wixStyle` module as a dependency in your project. Usually like this:
```sh
angular.module('yourApp', ['yourDependency', 'yourOtherDependency', 'wixStyle'])
```

#### **Adding Angular Material**

Wix Style has a theme for [Angular Material](https://material.angularjs.org/latest/).

1. Add style to you head:
```html
<link rel="stylesheet" href="bower_components/angular-material/angular-material.css">
```
2. Add javascript to your scripts:
```html
<script src="bower_components/angular-animate/angular-animate.js"></script>
<script src="bower_components/angular-aria/angular-aria.js"></script>
<script src="bower_components/angular-material/angular-material.js"></script>
```
3. Include `ngMaterial` module to your application:
```js
angular.module('yourApp', ['yourDependency', 'yourOtherDependency', 'wixStyle', 'ngMaterial'])
```

Now you can use angular material components and get wix styling for free!

## How to Import Wix Style to your SASS file

#### **Import EVERYTHING**

```sh
@import '../bower_components/wix-style/dist/styles/main';
```

#### **Import only basics**

The basics import includes all variables, mixins, and assests (svg-font)

```sh
@import '../bower_components/wix-style/dist/styles/basics';
```

#### **Import only modules (no css classes will appear on your final css)**

The modules import includes all variables and mixins.

```sh
@import '../bower_components/wix-style/dist/styles/modules';
```

#### **Import a specific component**

Here is an example how to import **buttons** css-component

```sh
@import '../bower_components/wix-style/dist/styles/basics'; //mandatory for any other import
@import '../bower_components/wix-style/dist/styles/components/css-components/button';
```

Here is an example how to import all **css-components**

```sh
@import '../bower_components/wix-style/dist/styles/basics'; //mandatory for any other import
@import '../bower_components/wix-style/dist/styles/components/css-components';
```

Here is an example how to import **modal** angular-component (it has a dependency of buttons in it)

```sh
@import '../bower_components/wix-style/dist/styles/basics'; //mandatory for any other import
@import '../bower_components/wix-style/dist/styles/components/css-components/button'; //mandatory for modal
@import '../bower_components/wix-style/dist/styles/components/angular-components/modal';
```

Here is an example how to import all **angular-components** (it has a dependency of buttons in it)

```sh
@import '../bower_components/wix-style/dist/styles/basics'; //mandatory for any other import
@import '../bower_components/wix-style/dist/styles/components/css-components'; //mandatory for angular-components
@import '../bower_components/wix-style/dist/styles/components/angular-components';
```

## Contributing to Wix Style

#### **E2E Testing**

Go to [this link] [3] to get instruction on how to easily e2e directives and components.

[1]:/

#### **Drafts**

Drafts are unfinished projects. They are not part of the project structure but they exist under [section 999] [2] so
developers can use it for developing that component. **DO NOT USE DRAFTS IN YOUR PROJECT**.

[2]:/styleguide/index.html#/section/999

## About This Project

#### **Tech Leads**

For any issues, requests or comments please contact project's tech leads Igal Steklov or Alon Bar-Tur.

#### **UX Leads**

Nir Yuz & Vova Nurenberg.

#### **Special Thanks To...**

This project would have never been brought to the world without the great help of our finest developers:
  - Amit Shvil
  - Daniel Wolbe
  - Dima Ryskin
  - Donatas Dautratas
  - Elior Shalev Tabeka
  - Ethan Sharabi
  - Guy Kori
  - Yael Zaritsky
