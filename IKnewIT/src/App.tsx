import { useState } from 'react'
import GameScreen from './pages/GameScreen'
import AdminPage from './pages/AdminPage'
import './App.css'
import LoginPage from './pages/LoginPage'

function App() {
  const [admin, setAdmin] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div className="h-screen flex flex-col">
      {isLoggedIn ? (admin ? <AdminPage /> : <GameScreen />) : <LoginPage />}      
      <button onClick={() => setAdmin(!admin)}>Toggle Admin</button>
    </div>
  )
}

export default App
