import React from 'react'
import { useTheme } from './ThemeContext'
import './styles/NineTeen.css'

export default function NineteethComp() {

    const {isDarkMode} = useTheme()
    const themeClass = isDarkMode ? 'dark-theme' : 'light-theme'
  return (
    <div className={`container ${themeClass}`}>
        <p>This component uses selected theme</p>
    </div>
  )
}
