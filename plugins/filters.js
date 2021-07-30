import Vue from 'vue'

Vue.filter('numberFormat',(value)=>{
    return parseFloat(value).toFixed(2);
})