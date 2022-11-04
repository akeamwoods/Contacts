import Contact from './types/Contact';
import { useQuery } from 'react-query';
import { Table } from './components/Table';
import { useEffect } from 'react';
import { useStore } from './store/index';

const getData: () => Promise<Contact[]> = async () =>
	await (await fetch('/api/contacts.json')).json();

const App: React.FC = () => {
	const { isLoading, data } = useQuery<Contact[]>(
		'contacts',
		async () => await getData()
	);

	const { contacts, setContacts, removeContact } = useStore();
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

	useEffect(() => {
		if (data) setContacts(data);
	}, [data]);

	if (isLoading) return <div>Loading...</div>;

	if (data == null) return <div>No data...</div>;

	const handleRowClick = (contact: Contact): void => {
		removeContact(contact.email);
	};

	return (
		<div>
			<button>+</button>
			<Table data={contacts} columns={columns} onRowClick={handleRowClick} />
		</div>
	);
};

export default App;
