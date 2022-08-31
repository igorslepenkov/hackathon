import {
  StyledCheckbox,
  StyledCheckboxGroup,
  StyledCheckboxLabel,
  StyledCheckboxVisible,
} from "./style";
import { v4 as uuidv4 } from "uuid";

interface IProps {
  value: string;
  checkboxes: string[];
  name: string;
  onChange: () => void;
  onBlur: () => void;
}

export const CheckboxGroup = ({
  checkboxes,
  name,
  value,
  ...props
}: IProps) => {
  return (
    <StyledCheckboxGroup id={uuidv4()}>
      {checkboxes.map((checkbox) => {
        return (
          <StyledCheckboxLabel htmlFor={checkbox} key={checkbox} id={uuidv4()}>
            {checkbox}
            <StyledCheckbox
              id={checkbox}
              name={name}
              value={checkbox}
              checked={value === checkbox}
              {...props}
            />
            <StyledCheckboxVisible htmlFor={checkbox} id={uuidv4()} />
          </StyledCheckboxLabel>
        );
      })}
    </StyledCheckboxGroup>
  );
};
