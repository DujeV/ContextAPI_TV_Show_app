import './index.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const NavBar = () => {
  const [currentLink, setCurrentLink] = useState('HOME');

  const tabs = [
    {
      to: '/',
      route: 'HOME',
    },
    {
      to: '/about',
      route: 'ABOUT',
    },
  ];

  return (
    <div className='navbar'>
      <nav className='navbar_container'>
        <h3 className='nav__brand' onClick={() => setCurrentLink('HOME')}>
          <Link to='/'>
            <i className='fas fa-video'></i> TV SHOW SEARCH
          </Link>
        </h3>
        <li className='nav__links'>
          {tabs.map(({ to, route }, index) => (
            <Link
              to={to}
              className={
                route === currentLink ? 'links__link active' : 'links__link'
              }
              onClick={() => setCurrentLink(route)}
              key={index}
            >
              {route}
            </Link>
          ))}
        </li>
      </nav>
    </div>
  );
};

export default NavBar;
