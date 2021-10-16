import styled from 'styled-components'

export const TestimonialsBg = styled.div`
    position: relative;
`

export const Decoration = styled.div`
    img {
        position: absolute;
        width: 17%;
        top: -40%;
        right: -7%;
        transform: rotate(75deg);
        user-select: none;
        max-width: 500px;

        @media (max-width: 1025px) {
            display: none;
        }
    }
`

export const H3 = styled.h3`
    padding-top: 5rem;
`

export const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 25px auto 0 auto;
    padding-bottom: 5rem; 
    flex-wrap: wrap;
    text-align: center;

    @media (max-width: 767px) {
        width: 90%;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        width: 75%;
    }
    @media (min-width: 1025px) {
        width: 50%;
        flex-wrap: nowrap;
        text-align: left;
    }
`

export const Content = styled.div`
    margin-top: 25px;

    @media (min-width: 1025px) {
        margin-left: 25px;
    }
`

export const ImgPerson = styled.div`
    position: relative;
    border-radius: 10px;
    user-select: none;

    img {
        width: 215px;
        height: 215px;
        border-radius: 10px;
    }

    span {
        position: absolute;
        font-size: 5rem;
        top: -35px;
        left: -25px;
        color: ${props => props.theme.colors.second};
    }
`

export const TextPerson = styled.p`
    font-size: 1.2rem;
    font-weight: 3rem;
    margin-bottom: 10px;
`

export const NamePerson = styled.p`
    font-weight: 800;
`

export const Navgation = styled.div`
    display: flex;
    justify-content: center;

    @media (min-width: 1025px) {
        justify-content: flex-start;
    }
`

export const Option = styled.div`
    margin-top: 15px;
    color: ${props => props.theme.colors.primary};
    font-size: 2.5rem;
    cursor: pointer;
    filter: drop-shadow(5px 5px 15px #0003);

    &:hover {
        color: ${props => props.theme.colors.second};
        transition: .5s ease;
    }
`