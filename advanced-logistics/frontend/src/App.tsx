import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [apiStatus, setApiStatus] = useState<string>('checking...');
  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:4000';

  useEffect(() => {
    fetch(`${apiUrl}/health`)
      .then((res) => res.json())
      .then((data) => setApiStatus(data.status === 'ok' ? 'Connected' : 'Unexpected response'))
      .catch(() => setApiStatus('Disconnected (Backend offline or starting)'));
  }, [apiUrl]);

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <header style={{ marginBottom: '2rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '1rem' }}>
        <h1 style={{ fontSize: '1.875rem', fontWeight: 700, color: '#0f172a' }}>
          Advanced Intelligent Logistics
        </h1>
        <p style={{ color: '#64748b', marginTop: '0.25rem' }}>
          Phase 0: Architecture Skeleton
        </p>
      </header>

      <main>
        <section
          style={{
            background: '#ffffff',
            borderRadius: '8px',
            padding: '1.5rem',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            marginBottom: '1.5rem',
          }}
        >
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#1e293b' }}>
            System Status
          </h2>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <span style={{ fontWeight: 600 }}>Backend Health:</span>
            <span
              style={{
                display: 'inline-block',
                padding: '0.2rem 0.6rem',
                borderRadius: '4px',
                fontSize: '0.875rem',
                background: apiStatus === 'Connected' ? '#dcfce7' : '#fee2e2',
                color: apiStatus === 'Connected' ? '#166534' : '#991b1b',
              }}
            >
              {apiStatus}
            </span>
          </div>
        </section>

        <section
          style={{
            background: '#ffffff',
            borderRadius: '8px',
            padding: '1.5rem',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h2 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: '#1e293b' }}>
            Roadmap Overview
          </h2>
          <ul style={{ listStylePosition: 'inside', color: '#475569', lineHeight: '1.8' }}>
            <li><strong>Phase 0:</strong> Skeleton Only (Current)</li>
            <li><strong>Phase 1:</strong> Authentication & Role-Based Access Control</li>
            <li><strong>Phase 2:</strong> Core Logistics & Supply Chain Entities</li>
            <li><strong>Phase 3:</strong> Warehouse & Inventory Management</li>
            <li><strong>Phase 4:</strong> Fleet & Driver Tracking</li>
            <li><strong>Phase 5:</strong> Customer & Supplier Portal</li>
            <li><strong>Phase 6:</strong> AI-Powered Optimization & Analytics</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default App;

