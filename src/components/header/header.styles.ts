import css from "styled-jsx/css";
import theme from "../../styles/theme";

export const headerStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Alumni+Sans+Pinstripe&display=swap");

  .header {
    background-color: ${theme.colors.headerBackground};
    display: flex;
    font-family: "Alumni Sans Pinstripe", sans-serif;
    font-size: 4em;
    justify-content: center;
  }
`;
