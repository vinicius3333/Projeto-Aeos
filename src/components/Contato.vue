<template>
 <div class="container">
    <div class="row">
      <form class="col s12 m4 l12">
        <div class="row">
          <div class="input-field col s12 m12 l6">
            <input placeholder="Nome" id="first_name" type="text" class="validate" required>
            <label for="first_name">Nome</label>
          </div>
          <div class="input-field col s12 m12 l6">
            <input placeholder="Sobrenome" id="last_name" type="text" class="validate" required>
            <label for="last_name">Sobrenome</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="email" type="email" class="validate" required>
            <label for="email">Email</label>
          </div>
        </div>
        <div class="row">
          <div class="col s12">
            <div class="row">
              <div class="input-field col s12">
                <textarea placeholder="Deixe sua mensagem..." name="" id="textarea1" cols="30" rows="10" class="materialize-textarea" required></textarea></div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="items" style="margin-left: auto;"></div>
          <div class="button items">
            <button class="btn #2196f3 blue btn-large" type="submit" name="action">Enviar</button>
          </div>
          <span style="margin: 0 10px;"></span>
          <div class="button items">
            <button class="btn #2196f3 blue btn-large" type="clear" name="action">Limpar</button>
          </div>
          <div class="items" style="margin-right: auto;"></div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.row .items {
  display: inline-block !important;
}
</style>
