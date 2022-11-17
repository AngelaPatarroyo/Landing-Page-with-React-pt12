import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import footer from "./footer.jsx";

//create your first component
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Jumbotron />
        <div className="row justify-content-between mb-5">
          <Card />
          <Card />
          <Card />
          <Card />
		  </div>
		  <div className="mt-5">
		  <Footer/>
		  </div>
        
      </div>
    </div>
  );
};

export default Home;
