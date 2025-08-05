import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const sidebarStyle = {
    width: '200px',
    height: '100vh',
    backgroundColor: '#1e293b',
    color: '#fff',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
  };

  const linkStyle = {
    display: 'block',
    color: '#fff',
    textDecoration: 'none',
    margin: '1rem 0',
  };

  return (
    <div style={sidebarStyle}>
      <h2 style={{ marginBottom: '2rem' }}>PropVivo</h2>
      <nav>
        <Link to="/" style={linkStyle}>Dashboard</Link>
        <Link to="/calls" style={linkStyle}>Calls</Link>
        <Link to="/customers" style={linkStyle}>Customers</Link>
        <Link to="/settings" style={linkStyle}>Settings</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
