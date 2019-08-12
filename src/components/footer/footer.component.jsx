import React from 'react';
import { Twitter, GitHub } from 'react-feather';

import './footer.styles.scss';

export default function Footer() {
	return (
		<footer>
			<div>
				Made with
				<span role="img" className="ml-5" aria-label="heart">
					❤️
				</span>
			</div>
			<div className="mtb-15">
				<a href="https://twitter.com/pjijin" target="_BLANK" rel="noopener noreferrer">
					<Twitter size="18" />
				</a>

				<a href="https://github.com/pjijin" target="_BLANK" rel="noopener noreferrer">
					<GitHub size="18" />
				</a>
			</div>
		</footer>
	);
}
