import { useState, useEffect } from 'react'
import LogoImg from '../../assets/img/user.png'
import CoffeeBeansImg from '../../assets/img/coffeeBeans.png'
import { Icon } from '@iconify/react';
import api from '../../api/testimonials.json'

import {
    TestimonialsBg,
    Decoration,
    H3,
    Card,
    Content,
    ImgPerson,
    TextPerson,
    NamePerson,
    Navgation,
    Option
} from './styles'

export default function Testimonials() {
    const [data, setData] = useState(api)
    const [num, setNum] = useState(0)

    function next() {
        if (num < (data.length - 1))
            setNum(num + 1)
        else
            setNum(0)
    }

    function back() {
        if (num > 0) 
            setNum(num - 1)
        else
            setNum(data.length - 1)
    }

    useEffect(() => {
        setData(api)
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [api, num])

    return (
        <TestimonialsBg>
            <Decoration>
                <img src={CoffeeBeansImg} alt="Imagem de grãos de café" />
            </Decoration>
            <H3 id="testimonials">Depoimentos</H3>
            <Card>
                <ImgPerson>
                    <span><Icon icon="bx:bxs-quote-alt-left" inline={true} /></span>
                    <img src={LogoImg} alt="Imagem de uma pessoa que deu um depoimento sobre a Macieul's Coffee" />
                </ImgPerson>
                <Content>
                    <TextPerson>{data[num]["testimonial"]}</TextPerson>
                    <NamePerson>- {data[num]["name"]}</NamePerson>
                    <Navgation>
                        <Option onClick={back}>
                            <Icon icon="eva:arrow-circle-left-fill" />
                        </Option>
                        <Option onClick={next}>
                            <Icon icon="eva:arrow-circle-right-fill" />
                        </Option>
                    </Navgation>
                </Content>
            </Card>
        </TestimonialsBg>
    )
}