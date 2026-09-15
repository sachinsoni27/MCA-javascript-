import CurrentTime from './components/CurrentTime.jsx'
import Dashboard from './components/Dashboard.jsx'
import LoginForm from './components/LoginForm.jsx'
import { useUsername } from './authStore.js'
import './App.css'

function App() {
  const username = useUsername()

  return (
    <div>
      <CurrentTime />
      {username ? (
        <Dashboard />
      ) : (
        <LoginForm />
      )}
    </div>
  )
}

export default App
