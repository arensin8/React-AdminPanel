import "./Home.scss";
import { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Chart from "../../components/chart/Chart";
import Feautured from "../../components/feautured/Feautured";
import List from "../../components/table/List";
import MenuIcon from "@mui/icons-material/Menu";

const Home = () => {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <div
          className="ham"
          onClick={() => {
            setHamburgerMenu(!hamburgerMenu);
          }}
        >
          <MenuIcon className={hamburgerMenu ? "close" : "open"} />
        </div>
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Feautured />
          <Chart
            title={"Last 6 months Revenue"}
            aspect={2 / 1}
            className="chart"
          />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Home;
