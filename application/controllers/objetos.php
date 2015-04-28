<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Objetos extends CI_Controller{
	
	public function index(){
		echo 'Hola desde el controador y el vacile';
	}
	
	function holaMundo($nombre = null, $apellido=null){
		if(is_null($nombre) && is_null($apellido)){
			echo "Se mostrara todo";
		}elseif(is_null($apellido)){
			echo 'se mostraran el nombre '.$nombre;
		}else{ 
			echo'se mostraran el nombre apellidos '.$nombre." ".$apellido;
		}
	}

}
?>