import { StyledFormErrorNotification } from "./style";

interface IProps {
  message: string;
}

export const FormErrorNotification = ({ message }: IProps) => {
  return <StyledFormErrorNotification>{message}</StyledFormErrorNotification>;
};
