import { useEffect, useState, useRef } from 'react'

import {
  useWindowSize,
  usePageVisible,
  useDebounce,
  usePrevious,
  useHover,
  useScrolling,
  useBeforeUnload,
  useThrottle,
  useLocalStorage,
  useEqualObject,
  useCookie,
  useGeolocation,
  useIsFirstRender,
  useConnection,
  useBatteryInfo,
  useCopyToClipboard,
  useMedia,
  useClickOutside,
  useColorScheme,
  useFullScreen,
  useSessionStorage,
  useScrollLock,
  usePreferredLanguage,
  useMousePageLeave,
  usePageLeave,
  useForceUpdate,
  useInterval,
  useIntersectionObserver,
  useMobileLandscape,
  useOnlineStatus,
  useScrollToElement,
  useStateValidator,
  useMultiStateValidator,
  useWindowScroll
} from 'react-kanca'
// import 'react-kanca/dist/index.css'

const App = () => {
  // const { width, height } = useWindowSize()
  // const isVisible = usePageVisible()

  /*   const [text, setText] = useState('Kanca useDebounce')
  const [duration, setDuration] = useState(3000)
  const [debouncedText, debounce] = useDebounce()
  const handleClick = () => {
    debounce(text, duration)
  } */

  // const [count, setCount] = useState(0)
  // const prevCount = usePrevious(count)

  // const scrollRef = useRef(null)
  // const scrolling = useScrolling(scrollRef)

  // const [noReload, setNoReload] = useState(true)
  // useBeforeUnload(noReload, 'You have unsaved changes, are you sure?')

  // const [text, setText] = useState('')
  // const throttledValue = useThrottle(text, 2000)
  // console.log('throttledValue: ', throttledValue)

  // const [value, setValue, remove] = useLocalStorage('my-key', 'foo')

  // const obj1 = { a: 1, b: { c: 2 } }
  // const obj2 = { a: 1, b: { c: 2 } }
  // const obj3 = { a: 1, b: { c: 3 } }
  // console.log(useEqualObject(obj1, obj2)) // true
  // console.log(useEqualObject(obj1, obj3)) // false

  // const [value, updateCookie, deleteCookie] = useCookie('my-cookie')
  // const [counter, setCounter] = useState(1)
  // useEffect(() => {
  //   deleteCookie()
  // }, [])
  // const updateCookieHandler = () => {
  //   updateCookie(`my-awesome-cookie-${counter}`)
  //   setCounter((c) => c + 1)
  // }

  // const state = useGeolocation()

  // const isFirstRender = useIsFirstRender()
  // const [reload, setReload] = useState(0)
  // console.log('reload: ', reload)
  // const handleRenderClick = () => {
  //   setReload(Math.random() * 10)
  // }

  // const { status } = useConnection()

  // const { batteryLevel, isCharging, dischargingTime } =
  //   useBatteryInfo()

  // const { copied, error, copyToClipboard } = useCopyToClipboard()

  // const isMobile = useMedia(1024)
  // console.log('isMobile: ', isMobile)

  /*   const clickRef = useRef()
  useClickOutside(clickRef, () => alert('Dışarı tıklandı')) */

  // const colorScheme = useColorScheme()

  // const { isFullScreen, enterFullScreen, exitFullScreen } = useFullScreen()

  /*   const [name, setName] = useSessionStorage('name', 'John')

  const handleChange = (event) => {
    setName(event.target.value)
  }
  const [name] = useSessionStorage('name', 'John'); */

  /*   const [scrollLock, setScrollLock] = useState(false)
  useScrollLock(scrollLock) */

  // const preferredLanguage = usePreferredLanguage()

  /*   const [leftsCount, setLeftsCount] = useState(0)
  useMousePageLeave(() => setLeftsCount((p) => p + 1)) */

  /*   const handlePageLeave = () => {
    return 'Sayfayı kapatmak istediğinizden emin misiniz?'
  }
  usePageLeave(handlePageLeave) */

  // const forceUpdate = useForceUpdate()

  /*   const [count, setCount] = useState(0)
  const [delay, setDelay] = useState(1000)
  const [isRunning, setIsRunning] = useState(true)

  useInterval(
    () => {
      setCount((prevCount) => prevCount + 1)
    },
    isRunning ? delay : null
  ) */

  /*   const targetRef = useRef(null)
  const isVisible = useIntersectionObserver(targetRef, {
    root: null, // veya belirli bir root elemanı
    rootMargin: '0px',
    threshold: 0.1 // Elemanın %10'u görünür olduğunda tetiklenir
  }) */

  // const { isMobileLandscape, isLandscape, isMobile } = useMobileLandscape()

  // const isOnline = useOnlineStatus()

  /*  const scrollToElement = useScrollToElement()
  const myRef = useRef(null) */

  /*   const ExampleStateValidator = (s) => [s === '' ? null : (s * 1) % 2 === 0]
  const [state, setState] = useState(0)
  const [[isValid]] = useStateValidator(state, ExampleStateValidator) */

  /*   const ExampleMultiStateValidator = (s) => [s.every((num) => !(num % 2))]
  const [state1, setState1] = useState(1)
  const [state2, setState2] = useState(1)
  const [state3, setState3] = useState(1)
  const [[isValid]] = useMultiStateValidator(
    [state1, state2, state3],
    ExampleMultiStateValidator
  ) */

  // const { x, y } = useWindowScroll()

  return (
    <>
      {/*  <div>
        <div>
          <label>Yazılacak Değer: </label>
          <input onChange={(e) => setText(e.target.value)} value={text} />
        </div>
        <br />
        <div>
          <label>Kaç saniye sonra (ms): </label>
          <input
            type='number'
            onChange={(e) => setDuration(Number(e.target.value))}
            value={duration}
          />
        </div>
        <br />
        <div>
          <button onClick={handleClick}>Tıkla</button>
        </div>
        <br />
        <div>
          <p>Debounced Yazı: {debouncedText}</p>
        </div>
      </div> */}

      <br />
      {/* <h1>Current Count: {count}</h1>
      <h2>Previous Count: {prevCount !== undefined ? prevCount : 'N/A'}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button> */}
      <br />
      {/* <div>
        <div ref={scrollRef} style={{ overflow: 'auto', height: '300px' }}>
          <div>.........</div>
          <div>.........</div>
          <div>.........</div>
          <div>.........</div>
          <div>.........</div>
          <div>.........</div>
          <div>.........</div>
          <div>.........</div>
          <div>.........</div>
          <div>.........</div>
          <div>.........</div>
          <div>.........</div>
          <div>.........</div>
          <div>.........</div>
          <div>.........</div>
          <div>.........</div>
        </div>
        {<div>{scrolling ? 'Scrolling' : 'Not scrolling'}</div>}
      </div> */}
      {/* <div>
        <input type='text' onChange={(e) => setText(e.target.value)} />
      </div> */}
      {/* <div>
        <div>Value: {value}</div>
        <button onClick={() => setValue('bar')}>bar</button>
        <button onClick={() => setValue('baz')}>baz</button>
        <button onClick={() => remove()}>Remove</button>
      </div> */}
      {/* <div>
          <p>Value: {value}</p>
          <button onClick={updateCookieHandler}>Update Cookie</button>
          <br />
          <button onClick={deleteCookie}>Delete Cookie</button>
        </div> */}
      {/* <div>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div> */}
      {/* <div>
        {isFirstRender ? (
          <p>This is the first render</p>
        ) : (
          <p>This is not the first render</p>
        )}
        <button onClick={handleRenderClick}>Click</button>
      </div> */}
      {/* <div>Internet Durumu = {status ? 'online' : 'offline'}</div> */}
      {/* <div>
        <p>Batarya Seviyesi: {batteryLevel}%</p>
        <p>Şarj Oluyor mu: {isCharging ? 'Evet' : 'Hayır'}</p>
        <p>Tahmini Şarj Bitiş Süresi: {dischargingTime} saniye</p>
      </div> */}
      {/* <button onClick={() => copyToClipboard('Bu bir denemedir.')}>
        Tıkla
      </button>
      {copied ? 'kopyalandı' : 'Kopyala'} */}
      {/*       <div>
        <div
          className='click-box'
          ref={clickRef}
          style={{
            border: '2px dashed orangered',
            height: 200,
            width: 400,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <p>Bu öğenin dışına tıklayın</p>
        </div>
      </div> */}
      {/*       <div className={`app ${colorScheme}`}>
        <p>Şu anki renk teması: {colorScheme}</p>
      </div> */}
      {/*       <div>
        <button onClick={enterFullScreen}>Tam Ekran Modu</button>
        <button onClick={exitFullScreen}>Tam Ekran Modundan Çık</button>
        <p>Şu an tam ekran modunda: {isFullScreen ? 'Evet' : 'Hayır'}</p>
      </div> */}
      {/*       <div>
        <input type='text' value={name} onChange={handleChange} />
        <p>Hello, {name}!</p>
      </div> */}
      {/*       <button onClick={() => setScrollLock(!scrollLock)}>
        {scrollLock ? 'Unlock Scroll' : 'Lock Scroll'}
      </button> */}
      {/*       <div>
        <h1>Tercih Edilen Dil:</h1>
        <p>{preferredLanguage}</p>
      </div> */}
      {/* <div>Mouse sayfadan {leftsCount} kere ayrıldı</div> */}
      {/*       <div>
        <h1>Sayfayı Kapatma Uyarısı</h1>
        <p>Bu sayfadan ayrılmak istediğinizde bir uyarı göreceksiniz.</p>
      </div> */}
      {/*       <div>
        <h1>Manuel Yeniden Render</h1>
        <p>Şu anki zaman: {new Date().toLocaleTimeString()}</p>
        <button onClick={forceUpdate}>Yeniden Render Et</button>
      </div> */}
      {/*       <div>
        <input
          type='number'
          value={delay}
          onChange={(event) => setDelay(Number(event.target.value))}
        />
        <h1>Sayı: {count}</h1>
        <div>
          <button onClick={() => setIsRunning(!isRunning)}>
            {isRunning ? 'Durdur' : 'Başlat'}
          </button>
        </div>
      </div> */}
      {/*       <h1>Scroll yaparak çalıştırabilirsiniz.</h1>
      <div style={{ height: '100vh' }}></div>
      <div
        ref={targetRef}
        style={{
          height: '100px',
          backgroundColor: isVisible ? 'green' : 'red'
        }}
      >
        {isVisible ? 'Görünür!' : 'Görünmez!'}
      </div> */}

      {/*       <div>
        <h1>
          {isMobileLandscape
            ? 'Mobil Landscape Modu'
            : 'Mobil Landscape Modu Değil'}
        </h1>
        <p>
          {isMobileLandscape
            ? 'Şu anda mobil cihazınızı yatay modda kullanıyorsunuz.'
            : 'Ya mobil cihazda değilsiniz ya da landscape modundasınız.'}
        </p>
      </div> */}

      {/* <div>{isOnline ? <p>Çevrimiçi</p> : <p>Çevrimdışı</p>}</div> */}

      {/*       <div>
        <button onClick={() => scrollToElement(myRef)}>Ref ile Kaydır</button>
        <button onClick={() => scrollToElement('#my-element')}>
          CSS Seçici ile Kaydır
        </button>
        <div style={{ height: '1500px' }}>Boş Alan</div>
        <div
          ref={myRef}
          id='my-element'
          style={{ padding: '20px', background: 'lightblue' }}
        >
          Hedef Element
        </div>
      </div> */}

      {/*       <div>
        <div>
          Aşağıdaki alan yalnızca sayının çift olması durumunda geçerlidir
        </div>
        <input
          type='number'
          min='0'
          max='10'
          value={state}
          onChange={(ev) => {
            setState(ev.target.value)
          }}
        />
        {isValid !== null && <span>{isValid ? 'Geçerli!' : 'Geçersiz'}</span>}
      </div> */}

      {/*       <div>
        <div>Aşağıdaki alanların tamamı çift sayı ise geçerli olacaktır.</div>
        <input
          type='number'
          min='1'
          max='10'
          value={state1}
          onChange={(ev) => {
            setState1(ev.target.value)
          }}
        />
        <input
          type='number'
          min='1'
          max='10'
          value={state2}
          onChange={(ev) => {
            setState2(ev.target.value)
          }}
        />
        <input
          type='number'
          min='1'
          max='10'
          value={state3}
          onChange={(ev) => {
            setState3(ev.target.value)
          }}
        />
        {isValid !== null && <span>{isValid ? 'Geçerli!' : 'Geçersiz'}</span>}
      </div> */}

      {/*   <div
        style={{
          width: '200vw',
          height: '200vh'
        }}
      >
        <div
          style={{
            position: 'fixed',
            left: 0,
            right: 0
          }}
        >
          <div>x: {x}</div>
          <div>y: {y}</div>
        </div>
      </div> */}
    </>
  )
}

export default App
