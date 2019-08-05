import React, { useContext, useRef } from 'react';
import Draggable from 'react-draggable';

import { downloadImage } from './design.util';
import SettingsContext from '../../contexts/settings.context';

import './design.styles.scss';

const Design = () => {
	const settings = useContext(SettingsContext);

	const { background, color, headingFontSize, summaryFontSize, images } = settings;
	const capture = useRef();

	const exportPic = async () => downloadImage(capture.current, 1000, 420);

	const containerStyle = {
		background,
		color
	};

	const headingStyle = {
		fontSize: `${headingFontSize}px`
	};

	const summaryStyle = {
		fontSize: `${summaryFontSize}px`
	};

	return (
		<div>
			<div className="toolbar">
				<button onClick={exportPic}>Download Image</button>
			</div>
			<div className="center" ref={capture}>
				<div className="design-frame" style={containerStyle}>
					<div className="capture">
						{images.map(img => (
							<Draggable
								handle=".handle"
								defaultPosition={{ x: 0, y: 0 }}
								position={null}
								grid={[25, 25]}
								scale={1}
							>
								<div className="movable">
									<p className="handle" />
									<img className="frame-image" alt="image" src={img} />
								</div>
							</Draggable>
						))}

						<Draggable
							handle=".handle"
							defaultPosition={{ x: 0, y: 0 }}
							position={null}
							grid={[25, 25]}
							scale={1}
						>
							<div>
								<div className="movable heading">
									<p className="handle" />
									<h3 style={headingStyle} contentEditable suppressContentEditableWarning>
										My awesome blog post
									</h3>
								</div>
							</div>
						</Draggable>

						<Draggable
							handle=".handle"
							defaultPosition={{ x: 0, y: 0 }}
							position={null}
							grid={[25, 25]}
							scale={1}
						>
							<div>
								<div className="movable sub-heading">
									<p className="handle" />
									<p style={summaryStyle} contentEditable suppressContentEditableWarning>
										Small Description
									</p>
								</div>
							</div>
						</Draggable>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Design;
