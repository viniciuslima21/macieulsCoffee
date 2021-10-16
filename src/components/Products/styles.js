import styled from 'styled-components'

export const Cards = styled.div`
    display: grid; 
    justify-items: center;
    gap: 15px 15px; 

    @media (max-width: 767px) { 
        grid-template-columns: 1fr; 
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        grid-template-columns: 1fr 1fr; 
    }
    @media (min-width: 1025px) and (max-width: 1400px) {
        grid-template-columns: 1fr 1fr 1fr; 
    }
    @media (min-width: 1401px) {
        grid-template-columns: 1fr 1fr 1fr 1fr; 
    }
`