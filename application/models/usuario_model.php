<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class usuario_model extends CI_Model {

    function __construct() {
        parent::__construct();
    }

    public function guardar($usuario) {
        if ($this->db->insert("usuario", $usuario)) {
            return TRUE;
        } else {
            return FALSE;
        }
    }

    public function buscar($id) {
        $where = array(
            "id" => $id
        );
        $this->db->where($where);
        return $this->db->get("usuario")->result();
    }

    public function eliminar($id) {
        $where = array(
            "id" => $id
        );
        $this->db->where($where);
        if ($this->db->delete("usuario")) {
            return TRUE;
        } else {
            return FALSE;
        }
    }

}
