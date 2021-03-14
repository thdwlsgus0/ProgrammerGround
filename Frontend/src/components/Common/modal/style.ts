/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	z-index: 100;
	background-color: rgb(0, 0, 0); /* Fallback color */
	background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`;
export const ModalContent = styled.div`
	background-color: #fefefe;
	width: 30%;
	height: 400px;
	margin: 10% auto;
	border: 1px solid #888;
	border-radius: 10px;
`;

export const ModalHeader = styled.header`
	width: 100%;
	height: 50px;
	display: flex;
	justify-content: space-between;
	margin: 0 auto;
`;

export const ModalClose = styled.div`
	font-size: 28px;
	height: 10px;
	color: #aaa;
	font-weight: bold;
	cursor: pointer;
	border-radius: 10px;
`;

export const ModalTitle = styled.div`
	font-size: 20px;
`;

export const ModalBody = styled.div`
	padding-top: 20px;

	font-size: 20px;
	& hr {
		width: 100%;
	}
`;
export const InputSection = styled.div`
	margin-top: 20px;
	display: flex;
	justify-content: center;
`;
export const ModalCreateSection = styled.div`
	display: flex;
	flex-direction: column;
`;

export const ModalCreateSectionTitle = styled.div`
	display: flex;
	justify-content: space-around;
	& > button {
		width: 55px;
		height: 32px;
		cursor: pointer;
		background-color: #04c584;
		font-size: 12px;
		color: #fff;
		border: 0px;
	}
`;
