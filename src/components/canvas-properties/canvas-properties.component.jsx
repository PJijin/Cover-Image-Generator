import React from 'react';
import { Toggle } from 'react-powerplug';
import { Plus, Minus } from 'react-feather';

import LabelOption from '../label-option/label-option.component';
import NumberInput from '../number-input/number-input.component';

const CanvasProperties = ({ handleChange, defaultSettings }) => {
	return (
		<Toggle initial={false}>
			{({ on, toggle }) => (
				<>
					<div className="toggle" onClick={toggle} checked={on}>
						{on ? <Minus size="12" /> : <Plus size="12" />} Canvas Properties
					</div>
					{on && (
						<>
							<LabelOption name="Width">
								<NumberInput
									handleChange={handleChange}
									name="width"
									defaultValue={defaultSettings.width}
								/>
							</LabelOption>

							<LabelOption name="Height">
								<NumberInput
									handleChange={handleChange}
									name="height"
									defaultValue={defaultSettings.height}
								/>
							</LabelOption>
						</>
					)}
				</>
			)}
		</Toggle>
	);
};

export default CanvasProperties;
