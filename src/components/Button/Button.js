import React from 'react'
import './Button.css';

class Button extends React.Component {
  render() {
		const props = this.props;
    return (
      <button className={`Button ${props.variant}`} type={ props.type }>
				{ props.children }
      </button>
    )
  }
}

export default Button;