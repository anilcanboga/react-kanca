import ThemeDisplay from './ThemeDisplay'
import ThemeButton from './ThemeButton'
import { useS } from 'react-kanca'

const App = () => {
  const [count, setCount] = useS(0)

  return (
    <div>
      <ThemeDisplay />
      <ThemeButton />
      <hr />
      <div>
        <button onClick={() => setCount((prev) => prev + 1)}>Arttır</button>
        <div>Sayı: {count}</div>
      </div>
    </div>
  )
}

export default App
