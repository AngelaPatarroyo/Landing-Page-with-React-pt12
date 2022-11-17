import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

//include images into your bundle

//create your first component
const Home = () => {

  const card = [
    {img:{src:"https://source.unsplash.com/random/500x400?2", alt:"Image"},btn:{href:"#", text:"Call to Action"},title:"Qué Lindo",text:"Nullam aliquet libero ante, eget pharetra lorem vestibulum nec. Sed mollis, tortor rutrum condimentum elementum, magna eros lobortis massa, sed pretium tellus arcu ac velit."},
    {img:{src:"https://source.unsplash.com/random/500x400?3", alt:"Image"},btn:{href:"#", text:"Call to Action"},title:"Me Encanta",text:"Nullam aliquet libero ante, eget pharetra lorem vestibulum nec. Sed mollis, tortor rutrum condimentum elementum, magna eros lobortis massa, sed pretium tellus arcu ac velit. "},
    {img:{src:"https://source.unsplash.com/random/500x400?4", alt:"Image"},btn:{href:"#", text:"Call to Action"},title:"De todo",text:"Nullam aliquet libero ante, eget pharetra lorem vestibulum nec. Sed mollis, tortor rutrum condimentum elementum, magna eros lobortis massa, sed pretium tellus arcu ac velit. "},
    {img:{src:"https://source.unsplash.com/random/500x400?5", alt:"Image"},btn:{href:"#", text:"Call to Action"},title:"Qué Bonito",text:"Nullam aliquet libero ante, eget pharetra lorem vestibulum nec. Sed mollis, tortor rutrum condimentum elementum, magna eros lobortis massa, sed pretium tellus arcu ac velit. "},
  ]

  
  return (
    <div>
      <Navbar />
      <div className="container">
        <Jumbotron />
        <div className="row justify-content-between mb-5">
          {card.map((card, index) =>{
            return (
              <Card key={index} img={card.img} title={card.title} text={card.text}/>
            )
          })}
          
          
		  </div>
		  <div className="mt-5">
		  <Footer/>
		  </div>
        
      </div>
    </div>
  );
};

export default Home;
