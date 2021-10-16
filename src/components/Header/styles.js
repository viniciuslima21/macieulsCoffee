import styled from 'styled-components'

export const HeaderBg = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    position: relative;
    height: 100vh;

    @media (min-width: 768px) and (max-width: 1024px) {
        height: calc(100vh - 10px);
    }
    @media (min-width: 1025px) {
        height: calc(100vh - 15px);
    }
`

export const Decoration = styled.div`
    img {
        position: absolute;
        width: 18%;
        bottom: -18%;
        left: -5%;
        transform: rotate(180deg);
        user-select: none;
        max-width: 500px;

        @media (max-width: 1025px) {
            display: none;
        }
    }
`

export const Content = styled.div`
    @media (min-width: 768px) and (max-width: 1024px) {
        width: 80%;
    }
    @media (min-width: 1025px) {
        width: 60%;
    }
`

export const Title = styled.h1`
    margin: -5% 0 3% 0;
    
    span {
        color: ${props => props.theme.colors.second};
    }
`

export const Coffee = styled.div`
    img {
        position: absolute;
        top: 6vh;
        right: -30vh;
        height: 86vh;
        user-select: none;

        @media (max-width: 1024px) {
            display: none;
        }
    }
`

export const Social = styled.div`
    position: absolute;
    bottom: 10%;

    a {
        font-size: 1.3rem;
        margin-right: 30px;
    }
`