<template>
	<view>
		<!-- 显示周 -->
		<block v-if="changeIndex==0">
			<!-- 顶部tab栏 -->
			<view class="tabbar">
				<view class="weekTab">
					<block v-for="(value,index) in weekDays" :key="value">
					<view @tap="handleChangeTab(index)" :class="changeIndex===index?'on':''">{{value}}</view>
					</block>
				</view>
				<view class="week-change">
					<view class="tab" @tap="handleLastWeek">上一周</view>
					<view class="tab">
						{{year}}年 第{{week}}周
					</view>
					<view class="tab" @tap="handleNextWeek">下一周</view>
				</view>
			</view>

			<!-- 表格数据部分 -->
			<view class="week">
				<!-- 左边表格 -->
				<view class="week-left" v-if="update">
					<view class="week-left-item">上周总结</view>
					<view class="week-left-item">目标完成情况</view>
					 <block v-for="(value,index) in weekPerformance" :key="Math.random()">
							<view class="week-left-item">
							<textarea class="mytext" :value="value.content" @blur="handleWeekPerformance($event,value)"></textarea>
						</view>
					</block>
					<view class="week-left-item">未完成目标的原因及障碍</view>
					<block v-for="(value,index) in reason" :key="Math.random()">
						<view class="week-left-item">
						<textarea class="mytext" @blur="handleReason($event,value)" :value="value.content"></textarea>
					</view>
					</block>
					<view class="week-left-item">克服障碍的对策和方法</view>
					<block v-for="(value,index) in service" :key="Math.random()">
						<view class="week-left-item">
						<textarea class="mytext" @blur="handleService($event,value)" :value="value.content"></textarea>
					</view>
					</block> 
					<view class="week-left-item">本周创新与收获</view>
					<block v-for="(value,index) in harvest" :key="index">
						<view class="week-left-item">
						<textarea class="mytext" @blur="handleHarvest($event,value)" :value="value.content"></textarea>
					</view>
					</block>
				</view>
				<!-- 右边表格 -->
				<view class="week-right" v-if="update1">
						<view class="week-right-title">
							<view class="left">序号</view>
							<view class="center">
								<view class="icon">
									<text>本周目标</text>
								</view>
								<view class="description">
									<view>1.请在上周五的规划填写</view>
									<view>2.按目标重要程度规划有限顺序</view>
									<view>3.完成一项,在完成时限处打勾</view>
								</view>
							</view>
							<view class="right">完成期限</view>
						</view>
						<block v-for="(value,index) in weeklyPlan" :key="index">
							<view class="week-right-content">
								<view class="left">{{index+1}}</view>
								<view class="center">
									<textarea class="mytext" :value="value.content" @blur="handleUpdatePlan($event,value)"></textarea>
								</view>
								<view class="right" :class="value.complete==true?'iconfont icon-zhengque':''" @tap="handleComplete(value)"></view>
							</view>
						</block>
					</view>
					
			</view>
				
			<!-- 底部图片以及其他计划部分 -->
			<view class="footer">
				<view class="footer-left">广告位
				</view>
				<view class="footer-right">
					<view class="footer-right-title">
						<view class="title-left">本周其他目标</view>
						<view class="title-right">
							请注意规划你的生活，平衡你的人生，以下目标做到打'√',本周有特别的日子吗？请标注 (生日/节日/纪念日)
						</view>
					</view>
					<block v-for="(value,index) in otherPlan" :key="value.type">
					<view class="footer-right-content">
						 <view class="content-left">{{value.type}}</view>
						 <view class="content-center">
							 <textarea class="mytext" :value="value.content" @blur="handleOtherPlan($event,value)"></textarea>
						 </view>
						<view class="content-right">
							<view :class="value.complete==true?'iconfont icon-zhengque':''" @tap="handleOtherComplete(value)"></view>
						</view>
					</view>
					</block>
				</view>
			</view>
			
			<!-- 分享部分 -->
			<view class="share">
				<view class="share-top">本周最想分享的三点</view>
				<block v-if="update2" v-for="(value,index) in shareArray" :key="value.type">
				<view class="share-content">
					<view class="share-content-left">{{value.type}}</view>
					<view class="share-content-right">
						<textarea :value="value.content" @blur="handleShare($event,value)"></textarea>
					</view>
				</view>
				</block>
			</view>
			
		</block>
		
		<!-- 显示天 -->
		<block v-else>
			<!-- 顶部tabbar -->
			<view class="tabbar">
				<view class="weekTab">
					<block v-for="(value,index) in weekDays" :key="value">
					<view @tap="handleChangeTab(index)" :class="changeIndex===index?'on':''">{{value}}</view>
					</block>
				</view>
				<view class="week-change">
					<view class="tab" @tap="handleLastWeek">上一周</view>
					<view class="tab">
						{{year}}年 第{{week}}周
					</view>
					<view class="tab" @tap="handleNextWeek">下一周</view>
				</view>
			</view>
			
			
		</block>
		
		
	</view>
