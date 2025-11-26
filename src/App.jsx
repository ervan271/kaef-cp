import { Routes, Route, Link} from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Login from "./pages/Login";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import { ProtectedRoute } from './components/ProtectedRoute';
import AdminLayout from './layouts/AdminLayout'
import Users from './components/admin/Users';


function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home/>}/>
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* admin route protected */}
        <Route 
          path='/admin' 
          element={
            <ProtectedRoute> 
              <AdminLayout />
            </ProtectedRoute>
        } 
        >
          <Route index element={<Dashboard />}/>
          <Route path='dashboard' element={<Dashboard />}/>
          
          {/* USERS MODULE */}
          <Route path="users" element={<Users />} />
          
          
        </Route>
      </Routes>
    </>
  )
}

export default App;
