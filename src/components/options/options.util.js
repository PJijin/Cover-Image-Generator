export const readURL = async input => {
	var reader = new FileReader();
	let data;
	reader.onload = e => {
		console.log(e);
		data = e.target.result;
	};
	reader.readAsDataURL(input);
	return data;
};
