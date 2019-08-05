import domtoimage from 'dom-to-image';

export const downloadImage = (node, width, height) => {
	const config = {
		style: {
			'transform-origin': 'center'
		},
		width,
		height,
		quality: 1
	};

	domtoimage.toJpeg(node, config).then(function(dataUrl) {
		let link = document.createElement('a');
		link.download = 'codekeeper.png';
		link.href = 'data:' + dataUrl;
		link.click();
	});
};