<template>
	<view>
		<!-- 顶部tab栏 -->
		<view class="head">
			<view class="tabbar">
				<block v-for="(value,index) in tabs" :key="value.name">
					<view @tap="handleClick" :data-index=index class="tab" :class=" changeIndex==index? 'on':''">
						{{value.name}}
					</view>
				</block>
			</view>
		</view>

		<!-- 表格部分--人生蓝图1 -->
		<view class="table" v-if="changeIndex==0">
			<view class="table-thead">
				<text>类别</text>
				<text>近期目标(1~3年内)</text>
			</view>
			<block v-for="(value,index) in arr" :key="value.type" v-if="update">
				<view class="tr">
					<view class="td1">{{value.type}}</view>
					<view class="td2">
						<textarea @blur="handleUpdate3" :data-index=index maxlength="-1" :value="value.content"></textarea>
					</view>
				</view>
			</block>
		</view>

		<!-- 表格部分--人生蓝图2 -->
		<view class="table" v-else-if="changeIndex==1">
			<view class="table-thead">
				<text>类别</text>
				<text>近期目标(5年内)</text>
			</view>
			<block v-for="(value,index) in array" :key="value.type" v-if="update">
				<view class="tr">
					<view class="td1">{{value.type}}</view>
					<view class="td2">
						<textarea @blur="handleUpdate5" :data-index=index maxlength="-1" :value="value.content"></textarea>
					</view>
				</view>
			</block>
		</view>

		<!-- 表格部分--人生蓝图3 -->
		<view class="table" v-else-if="changeIndex==2">
			<!-- 顶部部分 -->
			<view class="title-head">
				<block v-for="(value,index) in cate" :key="value.name">
					<view class="">{{value.name}}</view>
				</block>
			</view>

			<!-- 内容部分 -->
			<block v-for="(value,index) in cateList" :key="value.name">
				<view class="content">
					<view class="content-left">{{value.name}}</view>
					<view class="contain">
						<block v-if="update" v-for="(value2,index2) in value.children" :key="value2.count">
							<view class="content-right">
								<!-- 类别 -->
								<view>
									<input type="text" @blur="handleCate($event,value2)" :value="value2.type" />
								</view>
								<!-- 序号 -->
								<view>{{value2.count}}</view>
								<!-- 目标内容 -->
								<view>
								  <textarea @blur="handleContent($event,value2)" :value="value2.content"></textarea>
								</view>
								<!-- 方法措施 -->
								<view>
									<textarea @blur="handleMeasures($event,value2)" :value="value2.measures"></textarea>
								</view>
								<!-- 选择时间 -->
								<view>
								 <picker mode="date" :value="value2.startTime" @change="bindDateChange($event,value2)">
										<view class="picker">
											<text style="opacity:0">选择时间</text>
											<text>{{value2.startTime==null?'':value2.startTime}}</text>
										</view>
									</picker>
								</view>
								<!-- 完成打勾 -->
								<view :class="value2.complete==true?'iconfont icon-zhengque':''" @tap="handleComplete(value2)"></view>
							</view>
						</block>
					</view>
				</view>
			</block>

		</view>

	</view>
</template>

