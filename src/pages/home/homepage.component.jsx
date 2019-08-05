import React, { useState } from 'react';
import SettingsContext from '../../contexts/settings.context';
import { defaultSettings } from '../../contexts/settings.utils';

import Options from '../../components/options/options.component';
import Design from '../../components/design/design.component';
import './homepage.styles.scss';

const Home = () => {
	const [settings, setSettings] = useState(defaultSettings);

	const updateSettings = (set, value) => setSettings({ ...settings, [set]: value });

	return (
		<div className="flex home">
			<SettingsContext.Provider value={settings}>
				<Options updateSettings={updateSettings} />
				<Design settings={settings} />
			</SettingsContext.Provider>
		</div>
	);
};

export default Home;
