import { Color } from "../../ui";
import { Title } from "../Title";
import { StyledHeader } from "./style";
import { v4 as uuidv4 } from "uuid";

export const Header = () => {
  return (
    <StyledHeader id={uuidv4()}>
      <Title grade={2} color={Color.White}>
        WeCareApp
      </Title>
    </StyledHeader>
  );
};
