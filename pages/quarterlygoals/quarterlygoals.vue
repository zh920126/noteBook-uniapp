<template>
	<view>
		
		<!-- 顶部tab栏 -->
		<view class="head">
		  <view class="tabbar">
		    <block v-for="(value,index) in tabs" :key="value.id">
		      <view  class="tab" :class="(changeIndex-1)==index?'on':''" @tap="changeTab(value.id)">
		        {{value.name}}
		      </view>
		    </block>
		  </view>
		</view>
		
		<!-- 表格部分 -->
		<view class="table">
			<!-- 表头 -->
			<view class="th">
				<view class="td">类别</view>
				<view class="td">重要级别</view>
				<view class="td">目标内容</view>
				<view class="td">方法和措施</view>
				<view class="td">完成打勾</view>
			</view>
			<!-- 表格主体 -->
			<block v-for="(value,index) in table" :key="value.id">
				<view class="tr">
					<view class="td1">{{value.name}}</view>
					<view class="td2">
						<block v-if="update" v-for="(value2,index2) in value.children" :key="index2">
							<view class="aa">
								<view class="td3">
									<view class="td3-son">
									  <input type="text" :value="value2.importanceLevel" @blur="handleLevel($event,value2)" />
									</view>
									<view class="td3-son">
									  <textarea :value="value2.content" @blur="handleContent($event,value2)" class=""></textarea>
									</view>
									<view class="td3-son">
									  <textarea :value="value2.aimMeasures" class="" @blur="handleMeasures($event,value2)"></textarea>
									</view>
									<view class="td3-son" :class="value2.complete==true?'iconfont icon-zhengque':''" @tap="handleComplete(value2)">
									</view>
								</view>
							</view>
						</block>
					</view>
				</view>
			</block>
			
		</view>
		
		<!-- 季度总结部分 -->
		<view class="box">
		  <view class="quarter">本季度的目标总结(请在每季度末回到本业对应上表总结分析)</view>
		  <view class="unfinished-part">
		  </view>
		  <block v-if="update1" v-for="(value,index) in reasonArr" :key="value.type">
		    <view class="reason">
		      <text>{{value.type}}</text>
		      <textarea :value="value.content" @blur="handleReason($event,value)"></textarea>
		    </view>
		  </block>
		</view>
		
	</view>
</template>

