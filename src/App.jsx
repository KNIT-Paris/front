import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home/Home.jsx';
import Discover from './pages/Discover/Discover.jsx'
import Shop from './pages/Shop/Shop.jsx'
import Navbar from './components/Navbar/Navbar.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/discover" element={<Discover/>}/>
          <Route path="/shop" element={<Shop/>}/>
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
