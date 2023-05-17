import { CSSProperties } from 'react';

export const navbarStyle: CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  boxShadow: '0px 1px 5px',
  display: 'flex',
  justifyContent: 'center',
  padding: '0',
  transition: 'all 0.4s',
  zIndex: 1000,
  width: '100%',
};

export const containerStyle: CSSProperties = {
  maxWidth: '1100px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  position: 'relative'
};

export const logoStyle: CSSProperties = {
  padding: '10px',
  maxHeight: '1200px',
  maxWidth: '120px',
  transition: 'all 0.4s',
};

export const linksStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center'
};

export const linkListItemStyle: CSSProperties = {
  listStyle: 'none',
  padding: '10px 10px 20px 10px'
};

export const linkStyle: CSSProperties = {
  cursor: 'pointer',
  color: "#63666a",
  textDecoration: 'none'
};

export const linksHoverStyle: CSSProperties = {
  ...linkStyle,
  color: '#6BA4B8'
};