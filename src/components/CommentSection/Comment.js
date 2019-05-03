import React from 'react';

const Comment = (props) => {
	return (
		<div style="background-color: red;">
			{props.username}: {props.comment}
		</div>
	);
};

export default Comment;