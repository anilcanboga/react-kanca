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
  useSessionStorage
} from 'react-kanca'
// import 'react-kanca/dist/index.css'

const App = () => {
  // const { width, height } = useWindowSize()
  // const isVisible = usePageVisible()
  // const debounce = useDebounce('ab', 5000)

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

  // const { batteryLevel, isCharging, chargingTime, dischargingTime } =
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

  return (
    <>
      <br />
      {/* <h1>Current Count: {count}</h1>
      <h2>Previous Count: {prevCount !== undefined ? prevCount : 'N/A'}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button> */}
      <br />
      {/* <div>
        <div ref={scrollRef} style={{ overflow: 'auto', height: '300px' }}>
          <div>adasdasdasd</div>
          <div>adasdasdasd</div>
          <div>adasdasdasd</div>
          <div>adasdasdasd</div>
          <div>adasdasdasd</div>
          <div>adasdasdasd</div>
          <div>adasdasdasd</div>
          <div>adasdasdasd</div>
          <div>adasdasdasd</div>
          <div>adasdasdasd</div>
          <div>adasdasdasd</div>
          <div>adasdasdasd</div>
          <div>adasdasdasd</div>
          <div>adasdasdasd</div>
          <div>adasdasdasd</div>
          <div>adasdasdasd</div>
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
        <p>Tam Şarj Süresi: {chargingTime} saniye</p>
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
    </>
  )
}

export default App
