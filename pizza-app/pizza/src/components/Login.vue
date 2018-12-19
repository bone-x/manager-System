<template>
    <div class='row mt-3'>
      <div class="col-md-12 col-lg-12">
        <div class="card">
          <div class="card-body">
            <img src="../../src/assets/sor.png" alt="" class="mx-auto d-block">
            <form @submit.prevent="onSubmit">
                <div class="form-group">
                    <label for="email">邮箱</label>
                    <input type="email"
                    class="form-control"
                    v-model="email"
                    >
                </div>
                 <div class="form-group">
                    <label for="password">密码</label>
                    <input type="password"
                    class="form-control"
                    v-model="password"
                    >
                </div>
                
                <button type="submit" class="btn btn-block btn-success">登录</button>
            </form>  
          </div>
        </div>
      </div>
    </div>
</template>
<script>
  export default{
    data(){
      return {
        email:'',
        password:'',

      }
    },
    methods:{
      onSubmit(){
        this.$axios.get('http://localhost:3000/users')
        .then(res=>{//实现过滤，数据库中有无账号和密码等于输入的
         let result=res.data.filter(user=>{
           return user.email==this.email&&user.password==this.password;
         })
         //判断result的长度是否大于0
         if(result!=null&&result.length>0){
          //  this.$store.dispatch("setUser",result)///分发action 中的setUser方法
            this.$store.dispatch("setUser",result[0].email)

           this.$router.push({name:'homeLink'})
         }else{
          alert("账号密码错误!")
          this.$store.dispatch("setUser",null)

         }
        })
      }
    },
    beforeRouteEnter (to, from, next) {//组件内的守卫,清空user
      next(vm=>vm.$store.dispatch("setUser",null))
    }
  }
</script>