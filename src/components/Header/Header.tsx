import { Color } from "../../ui";
import { Title } from "../Title";
import {
  NavLinks,
  SignOutButton,
  StyledCalendarLogo,
  StyledHeader,
  StyledLink,
  StyledProfileLogo,
} from "./style";
import { v4 as uuidv4 } from "uuid";
import { resolvePath, useNavigate } from "react-router-dom";
import { ROUTE } from "../../router";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { signOut } from "../../store/features";

export const Header = () => {
  const navigate = useNavigate();
  const isUserLoggedIn = useAppSelector((state) => state.user.isUserLoggedIn);
  const currentUser = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();
  const handleSignOut = () => {
    dispatch(signOut());
    navigate(resolvePath(ROUTE.REGISTER));
  };

  return (
    <StyledHeader id={uuidv4()}>
      <StyledLink to={ROUTE.HOME}>
        <Title grade={2} color={Color.White}>
          WeCareApp
        </Title>
      </StyledLink>

      {isUserLoggedIn && currentUser && (
        <NavLinks>
          <StyledLink
            to={resolvePath(ROUTE.ACCOUNT.replace(/:id/, currentUser.id))}
          >
            Profile <StyledProfileLogo />
          </StyledLink>
          <StyledLink to={resolvePath(ROUTE.CALENDAR)}>
            Calendar <StyledCalendarLogo />
          </StyledLink>

          <SignOutButton type="button" onClick={handleSignOut}>
            SignOut
          </SignOutButton>
        </NavLinks>
      )}
    </StyledHeader>
  );
};
