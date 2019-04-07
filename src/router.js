import Vue from 'vue';
import Router from 'vue-router';
import Admin from './components/Admin.vue';
import GerenciamentoCurso from './components/GerenciamentoCurso.vue';
import Desempenho from './components/Desempenho.vue';
import Funcionario from './components/Funcionario.vue';
import Cliente from './components/Cliente.vue';
import Cursos from './components/Cursos.vue';
import Atividades from './components/Atividades.vue';
import Resultados from './components/Resultados.vue';
import Calendario from './components/Calendario.vue';
import Operacoes from './components/Operacoes.vue';
import Contato from './components/Contato.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      props: true,
    },
    {
      path: '/gerenciamento',
      name: 'gerenciamentocurso',
      component: GerenciamentoCurso,
      props: true,
    },
    {
      path: '/desempenho',
      name: 'desempenho',
      component: Desempenho,
      props: true,
    },
    {
      path: '/funcionario',
      name: 'funcionario',
      component: Funcionario,
      props: true,
    },
    {
      path: '/cliente',
      name: 'cliente',
      component: Cliente,
      props: true,
    },
    {
      path: '/cursos',
      name: 'cursos',
      component: Cursos,
      props: true,
    },
    {
      path: '/calendario',
      name: 'calendario',
      component: Calendario,
      props: true,
    },
    {
      path: '/atividades',
      name: 'atividades',
      component: Atividades,
      props: true,
    },
    {
      path: '/resultados',
      name: 'resultados',
      component: Resultados,
      props: true,
    },
    {
      path: '/operacoes',
      name: 'operacoes',
      component: Operacoes,
      props: true,
    },
    {
      path: '/contato',
      name: 'contato',
      component: Contato,
      props: true,
    },
  ],
});
