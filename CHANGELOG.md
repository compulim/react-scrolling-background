# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- Relaxed peer dependencies requirements to `react@>=16.8.0`, by [@compulim](https://github.com/compulim) in PR [#2](https://github.com/compulim/react-scrolling-background/pull/2)
- Updated pull request validation to test against various React versions, in PR [#1](https://github.com/compulim/react-scrolling-background/pull/1)
   - Moved from JSX Runtime to JSX Classic to support testing against React 16
- Bumped dependencies, in PR [#12](https://github.com/compulim/react-scrolling-background/pull/12)
   - Production dependencies
      - [`valibot@0.35.0`](https://npmjs.com/package/valibot/v/0.35.0)
   - Development dependencies
      - [`@babel/preset-env@7.24.7`](https://npmjs.com/package/@babel/preset-env/v/7.24.7)
      - [`@babel/preset-react@7.24.7`](https://npmjs.com/package/@babel/preset-react/v/7.24.7)
      - [`@babel/preset-typescript@7.24.7`](https://npmjs.com/package/@babel/preset-typescript/v/7.24.7)
      - [`@testing-library/jest-dom@6.4.6`](https://npmjs.com/package/@testing-library/jest-dom/v/6.4.6)
      - [`@testing-library/react@16.0.0`](https://npmjs.com/package/@testing-library/react/v/16.0.0)
      - [`esbuild@0.21.5`](https://npmjs.com/package/esbuild/v/0.21.5)
      - [`tsup@8.1.0`](https://npmjs.com/package/tsup/v/8.1.0)
      - [`typescript@5.5.2`](https://npmjs.com/package/typescript/v/5.5.2)
- Added [ESLint import/export syntax](https://npmjs.com/package/eslint-plugin-import), in PR [#13](https://github.com/compulim/react-scrolling-background/pull/13)
- Added [`publint`](https://npmjs.com/package/publint), in PR [#13](https://github.com/compulim/react-scrolling-background/pull/13)
