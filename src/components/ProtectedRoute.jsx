import { Navigate , useLocation} from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';


export function ProtectedRoute({ children }) {
    const { isAuthenticated, loading }  = useAuth();
    const location = useLocation();

    if (loading) {
        return (
        <div>
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                </div>
                </div>
        </div>
        )
    }
    //jika tidak terautentikasi,maka redirect ke login
    if (!isAuthenticated) {
        return <Navigate to="/login" state={{from: location}} />
    }

    

    return children;
}
