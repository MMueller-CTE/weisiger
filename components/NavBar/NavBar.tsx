import React, { CSSProperties, useState, useEffect } from 'react';
import Image from 'next/image';
import MobileMenu from './MobileMenu';

type Props = {
  img?: {url:string}
  imgAlt?: string
  imgLink?: {href:string}
  links?: {text?:string; link?:{href:string}}[]
  className?:string
  color?:string
}

export default function Navbar({ img, imgAlt, imgLink, links, className, color }:Props) {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(-1);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navbarStyle: CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    boxShadow: '0px 1px 5px',
    display: 'flex',
    justifyContent: 'center',
    padding: scrolled ? '10px 0' : '0',
    transition: 'all 0.4s',
    zIndex: 1000,
    width: '100%', 
  };

  const containerStyle: CSSProperties = {
    maxWidth: '1100px',
    display: 'flex',
    flexDirection: isMobile ? 'column' : (scrolled ? 'row' : 'column'),
    alignItems: 'center',
    justifyContent: scrolled || isMobile ? 'space-between' : 'center',
    width: '100%',
    position: 'relative'
  };

  const logoStyle: CSSProperties = {
    padding: scrolled? '10px': '10px',
    maxHeight: scrolled ? '80px' : '1200px',
    maxWidth: scrolled ? '80px' : '120px',
    transition: 'all 0.4s',
  };

  const linksStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  };

  const linkListItemStyle: CSSProperties = {
    listStyle: 'none',
    padding: '10px 10px 20px 10px'
  };

  const linkStyle: CSSProperties = {
    cursor: 'pointer',
    color: "#63666a",
    textDecoration: 'none'
  };
  const linksHoverStyle: CSSProperties = {
    ...linkStyle,
    color: '#6BA4B8'
  };

  return (
    <nav className={className} style={navbarStyle}>
      <div style={containerStyle}>
        {imgLink && <a {...imgLink}>
        {img && imgAlt && <Image style={logoStyle} src={img.url} alt={imgAlt} />}
        </a>}
        {isMobile ? 
          <MobileMenu links={links} isOpen={mobileMenuOpen} toggleMenu={setMobileMenuOpen} scrolled={scrolled} /> :
          <div style={linksStyle as CSSProperties} color={color}>
            {links?.map((link, i) => (
              <li key={i} style={linkListItemStyle}>
                {link.link && <a 
              style={i === hoveredLink ? linksHoverStyle : linkStyle} 
              onMouseEnter={() => setHoveredLink(i)}
              onMouseLeave={() => setHoveredLink(-1)}>{link.text}</a>}
              </li>
            ))}
          </div>
        }
      </div>
    </nav>
  );
}
