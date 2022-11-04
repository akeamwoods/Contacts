import { SubmitHandler, useForm } from 'react-hook-form';
import Contact from '../../types/Contact';
import { Form, ErrorText, InputWrapper, ButtonWrapper } from './style';

export const NewContactForm: React.FC<{
	addContact: (contact: Contact) => void;
	onClose: () => void;
}> = ({ addContact, onClose }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Contact>();
	const onSubmit: SubmitHandler<Contact> = (data) => {
		addContact(data);
		onClose();
	};
	return (
		// eslint-disable-next-line @typescript-eslint/no-misused-promises
		<Form onSubmit={handleSubmit(onSubmit)}>
			<InputWrapper>
				<input
					placeholder='John Doe'
					{...register('name', { required: true })}
				/>
				{errors.name && <ErrorText>This field is required</ErrorText>}
			</InputWrapper>
			<InputWrapper>
				<input
					placeholder='Street Name'
					{...register('street', { required: true })}
				/>
				{errors.street && <ErrorText>This field is required</ErrorText>}
			</InputWrapper>
			<InputWrapper>
				<input
					placeholder='john.doe@epicor.com'
					{...register('email', { required: true })}
				/>
				{errors.email && <ErrorText>This field is required</ErrorText>}
			</InputWrapper>
			<InputWrapper>
				<input
					placeholder='0123456789'
					{...register('phone', { required: true })}
				/>
				{errors.phone && <ErrorText>This field is required</ErrorText>}
			</InputWrapper>
			<InputWrapper>
				<input
					defaultValue={28}
					{...register('age', { required: true, min: 1 })}
					type='number'
				/>
				{errors.age && <ErrorText>This field is required</ErrorText>}
			</InputWrapper>
			<ButtonWrapper>
				<button type='button' onClick={onClose}>
					Cancel
				</button>
				<button>Add contact</button>
			</ButtonWrapper>
		</Form>
	);
};
