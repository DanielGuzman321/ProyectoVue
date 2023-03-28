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
    <i class="fa fa-user w3-xxlarge"></i>
    <p>Departamento</p>
  </a>
  <a href="/listarempleado" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
    <i class="fa fa-envelope w3-xxlarge"></i>
    <p>Empleado</p>
  </a>
  <a href="/listarfactura" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
    <i class="fa fa-envelope w3-xxlarge"></i>
    <p>Factura</p>
  </a>
  <a href="/listarrol" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
    <i class="fa fa-envelope w3-xxlarge"></i>
    <p>Rol</p>
  </a>
  <a href="/listarusuario" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
    <i class="fa fa-envelope w3-xxlarge"></i>
    <p>Usuario</p>
  </a>
  <a href="/listarpuesto" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
    <i class="fa fa-envelope w3-xxlarge"></i>
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
        <div class="card-header" style="font-weight: bold; color: white;">Agregar factura</div>
        <div class="card-body">
          <form v-on:submit.prevent="agregarRegistro">
            <div class="form-group">
              <label for=""  style="font-weight: bold; color: black;">Razón social:</label>
              <input
                type="text"
                class="form-control"
                name="razonSocial"
                v-model="facturas.razonSocial"
                aria-describedby="helpId"
                id="razonSocial"
                placeholder="Nombre la empresa"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el nombre del empresa</small
              >
            </div>
            <div class="form-group">
              <label for=""  style="font-weight: bold; color: black;">Fecha:</label>
              <input
                type="datetime-local"
                class="form-control"
                name="fecha"
                id="fecha"
                v-model="facturas.fecha"
                aria-describedby="helpId"
                placeholder="DD/MM/AAAA"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa la fecha</small
              >
            </div>
            <div class="form-group">
              <label for=""  style="font-weight: bold; color: black;">RFC:</label>
              <input
                type="text"
                class="form-control"
                name="rfc"
                id="rfc"
                v-model="facturas.rfc"
                aria-describedby="helpId"
                placeholder="RFC"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa la RFC de la empresa</small
              >
            </div>

            <div class="form-group">
              <label for=""  style="font-weight: bold; color: black;">FkCliente:</label>
              <select class="form-control" name="cliente" id="cliente" v-model="facturas.fkCliente">
              <option v-for="cliente in Clientes" :value="cliente.pkCliente" :key="cliente.pkCliente">{{cliente.nombre}}</option>
            </select>
            </div>
            
            <br />
            <div class="btn-group" role="group">
              |<button type ="submit" class="btn btn-success">Agregar</button>
              |<router-link :to="{ name: 'listarfactura' }" class="btn btn-danger"
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

  <script >
  import axios from "axios";
  export default {
    data() {
      return {
        facturas: {},
        Clientes:[],
      };
    },
    created: function () {
        this.consultarCliente();
      },
    methods: {
      agregarRegistro() {
        console.log(this.facturas);
  
        var cuerpo = {
          razonSocial: this.facturas.razonSocial,
          fecha: this.facturas.fecha,
          rfc: this.facturas.rfc,
          fkcliente: this.facturas.fkCliente,
        };
  
        axios.post("https://localhost:7294/Factura", cuerpo).then((result) => {

        if (result.status == 200) {
        document.getElementById("alert").style.display = "block";
        document.getElementById('botonesopcion').style.display="none";
        document.getElementById('finaliza').style.display="block";
        console.log(result);
        
        }
        })   
        window.location.href = "/listarfactura";
      },
      consultarCliente() {
            axios.get("https://localhost:7294/Cliente").then((result) => {
            console.log(result.data.result);
            this.Clientes = result.data.result;});
       },
    
    }
  }
  </script>