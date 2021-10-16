import { useState } from 'react'
import { Icon } from '@iconify/react'
import CoffeeImg from '../../assets/img/coffee.png'

import { 
    Card,
    Heart,
    New,
    ImgCard,
    NameProduct, 
    CardFooter,
    Price,
    Button
} from './styles'

export default function CardProducts({ isNew, title, price }) {
    const [heart, setHeart] = useState(false)

    function favorite() {
        setHeart(!heart)
    }

    return (
        <Card>
            <Heart onClick={favorite}>
                {
                    !heart ? 
                    <Icon icon="ant-design:heart-outlined" inline={true} /> :
                    <Icon icon="ant-design:heart-filled" inline={true} />
                }               
            </Heart>
            { isNew && <New>Novo</New> }
            <ImgCard>
                <img src={CoffeeImg} alt={title} />
            </ImgCard>
            <NameProduct>{title}</NameProduct>
            <CardFooter>
                <Price>R$ {price}</Price>
                <div>
                    <Button>
                        <a href="#/">
                            <Icon icon="bi:info" inline={true} />
                        </a>
                    </Button>
                    <Button>
                        <a href="#/">
                            +
                        </a>
                    </Button>
                </div>
            </CardFooter>
        </Card>
    )
}