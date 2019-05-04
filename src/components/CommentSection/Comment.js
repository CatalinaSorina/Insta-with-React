import React from 'react';

const Comment = (props) => {
	return (
		<div>
			{props.username}: {props.comment}
		</div>
	);
};

export default Comment;