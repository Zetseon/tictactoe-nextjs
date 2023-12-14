'use client';
import Game from './components/Game'
import Navbar from './components/Navbar'
import { useState } from 'react';
export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const handleTheme = () => {
    setIsDarkMode(!isDarkMode)
    console.log('clicked', isDarkMode)
  }
  return (
    <main className={`flex min-h-screen flex-col ${isDarkMode ? `bg-gray-950 text-slate-200` : `bg-rose-100 text-teal-900`}`}>
      <Navbar handleTheme={handleTheme} isDarkMode={isDarkMode}/>
      <Game/>
    </main>
  )
}
