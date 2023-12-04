import { css, cx, keyframes } from '@emotion/css';
import { memo, useMemo } from 'react';
import createEmotion from '@emotion/css/create-instance';
import mathRandom from 'math-random';

import createClassName from './private/createClassName';

type Props = {
  /**
   * [Background color CSS property](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color).
   *
   * Can also specify via CSS custom property `--react-scrolling-background__background-color`.
   */
  backgroundColor?: string | undefined;

  /**
   * [Background image CSS property](https://developer.mozilla.org/en-US/docs/Web/CSS/background-image).
   *
   * Can also specify via CSS custom property `--react-scrolling-background__background-image`.
   */
  backgroundImage?: string | undefined;

  /** CSS class to apply to the background container element. */
  className?: string | undefined;

  /**
   * Durations (in milliseconds) to scroll the background. Defaults to 10 minutes.
   *
   * Can also specify via CSS custom property `--react-scrolling-background__duration`.
   */
  duration?: number | undefined;

  /** Nonce for injecting style sheet. */
  nonce?: string | undefined;

  /**
   * Speed of the scrolling defined by number of full rotations done within the duration. Defaults to 3, meaning 3 full rotations in 10 minutes.
   *
   * Note: Speed will change depends on the container width. Narrower container will have its background scroll slower than wider container.
   *
   * Can also specify via CSS custom property `--react-scrolling-background__speed`.
   */
  speed?: number | undefined;
};

const CSS_KEY = 'css-rsb';

CSS.registerProperty({
  inherits: true,
  initialValue: 'transparent',
  name: '--react-scrolling-background__background-color',
  syntax: '<color>'
});

CSS.registerProperty({
  inherits: true,
  name: '--react-scrolling-background__background-image'
});

CSS.registerProperty({
  inherits: true,
  initialValue: '600s',
  name: '--react-scrolling-background__duration',
  syntax: '<time>'
});

CSS.registerProperty({
  inherits: true,
  initialValue: '3',
  name: '--react-scrolling-background__speed',
  syntax: '<number>'
});

const ScrollingBackground = memo(({ backgroundColor, backgroundImage, className, duration, nonce, speed }: Props) => {
  const emotionClassName = useMemo(() => {
    if (nonce) {
      const { css, keyframes } = createEmotion({
        key: `${CSS_KEY}-${mathRandom().toString(36).substring(2, 7)}`,
        nonce
      });

      return createClassName({ css, keyframes });
    }

    return createClassName({ css, keyframes });
  }, [nonce]);

  const style = useMemo(
    () =>
      ({
        '--react-scrolling-background__background-color': backgroundColor,
        '--react-scrolling-background__background-image': backgroundImage,
        '--react-scrolling-background__duration': typeof duration === 'number' ? `${duration}ms` : undefined,
        '--react-scrolling-background__speed': speed
      }) as const,
    [backgroundColor, backgroundImage, duration, speed]
  );

  return (
    <div
      className={cx('react-scrolling-background', emotionClassName, className)}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      style={style as any}
    >
      <div className="react-scrolling-background__image" />
    </div>
  );
});

ScrollingBackground.displayName = 'ScrollingBackground';

export default ScrollingBackground;
