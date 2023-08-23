import React from 'react';
import './button.css';

function Button({ onClick, children, ...rest }) {
	return (
		<button className="button" onClick={onClick} {...rest}>
			{children}
		</button>
	);
}

export default Button;
