import './comment.css'
import '../../base.css'
const Comment = ({ name, comment }) => {
	return (
		<div class="comment-field width-100">
			<label htmlFor="comment" class="text">
				{name}
			</label>
			<div
				name="comment"
				class="comment"
                // disabled
			>{comment}
            </div>
		</div>
	);
};

export default Comment;