<script>
	import {myAxios} from '../../utils/myAxios.js'
	export default {
		data() {
			return {
				tabs: [{
						id: 1,
						name: '第一季度'
					},
					{
						id: 2,
						name: '第二季度'
					},
					{
						id: 3,
						name: '第三季度'
					},
					{
						id: 4,
						name: '第四季度'
					}
				],
				table: [{
						id: 1,
						name: '工作指标',
						children: [{
								complete: false,
								content: '',
								importanceLevel: '',
								aimMeasures: '',
								quarter: '',
								quarterOrMonthFlag: 'quarter',
								type: '工作指标',
								year: new Date().getFullYear()
							},
							{
								complete: false,
								content: '',
								importanceLevel: '',
								aimMeasures: '',
								quarter: '',
								quarterOrMonthFlag: 'quarter',
								type: '工作指标',
								year: new Date().getFullYear()
							},
							{
								complete: false,
								content: '',
								importanceLevel: '',
								aimMeasures: '',
								quarter: '',
								quarterOrMonthFlag: 'quarter',
								type: '工作指标',
								year: new Date().getFullYear()
							},
							{
								complete: false,
								content: '',
								importanceLevel: '',
								aimMeasures: '',
								quarter: '',
								quarterOrMonthFlag: 'quarter',
								type: '工作指标',
								year: new Date().getFullYear()
							},
							{
								complete: false,
								content: '',
								importanceLevel: '',
								aimMeasures: '',
								quarter: '',
								quarterOrMonthFlag: 'quarter',
								type: '工作指标',
								year: new Date().getFullYear()
							},
						]
					},
					{
						id: 2,
						name: '其他目标',
						children: [{
								complete: false,
								content: '',
								importanceLevel: '学习计划',
								aimMeasures: '',
								quarter: '',
								quarterOrMonthFlag: 'quarter',
								type: '其他目标',
								year: new Date().getFullYear()
							},
							{
								complete: false,
								content: '',
								importanceLevel: '健康计划',
								aimMeasures: '',
								quarter: '',
								quarterOrMonthFlag: 'quarter',
								type: '其他目标',
								year: new Date().getFullYear()
							},
							{
								complete: false,
								content: '',
								importanceLevel: '本季度反省',
								aimMeasures: '',
								quarter: '',
								quarterOrMonthFlag: 'quarter',
								type: '其他目标',
								year: new Date().getFullYear()
							},
						]
					}
				],
				reasonArr: [{
						content: '',
						type: '未完成目标的障碍和原因'
					},
					{
						content: '',
						type: '客服障碍的对策和方法'
					},
					{
						content: '',
						type: '本季度创新与收获'
					}
				],

				update:true,
				update1:true,
				changeIndex: 1
			};
		},
		methods:{
			
			// tab栏切换
			async changeTab(value){
				this.changeIndex=value
				this.getUserQuarter()
				this.getUserSummary()
			},
			
			// 更新季度总结
			async handleReason(e,value2){
				let {value} = e.detail
				let data = {
					content: value,
					quarter: this.changeIndex,
					type: value2.type,
					userid: uni.getStorageSync('userID'),
					year: new Date().getFullYear()
				}
				if (value2.id) {
					data.id = value2.id
				}
				let res = await myAxios({
					method: 'post',
					url: '/anonymous/updateSummarize',
					data
				})
				if(res.data.statusCode==200){
					this.getUserSummary()
				}else{
					uni.showToast({
						title:'更新失败,请重试',
						icon:'none',
						duration:500
					})
				}
			},
			
			// 更新完成状态
			async handleComplete(value2){
				let data = {
					complete: !value2.complete,
					content: value2.content,
					importanceLevel: value2.importanceLevel,
					aimMeasures: value2.aimMeasures,
					type: value2.type,
					quarter: this.changeIndex,
					userId: uni.getStorageSync('userID'),
					year: value2.year
				}
				// 有ID才能选择打勾
				if (value2.id) {
					data.id = value2.id
					let res = await myAxios({
						method: 'post',
						url: '/anonymous/updateOrInsertAirms',
						data
					})
					// console.log(data)
					if(res.data.statusCode==200){
						this.getUserQuarter()
					}else{
						uni.showToast({
							title:'更新失败,请重试',
							icon:'none',
							duration:500
						})
					}
				}
			},
			
			// 更新方法和措施
			async handleMeasures(e,value2){
				let {value} = e.detail
				let data = {
					complete: value2.complete,
					content: value2.content,
					importanceLevel: value2.importanceLevel,
					aimMeasures: value,
					type: value2.type,
					quarter: this.changeIndex,
					userId: uni.getStorageSync('userID'),
					year: value2.year
				}
				if (value2.id) {
					data.id = value2.id
				}
				let res = await myAxios({
					method: 'post',
					url: '/anonymous/updateOrInsertAirms',
					data
				})
				// console.log(data)
				if(res.data.statusCode==200){
					this.getUserQuarter()
				}else{
					uni.showToast({
						title:'更新失败,请重试',
						icon:'none',
						duration:500
					})
				}
			},
			
			// 更新目标内容
			async handleContent(e,value2){
				let {value} = e.detail
				let data = {
					complete: value2.complete,
					content: value,
					importanceLevel: value2.importanceLevel,
					aimMeasures: value2.aimMeasures,
					type: value2.type,
					quarter: this.changeIndex,
					userId: uni.getStorageSync('userID'),
					year: value2.year
				}
				if (value2.id) {
					data.id = value2.id
				}
				let res = await myAxios({
					method: 'post',
					url: '/anonymous/updateOrInsertAirms',
					data
				})
				// console.log(data)
				if(res.data.statusCode==200){
					this.getUserQuarter()
				}else{
					uni.showToast({
						title:'更新失败,请重试',
						icon:'none',
						duration:500
					})
				}
			},
			
			//更新类别信息 
			async handleLevel(e,value2){
				let {value} =e.detail
				let data = {
					complete: value2.complete,
					content: value2.content,
					importanceLevel: value,
					aimMeasures: value2.aimMeasures,
					type: value2.type,
					quarter: this.changeIndex,
					userId: uni.getStorageSync('userID'),
					year: value2.year
				}
				if (value2.id) {
					data.id = value2.id
				}
				// console.log(data)
				let res = await myAxios({
					method: 'post',
					url: '/anonymous/updateOrInsertAirms',
					data
				})
				if(res.data.statusCode==200){
					this.getUserQuarter()
				}else{
					uni.showToast({
						title:'更新失败,请重试',
						icon:'none',
						duration:500
					})
				}
			},
			
			// 时间转换方法
			// 时间转换
			getTime() {
				let date = new Date()
				let year = date.getFullYear()
				let month = date.getMonth() + 1
				let days = date.getDate()
				month = month < 10 ? '0' + month : month
				days = days < 10 ? '0' + days : days
				return year + '-' + month + '-' + days
			},
			
			// 获取用户季度总结
			async getUserSummary(){
				this.update1=false
				let res = await myAxios({
					method: 'post',
					url: '/anonymous/querySummarize',
					data: {
						quarter: this.changeIndex,
						userid: uni.getStorageSync('userID'),
						year: new Date().getFullYear()
					}
				})
				if(res.data.statusCode==200&&res.data.result){
					// 初始化数据
					this.reasonArr= [{
							content: '',
							type: '未完成目标的障碍和原因'
						},
						{
							content: '',
							type: '客服障碍的对策和方法'
						},
						{
							content: '',
							type: '本季度创新与收获'
						}
					]
					let {result}=res.data
					result.forEach(v=>{
						for (let i = 0; i < this.reasonArr.length; i++) {
							if (v.type == this.reasonArr[i].type) {
								this.reasonArr[i] = v
							}
						}
					})
				}else{
					uni.showToast({
						title:'获取季度总结失败,请重试',
						icon:'none',
						duration:500
					})
				}
				this.update1=true
			},
			
			// 获取用户季度信息
			async getUserQuarter(){
				this.update=false
				let res = await myAxios({
					method: 'post',
					url: '/anonymous/findAimsByCondition',
					data: {
						quarter: this.changeIndex,
						userId: uni.getStorageSync('userID'),
						year: new Date().getFullYear()
					}
				})
				if(res.data.statusCode==200&&res.data.otherTarget&&res.data.workIndex){
					// 更新页面数据之前先还原初始数据
					this.table= [{
							id: 1,
							name: '工作指标',
							children: [{
									complete: false,
									content: '',
									importanceLevel: '',
									aimMeasures: '',
									quarter: '',
									quarterOrMonthFlag: 'quarter',
									type: '工作指标',
									year: new Date().getFullYear()
								},
								{
									complete: false,
									content: '',
									importanceLevel: '',
									aimMeasures: '',
									quarter: '',
									quarterOrMonthFlag: 'quarter',
									type: '工作指标',
									year: new Date().getFullYear()
								},
								{
									complete: false,
									content: '',
									importanceLevel: '',
									aimMeasures: '',
									quarter: '',
									quarterOrMonthFlag: 'quarter',
									type: '工作指标',
									year: new Date().getFullYear()
								},
								{
									complete: false,
									content: '',
									importanceLevel: '',
									aimMeasures: '',
									quarter: '',
									quarterOrMonthFlag: 'quarter',
									type: '工作指标',
									year: new Date().getFullYear()
								},
								{
									complete: false,
									content: '',
									importanceLevel: '',
									aimMeasures: '',
									quarter: '',
									quarterOrMonthFlag: 'quarter',
									type: '工作指标',
									year: new Date().getFullYear()
								},
							]
						},
						{
							id: 2,
							name: '其他目标',
							children: [{
									complete: false,
									content: '',
									importanceLevel: '学习计划',
									aimMeasures: '',
									quarter: '',
									quarterOrMonthFlag: 'quarter',
									type: '其他目标',
									year: new Date().getFullYear()
								},
								{
									complete: false,
									content: '',
									importanceLevel: '健康计划',
									aimMeasures: '',
									quarter: '',
									quarterOrMonthFlag: 'quarter',
									type: '其他目标',
									year: new Date().getFullYear()
								},
								{
									complete: false,
									content: '',
									importanceLevel: '本季度反省',
									aimMeasures: '',
									quarter: '',
									quarterOrMonthFlag: 'quarter',
									type: '其他目标',
									year: new Date().getFullYear()
								},
							]
						}
					]
					let {otherTarget,workIndex}=res.data
					 workIndex.forEach((v, i) => {
							this.table[0].children[i]=v
							this.table[0].children.length = 5
							// this.$set(this.table[0].children,i,v)
						});
					otherTarget.forEach((v, i) => {
						if(v.importanceLevel=='学习计划'){
							this.table[1].children[0]=v
						}else if(v.importanceLevel=='健康计划'){
							this.table[1].children[1]=v
						}else if(v.importanceLevel=='本季度反省'){
							this.table[1].children[2]=v
						}else{
							table[1].children.push(v)
						}
						this.table[1].children.length = 3
						// this.$set(this.table[1].children,i,v)
					});
				}else{
					uni.showToast({
						title:'获取季度信息失败,请重试',
						icon:'none',
						duration:500
					})
				}
				// console.log(this.table)
				this.update=true
			}
		},
		onLoad() {
			this.getUserQuarter()
			this.getUserSummary()
		}
	}
