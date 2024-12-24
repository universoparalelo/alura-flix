import { Outlet } from "react-router-dom";
import Container from "../Container";
import Footer from "../Footer";
import Header from "../Header";
import GlobalProvider from "../../context";
import Modal from "../Modal";

const Baseline = () => {
    return (
        <>
            <Header />
            <Container>
                <GlobalProvider>
                    <Outlet />
                    <Modal />
                </GlobalProvider>
            </Container>
            <Footer />
        </>
    )
}

export default Baseline;