import React, { useState } from 'react';
import useDarkMode from 'use-dark-mode';

import SettingsContext from '../../contexts/settings.context';
import { defaultSettings } from '../../contexts/settings.utils';

import Options from '../../components/options/options.component';
import Design from '../../components/design/design.component';
import './homepage.styles.scss';
import Footer from '../../components/footer/footer.component';

const Home = () => {
	const [settings, setSettings] = useState(defaultSettings);
	const darkMode = useDarkMode(false);

	const updateSettings = (set, value) => {
		if (typeof set === 'object') {
			const newSettings = { ...settings };
			Object.entries(set).map(el => (newSettings[el[0]] = el[1]));
			setSettings(newSettings);
		} else setSettings({ ...settings, [set]: value });
	};

	return (
		<>
			<div className="flex home">
				<SettingsContext.Provider value={settings}>
					<Options updateSettings={updateSettings} />
					<div className="grow">
						<Design
							settings={settings}
							updateSettings={updateSettings}
							toggleMode={darkMode.toggle}
							currentMode={darkMode}
						/>
						<Footer />
					</div>
				</SettingsContext.Provider>
			</div>
		</>
	);
};

export default Home;
