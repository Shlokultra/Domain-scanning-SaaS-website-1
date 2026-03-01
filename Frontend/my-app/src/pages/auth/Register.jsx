import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="min-vh-100 d-flex align-items-center justify-content-center bg-black py-5 px-3" style={{ backgroundImage: 'radial-gradient(circle at center, #111 0%, #000 100%)' }}>
            <div className="card bg-dark border-secondary shadow-lg w-100 mx-auto" style={{ maxWidth: '500px' }}>
                <div className="card-body p-4 p-md-5">
                    <div className="text-center mb-4">
                        <i className="bi bi-shield-check text-primary" style={{ fontSize: '3rem' }}></i>
                        <h3 className="fw-bold text-light mt-3 letter-spacing-1">Join DomainSec</h3>
                        <p className="text-muted small">Start securing your external attack surface today</p>
                    </div>

                    <form>
                        <div className="row g-3">
                            <div className="col-12 col-md-6">
                                <label className="form-label text-muted small fw-semibold">First Name</label>
                                <input type="text" className="form-control bg-black text-light border-secondary py-2" required />
                            </div>
                            <div className="col-12 col-md-6">
                                <label className="form-label text-muted small fw-semibold">Last Name</label>
                                <input type="text" className="form-control bg-black text-light border-secondary py-2" required />
                            </div>

                            <div className="col-12">
                                <label className="form-label text-muted small fw-semibold">Work Email</label>
                                <input type="email" className="form-control bg-black text-light border-secondary py-2" required />
                            </div>

                            <div className="col-12">
                                <label className="form-label text-muted small fw-semibold">Company Name</label>
                                <input type="text" className="form-control bg-black text-light border-secondary py-2" required />
                            </div>

                            <div className="col-12">
                                <label className="form-label text-muted small fw-semibold">Create Password</label>
                                <input type="password" className="form-control bg-black text-light border-secondary py-2" required />
                                <div className="form-text text-muted small mt-1">Must be at least 12 characters and include a symbol.</div>
                            </div>

                            <div className="col-12 mt-4">
                                <button type="button" className="btn btn-primary w-100 py-2 fw-bold">Create Account</button>
                            </div>
                        </div>

                        <div className="text-center mt-4 pt-3 border-top border-secondary">
                            <p className="text-muted small mb-0">Already have an account? <Link to="/login" className="text-primary text-decoration-none fw-semibold">Sign In</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
