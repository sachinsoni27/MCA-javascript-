import Counter from './components/counter.jsx'
import ListDisplay from './components/ListDisplay.jsx'
import RegistrationForm from './regestrationform.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const App = () => {
  return (
    <div className="container py-4 app-shell">
      <Counter />
      <ListDisplay />
      <RegistrationForm />
    </div>
  )
}

export default App
