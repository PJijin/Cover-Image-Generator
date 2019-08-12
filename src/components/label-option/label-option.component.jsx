import React from 'react';

const LabelOption = ({ name, children }) => {
	return (
		<div className="d-f j-sb">
			<h5>{name}</h5>
			{children}
		</div>
	);
};
export default LabelOption;
