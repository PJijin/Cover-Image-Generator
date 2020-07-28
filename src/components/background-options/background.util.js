export const toDataURL = async (url, callback) => {
	const image = new Image();
	image.src = `https://cors-anywhere.herokuapp.com/${url}`;
	image.crossOrigin = 'Anonymous';
	image.onload = function () {
		var canvas = document.createElement('CANVAS');
		var ctx = canvas.getContext('2d');
		var dataURL;
		canvas.height = this.naturalHeight;
		canvas.width = this.naturalWidth;
		ctx.drawImage(this, 0, 0);
		dataURL = canvas.toDataURL();
		callback(dataURL);
	};
};
