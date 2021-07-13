import domtoimage from 'dom-to-image';

export const downloadImage = (node, width, height, type = 'png', file_name = 'blogcover') => {
	const config = {
		style: {
			'transform-origin': 'center',
		},
		width,
		height,
		quality: 1,
	};

	const downloadFile = (dataUrl, ext) => {
		let link = document.createElement('a');
		link.download = `${file_name}.${ext}`;
		link.href = 'data:' + dataUrl;
		document.body.appendChild(link);
		link.click();
		link.remove();
	};

	if (type === 'png') {
		domtoimage.toPng(node, config).then((dataUrl) => downloadFile(dataUrl, 'png'));
	} else if (type === 'jpeg') {
		domtoimage.toJpeg(node, config).then((dataUrl) => downloadFile(dataUrl, 'jpeg'));
	} else if (type === 'svg') {
		domtoimage.toSvg(node, config).then((dataUrl) => downloadFile(dataUrl, 'svg'));
	}
};

export const deleteImageFromArray = (images, imageToDelete) => {
	return images.filter((image) => image !== imageToDelete);
};
