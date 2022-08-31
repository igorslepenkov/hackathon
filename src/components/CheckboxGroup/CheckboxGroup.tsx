import {
  StyledCheckbox,
  StyledCheckboxGroup,
  StyledCheckboxLabel,
  StyledCheckboxVisible,
} from "./style";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";

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
  const [activeCheckbox, setActiveCheckbox] = useState<string>();

  useEffect(() => {
    if (value) {
      setActiveCheckbox(value);
    }
  }, [value]);

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
              checked={activeCheckbox === checkbox ? true : false}
              {...props}
            />
            <StyledCheckboxVisible
              htmlFor={checkbox}
              id={uuidv4()}
              isActive={activeCheckbox === checkbox ? true : false}
            />
          </StyledCheckboxLabel>
        );
      })}
    </StyledCheckboxGroup>
  );
};
