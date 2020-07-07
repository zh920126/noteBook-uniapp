<template>
	<view class="reg">
		<view class="btns">
			<view class="des">
				请输入手机号
			</view>
			<input type="text" :value="phoneNum" v-model="phoneNum"/>
			<view class="btn" @tap="handleGetPhoneNum">
				提交
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phoneNum: ''
			};
		},
		onLoad() {
			if(uni.getStorageSync('userID')){
				uni.redirectTo({
					url:'/pages/index/index'
				})
			}
		},
		methods: {
			handleGetPhoneNum() {
				console.log(this.phoneNum)
				if ((/^1[3456789]\d{9}$/.test(this.phoneNum))) {
					uni.setStorageSync('userID', this.phoneNum)
					uni.navigateTo({
						url:'/pages/index/index'
					})
				}else{
					uni.showToast({
						title:'手机号错误,请重新输入',
						icon:'none',
						duration:500
					})
				}
			}
		}
	}
</script>

<style lang="less">
	.reg {
		width: 100vw;
		height: 100vh;

		.btns {
			width: 60%;
			height: 200rpx;
			margin: 200rpx auto;

			.des {
				width: 100%;
				text-align: center;
			}

			input {
				width: 100%;
				border: 1rpx solid #000;
				outline: none;
				margin: auto;
				text-align: center;
			}

			.btn {
				width: 100rpx;
				border-radius: 5rpx;
				background: #257065;
				display: flex;
				justify-content: center;
				align-items: center;
				margin: 20rpx auto;
			}
		}
	}
</style>
