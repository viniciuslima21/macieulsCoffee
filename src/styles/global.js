import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        overflow-x: hidden;
        font-family: 'Montserrat', sans-serif;
        background: ${props => props.theme.colors.white};
    }

    html {
        scroll-behavior: smooth; //Scroll suave
    }

    p {
        //Regular
        font-size: 1rem;
        line-height: 1.3rem;
        font-weight: 400;
        color: ${props => props.theme.colors.primary};
    }

    h1 {
        font-weight: 900;
        color: ${props => props.theme.colors.primary};
        @media (max-width: 767px) { font-size: 3rem; }
        @media (min-width: 768px) and (max-width: 1024px) { font-size: 4.5rem; line-height: 4rem; }
        @media (min-width: 1025px) { font-size: 5.5vw; line-height: 5vw; }
    }

    h3 {
        font-size: 3rem;
        margin-bottom: 10px;
        font-weight: 900;
        text-align: center;
        color: ${props => props.theme.colors.primary};
    }

    a {
        color: ${props => props.theme.colors.primary};
        text-decoration: none;

        &:hover {
            transition: .5s ease;
            color: ${props => props.theme.colors.second}
        }
    }
`

export default GlobalStyles