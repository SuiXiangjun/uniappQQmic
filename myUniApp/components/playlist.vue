<!-- 数据结构
data:{Name:"这里是名字",SrcAudio:"音频地址",Author:'作者',describe:"这里是描述"",SQ:1,DJ:1,HQ:1,VIP:1}
 -->
<template>
	<view class="playList clear borderColorBottom">
		<view class="fl">
			<view class="name">{{info.Name}}</view>
			<view class="other">
				<view v-if="info.HQ" class="biao">HQ</view>
				<view v-if="info.SQ" class="biao sq">SQ</view>
				<view v-if="info.DJ" class="biao">独家</view>
				<view v-if="info.VIP" class="biao sq">VIP</view>
				{{info.Author}} - {{info.Album}}
			</view>
		</view>
		<image class="fr playListGengduo" src="../../static/image/icon/gengduoHui.png"></image>
		<image class="fr playListBofang" src="../../static/image/icon/bofangHui.png"></image>
		<!-- {{info.SrcAudio}} -->
	</view>
</template>

<script>
	export default {
		props:{
			info:{
				type:Object,
				default:{
					Name:"像我这样的人",
					SrcAudio:"http://m10.music.126.net/20190117183019/a55ba6ea85a64f26e106b6115a23e934/ymusic/5605/07fd/b516/a10d9e248c19d9ac2d40d2b0596fc09b.mp3",
					Author:'毛不易',
					Album:"平凡的一天sjb出校门才能农村明细表模板弄明白每年相比你每次下班是们重新报聪明程序包",
					SQ:0,
					DJ:1,
					HQ:0,
					VIP:1
					}
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.playList{
		margin-left:30upx;
		padding:15upx 25upx 20upx 0;
		.biao{
			display: inline-block;
			vertical-align: text-bottom;
			padding: 2upx 6upx;
			margin-right: 10upx;
			border: solid 1px #f55500;
			color: #f55500;
			border-radius: 4upx;
			font-size: 24upx;
			line-height: 24upx;
			&.sq{
				color: #9c8200;
				border: solid 1px #9c8200;
			}
		}
		.playListBofang,
		.playListGengduo{
			display: block;
			width: 40upx;
			height: 40upx;
			margin-left: 45upx;
			margin-top: 20upx;
		}
		.name{
			font-size: 38upx;
			line-height: 60upx;
		}
		.other{
			font-size: 26upx;
			line-height: 40upx;
			color: rgb(75,75,75);
			width: 520upx;
			overflow: hidden;
			text-overflow:ellipsis;
			white-space: nowrap;
		}
	}
</style>
