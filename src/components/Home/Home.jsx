import Produtos from "../Produtos/Produtos";
import Header from "../layouts/Header/Header";
import SectionHeader from "../SectionHeader/SectionHeader";
import Doces from "../Doces/Doces";
import Footer from "../layouts/Footer/Footer";

export default function Home(){

    return(
        <main>
            <Header/>
            <SectionHeader/>
            <Produtos/>
            <Doces/>
            <Footer/>
        </main>
    )
}