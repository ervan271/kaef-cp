import api from "./api.js";

export const authService = {
    login: async (credentials) => {
            try {
                const response = await api.post('auth/login' , credentials);

                const { user , token } = response.data.data;

                if (token) {
                    localStorage.setItem ('token',token);
                    localStorage.setItem ('user', JSON.stringify(user));
                }
                return {user, token};

            } catch (error) {
                
                throw error.response ? error.response.data : error;
            }
        },

    logout: async () => {
        try {
            await api.post ('auth/logout');
        } catch (error) {
            console.error('Logout Failed:', error);
        } finally {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        }
    },

    isAuthenticated: () => {
        const token = localStorage.getItem('token');
        return !!token;
    },

    getCurrentUser: async () => {
        try { 
            const response = await api.get('auth/me');
            return response.data.data;
        
        } catch (error) {
            throw error.response ? error.response.data : error;
        }
    },

    getToken: () => {
        return localStorage.getItem('token');
    },

    getUser: () => {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    },

    register: async (userData) => {
        try {
                const response = await api.post('/auth/register' , userData);

                const { user , token } = response.data.data;

                if (token) {
                    localStorage.setItem ('token',token);
                    localStorage.setItem ('user', JSON.stringify(user));
                }
                return {user, token};

            } catch (error) {
                
                throw error.response ? error.response.data : error;
            }
        },
}