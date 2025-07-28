import { useState } from "react";
import { StyledSelect, StyledSelectContainer } from "./custom-select-styles";

const CustomSelect = ({ options, register }) => {
	const [region, setRegion] = useState('');

	return (
		<StyledSelectContainer>
			<StyledSelect>
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</StyledSelect>
		</StyledSelectContainer>
	);
};

export default CustomSelect;
