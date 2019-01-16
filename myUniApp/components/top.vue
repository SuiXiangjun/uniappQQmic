<!-- 
 -->
<template>
	<view class="top bgColor">
		<view class="bar">
			<image v-if="imgSrc" :src="imgSrc+'icon/fenlei.png'" class="icon type"></image>
			<view class="barContent">
				<view>我的</view>
				<view class="sel">音乐馆</view>
				<view>发现</view>
			</view>
			<image v-if="imgSrc" :src="imgSrc+'icon/jiahao.png'" class="icon add"></image>
		</view>
		<view class="serch bgDeepColor">
			<input type="text" placeholder="搜索" placeholder-style="color:rgba(255,255,255,.8)" />
			<image class="icon" v-if="imgSrc" :src="imgSrc+'icon/sousuo5.png'"></image>
		</view>
	</view>
</template>

<script>
	export default {
		name: "top",
		props:{
// 			prodata: {
// 				type: Object,
// 				default: {}
// 			},
		},
		data() {
			return {
				imgSrc: '../../static/image/',
			};
		}
	}
</script>

<style  lang="scss" scoped>
	.top{
		padding: 40upx 20upx;
		width:100%;
		box-sizing: border-box;
		color: #fff;
		font-size: 32upx;
		.bar{
				display: flex;
				justify-content: space-between;
				line-height: 44upx;
				
				.icon{
					width: 44upx;
					height:44upx;
				}
				
				.barContent{
					display: flex;
					width: 360upx;
					margin: 0 auto;
					justify-content: space-between;
					
					.sel{
						font-size: 36upx;
						font-weight: 600;
					}
				}
		}
		.serch{
			position: relative;
			margin-top: 32upx;
			padding: 10upx 20upx;
			height: 76upx;
			line-height: 60upx;
			box-sizing: border-box;
			color: rgba(255,255,255,1);
			input{
				padding-left: 60upx;
			}
			.icon{
				position: absolute;
				top: 16upx;
				left: 20upx;
				width: 40upx;
				height: 40upx;
			}
		}
	}
</style>
