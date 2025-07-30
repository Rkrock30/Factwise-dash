import React from 'react';
import Dashboard from './components/Dashboard';
import './styles/professional.css'; // Make sure this CSS is imported!

function App() {
  return (
    <div className="app-bg">
      {/* Header */}
      <header className="main-header">
        <div className="logo-title">FactWise</div>
        <div className="user-actions">Hi, Admin</div>
      </header>

      {/* Main content */}
      <main className="main-content">
        {/* Example metric/stat cards */}
        <div className="metrics-row">
          <div className="metric-card">Total Employees: 20</div>
          <div className="metric-card">Active Employees: 19</div>
        </div>

        {/* Dashboard grid card */}
        <section className="dashboard-card">
          <h2 className="dashboard-title">Employee Directory</h2>
          <Dashboard />
        </section>
      </main>

      {/* Footer */}
      <footer className="footer-bar">
        &copy; 2025 FactWise. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
