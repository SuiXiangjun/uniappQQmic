<!-- 数据结构
data:{Name:"这里是名字",SrcAudio:"音频地址",Author:'作者',describe:"这里是描述"",SQ:1,DJ:1,HQ:1,VIP:1}
 -->
<template>
	<view class="playBot borderColorTop">
		<image class="img zhuan" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548155771330&di=543688d6a155099dd10e0c5305198b7e&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201512%2F20%2F20151220153237_5MSsz.jpeg"></image>
		<view class="title">
			<view class="name">Traveling Light</view>
			<view class="desc">Joel Hanson</view>
		</view>
		<image class="icon" src="../../static/image/icon/kaishiH.png"></image>
		<image class="icon liebiao" src="../../static/image/icon/muluH.png"></image>
	</view>
</template>

<script>
	export default {
		props:{
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.playBot{
		position: fixed;
		display: flex;
		align-items: center;
		bottom: 0;
		left: 0;
		width: 100vw;
		padding: 20upx 25upx 10upx;
		box-sizing: border-box;
		.img{
			display: block;
			width: 80upx;
			height: 80upx;
			border-radius: 50%;
			&.zhuan{
				-webkit-transform: rotate(360deg);
				animation: rotation 8s linear infinite;
			}
		}
		.title{
			flex: 1;
			padding-left: 30upx;
			font-size: 34upx;
			.desc{
				font-size: 26upx;
				color: rgb(75,75,75);
			}
		}
		.icon{
			width: 65upx;
			height: 65upx;
			padding-left: 30upx;
			&.liebiao{
				width: 40upx;
				height: 40upx;
				
			}
		}
	}
</style>
