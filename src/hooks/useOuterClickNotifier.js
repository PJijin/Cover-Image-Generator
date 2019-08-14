import { useEffect } from 'react';

const useOuterClickNotifier = (onOuterClick, innerRef) => {
	useEffect(() => {
		if (innerRef.current) {
			document.addEventListener('click', handleClick);
		}

		return () => document.removeEventListener('click', handleClick);

		function handleClick(e) {
			innerRef.current && !innerRef.current.contains(e.target) && onOuterClick(e);
		}
	}, [onOuterClick, innerRef]);
};

export default useOuterClickNotifier;
