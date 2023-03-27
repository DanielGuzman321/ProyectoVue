<template>
    <div class="container">
      <div class="card">
        <div class="card-header" style="font-weight: bold; color: white;">Editar Departamento</div>
        <div class="card-body">
          <form v-on:submit.prevent="editarDepartamento">
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
              <small id="helpId" class="form-text" text-muted>Ingresa tu nombre</small>
            </div><br>
  
            <!-- <div class="btn-group" role="group">
              |<button type="submit" class="btn btn-success"> <i class="fa fa-floppy-o" aria-hidden="true"></i> Guardar cambios</button>|
              |<router-link :to="{ name: 'listardepartamento' }" class="btn btn-danger"><i class="fa fa-times" aria-hidden="true"></i> Cancelar</router-link>|
            </div> -->
            <div class="inputContainer" role="group" id="botonesopcion">
                <button type="submit" class="btn btn-success"> <i class="fa fa-floppy-o" aria-hidden="true"></i> Guardar cambios</button>|
                |<router-link :to="{ name: 'listardepartamento' }" class="btn btn-danger"><i class="fa fa-times" aria-hidden="true"></i> Cancelar</router-link>|
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
            pkDepartamento: null,
            form:{
                "pkDepartamento":"",
                "nombre":"",
            },
        }
    },
    

    methods: {
        editarDepartamento() {
            axios.put("https://localhost:7294/Departamento?id=" + this.pkDepartamento, this.form).then
                (result => {
                    if (result.status == 200) {
                        console.log(result.data.result);
                    }
                    this.$router.push("/listardepartamento")

                });

        }
    },
    mounted:function(pkDepartamento){
        this.pkDepartamento = this.$route.params.pkDepartamento;
        console.log(this.pkDepartamento);
        axios.get("https://localhost:7294/Departamento/" + this.pkDepartamento)
        .then(datos=>{          
            this.form.pkDepartamento = datos.data.value.result.pkDepartamento;
            this.form.nombre = datos.data.value.result.nombre;
            console.log(this.form);
        });
      },
}
</script>