# react-kanca

> React-kanca, karmaşıklığı azaltarak projelerinizin daha okunabilir, yönetilebilir ve yeniden kullanılabilir olmasını sağlayan hookları içerir.

[![NPM](https://img.shields.io/npm/v/react-kanca.svg)](https://www.npmjs.com/package/react-kanca) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
yarn add react-kanca
```

```bash
npm install --save react-kanca
```

![React Kanca](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*nl2InXMi1tuDmnrv.png)

## Usage

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
  useWindowScroll
  useWindowSize,
} from 'react-kanca'

// import 'react-kanca/dist/index.css'

const App = () => {
    const { width, height } = useWindowSize()
    const isVisible = usePageVisible()
    const debounce = useDebounce('React Kanca', 5000)

    .
    .
    .
}
```

![React Kanca](https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg)

## License

MIT © [anilcanboga](https://github.com/anilcanboga)
