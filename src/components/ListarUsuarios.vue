<template>
  <div>
    <div class="card">
      <div class="card-header">Clientes</div>

      <div class="card_body">
        <table class="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Apellidos</th>
              <th>Telefono</th>
              <th>Email</th>
              <th>Dirección</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="cliente in clientes" :key="cliente.pkcliente">
              <td>{{ cliente.pkcliente }}</td>
              <td>{{ cliente.Nombre }}</td>
              <td>{{ cliente.apellidos }}</td>
              <td>{{ cliente.telefono }}</td>
              <td>{{ cliente.email }}</td>
              <td>{{ cliente.dirección }}</td>
              <td>
                <div class="btn-group" role="label" aria-label="">
                  |<router-link :to="{name:'listarcliente',param:{id:cliente.pkcliente}}" class="btn btn-info">Editar</router-link> |
                  |<button
                    type="button"
                    v-on:click="borrarArticulo(cliente.pkcliente)"
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

<style>
td {
  color: black;
}
</style>

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

    borrarArticulo(id) {
      console.log(id);

      axios.delete("https://localhost:7294/Cliente/Borrar/" + id);

      window.location.href = "listarcliente";
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