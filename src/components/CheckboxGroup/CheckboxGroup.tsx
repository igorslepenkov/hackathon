import {
  StyledCheckbox,
  StyledCheckboxGroup,
  StyledCheckboxLabel,
  StyledCheckboxVisible,
} from "./style";

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
    <StyledCheckboxGroup>
      {checkboxes.map((checkbox) => {
        return (
          <StyledCheckboxLabel htmlFor={checkbox} key={checkbox}>
            {checkbox}
            <StyledCheckbox
              id={checkbox}
              name={name}
              value={checkbox}
              checked={value === checkbox}
              {...props}
            />
            <StyledCheckboxVisible htmlFor={checkbox} />
          </StyledCheckboxLabel>
        );
      })}
    </StyledCheckboxGroup>
  );
};
