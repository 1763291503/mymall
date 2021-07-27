<template>
	<tab-bar>
	  <tab-bar-item path = '/home' activeColor = 'red'>
		<template #item-icon>
			<img src="~assets/img/tabbar/home.svg" >
		</template>
	    <!-- <img slot='item-icon' src="~assets/img/tabbar/home.svg" > -->
		
		<template #item-icon-active>
			<img src="~assets/img/tabbar/home_active.svg" >
		</template>

		<template v-slot:item-text>
			首页
		</template>
	  </tab-bar-item>
	
	
	
	  <tab-bar-item path = '/category' activeColor = 'red'>
		<template #item-icon>
			<img src="~assets/img/tabbar/category.svg" >
		</template>
		
		<template #item-icon-active>
			<img src="~assets/img/tabbar/category_active.svg" >
		</template>

		<template v-slot:item-text>
			分类
		</template>
	  </tab-bar-item>
	  
	  
	  
	  <tab-bar-item path = '/cart' activeColor = 'red'>
		<template #item-icon>
			<img src="~assets/img/tabbar/shopcart.svg" >
		</template>
		
		<template #item-icon-active>
			<img src="~assets/img/tabbar/shopcart_active.svg" >
		</template>
  
		<template v-slot:item-text>
			购物车
		</template>
	  </tab-bar-item>
	  
	  
	  
	  <tab-bar-item path = '/user' activeColor = 'red'>
		<template #item-icon>
			<img src="~assets/img/tabbar/profile.svg" >
		</template>
		
		<template #item-icon-active>
			<img src="~assets/img/tabbar/profile_active.svg" >
		</template>
  
		<template v-slot:item-text>
			用户
		</template>
	  </tab-bar-item>
	  
	</tab-bar>

</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar.vue'
  import TabBarItem from 'components/common/tabbar/TabBarItem.vue'

  export default {
    name: 'mainTabBar',
    components: {
      TabBar,
      TabBarItem
    }
  }

</script>

<style>
</style>
