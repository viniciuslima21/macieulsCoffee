import styled from "styled-components"

export const Bg = styled.div`
    background-color: ${props => props.theme.colors.bg};
    padding-bottom: 5rem;
    
    @media (max-width: 767px) {
        width: 100%;
        border-radius: 0 0 25px 25px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        width: calc(100% - 30px);
        margin: 10px auto 0 auto;
        border-radius: 15px;
    }
    @media (min-width: 1025px) {
        width: calc(100% - 50px);
        margin: 15px auto 0 auto;
        border-radius: 50px;
    }
`