import React, { useContext } from 'react';

import ColorPicker from '../color-picker/colorpicker.component';
import LabelOption from '../label-option/label-option.component';
import { defaultSettings } from '../../contexts/settings.utils';
import SettingsContext from '../../contexts/settings.context.js';
import Gallery from '../gallery/gallery.component';
import FontSize from '../font-size/font-size.component';
import CanvasProperties from '../canvas-properties/canvas-properties.component';
import './options.styles.scss';

const Options = ({ updateSettings }) => {
	const settings = useContext(SettingsContext);

	const changeSettings = (name, value) => updateSettings(name, value);
	const insertImage = e => changeSettings('images', [...settings.images, `/icons/${e}`]);
	const handleChange = e => changeSettings([e.target.name], e.target.value);

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

			<FontSize defaultSettings={defaultSettings} handleChange={handleChange} />

			<CanvasProperties
				defaultSettings={defaultSettings}
				handleChange={handleChange}
				changeSettings={changeSettings}
			/>

			<LabelOption name="Image">
				<input type="file" name="images" onChange={handleImage} accept="image/x-png,image/gif,image/jpeg" />
			</LabelOption>

			<h5>Quick Insert</h5>
			<div className="stickers">
				<Gallery insertImage={insertImage} />
			</div>
		</div>
	);
};
export default Options;
