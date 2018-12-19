<template>
    <form action="">
        <h3 class="text-muted my-5">添加新的产品</h3>
        <div class="form-group row">
            <label for="" class="col-sm-1">品种</label>
            <div class="col-sm-11">
                <input type="text" class="form-control" v-model="newGoods.name">
            </div>
        </div>
        <div class="form-group row">
            <label for="" class="col-sm-1">描述</label>
            <div class="col-sm-11">
                <textarea rows='5' class="form-control" v-model="newGoods.description"></textarea>
            </div>
        </div>
        <p><strong>选项1</strong></p>
         <div class="form-group row">
            <label for="" class="col-sm-1">尺寸</label>
            <div class="col-sm-11">
                <input type="text" class="form-control" v-model="newGoods.size1">
            </div>
        </div>
         <div class="form-group row">
            <label for="" class="col-sm-1">价格</label>
            <div class="col-sm-11">
                <input type="text" class="form-control" v-model="newGoods.price1">
            </div>
        </div>
        <p><strong>选项2</strong></p>
         <div class="form-group row">
            <label for="" class="col-sm-1">尺寸</label>
            <div class="col-sm-11">
                <input type="text" class="form-control" v-model="newGoods.size2">
            </div>
        </div>
         <div class="form-group row">
            <label for="" class="col-sm-1">价格</label>
            <div class="col-sm-11">
                <input type="text" class="form-control" v-model="newGoods.price2">
            </div>
        </div>
        <div class="form-group row">
            <button 
            @click='addMenuItem'
            type='button' class='btn btn-success btn-block'>添加</button>
        </div>
    </form>
</template>
<script>
    export default({
       data(){
           return {
            newGoods:{
              
            }
           }
       },
       methods:{
           addMenuItem(){
               let data={
                   name:this.newGoods.name,
                   description:this.newGoods.description,
                   options:[
                       {
                        size:this.newGoods.size1,
                        price:this.newGoods.price1
                      },
                       {
                        size:this.newGoods.size2,
                        price:this.newGoods.price2
                      },
                   ]                
               }
               //axios  /es6 fetch
             fetch('http://localhost:3000/Goods',{
                 method:'POST',
                 headers:{
                     "Content-type":'application/json'
                 },
                 body:JSON.stringify(data)
             })
            .then(res=>res.json())
            // .then(data=>this.$router.push({name:"menuLink"}))
            .then(data=>this.$store.commit('pushToMenuItems',data))//数据同步到 vuex中
            .catch(err=>console.log(err))
           }
       }

    })
</script>
