# react-reset-html

Style-reseted HTML elements as React-components. Uses [Normalize.cssinjs](https://github.com/J-Kallunki/normalize.cssinjs) and other defined html-defaults. Includes typescript typings.

## 🔨 Usage

Give normal html-attributes as props.

```jsx
import { HtmlA } from 'suomifi-ui-components';
<HtmlA href="/" />;
```

For aria-attributes or similar you can use object spread syntax.

```jsx
const props = { 'aria-label': 'Swooosh!' };
<HtmlA {...props} href="/" />;
```

With Typescript to use component for wrapping all components contain Prop-postfixed interface.

```jsx
import { HtmlA, HtmlAProps } from 'suomifi-ui-components';
```

### Github Package Registry

To use this package from Github Package Registry add `.npmrc` to your project with:

```
@j-kallunki:registry=https://npm.pkg.github.com
```

## Current collection

- HtmlA
- HtmlButton
- HtmlDiv
- HtmlH
- HtmlInput
- HtmlLabel
- HtmlLi
- HtmlNav
- HtmlOl
- HtmlSpan
- HtmlUl
