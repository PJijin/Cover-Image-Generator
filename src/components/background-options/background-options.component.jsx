import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Toggle } from 'react-powerplug';
import { Plus, Minus, RefreshCcw, CheckCircle } from 'react-feather';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import LabelOption from '../label-option/label-option.component';
import ColorPicker from '../color-picker/colorpicker.component';
import 'react-input-range/lib/css/index.css';
import './background-options.styles.scss';

const BackgroundOptions = ({ handleChange, defaultSettings, changeSettings }) => {
	const [imageUrl, setImageUrl] = useState('https://source.unsplash.com/random/1280x807?programming');
	const [category, setCategory] = useState('programming');
	const [loading, setImageLoaded] = useState(true);

	const { background } = defaultSettings;

	const changeImageUrl = () => {
		changeSettings('bgUrl', imageUrl);
	};

	const refreshImage = () =>
		setImageUrl(`https://source.unsplash.com/random/1280x807?${category}&time=${Math.random()}`);

	const changeCategory = cat => {
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
						{on ? <Minus size="12" /> : <Plus size="12" />} Background
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
									onChange={handleChange}
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
	changeSettings: PropTypes.func
};

export default BackgroundOptions;
