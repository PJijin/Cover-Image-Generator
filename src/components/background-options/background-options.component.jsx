import React from 'react';
import { Toggle } from 'react-powerplug';
import { Plus, Minus } from 'react-feather';
import 'react-input-range/lib/css/index.css';

import LabelOption from '../label-option/label-option.component';
import ColorPicker from '../color-picker/colorpicker.component';

const BackgroundOptions = ({ handleChange, defaultSettings, changeSettings }) => {
	const { background } = defaultSettings;

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
						</div>
					)}
				</>
			)}
		</Toggle>
	);
};

export default BackgroundOptions;
