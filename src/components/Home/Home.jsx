import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Category from '../Category/Category';
import Featured from '../Featured/Featured';
import Footer from '../Footer/Footer';



const Home = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Category></Category>
            <Featured></Featured>
            <Footer></Footer>
        </>
    );
};

export default Home;