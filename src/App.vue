<template>
  <div id='App' style='overflow:hidden;'>
      <div class='navbar-fixed'>
        <nav>
          <div class='nav-wrapper montserrat'>
            <a @click='verify ? moveCliente(5) : moveAdmin(4)' class='brand-logo'
            style='padding-left: 85px;'> BTP</a>
            <ul class='right hide-on-med-and-down'>
              <li><a @click='verify ? moveAdmin(4) : moveCliente(5)'><i class='fas fa-user'></i>
              {{login}}</a></li>
            </ul>
          </div>
        </nav>
      </div>
      <header>
        <div class='row'>
          <div class='col s12 m2 l2'>
              <ul id='slide-out'  class='sidenav sidenav-fixed montserrat'>
                <div v-if='verify'>
                  <li v-for='(n, index) in arrClienteN.length' 
                  :class="index === 0 ? 'first-li' : 'n-li'" 
                  :key='index'><a @click='moveCliente(index)'>
                    <i :class=arrClienteS[index]></i> {{arrClienteN[index]}}</a></li>
                </div>
                <div v-else>
                  <li v-for='(n, index) in arrAdminN.length' 
                  :class="index === 0 ? 'first-li' : 'n-li'"  
                  :key='index'><a @click='moveAdmin(index)'>
                  <i :class=arrAdminS[index]></i> {{arrAdminN[index]}}</a></li>
                </div>
              </ul>
          </div>
        </div>
      </header>
      <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      activeIndex: '1',
      login: '',
      verify: false,
      arrAdminN: ['', '', '', ''],
      arrClienteN: ['', '', '', '', ''],
      arrAdminS: ['', '', 'fas fa-chart-line', ''],
      arrClienteS: ['', '', 'fas fa-chart-line', '', ''],
      componenteCliente: ['cursos', 'atividades', 'resultados', 'calendario', 'contato', 'cliente'],
      componenteAdmin: ['operacoes', 'funcionario', 'desempenho', 'gerenciamentocurso', 'admin'],
    };
  },
  methods: {
    moveCliente(key) {
      this.$router.push({ name: this.componenteCliente[key] });
    },
    moveAdmin(key) {
      this.$router.push({ name: this.componenteAdmin[key] });
    },
    moveVerify() {
      this.verify = this.componenteCliente.includes(this.$router.currentRoute.name);
      if (this.verify) {
        this.arrClienteN[0] = 'Cursos';
        this.arrClienteN[1] = 'Atividades';
        this.arrClienteN[2] = 'Resultados';
        this.arrClienteN[3] = 'Calendário';
        this.arrClienteN[4] = 'Contato';
        this.arrClienteS[0] = 'fas fa-book';
        this.arrClienteS[1] = 'far fa-hand-point-up';
        this.arrClienteS[3] = 'fa fa-calendar';
        this.arrClienteS[4] = 'fas fa-user-friends';
        this.login = 'Colaborador';
      } else {
        this.arrAdminN[0] = 'Operações';
        this.arrAdminN[1] = 'Funcionários';
        this.arrAdminN[2] = 'Desempenho';
        this.arrAdminN[3] = 'Cursos';
        this.arrAdminS[0] = 'fas fa-ship';
        this.arrAdminS[1] = 'fas fa-hard-hat';
        this.arrAdminS[3] = 'fas fa-book';
        this.login = 'Administrador';
      }
    },
  },
  beforeMount: function beforeMount() {
    this.moveVerify();
  },
  updated: function updated() {
    this.moveVerify();
  },
};
</script>

<style>
  .brand-logo:hover{
    cursor: pointer;
  }
</style>
