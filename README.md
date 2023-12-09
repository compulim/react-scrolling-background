# `react-scrolling-background`

GPU-based subtle scrolling background, support [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP), reduced motion, sub-pixel movement, and auto stop.

## Background

This component is a fancy scrolling background to enhance simple projects.

Note: despite the scrolling effect is purely based on CSS with GPU support, a large portion of the website will need to be updated frequently. Inevitably, this is putting a huge toll on CPU. Please use this component with care.

## How to use

The background component is a standalone component. It can be configured using React props and CSS custom properties.

### Configuring using React props

```tsx
import { ScrollingBackground } from 'react-scrolling-background';

render(
  <ScrollingBackground
    backgroundColor="red"
    backgroundImage={`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'...`}
  />
);
```

### Configuring using CSS custom properties

```tsx
import { ScrollingBackground } from 'react-scrolling-background';

render(
  <ScrollingBackground
    style={{
      '--react-scrolling-background__background-color': 'red',
      '--react-scrolling-background__background-image': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'...`
    }}
  />
);
```

## API

### React component

```ts
const ScrollingBackground = ({
  backgroundColor?: string;
  backgroundImage?: string;
  className?: string;
  duration?: number;
  nonce?: string;
  speed?: number;
  style?: CSSProperties;
}) => ReactElement;
```

### CSS custom properties

When setting custom properties via CSS stylesheet, sets the CSS custom properties under the `react-scrolling-background__vars` element.

```css
.react-scrolling-background__vars {
  --react-scrolling-background__background-color: <color>;
  --react-scrolling-background__background-image: <image>;
  --react-scrolling-background__duration: <time>;
  --react-scrolling-background__speed: <number>;
}
```

### CSS selectors

| Selector                             | Description                                            |
| ------------------------------------ | ------------------------------------------------------ |
| `.react-scrolling-background__image` | Background image element.                              |
| `.react-scrolling-background__vars`  | Content element for storing all CSS custom properties. |

## Behaviors

### Setting CSS custom property to `initial` is not working in Firefox

As of this writing, Firefox 120 does not support [`CSS.registerProperty`](https://developer.mozilla.org/en-US/docs/Web/API/CSS/registerProperty_static) and [`@property`](https://developer.mozilla.org/en-US/docs/Web/CSS/@property) rule yet. Setting a custom property to `initial` will not reset it back to the default value.

### Should I use React props or CSS custom properties?

`react-scrolling-background` supports 2 ways to configure: React props and CSS custom properties.

Unless certain effect is required, we recommend using React props. Compare to CSS custom properties, props provides best type-safety features.

### How can I modify `background-size` and other CSS properties of the background image?

You can use the CSS selector `.react-scrolling-background__image` to select the image element and set `background-size` and various CSS properties. Additional CSS selectors can be found in [this section](#css-selectors).

## Credits

["Hero Patterns"](https://heropatterns.com/) by [Steve Schoger](https://twitter.com/steveschoger) is licensed under [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/).

## Contributions

Like us? [Star](https://github.com/compulim/react-scrolling-background/stargazers) us.

Want to make it better? [File](https://github.com/compulim/react-scrolling-background/issues) us an issue.

Don't like something you see? [Submit](https://github.com/compulim/react-scrolling-background/pulls) a pull request.
