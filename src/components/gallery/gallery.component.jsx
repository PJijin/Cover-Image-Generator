import React from 'react';
import Icons from './gallery.data';
import './gallery.styles.scss';

const Gallery = ({ insertImage }) => {
	return (
		<div className="icons-wrapper">
			{Icons.map(ic => {
				return (
					<img
						onClick={() => insertImage(ic)}
						key={ic}
						alt={`${ic} Icon`}
						draggable="false"
						src={`icons/${ic}`}
						width="25px"
						height="25px"
					/>
				);
			})}
		</div>
	);
};

export default Gallery;
