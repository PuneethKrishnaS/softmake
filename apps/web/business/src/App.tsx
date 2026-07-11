import { useState } from 'react';
import { 
  BarChart3, 
  Receipt, 
  FileText, 
  Users, 
  LifeBuoy, 
  TrendingUp, 
  AlertCircle,
  ChevronRight
} from 'lucide-react';

export default function App() {
  const [activeMenu, setActiveMenu] = useState('dashboard');

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <aside>
        <div className="brand">
          <TrendingUp size={24} color="#3b82f6" />
          <span>Softmade Biz</span>
        </div>
        <div className="menu">
          <a href="#" className={`menu-item ${activeMenu === 'dashboard' ? 'active' : ''}`} onClick={() => setActiveMenu('dashboard')}>
            <BarChart3 size={18} />
            <span>Dashboard</span>
          </a>
          <a href="#" className={`menu-item ${activeMenu === 'invoices' ? 'active' : ''}`} onClick={() => setActiveMenu('invoices')}>
            <Receipt size={18} />
            <span>Invoices</span>
          </a>
          <a href="#" className={`menu-item ${activeMenu === 'contracts' ? 'active' : ''}`} onClick={() => setActiveMenu('contracts')}>
            <FileText size={18} />
            <span>Contracts</span>
          </a>
          <a href="#" className={`menu-item ${activeMenu === 'crm' ? 'active' : ''}`} onClick={() => setActiveMenu('crm')}>
            <Users size={18} />
            <span>CRM Pipeline</span>
          </a>
          <a href="#" className={`menu-item ${activeMenu === 'support' ? 'active' : ''}`} onClick={() => setActiveMenu('support')}>
            <LifeBuoy size={18} />
            <span>Support Desk</span>
          </a>
        </div>
      </aside>

      {/* Main Panel */}
      <main>
        {/* Header */}
        <div className="header">
          <div>
            <h1>Acme Corporation</h1>
            <p style={{ color: 'var(--text-secondary)' }}>Welcome to your business dashboard.</p>
          </div>
          <div className="user-profile">
            <div className="avatar">AC</div>
            <div>
              <p style={{ fontWeight: 600 }}>Alex Carter</p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>Client Owner</p>
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="metrics">
          <div className="metric-card">
            <div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Total Invoiced</p>
              <p className="metric-value">$18,450.00</p>
            </div>
            <div className="metric-icon" style={{ background: 'rgba(59, 130, 246, 0.1)', color: 'var(--accent-blue)' }}>
              <Receipt size={24} />
            </div>
          </div>

          <div className="metric-card">
            <div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Active Projects</p>
              <p className="metric-value">2</p>
            </div>
            <div className="metric-icon" style={{ background: 'rgba(139, 92, 246, 0.1)', color: 'var(--accent-purple)' }}>
              <FileText size={24} />
            </div>
          </div>

          <div className="metric-card">
            <div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Support Tickets</p>
              <p className="metric-value">1 <span style={{ fontSize: '0.8rem', color: '#ef4444', fontWeight: 500 }}>Open</span></p>
            </div>
            <div className="metric-icon" style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444' }}>
              <AlertCircle size={24} />
            </div>
          </div>
        </div>

        {/* Contracts & Invoices Table */}
        <div className="table-container">
          <div className="table-header">
            <h3>Recent Invoices</h3>
            <button style={{ background: 'transparent', border: 'none', color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer', fontWeight: 600 }}>
              View All <ChevronRight size={16} />
            </button>
          </div>
          <table>
            <thead>
              <tr>
                <th>Invoice Number</th>
                <th>Description</th>
                <th>Due Date</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>INV-2026-001</td>
                <td>Milestone 1: Synopsis & Architecture Signoff</td>
                <td>June 24, 2026</td>
                <td>$3,500.00</td>
                <td><span className="badge paid">Paid</span></td>
              </tr>
              <tr>
                <td>INV-2026-002</td>
                <td>Milestone 2: Frontend & Database Core Integration</td>
                <td>July 28, 2026</td>
                <td>$7,500.00</td>
                <td><span className="badge pending">Pending</span></td>
              </tr>
              <tr>
                <td>INV-2026-003</td>
                <td>Milestone 3: QA & Testing Final Delivery</td>
                <td>August 30, 2026</td>
                <td>$7,450.00</td>
                <td><span className="badge pending">Pending</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Active Contracts Section */}
        <div className="table-container" style={{ background: 'rgba(255, 255, 255, 0.01)' }}>
          <div className="table-header">
            <h3>Active Contracts</h3>
            <button style={{ background: 'transparent', border: 'none', color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer', fontWeight: 600 }}>
              View All <ChevronRight size={16} />
            </button>
          </div>
          <table>
            <thead>
              <tr>
                <th>Contract Name</th>
                <th>Effective Date</th>
                <th>Expiry Date</th>
                <th>Billing Terms</th>
                <th>Security Audited</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Master Services Agreement (MSA)</td>
                <td>Jan 01, 2026</td>
                <td>Dec 31, 2026</td>
                <td>Net-30</td>
                <td>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#10b981', fontSize: '0.85rem', fontWeight: 600 }}>
                    Verified
                  </span>
                </td>
              </tr>
              <tr>
                <td>SLA & Technical Support Agreement</td>
                <td>Jan 15, 2026</td>
                <td>Jan 14, 2027</td>
                <td>Monthly Retainer</td>
                <td>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#10b981', fontSize: '0.85rem', fontWeight: 600 }}>
                    Verified
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
