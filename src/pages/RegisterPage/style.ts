import styled from "styled-components";
import { Color, fonts, Media } from "../../ui";

interface ITabProps {
  isActive: boolean;
}

export const RegistrationPageWrapper = styled.div`
  display: grid;
  grid-template-rows: auto;
  margin: auto 0;

  ${Media.SM} {
    padding: 20px;
    margin: auto;
    border: 1px solid ${Color.BluePrimary};
    border-radius: 20px;
  }
`;

export const FormTabsGroup = styled.div`
  display: flex;
`;

export const FormTab = styled.h3`
  flex-grow: 1;
  padding: 10px;
  ${fonts.h3}
  color: ${Color.DarkBluePrim};
  letter-spacing: 0.05em;
  text-align: center;
  border-bottom: ${({ isActive }: ITabProps) =>
    isActive
      ? `3px solid ${Color.BluePrimary}`
      : `1px solid ${Color.BluePrimary}`};
  cursor: pointer;
`;
