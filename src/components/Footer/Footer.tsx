import { FooterParagraph, StyledFooter } from "./style";
import { v4 as uuidv4 } from "uuid";

export const Footer = () => {
  return (
    <StyledFooter id={uuidv4()}>
      <FooterParagraph id={uuidv4()}>@WeCareApp</FooterParagraph>
      <FooterParagraph id={uuidv4()}>All rights reserved</FooterParagraph>
    </StyledFooter>
  );
};
