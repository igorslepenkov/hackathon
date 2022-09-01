import { StyledFormErrorNotification } from "./style";
import { v4 as uuidv4 } from "uuid";

interface IProps {
  message: string;
}

export const FormErrorNotification = ({ message }: IProps) => {
  return (
    <StyledFormErrorNotification id={uuidv4()}>
      {message}
    </StyledFormErrorNotification>
  );
};
