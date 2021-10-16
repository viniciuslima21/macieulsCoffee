import { Icon } from '@iconify/react'
import LogoImg from '../../assets/img/logo.svg'

import { FooterBg, Content, Social } from './styles'

export default function Footer() {
    return (
        <FooterBg>
            <Content>
                <img src={LogoImg} alt="Logo do Macieul's Coffee" />
                <Social>
                    <a href="#/">
                        <Icon icon="bi:whatsapp" />
                    </a>
                    <a href="#/">
                        <Icon icon="brandico:facebook" />
                    </a>
                    <a href="#/">
                        <Icon icon="bi:instagram" />
                    </a>
                    <a href="#/">
                        <Icon icon="bi:twitter" />
                    </a>
                </Social>
            </Content>
        </FooterBg>
    )
}