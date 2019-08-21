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

	const massUpdateSettings = set => {
		const newSettings = { ...settings };
		Object.entries(set).map(el => (newSettings[el[0]] = el[1]));
		setSettings(newSettings);
	};

	const updateSettings = (set, value) => {
		setSettings({ ...settings, [set]: value });
	};

	return (
		<>
			<div className="flex home">
				<SettingsContext.Provider value={settings}>
					<Options updateSettings={updateSettings} massUpdateSettings={massUpdateSettings} />
					<div className="content-area">
						<Design
							settings={settings}
							updateSettings={updateSettings}
							toggleMode={darkMode.toggle}
							currentMode={darkMode}
						/>
						<Footer currentMode={darkMode} />
					</div>
				</SettingsContext.Provider>
			</div>
		</>
	);
};

export default Home;
