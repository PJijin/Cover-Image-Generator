import React from 'react';
import { Twitter, GitHub, Instagram } from 'react-feather';

import './footer.styles.scss';

export default function Footer(currentMode) {
	const mode = currentMode.currentMode.value;
	return (
		<footer>
			<a
				className="ph-badge"
				href="https://www.producthunt.com/posts/blog-cover?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-blog-cover"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img
					src={`https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=165120&theme=${
						mode ? 'dark' : 'light'
					}`}
					alt="Blog Cover Generator for your blog post | Product Hunt Embed"
					width="250px"
					height="54px"
				/>
			</a>
			<div>
				Made with
				<img width="14" src="https://twemoji.maxcdn.com/2/72x72/1f496.png" alt="heart" />
				by <a href="https://twitter.com/PJijin">@PJijin</a> &{' '}
				<a href="https://twitter.com/JP1016v1">@JP1016v1</a>
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
	);
}
