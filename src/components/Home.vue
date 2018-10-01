<template>
  <div class="main">
    <h1 class="cont-title">Inicio</h1>
    <img class="display" v-if="display" src="@/assets/Display.png" alt="display">
    <div class="saludo" v-else><div>¡Hola!</div><p>Me llamo Alberto Chávez. Soy diseñador y desarrollador web y estoy encantado en presentarles mi currículum y portafolio, me pongo a merced de sus necesidades.</p></div>
    <div v-if="display" class="name">albertoChávez</div>
    <div v-if="display" class="description">Diseño y desarrollo web</div>
  </div>
</template>
<script>
  import Header from '@/components/Header'
  import Main from '@/components/Main'
  export default {
    components: { Header, Main },
    data() {
      return {
        display: true
      }
    },
    mounted() {
      setTimeout(() => {
        this.display ? this.display = false : this. display = true
      }, 5000);

    }
}
</script>
<style scoped>
  .main {
    display: flex;
    flex-direction: column;
  }
  .main > .display {
    border-radius: 50%;
    width: 50vw;
    height: 50vw;
    max-width: 300px;
    max-height: 300px;
    margin: 30px auto;
    box-shadow: 0.2em 0.2em 1em 0.2em rgba(0, 0, 0, 0.4);
  }

  .main > .name {
    margin: 10px auto 0 auto;
    font-weight: 400;
    color: aqua;
    font-size: 2.5rem;
  }
   .main > .saludo {
    width: 400px;
    height: 50vw;
    max-width: 300px;
    max-height: 300px;
    margin: 30px auto;
    text-align: center;
  }
  .main > .saludo > div {
    margin:20px auto;

    color : #ccc;
    font-size: 2rem;
  }
  .main > .description {
    margin: 0 auto;
    color: #8B8B8B;
  }

</style>
