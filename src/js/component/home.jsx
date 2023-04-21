import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [rojo, setRojo] = useState("rojo")
	const [amarillo, setAmarillo] = useState("amarillo")
	const [verde, setVerde] = useState("verde")
	const [luz, setLuz] = useState("border-white")

	function cambiarEstadoRojo(){
		setRojo("Brillo"), setAmarillo("amarillo"), setVerde("verde");
		}
	function cambiarEstadoAmarillo(){
		setAmarillo("Brillo"), setRojo("rojo"), setVerde("verde");
	}
	function cambiarEstadoVerde(){
		setVerde("Brillo"), setRojo("rojo"), setAmarillo("amarillo");
	}

	return (
		<div className="d-flex justify-content-center align-items-center mt-5">
		<div className="bg-dark rounded w-25" style={{maxWidth: "150px"}}>
			<div className="d-grid gap-3 col-1 mx-auto justify-content-center container">
		<button className={"rounded-circle bg-danger fs-1 " + luz} style={{minWidth: "100px", maxWidth: "100", height: "100px"}} onClick={cambiarEstadoRojo}>{rojo}</button>
      <button className={"rounded-circle bg-warning fs-1 " + luz} style={{minWidth: "100px", maxWidth: "100", height: "100px"}} onClick={cambiarEstadoAmarillo}>{amarillo}</button>
      <button className={"rounded-circle bg-success fs-1 " + luz} style={{minWidth: "100px", maxWidth: "100", height: "100px"}} onClick={cambiarEstadoVerde}>{verde}</button>
</div>
		</div>
		</div>
	);
};

export default Home;
