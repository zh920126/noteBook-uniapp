<template>
	<view class="index">
		<view class="index-top">
			<!-- <view class="img">
				<image mode="aspectFill" src="../../static/image/im_bgFlower@2x.png">
				</image>
			</view> -->
			<view class="index-header">高效工作 快乐生活</view>
			<view class="index-title">改变从今天开始</view>
		</view>
		<view class="card">
			<!-- 顶部背景 -->
			<view class="bg">
				<block v-if="true">
					<view class="userAvatar">
						<image class="" mode="widthFix" src="https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3104749104,4207433598&fm=26&gp=0.jpg"></image>
					</view>
				</block>
				<block v-else>
					<view class="userAvatar">
						<button open-type="getUserInfo" bind:tap="handleGetUserInfo">我的照片</button>
					</view>
				</block>
			</view>
			
			<view class="userInfo" v-if="update">
			      <view class="user-name">
			        <view class="user-name-title">
			          <view>姓名</view>
			          <view class="name">{{userInfo.name}}</view>
			        </view>
			        <view class="user-name-phone">
			          <view>手机</view>
			          <view class="name">{{userInfo.mobile}}</view>
			        </view>
			      </view>
			      <view class="item">
			        <view>单位</view>
			        <view>{{userInfo.component}}</view>
			      </view>
			      <view class="item">
			        <view>地址</view>
			        <view>
								<textarea :value="userInfo.address" @blur="handleUserAddress($event,userInfo)"></textarea>
							</view>
			      </view>
			      <view class="item-qq">
			        <view class="qq">
			          <view class="iconfont icon-QQ"></view>
			          <view class="name">
									<textarea :value="userInfo.qqNumber" @blur="handleUserQQ($event,userInfo)"/>
								</view>
			        </view>
			        <view class="wechat">
			          <view class="iconfont icon-weixin"></view>
			          <view class="name">
									<textarea :value="userInfo.wechatNumber" @blur="handleUserWechat($event,userInfo)"/>
								</view>
			        </view>
			      </view>
			      <view class="email">
			          <view class="iconfont icon-email"></view>
			          <view class="email-des">
									<textarea :value="userInfo.email" @blur="handleUserEmail($event,userInfo)"/>
								</view>
			      </view>
			</view>
			
		</view>
		<!-- 底部导航 -->
		<view class="user-dream">
			<block v-for="(v,i) in userDream" :key="v.url">
				<view class="user-dream-item" @tap="goToelsePage(v.url)" >{{v.name}}</view>
			</block>
		</view>
	</view>
</template>

