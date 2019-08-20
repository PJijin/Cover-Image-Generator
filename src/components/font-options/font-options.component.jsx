import React from 'react';
import PropTypes from 'prop-types';
import { Toggle } from 'react-powerplug';
import { Plus, Minus, FileText, HelpCircle } from 'react-feather';

import ColorPicker from '../color-picker/colorpicker.component';
import LabelOption from '../label-option/label-option.component';
import NumberInput from '../number-input/number-input.component';

const FontSize = ({ handleChange, defaultSettings, changeSettings }) => {
	const { headingFontSize, summaryFontSize, color, font } = defaultSettings;
	return (
		<Toggle initial={false}>
			{({ on, toggle }) => (
				<>
					<div className="toggle" onClick={toggle} checked={on}>
						<h5>
							{on ? <Minus size="12" /> : <Plus size="12" />} <FileText size="12" /> Font
						</h5>
					</div>
					{on && (
						<div className="options-toggle">
							<LabelOption name="Font Name">
								<a
									title="Font Family Name from GoogleFonts"
									className="mt-18"
									rel="noopener noreferrer"
									href="https://fonts.google.com/"
									target="_BLANK"
								>
									<HelpCircle size="18" />
								</a>
								<div>
									<input
										placeholder="GoogleFonts font name"
										type="text"
										onBlur={handleChange}
										name="font"
										defaultValue={font}
									/>
								</div>
							</LabelOption>
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

FontSize.propTypes = {
	handleChange: PropTypes.func,
	defaultSettings: PropTypes.object,
	changeSettings: PropTypes.func
};

export default FontSize;
