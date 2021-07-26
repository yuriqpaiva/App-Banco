import { createGlobalStyle } from "styled-components"

// Não possui restrições de escopo:
export const GlobalStyle = createGlobalStyle`
    * {box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
    margin: 0;
    padding: 0;
    text-decoration: none;
    }
`