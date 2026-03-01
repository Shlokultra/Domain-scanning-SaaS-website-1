import { useState } from 'react';

const ApiManagement = () => {
    const [copied, setCopied] = useState(false);

    const apiKey = 'ds_live_8f991d3e2b1c4a5fA982C3D4B5E6F7G8';

    const copyToClipboard = () => {
        navigator.clipboard.writeText(apiKey);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="container-fluid p-0 max-w-1200">
            <h2 className="mb-4 fw-bold text-light">Developer API</h2>

            <div className="row g-4">
                <div className="col-12 col-lg-8">
                    <div className="card bg-dark border-secondary mb-4 shadow-sm">
                        <div className="card-body p-4 p-xl-5">
                            <h5 className="fw-bold mb-3 text-light">Production API Key</h5>
                            <p className="text-muted mb-4">Use this key to authorize requests to the DomainSec REST API. Do not share this key in publicly accessible repositories or client-side code.</p>

                            <div className="input-group mb-4">
                                <input
                                    type="text"
                                    className="form-control bg-black text-light border-secondary font-monospace py-3 ps-4"
                                    value={apiKey}
                                    readOnly
                                />
                                <button
                                    className={`btn ${copied ? 'btn-success' : 'btn-primary'} px-4`}
                                    onClick={copyToClipboard}
                                >
                                    <i className={`bi ${copied ? 'bi-check2' : 'bi-clipboard'} me-2`}></i>
                                    {copied ? 'Copied!' : 'Copy Key'}
                                </button>
                            </div>

                            <div className="d-flex align-items-center text-warning bg-warning bg-opacity-10 p-3 rounded border border-warning">
                                <i className="bi bi-exclamation-triangle-fill fs-4 me-3"></i>
                                <div>
                                    <h6 className="fw-bold mb-1">Rotated on: Oct 15, 2023</h6>
                                    <p className="small mb-0 opacity-75">If you suspect this key has been compromised, generate a new one immediately.</p>
                                </div>
                                <button className="btn btn-sm btn-outline-warning ms-auto">Regenerate Key</button>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-dark border-secondary shadow-sm">
                        <div className="card-header border-secondary bg-transparent py-3">
                            <h5 className="mb-0 fw-bold text-light">Recent API Activity</h5>
                        </div>
                        <div className="card-body p-0">
                            <table className="table table-dark table-striped mb-0">
                                <thead className="table-black border-secondary">
                                    <tr className="text-muted small text-uppercase">
                                        <th className="px-4 py-3">Endpoint</th>
                                        <th className="py-3">Method</th>
                                        <th className="py-3 text-center">Status</th>
                                        <th className="px-4 py-3 text-end">Time</th>
                                    </tr>
                                </thead>
                                <tbody className="border-top-0">
                                    <tr><td className="px-4 py-3 font-monospace text-light">/v1/scans/launch</td><td className="py-3"><span className="badge bg-primary">POST</span></td><td className="py-3 text-center"><span className="text-success fw-bold">200 OK</span></td><td className="px-4 py-3 text-end text-muted small">5 min ago</td></tr>
                                    <tr><td className="px-4 py-3 font-monospace text-light">/v1/scans/status/8392</td><td className="py-3"><span className="badge bg-info">GET</span></td><td className="py-3 text-center"><span className="text-success fw-bold">200 OK</span></td><td className="px-4 py-3 text-end text-muted small">12 min ago</td></tr>
                                    <tr><td className="px-4 py-3 font-monospace text-light">/v1/assets/add</td><td className="py-3"><span className="badge bg-primary">POST</span></td><td className="py-3 text-center"><span className="text-danger fw-bold">401 Auth</span></td><td className="px-4 py-3 text-end text-muted small">1 hour ago</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-lg-4">
                    <div className="card bg-primary text-white shadow-sm h-100 border-0" style={{ backgroundImage: 'linear-gradient(135deg, var(--bs-primary) 0%, #0a406b 100%)' }}>
                        <div className="card-body p-4 p-xl-5 d-flex flex-column">
                            <h5 className="fw-bold mb-4 d-flex align-items-center"><i className="bi bi-graph-up-arrow me-2"></i> Current Billing Cycle</h5>

                            <div className="mb-4 flex-grow-1">
                                <div className="d-flex justify-content-between mb-2">
                                    <span className="fw-semibold">API Requests</span>
                                    <span className="font-monospace fw-bold">45,291 / 100,000</span>
                                </div>
                                <div className="progress bg-white bg-opacity-25" style={{ height: '10px' }}>
                                    <div className="progress-bar bg-white" style={{ width: '45%' }}></div>
                                </div>
                                <p className="mt-2 small text-light text-opacity-75">Resets in 12 days</p>
                            </div>

                            <div>
                                <a href="/docs/api" className="btn btn-light text-primary fw-bold w-100 mb-3 py-2"><i className="bi bi-book-half me-2"></i> View Documentation</a>
                                <p className="text-center small mb-0 opacity-75">Need higher limits? <a href="/subscription" className="text-white fw-bold">Upgrade Plan</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApiManagement;
