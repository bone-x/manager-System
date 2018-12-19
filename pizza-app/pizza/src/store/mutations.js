 //改变属性的状态
export const setMenuItems=(state,data)=>{
    state.MenuItems=data;//将获取到的数据放到vuex中的state中的MenuItems中 达到公用的效果
}
export const removeMenuItems=(state,item)=>{//将匹配的对象在MenuItems中删除
   state.MenuItems.splice(state.MenuItems.indexOf(item),1);
}
export const pushToMenuItems=(state,item)=>{
    state.MenuItems.push(item)
}
  //更改用户的状态信息
export const  userStatus=(state,user)=>{
if(user){
    state.currentUser=user;
    state.isLogin=true
}else{

    state.currentUser=null;
    state.isLogin=false
}
}