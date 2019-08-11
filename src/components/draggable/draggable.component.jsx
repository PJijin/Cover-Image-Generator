import React from 'react';
import Draggable from 'react-draggable';

const DraggableComponent = ({ children }) => {
	return (
		<Draggable handle=".handle" defaultPosition={{ x: 0, y: 0 }} position={null} grid={[1, 1]} scale={1}>
			<div>{children}</div>
		</Draggable>
	);
};

export default DraggableComponent;
