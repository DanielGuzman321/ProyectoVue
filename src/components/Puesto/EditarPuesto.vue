<template>
    <div class="container">
      <div class="card">
        <div class="card-header" style="font-weight: bold; color: white;">Editar Puesto</div>
        <div class="card-body">
          <form v-on:submit.prevent="editarpuesto">
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
              <small id="helpId" class="form-text" text-muted>Ingresa El nombre nuevo</small>
            </div><br>
            <div class="btn-group" role="group">
              |<button type="submit" class="btn btn-success"> <i class="fa fa-floppy-o" aria-hidden="true"></i> Guardar cambios</button>|
              |<router-link :to="{ name: 'listarpuesto' }" class="btn btn-danger"><i class="fa fa-times" aria-hidden="true"></i> Cancelar</router-link>|
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
                "pkPuesto":"",
                "nombre":"",
            },
        }
    },
    

    methods: {
      editarpuesto() {
            axios.put("https://localhost:7294/Puesto?id=" + this.pkPuesto, this.form).then
                (result => {
                    if (result.status == 200) {
                        console.log(result.data.result);
                    }
                    this.$router.push("/listarpuesto")

                });

        }
    },
    mounted:function(pkPuesto){
        this.pkPuesto = this.$route.params.pkPuesto;
        console.log(this.pkPuesto);
        axios.get("https://localhost:7294/Puesto/" + this.pkPuesto)
        .then(datos=>{          
            this.form.pkPuesto = datos.data.value.result.pkPuesto;
            this.form.nombre = datos.data.value.result.nombre;
            console.log(this.form);
        });
      },
}
</script>