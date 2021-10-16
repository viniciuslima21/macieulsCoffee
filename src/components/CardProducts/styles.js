import styled from 'styled-components'

export const Card = styled.div`
    position: relative;
    background-color: ${props => props.theme.colors.primary};
    border-radius: 25px;
    width: 280px;
    height: 365px;
    padding: 25px;
    margin-top: 15px;
    box-shadow: 0px 5px 15px 0px rgb(0 0 0 / 25%);
`

export const Heart = styled.div`
    position: absolute;
    right: 25px;
    top: 25px;
    color: #e74c3c;
    font-size: 1.5rem;
    cursor: pointer;
`

export const New = styled.div`
    position: absolute;
    left: 0;
    top: 25px;
    font-size: 1rem;
    font-weight: 600;
    color: ${props => props.theme.colors.second};
    padding: 5px 10px 5px 5px;
    border-radius: 0 0 15px 0;
    background: ${props => props.theme.colors.bg};
`

export const ImgCard = styled.div`
    display: flex;
    justify-content: center;

    img {
        height: 210px;
        user-select: none;
    }
`

export const NameProduct = styled.p`
    color: ${props => props.theme.colors.second};
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.6rem;
    margin-top: 15px;
`

export const Price = styled.p`
    color: ${props => props.theme.colors.bg};
    font-size: 1rem;
    font-weight: 600;
`

export const CardFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: absolute;
    bottom: 25px;
    width: 230px;

    div {
        display: flex;
    }
`

export const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    background-color: ${props => props.theme.colors.second};
    width: 35px;
    height: 35px;
    border-radius: 50%;
    font-size: 1.8rem;
    font-weight: 500;
    cursor: pointer;
    margin-left: 5px;
    box-shadow: 0px 5px 15px 0px rgb(0 0 0 / 25%);

    &:hover {
        filter: brightness(85%);
        transition: .5 ease;
    }

    a {
        color: ${props => props.theme.colors.bg}!important;
    }
`