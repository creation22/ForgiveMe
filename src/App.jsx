import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Frontpage from './components/Frontpage'
import OutputPage from './components/OutputPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Frontpage />} />
        <Route path="/output" element={<OutputPage />} />
      </Routes>
    </Router>
  )
}

export default App