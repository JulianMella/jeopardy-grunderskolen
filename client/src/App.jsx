import { useState } from 'react'
import { Login } from "./components/Login"
import { Button } from './components/Button'
import { GameShow } from './GameShow'
import './app.css'


function App() {
  const [username, setUsername] = useState("")
  const WS_URL = "ws://127.0.0.1:8000"

  return username ? (
    username === "host" ? (
      <GameShow/>
    ) : (
      <Button/>
    )
  ) : (
    <Login username={username} onSubmit={setUsername}/>
  )
}

export default App
