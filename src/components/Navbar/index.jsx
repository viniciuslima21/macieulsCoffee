import { useState } from 'react'
import LogoImg from '../../assets/img/logo.svg'
import { Icon } from '@iconify/react'

import { 
    NavbarBg,
    Buttons,
    ButtonsAcount,
    Hamburger,
    ButtonsMobile,
    ButtonsAcountMobile
} from './styles'

export default function Navbar() {
    const [opened, setOpened] = useState(false)

    function open() {
        setOpened(!opened)
    }

    return (
        <>
            <NavbarBg opened={opened}>
                <img src={LogoImg} alt="Logo do Macieul's Coffee" />
                <Buttons>
                    <a href="#about">Sobre</a>
                    <a href="#products">Produtos</a>
                    <a href="#contact">Contato</a>
                    <a href="#testimonials">Depoimentos</a>
                </Buttons>
                <ButtonsAcount>
                    <a href="#/">
                        <div>
                            <Icon icon="el:shopping-cart" />
                            <span></span>
                        </div>
                    </a>
                    <a href="#/">
                        <div>
                            <Icon icon="bx:bxs-user" />
                        </div>
                    </a>
                </ButtonsAcount>
                <Hamburger onClick={open}>
                    { !opened ? 
                    <Icon icon="ph:coffee" inline={true} /> : 
                    <Icon icon="ph:coffee-fill" inline={true} /> }
                </Hamburger>
            </NavbarBg>
            <ButtonsMobile opened={opened}> 
                <a href="#about" onClick={open}>Sobre</a>
                <a href="#products" onClick={open}>Produtos</a>
                <a href="#contact" onClick={open}>Contato</a>
                <a href="#testimonials" onClick={open}>Depoimentos</a>
                <ButtonsAcountMobile>
                    <a href="#/">
                        <div>
                            <Icon icon="el:shopping-cart" />
                            <span></span>
                        </div>
                    </a>
                    <a href="#/">
                        <div>
                            <Icon icon="bx:bxs-user" />
                        </div>
                    </a>
                </ButtonsAcountMobile>
            </ButtonsMobile>
        </>
    )
}