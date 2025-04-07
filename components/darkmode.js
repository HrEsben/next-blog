'use client'
import useDarkMode from '@/hooks/use-dark-mode'

const nextModeIcons = {
    light: "🌚",
    dark: "🌝"
}
export default function DarkMode({defaultTheme}) {
    const {theme, toggleTheme} = useDarkMode(defaultTheme)
return (
    <button className="cursor-pointer" onClick={toggleTheme }>{nextModeIcons[theme]}</button>
)
}