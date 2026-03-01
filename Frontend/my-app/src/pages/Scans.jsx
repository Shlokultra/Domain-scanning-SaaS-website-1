import { useState } from 'react';

const Scans = () => {
    const [targetUrl, setTargetUrl] = useState('');
    const [isDeploying, setIsDeploying] = useState(false);

    const mockHistory = [
        { target: 'payment.portal.com', type: 'PCI-DSS Audit', status: 'Running', progress: 68, findings: null, date: 'Oct 28, 2023 - 10:14 AM' },
        { target: 'vpn.corporate.net', type: 'Infrastructure Scan', status: 'Completed', progress: 100, findings: 4, date: 'Oct 27, 2023 - 08:30 PM' },
        { target: 'static.assets.io', type: 'Quick Recon', status: 'Pending', progress: 0, findings: null, date: 'Oct 28, 2023 - 10:20 AM' },
    ];

    const handleLaunch = (e) => {
        e.preventDefault();
        setIsDeploying(true);
        setTimeout(() => { setIsDeploying(false); setTargetUrl(''); }, 2000);
    };

    return (
        <div className="container-fluid p-0">
            <h3 className="mb-4 fw-bold text-light">Scan Engine Module</h3>

            <div className="card bg-dark border-secondary mb-4 shadow-sm">
                <div className="card-body p-4">
                    <h5 className="fw-bold mb-3 text-light d-flex align-items-center">
                        <i className="bi bi-box-arrow-in-right text-primary me-2"></i> Submit Target
                    </h5>
                    <form onSubmit={handleLaunch} className="row g-3 align-items-end">
                        <div className="col-12 col-md-5">
                            <label className="form-label text-muted small fw-semibold">Target Origin (FQDN or IPv4/IPv6)</label>
                            <input
                                type="text"
                                className="form-control bg-black text-light border-secondary py-2"
                                placeholder="e.g., https://api.service.com"
                                value={targetUrl}
                                onChange={(e) => setTargetUrl(e.target.value)}
                                required
                            />
                        </div>
                        <div className="col-12 col-md-4">
                            <label className="form-label text-muted small fw-semibold">Audit Configuration</label>
                            <select className="form-select bg-black text-light border-secondary py-2">
                                <option value="full">OWASP Top 10 + SANS 25 (Deep Audit)</option>
                                <option value="recon">Subdomain & Asset Reconnaissance</option>
                                <option value="ssl">Cryptographic/SSL Analysis</option>
                            </select>
                        </div>
                        <div className="col-12 col-md-3">
                            <button type="submit" className="btn btn-primary w-100 py-2 fw-bold text-uppercase" disabled={isDeploying || !targetUrl} style={{ letterSpacing: '1px' }}>
                                {isDeploying ? (
                                    <><span className="spinner-border spinner-border-sm me-2"></span> Initiating Engine...</>
                                ) : (
                                    <><i className="bi bi-lightning-charge-fill me-1"></i> Trigger Scan</>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="card bg-dark border-secondary shadow-sm">
                <div className="card-header border-secondary bg-transparent py-3 d-flex justify-content-between align-items-center">
                    <h5 className="mb-0 fw-bold text-light">Audit History</h5>
                    <div className="input-group" style={{ width: '280px' }}>
                        <span className="input-group-text bg-black border-secondary text-muted"><i className="bi bi-search"></i></span>
                        <input type="text" className="form-control bg-black text-light border-secondary" placeholder="Filter targets..." />
                    </div>
                </div>
                <div className="table-responsive">
                    <table className="table table-dark table-hover align-middle mb-0">
                        <thead className="table-dark border-secondary">
                            <tr className="text-uppercase small text-muted">
                                <th className="px-4 py-3 fw-semibold">Target Space</th>
                                <th className="py-3 fw-semibold">Profile</th>
                                <th className="py-3 fw-semibold">State</th>
                                <th className="py-3 fw-semibold" style={{ minWidth: '200px' }}>Operation Progress</th>
                                <th className="py-3 fw-semibold text-center">Threats</th>
                                <th className="py-3 fw-semibold">Timestamp</th>
                                <th className="px-4 py-3 fw-semibold text-end">Controls</th>
                            </tr>
                        </thead>
                        <tbody className="border-top-0">
                            {mockHistory.map((scan, i) => (
                                <tr key={i} className="border-secondary">
                                    <td className="px-4 py-3 fw-semibold text-light">{scan.target}</td>
                                    <td className="py-3 text-muted">{scan.type}</td>
                                    <td className="py-3">
                                        <span className={`badge rounded px-2 py-1 border ${scan.status === 'Completed' ? 'border-success text-success bg-success bg-opacity-10' :
                                                scan.status === 'Running' ? 'border-warning text-warning bg-warning bg-opacity-10' :
                                                    'border-secondary text-secondary bg-secondary bg-opacity-10'
                                            }`}>
                                            {scan.status}
                                        </span>
                                    </td>
                                    <td className="py-3">
                                        <div className="d-flex align-items-center">
                                            <div className="progress flex-grow-1 bg-black" style={{ height: '8px' }}>
                                                <div
                                                    className={`progress-bar ${scan.status === 'Running' ? 'progress-bar-striped progress-bar-animated bg-warning' : 'bg-success'}`}
                                                    role="progressbar"
                                                    style={{ width: `${scan.progress}%` }}
                                                ></div>
                                            </div>
                                            <span className="ms-3 text-muted small fw-bold" style={{ minWidth: '40px' }}>{scan.progress}%</span>
                                        </div>
                                    </td>
                                    <td className="py-3 text-center">
                                        {scan.status === 'Completed' ? (
                                            <span className={`badge ${scan.findings > 0 ? 'bg-danger' : 'bg-dark border border-secondary text-muted'} px-2 py-1`}>
                                                {scan.findings > 0 ? `${scan.findings} Found` : 'Clean'}
                                            </span>
                                        ) : <span className="text-muted">-</span>}
                                    </td>
                                    <td className="py-3 text-muted small">{scan.date}</td>
                                    <td className="px-4 py-3 text-end">
                                        <button className="btn btn-sm btn-dark border-secondary me-2 text-light" disabled={scan.status !== 'Completed'}>View Report</button>
                                        <button className="btn btn-sm btn-dark border-secondary text-muted"><i className="bi bi-three-dots-vertical"></i></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Scans;
