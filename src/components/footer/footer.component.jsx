import React from 'react';
import { Twitter, GitHub, Instagram } from 'react-feather';

import './footer.styles.scss';

export default function Footer(currentMode) {
	return (
		<>
		<footer>
			<div>
				<a href="https://codekeep.io/screenshot" target="_BLANK" rel="noopener noreferrer">
					Generate code screenshot with CodeKeep Screenshot
				</a>
			</div>
			<div className="mtb-15">
				Made with
				<img width="14" src="https://twemoji.maxcdn.com/2/72x72/1f496.png" alt="heart" />
				by <a href="https://twitter.com/PJijin" target="_BLANK" rel="noopener noreferrer">@PJijin</a> &{' '}
				<a href="https://twitter.com/JP1016v1" target="_BLANK" rel="noopener noreferrer">@JP1016v1</a>
			</div>
			<div className="mtb-15 socialLinks">
				<a href="https://twitter.com/pjijin" target="_BLANK" rel="noopener noreferrer">
					<Twitter size="18" />
				</a>

				<a href="https://github.com/pjijin" target="_BLANK" rel="noopener noreferrer">
					<GitHub size="18" />
				</a>

				<a href="https://www.instagram.com/pjijin1/" target="_BLANK" rel="noopener noreferrer">
					<Instagram size="18" />
				</a>
			</div>
		</footer>
		</>
	);
}
