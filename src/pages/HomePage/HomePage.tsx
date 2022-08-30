import { Button } from "../../components/Button";
import { Page } from "../../components/Page";
import { Title } from "../../components/Title";
import { Color } from "../../ui";
import { GreetingWrapper } from "./style";

export const HomePage = () => {
  return (
    <Page>
      <GreetingWrapper>
        <Title grade={3} color={Color.YellowPrimary}>
          Welcome to WeCareApp
        </Title>
        <Title grade={1} color={Color.DarkBluePrim}>
          We really are care about you health!
        </Title>
        <Button type="button">Let's find your top doctor!</Button>
      </GreetingWrapper>
    </Page>
  );
};
