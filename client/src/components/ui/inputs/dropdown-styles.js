import { useState } from 'react';
import styled from 'styled-components';

// Estilos para el contenedor del Dropdown
const DropdownContainer = styled.div`
	margin-bottom: 20px;
	position: relative;
	display: flex;
	flex-direction: column;
`;

// Estilo para el label que actúa como el título del dropdown
const StyledFilterLabel = styled.label`
	font-size: 16px;
	font-weight: bold;
	cursor: pointer;
	color: #333;
	padding: 10px;
	background-color: #f1f1f1;
	border-radius: 5px;
	border: 1px solid #ddd;
	display: flex;
	justify-content: space-between;
	align-items: center;
	transition: background-color 0.3s ease;

	&:hover {
		background-color: #e2e2e2;
	}

	span {
		font-size: 18px;
		color: #888;
		transition: transform 0.3s ease;
	}
`;

// Estilo para el contenido del dropdown (lista de checkboxes)
const DropdownContent = styled.div`
	background-color: #ffffff;
	border-radius: 5px;
	border: 1px solid #ddd;
	padding: 10px;
	position: absolute;
	width: 100%;
	top: 100%;
	left: 0;
	z-index: 10;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	max-height: 200px;
	overflow-y: auto;
	display: flex;
	flex-direction: column;
`;

// Estilo para cada checkbox dentro del dropdown
const CheckboxLabel = styled.label`
	display: flex;
	align-items: center;
	margin-bottom: 10px;
	font-size: 14px;

	input[type='checkbox'] {
		margin-right: 8px;
	}
`;

// Opcional: Agregar un efecto para rotar la flecha cuando el dropdown se abre
const DropdownOpen = styled.div`
	&.open > ${StyledFilterLabel} span {
		transform: rotate(180deg);
	}
`;

export {
	DropdownContainer,
	StyledFilterLabel,
	DropdownContent,
	CheckboxLabel,
	DropdownOpen
};
