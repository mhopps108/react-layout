import React from "react";

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  navlink: {
    color: "white",
    fontSize: "1.3rem"
  }
};

function Header({ toggleSideDrawer }) {
  return (
    <div className="header">
      <nav style={styles.navbar}>
        <div>
          <button onClick={toggleSideDrawer}>open</button>
          <button>MMDb</button>
        </div>
        <div>
          <a style={styles.navlink} href="_blank">
            List
          </a>
          <a style={styles.navlink} href="_blank">
            Discovery
          </a>
          <a style={styles.navlink} href="_blank">
            Releases
          </a>
        </div>
        <div>
          <button>Search</button>
          <button>Settings</button>
        </div>
      </nav>
    </div>
  );
}

export default Header;
