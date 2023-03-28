<template>
    <div class="container">
      <div class="card">
        <div class="card-header" style="font-weight: bold; color: white;">Editar Empleado</div>
        <div class="card-body">
          <form v-on:submit.prevent="editarEmpleado">
            <div class="form-group">
              <label for="" style="font-weight: bold; color: black;">Nombre:</label>
              <input
                type="text"
                class="form-control"
                name="nombre"
                v-model="form.nombre"
                aria-describedby="helpId"
                id="nombre"
                placeholder="Nombre"
              />
              <small id="helpId" class="form-text" text-muted>Ingresa tu Nombre</small>
            </div><br>
            <div class="form-group">
              <label for="" style="font-weight: bold; color: black;">Apellidos:</label>
              <input
                type="text"
                class="form-control"
                name="apellidos"
                id="apellidos"
                v-model="form.apellidos"
                aria-describedby="helpId"
                placeholder="Apellidos"
              />
              <small id="helpId" class="form-text" text-muted>Ingresa su Apellidos</small>
            </div><br>
            <div class="form-group">
              <label for="" style="font-weight: bold; color: black;">Dirección:</label>
              <input
                type="text"
                class="form-control"
                name="direccion"
                id="direccion"
                v-model="form.direccion"
                aria-describedby="helpId"
                placeholder="Dirección"
              />
              <small id="helpId" class="form-text" text-muted>Ingresa su Dirección</small>
            </div><br/>
            <div class="form-group">
              <label for="" style="font-weight: bold; color: black;">Ciudad</label>
              <input
                type="text"
                class="form-control"
                name="ciudad"
                id="ciudad"
                v-model="form.ciudad"
                aria-describedby="helpId"
                placeholder="ciudad"
              />
              <small id="helpId" class="form-text" text-muted>Ingresa su Ciudad</small>
            </div><br/>
            <div class="form-group">
              <label for="" style="font-weight: bold; color: black;">FkPuesto</label>
              <select class="form-control" name="fkPuesto" id="fkPuesto" v-model="form.fkPuesto">
              <option v-for="puesto in Puestos" :value="puesto.pkPuesto" :key="puesto.pkPuesto">{{puesto.nombre}}</option>
            </select>
            </div><br/>
            <div class="form-group">
              <label for="" style="font-weight: bold; color: black;">FkDepartamento</label>
              <select class="form-control" name="departamento" id="departamento" v-model="form.fkDepartamento">
              <option v-for="departamento in Departamentos" :value="departamento.pkDepartamento" :key="departamento.pkDepartamento">{{departamento.nombre}}</option>
            </select>
            </div><br/> 
  
            <div class="btn-group" role="group">
              |<button type="submit" class="btn btn-success"> <i class="fa fa-floppy-o" aria-hidden="true"></i> Guardar cambios</button>|
              |<router-link :to="{ name: 'listarempleado' }" class="btn btn-danger"><i class="fa fa-times" aria-hidden="true"></i> Cancelar</router-link>|
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
 
<script >
import axios from 'axios';
export default{
    name: "Editar",
    components:{

    },
    data:function(){
        return{
            pkEmpleado: null,
            form:{
                "pkEmpleado":"",
                "nombre":"",
                "apellidos":"",
                "direccion":"",
                "ciudad":"",
                "fkPuesto":"",
                "fkDepartamento":""
            },
            Puestos:[],
            Departamentos:[]
        }
    },
    created: function () {
        this.consultarPuesto();
        // this.consultarDepa();
      },
    methods: {
      editarEmpleado() {
        axios.put("https://localhost:7294/Empleado?id=" + this.pkEmpleado, this.form).then
                (result => {
                    if (result.status == 200) {
                        console.log(result.data.result);
                      }
                    this.$router.push("/listarempleado")

                });
      },
      consultarPuesto(){
      axios.get("https://localhost:7294/Puesto").then((result) => {
          console.log(result.data.result);
          this.Puestos = result.data.result;
        });
        axios.get("https://localhost:7294/Departamento").then((result) => {
          console.log(result.data.result);
          this.Departamentos = result.data.result;
        });
      },
    },
    mounted:function(pkEmpleado){
        this.pkEmpleado = this.$route.params.pkEmpleado;
        console.log(this.pkEmpleado);
        axios.get("https://localhost:7294/Empleado/" + this.pkEmpleado)
        .then(datos=>{          
            this.form.pkEmpleado = datos.data.value.result.pkEmpleado;
            this.form.nombre = datos.data.value.result.nombre;
            this.form.apellidos = datos.data.value.result.apellidos;
            this.form.direccion = datos.data.value.result.direccion;
            this.form.ciudad = datos.data.value.result.ciudad;
            this.form.fkPuesto = datos.data.value.result.fkPuesto;
            //this.form.fkdepartamento=datos.data.value.result.fkDepartamento;
            this.form.fkDepartamento = datos.data.value.result.fkDepartamento;
            console.log(this.form);
        });
      },
}
</script>