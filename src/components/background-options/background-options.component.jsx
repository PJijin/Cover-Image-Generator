import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Toggle } from 'react-powerplug';
import InputRange from 'react-input-range';
import { Plus, Minus, RefreshCcw, CheckCircle, Image } from 'react-feather';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import LabelOption from '../label-option/label-option.component';
import ColorPicker from '../color-picker/colorpicker.component';
import { toDataURL } from './background.util';
import 'react-input-range/lib/css/index.css';
import './background-options.styles.scss';

const BackgroundOptions = ({ handleChange, defaultSettings: { overlay, background }, changeSettings }) => {
	const [imageUrl, setImageUrl] = useState('https://source.unsplash.com/random/1280x807?programming');
	const [overlays, setOverlay] = useState(overlay);

	const [category, setCategory] = useState('programming');
	const [loading, setImageLoaded] = useState(true);

	const changeImageUrl = () => {
		toDataURL(imageUrl, function (dataUrl) {
			if (dataUrl) changeSettings('bgUrl', dataUrl);
		});
	};

	const refreshImage = () =>
		setImageUrl(`https://source.unsplash.com/random/1280x807?${category}&time=${Math.random()}`);

	const changeCategory = (cat) => {
		setCategory(cat);
		refreshImage();
	};

	const imageLoaded = () => setImageLoaded(false);

	const CategoryButton = ({ name, slug }) => {
		return (
			<button className="default-btn" onClick={() => changeCategory(slug)}>
				<span>{name}</span>
			</button>
		);
	};

	return (
		<Toggle initial={false}>
			{({ on, toggle }) => (
				<>
					<div className="toggle" onClick={toggle} checked={on}>
						<h5>
							{on ? <Minus size="12" /> : <Plus size="12" />} <Image size="12" /> Background
						</h5>
					</div>
					{on && (
						<div className="options-toggle">
							<LabelOption name="Background">
								<ColorPicker
									defaultValue={background}
									changeSettings={changeSettings}
									name="background"
								/>
							</LabelOption>

							<div>
								<h5>Background Image URL</h5>
								<input
									type="url"
									placeholder="Background Image URL"
									onChange={(e) => {
										toDataURL(e.target.value, function (dataUrl) {
											if (dataUrl) changeSettings('bgUrl', dataUrl);
										});
									}}
									name="bgUrl"
								/>
							</div>
							<div>
								<div className="d-f j-sb">
									<button className="default-btn" onClick={refreshImage}>
										<RefreshCcw size="12" />
										<span>Try Another</span>
									</button>
									<button className="default-btn" onClick={changeImageUrl}>
										<CheckCircle size="12" />
										<span>Use This Image</span>
									</button>
								</div>
								<LazyLoadImage
									alt="Programming"
									height="150px"
									afterLoad={imageLoaded}
									onClick={changeImageUrl}
									src={imageUrl} // use normal <img> attributes as props
									width="265px"
								/>
								{loading && <span className="loading-text">Loading...</span>}

								<div className="d-f center">
									<CategoryButton name="Programming" slug="programming" />
									<CategoryButton name="Business" slug="business-work" />
									<CategoryButton name="Nature" slug="nature" />
									<CategoryButton name="Laptop" slug="mac" />
								</div>
							</div>

							<div>
								<h5>Darken Background</h5>
								<InputRange
									className="slider"
									maxValue={1}
									formatLabel={(value) => ''}
									step={0.1}
									minValue={0}
									value={overlays}
									onChange={(value) => {
										setOverlay(value);
										changeSettings('overlay', value);
									}}
								/>
							</div>
						</div>
					)}
				</>
			)}
		</Toggle>
	);
};

BackgroundOptions.propTypes = {
	handleChange: PropTypes.func,
	defaultSettings: PropTypes.object,
	changeSettings: PropTypes.func,
};

export default BackgroundOptions;
