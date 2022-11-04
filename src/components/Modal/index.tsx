import { ModalWrapper, ModalContainer } from './style';

interface ModalProps {
	heading: string;
	handleClose: () => void;
	children: any;
}

export const Modal: React.FC<ModalProps> = ({
	heading,
	handleClose,
	children,
}) => {
	return (
		<ModalWrapper onClick={handleClose}>
			<ModalContainer onClick={(e) => e.stopPropagation()}>
				<h3>{heading}</h3>
				{children}
			</ModalContainer>
		</ModalWrapper>
	);
};
