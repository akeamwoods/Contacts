import Contact from './types/Contact';
import { useQuery } from 'react-query';

const getData: () => Promise<Contact[]> = async () =>
	await (await fetch('/api/contacts.json')).json();

const App: React.FC = () => {
	const { isLoading, data } = useQuery<Contact[]>(
		'contacts',
		async () => await getData()
	);

	if (isLoading) return <div>Loading...</div>;

	if (data == null) return <div>No data...</div>;

	return (
		<div>
			{data.map((d) => (
				<div key={d.email}>{d.email}</div>
			))}
		</div>
	);
};

export default App;
