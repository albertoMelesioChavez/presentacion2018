<template>
  <div class="cont-curr icon">
    <h1 class="cont-title">Currículum</h1>
    <section class="informacion icon-fill">
        <h3>Información</h3>
        <img class="display none" src="@/assets/Display.png" alt="display">
        <div class="name none">albertoChávez</div>
        <div class="description none">Diseño y desarrollo web</div>
      <div class="cont-inf">
          <i class="ion-ios-pin"></i>
          <p> Fraccionamiento Villa Verde, Culiacán, Sinaloa, México </p>
      </div>
      <div class="cont-inf">
          <i class="ion-ios-mail"></i>
          <p> alberto.perse@gmail.com </p>
      </div>
      <div class="cont-inf">
          <i class="ion-logo-octocat"></i>
          <p> github.com/AlbertoMeletios </p>
      </div>
      <div class="cont-inf">
          <i class="icon ion-logo-facebook"></i>
          <p> fb.com/Chaltoon </p>
      </div>
      <div class="cont-inf">
          <i class="ion-ios-call"></i>
          <p> +516671360058' </p>
      </div>
    </section>
    <section class="experinformacion formacion">
      <h3>Formación</h3>
      <div class="cont-for">
          <img class="logo" src="@/assets/L-casaBlanca.png" alt="casaBlanca">
          <p> Lic. en diseño gráfico y artes multimedia en Universidad Casa Blanca </p>
      </div>
      <div class="cont-for">
          <img class="logo" src="@/assets/L-ESBA.png" alt="ESBA">
          <p> Lic. en educación artística en Escuela Superior de Bellas Artes </p>
      </div>
      <div class="cont-for">
          <img class="logo" src="@/assets/L-ISIC.png" alt="ISIC">
          <p> Bailarín de la compañía folcklórica sinaloense, Carrera técnica en música en el Instituto Sinaloense de Cultura </p>
      </div>
    </section>
    <section class="experinformacion experiencia">
      <h3>Experiencia</h3>
      <div class="cont-exp">
          <img class="logo" src="@/assets/L-lacuifa.png" alt="Lacuifa">
          <p> Diseñador y desarrollador web en Lacuifa <span>lacuifa.com.mx</span> </p>
      </div>
      <div class="cont-exp">
          <img class="logo" src="@/assets/L-grupoCitrus.png" alt="grupoCitrus">
          <p> Diseñador en Grupo citrus </p>
      </div>
      <div class="cont-exp">
          <img class="logo" src="@/assets/L-etniaDigital.png">
          <p> Desarrollador web en Etnia digital </p>
      </div>
      <div class="cont-exp">
          <img class="logo" src="@/assets/L-primusAzzule.png">
          <p> Diseñador y Desarrollador web en Primus labs y Azzule </p>
      </div>
    </section>
    <section class="habilidades">
      <h3>Habilidades</h3>
      <div class="habilintereses">
        <div class="cont-hab">
          <img class="svg" src="@/assets/svg/html.svg">
          <p> HTML </p>
        </div>
        <div class="cont-hab">
          <img class="svg" src="@/assets/svg/css.svg">
          <p> CSS </p>
        </div>
        <div class="cont-hab">
          <img class="svg" src="@/assets/svg/javascript.svg">
          <p> JavaScript </p>
        </div>
        <div class="cont-hab">
          <img class="svg" src="@/assets/svg/node.svg">
          <p> NodeJs </p>
        </div>
        <div class="cont-hab">
          <img class="svg" src="@/assets/svg/sass.svg">
          <p> SASS </p>
        </div>
        <div class="cont-hab">
          <img class="svg" src="@/assets/svg/webpack.svg">
          <p> Webpack </p>
        </div>
        <div class="cont-hab">
          <img class="svg" src="@/assets/svg/React.svg">
          <p> React </p>
        </div>
        <div class="cont-hab">
          <img class="svg" src="@/assets/svg/Vue.svg">
          <p> Vue </p>
        </div>
        <div class="cont-hab">
          <img class="svg" src="@/assets/svg/docker.svg">
          <p> Docker </p>
        </div>
        <div class="cont-hab">
          <img class="svg" src="@/assets/svg/git.svg">
          <p> Git </p>
        </div>
      </div>
    </section>
     <section class="intereses">
      <h3>Intereses</h3>
      <div class="habilintereses icon-fill">
        <div class="cont-hab">
          <i class="ion-md-list"></i>
          <p> Tipografía</p>
        </div>
        <div class="cont-hab">
          <i class="ion-ios-musical-notes"></i>
          <p> Música </p>
        </div>
        <div class="cont-hab">
          <i class="ion-ios-nutrition"></i>
          <p> Naturaleza </p>
        </div>
        <div class="cont-hab">
          <i class="ion-ios-bicycle"></i>
          <p> Ejercicio </p>
        </div>
        <div class="cont-hab">
          <i class="ion-ios-beer"></i>
          <p> Relajación </p>
        </div>
        <div class="cont-hab">
          <i class="ion-ios-at"></i>
          <p> Tecnología </p>
        </div>
        <div class="cont-hab">
          <i class="ion-md-airplane"></i>
          <p> Viajes </p>
        </div>
        <div class="cont-hab">
        <i class="ion-ios-book"></i>
          <p> Lectura </p>
        </div>
        <div class="cont-hab">
          <i class="ion-ios-body"></i>
          <p> Danza </p>
        </div>
        <div class="cont-hab">
          <i class="ion-ios-cloud-download"></i>
          <p> Educación </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  export default {
    components: { Header }
  }