</script>

<style lang="less">
page{
  background: #EFF3F6;
}
.head{
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
  .on{
    color: #FFFFFF;
    background:rgba(46,206,148,1);
  }
}

.table {
  border: 1rpx solid #1C5E55;
  margin: 0 14rpx;
  color: #219d9c;
  background: #fff;
  .th {
    height: 40rpx;
    display: flex;
    background: #22705D;
    font-size: 13rpx;
    color: #fff;
    font-weight: bold;
    .td {
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      border-bottom: 1rpx solid #1C5E55;
      border-left: 1rpx solid #1C5E55;
      &:first-child{
        width: 72rpx;
      }
      &:nth-child(2){
        width: 72rpx;
      }
      &:nth-child(3),&:nth-child(4){
        flex: 1;
      }
      &:last-child{
        width: 36rpx;
      }
    }
  }
  .tr {
    display: flex;
    &:last-child{
      .aa{
        &:last-child{
          .td3-son{
            border-bottom: 0rpx;
          }
        }
      }
    }
    .td1 {
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 1rpx solid #1C5E55;
      background: #22705D;
      writing-mode: vertical-lr;
      width: 72rpx;
      box-sizing: border-box;
      font-size: 13rpx;
      color: #fff;
      font-weight: bold;
    }
    .td2{
      flex: 1;
      .td3{
        display: flex;
        height: 108rpx;
        &-son{
          box-sizing: border-box;
          border-bottom: 1rpx solid #1C5E55;
          border-left: 1rpx solid #1C5E55;
          &:first-child{
            width: 72rpx;
            color: #1C5E55;
						input{
							font-size: 13rpx;
						}
          }
          &:nth-child(2),&:nth-child(3){
            flex: 1;
          }
          &:nth-child(3){
            textarea{
            }
          }
          &:last-child{
            width: 36rpx;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 30rpx;
          }
          &>input{
            height: 100%;
            width: 100%;
            text-align: center;
          }
          &>textarea{
            width: 100%;
            height: 100%;
            text-align: center;
          }
        }
      }
    }
  }
}
.box{
  margin: 17rpx 14rpx 0;
  border: 1rpx solid #1C5E55;
}
.quarter{
  height: 40rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #22705D;
  font-size: 13rpx;
  color: #fff;
  font-weight: bold;
}
.unfinished-part{
  height: 154rpx;
  border-top: 1rpx solid #1C5E55;
  border-bottom: 1rpx solid #1C5E55;
}
.reason{
  display: flex;
  height: 154rpx;
  &:last-child{
    text,textarea{
      border-bottom: 0rpx;
    }
  }
  text{
    width: 144rpx;
    padding:0 6rpx ;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1rpx solid #1C5E55;
    font-size: 15rpx;
    color: #1C5E55;
  }
  textarea{
    flex: 1;
    height: 100%;
    box-sizing: border-box;
    text-align: center;
    border-bottom: 1rpx solid #1C5E55;
    border-left: 1rpx solid #1C5E55;
  }
}
</style>
