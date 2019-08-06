import React, { useContext, useRef } from 'react';

import { downloadImage } from './design.util';
import SettingsContext from '../../contexts/settings.context';

import './design.styles.scss';
import DraggableComponent from '../draggable/draggable.component';
import Heading from '../heading/heading.component';
import SubHeading from '../sub-heading/sub-heading.component';
import FrameImage from '../frame-image/frame-image.component';

const Design = ({ toggleMode, currentMode: { value } }) => {
	const settings = useContext(SettingsContext);
	const capture = useRef();

	const { background, color, headingFontSize, summaryFontSize, images } = settings;

	const exportPic = async () => downloadImage(capture.current, 1000, 420);

	const containerStyle = { background, color };
	const headingStyle = { fontSize: `${headingFontSize}px` };
	const summaryStyle = { fontSize: `${summaryFontSize}px` };

	return (
		<div>
			<div className="toolbar">
				<button className="toggle-mode" onClick={toggleMode}>
					{value ? <span>&#9728;</span> : <span>&#9790;</span>}
				</button>
				<button className="download" onClick={exportPic}>
					Download Image
				</button>
			</div>
			<div className="center" ref={capture}>
				<div className="design-frame" style={containerStyle}>
					<div className="capture">
						<DraggableComponent>
							<Heading headingStyle={headingStyle} />
						</DraggableComponent>

						<DraggableComponent>
							<SubHeading summaryStyle={summaryStyle} />
						</DraggableComponent>

						<div className="image-wrapper">
							{images.map(image => (
								<FrameImage image={image} key={image} />
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Design;
