import domtoimage from 'dom-to-image';

export const downloadImage = (node, width, height, type = 'png') => {
	const config = {
		style: {
			'transform-origin': 'center'
		},
		width,
		height,
		quality: 1
	};

	if (type === 'png') {
		domtoimage.toJpeg(node, config).then(function(dataUrl) {
			let link = document.createElement('a');
			link.download = 'screenshot.png';
			link.href = 'data:' + dataUrl;
			link.click();
		});
	} else {
		domtoimage.toJpeg(node, config).then(function(dataUrl) {
			let link = document.createElement('a');
			link.download = 'screenshot.png';
			link.href = 'data:' + dataUrl;
			link.click();
		});
	}
};

export const deleteImageFromArray = (images, imageToDelete) => {
	return images.filter(image => image !== imageToDelete);
};
