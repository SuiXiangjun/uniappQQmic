<!-- 数据结构
 prodata:{
 	title:"标题名字",
 	list:[
 		{name:"块的名字",src:"图片地址",author:'作者',count:"收听量",updateTime:"更新时间"},
 		...
 	]
 },
 changeReturnParams:点击刷新事件的回传参数
 blockWidth：单个元素的宽度，最好是百分比,高度是自动匹配的只要图片的大小一致高度就不会出现问题
 @change:点击换一批的回调函数
 -->
<template>
	<view v-if="prodata" class="recommend">
		<view v-if='prodata.title' class="title">{{prodata.title}}
			<image v-if="imgSrc" :src="imgSrc+'jiantou2.png'"></image>
		</view>
		<album :prodata="prodata.list" :blockWidth="blockWidth"></album>
		<view v-if="changeReturnParams" @tap="changeFunc" class="change">
			<image v-if="imgSrc" :src="imgSrc+'icon/shuaxin.png'"></image>
			换一批
		</view>
	</view>
</template>

<script>
	import album from './album.vue'
	export default {
		name: "albumblock",
		components:{album},
		props:{
			prodata: {
				type: Object,
				default: {}
			},
			changeReturnParams:{
				type:String,
				default:''
			},
			blockWidth:{
				type:String,
				default:'32.8%'
			}
		},
		data() {
			return {
				imgSrc: '../../static/image/',
			};
		},
		computed: {
			
		},
		methods:{
			changeFunc:function(){
				this.$emit('change',this.changeReturnParams)
			},
		}
	}
</script>

<style  lang="scss" scoped>
	.title {
		position: relative;
		height: 100upx;
		line-height: 100upx;
		text-align: center;
		font-size: 32upx;

		image {
			width: 40upx;
			height: 40upx;
			position: absolute;
			top: 30upx;
			right: 40upx;
			display: block;
		}
	}
	.change {
		width: 28%;
		line-height: 56upx;
		margin: 0 auto;
		text-align: center;
		font-size: 26upx;
		margin-bottom: 20upx;
		border: solid 1upx #CCCCCC;

		image {
			display: inline-block;
			vertical-align: text-bottom;
			width: 32upx;
			height: 32upx;
		}
	}
</style>