<script>
	import {myAxios} from '../../utils/myAxios.js'
	export default {
		data() {
			return {
				userDream: [{
						name: '人生蓝图',
						url: '/pages/blueprint/blueprint'
					},
					{
						name: '季度目标',
						url: '/pages/quarterlygoals/quarterlygoals'
					},
					{
						name: '月度目标',
						url: '/pages/monthygoals/monthygoals'
					},
					{
						name: '周目标',
						url: '/pages/weekgoals/weekgoals'
					}
				],
				userInfo: uni.getStorageInfoSync('userInfo').name || {
					name:'樊文花',
					mobile:'130123456789',
					component:'广州樊文花化妆品有限公司',
					address:'珠江新城K11管理中心',
					qqNumber:123456789012,
					wechatNumber:'1212121212121',
					email:'12121212@163.com'
				},
				update:true
			}
		},
		onLoad(options) {
			console.log(options)
			this.getUserInfo()
		},
		methods: {
			// 更新用户邮箱
			async handleUserEmail(e,value2){
				let {value}=e.detail
				let data={
					address:value2.address,
					email:value,
					mobile:value2.mobile,
					name:value2.name,
					qqNumber:value2.qqNumber,
					wechatNumber:value2.wechatNumber,
					userid:uni.getStorageSync('userID')
				}
				let res=await myAxios({
					method:'psot',
					url:'/anonymous/updateUserInfo',
					data
				})
				if(res.data.statusCode==200){
					this.getUserInfo()
				}else{
					uni.showToast({
						title:'更新失败,请重试',
						icon:'none',
						duration:500
					})
				}
			},
			
			// 更新用户wechat
			async handleUserWechat(e,value2){
				let {value}=e.detail
				let data={
					address:value2.address,
					email:value2.email,
					mobile:value2.mobile,
					name:value2.name,
					qqNumber:value2.qqNumber,
					wechatNumber:value,
					userid:uni.getStorageSync('userID')
				}
				let res=await myAxios({
					method:'psot',
					url:'/anonymous/updateUserInfo',
					data
				})
				if(res.data.statusCode==200){
					this.getUserInfo()
				}else{
					uni.showToast({
						title:'更新失败,请重试',
						icon:'none',
						duration:500
					})
				}
			},
			
			// 更新用户QQ
			async handleUserQQ(e,value2){
				let {value}=e.detail
				let data={
					address:value2.address,
					email:value2.email,
					mobile:value2.mobile,
					name:value2.name,
					qqNumber:value,
					wechatNumber:value2.wechatNumber,
					userid:uni.getStorageSync('userID')
				}
				let res=await myAxios({
					method:'psot',
					url:'/anonymous/updateUserInfo',
					data
				})
				if(res.data.statusCode==200){
					this.getUserInfo()
				}else{
					uni.showToast({
						title:'更新失败,请重试',
						icon:'none',
						duration:500
					})
				}
			},
			
			// 更新用户地址
			async handleUserAddress(e,value2){
				let {value}=e.detail
				let data={
					address:value,
					email:value2.email,
					mobile:value2.mobile,
					name:value2.name,
					qqNumber:value2.qqNumber,
					wechatNumber:value2.wechatNumber,
					userid:uni.getStorageSync('userID')
				}
				let res=await myAxios({
					method:'psot',
					url:'/anonymous/updateUserInfo',
					data
				})
				if(res.data.statusCode==200){
					this.getUserInfo()
				}else{
					uni.showToast({
						title:'更新失败,请重试',
						icon:'none',
						duration:500
					})
				}
			},
			
			// 获取用户信息
			async getUserInfo(){
				this.update=false
				let res= await myAxios({
					method:'post',
					url:'/anonymous/queryUserInfo',
					data:{
						code:'123',
						userid:uni.getStorageSync('userID')
					}
				})
				if(res.data.statusCode==200){
					this.userInfo=res.data.result
				}else{
					uni.showToast({
						title:'获取用户信息失败,请重试',
						icon:'none',
						duration:500
					})
				}
				this.update=true
			},
			
			// 路由跳转
			goToelsePage(v){
				console.log(v)
				uni.navigateTo({
					url:v
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	page{
		background: #EFF3F6;
	.index {
		color: #219d9c;
		font-size: 20rpx;

		&-top {
			height: 271rpx;
			width: 100%;
			overflow: hidden;
			background-image: url(../../static/image/背景顶部@2x.png);
			background-size: 100% 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			color: #fff;
			position: relative;

			.img {
				position: absolute;
				right: 0rpx;
				bottom: 0rpx;
				height: 391rpx;
				width: 300rpx;

				image {
					width: 100%;
					height: 100%;
					position: absolute;
					top: 80rpx;
					right: -20rpx;
				}
			}
		}

		&-header {
			width: 190rpx;
			height: 30rpx;
			margin: 14rpx 0 0;
		}

		&-title {
			width: 302rpx;
			height: 60rpx;
			font-size: 43rpx;
			margin-top: 8rpx;
			font-weight: bold;
		}

		.card {
			position: relative;
			width: 476rpx;
			height: 615rpx;
			margin: -124rpx auto 0;
			z-index: 2;
			border-radius: 7rpx;
			border-bottom: 16rpx solid #5FAE89;
			box-sizing: border-box;
			box-shadow: 0px 5rpx 11rpx rgba(0, 0, 0, 0.16);
			overflow: hidden;
			background: #fff;

			.bg {
				height: 197rpx;
				background-image: url(../../static/image/卡片顶部@2x.png);
				background-size: 100% 100%;

				.userAvatar {
					width: 157rpx;
					height: 203rpx;
					position: absolute;
					background: #fff;
					top: 52rpx;
					left: 50%;
					border-radius: 7rpx;
					overflow: hidden;
					transform: translate(-50%);
					writing-mode: vertical-lr;

					button {
						width: 100%;
						height: 100%;
						color: #5FAE89;
						display: flex;
						justify-content: center;
						align-items: center;
					}
				}

				image {
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					width: 157rpx;
				}
			}
		}

		.btns {
			width: 200rpx;
			height: 280rpx;
			margin: 60rpx auto;
			border: 1rpx dashed #000;
			border-radius: 20rpx;
			display: flex;
			justify-content: center;
			align-items: center;

			button {
				width: 100%;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				margin: 0;
				padding: 0;
				background: rgba(255, 255, 255, 0);
				font-size: 28rpx;
				font-weight: normal;
				color: inherit;
			}
		}

		.userInfo {
			margin-top: 93rpx;
			margin-left: 47rpx;
			font-size: 14rpx;
			color: #AFB5B3;

			&>view {
				height: 30rpx;
				display: flex;
				margin-bottom: 27rpx;
				align-items: center;
			}

			.item {
				&>view {
					width: 100%;
					height: 100%;
					textarea{
						width: 100%;
						height: 100%;
						font-size: 22rpx;
						text-align: left;
					}
					&:first-child {
						width: 30rpx;
						display: flex;
						align-items: center;
					}

					&:last-child {
						margin-left: 11rpx;
						font-size: 20rpx;
						color: #257065;
					}
				}
			}

			.user-name {
				display: flex;
				
				&>view {
					display: flex;

					&>view {
						display: flex;
						align-items: center;

						&:last-child {
							margin-left: 11rpx;
							width: 150rpx;
							font-size: 20rpx;
							color: #257065;
							display: flex;
							flex-wrap: wrap;
						}
					}
				}
			}

			.item-qq {
				display: flex;

				.qq,
				.wechat {
					display: flex;

					&>view {
						image {
							width: 100%;
						}

						&:first-child {
							font-size: 30rpx;
							width: 30rpx;
							height: 30rpx;
							display: flex;
							align-items: center;
							color: #93D8AA;
						}

						&:last-child {
							margin-left: 11rpx;
							width: 150rpx;
							color: #257065;
							display: flex;
							flex-wrap: wrap;
							textarea{
								width: 100%;
								height: 100%;
								font-size: 20rpx;
								text-align: left;
							}
						}
					}
				}
			}

			.email {
				display: flex;
				height: 30rpx;
				&>view {
					&:first-child {
						width: 30rpx;
						height: 30rpx;
						display: flex;
						font-size: 30rpx;
						align-items: center;
						color: #93D8AA;
					}

					&:last-child {
						flex: 1;
						height: 30rpx;
						margin-left: 11rpx;
						font-size: 20rpx;
						color: #257065;
						display: flex;
						flex-wrap: wrap;
						textarea{
							height: 100%;
							width: 100%;
							font-size: 20rpx;
							text-align: left;
						}
					}
				}
			}
		}

		.user-dream {
			display: flex;
			height: 66rpx;
			margin: 73rpx 49rpx 0;
			justify-content: space-between;

			&-item {
				width: 130rpx;
				background: rgba(43, 194, 78, 1);
				border-radius: 7rpx;
				box-shadow: 0rpx 10rpx 10rpx rgba(43, 194, 78, .5);
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 22rpx;
				color: #FFFFFF;
				font-weight: bold;

				&:nth-child(2) {
					background: rgba(129, 207, 69, 1);
					box-shadow: 0rpx 10rpx 10rpx rgba(129, 207, 69, .5);
				}

				&:nth-child(3) {
					background: rgba(43, 194, 189, 1);
					box-shadow: 0rpx 10rpx 10rpx rgba(43, 194, 189, .5);
				}

				&:nth-child(4) {
					background: rgba(46, 156, 239, 1);
					box-shadow: 0rpx 10rpx 10rpx rgba(46, 156, 239, .5);
				}
			}
		}
	}
	}
</style>
