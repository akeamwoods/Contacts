import { FcContacts } from 'react-icons/fc';
import { FaUserPlus } from 'react-icons/fa';
import { HeaderWrapper } from './style';

export const Header: React.FC<{ handleNewContact: () => void }> = ({
	handleNewContact,
}) => {
	return (
		<HeaderWrapper>
			<span>
				<FcContacts size={42} />
				<h1>Contacts</h1>
			</span>
			<button onClick={handleNewContact}>
				New Contact <FaUserPlus />
			</button>
		</HeaderWrapper>
	);
};
