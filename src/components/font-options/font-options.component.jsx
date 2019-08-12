import React from 'react';
import { Toggle } from 'react-powerplug';
import { Plus, Minus } from 'react-feather';

import ColorPicker from '../color-picker/colorpicker.component';
import LabelOption from '../label-option/label-option.component';
import NumberInput from '../number-input/number-input.component';

const FontSize = ({ handleChange, defaultSettings, changeSettings }) => {
	const { headingFontSize, summaryFontSize, color } = defaultSettings;
	return (
		<Toggle initial={false}>
			{({ on, toggle }) => (
				<>
					<div className="toggle" onClick={toggle} checked={on}>
						{on ? <Minus size="12" /> : <Plus size="12" />} Font
					</div>
					{on && (
						<div className="options-toggle">
							<LabelOption name="Heading Font Size">
								<NumberInput
									handleChange={handleChange}
									name="headingFontSize"
									defaultValue={headingFontSize}
								/>
							</LabelOption>
							<LabelOption name="Summary Font Size">
								<NumberInput
									handleChange={handleChange}
									name="summaryFontSize"
									defaultValue={summaryFontSize}
								/>
							</LabelOption>

							<LabelOption name="Font Color">
								<ColorPicker defaultValue={color} changeSettings={changeSettings} name="color" />
							</LabelOption>
						</div>
					)}
				</>
			)}
		</Toggle>
	);
};

export default FontSize;
