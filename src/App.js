import React from 'react'
import { useMediaQuery } from 'react-responsive'
import CardMobile from './components/CardMobile/CardMobile';
import CardWeb from './components/CardWeb/CardWeb';
import './App.css';

function App() {

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 768px)' })

  return (
    <div>
        {isDesktopOrLaptop && <CardWeb />}
        {isTabletOrMobile && <CardMobile />}
    </div>
  )
}

export default App