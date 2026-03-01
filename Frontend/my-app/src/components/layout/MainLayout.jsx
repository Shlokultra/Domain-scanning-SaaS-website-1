import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useAuth } from '../../hooks/useAuth';

const MainLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const { logout } = useAuth();

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 992) setIsSidebarOpen(false);
            else setIsSidebarOpen(true);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="d-flex bg-black text-light min-vh-100">
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

            <div className="flex-grow-1 d-flex flex-column" style={{ marginLeft: isSidebarOpen ? '260px' : '80px', transition: 'margin 0.3s ease' }}>
                <header className="navbar navbar-expand-lg border-bottom border-secondary bg-dark px-4 py-2 sticky-top" style={{ height: '70px', backgroundColor: 'rgba(33, 37, 41, 0.95)', backdropFilter: 'blur(10px)' }}>
                    <div className="w-100 d-flex justify-content-between align-items-center">
                        <button className="btn btn-link text-light d-lg-none p-0" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                            <i className="bi bi-list fs-3"></i>
                        </button>
                        <div className="d-none d-lg-flex flex-grow-1"></div>

                        <div className="d-flex align-items-center gap-4">
                            <div className="position-relative" style={{ cursor: 'pointer' }}>
                                <i className="bi bi-bell fs-5 text-muted hover-text-light"></i>
                                <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-dark rounded-circle"></span>
                            </div>

                            <div className="dropdown">
                                <button className="btn btn-outline-secondary border-0 dropdown-toggle text-light d-flex align-items-center bg-transparent gap-2" type="button" data-bs-toggle="dropdown">
                                    <img src="https://ui-avatars.com/api/?name=Admin+User&background=0D8ABC&color=fff" alt="Avatar" className="rounded-circle" width="32" height="32" />
                                    <span className="d-none d-md-inline fw-semibold small">Admin User</span>
                                </button>
                                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark shadow border-secondary mt-2">
                                    <li className="px-3 py-2 border-bottom border-secondary mb-2">
                                        <p className="mb-0 fw-bold">admin@security.local</p>
                                        <p className="mb-0 small text-muted">Pro Plan Active</p>
                                    </li>
                                    <li><button className="dropdown-item"><i className="bi bi-person me-2"></i> Profile</button></li>
                                    <li><button className="dropdown-item"><i className="bi bi-gear me-2"></i> Settings</button></li>
                                    <li><hr className="dropdown-divider border-secondary" /></li>
                                    <li><button className="dropdown-item text-danger" onClick={logout}><i className="bi bi-box-arrow-right me-2"></i> Log out</button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>

                <main className="flex-grow-1 p-4 overflow-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default MainLayout;
