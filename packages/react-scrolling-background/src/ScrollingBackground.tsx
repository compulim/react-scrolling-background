import { css, cx, keyframes } from '@emotion/css';
import createEmotion from '@emotion/css/create-instance';
import { type Properties as CSSProperties } from 'csstype';
import mathRandom from 'math-random';
import React, { memo, useMemo } from 'react';
import {
  any,
  number,
  object,
  optional,
  parse,
  string,
  type InferOutput,
  type OptionalSchema,
  type StringSchema
} from 'valibot';

import * as TestIds from './TestIds';
import createClassName from './private/createClassName';
import propertyDefinitions from './private/propertyDefinitions';
import tryRegisterProperty from './private/tryRegisterProperty';

declare module 'csstype' {
  interface Properties {
    [key: `--${string}`]: number | string | undefined;
  }
}

const PropsSchema = object({
  /**
   * [Background color CSS property](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color).
   *
   * Can also specify via CSS custom property `--react-scrolling-background__background-color`.
   */
  backgroundColor: optional(string()) as OptionalSchema<StringSchema<CSSProperties['backgroundColor']>, never>,

  /**
   * [Background image CSS property](https://developer.mozilla.org/en-US/docs/Web/CSS/background-image).
   *
   * Can also specify via CSS custom property `--react-scrolling-background__background-image`.
   */
  backgroundImage: optional(string()) as OptionalSchema<StringSchema<CSSProperties['backgroundImage']>, never>,

  /** CSS class to apply to the background container element. */
  className: optional(string()),

  /**
   * Durations (in milliseconds) to scroll the background. Defaults to 10 minutes.
   *
   * Can also specify via CSS custom property `--react-scrolling-background__duration`.
   */
  duration: optional(number()),

  /**
   * Nonce for allowlisting specific elements under content security policy.
   *
   * This package requires `script-src` and `style-src`.
   */
  nonce: optional(string()),

  /**
   * Speed of the scrolling defined by number of full rotations done within the duration. Defaults to 3, meaning 3 full rotations in 10 minutes.
   *
   * Note: Speed will change depends on the container width. Narrower container will have its background scroll slower than wider container.
   *
   * Can also specify via CSS custom property `--react-scrolling-background__speed`.
   */
  speed: optional(number()),

  /** CSS properties to apply to the main element. */
  style: optional(any())
});

const CSS_KEY = 'css-rsb';

for (const [name, definition] of propertyDefinitions.entries()) {
  tryRegisterProperty({ ...definition, name });
}

const ScrollingBackground = memo((props: Readonly<InferOutput<typeof PropsSchema>>) => {
  const { backgroundColor, backgroundImage, className, duration, nonce, speed, style } = parse(PropsSchema, props);

  const emotionClassName = useMemo<string>(() => {
    if (nonce) {
      const { css, keyframes } = createEmotion({
        key: `${CSS_KEY}-${mathRandom().toString(36).substring(2, 7)}`,
        nonce
      });

      return createClassName({ css, keyframes });
    }

    return createClassName({ css, keyframes });
  }, [nonce]);

  const varsStyle = useMemo<Readonly<CSSProperties>>(
    () => ({
      '--react-scrolling-background__background-color': backgroundColor,
      '--react-scrolling-background__background-image': backgroundImage,
      '--react-scrolling-background__duration': typeof duration === 'number' ? `${duration}ms` : undefined,
      '--react-scrolling-background__speed': speed
    }),
    [backgroundColor, backgroundImage, duration, speed]
  );

  return (
    <div
      className={cx('react-scrolling-background', emotionClassName, className)}
      data-testid={TestIds.root}
      style={style}
    >
      <div className="react-scrolling-background__vars" data-testid={TestIds.customProperties} style={varsStyle}>
        <div className="react-scrolling-background__image" data-testid={TestIds.image} />
      </div>
    </div>
  );
});

ScrollingBackground.displayName = 'ScrollingBackground';

export default ScrollingBackground;
