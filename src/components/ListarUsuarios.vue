<template>
    <div>
      <div class="card">
        <div class="card-header">Usuarios</div>
  
        <div class="card_body">
          <table class="table">
            <thead>
              <tr>
                <th>PkUsuario</th>
                <th>User</th>
                <th>Password</th>
                <th>Fecha de Registro</th>
                <th>FkEmpleado</th>
                <th>FkRol</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="usuario in usuarios" :key="usuario.PkUsuario">
                <td>{{ usuario.PkUsuario }}</td>
                <td>{{ usuario.User }}</td>
                <td>{{ usuario.Password }}</td>
                <td>{{ usuario.FkEmpleado }}</td>
                <td>{{ usuario.FkRol }}</td>
                <td>
                  <div class="btn-group" role="label" aria-label="">
                    |<router-link :to="{name:'editar',param:{id:usuario.PkUsuario}}" class="btn btn-info">Editar</router-link> |
                    |<button
                      type="button"
                      v-on:click="borrarArticulo(usuario.PkUsuario)"
                      class="btn btn-danger"
                    >
                      Eliminar</button
                    >|
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>

  <script >
  import axios from "axios";
  export default {
    data() {
      return {
        usuarios: [],
      };
    },
    created: function () {
      this.consultarArticulos();
    },
    methods: {
      consultarArticulos() {
        axios.get("https://localhost:7294/Usuario").then((result) => {
          console.log(result.data);
          this.articulos = result.data;
        });
      },
  
      borrarArticulo(id) {
        console.log(id);
  
        axios.delete("https://localhost:7294/Usuario/Borrar/" + id);
  
        window.location.href = "listarusuario";
      },
    },
  };
  </script>

  <!-- <template>
    <div class="card-header">Usuarios</div>
    <div v-if="result" class="content">
      <p>PkUsuario: {{result.PkUsuario}}</p>
      <p>Usuario: {{result.User}}</p>
      <p>Password: {{result.Password}}</p>
      <p>FechadeRegistro: {{result.FechaRegistro}}</p>
      <p>FkEmpleado: {{result.FkEmpleado}}</p>
      <p>FkRol: {{result.FkRol}}</p> 

    </div>
  </template>
  
  <script>
  import axios from "axios";
  export default {
    data: () => ({
      result: null
    }),
    created() {
      axios.get("https://localhost:7294/Usuario").then((result) => {
        this.result = result.data;
      })
    }
  };
  </script>
  
  <style scoped lang="scss">
  </style> -->