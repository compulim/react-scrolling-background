import { type css, type keyframes } from '@emotion/css';

import propertyDefinitions from './propertyDefinitions';

type EmotionInstance = {
  css: typeof css;
  keyframes: typeof keyframes;
};

export default function createClassName({ css, keyframes }: EmotionInstance) {
  const ANIMATION = keyframes`
    0% {
      transform: translate3d(0, 0, 0);
    }

    100% {
      transform: translate3d(calc(100% / (var(--react-scrolling-background__speed) + 1) * var(--react-scrolling-background__speed)), 0, 0);
    }
  `;

  return css({
    '&.react-scrolling-background': {
      height: '100%',
      overflowX: 'hidden',
      position: 'relative',
      width: '100%',

      ...Array.from(propertyDefinitions.entries()).reduce<Record<`--react-scrolling-background__${string}`, string>>(
        (style, [name, { initialValue }]) => ({ ...style, [name]: initialValue }),
        {}
      )
    },

    '.react-scrolling-background__vars': {
      display: 'content'
    },

    '.react-scrolling-background__image': {
      /* Stop animation after 10 minutes to save CPU */
      animation: `${ANIMATION} var(--react-scrolling-background__duration) linear 1`,
      backgroundColor: 'var(--react-scrolling-background__background-color)',
      backgroundImage: 'var(--react-scrolling-background__background-image)',
      height: '100%',
      left: 'calc(var(--react-scrolling-background__speed) * -100%)',
      position: 'absolute',
      width: 'calc((var(--react-scrolling-background__speed) + 1) * 100%)'
    },

    '@media (prefers-reduced-motion)': {
      '.react-scrolling-background__image': {
        animation: 'unset'
      }
    }
  });
}
