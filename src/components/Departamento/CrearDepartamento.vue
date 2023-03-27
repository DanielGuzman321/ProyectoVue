<template>
  <nav class="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
  <!-- Avatar image in top left corner -->
  <img src="../assets/logo.svg" style="width:75%">
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
    <div class="container">
      <div class="card">
        <div class="card-header" style="font-weight: bold; color: white;">Agregar departamento</div>
        <div class="card-body">
          <form v-on:submit.prevent="agregarRegistro">
            <div class="form-group">
              <label for=""  style="font-weight: bold; color: black;">Nombre:</label>
              <input
                type="text"
                class="form-control"
                name="nombre"
                v-model="departamentos.nombre"
                aria-describedby="helpId"
                id="nombre"
                placeholder="Nombre del departamento"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el nombre del departamento</small
              >
            </div>
            <br />
            <div class="btn-group" role="group">
              |<button type ="submit" class="btn btn-success">Agregar</button>
              |<router-link :to="{ name: 'listardepartamento' }" class="btn btn-danger"
                >Cancelar</router-link>|
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  </template>
  
 <style>
 .card-header
{
    font-style: italic;
    color: black;
    text-align: center;
}
label {
    font-weight: bold;
    color: black;
}
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
 </style>

  <script>
  import axios from "axios";
  export default {
    data() {
      return {
        departamentos: {},
      };
    },
  
    methods: {
      agregarRegistro() {
        console.log(this.departamentos);
  
        var cuerpo = {
          nombre: this.departamentos.nombre,
        };
  
        axios.post("https://localhost:7294/Departamento", cuerpo).then((result) => {

        if (result.status == 200) {
        document.getElementById("alert").style.display = "block";
        document.getElementById('botonesopcion').style.display="none";
        document.getElementById('finaliza').style.display="block";
        console.log(result);
        
        }
        })   
        window.location.href = "/listardepartamento";
      }
    }
  }
  </script>