import React, { useState, useEffect } from "react"; // Importa useState y useEffect
import LogoSprinkles from "./assets/images/sprinkles-cupcake.png";
import ImageSprinklesOne from "./assets/images/image-sprinkles-one.png";
import ImageSprinklesTwo from "./assets/images/image-sprinkles-two.png";
import ImageSprinkles from "./assets/images/image-sprinkles-three.png";
import Touch from "./assets/images/touch.png";
import "./assets/style.css";

const frames = [
	{
	  logo: LogoSprinkles,
	  element: ImageSprinklesOne,
	  final: Touch,
	},
	{
	  logo: LogoSprinkles,
	  element: ImageSprinklesTwo,
	  final: Touch,
	},
	{
	  logo: LogoSprinkles,
	  element: ImageSprinkles,
	  final: Touch,
	},
];

function HomeScreen() {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
	  const interval = setInterval(() => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % frames.length);
	  }, 3000);
  
	  return () => clearInterval(interval);
	}, []);
  
	return (
	  <div className="carousel">
		{frames.map((frame, index) => (
		  <div
			key={index}
			className={`frame ${index === currentIndex ? "active" : "inactive"}`}
		  >
			<img className="img" alt="Frame" src={frame.logo} />
			<div className="overlap-group-wrapper">
			  <div className="overlap-group">
				<img
				  className="element"
				  alt="Element sprinkles"
				  src={frame.element}
				/>
			  </div>
			</div>
			<img className="final" alt="Final COVER" src={frame.final} />
		  </div>
		))}
	  </div>
	);
}

export default HomeScreen;
