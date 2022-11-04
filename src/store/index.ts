import create from 'zustand';
import Contact from '../types/Contact';

interface StoreState {
	contacts: Contact[];
	setContacts: (contacts: Contact[]) => void;
	addContact: (contact: Contact) => void;
	removeContact: (email: string) => void;
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
			contacts: [...state.contacts, contact],
		}));
	},
	removeContact: (email: string) => {
		set((state) => ({
			contacts: state.contacts.filter((contact) => contact.email !== email),
		}));
	},
}));
