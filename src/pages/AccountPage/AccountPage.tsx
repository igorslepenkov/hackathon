import { Page } from "../../components/Page";
import { Title } from "../../components/Title";
import { getUser } from "../../store/selectors";
import { Color } from "../../ui";
import {
  AccountPageContentWrapper,
  AccountPageValue,
  AccountTable,
} from "./style";

export const AccountPage = () => {
  const user = getUser();
  return (
    <Page>
      <AccountPageContentWrapper>
        <Title grade={1} color={Color.BluePrimary}>
          Profile
        </Title>
        <i className="fa-regular fa-arrow-right-from-bracket"></i>
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
      </AccountPageContentWrapper>
    </Page>
  );
};
