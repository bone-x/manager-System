<template>
    <div class='about row mb-5'>
       <div class='col-4'>
            <!-- 导航     -->
            <div class='list-group mb-5'>
                <router-link tag='li' class='nav-link' :to="{name:'historyLink'}">
                    <a class='list-group-item list-group-item-action'>历史详情</a>
                </router-link>
                <router-link tag='li' class='nav-link' :to="{name:'contactLink'}">
                    <a class='list-group-item list-group-item-action'>联系我们</a>
                </router-link>
                 <router-link tag='li' class='nav-link' :to="{name:'orderingGuideLink'}">
                    <a class='list-group-item list-group-item-action'>文档信息</a>
                </router-link>
                 <router-link tag='li' class='nav-link' :to="{name:'deliveryLink'}">
                    <a class='list-group-item list-group-item-action'>信息</a>
                </router-link>
            </div>
       </div>
       <div class='col-8'>
          <router-view></router-view>
       </div>
    </div>
</template>