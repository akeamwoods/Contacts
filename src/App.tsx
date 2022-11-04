import Contact from './types/Contact';
import { useQuery } from 'react-query';
import { Table } from './components/Table';

const getData: () => Promise<Contact[]> = async () =>
	await (await fetch('/api/contacts.json')).json();

const App: React.FC = () => {
	const { isLoading, data } = useQuery<Contact[]>(
		'contacts',
		async () => await getData()
	);

	const columns = [
		{
			Header: 'Name',
			accessor: 'name',
		},
		{
			Header: 'Street',
			accessor: 'street',
		},
		{
			Header: 'Email',
			accessor: 'email',
		},
		{
			Header: 'Phone',
			accessor: 'phone',
		},
		{
			Header: 'Age',
			accessor: 'age',
		},
	];

	if (isLoading) return <div>Loading...</div>;

	if (data == null) return <div>No data...</div>;

	return (
		<div>
			<button>+</button>
			<Table data={data} columns={columns} />
		</div>
	);
};

export default App;
