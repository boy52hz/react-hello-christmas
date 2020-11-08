import React from 'react';
import './Nav.css';

class NavItem extends React.Component {
  render() {
    const props = this.props;
    return (
      <li id={ props.name }>
				<a href={ props.to }>{ props.name }</a>
			</li>
    );
  }
}

export default NavItem;