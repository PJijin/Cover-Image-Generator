import React from 'react';
const SubHeading = ({ summaryStyle }) => (
	<div className="movable sub-heading">
		<p className="handle" />
		<p style={summaryStyle} contentEditable suppressContentEditableWarning>
			Small Description
		</p>
	</div>
);

export default SubHeading;
