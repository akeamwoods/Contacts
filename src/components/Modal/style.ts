import styled from 'styled-components';

export const ModalWrapper = styled.div`
	display: flex;
	position: fixed;
	background: rgba(0, 0, 0, 0.5);
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
`;

export const ModalContainer = styled.div`
	background: #fff;
	display: flex;
	padding: 20px;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-radius: 10px;
`;
