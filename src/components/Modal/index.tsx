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
	const dropIn = {
		hidden: {
			y: '-100vh',
			opacity: 0,
		},
		visible: {
			y: '0',
			opacity: 1,
			transition: {
				duration: 0.1,
				type: 'spring',
				damping: 25,
				stiffness: 500,
			},
		},
		exit: {
			y: '100vh',
			opacity: 0,
		},
	};
	return (
		<ModalWrapper onClick={handleClose}>
			<ModalContainer
				variants={dropIn}
				initial='hidden'
				animate='visible'
				exit='exit'
				onClick={(e) => e.stopPropagation()}
			>
				<h3>{heading}</h3>
				{children}
			</ModalContainer>
		</ModalWrapper>
	);
};
