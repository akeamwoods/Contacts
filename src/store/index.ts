import create from 'zustand';
import Contact from '../types/Contact';

interface StoreState {
	contacts: Contact[];
	setContacts: (contacts: Contact[]) => void;
	addContact: (contact: Contact) => void;
}

export const useStore = create<StoreState>((set) => ({
	contacts: [],
	setContacts: (contacts: Contact[]) => {
		set(() => ({
			contacts,
		}));
	},
	addContact: (contact: Contact) => {
		set((state) => ({
			contacts: [
				...state.contacts,
				{
					name: 'Akeam Woods',
					street: 'Ashfield Acres 1',
					email: 'akeam@msn.com',
					phone: '(721) 288-9108',
					age: 24,
				} as Contact,
			],
		}));
	},
}));
