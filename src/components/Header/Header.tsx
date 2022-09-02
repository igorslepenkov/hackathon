import { Color } from "../../ui";
import { Title } from "../Title";
import {
  NavLinks,
  StyledCalendarLogo,
  StyledHeader,
  StyledLink,
  StyledProfileLogo,
} from "./style";
import { v4 as uuidv4 } from "uuid";
import { getUser, getUserIsLoggedIn } from "../../store/selectors";
import { resolvePath } from "react-router-dom";
import { ROUTE } from "../../router";

export const Header = () => {
  const isUserLoggedIn = getUserIsLoggedIn();
  const currentUser = getUser();

  return (
    <StyledHeader id={uuidv4()}>
      <Title grade={2} color={Color.White}>
        WeCareApp
      </Title>

      {isUserLoggedIn && currentUser && (
        <NavLinks>
          <StyledLink
            to={resolvePath(ROUTE.ACCOUNT.replace(/:id/, currentUser.id))}
          >
            Profile <StyledProfileLogo />
          </StyledLink>
          <StyledLink to={resolvePath(ROUTE.HOME)}>
            Calendar <StyledCalendarLogo />
          </StyledLink>
        </NavLinks>
      )}
    </StyledHeader>
  );
};
