<template>
    <div class="container">
      <div class="card">
        <div class="card-header" style="font-weight: bold; color: white;">Editar Usuario</div>
        <div class="card-body">
          <form v-on:submit.prevent="EditarUsuario">
            <div class="form-group">
              <label for="" style="font-weight: bold; color: black;">User:</label>
              <input
                type="text"
                class="form-control"
                name="user"
                v-model="form.user"
                aria-describedby="helpId"
                id="user"
                placeholder="Usuario"
              />
              <small id="helpId" class="form-text" text-muted>Ingresa tu usuario</small>
            </div><br>
            <div class="form-group">
              <label for="" style="font-weight: bold; color: black;">contraseña:</label>
              <input
                type="text"
                class="form-control"
                name="password"
                id="password"
                v-model="form.password"
                aria-describedby="helpId"
                placeholder="Password"
              />
              <small id="helpId" class="form-text" text-muted>Ingresa la contraseña</small>
            </div><br>
            <div class="form-group">
              <label for="" style="font-weight: bold; color: black;">FkEmpleado:</label>
              <select class="form-control" name="fkempleado" id="fkempleado" v-model="form.fkempleado">
              <option v-for="empleado in Empleados" :value="empleado.pkEmpleado" :key="empleado.pkEmpleado">{{empleado.nombre}}</option>
            </select>
            </div><br/>
            <div class="form-group">
              <label for="" style="font-weight: bold; color: black;">FkRol</label>
              <select class="form-control" name="fkrol" id="fkrol" v-model="form.fkrol">
              <option v-for="rol in Roles" :value="rol.pkRol" :key="rol.pkRol">{{rol.nombre}}</option>
            </select>
            </div><br/>
  
            <div class="btn-group" role="group">
              |<button type="submit" class="btn btn-success"> <i class="fa fa-floppy-o" aria-hidden="true"></i> Guardar cambios</button>|
              |<router-link :to="{ name: 'listarusuario' }" class="btn btn-danger"><i class="fa fa-times" aria-hidden="true"></i> Cancelar</router-link>|
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
 
<script>
import axios from 'axios';
export default{
    name: "Editar",
    components:{

    },
    data:function(){
        return{
            pkUsuario: null,
            form:{
                "pkUsuario":"",
                "user":"",
                "password":"",
                "fkempleado":"",
                "fkrol":"",
            },
            Empleados:[],
            Roles:[]
        }
    },
    created: function () {
        this.consultar();
      },

    methods: {
      EditarUsuario() {
        axios.put("https://localhost:7294/Usuario?id=" + this.pkUsuario, this.form).then
                (result => {
                    if (result.status == 200) {
                        console.log(result.data.result);
                    }
                    this.$router.push("/listarusuario")

                });
      },
      consultar(){
        axios.get("https://localhost:7294/Empleado").then((result) => {
        console.log(result.data.result);
        this.Empleados = result.data.result;
      });
      axios.get("https://localhost:7294/Rol").then((result) => {
        console.log(result.data.result);
        this.Roles = result.data.result;
      });
      }
    },
    mounted:function(pkUsuario){
        this.pkUsuario = this.$route.params.pkUsuario;
        console.log(this.pkUsuario);
        axios.get("https://localhost:7294/Usuario/" + this.pkUsuario)
        .then(datos=>{          
            this.form.pkUsuario = datos.data.value.result.pkUsuario;
            this.form.user = datos.data.value.result.user;
            this.form.password = datos.data.value.result.password;
            this.form.fkempleado = datos.data.value.result.fkempleado;
            this.form.fkrol = datos.data.value.result.fkrol;
            console.log(this.form);
        });
      },
}
</script>