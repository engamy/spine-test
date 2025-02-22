import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      {/* Logo on the left */}
      <div style={styles.logo}>
        <img src="/path-to-your-logo.png" alt="Logo" style={styles.logoImage} />
      </div>

      {/* Links on the right */}
      <div style={styles.links}>
        <a href="#link1" style={styles.link}>Blog</a>
        <a href="#link2" style={styles.link}>About Us</a>
        <a href="#link3" style={styles.link}>Contact</a>
        <a href="#link4" style={styles.link}>Pre-order!</a>
      </div>
    </nav>
  );
};

// Inline styles
const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: '30px 20px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  },
  logo: {
    flex: 1, // Ensures logo stays on the left
  },
  logoImage: {
    height: '40px', // Adjust logo height if needed
  },
  links: {
    display: 'flex',
    gap: '20px',
  },
  link: {
    textDecoration: 'none',
    color: 'black',
    fontSize: '16px',
    fontWeight: '500',
  },
};

export default Navbar;
