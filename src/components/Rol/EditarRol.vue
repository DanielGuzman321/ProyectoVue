<template>
    <div class="container">
      <div class="card">
        <div class="card-header" style="font-weight: bold; color: white;">Editar Rol</div>
        <div class="card-body">
          <form v-on:submit.prevent="EditarRol">
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
            <div class="btn-group" role="group">
              |<button type="submit" class="btn btn-success"> <i class="fa fa-floppy-o" aria-hidden="true"></i> Guardar cambios</button>|
              |<router-link :to="{ name: 'listarrol' }" class="btn btn-danger"><i class="fa fa-times" aria-hidden="true"></i> Cancelar</router-link>|
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
            pkRol: null,
            form:{
                "pkRol":"",
                "nombre":"",
            },
        }
    },
    

    methods: {
      EditarRol() {
            axios.put("https://localhost:7294/Rol?id=" + this.pkRol, this.form).then
                (result => {
                    if (result.status == 200) {
                        console.log(result.data.result);
                    }
                    this.$router.push("/listarrol")

                });

        }
    },
    mounted:function(pkRol){
        this.pkRol = this.$route.params.pkRol;
        console.log(this.pkRol);
        axios.get("https://localhost:7294/Rol/" + this.pkRol)
        .then(datos=>{          
            this.form.pkRol = datos.data.value.result.pkRol;
            this.form.nombre = datos.data.value.result.nombre;
            console.log(this.form);
        });
      },
}
</script>