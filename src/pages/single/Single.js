import React from "react";
import "./Single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from '../../components/chart/Chart';
import List from '../../components/table/List';

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000" alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">John Doe</h1>
                <div className="detailItem">
                    <span className="itemKey">Email:</span>
                    <span className="itemValue">JohnDoe@gmail.com</span>
                </div>
                <div className="detailItem">
                    <span className="itemKey">Phone:</span>
                    <span className="itemValue">+374 97 28 36</span>
                </div>
                <div className="detailItem">
                    <span className="itemKey">Address:</span>
                    <span className="itemValue">Komitas Papazyan St</span>
                </div>
                <div className="detailItem">
                    <span className="itemKey">Country:</span>
                    <span className="itemValue">Armenia</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={ 3/ 1} title = {'User spendings (6 months)'}/>
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last transactions</h1>
            <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
