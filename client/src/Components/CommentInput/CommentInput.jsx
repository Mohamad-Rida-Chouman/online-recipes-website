import React from "react";
import './commentInput.css'
import '../../base.css'

const CommentInput = () => {
	return (
		<div className="Message">
			<input
				title="Write Message"
				tabindex="i"
				pattern="\d+"
				placeholder="Add a Comment!"
				className="MsgInput"
				type="text"
			/>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				version="1.0"
				width="30.000000pt"
				height="30.000000pt"
				viewBox="0 0 30.000000 30.000000"
				preserveAspectRatio="xMidYMid meet"
				className="SendSVG"
			>
				<g
					transform="translate(0.000000,30.000000) scale(0.100000,-0.100000)"
					fill="#ffffff70"
					stroke="none"
				>
					<path d="M44 256 c-3 -8 -4 -29 -2 -48 3 -31 5 -33 56 -42 28 -5 52 -13 52 -16 0 -3 -24 -11 -52 -16 -52 -9 -53 -9 -56 -48 -2 -21 1 -43 6 -48 10 -10 232 97 232 112 0 7 -211 120 -224 120 -4 0 -9 -6 -12 -14z"></path>
				</g>
			</svg>
			<span className="l"></span>
		</div>
	);
};

export default CommentInput;
