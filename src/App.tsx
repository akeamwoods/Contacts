import Contact from './types/Contact';
import { useQuery } from 'react-query';
import { Table } from './components/Table';
import { useEffect, useState } from 'react';
import { useStore } from './store/index';
import { FaUserMinus } from 'react-icons/fa';
import { Modal } from './components/Modal';
import { NewContactForm } from './components/NewContactForm';
import { Header } from './components/Header';

const getData: () => Promise<Contact[]> = async () =>
	await (await fetch('/api/contacts.json')).json();

const App: React.FC = () => {
	const { isLoading, data } = useQuery<Contact[]>(
		'contacts',
		async () => await getData()
	);

	const [isVisible, setIsVisible] = useState(false);

	const { contacts, setContacts, removeContact, addContact } = useStore();
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
		{
			accessor: 'delete',
			Cell: ({ cell }: any) => (
				<button
					style={{ background: 'none', border: 'none', cursor: 'pointer' }}
					onClick={() => handleRowClick(cell.row.values)}
				>
					<FaUserMinus size={16} />
				</button>
			),
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
		<>
			{isVisible && (
				<Modal heading='New Contact' handleClose={() => setIsVisible(false)}>
					<NewContactForm
						addContact={addContact}
						onClose={() => setIsVisible(false)}
					/>
				</Modal>
			)}
			<div style={{ padding: '40px' }}>
				<Header handleNewContact={() => setIsVisible(true)} />
				<Table data={contacts} columns={columns} onRowClick={handleRowClick} />
			</div>
		</>
	);
};

export default App;
