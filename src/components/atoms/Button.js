import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
	position: relative;
	width: 35%;
	cursor: pointer;
	transition: all 0.3s;
	&:hover {
		transform: scale(1.1);
	}
`;
const Container = styled.div`
	background: ${({ background }) => background};
	border-radius: 4px;
	padding: 16px 32px;
	height: 100%;
	position: relative;
	z-index: 5;
	// box-shadow: 0 0px 25px #003646;
`;
const Shadow = styled.div`
	height: 50%;
	width: 100%;
	border-radius: 4px;
	// margin-left: 7.5%;
	position: absolute;
	bottom: 0;
	left: 0;
	background: transparent;
	box-shadow: 0 5px 25px #003646;
	z-index: 1;
`;

const Label = styled.p`
	color: #fff;
	text-align: center;
	font-weight: 500;
	font-size: 24px;
`;

function Button({ label, background = '#fff', onClick }) {
	return (
		<Wrapper onClick={onClick}>
			<Container background={background}>
				<Label>{label}</Label>
			</Container>
			<Shadow />
		</Wrapper>
	);
}

export default Button;
