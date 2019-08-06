import React from 'react';
import DraggableComponent from '../draggable/draggable.component';

const FrameImage = ({ image }) => {
	return (
		<DraggableComponent key={image}>
			<div className="movable">
				<p className="handle" />
				<img className="frame-image" src={image} dragabble="false" />
			</div>
		</DraggableComponent>
	);
};

export default FrameImage;
