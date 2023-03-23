<template>
  <div>
    <div class="card">
      <center>
      <div class="card-header" style="font-weight: bold; color: black;">Clientes</div></center>

      <div class="card_body">
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
                  <router-link :to="{name:'editarcliente'}" class="btn btn-info">Editar</router-link> 
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
        var pregunta=window.confirm('Esta se seguro de eliminar este registro?');
  
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
td {
  color: black;
}
table {
  border-collapse: collapse;
  width: 100%;
  margin: auto;
  height: 100%;
}

tr {
  border-bottom: 1px solid #ddd;
}
tr:nth-child(even) {
  background-color: rgba(7, 43, 43, 0.4);
}
</style>