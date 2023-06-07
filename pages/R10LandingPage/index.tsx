import Layout from "@/components/Layout";
import Main from "./Main";
import Hot from "./Hot";
import Dream from "./Dream";
import Creativity from "./Creativity";
import Newsletter from "@/components/Newsletter";


const HomePage = () => {
    return (
        <Layout layoutNoOverflow noRegistration>
            <Dream />
            <Main />
            <Hot />
            <Creativity />
            <Newsletter />
        </Layout>
    );
};

export default HomePage;
