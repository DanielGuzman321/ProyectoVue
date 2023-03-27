<template>
  <div class="container">
    <div class="card">
      <div class="card-header" style="font-weight: bold; color: white;">Agregar usuario</div>
      <div class="card-body">
        <form v-on:submit.prevent="agregarRegistro">
          <div class="form-group">
            <label for=""  style="font-weight: bold; color: black;">User:</label>
            <input
              type="text"
              class="form-control"
              name="user"
              v-model="usuarios.user"
              aria-describedby="helpId"
              id="user"
              placeholder="Nombre de usuario"
            />
            <small id="helpId" class="form-text" text-muted
              >Ingresa el nombre de usuario</small
            >
          </div>
          <div class="form-group">
            <label for=""  style="font-weight: bold; color: black;">Password:</label>
            <input
              type="text"
              class="form-control"
              name="password"
              v-model="usuarios.password"
              aria-describedby="helpId"
              id="password"
              placeholder="Password"
            />
            <small id="helpId" class="form-text" text-muted
              >Ingresa la contraseña</small
            >
          </div>
          <div class="form-group">
            <label for=""  style="font-weight: bold; color: black;">FkEmpleado:</label>
            <input
              type="text"
              class="form-control"
              name="fkEmpleado"
              v-model="usuarios.fkEmpleado"
              aria-describedby="helpId"
              id="fkEmpleado"
              placeholder="FkEmpleado"
            />
            <small id="helpId" class="form-text" text-muted
              >Ingresa el fkEmpleado</small
            >
          </div>
          <div class="form-group">
            <label for=""  style="font-weight: bold; color: black;">FkRol:</label>
            <input
              type="text"
              class="form-control"
              name="fkRol"
              v-model="usuarios.fkRol"
              aria-describedby="helpId"
              id="fkRol"
              placeholder="FkRol"
            />
            <small id="helpId" class="form-text" text-muted
              >Ingresa el fkRol</small
            >
          </div>
          <br />
          <div class="btn-group" role="group">
            |<button type ="submit" class="btn btn-success">Agregar</button>
            |<router-link :to="{ name: 'listarusuario' }" class="btn btn-danger"
              >Cancelar</router-link>|
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style>
.card-header{
text-align: center;
color: black;
background: rgb(69, 66, 71);
}


</style>

<script>
import axios from "axios";
export default {
  data() {
    return {
      usuarios: {},
    };
  },

  methods: {
    agregarRegistro() {
      console.log(this.usuarios);

      var cuerpo = {
        user: this.usuarios.user,
        password: this.usuarios.password,
        fkEmpleado: this.usuarios.fkEmpleado,
        fkRol: this.usuarios.fkRol,
      };

      axios.post("https://localhost:7294/Usuario", cuerpo).then((result) => {

      if (result.status == 200) {
      document.getElementById("alert").style.display = "block";
      document.getElementById('botonesopcion').style.display="none";
      document.getElementById('finaliza').style.display="block";
      console.log(result);
      
      }
      })   
      window.location.href = "/listarusuario";
    }
  }
}
</script>