import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/images/kfalogo1.png'
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
// import { authService } from "../services/authService.jsx";

function Login() {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });

    const handleChange = async (e) => {
        const { name, value } = e.target;
        setFormLogin((prevData) => ({ ...prevData, [name]: value }));
    

    if (error) {
        setError('');
        }
    };
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!formLogin.email || !formLogin.password) {
            setError('Please fill in all fields');
            return;
        }
        setLoading(true);
        try {
            await login( {
                email: formLogin.email,
                password: formLogin.password
                }
            );
            navigate('/admin');

         } catch (error) {
            setError('Failed to login, please check your email and password')
        } finally {
            setLoading(false);
        }
        
        }
  

  return ( 
    
    <div className="d-flex flex-column min-vh-100">
        {/* Bagian Tengah (Form Login) */}
        <div className="container d-flex flex-column justify-content-center align-items-center flex-grow-1">
            <div className="col-md-4 text-center mb-4">
            <main className="form-signin w-100 m-auto">
                <form onSubmit={handleSubmit}>
                <h3 className="h3 mb-3 fw-normal text-center">Silahkan Login</h3>

                {error && (
                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>{error}</strong>
                    <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                    </div>
                )}

                <div className="form-floating position-relative mb-3">
                    <input
                    type="email"
                    className="form-control pe-5"
                    id="floatingInput"
                    placeholder="name@example.com"
                    name="email"
                    value={formLogin.email}
                    onChange={handleChange}
                    required
                    />
                    <label htmlFor="floatingInput">Email address</label>
                    <i className="bi bi-envelope position-absolute top-50 end-0 translate-middle-y me-3"
                    style={{ fontSize: "1.1rem", opacity: 0.7 }}
                    ></i>
                </div>

                <div className="form-floating position-relative mb-3">
                    <input
                    type="password"
                    className="form-control pe-5"
                    id="floatingPassword"
                    placeholder="Password"
                    name="password"
                    value={formLogin.password}
                    onChange={handleChange}
                    required
                    />
                    <label htmlFor="floatingPassword">Password</label>
                    <i className="bi bi-lock position-absolute top-50 end-0 translate-middle-y me-3"
                    style={{ fontSize: "1.1rem", opacity: 0.7 }}
                    ></i>
                </div>
                <div className="form-check text-start my-3">
                <input
                    className="form-check-input"
                    type="checkbox"
                    value="remember-me"
                    id="checkDefault"
                />
                <label className="form-check-label" htmlFor="checkDefault">
                    Remember me
                </label>
                </div>

                <button className="btn btn-primary w-100 py-2 mb-2" type="submit"  disabled={loading}>
                    Sign in
                </button>
                <p>Don't Have Account ? <Link to="/register">Sign Up</Link></p>
                </form>
            </main>
            </div>
        </div>

        {/* FOOTER (selalu di bawah) */}
        <footer className="text-center text-body-secondary pb-3">
            © 2025 Apotek Farma App by Erfan. All rights reserved.
        </footer>

    </div>

  )
};

export default Login;
