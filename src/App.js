import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import './App.css';

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #fff8ef 0%, #f8eedf 100%)',
      fontFamily: "'Montserrat', sans-serif",
      padding: '2rem',
      textAlign: 'center',
    }}>
      <img
        src="/logo.png"
        alt="Logo"
        style={{ width: '420px', maxWidth: '80vw', marginBottom: '2rem', opacity: 0.9 }}
      />
      <h1 style={{
        fontSize: 'clamp(2rem, 6vw, 3.5rem)',
        color: '#14213d',
        fontWeight: 700,
        marginBottom: '1rem',
        lineHeight: 1.2,
        letterSpacing: '-0.5px',
      }}>
        Sitio Web en Mantenimiento
      </h1>
      <p style={{
        fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
        color: '#14213d',
        fontWeight: 600,
        marginBottom: '1rem',
      }}>
        Volveremos muy Pronto.
      </p>
      <p style={{
        fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
        color: '#4b5563',
        maxWidth: '480px',
        lineHeight: 1.7,
        marginBottom: '2.5rem',
      }}>
        Estamos trabajando para mejorar la experiencia dev, comunicate con nosotros via Instagram.
      </p>
      <a
        href="https://www.instagram.com/devbytorrescampi/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          background: 'transparent',
          color: '#0055A4',
          textDecoration: 'none',
          fontSize: '3rem',
          lineHeight: 1,
        }}
      >
        <FaInstagram />
      </a>
    </div>
  );
}

export default App;
