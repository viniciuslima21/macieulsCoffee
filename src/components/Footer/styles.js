import styled from 'styled-components'

export const FooterBg = styled.div`
    width: 100%;
    max-width: 2000px;
    margin: 0 auto;

    @media (max-width: 767px) {
        padding: 3% 5%;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        padding: 3% 10%;
    }
    @media (min-width: 1025px) {
        padding: 3% calc(15% + 25px);
    }
`

export const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    img {
        height: 115px;
        user-select: none;
    }
`

export const Social = styled.div`
    a {
        font-size: 1rem;
        margin-left: 30px;
    }
`