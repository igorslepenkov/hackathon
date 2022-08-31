import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Page } from "../../components/Page";
import { Title } from "../../components/Title";
import { ROUTE } from "../../router";
import { Color } from "../../ui";
import { GreetingWrapper } from "./style";

export const HomePage = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    console.log("Hello");
    navigate(ROUTE.REGISTER);
  };
  return (
    <Page>
      <GreetingWrapper>
        <Title grade={3} color={Color.YellowPrimary}>
          Welcome to WeCareApp
        </Title>
        <Title grade={1} color={Color.DarkBluePrim}>
          We really are care about you health!
        </Title>
        <Button type="button" onClick={handleButtonClick}>
          Register or sign in to continue
        </Button>
      </GreetingWrapper>
    </Page>
  );
};
