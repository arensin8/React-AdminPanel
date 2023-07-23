import './Home.scss'
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Widget from '../../components/widget/Widget';
import Chart from '../../components/chart/Chart';
import Feautured from '../../components/feautured/Feautured';

const Home = () => {
    return(
        <div className='home'>
            <Sidebar />
            <div className='homeContainer'>
            <Navbar />
            <div className='widgets'>
                <Widget type="user"/>
                <Widget type="order"/>
                <Widget type="earning"/>
                <Widget type="balance"/>
            </div>
            <div className='charts'>
                <Feautured />
                <Chart />
            </div>
            </div>
        </div>
    )
}

export default Home;