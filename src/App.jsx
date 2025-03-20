
import './App.css'
import Land from './components/Land'
import NavBar from './components/NavBar'
import Create from './components/PO/Create'
import Login from './components/PO/login'



// import Detailjd from './components/Students/Detailjd'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Students/Dashboard'
function App() {
 
  return (
    <>
    <BrowserRouter>
   
    <NavBar/>
      <Routes>
        <Route path="/" element={<Land/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/create" element={<Create/>}/>
        

      </Routes>
    </BrowserRouter>
    </>
   
  )
}

export default App
