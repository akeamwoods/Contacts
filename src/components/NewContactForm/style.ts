import styled from 'styled-components';

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	min-width: 300px;
	font-size: 0.8em;
`;

export const ButtonWrapper = styled.div`
	display: flex;
	button {
		cursor: pointer;
		background: #ff7043;
		color: #fff;
		padding: 10px;
		border: none;
		flex: 1;
	}

	button:first-child {
		background: none;
		color: #000;
	}
`;

export const ErrorText = styled.p`
	color: red;
	margin: 0;
`;

export const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 10px;

	input {
		padding: 10px;
		margin: 0;
		border: 1px solid #e6e6e6;
	}
`;
