import { cx } from '@emotion/css';
import { memo, useMemo } from 'react';
import createEmotion from '@emotion/css/create-instance';

type Props = {
  /** CSS class to apply to the background element. */
  backgroundClassName?: string | undefined;

  /** Background image of type [CSS <image>](https://developer.mozilla.org/en-US/docs/Web/CSS/image). */
  backgroundImage?: string | undefined;

  /** CSS class to apply to the background container element. */
  className?: string | undefined;

  /** Durations (in milliseconds) to scroll the background. Defaults to 10 minutes. */
  duration?: number | undefined;

  /** Nonce for injecting style sheet. */
  nonce?: string | undefined;

  /**
   * Speed of the scrolling defined by number of full rotations done within the duration. Defaults to 3, meaning 3 full rotations in 10 minutes.
   *
   * Note: Speed will change depends on the container width. Narrower container will have its background scroll slower than wider container.
   */
  speed?: number | undefined;
};

const CSS_KEY = 'css-rsb';

CSS.registerProperty({
  inherits: false,
  // initialValue: 'unset',
  name: '--react-scrolling-background__background-image',
  // syntax: '<image>'
  syntax: '*'
});

CSS.registerProperty({
  inherits: false,
  initialValue: '600s',
  name: '--react-scrolling-background__duration',
  syntax: '<time>'
});

CSS.registerProperty({
  inherits: false,
  initialValue: '3',
  name: '--react-scrolling-background__speed',
  syntax: '<number>'
});

const ScrollingBackground = memo(
  ({ backgroundClassName, backgroundImage, className, duration, nonce, speed }: Props) => {
    const { keyframes, css } = useMemo(
      () =>
        createEmotion({
          ...(nonce ? { nonce } : {}),
          key: CSS_KEY
        }),
      [nonce]
    );

    const ANIMATION = keyframes`
    0% {
      transform: translate3d(0, 0, 0);
    }

    100% {
      transform: translate3d(calc(100% / (var(--react-scrolling-background__speed) + 1) * var(--react-scrolling-background__speed)), 0, 0);
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
        animation: ${ANIMATION} var(--react-scrolling-background__duration) linear 1;
        background-image: var(--react-scrolling-background__background-image);
        height: 100%;
        left: calc(var(--react-scrolling-background__speed) * -100%);
        position: absolute;
        width: calc((var(--react-scrolling-background__speed) + 1) * 100%);
      }

      @media (prefers-reduced-motion) {
        .scrolling-background__image {
          animation: unset;
        }
      }
    `;

    const style = useMemo(
      () => ({
        '--react-scrolling-background__background-image': backgroundImage || 'inherit',
        '--react-scrolling-background__duration': duration && `${duration}ms`,
        '--react-scrolling-background__speed': speed
      }),
      [backgroundImage, duration, speed]
    );

    return (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      <div className={cx('scrolling-background', CLASS_NAME, className)} style={style as any}>
        <div className={cx('scrolling-background__image', backgroundClassName)} />
      </div>
    );
  }
);

ScrollingBackground.displayName = 'ScrollingBackground';

export default ScrollingBackground;
