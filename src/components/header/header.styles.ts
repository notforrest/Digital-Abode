import css from "styled-jsx/css";
import theme from "../../styles/theme";

export const headerStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Alumni+Sans+Pinstripe&display=swap");

  .header {
    align-items: center;
    background-color: ${theme.colors.headerBackground};
    display: flex;
    flex-direction: column;
    font-family: "Alumni Sans Pinstripe", sans-serif;
    font-size: 4em;
    justify-content: center;

    .headerMenu {
      background-color: ${theme.colors.headerMenuBackground};
      display: flex;
      flex-direction: row;
      font-size: 0.5em;
      justify-content: space-around;
      width: 100%;

      > * {
        width: inherit;
      }

      :hover {
        background-color: ${theme.colors.headerMenuHover};
      }
    }
  }
`;
