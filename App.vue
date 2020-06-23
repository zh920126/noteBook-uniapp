<script>
	export default {
		onLaunch: function(options) {
			console.log('App Launch')
			uni.setStorageSync('userID','10')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import url("static/style/iconfont.css");
</style>
