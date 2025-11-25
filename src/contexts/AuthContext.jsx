import { createContext, useContext, useState, useEffect } from "react";
import { authService } from "../services/authService";

// inisiasi authcontext
const AuthContext = createContext(null);

// custom hook untuk menggunakan authcontext
export const useAuth = () => {
    const context = useContext(AuthContext);

    // cek jika tidak ada context
    if (!context) {
        throw new Error ('useauth harus digunakan dengan authprovider');
    }
    return context;
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  //cek autentikasi status jika aplikasi dimuat
  useEffect(() => {
    const checkAuth = async () => {
        try {
            const token = authService.getToken();

            const savedUser = authService.getUser();
            if (token && savedUser) {
                const response = await authService.getCurrentUser();
                setUser(response.data || savedUser);
                setIsAuthenticated(true);
            } else {
                setUser(null);
                setIsAuthenticated(false);
            }
            } catch (error) {
                setUser(null);
                setIsAuthenticated(false);
                localStorage.removeItem('token');
                localStorage.removeItem("user");
            } finally {
            setLoading(false);
            }
    }

    checkAuth();
    
    }, []);

  const login = async (credentials) => {
    try {
        setLoading(true);
        const response = await authService.login(credentials);
        setUser(response.user);
        setIsAuthenticated(true);
        return response;
    } catch (error) {
        throw error;
    } finally {
        setLoading(false);
    }
  };

  const logout = async () => {
    try {
        await authService.logout();
    } catch (error) {
        console.error('Logout error:', error);
    } finally {
        setUser(null);
        setIsAuthenticated(false);
        setLoading(false);
    }
  };

  const register = async (userData) => {
    try {
        setLoading(true);
        const response = await authService.register(userData);
        setUser(response.user);
        setIsAuthenticated(true);
        return response;
    } catch (error) {
        throw error;
    } finally {
        setLoading(false);
    }
  };

  const value = {
    user,
    login,
    logout,
    isAuthenticated,
    loading,
    register,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContext;