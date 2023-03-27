<template>
    <div class="container">
      <div class="card">
        <div class="card-header" style="font-weight: bold; color: white;">Editar Cliente</div>
        <div class="card-body">
          <form v-on:submit.prevent="agregarCliente">
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
              <small id="helpId" class="form-text" text-muted>Ingresa tus Apellidos</small>
            </div><br>
            <div class="form-group">
              <label for="" style="font-weight: bold; color: black;">Telefono:</label>
              <input
                type="text"
                class="form-control"
                name="telefono"
                id="telefono"
                v-model="form.telefono"
                aria-describedby="helpId"
                placeholder="Telefono"
              />
              <small id="helpId" class="form-text" text-muted>Ingresa tu Telefono</small>
            </div><br/>
            <div class="form-group">
              <label for="" style="font-weight: bold; color: black;">Email:</label>
              <input
                type="text"
                class="form-control"
                name="email"
                id="email"
                v-model="form.email"
                aria-describedby="helpId"
                placeholder="Email"
              />
              <small id="helpId" class="form-text" text-muted>Ingresa tu Email</small>
            </div><br/>
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
              <small id="helpId" class="form-text" text-muted>Ingresa tu Dirección</small>
            </div><br/>
  
            <div class="btn-group" role="group">
              |<button type="submit" class="btn btn-success"> <i class="fa fa-floppy-o" aria-hidden="true"></i> Guardar cambios</button>|
              |<router-link :to="{ name: 'listarcliente' }" class="btn btn-danger"><i class="fa fa-times" aria-hidden="true"></i> Cancelar</router-link>|
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
            pkCliente: null,
            form:{
                "pkCliente":"",
                "nombre":"",
                "apellidos":"",
                "telefono":"",
                "email":"",
                "direccion":"",
            },
        }
    },
    

    methods: {
      agregarCliente() {
        axios.put("https://localhost:7294/Cliente?id=" + this.pkCliente, this.form).then
                (result => {
                    if (result.status == 200) {
                        console.log(result.data.result);
                    }
                    this.$router.push("/listarcliente")

                });
      }
    },
    mounted:function(pkCliente){
        this.pkCliente = this.$route.params.pkCliente;
        console.log(this.pkCliente);
        axios.get("https://localhost:7294/Cliente/" + this.pkCliente)
        .then(datos=>{          
            this.form.pkCliente = datos.data.value.result.pkCliente;
            this.form.nombre = datos.data.value.result.nombre;
            this.form.apellidos = datos.data.value.result.apellidos;
            this.form.telefono = datos.data.value.result.telefono;
            this.form.email = datos.data.value.result.email;
            this.form.direccion = datos.data.value.result.direccion;
            console.log(this.form);
        });
      },
}
</script>