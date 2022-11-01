import Contact from '../../types/Contact';
import { CardWrapper } from './style';

export const ContactCard: React.FC<Contact> = ({
	age,
	email,
	name,
	phone,
	street,
}) => {
	return (
		<CardWrapper whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
			<h3>Name</h3>
			<p>{name}</p>
			<h3>Email</h3>
			<p>{email}</p>
			<h3>Age</h3>
			<p>{age}</p>
			<h3>Phone</h3>
			<p>{phone}</p>
			<h3>Street</h3>
			<p>{street}</p>
		</CardWrapper>
	);
};
