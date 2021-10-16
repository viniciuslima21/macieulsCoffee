import { useState, useEffect } from 'react'
import CardProducts from '../CardProducts'
import api from '../../api/products.json'

import { Cards } from './styles'

import { Container } from '../../styles/container'

export default function Products() {
    const [data, setData] = useState([])
    
    useEffect(() => {
        setData(api)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [api])

    return (
        <Container id="products">
            <h3>Produtos</h3>
            <Cards>
                {data.map(p => (
                    <CardProducts 
                        key= {p.id}
                        isNew={p.isNew}
                        title={p.name} 
                        price={p.price} 
                    />
                ))}
            </Cards>
        </Container>
    )
}