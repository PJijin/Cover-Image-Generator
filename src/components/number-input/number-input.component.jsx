import React from 'react';

const NumberInput = ({ name, defaultValue, handleChange, value = null }) => {
	if (value === null) return <input type="number" onChange={handleChange} name={name} defaultValue={defaultValue} />;

	return <input type="number" onChange={handleChange} name={name} value={value} />;
};

export default NumberInput;