</template>

<script>
	import {myAxios} from '../../utils/myAxios.js'
	export default {
		data() {
			return {
				weekDays:['周','天'],
				weekPerformance: [{
						content: '',
						type: '目标完成情况',
					},
					{
						content: '',
						type: '目标完成情况',
					},
					{
						content: '',
						type: '目标完成情况',
					},
					{
						content: '',
						type: '目标完成情况',
					},
					{
						content: '',
						type: '目标完成情况',
					},
					{
						content: '',
						type: '目标完成情况',
					}
				],
				reason: [{
						content: '',
						type: '未完成目标的原因及障碍'
					},
					{
						content: '',
						type: '未完成目标的原因及障碍'
					},
					{
						content: '',
						type: '未完成目标的原因及障碍'
					}
				],
				service: [{
						content: '',
						type: '克服障碍的对策和方法'
					},
					{
						content: '',
						type: '克服障碍的对策和方法'
					},
					{
						content: '',
						type: '克服障碍的对策和方法'
					},
				],
				harvest: [{
						content: '',
						type: '本周创新与收获'
					},
					{
						content: '',
						type: '本周创新与收获'
					},
					{
						content: '',
						type: '本周创新与收获'
					},
				],
				weeklyPlan: [{
						content: '',
						type: '本周目标',
						complete: false
					},
					{
						content: '',
						type: '本周目标',
						complete: false
					},
					{
						content: '',
						type: '本周目标',
						complete: false
					},
					{
						content: '',
						type: '本周目标',
						complete: false
					},
					{
						content: '',
						type: '本周目标',
						complete: false
					},
					{
						content: '',
						type: '本周目标',
						complete: false
					},
					{
						content: '',
						type: '本周目标',
						complete: false
					},	{
						content: '',
						type: '本周目标',
						complete: false
					},
					{
						content: '',
						type: '本周目标',
						complete: false
					},
					{
						content: '',
						type: '本周目标',
						complete: false
					},
					{
						content: '',
						type: '本周目标',
						complete: false
					},
					{
						content: '',
						type: '本周目标',
						complete: false
					},
					{
						content: '',
						type: '本周目标',
						complete: false
					},
					{
						content: '',
						type: '本周目标',
						complete: false
					},
					{
						content: '',
						type: '本周目标',
						complete: false
					},
					{
						content: '',
						type: '本周目标',
						complete: false
					},
					{
						content: '',
						type: '本周目标',
						complete: false
					},
					{
						content: '',
						type: '本周目标',
						complete: false
					}
				],
				otherPlan: [{
						type: '学习计划',
						content: '',
						complete: false
					},
					{
						type: '健康计划',
						content: '',
						complete: false
					},
					{
						type: '本周反省',
						content: '',
						complete: false
					}
				],
				shareArray:[
				      {
				        type:'1',
				        content:''
				      },
				      {
				        type:'2',
				        content:''
				      },
				      {
				        type:'3',
				        content:''
				      },
				    ],
				weekDate:[
					{
						name:'周一',
						type:1
					},{
						name:'周二',
						type:2
					},{
						name:'周三',
						type:3
					},{
						name:'周四',
						type:4
					},{
						name:'周五',
						type:5
					},{
						name:'周六',
						type:6
					},{
						name:'周日',
						type:7
					},
				]
				week: 0,
				year: new Date().getFullYear(),
				time: new Date().getTime(),
				update:true,
				update1:true,
				update2:true,
				changeIndex:0
			};
		},
		methods:{
			
		// 切换周--天
		async handleChangeTab(index){
			this.changeIndex=index
			if(index==0){
				this.getWeeklyTarget()
				this.getWeeklySummary()
			}else{
				
			}
		},
		
		
			
		// 下一周
		handleNextWeek(){
				if (this.week + 1 === 53) {
					this.week = 1
					this.year++
				}else{
					this.week++
				}
				this.time=this.time+60*60*24*7*1000
				this.getWeeklyTarget()
				this.getWeeklySummary()
		},
			
		// 上一周
		handleLastWeek(){
			if (this.week - 1 === 0) {
				this.week = 52
				this.year--
			}else{
				this.week--
			}
			this.time=this.time-60*60*24*7*1000
			this.getWeeklyTarget()
			this.getWeeklySummary()
		},
		
		// 分享数据更新
		async handleShare(e,value2){
			let {value}=e.detail
			let data={
				content:value,
				type:value2.type,
				timeSign:+('' + this.year + this.week),
				userid:uni.getStorageSync('userID')
			}
			if(value2.id){
				data.id=value2.id
			}
			let res= await myAxios({
				method:'post',
				url:'/anonymous/updateShare',
				data
			})
			if(res.data.statusCode==200){
				this.getSharePlan()
			}else{
				uni.showToast({
					title:'更新数据失败,请重试',
					icon:'none',
					duration:500
				})
			}
		},
		
		// 其他目标更新
		async handleOtherComplete(value){
			let data = {
				complete: !value.complete,
				content: value.content,
				timeSign: +('' + this.year + this.week),
				type: value.type,
				userid: uni.getStorageSync('userID'),
				id:value.id
			}
			// 必须是里面已经填写了内容的才可以打勾
			if(value.id){
				let res = await myAxios({
					method: 'post',
					url: '/anonymous/updateWeekPlan',
					data
				})
				this.weeklyPlan.forEach(v => {
					if (v.id === value.id) {
						v.complete = !v.complete
					}
				})
				if(res.data.statusCode==200){
					this.getWeeklyTarget()
				}else{
					uni.showToast({
						title:'更新数据失败,请重试',
						icon:'none',
						duration:500
					})
				}
			}
		},
			
		// 其他目标更新
		async handleOtherPlan(e,value2){
			let {value}=e.detail
			let data={
				complete: value2.complete,
				content: value,
				timeSign: +('' + this.year + this.week),
				type: value2.type,
				userid: uni.getStorageSync('userID')
			}
			if(value2.id){
				data.id=value2.id
			}
			let res=await myAxios({
				method:'post',
				url:'/anonymous/updateWeekPlan',
				data
			})
			console.log(res.data.message)
			if(res.data.statusCode==200){
				this.getWeeklyTarget()
			}else{
				uni.showToast({
					title:'更新数据失败,请重试',
					icon:'none',
					duration:500
				})
			}
		},
		
		// 本周目标完成状态更新
		async handleComplete(value){
			let data = {
				complete: !value.complete,
				content: value.content,
				timeSign: +('' + this.year + this.week),
				type: value.type,
				userid: uni.getStorageSync('userID'),
				id:value.id
			}
			// 必须是里面已经填写了内容的才可以打勾
			if(value.id){
				let res = await myAxios({
					method: 'post',
					url: '/anonymous/updateWeekPlan',
					data
				})
				if(res.data.statusCode==200){
					this.getWeeklyTarget()
				}else{
					uni.showToast({
						title:'更新数据失败,请重试',
						icon:'none',
						duration:500
					})
				}
			}
		},
				
		// 本周目标更新
		async handleUpdatePlan(e,value2){
			let {value}=e.detail
			let data={
				complete: value2.complete,
				content: value,
				timeSign: +('' + this.year + this.week),
				type: value2.type,
				userid: uni.getStorageSync('userID')
			}
			if(value2.id){
				data.id=value2.id
			}
			let res=await myAxios({
				method:'post',
				url:'/anonymous/updateWeekPlan',
				data
			})
			if(res.data.statusCode==200){
				this.getWeeklyTarget()
			}else{
				uni.showToast({
					title:'更新数据失败,请重试',
					icon:'none',
					duration:500
				})
			}
		},
			
		// 上周总结-本周创新与收获
		async handleHarvest(e,value2){
			let {value} = e.detail
			let data = {
			  content: value,
			  timeSign: +('' + this.year + this.week),
			  type: value2.type,
			  year: this.year,
			  userid: uni.getStorageSync('userID')
			}
			if(value2.id){
				data.id=value2.id
			}
			let res=await myAxios({
				method: 'post',
				url: '/anonymous/updateSummarize',
				data
			})
			if(res.data.statusCode==200){
				this.getWeeklySummary()
			}else{
				uni.showToast({
					title:'更新数据失败,请重试',
					icon:'none',
					duration:500
				})
			}
		},
			
		// 上周总结-克服障碍的对策和方法
		async handleService(e,value2){
			let {value} = e.detail
			let data = {
        content: value,
        timeSign: +('' + this.year + this.week),
        type: value2.type,
        year: this.year,
        userid: uni.getStorageSync('userID')
      }
			if(value2.id){
				data.id=value2.id
			}
			let res=await myAxios({
				method: 'post',
				url: '/anonymous/updateSummarize',
				data
			})
			if(res.data.statusCode==200){
				this.getWeeklySummary()
			}else{
				uni.showToast({
					title:'更新数据失败,请重试',
					icon:'none',
					duration:500
				})
			}
		},
			
		// 上周总结-未完成目标的原因及障碍
		async handleReason(e,value2){
			let {value} =e.detail
			let data = {
        content: value,
        timeSign: +('' + this.year + this.week),
        type: value2.type,
        year: this.year,
        userid: uni.getStorageSync('userID')
      }
			if(value2.id){
				data.id=value2.id
			}
			let res=await myAxios({
				method: 'post',
				url: '/anonymous/updateSummarize',
				data
			})
			if(res.data.statusCode==200){
				this.getWeeklySummary()
			}else{
				uni.showToast({
					title:'更新数据失败,请重试',
					icon:'none',
					duration:500
				})
			}
		},
			
		// 上周总结-目标完成情况
		async handleWeekPerformance(e,value2){
				let {value} = e.detail
				let data = {
					content: value,
					timeSign: +('' + this.year + this.week),
					type: value2.type,
					year: this.year,
					userid: uni.getStorageSync('userID')
				}
				if(value2.id){
					data.id=value2.id
				}
				let res=await myAxios({
					method:'post',
					url:'/anonymous/updateSummarize',
					data
				})
				if(res.data.statusCode==200){
					this.getWeeklySummary()
				}else{
					uni.showToast({
						title:'更新数据失败,请重试',
						icon:'none',
						duration:500
					})
				}
				
		},
		
		// 时间转化为周数
		getWeek() {
			let date = new Date();
			let beginDate = new Date(date.getFullYear(), 0, 1);
			let week = Math.ceil((parseInt((date - beginDate) / (24 * 60 * 60 * 1000)) + 1 + beginDate.getDay()) / 7);
			this.week=week
		},
		
		// 获取分享数据
		async getSharePlan(){
			this.update2=false
			let data={
				timeSign: +('' + this.year + this.week),
				userid:uni.getStorageSync('userID')
			}
			let res=await myAxios({
				method:'post',
				url:'/anonymous/queryShare',
				data
			})
			console.log(res)
			if(res.data.statusCode==200&&res.data.result){
				let {result}=res.data
				result.forEach(v=>{
					this.shareArray.forEach((value,index)=>{
						if(v.type===value.type){
							this.shareArray[index]=v
						}
					})
				})
				console.log(this.shareArray)
			}else{
				uni.showToast({
					title:'获取分享数据失败,请重试',
					icon:'none',
					duration:500
				})
			}
			this.update2=true
		},
		
		// 获取周目标数据
		async getWeeklyTarget(){
			this.update1=false
			let data={
				timeSign: +('' + this.year + this.week),
				userid: uni.getStorageSync('userID')
			}
			let res=await myAxios({
				method:'post',
				url:'/anonymous/queryWeekPlan',
				data
			})
			// console.log(res)
			if(res.data.statusCode==200&&res.data.result){
				// 初始化数据
				this.weeklyPlan= [{
						content: '',
						type: '本周目标',
						complete: false
					},
					{
						content: '',
						type: '本周目标',
						complete: false
					},
					{
						content: '',
						type: '本周目标',
						complete: false
					},
					{
						content: '',
						type: '本周目标',
						complete: false
					},
					{
						content: '',
						type: '本周目标',
						complete: false
					},
					{
						content: '',
						type: '本周目标',
						complete: false
					},
					{
						content: '',
						type: '本周目标',
						complete: false
					},
					{
						content: '',
						type: '本周目标',
						complete: false
					},
					{
						content: '',
						type: '本周目标',
						complete: false
					},
					{
						content: '',
						type: '本周目标',
						complete: false
					},
					{
						content: '',
						type: '本周目标',
						complete: false
					},
					{
						content: '',
						type: '本周目标',
						complete: false
					},
					{
						content: '',
						type: '本周目标',
						complete: false
					},
					{
						content: '',
						type: '本周目标',
						complete: false
					},
					{
						content: '',
						type: '本周目标',
						complete: false
					},
					{
						content: '',
						type: '本周目标',
						complete: false
					},
					{
						content: '',
						type: '本周目标',
						complete: false
					},
					{
						content: '',
						type: '本周目标',
						complete: false
					}
				],
				this.otherPlan= [{
						type: '学习计划',
						content: '',
						complete: false
					},
					{
						type: '健康计划',
						content: '',
						complete: false
					},
					{
						type: '本周反省',
						content: '',
						complete: false
					}
				]
				let {result} =res.data
				result.forEach((v, i) => {
					if (v.type == '本周目标') {
						this.weeklyPlan[i] = v
						this.weeklyPlan.length = 18
					}
					this.otherPlan.forEach((value,index)=>{
						if(value.type==v.type){
							this.otherPlan[index]=v
						}
					})
				});
			}else{
				uni.showToast({
					title:'获取数据失败,请重试',
					icon:'none',
					duration:500
				})
			}
			this.update1=true
		},
		
		// 获取周总结数据
		async getWeeklySummary() {
				this.update=false
				// 获取总结数据
				let data = {
					userid: uni.getStorageSync('userID'),
					timeSign: +('' + this.year + this.week),
					year: this.year
				}
				let res = await myAxios({
					method: 'post',
					url: '/anonymous/querySummarize',
					data
				})
				if (res.data.statusCode==200&&res.data.result) {
					let{result}=res.data
					this.weekPerformance = [{
							content: '',
							type: '目标完成情况',
						},
						{
							content: '',
							type: '目标完成情况',
						},
						{
							content: '',
							type: '目标完成情况',
						},
						{
							content: '',
							type: '目标完成情况',
						},
						{
							content: '',
							type: '目标完成情况',
						},
						{
							content: '',
							type: '目标完成情况',
						}
					],
						
						this.reason = [{
								content: '',
								type: '未完成目标的原因及障碍'
							},
							{
								content: '',
								type: '未完成目标的原因及障碍'
							},
							{
								content: '',
								type: '未完成目标的原因及障碍'
							}
						],
						this.service = [{
								content: '',
								type: '克服障碍的对策和方法'
							},
							{
								content: '',
								type: '克服障碍的对策和方法'
							},
							{
								content: '',
								type: '克服障碍的对策和方法'
							},
						],
						this.harvest = [{
								content: '',
								type: '本周创新与收获'
							},
							{
								content: '',
								type: '本周创新与收获'
							},
							{
								content: '',
								type: '本周创新与收获'
							},
						]
						let j=0;
						let k=0;
						let l=0;
						let g=0;
					for (let i = 0; i < result.length; i++) {
						if (result[i].type == '目标完成情况') {
							this.weekPerformance[j]=result[i]
								this.weekPerformance.length = 6
								j++
						}
						if (result[i].type == '未完成目标的原因及障碍') {
							this.reason[k]=result[i]
							this.reason.length = 3
							k++
						}
						if (result[i].type == '克服障碍的对策和方法') {
							this.service[l]=result[i]
								this.service.length = 3
								l++
						}
						if (result[i].type == '本周创新与收获') {
							this.harvest[g]=result[i]
								this.harvest.length = 3
								g++
						}
					}
					
				}else{
					uni.showToast({
						title:'获取数据失败,请重试',
						icon:'none',
						duration:500
					})
				}
				this.update=true
			},
		},
		onLoad() {
			this.getWeek()
			this.getWeeklySummary()
			this.getWeeklyTarget()
			this.getSharePlan()
		}
	}
