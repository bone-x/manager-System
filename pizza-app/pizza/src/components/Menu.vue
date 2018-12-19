<template>
    <!-- 菜单 -->
    <div class='row'>
    <div class='col-sm-12 col-md-8'>
        <table class='table'>
            <thead class="thead-default">
                <tr>
                    <th>尺寸</th>
                    <th>价格</th>
                    <th>加入</th>
                </tr>
            </thead>
            <tbody v-for='item in getMenuItems' :key='item.name'>
                <tr>
                    <td><strong>{{item.name}}</strong></td>
                </tr>
                <tr v-for='option in item.options' :key="option.size">
                    <td>{{option.size}}</td>
                    <td>{{option.price}}</td>
                    <td>
                        <button @click='addToBasket(item,option)' 
                        class='btn btn-sm btn-outline-success'>+</button>
                    </td>
                </tr>
            </tbody>
        </table>
      </div>
      <!-- 购物车-->
      <div class="col-sm-12 col-md-4">
         <div v-if="baskets.length>0">
              <table class="table">
              <thead class="thead-default">
                  <tr>
                        <th>数量</th>
                        <th>品种</th>
                        <th>价格</th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="item in baskets" :key='item.price'>
                      <td>
                          <button @click="decrease(item)" class="btn btn-sm">-</button>
                          <span>{{item.quantity}}</span>
                          <button @click="add(item)" class="btn btn-sm">+</button>
                      </td>
                      <td>{{item.size}}</td>
                      <td>{{item.price*item.quantity}}</td>
                  </tr>
              </tbody>
          </table>
          <p>总价：{{total}}</p>
          <button class="btn btn-success btn-block">提交</button>
         </div>
        <div v-else>占时无数据！</div>
      </div>

    </div>
</template>
<script>
    export default{
        data(){
            return{
             baskets:[],
            //   getMenuItems:{}
            }
        },
        created(){
        //   this.list=this.$route.params.userId;
         this. getData()
        },
        computed:{
         getMenuItems(){
             return this.$store.state.MenuItems;//从store中拿到数据
         },
         total(){//购物车总价
            return this.baskets.reduce((all,basket)=>{
               return all+(basket.price*basket.quantity);
             },0)
            }
        },
        methods:{//点击添加到购物车       
            addToBasket(item,option){
                let basket={
                     name:item.name,
                     size:option.size,
                     price:option.price,
                     quantity:1
                 };
                 if(this.baskets.length>0){
                     //过滤
                    let result= this.baskets.filter(basket=>{
                         return basket.name==item.name&&basket.price==option.price
                     })
                     if(result!=null&&result.length>0){
                         result[0].quantity++
                     }else{
                         this.baskets.push(basket)
                     }
                 }else{
                    this.baskets.push(basket)
                 }
                 
            },
            add(item){//购物车里的加
             item.quantity++;
            },
            decrease(item){//购物车里的减
            item.quantity--;
            if(item.quantity<=0){
                this.removeFromBasket(item);
              } 
            },
            removeFromBasket(item){
                this.baskets.splice(this.baskets.indexOf(item),1)
            },
            getData(){
                
                // fetch("http://localhost:3000/Goods")
                // .then(res=>res.json())
                // .then(data=>this.getMenuItems=data)

                fetch("http://localhost:3000/Goods")
                .then(res=>res.json())
                .then(data=>{this.$store.commit("setMenuItems",data)})//这里是提交mutations里面的setMenuItems方法
            },
            
        
        }
    }
</script>