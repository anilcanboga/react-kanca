import { useS } from 'react-kanca'

const ThemeDisplay = () => {
  const [theme, setTheme] = useS('theme', 'light', true)

  return <h1>Şu anki tema: {theme}</h1>
}

export default ThemeDisplay
