<template>
    <div class='row'>
        <div class="col-sm-12 col-md-8">
            <!-- new goods -->
            <app-new-goods></app-new-goods>
        </div>
        <div class='col-sm-12 col-md-4'>
            <!-- 品种占时 -->
            <h3 class="text-muted my-5">菜单</h3>
            <table class="table">
                <thead class="table table-default">
                    <tr>
                        <th>品种</th>
                        <th>删除</th>
                    </tr>
                </thead>
                <tbody v-for="item in getMenuItems" :key='item.id'>
                    <tr>
                        <td>{{item.name}}</td>
                        <td><button @click="deleteData(item)" class='btn btn-outline-danger btn-sm'>&times;</button></td>
                    </tr>
                </tbody>
            </table>
        </div> 
    </div>
</template>
<script>
import NewGoods from './NewGoods.vue'
    export default{
        components:{
            'app-new-goods':NewGoods
        },
        data(){
            return {
            //   getMenuItems:{}
            }
        },
        computed:{
            getMenuItems(){
                 return this.$store.state.MenuItems;//从store中拿到数据
            }
        },
        created(){
        //  this.getData();
        },
        methods:{
            // getData(){
            //     fetch("http://localhost:3000/Goods")
            //     .then(res=>res.json())
            //     .then(data=>this.getMenuItems=data)
            // },
            deleteData(item){
                 fetch("http://localhost:3000/Goods/"+item.id,{
                     method:"DELETE",
                     header:{
                         "Conten-type":"application/json"
                     },                     
                 })
                 .then(res=>res.json())
                //  .then(data=>this.$router.push({name:"menuLink"}))
                .then(data=>this.$store.commit('removeMenuItems',item))
                 .then(err=>console.log(err))

            }
        }
    }
</script>