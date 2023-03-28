<template>
    <div class="container">
      <div class="card">
        <div class="card-header" style="font-weight: bold; color: white;">Agregar factura</div>
        <div class="card-body">
          <form v-on:submit.prevent="editarfactura">
            <div class="form-group">
              <label for=""  style="font-weight: bold; color: black;">Razón social:</label>
              <input
                type="text"
                class="form-control"
                name="razonSocial"
                v-model="form.razonSocial"
                aria-describedby="helpId"
                id="razonSocial"
                placeholder="Nombre la empresa"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el nombre del empresa</small
              >
            </div>
            <div class="form-group">
              <label for=""  style="font-weight: bold; color: black;">Fecha:</label>
              <input
                type="datetime-local"
                class="form-control"
                name="fecha"
                id="fecha"
                v-model="form.fecha"
                aria-describedby="helpId"
                placeholder="DD/MM/AAAA"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa la fecha</small
              >
            </div>
            <div class="form-group">
              <label for=""  style="font-weight: bold; color: black;">RFC:</label>
              <input
                type="text"
                class="form-control"
                name="rfc"
                id="rfc"
                v-model="form.rfc"
                aria-describedby="helpId"
                placeholder="RFC"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa la RFC de la empresa</small
              >
            </div>
            <div class="form-group">
            <label for="cliente">Cliente</label>
            <select class="form-control" name="cliente" id="cliente" v-model="form.fkCliente">
              <option v-for="cliente in Clientes" :value="cliente.pkCliente" :key="cliente.pkCliente">{{cliente.nombre}}</option>
            </select>
          </div><br/>
            <br />
            <div class="btn-group" role="group">
              |<button type="submit" class="btn btn-success"> <i class="fa fa-floppy-o" aria-hidden="true"></i> Guardar cambios</button>|
              |<router-link :to="{ name: 'listarfactura' }" class="btn btn-danger"><i class="fa fa-times" aria-hidden="true"></i> Cancelar</router-link>|
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
            pkFactora: null,
            form:{
                "pkFactora":"",
                "razonSocial":"",
                "fecha":"",
                "rfc":"",
                "fkCliente":"",
            },
            Clientes:[],
        }
    },
    created: function () {
        this.consultarCliente();
      },

    methods: {
      editarfactura() {
            axios.put("https://localhost:7294/Factura?id=" + this.pkFactora, this.form).then
                (result => {
                    if (result.status == 200) {
                        console.log(result.data.result);
                      }
                    this.$router.push("/listarfactura")

                });

        },
        consultarCliente() {
            axios.get("https://localhost:7294/Cliente").then((result) => {
            console.log(result.data.result);
            this.Clientes = result.data.result;});
          },
    },
    mounted:function(pkFactora){
        this.pkFactora = this.$route.params.pkFactora;
        console.log(this.pkFactora);
        axios.get("https://localhost:7294/Factura/" + this.pkFactora)
        .then(datos=>{          
            this.form.pkFactora = datos.data.value.result.pkfactora;
            this.form.razonSocial = datos.data.value.result.razonSocial;
            this.form.fecha = datos.data.value.result.fecha;
            this.form.rfc = datos.data.value.result.rfc;
            this.form.fkCliente = datos.data.value.result.fkCliente;
            console.log(this.form);
        });
      },
}
</script>
<!-- <template>
  <div class="container">
    <div class="card">
      <div class="card-header">Editar Factura</div>
      <div class="card-body">
        <form v-on:submit.prevent="editarFactura">
          <div class="form-group">
            <label for="">Razón Social:</label>
            <input
              type="text"
              class="form-control"
              name="razonSocial"
              v-model="form.razonSocial"
              aria-describedby="helpId"
              id="razonSocial"
              placeholder="Razón Social"
            />
            <small id="helpId" class="form-text" text-muted>Ingresa la razón social:</small>
          </div><br>

          <div class="form-group">
            <label for="">Fecha:</label>
            <input
              type="date"
              class="form-control"
              name="fecha"
              id="fecha"
              v-model="form.fecha"
              aria-describedby="helpId"
              placeholder="Fecha"
            />
            <small id="helpId" class="form-text" text-muted>Introduce la fecha</small>
          </div><br>

          <div class="form-group">
            <label for="">RFC:</label>
            <input
              type="text"
              class="form-control"
              name="rfc"
              id="rfc"
              v-model="form.rfc"
              aria-describedby="helpId"
              placeholder="RFC"
            />
            <small id="helpId" class="form-text" text-muted>Ingresa tu RFC</small>
          </div><br/>
             ------------------------------------------------------ --
          <div class="form-group">
            <label for="cliente">Cliente</label>
            <select class="form-control" name="cliente" id="cliente" v-model="form.fkCliente">
              <option v-for="cliente in Clientes" :value="cliente.pkCliente" :key="cliente.pkCliente">{{cliente.nombre}}</option>
            </select>
          </div><br/>
           ------------------------------------------------------ -
          <div class="btn-group" role="group">
            |<button type="submit" class="btn btn-success">Editar</button>|
            |<router-link :to="{ path: '/listarfactura' }" class="btn btn-danger">Cancelar</router-link>|
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
          pkFactora: null,
            form:{
              "pkFactora":"",
              "razonSocial":"",
              "fecha":"",
              "rfc":"",
              "fkCliente":"",
              },
              Clientes:[],
        }
    },
      created: function () {
        this.consultarCliente();
      },
    methods: {
      editarFactura() {
        axios.put("https://localhost:7294/Factura?id=" + this.pkFactora, this.form).then
        (data=>{
            console.log(data);
        });
        this.$router.push("/listarfactura")
      },      
      consultarCliente() {
            axios.get("https://localhost:7294/Cliente").then((result) => {
            console.log(result.data.result);
            this.Clientes = result.data.result;});
          },
    },
    mounted:function(pkFactora){
        this.pkFactora = this.$route.params.pkFactora;
        console.log(this.pkFactora);
        axios.get("https://localhost:7294/Factura?id=" + this.pkFactora)
        .then(datos=>{          
            this.form.pkFactora = datos.data.value.result.pkfactora;
            this.form.razonSocial = datos.data.value.result.razonSocial;
            this.form.fecha = datos.data.value.result.fecha;
            this.form.rfc = datos.data.value.result.rfc;
            this.form.fkCliente = datos.data.value.result.fkCliente;
            console.log(this.form);
        });

    },
}
</script> -->