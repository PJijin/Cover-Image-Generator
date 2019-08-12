import React from 'react';
import { Toggle } from 'react-powerplug';
import { Plus, Minus } from 'react-feather';

import Gallery from '../gallery/gallery.component';
import LabelOption from '../label-option/label-option.component';

const ImageOptions = ({ handleImage, insertImage }) => {
	return (
		<Toggle initial={false}>
			{({ on, toggle }) => (
				<>
					<div className="toggle" onClick={toggle} checked={on}>
						{on ? <Minus size="12" /> : <Plus size="12" />} Insert Image
					</div>
					{on && (
						<div className="options-toggle">
							<LabelOption name="Image">
								<input
									type="file"
									name="images"
									onChange={handleImage}
									accept="image/x-png,image/gif,image/jpeg"
								/>
							</LabelOption>

							<h5>Quick Insert</h5>
							<div className="stickers">
								<Gallery insertImage={insertImage} />
							</div>
						</div>
					)}
				</>
			)}
		</Toggle>
	);
};

export default ImageOptions;