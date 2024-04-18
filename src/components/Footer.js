import React from 'react';
import { FaPhone, FaFolder, FaComment } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <h1 style={contactHeading}>Contact Us</h1>
      <div style={columnContainer}>
        <div style={column}>
          <div style={iconTextContainer}>
            <h3 style={subHeading}>PHONE: +91 7843005539 , +91 7030301011, +91 7038220828 </h3>
            <h3 style={subHeading}>EMAIL: babathashim@gmail.com , basaleishwari@gmail.com </h3>
          </div>
        </div>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#0D1B2A', // Light purple color
  height: '110px',
  padding: '18px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const contactHeading = {
  color:'#FFFFFF',
  fontWeight: 'bold',
  fontSize: '16px',
};

const subHeading = {
  color:'#FFFFFF',
  fontWeight: 'bold',
  fontSize: '10px',
};

const columnContainer = {
  display: 'inline',
  justifyContent: 'space-around',
  marginTop: '8px',
};

const column = {
  flex: '1',
  padding: '10px'
};

const iconTextContainer = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '5px'
};

const iconStyle = {
  marginBottom: '3px',
  fontSize:'5px'
};

const buttonStyle = {
  marginTop: '4px',
  backgroundColor: '#7558E6',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  padding: '2px 4px',
  cursor: 'pointer',
  fontSize: '12px',
};

const phoneNumber = {
  margin: '3px 0', 
  fontSize : '11px'
};

export default Footer;
