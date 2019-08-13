import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Toggle } from 'react-powerplug';
import { Plus, Minus } from 'react-feather';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

import LabelOption from '../label-option/label-option.component';
import NumberInput from '../number-input/number-input.component';
import ColorPicker from '../color-picker/colorpicker.component';
import './canvas-properties.styles.scss';

const CanvasProperties = ({ handleChange, defaultSettings, changeSettings }) => {
	const [radius, setRadius] = useState(defaultSettings.radius);
	const [width, setWidth] = useState(defaultSettings.width);
	const [height, setHeight] = useState(defaultSettings.height);
	const { border, borderColor } = defaultSettings;

	const handleBlog = e => {
		let widthVal;
		let height;
		if (e.target.value === 'dev') {
			widthVal = ['1000'];
			height = ['420'];
		} else if (e.target.value === 'hashnode') {
			widthVal = ['800'];
			height = ['420'];
		} else if (e.target.value === 'medium') {
			widthVal = ['1000'];
			height = ['500'];
		}
		console.log(e.target.value, widthVal, height);
		setWidth(widthVal);
		changeSettings('width', widthVal);
		setHeight(height);
		changeSettings('height', height);
	};

	const handleValueInputChange = e => {
		if (e.target.name === 'width') {
			let widths = [e.target.value];
			console.log(widths);
			setWidth(widths);
			changeSettings('width', width);
		} else {
			let height = [e.target.value];
			setHeight(height);
			changeSettings('height', height);
		}
	};

	return (
		<Toggle initial={false}>
			{({ on, toggle }) => (
				<>
					<div className="toggle" onClick={toggle} checked={on}>
						{on ? <Minus size="12" /> : <Plus size="12" />} Properties
					</div>
					{on && (
						<div className="options-toggle">
							<LabelOption name="Blog">
								<select onChange={handleBlog} name="Blog">
									<option value="dev">Dev.to</option>
									<option value="hashnode">HashNode</option>
									<option value="medium">Medium</option>
								</select>
							</LabelOption>

							<LabelOption name="Width">
								<NumberInput
									handleChange={handleValueInputChange}
									name="width"
									defaultValue={width}
									value={width}
								/>
							</LabelOption>

							<LabelOption name="Height">
								<NumberInput
									handleChange={handleValueInputChange}
									name="height"
									defaultValue={height}
									value={height}
								/>
							</LabelOption>

							<LabelOption name="Format">
								<select onChange={handleChange} name="exportExt">
									<option value="png">PNG</option>
									<option value="jpeg">JPG</option>
									<option value="svg">SVG</option>
								</select>
							</LabelOption>

							<LabelOption name="Border">
								<NumberInput handleChange={handleChange} name="border" defaultValue={border} />
							</LabelOption>

							<LabelOption name="Border Color">
								<ColorPicker
									defaultValue={borderColor}
									changeSettings={changeSettings}
									name="borderColor"
								/>
							</LabelOption>

							<div>
								<h5>Border Radius</h5>
								<InputRange
									className="slider"
									maxValue={100}
									minValue={0}
									value={radius}
									onChange={value => {
										setRadius(value);
										changeSettings('radius', value);
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

CanvasProperties.propTypes = {
	handleChange: PropTypes.func,
	defaultSettings: PropTypes.object,
	changeSettings: PropTypes.func
};

export default CanvasProperties;
