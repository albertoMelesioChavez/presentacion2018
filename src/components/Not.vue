<template>
  <div>
    <svg width="100%" height="100%" viewBox="-20 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
      <path id="path">
        <animate attributeName="d" from="m0,110 h0" to="m0,110 h1100" dur="6.8s" begin="0s" repeatCount="indefinite"/>
      </path>
      <text font-size="19" font-family="Courier New">
        <textPath xlink:href="#path">{ Esta sección aún está en desarrollo... }
        </textPath>
      </text>
    </svg>

  </div>
</template>

<script>
  export default {

  }
</script>

<style>

svg{
  width:60%;
  margin: 0 auto;
}
svg text {
  fill: aqua;
}

</style>
