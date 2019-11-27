import React, { PureComponent, Fragment } from 'react';
import autoBind from 'react-autobind';

import logo from '../../assets/logo.png';
import userIcon from '../../assets/userIcon.png';

import './styles.scss';

export class Header extends PureComponent {
  constructor(props) {
    super(props);
    autoBind(this);

    this.state = {
      opened: false,
    }
  }

  openLogOut() {
    this.setState((prevState) => ({
      opened: !prevState.opened,
    }));
  }

  render() {
    return (
      <Fragment>
        <header className="header">
          <img src={logo} alt="Logo" className="logo"/>
          <div className={`user-info${this.state.opened ? ' active' : ''}`} onClick={this.openLogOut}>
            <img src={userIcon} alt="User Icon" className="user-icon"/>
            <span className="user-name">Jane Doe</span>
            <i className={`fas fa-sort-down arrow${this.state.opened ? ' opened' : ''}`} />
          </div>
        </header>
        {this.state.opened && <div className="sign-out"><span>Sign Out</span></div>}
      </Fragment>
    );
  }
}

export default Header;
