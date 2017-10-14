import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NoMatch extends Component {

  render() {
    return (
      <div className="jumbotron">
        <h2 className="display-3 component-heading">404 Page Not Found!</h2>
        <hr className="my-4" />
        <Link to="/" className="btn btn-primary">Go Home</Link>
      </div>
    );
  }
}

export default NoMatch;
