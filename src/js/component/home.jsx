import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [rojo, setRojo] = useState("")
	const [amarillo, setAmarillo] = useState("")
	const [verde, setVerde] = useState("")

function handleRed(){
	setRojo("border-white");
	setAmarillo("");
	setVerde("");
}

function handleYellow(){
	setRojo("");
	setAmarillo("border-white");
	setVerde("");
}

function handleGreen(){
	setRojo("");
	setAmarillo("");
	setVerde("border-white");
}


	return (
		<div className="d-flex justify-content-center align-items-center mt-5">
		<div className="bg-dark rounded w-25" style={{maxWidth: "150px"}}>
			<div className="d-grid gap-3 col-1 mx-auto justify-content-center container">
		<button className={"rounded-circle bg-danger fs-1 " + rojo } style={{minWidth: "100px", maxWidth: "100", height: "100px"}} onClick={handleRed}></button>
      <button className={"rounded-circle bg-warning fs-1 " + amarillo } style={{minWidth: "100px", maxWidth: "100", height: "100px"}} onClick={handleYellow}></button>
      <button className={"rounded-circle bg-success fs-1 " + verde } style={{minWidth: "100px", maxWidth: "100", height: "100px"}} onClick={handleGreen}></button>
</div>
		</div>
		</div>
	);
};

export default Home;
