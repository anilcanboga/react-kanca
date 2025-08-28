# react-kanca

> React-kanca, karmaşıklığı azaltarak projelerinizin daha okunabilir, yönetilebilir ve yeniden kullanılabilir olmasını sağlar. React projelerinde tekrar eden kodları azaltarak geliştirici deneyimini iyileştirmeyi amaçlamaktadır.

[![NPM](https://img.shields.io/npm/v/react-kanca.svg)](https://www.npmjs.com/package/react-kanca) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![License: MIT](https://img.shields.io/badge/License-MIT-white.svg)](https://opensource.org/licenses/MIT)

<div>
  <p align="center">
    Geliştirme sürecinizi profesyonelleştirmek ve hızlandırmak için özel olarak hazırlanmış React hooklarını içerir.
  </p>
</div>
<p align="center">
<a href="https://medium.com/@anilcanboga/react-kanca-0afba24625fa" target="_blank"><img align="center" src="https://shields.io/badge/react-black?logo=react&style=for-the-badge" alt="React.js" /></a>
<a href="https://medium.com/@anilcanboga" target="blank"><img align="center" src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" /></a>
</p>

react kanca storybook demo linki: [react-kanca storybook](https://react-kanca-storybook.vercel.app/) 🔗

## ☕️ Kurulum

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

## 🧠 Kullanım

```jsx
import {
useAudioRecorder,
useBatteryInfo,
useBeforeUnload,
useCamera,
useClickOutside,
useColorScheme,
useConnection,
useCookie,
useCookieListener,
useCopyToClipboard,
useCurrency,
useDateTimeFormat,
useDebounce,
useDebounceCallback,
useDisableActions,
useDocumentTitle
useDrop,
useDetectKeyboardOpen,
useEqualObject,
useFetch,
useForceUpdate,
useFullScreen,
useFuzzySearch,
useGeolocation,
useHover,
useIntersectionObserver,
useInterval,
useIpInfo,
useIsFirstRender,
useLocalStorage,
useMedia,
useMobileLandscape,
useMousePageLeave,
useMultiStateValidator,
useNumberFormat,
useOnlineStatus,
usePageLeave,
usePageVisible,
usePreferredLanguage,
usePrevious,
useRelativeTime,
useRendersCount,
useS,
useScrollDirection,
useScrolling,
useScrollLock,
useScrollToElement,
useSelection,
useSessionStorage,
useSpeechToText,
useStateValidator,
useTextToSpeech,
useThrottle,
useToggle,
useUpdateEffect,
useURLSearchParams,
useUserAnalytics,
useWindowScroll,
useWindowSize,
ErrorBoundaryKanca
} from 'react-kanca'

const App = () => {
    const { width, height } = useWindowSize()
    const isVisible = usePageVisible()

    .
    .
    .
}
```

[![React Kanca](https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg)](https://medium.com/@anilcanboga/react-kanca-0afba24625fa)

## Lisans

MIT © [anilcanboga](https://github.com/anilcanboga)

<!-- [![React.js](https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=for-the-badge)](https://medium.com/@anilcanboga/react-functional-components-t%C3%BCrk%C3%A7e-kaynak-d%C3%B6k%C3%BCman-1fcdc275adcc) -->

<!-- [![React.js](https://shields.io/badge/react-black?logo=react&style=for-the-badge)](https://medium.com/@anilcanboga/react-functional-components-t%C3%BCrk%C3%A7e-kaynak-d%C3%B6k%C3%BCman-1fcdc275adcc) [![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://medium.com/@anilcanboga) -->

<!-- [![React Kanca Storybook](https://raw.githubusercontent.com/storybookjs/brand/37c5e9bde5c56b69a8c4312de7d60fb3a9d7de9d/icon/icon-storybook-default.svg)](https://www.react-kanca.com/)
 -->

<!--  [![Awesome](https://awesome.re/badge.svg)](https://awesome.re) -->
