<template>
  <div class="hello">
    <ol>
      <li>npm install vuex --save</li>
      <li>新建store/index.js</li>
      <li>新建store/index.js</li>
      <li>在index.js中创建Vue.Store实例,保存到变量store中，导出</li>
      <li>在mian.js中引用</li>
      <li>在index.js中定义数据源，state:{count:1}</li>
      <li>在组件中通过this.$store.state.count使用</li>
      <p><strong>count的值是 {{this.$store.state.count}}</strong></p>
      <li>这种写法很长,繁琐,可以通过import{mapState} from 'vuex',computed:{...mapState({count1:state=>state.count})}</li>
      <li>此时组件中用count1得到的值和state中定义的相同</li>
      <p><strong>count的值是{{count1}}</strong></p>
      <li>Getters 可以用于监听、state中的值的变化，返回计算后的结果</li>
      <p><strong>通过Getter获取count的值是{{this.$store.getters.getCount}}</strong></p>
      <li>现在添加一个按钮，修改count的值，通过提交mutation修改</li>
      <button @click='addFn'>count+1</button>
      <li>但是，官方并不建议我们这样直接去修改store里面的值，而是让我们去提交一个actions，在actions中提交mutation再去修改状态值</li>
      
    </ol>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods:{
    addFn(){
      // this.count1+1;//无反应
      // this.$store.commit("add");//直接使用mutation修改值
      this.$store.dispatch('addFn') //使用action提交修改
    }
  },
  computed:{
    ...mapState({
      count1:state=>state.count
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
