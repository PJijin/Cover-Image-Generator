import React, { useContext, useRef } from 'react';
import { Sun, Moon, Download } from 'react-feather';
import GitHubButton from 'react-github-button';
import WebFont from 'webfontloader';

import { downloadImage, deleteImageFromArray } from './design.util';
import SettingsContext from '../../contexts/settings.context';
import DraggableComponent from '../draggable/draggable.component';
import Heading from '../heading/heading.component';
import SubHeading from '../sub-heading/sub-heading.component';
import FrameImage from '../frame-image/frame-image.component';

import './design.styles.scss';

const Design = ({ toggleMode, currentMode: { value }, updateSettings }) => {
	const settings = useContext(SettingsContext);
	const capture = useRef();

	const {
		background,
		color,
		headingFontSize,
		summaryFontSize,
		images,
		width,
		height,
		file_name,
		radius,
		borderColor,
		border,
		bgUrl,
		exportExt,
		font,
		overlay,
	} = settings;

	const exportPic = async () => downloadImage(capture.current, width, height, exportExt,file_name);
	const deleteImage = (imageToDelete) => updateSettings(images, deleteImageFromArray(images, imageToDelete));

	if (font) {
		try {
			WebFont.load({ google: { families: [font] } });
		} catch {}
	}

	const containerStyle = {
		background,
		color,
		boxShadow: `rgba(28, 28, 28, ${overlay}) 0px 0px 0px 2000px inset`,
		fontFamily: `${font}`,
		width: `${width}px`,
		height: `${height}px`,
		borderRadius: `${radius}px`,
		border: `${border}px solid ${borderColor}`,
		backgroundImage: `url("${bgUrl}")`,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
	};
	const headingStyle = { fontSize: `${headingFontSize}px` };
	const summaryStyle = { fontSize: `${summaryFontSize}px` };

	return (
		<>

			<div className="toolbar">
				<button className="toggle-mode" onClick={toggleMode}>
					{value ? <Sun size="14" /> : <Moon size="14" />}
				</button>
				<button className="download" onClick={exportPic}>
					<Download size="14" /> Download Image
				</button>

				<div className="stargazers">
					<GitHubButton type="stargazers" namespace="pjijin" repo="Cover-Image-Generator" />
				</div>
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
							{images.map((image) => (
								<FrameImage image={image} key={image} deleteImage={deleteImage} />
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Design;
