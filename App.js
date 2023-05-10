import React from 'react'
import { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom'
import About from './about/Nav/NavBar'
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App