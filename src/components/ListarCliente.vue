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
    <p>Ver Cliente</p>
  </a>
  <a href="/crearcliente" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
    <i class="fa fa-user w3-xxlarge"></i>
    <p>Crear Clientes</p>
  </a>
  <a href="#contact" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
    <i class="fa fa-envelope w3-xxlarge"></i>
    <p>CONTACT</p>
  </a>
</nav>

<!-- Navbar on small screens (Hidden on medium and large screens) -->
<div class="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
  <div class="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
    <a href="/Dashboard" class="w3-bar-item w3-button" style="width:25% !important">Home</a>
    <a href="/listarcliente" class="w3-bar-item w3-button" style="width:25% !important">Ver</a>
    <a href="/crearcliente" class="w3-bar-item w3-button" style="width:25% !important">Crear</a>
    <a href="#contact" class="w3-bar-item w3-button" style="width:25% !important">CONTACT</a>
  </div>
</div>
  <div class="w3-padding-large" id="main">

    <div class="card">
      <center>
      <div class="card-header" style="font-weight: bold; color: black;">Clientes</div></center>

      <div class="card_body">
        <button class="button button1"><RouterLink to="/crearcliente" class="btn btn-info">Crear</RouterLink></button>
        
        <table class="table">
          <thead>
            <tr>
              <th style="font-weight: bold;">Id</th>
              <th style="font-weight: bold;">Nombre</th>
              <th style="font-weight: bold;">Apellidos</th>
              <th style="font-weight: bold;">Telefono</th>
              <th style="font-weight: bold;">Email</th>
              <th style="font-weight: bold;">Dirección</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="cliente in clientes" :key="cliente.pkcliente">
              <td>{{ cliente.pkCliente }}</td>
              <td>{{ cliente.nombre }}</td>
              <td>{{ cliente.apellidos }}</td>
              <td>{{ cliente.telefono }}</td>
              <td>{{ cliente.email }}</td>
              <td>{{ cliente.direccion }}</td>
              <td>
                <div class="btn-group" role="label" aria-label="">
                  <router-link :to="{ path: '/editarcliente' }" class="btn btn-info">Editar</router-link> 
                  |<button type="button" v-on:click="borrarCliente(cliente.pkCliente)"  class="btn btn-danger">
                      Eliminar</button>  
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>



<script>
import axios from "axios";
export default {
  data() {
    return {
      clientes: [],
    };
  },
  created: function () {
    this.consultarClientes();
    
  },
  methods: {
    consultarClientes() {
      axios.get("https://localhost:7294/Cliente").then((result) => {
        console.log(result.data.result);
        this.clientes = result.data.result;
     

      });
    },
    borrarCliente(id) {
        var pregunta=window.confirm('Desea Eliminar el Cliente?');
  
        if(pregunta===true){
          axios.delete("https://localhost:7294/Cliente?id=" + id);
          window.location.href = "listarcliente";
          
        }else{
          
        }  
  
      }
      
    
  },
};
</script>


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