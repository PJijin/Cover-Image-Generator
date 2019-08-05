import React from 'react';

const NumberInput = ({ name, defaultValue, handleChange }) => {
	return <input type="number" onChange={handleChange} name={name} defaultValue={defaultValue} />;
};

export default NumberInput;