</script>

<style>
.none {
  display: none;
}
.cont-curr {
  margin: 0 auto;
  max-width: 620px;
}
  section > *:not(h3) {
    width: 100%;
    text-align: center;
  }
  section > * > .logo {
    height: 4rem;
  }
  .habilintereses > * > .svg {
    height: 1.5rem;
    margin: 6px 0;
  }
  .icon-fill > * > i {
    -webkit-text-fill-color: aqua;
  }
  .habilintereses .cont-hab {
    width: 20%;
  }

 .habilintereses {
    display: flex;
    flex-wrap: wrap;
    font-size: .9rem;
  }
  .cont-inf, .cont-hab, .cont-int {
    height: 5rem;
  }
  .cont-for, .cont-exp {
    height: 8rem;
  }
  section h3 {
    padding: 30px;
  }
  .cont-curr > section >*:not(h3) {
    width: 95%;
    margin: 0 auto;
  }
  @media (min-width: 1000px) {
    .cont-curr {
    max-width: 100%;
    margin: 0 10px 10px 10px;
    }
    .informacion { grid-area: informacion }
    .formacion { grid-area: formacion }
    .experiencia { grid-area: experiencia }
    .habilidades { grid-area: habilidades }
    .intereses { grid-area: intereses}
    .cont-curr {
      display: grid;
      grid-gap: 10px;
      grid-template-columns: 1fr 2fr;
      grid-template-rows: auto;
      grid-template-areas:
        "informacion formacion "
        "informacion formacion"
        "habilidades experiencia"
        "intereses experiencia"

    }
.cont-curr > section{
      background-color: #414141;
    }
  }
  @media (min-width: 1500px) {
    .none {
      display: block;
      width: 80%;
    }
    .informacion .display {
      border-radius: 50%;
      width: 100%w;
      margin: 10px auto;
      box-shadow: 0.2em 0.2em 1em 0.2em rgba(0, 0, 0, 0.4);
    }
    .informacion .name{
       margin: 20px auto 0 auto;
      font-weight: 400;
      color: aqua;
      font-size: 2rem;
    }
    .informacion .description  {
      margin: 0 auto 20px auto;
      color: #8B8B8B;
    }
     .cont-curr {
      grid-template-columns: 1fr 2fr 2fr;
      grid-template-rows:  2fr 1fr;

      grid-template-areas:
        "informacion formacion experiencia"
        "informacion habilidades intereses"

    }
  }

</style>
