import Contact from './types/Contact';
import { useQuery } from 'react-query';
import { ContactBoard } from './components/ContactBoard';

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
			<ContactBoard contacts={data} />
		</div>
	);
};

export default App;
