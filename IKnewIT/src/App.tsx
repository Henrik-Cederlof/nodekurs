import { useState } from 'react'
import GameScreen from './pages/GameScreen'
import AdminPage from './pages/AdminPage'
import './App.css'

function App() {
  const [admin, setAdmin] = useState(false)
  return (
    <div className="h-screen flex flex-col">
      {admin ? <AdminPage /> : <GameScreen />}
      <button onClick={() => setAdmin(!admin)}>Toggle Admin</button>
    </div>
  )
}

export default App
