<template>
    <div id="funcionario">
        <div class="container">
          <div class="row">
            <div class="col s12 m4 l12">
              <table>
                <thead>
                  <tr>
                    <th>Funcionario</th>
                    <th>Status</th>
                    <th>Descrição do Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(i, index) in funcionario" :key=index>
                    <td>{{i}}</td>
                    <td>{{status[index]}}</td>
                    <td>{{desc[index]}}</td>
                  </tr>
                </tbody>
              </table>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
const json = require('../../public/json/csvjson.json');
export default {
    data(){
      return{
        funcionario: [],
        status: [],
        desc: []
      }
    },
    beforeMount: function(){
      for(var i of json.funcionario){
        this.funcionario.push(i.nome_funcionario);
      }
      for(var i of json.funcionario_status){
        this.status.push(parseInt(i.id_status, 10) === 1 ? "Ocioso" : "Trabalhando");
        this.desc.push(i.desc_status);
      }
    }
}
</script>

<style>

</style>
