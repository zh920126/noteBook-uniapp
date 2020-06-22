<template>
	<view>
		<!-- 顶部tab栏 -->
		<view class="head">
			<view class="tabbar">
				<view class="tab" @tap="handleLastMonth">上月</view>
				<view class="tab">
					<picker mode="date" @change="bindDateChange($event)">
						<view class="picker">{{year}}年第 {{month}} 月</view>
					</picker>
				</view>
				<view class="tab" @tap="handleNextMonth">下月</view>
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
				  <view class="quarter">本月度的目标总结(请在每季度末回到本业对应上表总结分析)</view>
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
				table: [{
						id: 1,
						name: '工作指标',
						children: [{
								complete: false,
								content: '',
								importanceLevel: '',
								aimMeasures: '',
								month: '',
								type: '工作指标',
								year: new Date().getFullYear()
							},
							{
								complete: false,
								content: '',
								importanceLevel: '',
								aimMeasures: '',
								month: '',
								type: '工作指标',
								year: new Date().getFullYear()
							},
							{
								complete: false,
								content: '',
								importanceLevel: '',
								aimMeasures: '',
								month: '',
								type: '工作指标',
								year: new Date().getFullYear()
							},
							{
								complete: false,
								content: '',
								importanceLevel: '',
								aimMeasures: '',
								month: '',
								type: '工作指标',
								year: new Date().getFullYear()
							},
							{
								complete: false,
								content: '',
								importanceLevel: '',
								aimMeasures: '',
								month: '',
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
								month: '',
								type: '其他目标',
								year: new Date().getFullYear()
							},
							{
								complete: false,
								content: '',
								importanceLevel: '健康计划',
								aimMeasures: '',
								month: '',
								type: '其他目标',
								year: new Date().getFullYear()
							},
							{
								complete: false,
								content: '',
								importanceLevel: '本季度反省',
								aimMeasures: '',
								month: '',
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
						type: '本月份创新与收获'
					}
				],
				month: new Date().getMonth() + 1,
				year: new Date().getFullYear(),
				update:true,
				update1:true
			}
		},
		methods: {
			
			// 自选时间
			bindDateChange(e){
				let {value}=e.detail
				this.month=new Date(value).getMonth()+1
				this.year=new Date(value).getFullYear()
				this.getUserQuarter()
				this.getUserSummary()
			},
			
			// 上月
			handleLastMonth(){
			    if(this.month-1==0){
			      this.month=12
			      this.year--
			    }else{
						this.month--
					}
			    this.getUserQuarter()
			    this.getUserSummary()
			},
			
			//下月
			handleNextMonth(){
				if(this.month+1==13){
					this.month=1
					this.year++
				}else{
					this.month++
				}
				this.getUserQuarter()
				this.getUserSummary()
			},
			
			// 更新月度总结
			async handleReason(e,value2){
				let {value} = e.detail
				let data = {
					content: value,
					month: this.month,
					type: value2.type,
					userid: uni.getStorageSync('userID'),
					year: this.year
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
					month: this.month,
					userId: uni.getStorageSync('userID'),
					year: this.year
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
					month: this.month,
					userId: uni.getStorageSync('userID'),
					year: this.year
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
					month: this.month,
					userId: uni.getStorageSync('userID'),
					year: this.year
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
					month: this.month,
					userId: uni.getStorageSync('userID'),
					year: this.year
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
			
			// 获取用户月度信息
			async getUserQuarter(){
				this.update=false
				let res = await myAxios({
					method: 'post',
					url: '/anonymous/findAimsByCondition',
					data: {
						month: this.month,
						userId: uni.getStorageSync('userID'),
						year: this.year
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
			},
			
			// 获取用户月度总结
			async getUserSummary(){
				this.update1=false
				let res = await myAxios({
					method: 'post',
					url: '/anonymous/querySummarize',
					data: {
						month:this.month,
						userid: uni.getStorageSync('userID'),
						year: this.year
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
						title:'获取月总结失败,请重试',
						icon:'none',
						duration:500
					})
				}
				this.update1=true
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
    &:nth-child(2){
      background: #fff;
      color: #2ECE94;
      picker{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
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
              border-left: 1rpx solid #1C5E55;
            }
          }
          &:last-child{
            width: 36rpx;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 30rpx;
          }
          input{
            height: 100%;
            width: 100%;
            text-align: center;
          }
          textarea{
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
