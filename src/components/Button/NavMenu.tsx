import React from 'react';
import './navMenu.css';

function NavMenu() {
  return (
    <nav className="nav-menu">
      <a href="#!" className="nav-link">
        차량 서비스
      </a>
      <a href="#!" className="nav-link">
        운행
      </a>
      <a href="#!" className="nav-link">
        소개
      </a>
    </nav>
  );
}

export default NavMenu;
