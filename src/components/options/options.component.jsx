import React, { useContext } from 'react';
import ColorPicker from '../color-picker/colorpicker.component';
import LabelOption from '../label-option/label-option.component';
import { defaultSettings } from '../../contexts/settings.utils';
import './options.styles.scss';
import SettingsContext from '../../contexts/settings.context.js';
import Gallery from '../gallery/gallery.component';
import NumberInput from '../number-input/number-input.component';

const Options = ({ updateSettings }) => {
	const settings = useContext(SettingsContext);

	const changeSettings = (name, value) => {
		updateSettings(name, value);
	};

	const insertImage = e => {
		const value = [...settings.images, `/icons/${e}`];
		changeSettings('images', value);
	};

	const handleImage = async e => {
		const name = [e.target.name];
		if (e.target.files[0]) {
			var reader = new FileReader();
			reader.onload = e => {
				const value = [...settings.images, e.target.result];
				changeSettings([name], value);
			};
			reader.readAsDataURL(e.target.files[0]);
		}
	};

	const handleChange = e => changeSettings([e.target.name], e.target.value);
	return (
		<div className="options">
			<h4>Options</h4>
			<LabelOption name="Background">
				<ColorPicker
					defaultValue={defaultSettings.background}
					changeSettings={changeSettings}
					name="background"
				/>
			</LabelOption>

			<LabelOption name="Font Color">
				<ColorPicker defaultValue={defaultSettings.color} changeSettings={changeSettings} name="color" />
			</LabelOption>

			<LabelOption name="Heading Font Size">
				<NumberInput
					handleChange={handleChange}
					name="headingFontSize"
					defaultValue={defaultSettings.headingFontSize}
				/>
			</LabelOption>

			<LabelOption name="Summary Font Size">
				<NumberInput
					handleChange={handleChange}
					name="summaryFontSize"
					defaultValue={defaultSettings.summaryFontSize}
				/>
			</LabelOption>

			<LabelOption name="Image">
				<input type="file" name="images" onChange={handleImage} />
			</LabelOption>

			<h5>Quick Insert</h5>
			<div className="stickers">
				<Gallery insertImage={insertImage} />
			</div>
		</div>
	);
};
export default Options;
