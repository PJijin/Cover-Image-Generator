import React from 'react';
const Heading = ({ headingStyle }) => (
	<div className="movable heading">
		<p className="handle" />
		<h3 style={headingStyle} contentEditable suppressContentEditableWarning>
			My awesome blog post
		</h3>
	</div>
);

export default Heading;
