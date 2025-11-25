import { Routes, Route, Link} from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Login from "./pages/Login";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';


function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home/>}/>
        </Route>

        <Route path='/dashboard' element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </>
  )
}

export default App;
