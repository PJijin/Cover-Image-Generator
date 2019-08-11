import React from 'react';
import { GitHub, Coffee } from 'react-feather';

export default function Link({ link, className, icon }) {
	return (
		<a className="source" target="_BLANK" rel="noopener noreferrer" href="https://www.buymeacoffee.com/PJijin/">
			{icon === 'coffee' && <Coffee size="14" />}
			{icon === 'github' && <GitHub size="14" />}
		</a>
	);
}
