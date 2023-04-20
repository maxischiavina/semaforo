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
		setRojo("BRILLO"), setAmarillo("amarillo"), setVerde("verde");
		}
	function cambiarEstadoAmarillo(){
		setAmarillo("BRILLO"), setRojo("rojo"), setVerde("verde");
	}
	function cambiarEstadoVerde(){
		setVerde("BRILLO"), setRojo("rojo"), setAmarillo("amarillo");
	}

	return (
		<div className="d-flex justify-content-center align-items-center mt-5">
		<div className="bg-dark rounded">
			<div className="d-grid gap-3 col-1 mx-auto justify-content-center container">
  			<button className={"rounded-circle bg-danger fs-1 " + luz} onClick={cambiarEstadoRojo}>{rojo}</button>
  			<button className={"rounded-circle bg-warning fs-1 " + luz} onClick={cambiarEstadoAmarillo}>{amarillo}</button>
			  <button className={"rounded-circle bg-success fs-1 " + luz} onClick={cambiarEstadoVerde}>{verde}</button>
</div>
		</div>
		</div>
	);
};

export default Home;
