const Subscription = () => {
    return (
        <div className="container-fluid p-0">
            <div className="text-center mb-5 mt-3">
                <h2 className="fw-bold text-light mb-3">Transparent Pricing for Security Teams</h2>
                <p className="text-muted fs-5 max-w-700 mx-auto">Scale your intelligence capabilities as your infrastructure grows. No hidden fees.</p>

                <div className="d-inline-flex bg-dark p-1 rounded-pill border border-secondary mt-4">
                    <button className="btn btn-primary rounded-pill px-4 py-2 fw-semibold">Monthly Billing</button>
                    <button className="btn btn-transparent text-muted rounded-pill px-4 py-2 fw-semibold border-0 hover-text-light">Annual (Save 20%)</button>
                </div>
            </div>

            <div className="row g-4 justify-content-center max-w-1200 mx-auto">
                {/* Starter Plan */}
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card bg-dark border-secondary h-100 shadow-sm transition-transform hover-scale">
                        <div className="card-body p-4 p-xl-5">
                            <h4 className="fw-bold text-light mb-1">Starter</h4>
                            <p className="text-muted small mb-4">For independent researchers</p>
                            <h2 className="display-5 fw-bold text-light mb-4">$49<span className="fs-5 text-muted fw-normal">/mo</span></h2>
                            <button className="btn btn-outline-primary w-100 py-2 fw-bold mb-4">Downgrade to Starter</button>

                            <ul className="list-unstyled mb-0 gap-3 d-flex flex-column text-light">
                                <li className="d-flex align-items-start"><i className="bi bi-check-circle-fill text-success me-3 mt-1"></i> 100 Scans per month</li>
                                <li className="d-flex align-items-start"><i className="bi bi-check-circle-fill text-success me-3 mt-1"></i> OWASP Top 10 Audit</li>
                                <li className="d-flex align-items-start"><i className="bi bi-check-circle-fill text-success me-3 mt-1"></i> 3 Users</li>
                                <li className="d-flex align-items-start text-muted"><i className="bi bi-x me-3 fs-5"></i> No API Access</li>
                                <li className="d-flex align-items-start text-muted"><i className="bi bi-x me-3 fs-5"></i> Standard Support</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Pro Plan */}
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card bg-dark border-primary position-relative h-100 shadow-lg transition-transform hover-scale flex-column d-flex" style={{ transform: 'scale(1.05)', zIndex: 1, borderWidth: '2px' }}>
                        <div className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-primary px-3 py-2 text-uppercase letter-spacing-1 shadow">
                            Current Plan
                        </div>
                        <div className="card-body p-4 p-xl-5 flex-grow-1">
                            <h4 className="fw-bold text-primary mb-1">Professional</h4>
                            <p className="text-muted small mb-4">For active security teams</p>
                            <h2 className="display-5 fw-bold text-light mb-4">$149<span className="fs-5 text-muted fw-normal">/mo</span></h2>
                            <button className="btn btn-secondary w-100 py-2 fw-bold mb-4 disabled text-light">Active Subscription</button>

                            <ul className="list-unstyled mb-0 gap-3 d-flex flex-column text-light">
                                <li className="d-flex align-items-start"><i className="bi bi-check-circle-fill text-primary me-3 mt-1"></i> Unlimited Scans</li>
                                <li className="d-flex align-items-start"><i className="bi bi-check-circle-fill text-primary me-3 mt-1"></i> Deep Vulnerability Analysis</li>
                                <li className="d-flex align-items-start"><i className="bi bi-check-circle-fill text-primary me-3 mt-1"></i> 15 Users</li>
                                <li className="d-flex align-items-start"><i className="bi bi-check-circle-fill text-primary me-3 mt-1"></i> 100k API Requests/mo</li>
                                <li className="d-flex align-items-start"><i className="bi bi-check-circle-fill text-primary me-3 mt-1"></i> Priority Support</li>
                            </ul>
                        </div>
                        <div className="card-footer bg-transparent border-top border-secondary p-4 text-center">
                            <p className="small text-muted mb-0">Next billing date: Nov 15, 2023</p>
                        </div>
                    </div>
                </div>

                {/* Enterprise Plan */}
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card bg-dark border-secondary h-100 shadow-sm transition-transform hover-scale">
                        <div className="card-body p-4 p-xl-5">
                            <h4 className="fw-bold text-light mb-1">Enterprise</h4>
                            <p className="text-muted small mb-4">Custom infra requirements</p>
                            <h2 className="display-5 fw-bold text-light mb-4">Custom</h2>
                            <button className="btn btn-outline-secondary text-light w-100 py-2 fw-bold mb-4">Contact Sales</button>

                            <ul className="list-unstyled mb-0 gap-3 d-flex flex-column text-light">
                                <li className="d-flex align-items-start"><i className="bi bi-check-circle-fill text-success me-3 mt-1"></i> Dedicated Scanning Nodes</li>
                                <li className="d-flex align-items-start"><i className="bi bi-check-circle-fill text-success me-3 mt-1"></i> Custom Integrations</li>
                                <li className="d-flex align-items-start"><i className="bi bi-check-circle-fill text-success me-3 mt-1"></i> Unlimited Users</li>
                                <li className="d-flex align-items-start"><i className="bi bi-check-circle-fill text-success me-3 mt-1"></i> Unlimited API Access</li>
                                <li className="d-flex align-items-start"><i className="bi bi-check-circle-fill text-success me-3 mt-1"></i> 24/7 Phone Support & SLA</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscription;
