<template>
	<div>
		<nav-bar class="home-nav">
			<template #center>
				首页
			</template>
		</nav-bar>
		
		<!-- 轮播图 -->
		<swiper>
			<swiper-item v-for="(item, key) in banners" :key='key'>
				<a :href="item.link">
					<img :src="item.image">
				</a>
			</swiper-item>
		</swiper>
		
		<div class="recommend">
			<div v-for="(item, key) in recommends" :key='key' class="recommend-item">
				<a :href="item.link">
					<img :src="item.image" >
					<div>{{item.title}}</div>
				</a>
			</div>
		</div>
		
	</div>

</template>

<script>
	import NavBar from 'components/common/navbar/NavBar.vue'
	import {getHomeMultidata} from 'network/home.js'
	import {Swiper, SwiperItem} from 'components/common/swiper/index.js'
	
  export default {
    name: 'home',
	components:{
		NavBar,
		Swiper,
		SwiperItem
	},
	data(){
		return {
			banners: [],
			recommends: []
		}
	},
	created() {
		getHomeMultidata().then(res => {
			console.log(res)
			this.banners = res.data.data.banner.list
			this.recommends = res.data.data.recommend.list
		})
	}
  }
</script>

<style>
	.home-nav{
		background-color: #FF8198;
	}
	
	.recommend{
		display: flex;

	}
	
	.recommend-item{
		flex: 1;
		text-align: center;
		margin-top: 8px;
	}
	
	.recommend-item img{
		width: 80px;
		margin-bottom: 4px;
	}
</style>
