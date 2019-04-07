<template>
    <div class="container">
        <div class="row">
            <div class="col s12 m4 l12">
                <table>
                    <thead>
                    <tr>
                        <th>Cód. Operação</th>
                        <th>Hora início</th>
                        <th>Hora fim previsto</th>
                        <th>Cód. do Terno</th>
                        <th>Status</th>
                    </tr>
                    </thead>

                    <tbody>
                        <tr v-for="(i, index) of cd_operacao" :key="index">
                            <td>{{cd_operacao[index]}}</td>
                            <td>{{hr_inicio[index]}}</td>
                            <td>{{hr_fim_prev[index]}}</td>
                            <td>{{cd_terno[index]}}</td>
                            <td>{{op_status[index]}}</td>
                            <div @click="delJson"><a class="btn-floating btn-large waves-effect waves-light red"><i class="fas fa-times"></i></a></div>
                        </tr>
                    </tbody>
                    <div style="position: fixed;left: 1260px;top: 550px;"><a class="btn-floating btn-large waves-effect waves-light red"><i class="fas fa-plus"></i></a></div>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
const json = require("../../public/json/csvjson.json");
export default {
    data(){
        return{
            cd_operacao: [],
            hr_inicio: [],
            hr_fim_prev: [],
            cd_terno: [],
            op_status: []
        }
    },
    methods:{
        delJson: function(index){

        }
    },
    beforeMount: function(){
        for(var i of json.operacao){
            this.cd_operacao.push(i.cd_operacao);
            this.hr_inicio.push(i.dthr_inicio);
            this.hr_fim_prev.push(i.dthr_previsao_fim);
            this.cd_terno.push(i.cd_terno);
            this.op_status.push(parseInt(i.op_status, 10) === 1 ? "Ok" : "Atrasada");
        }
    }
}
</script>

<style>

</style>
