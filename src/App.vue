<template>
  <div id="app" :class="smail?'smail':''">
    <!-- <router-view/> -->
    <Left></Left>
    <CenterBox></CenterBox>
  </div>
</template>

<script>
  import Left from './components/left';
  import CenterBox from './components/centerBox';
export default {
  components:{
    Left,
    CenterBox
  },
  name: 'App',
  data(){
    return{
      smail:false
    }
  },
  mounted(){
    let that = this;
    window.addEventListener('resize',()=>{
        if(window.innerWidth <= 768 ){
            that.smail = true;
        }else{
            that.smail = false;
        }
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}
</style>
