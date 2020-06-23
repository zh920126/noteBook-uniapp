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
			
			<view class="userInfo">
			      <view class="user-name">
			        <view class="user-name-title">
			          <view>姓名</view>
			          <view class="name">{{userInfo.nickName}}</view>
			        </view>
			        <view class="user-name-phone">
			          <view>手机</view>
			          <view class="name">13012345678</view>
			        </view>
			      </view>
			      <view class="item">
			        <view>单位</view>
			        <view>广州樊文花化妆品有限公司</view>
			      </view>
			      <view class="item">
			        <view>地址</view>
			        <view>广州珠江新城K11管理服务中心</view>
			      </view>
			      <view class="item-qq">
			        <view class="qq">
			          <view class="iconfont icon-QQ"></view>
			          <view class="name">12123456890</view>
			        </view>
			        <view class="wechat">
			          <view class="iconfont icon-weixin"></view>
			          <view class="name">13012345678</view>
			        </view>
			      </view>
			      <view class="email">
			          <view class="iconfont icon-email"></view>
			          <view class="name">12345333333333336890</view>
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
				userInfo: uni.getStorageInfoSync('userInfo') || {}
			}
		},
		onLoad(options) {
			console.log(options)
		},
		methods: {
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
		font-size: 22rpx;

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
				display: flex;
				margin-bottom: 27rpx;
				align-items: center;
			}

			.item {
				&>view {
					&:first-child {
						width: 30rpx;
					}

					&:last-child {
						margin-left: 11rpx;
						font-size: 22rpx;
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
							font-size: 22rpx;
							color: #257065;
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
							font-size: 22rpx;
							color: #257065;
							display: flex;
							flex-wrap: wrap;
						}
					}
				}
			}

			.email {
				display: flex;

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
						margin-left: 11rpx;
						font-size: 22rpx;
						color: #257065;
						display: flex;
						flex-wrap: wrap;
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
