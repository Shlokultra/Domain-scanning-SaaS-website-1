import { useState } from 'react';

const ScanDetails = () => {
    const [isRawJsonOpen, setIsRawJsonOpen] = useState(false);

    return (
        <div className="container-fluid p-0">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-1">
                            <li className="breadcrumb-item"><a href="/scans" className="text-secondary text-decoration-none">Scans</a></li>
                            <li className="breadcrumb-item active text-light" aria-current="page">SCN-8392</li>
                        </ol>
                    </nav>
                    <h3 className="fw-bold text-light mb-0 d-flex align-items-center">
                        api.production.com
                        <span className="badge bg-success bg-opacity-10 text-success border border-success ms-3 fs-6 px-3 py-1 fw-normal">Completed</span>
                    </h3>
                </div>
                <div>
                    <button className="btn btn-outline-secondary text-light me-2"><i className="bi bi-download me-2"></i> Export PDF</button>
                    <button className="btn btn-primary"><i className="bi bi-arrow-repeat me-2"></i> Rescan Target</button>
                </div>
            </div>

            <div className="row g-4 mb-4">
                <div className="col-12 col-xl-8">
                    <div className="card bg-dark border-secondary mb-4 shadow-sm">
                        <div className="card-header border-secondary bg-transparent py-3">
                            <h5 className="mb-0 fw-bold text-light"><i className="bi bi-bug-fill text-danger me-2"></i> Identified Vulnerabilities</h5>
                        </div>
                        <div className="list-group list-group-flush border-0">
                            {[
                                { name: 'Unauthenticated API Endpoint Exposure', severity: 'Critical', cve: 'CVE-2023-XXXX', path: '/api/v1/users/export' },
                                { name: 'Missing HSTS Header', severity: 'Medium', cve: 'CWE-319', path: 'Headers' },
                                { name: 'Information Disclosure (Server Version)', severity: 'Low', cve: 'CWE-200', path: 'Headers (X-Powered-By)' },
                            ].map((vuln, i) => (
                                <div key={i} className="list-group-item bg-dark border-secondary text-light py-3 px-4 hover-bg-secondary transition-colors">
                                    <div className="d-flex w-100 justify-content-between align-items-center mb-2">
                                        <h6 className="mb-0 fw-bold">{vuln.name}</h6>
                                        <span className={`badge px-2 py-1 border ${vuln.severity === 'Critical' ? 'bg-danger text-white border-danger' :
                                                vuln.severity === 'Medium' ? 'bg-warning text-dark border-warning' :
                                                    'bg-info text-dark border-info'
                                            }`}>{vuln.severity}</span>
                                    </div>
                                    <p className="mb-1 text-muted small"><span className="fw-semibold text-secondary">Location:</span> {vuln.path}</p>
                                    <small className="text-secondary font-monospace"><i className="bi bi-tag-fill me-1"></i> {vuln.cve}</small>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="card bg-dark border-secondary shadow-sm">
                        <div className="card-header border-secondary bg-transparent py-3 d-flex justify-content-between align-items-center">
                            <h5 className="mb-0 fw-bold text-light"><i className="bi bi-diagram-3-fill text-primary me-2"></i> Open Ports & Services</h5>
                        </div>
                        <div className="table-responsive">
                            <table className="table table-dark table-striped mb-0">
                                <thead className="table-dark text-muted small text-uppercase">
                                    <tr>
                                        <th className="px-4 py-3">Port</th>
                                        <th className="py-3">Protocol</th>
                                        <th className="py-3">Service</th>
                                        <th className="py-3">Version/Banner</th>
                                        <th className="px-4 py-3">State</th>
                                    </tr>
                                </thead>
                                <tbody className="border-top-0">
                                    <tr><td className="px-4 py-3 font-monospace text-primary">80</td><td className="py-3">TCP</td><td className="py-3">HTTP</td><td className="py-3 text-muted">nginx 1.18.0</td><td className="px-4 py-3"><span className="text-success fw-bold">open</span></td></tr>
                                    <tr><td className="px-4 py-3 font-monospace text-primary">443</td><td className="py-3">TCP</td><td className="py-3">HTTPS</td><td className="py-3 text-muted">nginx 1.18.0</td><td className="px-4 py-3"><span className="text-success fw-bold">open</span></td></tr>
                                    <tr><td className="px-4 py-3 font-monospace text-primary">22</td><td className="py-3">TCP</td><td className="py-3">SSH</td><td className="py-3 text-muted">OpenSSH 8.2p1</td><td className="px-4 py-3"><span className="text-warning fw-bold">filtered</span></td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-xl-4">
                    <div className="card bg-dark border-secondary mb-4 shadow-sm">
                        <div className="card-header border-secondary bg-transparent py-3">
                            <h5 className="mb-0 fw-bold text-light"><i className="bi bi-shield-lock-fill text-success me-2"></i> SSL/TLS Context</h5>
                        </div>
                        <div className="card-body p-4">
                            <div className="d-flex align-items-center mb-4">
                                <div className="display-4 fw-bold text-success me-3">A+</div>
                                <div>
                                    <h6 className="mb-0 fw-bold">Certificate Rating</h6>
                                    <p className="small text-muted mb-0">Valid until Dec 2024</p>
                                </div>
                            </div>
                            <ul className="list-unstyled mb-0 gap-3 d-flex flex-column">
                                <li className="d-flex justify-content-between"><span className="text-muted">Issuer:</span><span className="fw-semibold">Let's Encrypt</span></li>
                                <li className="d-flex justify-content-between"><span className="text-muted">Key Size:</span><span className="fw-semibold">RSA 2048</span></li>
                                <li className="d-flex justify-content-between"><span className="text-muted">TLS 1.3:</span><span className="text-success fw-bold">Supported</span></li>
                                <li className="d-flex justify-content-between"><span className="text-muted">TLS 1.0/1.1:</span><span className="text-success fw-bold">Disabled</span></li>
                            </ul>
                        </div>
                    </div>

                    <div className="card bg-dark border-secondary shadow-sm">
                        <div className="card-header border-secondary bg-transparent py-3 d-flex justify-content-between align-items-center cursor-pointer" onClick={() => setIsRawJsonOpen(!isRawJsonOpen)}>
                            <h5 className="mb-0 fw-bold text-light"><i className="bi bi-filetype-json text-warning me-2"></i> Raw Engine Output</h5>
                            <i className={`bi ${isRawJsonOpen ? 'bi-chevron-up' : 'bi-chevron-down'} text-muted`}></i>
                        </div>
                        {isRawJsonOpen && (
                            <div className="card-body p-0 border-top border-secondary">
                                <pre className="p-4 m-0 bg-black text-success font-monospace small overflow-auto" style={{ maxHeight: '300px' }}>
                                    {JSON.stringify({
                                        "target": "api.production.com",
                                        "timestamp": "2023-10-28T14:30:00Z",
                                        "engine": "nmap-7.92",
                                        "args": "-sS -sV -p- -T4",
                                        "hosts": {
                                            "status": "up",
                                            "address": "192.168.1.100"
                                        }
                                    }, null, 2)}
                                </pre>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScanDetails;
