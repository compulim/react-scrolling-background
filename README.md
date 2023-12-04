# `react-scrolling-background`

GPU-based subtle scrolling background, support reduced motion, sub-pixel movement, and auto stop.

## Background

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

## Credits

["Hero Patterns"](https://heropatterns.com/) by [Steve Schoger](https://twitter.com/steveschoger) is licensed under [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/).

## Contributions

Like us? [Star](https://github.com/compulim/react-scrolling-background/stargazers) us.

Want to make it better? [File](https://github.com/compulim/react-scrolling-background/issues) us an issue.

Don't like something you see? [Submit](https://github.com/compulim/react-scrolling-background/pulls) a pull request.
