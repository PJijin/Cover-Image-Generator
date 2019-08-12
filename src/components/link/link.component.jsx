import React from 'react';
import { GitHub, Coffee } from 'react-feather';

export default function Link({ url, className, icon }) {
	return (
		<a className="source" target="_BLANK" rel="noopener noreferrer" href={url}>
			{icon === 'coffee' && <Coffee size="14" />}
			{icon === 'github' && <GitHub size="14" />}
		</a>
	);
}
