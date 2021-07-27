<template>
  <div class="tab-bar-item" @click="itemClick">

    <div v-if="!isActive"><slot name="item-icon"></slot></div>

    <div v-else><slot name="item-icon-active"></slot></div>

    <div :style="{color: isActive? activeColor : 'black'}"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: 'TabBarItem',

    data(){
      return {
        // isActive: true
      }
    },

    computed: {
      isActive(){
        return this.$route.path.indexOf(this.path) != -1
      },

    },

    props:{
      path: String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },

    methods: {
      itemClick(){
        if(this.path != this.$route.path){
          this.$router.replace(this.path)
        }

      }
    }
  }
</script>

<style>
  .tab-bar-item {

    flex: 1;
    text-align: center;
    height: 49px;
  }

  .tab-bar-item img {
    height: 25px;
    width: 25px;
  }

/*  .active {
    color: red;
  } */
</style>