<script>
	import {
		myAxios
	} from '../../utils/myAxios.js'
	export default {
		data() {
			return {
				tabs: [{
						name: '人生蓝图一'
					},
					{
						name: '人生蓝图2'
					},
					{
						name: '人生蓝图3'
					},
				],
				arr: [{
						type: '事业'
					},
					{
						type: '财富'
					},
					{
						type: '家庭生活'
					},
					{
						type: '学习成长'
					},
					{
						type: '人际关系'
					},
					{
						type: '健康计划'
					}
				],
				array: [{
						type: '事业'
					},
					{
						type: '财富'
					},
					{
						type: '家庭生活'
					},
					{
						type: '学习成长'
					},
					{
						type: '人际关系'
					},
					{
						type: '健康计划'
					}
				],
				cate: [{
						name: ''
					},
					{
						name: '类别'
					},
					{
						name: '序号'
					},
					{
						name: '目标内容'
					},
					{
						name: '方法和措施'
					},
					{
						name: '起止时间'
					},
					{
						name: '完成打勾'
					},
				],
				cateList: [{
						name: '事业(工作)目标',
						children: [{
								parentType: '事业(工作)目标',
								count: 1,
								type: '',
								content: '',
								measures: '',
								startTime: '',
								complete: false
							},
							{
								parentType: '事业(工作)目标',
								count: 2,
								type: '',
								content: '',
								measures: '',
								startTime: '',
								complete: false
							},
							{
								parentType: '事业(工作)目标',
								count: 3,
								type: '',
								content: '',
								measures: '',
								startTime: '',
								complete: false
							},
							{
								parentType: '事业(工作)目标',
								count: 4,
								type: '',
								content: '',
								measures: '',
								startTime: '',
								complete: false
							},
							{
								parentType: '事业(工作)目标',
								count: 5,
								type: '',
								content: '',
								measures: '',
								startTime: '',
								complete: false
							},
							{
								parentType: '事业(工作)目标',
								count: 6,
								type: '',
								content: '',
								measures: '',
								startTime: '',
								complete: false
							},
							{
								parentType: '事业(工作)目标',
								count: 7,
								type: '',
								content: '',
								measures: '',
								startTime: '',
								complete: false
							},
							{
								parentType: '事业(工作)目标',
								count: 8,
								type: '',
								content: '',
								measures: '',
								startTime: '',
								complete: false
							}
						]
					},
					{
						name: '财富目标',
						children: [{
								parentType: '财富目标',
								count: 1,
								type: '',
								content: '',
								measures: '',
								startTime: '',
								complete: false
							},
							{
								parentType: '财富目标',
								count: 2,
								type: '',
								content: '',
								measures: '',
								startTime: '',
								complete: false
							},
							{
								parentType: '财富目标',
								count: 3,
								type: '',
								content: '',
								measures: '',
								startTime: '',
								complete: false
							},
							{
								parentType: '财富目标',
								count: 4,
								type: '',
								content: '',
								measures: '',
								startTime: '',
								complete: false
							}
						]
					},
					{
						name: '家庭生活',
						children: [{
								parentType: '家庭生活',
								count: 1,
								type: '',
								content: '',
								measures: '',
								startTime: '',
								complete: false
							},
							{
								parentType: '家庭生活',
								count: 2,
								type: '',
								content: '',
								measures: '',
								startTime: '',
								complete: false
							},
							{
								parentType: '家庭生活',
								count: 3,
								type: '',
								content: '',
								measures: '',
								startTime: '',
								complete: false
							},
							{
								parentType: '家庭生活',
								count: 4,
								type: '',
								content: '',
								measures: '',
								startTime: '',
								complete: false
							}
						]
					},
					{
						name: '学习成长',
						children: [{
								parentType: '学习成长',
								count: 1,
								type: '',
								content: '',
								measures: '',
								startTime: '',
								complete: false
							},
							{
								parentType: '学习成长',
								count: 2,
								type: '',
								content: '',
								measures: '',
								startTime: '',
								complete: false
							},
							{
								parentType: '学习成长',
								count: 3,
								type: '',
								content: '',
								measures: '',
								startTime: '',
								complete: false
							},
							{
								parentType: '学习成长',
								count: 4,
								type: '',
								content: '',
								measures: '',
								startTime: '',
								complete: false
							}
						]
					},
					{
						name: '人际关系',
						children: [{
								parentType: '人际关系',
								count: 1,
								type: '',
								content: '',
								measures: '',
								startTime: '',
								complete: false
							},
							{
								parentType: '人际关系',
								count: 2,
								type: '',
								content: '',
								measures: '',
								startTime: '',
								complete: false
							},
							{
								parentType: '人际关系',
								count: 3,
								type: '',
								content: '',
								measures: '',
								startTime: '',
								complete: false
							},
							{
								parentType: '人际关系',
								count: 4,
								type: '',
								content: '',
								measures: '',
								startTime: '',
								complete: false
							}
						]
					},
					{
						name: '健康计划',
						children: [{
								parentType: '健康计划',
								count: 1,
								type: '',
								content: '',
								measures: '',
								startTime: '',
								complete: false
							},
							{
								parentType: '健康计划',
								count: 2,
								type: '',
								content: '',
								measures: '',
								startTime: '',
								complete: false
							},
							{
								parentType: '健康计划',
								count: 3,
								type: '',
								content: '',
								measures: '',
								startTime: '',
								complete: false
							},
							{
								parentType: '健康计划',
								count: 4,
								type: '',
								content: '',
								measures: '',
								startTime: '',
								complete: false
							}
						]
					},
				],
				changeIndex: 0,
				update: true,
				completionTime: 3
			};
		},
		methods: {
			// tab栏切换
			async handleClick(e) {
				let {
					index
				} = e.currentTarget.dataset
				//判断用户点击的是哪一项
				if (index == 0) {
					this.getUserBlPrint()
				} else if (index == 1) {
					this.getUserBlPrint2()
				} else {
					this.viewBlPrint3()
				}
				this.changeIndex = index
			},
			
			// 人生蓝图3是否完成
			async handleComplete(e){
				let data=e
				data.userid=uni.getStorageSync('userID');
				//已经写有内容的才能标注是否完成
				console.log(Boolean(data.id))
				if(data.id){
					data.complete=!data.complete
					let res=await 	myAxios({
						url:'/anonymous/updateBlueprintDetailed',
						method:'post',
						data
					})
					if(res.data.statusCode==200){
						this.viewBlPrint3()
					}else{
						uni.showToast({
							title:'更新数据失败,请重试',
							icon:'none',
							duration:500
						})
					}
				}
			},
			
			// 人生蓝图3起止时间更新
			async bindDateChange(e,value2){
				let {value}=e.detail
				let data=value2
				data.startTime=value
				data.userid=uni.getStorageSync('userID');
				let res=await myAxios({
					url:'/anonymous/updateBlueprintDetailed',
					method:'post',
					data
				})
				if(res.data.statusCode==200){
					this.viewBlPrint3()
				}else{
					uni.showToast({
						title:'更新数据失败,请重试',
						icon:'none',
						duration:500
					})
				}
			},
			
			// 人生蓝图3方法措施更新
			async handleMeasures(e,value2){
				let {value}=e.detail
				let data=value2
				data.measures=value
				data.userid=uni.getStorageSync('userID');
				let res=await myAxios({
					url:'/anonymous/updateBlueprintDetailed',
					method:'post',
					data
				})
				if(res.data.statusCode==200){
					this.viewBlPrint3()
				}else{
					uni.showToast({
						title:'更新数据失败,请重试',
						icon:'none',
						duration:500
					})
				}
			},
			
			// 人生蓝图3目标内容更新
			async handleContent(e,value2){
				let {value}=e.detail
				let data =value2
				data.content=value
				data.userid=uni.getStorageSync('userID');
				let res=await myAxios({
					url:'/anonymous/updateBlueprintDetailed',
					method:'post',
					data
				})
				if(res.data.statusCode==200){
					this.viewBlPrint3()
				}else{
					uni.showToast({
						title: '更新数据失败,请重试',
						icon:'none',
						duration:500
					});
				}
			},
			
			// 人生蓝图3类别更新
			async handleCate(e,value2){
				let {value}=e.detail
				let data =value2
				data.type=value
				data.userid=uni.getStorageSync('userID');
				let res= await myAxios({
					url:'/anonymous/updateBlueprintDetailed',
					method:'post',
					data
				})
				if(res.data.statusCode==200){
					this.viewBlPrint3()
				}else{
					uni.showToast({
						title: '更新数据失败,请重试',
						icon:'none',
						duration:500
					});
				}
			},

			// 蓝图2数据更新
			async handleUpdate5(e) {
				// 从event当中获取参数
				let {
					index
				} = e.currentTarget.dataset
				let {
					value
				} = e.detail
				let data = {
					completionTime: 5,
					type: this.array[index].type,
					content: value,
					userid: uni.getStorageSync('userID')
				}
				if (this.array[index].id) {
					data.id = this.array[index].id
				}
				console.log(data)
				let res = await myAxios({
					method: 'post',
					url: '/anonymous/updateBlueprint',
					data
				})
				// console.log(res)
				// 更新成功之后，需要重新获取数据进行页面渲染
				if (res.data.statusCode == 200) {
					this.getUserBlPrint2()
				} else {
					uni.showToast({
						title: '更新失败,请重试',
						duration: 500,
						icon: 'none'
					})
				}
			},

			// 蓝图1数据更新
			async handleUpdate3(e) {
				// 从event当中获取参数
				let {
					index
				} = e.currentTarget.dataset
				let {
					value
				} = e.detail
				let data = {
					completionTime: 3,
					type: this.arr[index].type,
					content: value,
					userid: uni.getStorageSync('userID')
				}
				if (this.arr[index].id) {
					data.id = this.arr[index].id
				}
				console.log(data)
				let res = await myAxios({
					method: 'post',
					url: '/anonymous/updateBlueprint',
					data
				})
				// console.log(res)
				// 更新成功之后，需要重新获取数据进行页面渲染
				if (res.data.statusCode == 200) {
					this.getUserBlPrint()
				} else {
					uni.showToast({
						title: '更新失败,请重试',
						duration: 500,
						icon: 'none'
					})
				}
			},

			// 获取蓝图3的数据内容
			async viewBlPrint3(){
				// this.update=false
				let res=await myAxios({
					method:'post',
					url:'/anonymous/queryBlueprintDetailed',
					data:{
						userid:uni.getStorageSync('userID')
					}
				})
				// console.log(res);
				// 更新视图
				if(res.statusCode===200&&res.data.result.content){
					let {content}=res.data.result
					for(let i=0;i<this.cateList.length;i++){
						content.forEach(v=>{
							if(this.cateList[i].name===v.parentType){
								this.cateList[i]['children'][v.count-1]=v
								this.$set(this.cateList[i]['children'],v.count-1,v)
							}
						})
					}
				}else{
					uni.showToast({
						title:'获取蓝图3数据失败,请重试',
						icon:'none',
						duration:500
					})
				}
				// this.update=true
			},

			// 获取蓝图2的数据
			async getUserBlPrint2() {
				// this.update = false
				let data = {
					completionTime: 5,
					userid: uni.getStorageSync('userID')
				}
				let res = await myAxios({
					method: 'post',
					url: '/anonymous/queryBlueprint',
					data
				})
				if (res.data.message == '查询成功' && res.data.result.content) {
					let userBluePrint = res.data.result.content
					// 创建对象进行数据筛选
					userBluePrint.forEach(v => {
						if (v.type == '事业') {
							this.array[0] = v
							this.$set(this.array,0,v)
						}
						if (v.type == '财富') {
							this.array[1] = v
							this.$set(this.array,1,v)
						}
						if (v.type == '家庭生活') {
							this.array[2] = v
							this.$set(this.array,2,v)
						}
						if (v.type == '学习成长') {
							this.array[3] = v
							this.$set(this.array,3,v)
						}
						if (v.type == '人际关系') {
							this.array[4] = v
							this.$set(this.array,4,v)
						}
						if (v.type == '健康计划') {
							this.array[5] = v
							this.$set(this.array,5,v)
						}
					})
					// this.$set(this.array,index)
					// console.log(this.array)
				} else {
					uni.showToast({
						title: '获取人生蓝图2数据失败,请重试',
						duration: 500,
						icon: 'none'
					})
				}
				// this.update = true
			},

			// 进入页面就获取蓝图1的数据
			async getUserBlPrint() {
				// this.update = false
				let data = {
					completionTime: 3,
					userid: uni.getStorageSync('userID')
				}
				let res = await myAxios({
					method: 'post',
					url: '/anonymous/queryBlueprint',
					data
				})
				if (res.data.message == '查询成功' && res.data.result.content) {
					let userBluePrint = res.data.result.content
					// 创建对象进行数据筛选
					userBluePrint.forEach(v => {
						if (v.type == '事业') {
							this.arr[0] = v
							this.$set(this.arr,0,v)
						}
						if (v.type == '财富') {
							this.arr[1] = v
							this.$set(this.arr,1,v)
						}
						if (v.type == '家庭生活') {
							this.arr[2] = v
							this.$set(this.arr,2,v)
						}
						if (v.type == '学习成长') {
							this.arr[3] = v
							this.$set(this.arr,3,v)
						}
						if (v.type == '人际关系') {
							this.arr[4] = v
							this.$set(this.arr,4,v)
						}
						if (v.type == '健康计划') {
							this.arr[5] = v
							this.$set(this.arr,5,v)
						}
					})

				} else {
					uni.showToast({
						title: '获取人生蓝图1数据失败,请重试',
						duration: 500,
						icon: 'none'
					})
				}
				// this.update = true
			}
		},
		onLoad() {
			this.getUserBlPrint()
		}
	}
