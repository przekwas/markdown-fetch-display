import { useState, useEffect } from 'react';

interface UseFetch {
	loading: boolean;
	error?: string | null;
	data?: any;
}

export const useFetch = (uri: string) => {
	const [data, setData] = useState<UseFetch>({
		loading: true,
		error: null,
		data: null
	});

	useEffect(() => {
		fetch(uri)
			// obviously you'd need conditions if fetching md text or json
			.then(res => res.text())
			.then(markdown => setData({ loading: false, data: markdown }))
			.catch(error => setData({ loading: false, error: error.message }));
	}, []);

	return {
		...data
	};
};
