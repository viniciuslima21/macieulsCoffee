import styled from 'styled-components'

import { Container } from '../../styles/container'

export const NavbarBg = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: space-between;

    position: ${props => props.opened ? 'fixed' : 'absolute'};
    top: 0;
    z-index: 2;
    padding-top: 0;
    padding-bottom: 0;

    img {
        width: 115px;
        user-select: none;
    }
`

export const Buttons = styled.div`
    @media (max-width: 1024px) { display: none; }
    font-size: 1rem;
    font-weight: 600;

    a {
        margin: 0 25px;
    }
`

export const ButtonsAcount = styled.div`
    @media (max-width: 1024px) { display: none; }
    display: flex;
    font-size: 1.3rem;

    div {
        display: flex;
        justify-content: center;
        align-items: center;

        position: relative;
        background: ${props => props.theme.colors.white};
        width: 2.6rem;
        height: 2.6rem;
        border-radius: 50%;
        box-shadow: 0px 5px 15px 0px rgb(0 0 0 / 10%);

        span {
            position: absolute;
            top: 0;
            right: 0;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            border: 2px solid ${props => props.theme.colors.bg};
            background: ${props => props.theme.colors.second};
        }
    }

    a {
        margin-left: 30px;
    }
`

export const Hamburger = styled.a`
    @media (min-width: 1025px) { display: none; }
    color: ${props => props.theme.colors.primary}!important;
    font-size: 2.3rem;
`

export const ButtonsMobile = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: ${props => !props.opened ? 'none' : 'flex'};
    justify-content: center;
    align-items: center;
    flex-direction: column;

    z-index: 1;
    width: 100%;
    height: 100vh;
    background: rgb(137, 66, 0, 0.9);

    a {
        color: ${props => props.theme.colors.primary}!important;
        font-size: 1.5rem;
        font-weight: 600;
        padding: 15px 0;
    }
`

export const ButtonsAcountMobile = styled.div`
    display: flex;

    div {
        display: flex;
        justify-content: center;
        align-items: center;

        position: relative;
        background: ${props => props.theme.colors.white};
        width: 2.6rem;
        height: 2.6rem;
        border-radius: 50%;
        box-shadow: 0px 5px 15px 0px rgb(0 0 0 / 10%);

        span {
            position: absolute;
            top: 0;
            right: 0;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            border: 2px solid ${props => props.theme.colors.bg};
            background: ${props => props.theme.colors.second};
        }
    }

    a {
        margin: 15px;
    }
`