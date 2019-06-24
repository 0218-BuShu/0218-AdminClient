// 用来进行local数据存储的工具模块

import store from 'store'

// 保存user
export function saveUser(user){
    store.set('USER-KEY',user)
}
//读取保存的user
export function getUser(){
    return store.get('USER-KEY')||{}
}
//删除保存的user
export function removeUser(){
    store.remove('user')
}