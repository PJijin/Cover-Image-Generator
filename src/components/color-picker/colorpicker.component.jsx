import React, { useState } from 'react';
import { TwitterPicker } from 'react-color';
import { XCircle } from 'react-feather';
import './colorpicker.styles.scss';

const ColorPicker = ({ changeSettings, name, defaultValue }) => {
	const [toggle, setToggle] = useState(false);
	const [current, setCurrent] = useState(false);
	const showColorPicker = () => setToggle(!toggle);

	const updateSettigs = ({ hex }) => {
		changeSettings(name, hex);
		setCurrent(hex);
	};

	return (
		<div>
			<div className="color-picker">
				<div className="swatch" onClick={showColorPicker}>
					<div className="color" style={{ background: current || defaultValue }} />
					{toggle && <XCircle size="14" />}
				</div>
				<div className="picker">
					{toggle && <TwitterPicker color={defaultValue} onChange={updateSettigs} triangle="show" />}
				</div>
			</div>
		</div>
	);
};

export default ColorPicker;
