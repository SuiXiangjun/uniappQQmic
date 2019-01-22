<template>
	<view class="allPlay clear borderColorTop borderColorBottom">
		<image class="allPlayIcon fl" src="../../static/image/icon/kaishiH.png"></image>
		<view class="allPlayLabel fl">全部播放</view>
		<image class="allPlayUpdata fr" src="../../static/image/icon/muluHei.png"></image>
		<image class="allPlayList fr" src="../../static/image/icon/xiazaiHei.png"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.allPlay{
		line-height: 56upx;
		padding: 28upx 25upx;
		font-size: 30upx;
		.allPlayIcon{
			display: block;
			width: 56upx;
			height: 56upx;
			margin-right: 30upx;
		}
		.allPlayList,
		.allPlayUpdata{
			margin-top: 8upx;
			display: block;
			width: 40upx;
			height: 40upx;
			margin-left:45upx ;
		}
	}

</style>
