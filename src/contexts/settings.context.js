import { createContext } from 'react';
import { defaultSettings } from './settings.utils';

const SettingsContext = createContext(defaultSettings);

export default SettingsContext;
