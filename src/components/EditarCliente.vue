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
            <div class="card-header">Actualizar Cliente</div>
            <small id="helpId" class="form-text" text-muted>Modifique los campos solo son ejemplos!!!!</small>
            <div class="card-body">
                <form v-on:submit.prevent="formulario">
                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                                <label for="user">ID:</label>
                                <input type="number" class="form-control" name="user" aria-describedby="helpId"
                                    id="pkCliente" placeholder="ID" v-model="pkCliente" />
                                <small id="peticion" class="form-text" text-muted>Ingresa id del registro que desea
                                    actualizar</small>
                                <br>
                                <br>
                                <div id="botonbusca">
                                    <button type="button" class="btn btn-outline-primary"
                                        v-on:click="Buscar(pkCliente)">Buscar</button>
                                    &#160
                                    <router-link :to="{ name: 'listarcliente' }" class="btn btn-outline-danger">Cancelar</router-link>
                                </div>
                            </div>
                        </div>
                        <div id="user-apellidos" style="display: none;">
                            <div class="col">

                                <div class="form-group">
                                    <label for="nombre">Nombre:</label>
                                    <input type="text" class="form-control" name="nombre" aria-describedby="helpId"
                                        id="nombre" placeholder="nombre" value="" />



                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <label for="apellidos">Apellidos:</label>
                                    <input type="text" class="form-control" name="apellidos" id="apellidos"
                                        aria-describedby="helpId" placeholder="apellidos" value="" />

                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div id="fk-empleado-rol" class="row" style="display: none;">
                        <div class="col">

                            <div class="form-group">
                                <label for="telefono">Telefono:</label>
                                <input type="text" class="form-control" name="telefono" id="telefono"
                                    aria-describedby="helpId" placeholder="telefono" value="" />
                            </div>
                        </div>
                        <div class="col">

                            <div class="form-group">
                                <label for="email">Email:</label>
                                <input type="email" class="form-control" name="email" id="email" aria-describedby="helpId"
                                    placeholder="email" value="" />
                            </div>
                        </div>
                        <div class="col">

                            <div class="form-group">
                                <label for="direccion">Direccion:</label>
                                <input type="text" class="form-control" name="direccion" id="direccion" aria-describedby="helpId"
                                    placeholder="direccion" value="" />
                            </div>
                        </div>
                    </div>
                    <br>
                    <div id="botoncerrar" style="display: none;">|<router-link :to="{name:'listarcliente'}" type="button" class="btn btn-outline-primary">Finalizar</router-link>|</div>
                    <div id="botones" class="row" style="display: none;">
                        <div class="btn-group" role="group">
                            |<button type="submit" class="btn btn-outline-primary">Actualizar</button>|
                            |<router-link :to="{ name: 'listarcliente' }" class="btn btn-outline-danger">Cancelar</router-link>|
                        </div>

                    </div>
                    <br>
                    <div class="row">
                        <div id="alert" style="display:none;" class="alert alert-success" role="alert">
                            {{ smg }}
                        </div>
                        <div id="alert2" class="alert alert-warning" role="alert" style="display:none;">{{ bad }}</div>
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
    color: rgb(211, 44, 44);
}

</style>
<script>
import axios from 'axios'
export default {
    name: 'putcliente',
    components: {

    },

    data() {
        return {
            Clientes: [],
            smg: "",
            pkCliente: 0,
            bad: "",
        };
    },
    methods: {
        formulario() {
            var cuerpo = {
                pkCliente: this.pkCliente,
                nombre: document.getElementById('nombre').value,
                apellidos: document.getElementById('apellidos').value,
                telefono: document.getElementById('telefono').value,
                email: document.getElementById('email').value,
                direccion: document.getElementById('direccion').value,


            };
            axios.put('https://localhost:7294/Cliente?id=' + this.pkCliente, cuerpo).then((resutl) => {
                console.log(resutl.data);
                document.getElementById("alert").style.display = "block";
                document.getElementById('botones').style.display = "none";
                this.smg = "Se Guardaron los cambios";
                document.getElementById('botoncerrar').style.display="block";
            })
        },
        Buscar(id) {
            if (id > 0) {
                axios.get('https://localhost:7294/Cliente?id=' + id).then((response) => {

                    this.Clientes = response.data.result
                    if (this.Clientes == null) {
                        document.getElementById('alert2').style.display = "block";
                        this.bad = "No hay ningun registro de ese ID"
                    } else {
                        document.getElementById('botonbusca').style.display = "none";
                        document.getElementById('peticion').style.display = "none";
                        document.getElementById('user-apellidos', 'fk-empleado-rol').style.display = "block";
                        document.getElementById('fk-empleado-rol').style.display = "block";
                        document.getElementById('botones').style.display = "block";
                        document.getElementById('alert2').style.display = "none";


                        document.getElementById('nombre').value = this.Clientes[0].nombre;
                        document.getElementById('apellidos').value = this.Clientes[0].apellidos;
                        document.getElementById('telefono').value = this.Clientes[0].telefono;
                        document.getElementById('email').value = this.Clientes[0].email;
                        document.getElementById('direccion').value = this.Clientes[0].direccion;

                    }
                })
            } else {
                document.getElementById('alert2').style.display = "block";
                this.bad = "No hay valor de ID"
            }


        }

    },

}

</script>