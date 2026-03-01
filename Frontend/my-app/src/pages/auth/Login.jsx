import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            // Mock API Call
            setTimeout(() => {
                if (email === 'admin@security.local' && password === 'admin') {
                    login('mock_jwt_token_12345');
                    navigate('/dashboard');
                } else {
                    setError('Invalid credentials');
                    // setError('Invalid credentials. Use admin@security.local / admin');
                    setIsLoading(false);
                }
            }, 1000);
        } catch (err) {
            setError('An error occurred during authentication.');
            setIsLoading(false);
        }
    };

    return (
        <div className="min-vh-100 d-flex align-items-center justify-content-center bg-black py-5 px-3" style={{ backgroundImage: 'radial-gradient(circle at center, #111 0%, #000 100%)' }}>
            <div className="card bg-dark border-secondary shadow-lg w-100 mx-auto" style={{ maxWidth: '450px' }}>
                <div className="card-body p-4 p-md-5">
                    <div className="text-center mb-4">
                        <i className="bi bi-radar text-primary" style={{ fontSize: '3rem' }}></i>
                        <h3 className="fw-bold text-light mt-3 letter-spacing-1">DomainSec</h3>
                        <p className="text-muted small">Access your security intelligence dashboard</p>
                    </div>

                    {error && (
                        <div className="alert alert-danger bg-danger bg-opacity-10 py-2 border-danger d-flex align-items-center small text-light mb-4" role="alert">
                            <i className="bi bi-exclamation-triangle-fill text-danger me-2"></i> {error}
                        </div>
                    )}

                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
                            <label className="form-label text-muted small fw-semibold">Work Email</label>
                            <div className="input-group">
                                <span className="input-group-text bg-black border-secondary text-muted"><i className="bi bi-envelope"></i></span>
                                <input
                                    type="email"
                                    className="form-control bg-black text-light border-secondary focus-ring focus-ring-primary py-2"
                                    placeholder="admin@security.local"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="mb-4">
                            <div className="d-flex justify-content-between">
                                <label className="form-label text-muted small fw-semibold">Password</label>
                                <a href="#" className="small text-primary text-decoration-none">Forgot password?</a>
                            </div>
                            <div className="input-group">
                                <span className="input-group-text bg-black border-secondary text-muted"><i className="bi bi-lock"></i></span>
                                <input
                                    type="password"
                                    className="form-control bg-black text-light border-secondary py-2"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary w-100 py-2 fw-bold mb-4" disabled={isLoading}>
                            {isLoading ? <span className="spinner-border spinner-border-sm me-2"></span> : <i className="bi bi-box-arrow-in-right me-2"></i>}
                            Secure Login
                        </button>

                        <div className="text-center">
                            <p className="text-muted small mb-0">Don't have an account? <Link to="/register" className="text-primary text-decoration-none fw-semibold">Request Access</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
