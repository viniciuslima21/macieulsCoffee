import CoffeeImg from '../../assets/img/coffeeHeader.png'
import CoffeeBeansImg from '../../assets/img/coffeeBeans.png'
import Navbar from '../Navbar'
import { Icon } from '@iconify/react'

import { 
    HeaderBg,
    Decoration,
    Title, 
    Content,
    Coffee,
    Social
} from './styles'

import { Container } from '../../styles/container'

export default function Header() {
    return (
        <HeaderBg>
            <Decoration>
                <img src={CoffeeBeansImg} alt="Imagem de grãos de café" />
            </Decoration>
            <Navbar />
            <Container>
                <Content>
                    <Title><span>Café</span> de quem sabe.</Title>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et repudiandae ipsum perferendis exercitationem, necessitatibus quidem, doloremque sint veritatis, explicabo labore non provident aliquam? Optio soluta dolorum dolor neque expedita nemo.</p>
                </Content>
                <Social>
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
            </Container>
            <Coffee>
                <img src={CoffeeImg} alt="Imagem de uma xícara de café" />
            </Coffee>
        </HeaderBg>
    )
}