</script>

<style lang="less">
	page {
		background: #EFF3F6;
	}

	.head {
		background: #fff;
		height: 50rpx;
		box-sizing: border-box;
		padding: 7rpx;
	}

	.tabbar {
		margin: auto;
		width: 378rpx;
		height: 36rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #F8F8F8;
		border-radius: 5rpx;
		overflow: hidden;

		.tab {
			flex: 1;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 15rpx;
			color: #404040;
		}

		.on {
			color: #FFFFFF;
			background: rgba(46, 206, 148, 1);
		}
	}

	.table {
		border: 1rpx solid #1C5E55;
		margin: 0 14rpx;
		color: #219d9c;
		background: #fff;

		&-thead {
			height: 40rpx;
			display: flex;
			background: #22705D;

			text {
				width: 72rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				border-bottom: 1rpx solid #1C5E55;
				border-left: 1rpx solid #1C5E55;
				font-size: 13rpx;
				color: #fff;
				font-weight: bold;

				&:nth-child(2) {
					flex: 1;
				}
			}
		}

		.title-head {
			display: flex;
			height: 40rpx;

			&>view {
				box-sizing: border-box;
				border-bottom: 1rpx solid #1C5E55;
				border-left: 1rpx solid #1C5E55;
				background: #22705D;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 13rpx;
				color: #fff;
				font-weight: bold;

				&:first-child {
					width: 72rpx;
					border-left: 0rpx;
				}

				&:nth-child(2) {
					width: 72rpx;
				}

				&:nth-child(3) {
					width: 36rpx;
				}

				&:nth-child(4) {
					width: 210rpx;
				}

				&:nth-child(5) {
					flex: 1;
				}

				&:nth-child(6) {
					width: 86rpx;
				}

				&:last-child {
					width: 36rpx;
					display: flex;
					justify-content: center;
					align-items: center;
				}
			}
		}

		.content {
			display: flex;

			&-left {
				width: 72rpx;
				border-bottom: 1rpx solid #1C5E55;
				box-sizing: border-box;
				border-top: 0rpx;
				background: #22705D;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 13rpx;
				color: #fff;
				font-weight: bold;
				writing-mode: vertical-rl;

				&:last-child {
					border-bottom: 0rpx;
				}
			}

			.contain {
				flex: 1;
				border-left: 1rpx solid #1C5E55;
			}

			&-right {
				display: flex;
				height: 90rpx;
				width: 100%;

				&>view {
					border: 1rpx solid #1C5E55;
					border-left: 0rpx;
					border-top: 0rpx;
					box-sizing: border-box;

					input,
					textarea {
						width: 100%;
						height: 100%;
						box-sizing: border-box;
						text-align: center;
					}

					&:first-child {
						width: 72rpx;
						border-left: 0rpx;
					}

					&:nth-child(2) {
						width: 36rpx;
						display: flex;
						font-size: 28rpx;
						justify-content: center;
						align-items: center;
					}

					&:nth-child(3) {
						width: 210rpx;
					}

					&:nth-child(4) {
						flex: 1;
					}

					&:last-child {
						width: 36rpx;
						display: flex;
						justify-content: center;
						align-items: center;
					}

					&:nth-child(5) {
						width: 86rpx;
						display: flex;
						justify-content: center;
						align-items: center;

						picker {
							z-index: 99;
							width: 100%;
							height: 100%;
							position: relative;

							text {
								&:last-child {
									position: absolute;
									top: 0;
									left: 0;
									display: flex;
									font-size: 20rpx;
									justify-content: center;
									align-items: center;
								}
							}
						}
					}
				}
			}
		}

		.tr {
			display: flex;
			height: 141rpx;

			.td1 {
				justify-content: center;
				align-items: center;
				width: 72rpx;
				border-bottom: 1rpx solid #1C5E55;
				border-left: 1rpx solid #1C5E55;
				display: flex;
				background: #22705D;
				color: #fff;
				font-size: 13rpx;

				&:last-child {
					border-bottom: 0rpx;
				}
			}

			.td2 {
				flex: 1;
				border-bottom: 1rpx solid #1C5E55;
				border-left: 1rpx solid #1C5E55;

				textarea {
					width: 100%;
					height: 100%;
					text-align: center;
				}
			}

			&:last-child {
				.td2 {
					border-bottom: 0rpx;
				}
			}
		}
	}
</style>
