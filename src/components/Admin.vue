<template>
  <div id="Admin">
    <main>
        <div class="col s10 m10 l10">
            <div class="main">
                <img src="../assets/boss.jpg" class="image responsive-img">
            </div>
            <div class="centered montserrat"><h2>CONTROLE <br> Sistema de gerenciamento</h2><br>
             <a href="#!">Veja mais</a></div>

        </div>

        <div class="container">
            <div class="row montserrat">
              <div class="col s12 m4 l12">
                <br>
                <div class="col s12 m3 l3" @click="moveToCurso"><div class="box"> ATUAL <b> OPERAÇÃO </b>
                <br><i class="fas fa-book"></i><br>LER MAIS</div></div>
                <div class="col s12 m3 l3"><div class="box"><b>FUNCIONÁRIOS</b><br><i class="fas fa-pencil-ruler"></i>
                <br>LER MAIS</div></div>
                <div class="col s12 m3 l3"><div class="box"><b>DESEMPENHO</b><br><i class="fas fa-hand-point-up"></i>
                <br>LER MAIS</div></div>
                <div class="col s12 m3 l3"><div class="box"><b>GERENCIAR CURSOS</b><br><i class="fas fa-hands-helping"></i>
                <br>LER MAIS</div></div>
              </div>
            </div>
        </div>
    </main>
    <footer class="page-footer">
        <div class="container">
            <div class="row">
                <div class="col l6 s12">
                    <h5 class="white-text">Footer ~</h5>
                    <p class="grey-text text-lighten-4">Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Nulla non orci.</p>
                </div>
                <div class="col l4 offset-l2 s12">
                    <h5 class="white-text">Links</h5>
                    <ul>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer-copyright">
        </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return{
    };
  },
};
</script>

<style>
  span{
    font-size: 16px;
  }
</style>
