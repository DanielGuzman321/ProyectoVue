<template>
<nav class="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
  <!-- Avatar image in top left corner -->
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFSvfxb61950EiMknOooovBbcxJYBvJIFGQ9WUZBcoOd3C-dhH2D9q3yRbSgLkA4ZF0tw&usqp=CAU" style="width:75%">
  <a href="/Dashboard" class="w3-bar-item w3-button w3-padding-large w3-black">
    <i class="fa fa-home w3-xxlarge"></i>
    <p>Home</p>
  </a>
  <a href="/listarcliente" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
    <i class="fa fa-eye w3-xxlarge"></i>
    <p>Cliente</p>
  </a>
  <a href="/listardepartamento" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
    <i class="fa fa-database w3-xxlarge"></i>
    <p>Departamento</p>
  </a>
  <a href="/listarempleado" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
    <i class="fa fa-address-book-o w3-xxlarge" ></i>
    <p>Empleado</p>
  </a>
  <a href="/listarfactura" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
    <i class="fa fa-industry w3-xxlarge" ></i>
    <p>Factura</p>
  </a>
  <a href="/listarrol" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
    <i class="fa fa-repeat w3-xxlarge" ></i>
    <p>Rol</p>
  </a>
  <a href="/listarusuario" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
    <i class="fa fa-users w3-xxlarge"></i>
    <p>Usuario</p>
  </a>
  <a href="/listarpuesto" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
    <i class="fa fa-id-card-o w3-xxlarge" ></i>
    <p>Puesto</p>
  </a>
</nav>

<!-- Navbar on small screens (Hidden on medium and large screens) -->
<div class="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
  <div class="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
    <a href="/Dashboard" class="w3-bar-item w3-button" style="width:25% !important">Home</a>
    <a href="/listarcliente" class="w3-bar-item w3-button" style="width:25% !important">Cliente</a>
    <a href="/listardepartamento" class="w3-bar-item w3-button" style="width:25% !important">Depa</a>
    <a href="/listarempleado" class="w3-bar-item w3-button" style="width:25% !important">Emple</a>
    <a href="/listarfactura" class="w3-bar-item w3-button" style="width:25% !important">Fact</a>
    <a href="/listarrol" class="w3-bar-item w3-button" style="width:25% !important">Rol</a>
    <a href="/listarusuario" class="w3-bar-item w3-button" style="width:25% !important">User</a>
    <a href="/listarpuesto" class="w3-bar-item w3-button" style="width:25% !important">Puesto</a>
  </div>
</div>
<div class="w3-padding-large" id="main">
    <div class="card">
      <div class="card-header" style="font-weight: bold; color: white;">Roles</div>

      <div class="butt-fun">|
      <router-link :to="{ name: 'crearrol' }" class="btn btn-success"><i class="fa fa-plus" aria-hidden="true"></i> Crear rol</router-link>|
      </div>

      <div class="card_body">
        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <th style="font-weight: bold;">pkRol</th>
              <th style="font-weight: bold;">Nombre</th>
              <th style="font-weight: bold;">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="rol in Roles" :key="rol.pkRol">
              <td>{{ rol.pkRol }}</td>
              <td>{{ rol.nombre }}</td>
              <td>
                  <div class="btn-group" role="label" aria-label="">
                  <button type="button" v-on:click="editarRol(rol.pkRol)" class="btn btn-warning">
                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Editar</button>
                </div>
                <div class="btn-group" role="label" aria-label="">
                  |<button type="button" v-on:click="borrarRol(rol.pkRol)"  class="btn btn-danger">
                    <i class="fa fa-trash" aria-hidden="true"></i> Eliminar</button>  
                </div>
              </td>           
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style>
body, h1,h2,h3,h4,h5,h6 {font-family: "Montserrat", sans-serif}
.w3-row-padding img {margin-bottom: 12px}
/* Set the width of the sidebar to 120px */
.w3-sidebar {width: 120px;background: #222;}
/* Add a left margin to the "page content" that matches the width of the sidebar (120px) */
#main {margin-left: 120px}
/* Remove margins from "page content" on small screens */
@media only screen and (max-width: 600px) {#main {margin-left: 0}}

table {
  border-collapse: collapse;
  width: 100%;
  margin: auto;
  height: 100%;
  color: #19948e;
}

td {
  border-bottom: 1px solid #19948e;
}
td:nth-child(even) {
  background-color: rgba(22, 172, 172, 0.4);
}
.button {
  background-color: #3dcaae; /* Green */
  border: none;
  color: rgb(93, 222, 227);
  padding: 5px 6px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 5px;
  margin: 2px 1px;
  transition-duration: 0.4s;
  cursor: pointer;
}

.button1 {
  background-color: white; 
  color: black; 
}

</style>

<script>
import axios from "axios";
export default {
  data() {
    return {
      Roles: [],
    };
  },
  created: function () {
    this.consultarRol();    
  },
  methods: {
      consultarRol(){
      axios.get("https://localhost:7294/Rol").then((result) => {
        console.log(result.data.result);
        this.Roles = result.data.result;
      });
    },
    borrarRol(pkRol) {
      console.log(pkRol);

      axios.delete("https://localhost:7294/Rol?id=" + pkRol);

      window.location.href = "listarrol";
    },
    editarRol(pkRol){
      console.log(pkRol);
      this.$router.push("/editarRol/" + pkRol)
    }
 },
};
</script>