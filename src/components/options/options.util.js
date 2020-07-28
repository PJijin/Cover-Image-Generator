export const readURL = async (input) => {
	var reader = new FileReader();
	let data;
	reader.onload = (e) => {
		data = e.target.result;
	};
	reader.readAsDataURL(input);
	return data;
};
