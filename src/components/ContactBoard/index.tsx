import Contact from '../../types/Contact';
import { ContactCard } from '../ContactCard';
import { BoardWrapper } from './style';

export const ContactBoard: React.FC<{ contacts: Contact[] }> = ({
	contacts,
}) => {
	return (
		<BoardWrapper>
			{contacts.map((contact) => (
				<ContactCard key={contact.email} {...contact} />
			))}
		</BoardWrapper>
	);
};
