import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";


function Register() {
    const navigate = useNavigate();
    const { register } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const [formRegister, setFormRegister] = useState({
    username: "",
    email: "",
    password: "",
    fullName: "",
    role: "user",
  });

    const handleChange = async (e) => {
        const { name, value } = e.target;
        setFormRegister((prevData) => ({ ...prevData, [name]: value }));
    

    if (error) {
        setError('');
        }
    };
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (
            !formRegister.username || 
            !formRegister.email ||
            !formRegister.password || 
            !formRegister.fullName || 
            !formRegister.role
        ) {
            setError('Please fill in all fields');
            return;
        }
        setLoading(true);
        try {
            await register( {
                username: formRegister.username,
                email: formRegister.email,
                password: formRegister.password,
                fullName: formRegister.fullName,
                role: formRegister.role,
                }
            );
            navigate('/login');

         } catch (error) {
            setError('Failed to register, Username or Email is already taken')
        } finally {
            setLoading(false);
        }
        
        }
  

  return ( 
    
    <div className="d-flex flex-column min-vh-100">
        
        <div className="container d-flex flex-column justify-content-center align-items-center flex-grow-1">
            <div className="col-md-4 text-center mb-4">
            <main className="form-signin w-100 m-auto">
                <form onSubmit={handleSubmit}>
                <h3 className="h3 mb-3 fw-normal text-center">Register</h3>

                {error && (
                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>{error}</strong>
                    <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                    </div>
                )}

                <div className="form-floating position-relative mb-3">
                    <input
                    type="text"
                    className="form-control pe-5"
                    id="usernameInput"
                    placeholder="username"
                    name="username"
                    value={formRegister.username}
                    onChange={handleChange}
                    required
                    />
                    <label htmlFor="usernameInput">Username</label>
                    <i className="bi bi-person position-absolute top-50 end-0 translate-middle-y me-3"
                    style={{ fontSize: "1.1rem", opacity: 0.7 }}
                    ></i>
                </div>

                <div className="form-floating position-relative mb-3">
                    <input
                    type="text"
                    className="form-control pe-5"
                    id="fullNameInput"
                    placeholder="fullName"
                    name="fullName"
                    value={formRegister.fullName}
                    onChange={handleChange}
                    required
                    />
                    <label htmlFor="fullNameInput">Full Name</label>
                    <i className="bi bi-card-text position-absolute top-50 end-0 translate-middle-y me-3"
                    style={{ fontSize: "1.1rem", opacity: 0.7 }}
                    ></i>
                </div>

                <div className="form-floating position-relative mb-3">
                    <input
                    type="email"
                    className="form-control pe-5"
                    id="emailInput"
                    placeholder="name@example.com"
                    name="email"
                    value={formRegister.email}
                    onChange={handleChange}
                    required
                    />
                    <label htmlFor="emailInput">Email address</label>
                    <i className="bi bi-envelope position-absolute top-50 end-0 translate-middle-y me-3"
                    style={{ fontSize: "1.1rem", opacity: 0.7 }}
                    ></i>
                </div>

                <div className="form-floating position-relative mb-3">
                    <input
                    type="password"
                    className="form-control pe-5"
                    id="passwordInput"
                    placeholder="Password"
                    name="password"
                    value={formRegister.password}
                    onChange={handleChange}
                    required
                    />
                    <label htmlFor="passwordInput">Password</label>
                    <i className="bi bi-lock position-absolute top-50 end-0 translate-middle-y me-3"
                    style={{ fontSize: "1.1rem", opacity: 0.7 }}
                    ></i>
                </div>

                <button className="btn btn-primary w-100 py-2" type="submit"  disabled={loading}>
                    {loading ? 'Register process...' : 'Register '}
                </button>
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

export default Register;
