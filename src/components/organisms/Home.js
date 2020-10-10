import React from 'react';
import styled from '@emotion/styled';
import Button from '../atoms/Button';

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: red;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
const Title = styled.p`
	font-family: 'Nunito', sans-serif;
	font-weight: 600;
	color: #fff;
	letter-spacing: 3px;
	margin-bottom: 48px;
	font-size: 5rem;
	text-align: center;
`;

function Home() {
	return (
		<Container>
			<Title>Garrett Tolbert</Title>
			<Button
				label="WASSUP"
				background="#245f73"
				onClick={() =>
					(window.location = 'https://www.linkedin.com/in/garretttolbert/')
				}
			/>
		</Container>
	);
}

export default Home;
