import { useState } from "react";
import { Page } from "../../components/Page";
import { Title } from "../../components/Title";
import { useAppSelector } from "../../store/hooks";
import { Color } from "../../ui";
import { getArrayOfVisits } from "../../utils/getArrayOfVisits";
import {
  AccountPageContentWrapper,
  AccountPageValue,
  AccountTable,
  ScheduleTable,
  Tab,
  TitleTabs,
  ScheduleTableData,
} from "./style";

export const AccountPage = () => {
  const userSchedule = useAppSelector((state) => state.user.userSchedule);
  const [activeTab, setActiveTab] = useState<"profile" | "calendar">("profile");
  const toggleActiveTab = (value: "profile" | "calendar") => {
    setActiveTab(value);
  };
  const user = useAppSelector((state) => state.user.user);
  console.log(activeTab, userSchedule);
  return (
    <Page>
      <AccountPageContentWrapper>
        {user && user.role === "DOCTOR" ? (
          <TitleTabs>
            <Tab
              onClick={() => toggleActiveTab("profile")}
              isActive={activeTab === "profile"}
            >
              <Title grade={1} color={Color.BluePrimary}>
                Profile
              </Title>
            </Tab>
            <Tab
              onClick={() => toggleActiveTab("calendar")}
              isActive={activeTab === "calendar"}
            >
              <Title grade={1} color={Color.BluePrimary}>
                Calendar
              </Title>
            </Tab>
          </TitleTabs>
        ) : (
          <Title grade={1} color={Color.BluePrimary}>
            Profile
          </Title>
        )}

        {activeTab === "profile" && (
          <AccountTable>
            <Title grade={3} color={Color.BluePrimary}>
              Name
            </Title>
            <AccountPageValue>{user && user.name}</AccountPageValue>

            <Title grade={3} color={Color.BluePrimary}>
              Email
            </Title>
            <AccountPageValue>{user && user.email}</AccountPageValue>

            <Title grade={3} color={Color.BluePrimary}>
              Phone
            </Title>
            <AccountPageValue>{user && user.phone}</AccountPageValue>

            {user && user.birthDate && (
              <>
                <Title grade={3} color={Color.BluePrimary}>
                  Birth Date
                </Title>
                <AccountPageValue>{user && user.birthDate}</AccountPageValue>
              </>
            )}

            {user && user.specialty && (
              <>
                <Title grade={3} color={Color.BluePrimary}>
                  Specialty
                </Title>
                <AccountPageValue>{user && user.specialty}</AccountPageValue>
              </>
            )}

            {user && user.document && (
              <>
                <Title grade={3} color={Color.BluePrimary}>
                  Document of higher medical education
                </Title>
                <AccountPageValue>{user && user.document}</AccountPageValue>
              </>
            )}
          </AccountTable>
        )}

        {activeTab === "calendar" && userSchedule && (
          <ScheduleTable>
            <ScheduleTableData>Date</ScheduleTableData>
            <ScheduleTableData>Working hours</ScheduleTableData>
            <ScheduleTableData>Open Slots</ScheduleTableData>
            {userSchedule.map((date) => {
              const visits = getArrayOfVisits(date.start, date.end);
              return (
                <>
                  <ScheduleTableData>{date.date}</ScheduleTableData>
                  <ScheduleTableData>{`${date.start} - ${date.end}`}</ScheduleTableData>
                  <ScheduleTableData>{visits.length}</ScheduleTableData>
                </>
              );
            })}
          </ScheduleTable>
        )}
      </AccountPageContentWrapper>
    </Page>
  );
};
