<template>
  <div id="app">
    <div class="content">
      <Header></Header>
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'App',
  components: { Header }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }
  *::after, *::before {
    box-sizing: border-box;
  }
  p {
    color: #8B8B8B;
  }
  h3 {
    color: #fff;
    font-weight: 200;
  }
  i {
    font-size: 28px;
  }
  .cont-title {
    color: #ccc;
    margin: 0 20px;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
   .content {
      min-height: 100vh;
      background: rgb(73,74,76);
      background: linear-gradient(145deg, rgba(73,74,76,1) 0%, rgba(19,19,21,1) 90%);
      display: grid;
      grid-gap: 10px;
      grid-template-columns: 1fr;
      grid-template-rows: 100px 1fr;
      align-content: stretch;
   }
  @media (min-width: 800px){
    .cont-title { display: none }
  }
  </style>
