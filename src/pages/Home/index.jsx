import GlobalStyles from "../../styles/global"
import { ThemeProvider } from "styled-components"
import theme from '../../styles/themes/theme'

import Background from '../../components/Background'
import Header from '../../components/Header'
import About from '../../components/About'
import Products from '../../components/Products'
import Testimonials from '../../components/Testimonials'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'

export default function Home() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Background>
                <Header />
                <About />
                <Products />
                <Contact />
                <Testimonials />
            </Background>
            <Footer />
        </ThemeProvider>
    )
}