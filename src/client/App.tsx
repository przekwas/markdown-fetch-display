import * as React from 'react';
import { useFetch } from './useFetch';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

const App = (props: AppProps) => {
	const { data, loading, error } = useFetch('/api/changelog');

	if (loading) return <h1 className="mt-5 text-center">Loading</h1>;
	if (error) return <h1 className="mt-5 text-center text-danger">Fuck: {error}</h1>;

	return (
		<main className="container my-5">
			<ReactMarkdown rehypePlugins={[rehypeRaw]}>{data}</ReactMarkdown>
		</main>
	);
};

interface AppProps {}

export default App;
