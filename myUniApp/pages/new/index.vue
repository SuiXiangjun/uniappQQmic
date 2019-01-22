<template>
	<view class="new">
		<view class="bar">
			<view :class="[current==0?'sel':'','li']" @click="current = 0">新歌</view>
			<view :class="[current==1?'sel':'','li']" @click="current = 1">新碟</view>
			<view :class="[current==2?'sel':'','li']" @click="current = 2">影视</view>
		</view>
			<swiper class="swiper" :current="current" @change="changeBar">
				<swiper-item>
					<view class="swiper-item">
						<allplay></allplay>
						<scroll-view scroll-y="true" class="scroll-Y">
							<playlist v-for="item in newList" :info="item" ></playlist>
						</scroll-view>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<view class="newDiscSel">
							<view class="li sel">推荐</view>
							<view class="li">内地</view>
							<view class="li">港台</view>
							<view class="li">欧美</view>
							<view class="li">英文</view>
							<view class="icon"></view>
						</view>
						<scroll-view scroll-y="true" class="scroll-Y">
							<album :prodata="newDiscList" blockWidth='49.5%'></album>
						</scroll-view>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<view class="newFilms">热映动画片原生</view>
						<scroll-view scroll-y="true" class="scroll-Y">
							<album :prodata="newFilmsList" blockWidth='49.5%'></album>
						</scroll-view>
					</view>
				</swiper-item>
			</swiper>
			<playBot></playBot>
		
	</view>
</template>

