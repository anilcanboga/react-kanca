import { useS } from 'react-kanca'

const ThemeButton = () => {
  const [theme, setTheme] = useS('theme', 'light', true, true)

  const handleChangeTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return <button onClick={handleChangeTheme}>Temayı Değiştir</button>
}

export default ThemeButton
