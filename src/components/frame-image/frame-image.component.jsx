import React from 'react';
import { Move } from 'react-feather';
import DraggableComponent from '../draggable/draggable.component';

const FrameImage = ({ image, deleteImage }) => {
	return (
		<DraggableComponent key={image}>
			<div className="movable">
				<p className="handle">
					<Move size="18" />
				</p>
				<img onClick={() => deleteImage(image)} className="frame-image" src={image} dragabble="false" alt="" />
			</div>
		</DraggableComponent>
	);
};

export default FrameImage;
