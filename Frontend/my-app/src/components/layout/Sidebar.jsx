import { NavLink } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const navItems = [
        { path: '/dashboard', name: 'Dashboard', icon: 'bi-grid-1x2-fill' },
        { path: '/scans', name: 'Scan Management', icon: 'bi-shield-check' },
        { path: '/api-management', name: 'API Management', icon: 'bi-key-fill' },
        { path: '/subscription', name: 'Subscription', icon: 'bi-credit-card-fill' },
    ];

    return (
        <aside
            className={`bg-dark text-light vh-100 d-flex flex-column border-end border-secondary position-fixed`}
            style={{ width: isOpen ? '260px' : '80px', transition: 'width 0.3s ease', zIndex: 1040 }}
        >
            <div className="d-flex align-items-center justify-content-between p-3 border-bottom border-secondary" style={{ height: '70px' }}>
                <div className="d-flex align-items-center overflow-hidden">
                    <i className="bi bi-radar fs-4 text-primary ms-2 me-3"></i>
                    {isOpen && <span className="fs-5 fw-bold letter-spacing-1 text-nowrap">DomainSec</span>}
                </div>
                <button className="btn btn-link text-muted p-0 d-none d-lg-block hover-text-light" onClick={toggleSidebar}>
                    <i className={`bi ${isOpen ? 'bi-chevron-left' : 'bi-chevron-right'} fs-5`}></i>
                </button>
            </div>

            <nav className="flex-grow-1 p-3 overflow-auto custom-scrollbar">
                <ul className="nav flex-column gap-2">
                    {isOpen && <li className="nav-item text-uppercase text-muted small fw-bold mt-2 mb-1 px-3">Main Menu</li>}
                    {navItems.map((item) => (
                        <li className="nav-item" key={item.path}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) => `nav-link rounded text-light px-3 py-2 d-flex align-items-center transition-colors ${isActive ? 'bg-primary bg-opacity-10 text-primary fw-semibold' : 'hover-bg-secondary'}`}
                                title={!isOpen ? item.name : ''}
                            >
                                <i className={`bi ${item.icon} fs-5`}></i>
                                {isOpen && <span className="ms-3 text-nowrap">{item.name}</span>}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="p-3 border-top border-secondary text-center">
                <div className="d-flex align-items-center justify-content-center">
                    <div className="spinner-grow spinner-grow-sm text-success me-2" role="status"></div>
                    {isOpen && <span className="small text-muted fw-semibold">Systems Operational</span>}
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
