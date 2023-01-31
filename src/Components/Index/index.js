
import React from 'react';
import './style.css';
import About from '../../Components/About';
import Home from '../../Components/Home';
import Profile from '../../Components/Profile';
import Portfolio from '../../Components/Portfolio';
import Work from '../../Components/Work';
import Footer from '../../Components/Footer';
import Socielmedia from '../../Components/Socielmedia';
class Index extends React.Component {
    state = {
    };

    render() {
        return <div>
            <Home />
            <Work />
            <Portfolio />
            <Profile />
            <About />
            <Socielmedia />
            <Footer />
        </div>;
    }
}
export default Index;