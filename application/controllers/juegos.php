<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class juegos extends CI_Controller {

    function __construct() {
        parent::__construct();
    }

    public function index() {
        /*
         * Aqui vamos a cargar el juego
         */
        $datos = array(
            "nombre" => $this->input->post("nombre")
        );
        $this->load->view("juego", $datos);
    }

}
