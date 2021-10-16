import ContactImg from '../../assets/img/contact.svg'
import { Icon } from '@iconify/react';

import { Map, Content, TextContact } from './styles'

import { Container } from '../../styles/container'

export default function Contact() {
    return (
        <Container id="contact">
            <h3>Contato</h3>
            <Content>
                <Map>
                    <img src={ContactImg} alt="Imagem desenho de uma mulher olhando no mapa" />
                </Map>
                <TextContact>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, quidem eligendi. Deserunt, expedita? Enim corrupti voluptate magni ipsam recusandae incidunt quia odio praesentium commodi fuga modi, dolores deserunt quisquam necessitatibus!</p>
                    <br />
                    <p>
                        <span><Icon icon="fa-solid:phone" inline={true} /></span>
                        (14) 1122-3344
                    </p>
                    <p>
                        <span><Icon icon="carbon:location-filled" inline={true} /></span>
                        Rua da Felicidade, 123 (Lins - SP)
                    </p>
                    <p>
                        <span><Icon icon="cib:mail-ru" inline={true} /></span>
                        macieulscoffee@coffee.com.br
                    </p>
                </TextContact>
            </Content>
        </Container>
    )
}