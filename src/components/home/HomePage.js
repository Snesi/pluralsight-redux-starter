import React from 'react';
import {Link} from 'react-router';
import styles from './HomePage.css';

class HomePage extends React.Component {
  render () {
    return (
      <div className="jumbotron">
        <h1 className={styles.title}>Pluralsight Administration</h1>
        <p>React, Redux and React Router for ultra fast shit.</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
      </div>
    );
  }
}

export default HomePage;