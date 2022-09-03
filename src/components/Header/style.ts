import { Link } from "react-router-dom";
import styled from "styled-components";
import { CalendarLogo, ProfileLogo } from "../../assets";
import { Color, fonts } from "../../ui";

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 24px;
  min-height: 100px;
  background-color: ${Color.BluePrimary};
  border-radius: 0 0 40px 40px;
`;

export const NavLinks = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;
  padding: 10px;
  border-radius: 20px;
  background-color: ${Color.LightGray};
`;

export const StyledProfileLogo = styled(ProfileLogo)`
  path {
    fill: ${Color.BlackPrimary};
  }
`;

export const StyledCalendarLogo = styled(CalendarLogo)`
  path {
    fill: ${Color.BlackPrimary};
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  ${fonts.h3}
  color: ${Color.BluePrimary};
  text-decoration: none;
  text-align: center;
`;

export const SignOutButton = styled.button`
  ${fonts.h3}
  color: ${Color.BluePrimary};
  background-color: transparent;
  border: none;
  border-radius: 20px;
  cursor: pointer;
`;
