import React from 'react';
import DraggableComponent from '../draggable/draggable.component';

const FrameImage = ({ image, deleteImage }) => {
	return (
		<DraggableComponent key={image}>
			<div className="movable">
				<p className="handle" />
				<img onClick={() => deleteImage(image)} className="frame-image" src={image} dragabble="false" alt="" />
			</div>
		</DraggableComponent>
	);
};

export default FrameImage;
