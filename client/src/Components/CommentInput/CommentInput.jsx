import React from 'react';
import './commentInput.css';
import '../../base.css';

const CommentInput = (prop) => {
	function handleCommentclick() {
		prop.inputChange(document.getElementById('comment').value);
	}
	return (
		<div className="Comment">
			<input
				title="Write Message"
				tabIndex="i"
				pattern="\d+"
				placeholder="Add a Comment!"
				className="CommentInput"
				type="text"
				id="comment"
			/>
			<svg onClick={handleCommentclick} version="1.0" className="SendSVG" />
			<span className="l"></span>
		</div>
	);
};

export default CommentInput;
