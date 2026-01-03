# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

| Icon | Description                                       |
| ---- | ------------------------------------------------- |
| 💢   | Breaking changes                                  |
| 👷🏻   | Development experience (non-production impacting) |

## Unreleased

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
- Bumped dependencies, in PR [#16](https://github.com/compulim/react-scrolling-background/pull/16)
  - Production dependencies
    - [`@emotion/css@11.13.4`](https://npmjs.com/package/@emotion/css/v/11.13.4)
    - [`valibot@0.42.1`](https://npmjs.com/package/valibot/v/0.42.1)
  - Development dependencies
    - [`@babel/preset-env@7.25.8`](https://npmjs.com/package/@babel/preset-env/v/7.25.8)
    - [`@babel/preset-react@7.25.7`](https://npmjs.com/package/@babel/preset-react/v/7.25.7)
    - [`@babel/preset-typescript@7.25.7`](https://npmjs.com/package/@babel/preset-typescript/v/7.25.7)
    - [`@testing-library/dom@10.4.0`](https://npmjs.com/package/@testing-library/dom/v/10.4.0)
    - [`@testing-library/jest-dom@6.5.0`](https://npmjs.com/package/@testing-library/jest-dom/v/6.5.0)
    - [`@testing-library/react@16.0.1`](https://npmjs.com/package/@testing-library/react/v/16.0.1)
    - [`@tsconfig/recommended@1.0.7`](https://npmjs.com/package/@tsconfig/recommended/v/1.0.7)
    - [`@types/jest@29.5.13`](https://npmjs.com/package/@types/jest/v/29.5.13)
    - [`@types/react@18.3.11`](https://npmjs.com/package/@types/react/v/18.3.11)
    - [`@types/react-dom@18.3.1`](https://npmjs.com/package/@types/react-dom/v/18.3.1)
    - [`esbuild@0.24.0`](https://npmjs.com/package/esbuild/v/0.24.0)
    - [`tsup@8.3.0`](https://npmjs.com/package/tsup/v/8.3.0)
    - [`typescript@5.6.3`](https://npmjs.com/package/typescript/v/5.6.3)
- 👷🏻 Test framework moved to Node.js test runner, by [@compulim](https://github.com/compulim) in PR [#24](https://github.com/compulim/react-scrolling-background/pull/24)
- Bumped dependencies, in PR [#25](https://github.com/compulim/react-scrolling-background/pull/25)
  - Production dependencies
    - [`@emotion/css@11.13.5`](https://npmjs.com/package/@emotion/css/v/11.13.5)
    - [`csstype@3.2.3`](https://npmjs.com/package/csstype/v/3.2.3)
    - [`valibot@1.2.0`](https://npmjs.com/package/valibot/v/1.2.0)
  - Development dependencies
    - [`@testing-library/react@16.3.1`](https://npmjs.com/package/@testing-library/react/v/16.3.1)
    - [`@tsconfig/recommended@1.0.13`](https://npmjs.com/package/@tsconfig/recommended/v/1.0.13)
    - [`@tsconfig/strictest@2.0.8`](https://npmjs.com/package/@tsconfig/strictest/v/2.0.8)
    - [`@types/react@18.3.27`](https://npmjs.com/package/@types/react/v/18.3.27)
    - [`@types/react-dom@18.3.7`](https://npmjs.com/package/@types/react-dom/v/18.3.7)
    - [`@types/react-test-renderer@18.3.1`](https://npmjs.com/package/@types/react-test-renderer/v/18.3.1)
    - [`esbuild@0.27.2`](https://npmjs.com/package/esbuild/v/0.27.2)
    - [`publint@0.3.16`](https://npmjs.com/package/publint/v/0.3.16)
    - [`tsup@8.5.1`](https://npmjs.com/package/tsup/v/8.5.1)
    - [`typescript@5.9.3`](https://npmjs.com/package/typescript/v/5.9.3)
