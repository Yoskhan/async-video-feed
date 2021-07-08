import { Link } from 'react-router-dom';

import classes from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <Link to="/" className={classes.link}>
        <h1>Async Video Feed</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/profile" className={classes.link}>
              {' '}
              Profile{' '}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
