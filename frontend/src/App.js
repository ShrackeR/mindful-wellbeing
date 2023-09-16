import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Home from './pages/Home'
import Navbar from './components/Navigation'
import Login from '../src/components/Login'
import SignUp from './components/Signup'
import Api from './pages/Api'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={<Home />} 
            />
             <Route 
              path="/login" 
              element={<Login />} 
            />
            <Route 
              path="/signup" 
              element={<SignUp />} 
            />
            <Route 
              path="/api" 
              element={<Api />} 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

