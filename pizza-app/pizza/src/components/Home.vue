<template>
    <div class='row'>
      <div id='home' class="col-sm-12 text-center">
          <div class="background">
              <h1>欢迎大家!</h1>
              <h2>十步杀一人,千里不留行</h2>
              <!-- <button  class='btn btn-success' @click="go">Let's Go</button> -->
          </div>
      </div>
    </div>
</template>
<script>
      export default{
        data(){
            return{
             
            }
        },
        created(){
        //   this.list=this.$route.params.userId;
        },
        methods:{
            go(){
                this.$router.push({name:"menuLink"})
            }
        }
    }
</script>
<style>
#home{
    background:url('../../src/assets/Mos.jpg');
    height:85vh;
    padding:10%;
}
h1,h2{margin:6%;}
.background{
    background:#eee;
    opacity: .8;
    max-width:70vw;
    margin:0 auto;
    padding:20px 0;
}
</style>

