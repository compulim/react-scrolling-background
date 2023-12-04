# `react-scrolling-background`

GPU-based subtle scrolling background, support reduced motion, sub-pixel movement, and auto stop.

## Background

A fancy scrolling background to enhance simple projects.

Despite the scrolling effect is purely based on CSS with GPU support, a large portion of the website will need to be updated frequently. Inevitably, this is putting a huge toll on CPU. Please use this component with care.

## How to use

```tsx
render(
  <ScrollingBackground
    backgroundColor="red"
    backgroundImage={`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'...`}
  />
);
```

## API

```ts
const ScrollingBackground = ({
  backgroundColor?: string;
  backgroundImage?: string;
  className?: string;
  duration?: number;
  speed?: number;
}) => ReactElement;
```

## Behaviors

### Setting CSS custom property to `initial` is not working in Firefox

As of writing, Firefox 120 does not support [`CSS.registerProperty`](https://developer.mozilla.org/en-US/docs/Web/API/CSS/registerProperty_static) and [`@property`](https://developer.mozilla.org/en-US/docs/Web/CSS/@property) rule yet. Setting a custom property to `initial` will not set it to the default value.

## Credits

["Hero Patterns"](https://heropatterns.com/) by [Steve Schoger](https://twitter.com/steveschoger) is licensed under [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/).

## Contributions

Like us? [Star](https://github.com/compulim/react-scrolling-background/stargazers) us.

Want to make it better? [File](https://github.com/compulim/react-scrolling-background/issues) us an issue.

Don't like something you see? [Submit](https://github.com/compulim/react-scrolling-background/pulls) a pull request.
