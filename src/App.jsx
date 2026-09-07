import Counter from './components/counter.jsx'
import ListDisplay from './components/ListDisplay.jsx'
import RegistrationForm from './regestrationform.jsx'
import Product from './product.jsx'
import { Link, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const App = () => {
  return (
    <div className="container py-4 app-shell">
      <header className="app-header d-flex flex-wrap align-items-center justify-content-between gap-3">
        <Link className="app-brand" to="/">FirstApp</Link>
        <Link className="btn btn-dark" to="/product/101">View sample product</Link>
      </header>

      <Routes>
        <Route
          path="/"
          element={(
            <main className="app-content">
              <Counter />
              <ListDisplay />
              <RegistrationForm />
            </main>
          )}
        />
        <Route path="/product/:id" element={<Product />} />
        <Route path="*" element={<Product />} />
      </Routes>
    </div>
  )
}

export default App