<script>
	import allplay from '../../components/allpaly'
	import playlist from '../../components/playlist'
	import playBot from '../../components/playbot'
	import album from '../../components/album'
	export default {
		data() {
			return {
				current:0,
				newList:[
					{
						Name:"像我这样的人1",
						SrcAudio:"http://m10.music.126.net/20190117183019/a55ba6ea85a64f26e106b6115a23e934/ymusic/5605/07fd/b516/a10d9e248c19d9ac2d40d2b0596fc09b.mp3",
						Author:'毛不易',
						Album:"平凡的一天sjb出校门才能农村明细表模板弄明白每年相比你每次下班是们重新报聪明程序包",
						SQ:0,
						DJ:1,
						HQ:0,
						VIP:1
						},{
						Name:"像我这样的人2",
						SrcAudio:"http://m10.music.126.net/20190117183019/a55ba6ea85a64f26e106b6115a23e934/ymusic/5605/07fd/b516/a10d9e248c19d9ac2d40d2b0596fc09b.mp3",
						Author:'毛不易',
						Album:"平凡的一天sjb出校门才能农村明细表模板弄明白每年相比你每次下班是们重新报聪明程序包",
						SQ:1,
						DJ:1,
						HQ:0,
						VIP:1
						},{
						Name:"像我这样的人3",
						SrcAudio:"http://m10.music.126.net/20190117183019/a55ba6ea85a64f26e106b6115a23e934/ymusic/5605/07fd/b516/a10d9e248c19d9ac2d40d2b0596fc09b.mp3",
						Author:'毛不易',
						Album:"平凡的一天sjb出校门才能农村明细表模板弄明白每年相比你每次下班是们重新报聪明程序包",
						SQ:0,
						DJ:1,
						HQ:0,
						VIP:0
						},{
						Name:"像我这样的人4",
						SrcAudio:"http://m10.music.126.net/20190117183019/a55ba6ea85a64f26e106b6115a23e934/ymusic/5605/07fd/b516/a10d9e248c19d9ac2d40d2b0596fc09b.mp3",
						Author:'毛不易',
						Album:"平凡的一天sjb出校门才能农村明细表模板弄明白每年相比你每次下班是们重新报聪明程序包",
						SQ:0,
						DJ:0,
						HQ:0,
						VIP:1
						},{
						Name:"像我这样的人5",
						SrcAudio:"http://m10.music.126.net/20190117183019/a55ba6ea85a64f26e106b6115a23e934/ymusic/5605/07fd/b516/a10d9e248c19d9ac2d40d2b0596fc09b.mp3",
						Author:'毛不易',
						Album:"平凡的一天sjb出校门才能农村明细表模板弄明白每年相比你每次下班是们重新报聪明程序包",
						SQ:1,
						DJ:1,
						HQ:0,
						VIP:1
						},{
						Name:"像我这样的人6",
						SrcAudio:"http://m10.music.126.net/20190117183019/a55ba6ea85a64f26e106b6115a23e934/ymusic/5605/07fd/b516/a10d9e248c19d9ac2d40d2b0596fc09b.mp3",
						Author:'毛不易',
						Album:"平凡的一天sjb出校门才能农村明细表模板弄明白每年相比你每次下班是们重新报聪明程序包",
						SQ:0,
						DJ:1,
						HQ:1,
						VIP:0
						},{
						Name:"像我这样的人7",
						SrcAudio:"http://m10.music.126.net/20190117183019/a55ba6ea85a64f26e106b6115a23e934/ymusic/5605/07fd/b516/a10d9e248c19d9ac2d40d2b0596fc09b.mp3",
						Author:'毛不易',
						Album:"平凡的一天sjb出校门才能农村明细表模板弄明白每年相比你每次下班是们重新报聪明程序包",
						SQ:0,
						DJ:1,
						HQ:1,
						VIP:0
						},{
						Name:"像我这样的人8",
						SrcAudio:"http://m10.music.126.net/20190117183019/a55ba6ea85a64f26e106b6115a23e934/ymusic/5605/07fd/b516/a10d9e248c19d9ac2d40d2b0596fc09b.mp3",
						Author:'毛不易',
						Album:"平凡的一天sjb出校门才能农村明细表模板弄明白每年相比你每次下班是们重新报聪明程序包",
						SQ:0,
						DJ:1,
						HQ:1,
						VIP:0
						},{
						Name:"像我这样的人9",
						SrcAudio:"http://m10.music.126.net/20190117183019/a55ba6ea85a64f26e106b6115a23e934/ymusic/5605/07fd/b516/a10d9e248c19d9ac2d40d2b0596fc09b.mp3",
						Author:'毛不易',
						Album:"平凡的一天sjb出校门才能农村明细表模板弄明白每年相比你每次下班是们重新报聪明程序包",
						SQ:0,
						DJ:1,
						HQ:1,
						VIP:0
						},{
						Name:"像我这样的人10",
						SrcAudio:"http://m10.music.126.net/20190117183019/a55ba6ea85a64f26e106b6115a23e934/ymusic/5605/07fd/b516/a10d9e248c19d9ac2d40d2b0596fc09b.mp3",
						Author:'毛不易',
						Album:"平凡的一天sjb出校门才能农村明细表模板弄明白每年相比你每次下班是们重新报聪明程序包",
						SQ:0,
						DJ:1,
						HQ:1,
						VIP:0
						},{
						Name:"像我这样的人11",
						SrcAudio:"http://m10.music.126.net/20190117183019/a55ba6ea85a64f26e106b6115a23e934/ymusic/5605/07fd/b516/a10d9e248c19d9ac2d40d2b0596fc09b.mp3",
						Author:'毛不易',
						Album:"平凡的一天sjb出校门才能农村明细表模板弄明白每年相比你每次下班是们重新报聪明程序包",
						SQ:0,
						DJ:1,
						HQ:1,
						VIP:0
						}
				],
				newDiscList:[
					{name:"你的独家品味推荐",src:"../../static/image/sc5.jpg",count:"53133000",updateTime:"刚刚更新"},
					{name:"慢跑随身听",src:"../../static/image/sc7.jpg",count:"210000",updateTime:"刚刚更新"},
					{name:"失恋解药",src:"../../static/image/sc8.jpg",count:"4000",updateTime:"刚刚更新"},
					{name:"薛之谦创作歌曲集",src:"../../static/image/sc9.jpg",count:"9200000",updateTime:"刚刚更新"},
					{name:"青春是一场未知的探险",src:"../../static/image/sc10.jpg",count:"8909",updateTime:"刚刚更新"},
					{name:"欧美|渐入佳境的入耳暖心旋律",src:"../../static/image/sc11.jpg",count:"120000",updateTime:"刚刚更新"},
					{name:"你的独家品味推荐",src:"../../static/image/sc5.jpg",count:"53133000",updateTime:"刚刚更新"},
					{name:"慢跑随身听",src:"../../static/image/sc7.jpg",count:"210000",updateTime:"刚刚更新"},
					{name:"失恋解药",src:"../../static/image/sc8.jpg",count:"4000",updateTime:"刚刚更新"},
					{name:"薛之谦创作歌曲集",src:"../../static/image/sc9.jpg",count:"9200000",updateTime:"刚刚更新"},
					{name:"青春是一场未知的探险",src:"../../static/image/sc10.jpg",count:"8909",updateTime:"刚刚更新"},
					{name:"欧美|渐入佳境的入耳暖心旋律",src:"../../static/image/sc11.jpg",count:"120000",updateTime:"刚刚更新"}
				],
				newFilmsList:[
					{name:"离开的接口",author:"刘瑞琪",src:"../../static/image/sc12.jpg"},
					{name:"Cerll ls:The Albuild",author:"Made Will Made It",src:"../../static/image/sc13.jpg"},
					{name:"SSS.GRIDMANIDSFEF",author:"OTX",src:"../../static/image/sc14.jpg"},
					{name:"No place",author:"Backstreet",src:"../../static/image/sc15.jpg"},
					{name:"别再闹了",author:"毛不易",src:"../../static/image/sc16.jpg"},
					{name:"即刻电音",author:"即可电音",src:"../../static/image/sc17.jpg"},
					{name:"失恋解药",src:"../../static/image/sc8.jpg",count:"4000",updateTime:"刚刚更新"},
					{name:"薛之谦创作歌曲集",src:"../../static/image/sc9.jpg",count:"9200000",updateTime:"刚刚更新"},
					{name:"青春是一场未知的探险",src:"../../static/image/sc10.jpg",count:"8909",updateTime:"刚刚更新"},
					{name:"欧美|渐入佳境的入耳暖心旋律",src:"../../static/image/sc11.jpg",count:"120000",updateTime:"刚刚更新"}
				],
			};
		},
		components:{allplay,playlist,playBot,album},
		onLoad(options){
			this.current = Number(options.count)
		},
		methods:{
			changeBar:function(e){
				this.current = e.detail.current
			}
		}
	}
</script>

<style lang="scss">
.new{
	overflow: hidden;
	.bar{
		display:flex;
		justify-content: center;
		margin: 30upx 0;
		
		.li{
			padding: 0 40upx;
			line-height: 60upx;
			border: solid 1px #000000;
			color: #000000;
			background: #FFFFFF;
			border-right:none;
			&:last-child{
				border-right:solid 1px #000000;
			}
			&.sel{
				background: #000000;
				color: #FFFFFF;
			}
		}
	}
	.swiper{
		height:calc(100vh - 330upx);
	}
	.scroll-Y{
		height:calc(100vh - 440upx);
	}
	.newDiscSel{
		position: relative;
		display: flex;
		padding: 30upx 0 30upx;
		
		.li{
			flex: 1;
			text-align: center;
			&.sel{
				color: #f55500;
			}
		}
		.icon{
			position: absolute;
			width: 50upx;
			height: 8upx;
			line-height: 8upx;
			background-color: #F55500;
			bottom: 0upx;
			border-radius: 4upx;
			margin-left:calc(20% - 10% - 25upx);
		}
	}
	.newFilms{
		height: 100upx;
		line-height: 100upx;
		text-align: center;
		font-size: 40upx;
		letter-spacing: 15upx;
	}
}
</style>
