import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link} from 'react-router-dom';

class Header extends Component {
  renderContent() {
    switch(this.props.auth) {
      case null:
        return;
      case false:
        return <li><a href="/auth/google">Log In</a></li>;
      default:
        return <li><a href="/api/logout">Logout</a></li>;
    }
  }

  getRoot() {
    return this.props.auth ? '/surveys' : '/';
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to={this.getRoot()} className="left brand-logo">Emailer</Link>
            <ul id="nav-mobile" className="right hide-on-sm-and-down">
              {this.renderContent()}
            </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
