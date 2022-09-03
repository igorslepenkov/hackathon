import styled from "styled-components";
import { css } from "styled-components";
import { Color, fonts, Media } from "../../ui";

type TabProps = {
  isActive: boolean;
};

export const AccountPageContentWrapper = styled.div`
  justify-self: center;
  align-self: center;
`;

export const AccountTable = styled.section`
  display: grid;
  align-items: center;
  column-gap: 20px;
  row-gap: 10px;
  margin: 20px 0;

  ${Media.SM} {
    grid-template-columns: 1fr 1fr;
    padding: 20px;
    border: 2px solid ${Color.BluePrimary};
  }
`;

export const AccountPageValue = styled.p`
  padding: 20px 0;
  ${fonts.h4}
  color: ${Color.BlueSecondary};
  vertical-align: center;
  border-bottom: 2px solid ${Color.BluePrimary};
`;

export const TitleTabs = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Tab = styled.div<TabProps>`
  ${({ isActive }) => {
    if (isActive) {
      return css`
        border-bottom: 3px solid ${Color.BluePrimary};
      `;
    }
    return css`
      border-bottom: 1px solid ${Color.BluePrimary};
    `;
  }}
  flex-grow: 1;
  cursor: pointer;
`;

export const ScheduleTable = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  column-gap: 20px;
  row-gap: 20px;
`;

export const ScheduleTableData = styled.p`
  display: grid;
  align-items: center;
  justify-content: center;
  ${fonts.h3}
  color: ${Color.BluePrimary};
`;
