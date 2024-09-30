# react-kanca

> React-kanca, karmaşıklığı azaltarak projelerinizin daha okunabilir, yönetilebilir ve yeniden kullanılabilir olmasını sağlar. Geliştirme sürecinizi profesyonelleştirmek ve hızlandırmak için özel olarak hazırlanmış React hooklarını içerir.

[![NPM](https://img.shields.io/npm/v/react-kanca.svg)](https://www.npmjs.com/package/react-kanca) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![BundleSize](https://img.shields.io/bundlephobia/min/react-kanca)](https://bundlephobia.com/package/react-kanca)

react kanca storybook linki: [react-kanca.com](https://www.react-kanca.com/)

react kanca npm linki: [react-kanca npm](https://www.npmjs.com/package/react-kanca/)

## Install

```bash
yarn add react-kanca
```

```bash
npm install react-kanca
```

```bash
pnpm i react-kanca
```

![React Kanca](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*nl2InXMi1tuDmnrv.png)

## Usage

[![React Kanca Storybook](https://raw.githubusercontent.com/storybookjs/brand/37c5e9bde5c56b69a8c4312de7d60fb3a9d7de9d/icon/icon-storybook-default.svg)](https://www.react-kanca.com/)

```jsx
import {
  useBatteryInfo,
  useBeforeUnload,
  useClickOutside,
  useColorScheme,
  useConnection,
  useCookie,
  useCopyToClipboard,
  useDebounce,
  useEqualObject,
  useForceUpdate,
  useFullScreen,
  useGeolocation,
  useHover,
  useIntersectionObserver,
  useInterval,
  useIsFirstRender,
  useLocalStorage,
  useMedia,
  useMobileLandscape,
  useMousePageLeave,
  useMultiStateValidator,
  useOnlineStatus,
  usePageLeave,
  usePageVisible,
  usePreferredLanguage,
  usePrevious,
  useScrolling,
  useScrollLock,
  useScrollToElement,
  useSessionStorage,
  useStateValidator,
  useThrottle,
  useWindowScroll,
  useWindowSize,
} from 'react-kanca'

// import 'react-kanca/dist/index.css'

const App = () => {
    const { width, height } = useWindowSize()
    const isVisible = usePageVisible()

    .
    .
    .
}
```

![React Kanca](https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg)

## License

MIT © [anilcanboga](https://github.com/anilcanboga)
