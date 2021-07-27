//向服务器申请首页的数据

import {request} from './request.js' 

export function getHomeMultidata(){
	return request({
		url: '/home/multidata'
	})
}