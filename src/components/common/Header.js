import React from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
  return (
    <nav>
      <IndexLink to="/" activeClass="active">Home</IndexLink>
      {" | "}
      <Link to="/about" activeClass="active">About</Link>
    </nav>
  );
};

export default Header;