import React from 'react'
import { useTheme } from './ThemeContext'

const Nineteen = () => {
    const {isDarkMode,toggleTheme} = useTheme();
  return (
    <div>
        <label>
            <input type="checkbox" checked={isDarkMode} onChange={toggleTheme}/>
            <h2>Dark Mode</h2>
        </label>
    </div>
  )
}

export default Nineteen