import { css, cx, keyframes } from '@emotion/css';
import { memo, useMemo } from 'react';

type Props = {
  backgroundImage?: string | undefined;
  className?: string | undefined;
  duration?: number | undefined;
  speed?: number | undefined;
};

// CSS.registerProperty({
//   inherits: true,
//   initialValue: 'none',
//   name: '--scrolling-background__background-image',
//   syntax: '<image> | none'
// });

// CSS.registerProperty({
//   inherits: true,
//   initialValue: '600s',
//   name: '--scrolling-background__duration',
//   syntax: '<time>'
// });

// CSS.registerProperty({
//   inherits: true,
//   initialValue: '3',
//   name: '--scrolling-background__speed',
//   syntax: '<number>'
// });

const ScrollingBackground = memo(({ backgroundImage, className, duration = 600_000, speed = 3 }: Props) => {
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
      position: relative;
      width: 100%;
    }

    .scrolling-background__image {
      /* Stop animation after 10 minutes to save CPU */
      animation: ${ANIMATION} var(--scrolling-background__duration) linear 1;
      background-image: var(--scrolling-background__background-image);
      height: 100%;
      left: calc(var(--scrolling-background__speed) * -100%);
      position: absolute;
      width: calc((var(--scrolling-background__speed) + 1) * 100%);
    }
  `;

  const style = useMemo(
    () => ({
      '--scrolling-background__background-image': backgroundImage,
      '--scrolling-background__duration': `${duration}ms`,
      '--scrolling-background__speed': speed
    }),
    [backgroundImage, duration, speed]
  );

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <div className={cx('scrolling-background', CLASS_NAME, className)} style={style as any}>
      <div className="scrolling-background__image" />
    </div>
  );
});

ScrollingBackground.displayName = 'ScrollingBackground';

export default ScrollingBackground;
