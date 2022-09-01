import { Color } from "../../ui";
import { Title } from "../Title";
import { StyledHeader } from "./style";

export const Header = () => {
  return (
    <StyledHeader>
      <Title grade={2} color={Color.White}>
        WeCareApp
      </Title>
    </StyledHeader>
  );
};
