import React from 'react';
//import { Link } from 'react-router-dom';

const pagesArray = ['Homepage', 'Calendar', 'Messaging', 'Media'];

function NavBar() {
    return (
      <nav>
          <div className="container">
            {pagesArray.map((title) => (
              <h1>{title}</h1>
            ))}
          </div>
          {/*<Link to="/" className="upper-left">
            <span className="material-icons" aria-label="Home">
              home
            </span>
          </Link> */}
      </nav>
    );
}

export default NavBar;