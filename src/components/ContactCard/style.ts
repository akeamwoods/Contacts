import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CardWrapper = styled(motion.div)`
	background: #fff;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

	h3,
	p {
		margin: 0;
	}
`;
