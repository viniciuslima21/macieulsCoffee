import styled from 'styled-components'

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media (max-width: 1025px) {
        flex-direction: column;
        justify-content: center;
        flex-wrap: wrap;
    }
`

export const Map = styled.div`
    width: 45%;
    max-width: 500px;
    
    @media (max-width: 1025px) {
        width: 100%;
    }


    img {
        width: 100%;
        user-select: none;
    }
`

export const TextContact = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;

    @media (max-width: 1025px) {
        width: 100%;
    }

    p {
        display: flex;
        align-items: center;
        
        font-size: 1rem;
        padding: 10px 0 10px 0;

        @media (max-width: 1025px) {
            justify-content: center;

            font-size: 1.2rem;
            text-align: center;
            padding: 10px 0;
        }

        span {
            font-size: 1.5rem;
            color: ${props => props.theme.colors.second};
            margin-right: 15px;
        }
    }
`