import useStyles from "../../../globalStyle";
import Nav from "../../layout/Nav/Nav";
import Header from "../../layout/Header/Header";
import Os from "../../layout/Section/Os/Os";
import Messaging from "../../layout/Messaging/Messaging";
import Sharing from "../../layout/Sharing/Sharing";
import Groups from "../../layout/Groups/Groups";
import QuickApp from "../../layout/QuickApp/QuickApp";
import Footer from "../../layout/Footer/Footer";

const Home = () => {
    useStyles();
    return (
        <>
            <Nav />
            <Header />
            <main>
                <Os />
                <Messaging />
                <Sharing />
                <Groups />
                <QuickApp />
            </main>
            <Footer />
        </>
    )
}

export default Home;