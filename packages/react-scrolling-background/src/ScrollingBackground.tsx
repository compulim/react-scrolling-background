import { css, cx, keyframes } from '@emotion/css';
import { memo } from 'react';

type Props = {
  className?: string;
};

CSS.registerProperty({
  inherits: true,
  initialValue: 'none',
  name: '--scrolling-background__background-image',
  syntax: '<image> | none'
});

CSS.registerProperty({
  inherits: true,
  initialValue: '3',
  name: '--scrolling-background__speed',
  syntax: '<number>'
});

const ScrollingBackground = memo(({ className }: Props) => {
  const ANIMATION = keyframes`
    0% {
      transform: translate3d(0, 0, 0);
    }

    100% {
      transform: translate3d(calc(100% / (var(--scrolling-background__speed) + 1) * var(--scrolling-background__speed)), 0, 0);
    }
  `;

  const CLASS_NAME = css`
    &.scrolling-background {
      height: 100%;
      overflow-x: hidden;
      width: 100%;
    }

    .scrolling-background__image {
      /* Stop animation after 10 minutes to save CPU */
      animation: ${ANIMATION} 600s linear 1;
      background-image: var(--scrolling-background__background-image);
      height: 100%;
      left: calc(var(--scrolling-background__speed) * -100%);
      position: absolute;
      width: calc((var(--scrolling-background__speed) + 1) * 100%);
    }
  `;

  return (
    <div className={cx('scrolling-background', CLASS_NAME, className)}>
      <div className="scrolling-background__image" />
    </div>
  );
});

ScrollingBackground.displayName = 'ScrollingBackground';

export default ScrollingBackground;
