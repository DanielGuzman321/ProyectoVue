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
    <div class="container-fluid">
        <div class="card">
            <div class="card-header">Agregar Cliente</div>
            <div class="card-body">
                <form v-on:submit.prevent="formulario">
                    <div class="row">
                        <div class="col">

                            <div class="form-group">
                                <label for="nombre">nombre:</label>
                                <input type="text" class="form-control" name="nombre" aria-describedby="helpId" id="nombre"
                                    placeholder="usuario" v-model="Clientes.nombre" />
                                <small id="helpId" class="form-text" text-muted>Ingresa tu correo de usuario</small>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label for="apellidos">apellidos:</label>
                                <input type="text" class="form-control" name="apellidos" id="apellidos"
                                    aria-describedby="helpId" placeholder="apellidos" v-model="Clientes.apellidos" />
                                <small id="helpId" class="form-text" text-muted>Ingresa tu contraseña</small>
                            </div>
                        </div>

                    </div>
                    <br>
                    <div class="row">
                        <div class="col">

                            <div class="form-group">
                                <label for="telefono" >Telefono:</label>
                                <input type="text" class="form-control" name="telefono" id="telefono"
                                    aria-describedby="helpId" placeholder="telefono" v-model="Clientes.telefono" />
                            </div>
                        </div>
                        <div class="col">

                            <div class="form-group">
                                <label for="email">email:</label>
                                <input type="email" class="form-control" name="email" id="email" aria-describedby="helpId"
                                    placeholder="email" v-model="Clientes.email" />
                            </div>
                        </div>
                        <div class="col">

                            <div class="form-group">
                                <label for="direccion">direccion:</label>
                                <input type="text" class="form-control" name="email" id="direccion" aria-describedby="helpId"
                                    placeholder="direccion" v-model="Clientes.direccion" />
                            </div>
                        </div>
                    </div>
                    <br>
                    <div class="row">
                        <div class="btn-group" role="group" id="botonesopcion">
                            |<button type="submit" class="btn btn-outline-primary">Agregar</button>|
                            |<router-link :to="{ name: 'listarcliente' }" class="btn btn-outline-danger">Cancelar</router-link>|
                        </div>
                        <router-link :to="{ name: 'listarcliente' }" class="btn btn-outline-primary" id="finaliza" style="display: none;">Finalizar</router-link>
                    </div>
                    <br>
                    <div class="row">
                        <div id="alert" style="display:none;" class="alert alert-success" role="alert">
                            {{ smg }}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</template>
  
<script>
import axios from 'axios';
export default {
    name: "postcliente",
    components: {

    },

    data() {
        return {
            Clientes: {},
            smg: "",
        };
    },
    methods: {
        formulario() {
            
            var cuerpo = {
                nombre: this.Clientes.nombre,
                apellidos: this.Clientes.apellidos,
                telefono: this.Clientes.telefono,
                email: this.Clientes.email,
                direccion: this.Clientes.direccion
            };

            axios.post('https://localhost:7294/Cliente', cuerpo).then((result) => {

                if (result.status == 200) {
                    document.getElementById("alert").style.display = "block";
                    document.getElementById('botonesopcion').style.display="none";
                    this.smg = "Se agrego correctamente";
                    document.getElementById('finaliza').style.display="block";
                    console.log(result);
                }
                // window.location.href = "dashboard";

            })

            console.log(cuerpo)
        }
    }
}
</script>

<style scoped>
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