</script>

<style lang="less">
page{
  background: #EFF3F6;
}
.tabbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
	background: #fff;
  height: 50rpx;
  padding: 7rpx 14rpx;
  font-size: 15rpx;
  .weekTab{
    display: flex;
    height: 36rpx;
    width: 252rpx;
    border-radius: 5rpx;
    color: #404040;
    background:rgba(248,248,248,1);
    &>view{
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }
        .on{
          background: #2ECE94;
          color: #fff;
        }
  }
  .week-change{
    width: 378rpx;
    height: 36rpx;
    display: flex;
    border-radius: 5rpx;
    .tab { 
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      &:nth-child(2){
        background: #f8f8f8;
        color: #2ECE94;
      }
    }
  }
  
}
.week{
  display: flex;
  justify-content: space-between;
  margin: 0 14rpx;
  &-left{
    width: 221rpx;
    border: 1rpx solid #1C5E55;
    box-sizing: border-box;
    &-item{
      height: 54rpx;
      border-bottom: 1rpx solid #1C5E55;
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      &:nth-child(1),&:nth-child(2){
        height: 40rpx;
        background: #22705D;
        box-sizing: border-box;
        font-size: 13rpx;
        color: #fff;
      }
      &:nth-child(9),&:nth-child(13),&:nth-child(17){
        background: #22705D;
        font-size: 13rpx;
        box-sizing: border-box;
        color: #fff;
      }
      &:last-child{
        border-bottom: 0rpx;
      }
      .mytext{
        width: 100%;
        height: 100%;
        text-align: center;
      }
    }
  }
  &-right{
    width: 491rpx;
    border: 1rpx solid #1C5E55;
    box-sizing: border-box;
    &-title{
      display: flex;
      height: 80rpx;
      background: #22705D;
      font-size: 13rpx;
      color: #fff;
      .left{
        width: 36rpx;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .right{
        width: 90rpx;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .center{
        width: 365rpx;
        font-size: 15rpx;
        border-left: 1rpx solid #1C5E55;
        border-right: 1rpx solid #1C5E55;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        .icon{
          margin: 0 36rpx 0 26rpx;
        }
        .description{
          font-size: 12rpx;
        }
      }
    }
    &-content{
      display: flex;
      height: 54rpx;
      &:last-child{
        .left,.right,.center{
          border-bottom: 0rpx;
        }
      }
      .left{
        width: 36rpx;
        display: flex;
				font-size: 16rpx;
        justify-content: center;
        align-items: center;
        border-bottom: 1rpx solid #1C5E55;
      }
      .right{
        width: 90rpx;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1rpx solid #1C5E55;
      }
      .center{
        width: 365rpx;
        box-sizing: border-box;
        border: 1rpx solid #1C5E55;
        border-top: 0rpx;
        .mytext{
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          text-align: center;
        }
      }
    }
  }
 
}
.footer{
  height: 241rpx;
  display: flex;
  justify-content: space-between;
  margin: 9rpx 14rpx 0;
  &-left{
    width: 222rpx;
    background: #2ECE94;
    font-size: 49rpx;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &-right{
    width: 491rpx;
    border: 1rpx solid #1C5E55;
    box-sizing: border-box;
    &-title{
      display: flex;
      height: 79rpx;
      background: #22705D;
      font-size: 13rpx;
      color: #fff;
      .title-left{
        width: 126rpx;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .title-right{
        width: 231rpx;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12rpx;
      }
    }
    &-content{
      display: flex;
      height: 54rpx;
      .content-left{
        width: 126rpx;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1rpx solid #1C5E55;
        font-size: 13rpx;
        color: #1C5E55;
        box-sizing: border-box;
      }
      .content-center,.content-right{
        width: 182rpx;
        border-bottom: 1rpx solid #1C5E55;
        border-left: 1rpx solid #1C5E55;
        &>view{
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .mytext{
          width: 100%;
          height: 100%;
          text-align: center;
        }
      }
    }
  }
}
.share{
	margin: 9rpx 14rpx 0;
	width: 722rpx;
	border: 1rpx solid #1C5E55;
	&-top{
		height: 40rpx;
		background: #22705D;
		font-size: 13rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #fff;
		font-weight: bold;
	}
	&-content{
		height: 90rpx;
		display: flex;
		&-left{
			width: 72rpx;
			border-top: 1rpx solid #1C5E55;
			font-size: 22rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			box-sizing: border-box;
		}
		&-right{
			width: 650rpx;
			border-top: 1rpx solid #1C5E55;
			border-left: 1rpx solid #1C5E55;
			box-sizing: border-box;
			textarea{
				width: 100%;
				height: 100%;
				text-align: center;
			}
		}
	}
}
</style>
