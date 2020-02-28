import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Montserrat', sans-serif;
        padding: 0;
        margin: 0;
    }
    html, body, #root {
        display: flex;
        flex-direction: column;
        flex: 1;
        height: 100%;
    }
`;