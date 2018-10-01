<template>
  <section class="header">
    <menu :class="{ Active: active }" >
      <div class="menu-items">
        <router-link to="/" exact><div class="letter">Inicio</div><i class="icon ion-ios-home" @click="menuHome"></i></router-link>
        <router-link to="/curriculum"><div class="letter">Currículum</div><i class="icon ion-ios-list-box" @click="menuCurriculum"></i></router-link>
        <router-link to="/portafolio"><div class="letter">Portafolio</div><i class="icon ion-ios-apps" @click="menuPortafolio"></i></router-link>
        <router-link to="/contacto"><div class="letter">Contacto</div><i class="icon ion-ios-chatbubbles" @click="menuContacto"></i></router-link>
        <div @click="isActive"><i class="icon" :class="{ 'ion-ios-menu c-aqua' : !active, 'ion-md-close' : active}"></i></div>
      </div>
    </menu>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        active: null,
        menu: true,
        home: null,
        cv : null,
        pf: null,
        contact: null,
        close: null,
      }
    },
    methods: {
      isActive() {
        this.active ? this.active = false : this.active = true
        this.active ? this.close = true : this.close = false
      },
      menuHome() {
        //this.close=false; this.menu=false; this.home=true; this.cv=false; this.pf=false; this.contact=false;
      },
      menuCurriculum() {
        //this.close=false; this.menu=false; this.home=false; this.cv=true; this.pf=false; this.contact=false;
      },
      menuPortafolio() {
       // this.close=false; this.menu=false; this.home=false; this.cv=false; this.pf=true; this.contact=false;
      },
      menuContacto() {
        //this.close=false; this.menu=false; this.home=false; this.cv=false; this.pf=false; this.contact=true;
        if(this.x<this.c) {
          this.x ++
        }
      }
    }
  }
</script>

<style scoped>
  .header {
    background-color: rgba(37, 35, 35, 0.158);
    color: #8B8B8B;
  }
  .header menu {
    background-color: #4D4D4D;
    width: 40px;
    height: 40px;
    border-radius: 50px;
    position: absolute;
    top: 30px;
    left: 30px;
    text-align: center;
    transition-duration: 2s;
    box-shadow: 0 0 1em 0.1em rgba(0, 0, 0, 0.4);
    overflow: hidden;
  }
  .header .Active {
    width: 200px;
  }
  .header .Active .menu-items {
    transition-duration: 2s;
    margin-left: 0;

  }
  .header menu .menu-items {
    transition-duration: 2s;
    margin-left: -160px;
    display: flex;
  }
  .header menu .menu-items > *{
    min-height: 40px;
    min-width: 40px;
    box-shadow: #262626;
    display: flex;
    align-items: center;
  }
  .header menu .menu-items .router-link-active > i {
    background-color: #262626;
    border-radius: 50px;
  }
  .header menu .menu-items > a > .letter:hover {
    cursor: pointer;
    color: rgba(0, 255, 255, 0.459);
  }
  .header menu .menu-items > * > .letter {
    display:none;
  }
  .header menu .menu-items > * > i {
    min-height: 40px;
    min-width: 40px;
    color: #8B8B8B;
    display: flex;
  }
  .header menu .menu-items > * > i:before {
    margin: auto;
  }
   .header menu .menu-items > * > i:hover {
    color: aqua;
    background-color: #3a3a3a;
    border-radius: 50px;
    cursor: pointer;
  }
  .header menu .menu-items > * > .c-aqua {
    color:aqua;
  }
  @media (min-width: 800px) {
   .header .Active {
      width: 100%;
    }
    .header > menu > .menu-items > .router-link-active > .letter{
      color: aqua;
    }
    .header menu {
      height: 100%;
      width: 100%;
      justify-content: flex-end;
      width: 100%;
      border-radius: 0;
      position: relative;
      text-align: center;
      margin: 0 auto;
      top:auto;
      left: auto;
      overflow: auto;
      background-color: rgba(0, 0, 0, 0);
      transition-duration: 0s;
    }
    .header menu > * {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      height: 100%;
      width: 100%;
      text-align: right;
      cursor: pointer;
      transition-duration: 0s;
    }
    .header menu .menu-items {
      margin: 0;
      width: 100%;
    }
    .header menu .menu-items > * > .letter {
      display:flex;
      color: #8B8B8B;
      width: 100px;
      justify-content: flex-end;
    }
     .header menu .menu-items > * > i {
       display: none;
     }
  }
</style>
