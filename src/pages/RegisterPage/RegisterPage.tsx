import { KeyboardEventHandler, MouseEventHandler, useState } from "react";
import { Page } from "../../components/Page";
import { SignInForm } from "../../components/SignInForm";
import { SignUpForm } from "../../components/SignUpForm";
import { FormTab, FormTabsGroup, RegistrationPageWrapper } from "./style";

export const RegisterPage = () => {
  const [activeTab, setActiveTab] = useState<string>("signup");

  const handleTabClick: MouseEventHandler<HTMLHeadingElement> = (event) => {
    if (event) {
      if (event.currentTarget.dataset.tab) {
        const { tab } = event.currentTarget.dataset;
        setActiveTab(tab);
      }
    }
  };

  const handleTabKeyDown: KeyboardEventHandler<HTMLHeadingElement> = (
    event
  ) => {
    if (event.key === "Enter") {
      if (event.currentTarget.dataset.tab) {
        const { tab } = event.currentTarget.dataset;
        setActiveTab(tab);
      }
    }
  };

  return (
    <Page>
      <RegistrationPageWrapper>
        <FormTabsGroup>
          <FormTab
            data-tab="signup"
            tabIndex={0}
            isActive={activeTab === "signup"}
            onClick={handleTabClick}
            onKeyDown={handleTabKeyDown}
          >
            Sign Up
          </FormTab>
          <FormTab
            data-tab="signin"
            tabIndex={0}
            isActive={activeTab === "signin"}
            onClick={handleTabClick}
            onKeyDown={handleTabKeyDown}
          >
            Sign In
          </FormTab>
        </FormTabsGroup>
        {activeTab === "signup" ? <SignUpForm /> : <SignInForm />}
      </RegistrationPageWrapper>
    </Page>
  );
};
