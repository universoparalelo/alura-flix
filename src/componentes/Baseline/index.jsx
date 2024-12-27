import { Outlet } from "react-router-dom";
import Container from "../Container";
import Footer from "../Footer";
import Header from "../Header";
import GlobalProvider from "../../context";
import Modal from "../Modal";
import Banner from "../Banner";

const Baseline = () => {
    return (
        <>
        <GlobalProvider>
            <Header />
            <Banner />

            <Container>
                    <Outlet />
                    <Modal />
            </Container>
            <Footer />
        </GlobalProvider>
        </>
    )
}

export default Baseline;