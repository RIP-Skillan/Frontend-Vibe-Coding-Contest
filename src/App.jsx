import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/HomePage'
import LoadingScreen from './pages/Loading'

function App() {
  const [count, setCount] = useState(0)
  const [loadingDone, setLoadingDone] = useState(false)

  return (
    <>
      <div className="w-full bg-black px-1 py-5">
        <Home />
        {!loadingDone && <LoadingScreen onFinish={() => setLoadingDone(true)} />}
      </div>
    </>
  )
}

export default App
