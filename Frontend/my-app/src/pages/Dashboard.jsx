import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const mockRiskData = [
    { name: 'Critical', value: 12, color: '#dc3545' },
    { name: 'High', value: 34, color: '#fd7e14' },
    { name: 'Medium', value: 56, color: '#ffc107' },
    { name: 'Low', value: 89, color: '#0dcaf0' }
];

const mockRecentScans = [
    { id: 'SCN-8392', target: 'api.production.com', status: 'Completed', score: 'F', date: '2 hrs ago' },
    { id: 'SCN-8391', target: 'staging.internal.net', status: 'Running', score: '-', date: '4 hrs ago' },
    { id: 'SCN-8390', target: 'auth.service.io', status: 'Completed', score: 'A', date: 'Yesterday' }
];

const Dashboard = () => {
    return (
        <div className="container-fluid p-0">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
                <div>
                    <h2 className="mb-1 fw-bold text-light">Global Threat Landscape</h2>
                    <p className="text-muted mb-0 small">Overview of your monitored infrastructure surface.</p>
                </div>
                <button className="btn btn-primary d-flex align-items-center shadow-sm">
                    <i className="bi bi-play-fill me-2 bg-white bg-opacity-25 rounded-circle p-1"></i> Quick Discovery
                </button>
            </div>

            <div className="row g-4 mb-4">
                {[
                    { title: 'Total Scans', value: '14,392', sub: '+12.5% this week', icon: 'bi-radar', color: 'primary' },
                    { title: 'Risk Score', value: '72/100', sub: 'Status: Fair', icon: 'bi-activity', color: 'warning' },
                    { title: 'High Severity', value: '18', sub: '-4 since yesterday', icon: 'bi-exclamation-octagon', color: 'danger' },
                    { title: 'Active Assets', value: '3,211', sub: 'Across 4 cloud providers', icon: 'bi-server', color: 'info' }
                ].map((stat, i) => (
                    <div className="col-12 col-sm-6 col-xl-3" key={i}>
                        <div className="card bg-dark border-secondary h-100 hover-elevate transition-all">
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-start mb-3">
                                    <p className="text-muted text-uppercase small fw-bold mb-0 letter-spacing-1">{stat.title}</p>
                                    <div className={`bg-${stat.color} bg-opacity-10 p-2 rounded`}>
                                        <i className={`bi ${stat.icon} fs-5 text-${stat.color}`}></i>
                                    </div>
                                </div>
                                <h3 className="fw-bold text-light mb-1">{stat.value}</h3>
                                <p className={`small mb-0 text-${stat.color === 'danger' ? 'danger' : 'muted'}`}>{stat.sub}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="row g-4">
                <div className="col-12 col-xl-8">
                    <div className="card bg-dark border-secondary h-100">
                        <div className="card-header border-secondary bg-transparent py-3 d-flex justify-content-between align-items-center">
                            <h6 className="mb-0 fw-bold text-light">Recent Intel Scans</h6>
                            <button className="btn btn-sm btn-link text-primary text-decoration-none">View All</button>
                        </div>
                        <div className="card-body p-0">
                            <div className="table-responsive">
                                <table className="table table-dark table-hover table-striped align-middle mb-0">
                                    <thead className="table-dark text-muted small text-uppercase">
                                        <tr>
                                            <th className="px-4 py-3 fw-semibold">Task ID</th>
                                            <th className="py-3 fw-semibold">Target Asset</th>
                                            <th className="py-3 fw-semibold">Status</th>
                                            <th className="py-3 fw-semibold text-center">Grade</th>
                                            <th className="px-4 py-3 fw-semibold text-end">Executed</th>
                                        </tr>
                                    </thead>
                                    <tbody className="border-top-0">
                                        {mockRecentScans.map((scan) => (
                                            <tr key={scan.id} className="border-secondary border-bottom">
                                                <td className="px-4 py-3 text-muted font-monospace small">{scan.id}</td>
                                                <td className="py-3 fw-semibold text-light">{scan.target}</td>
                                                <td className="py-3">
                                                    <span className={`badge rounded-pill d-inline-flex align-items-center border ${scan.status === 'Completed' ? 'border-success text-success bg-success bg-opacity-10' : 'border-info text-info bg-info bg-opacity-10'
                                                        }`}>
                                                        {scan.status === 'Running' && <span className="spinner-border spinner-border-sm me-2" style={{ width: '10px', height: '10px' }}></span>}
                                                        {scan.status}
                                                    </span>
                                                </td>
                                                <td className="py-3 text-center">
                                                    <span className={`fw-bold fs-5 ${scan.score === 'F' ? 'text-danger' : scan.score === 'A' ? 'text-success' : 'text-muted'}`}>
                                                        {scan.score}
                                                    </span>
                                                </td>
                                                <td className="px-4 py-3 text-muted text-end small">{scan.date}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-xl-4">
                    <div className="card bg-dark border-secondary h-100">
                        <div className="card-header border-secondary bg-transparent py-3">
                            <h6 className="mb-0 fw-bold text-light">Vulnerability Distribution</h6>
                        </div>
                        <div className="card-body d-flex justify-content-center align-items-center" style={{ minHeight: '300px' }}>
                            <ResponsiveContainer width="100%" height={280}>
                                <PieChart>
                                    <Pie data={mockRiskData} cx="50%" cy="50%" innerRadius={70} outerRadius={90} paddingAngle={3} dataKey="value" stroke="none">
                                        {mockRiskData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                                    </Pie>
                                    <Tooltip contentStyle={{ backgroundColor: '#1a1d20', border: '1px solid #495057', borderRadius: '8px' }} itemStyle={{ color: '#fff' }} />
                                    <Legend verticalAlign="bottom" height={36} wrapperStyle={{ fontSize: '14px' }} />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
