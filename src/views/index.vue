<template>
    <div>
    <div class="tap">
        <span>{{nowTime}}</span>
        <span><iframe name="weather_inc" src="http://i.tianqi.com/index.php?c=code&id=55" style="border:solid 1px #7ec8ea" width="255" height="294" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe></span>
    </div>
    <div class="bader">
        我是中间内容
    </div>
    <div class="footer">
        我是尾部
    </div>
    </div>
</template>

<script>
    export default {
         methods: {
// 获取当前时间函数
  timeFormate(timeStamp) {
      let year = new Date(timeStamp).getFullYear();
      let month =new Date(timeStamp).getMonth() + 1 < 10? "0" + (new Date(timeStamp).getMonth() + 1): new Date(timeStamp).getMonth() + 1;
      let date =new Date(timeStamp).getDate() < 10? "0" + new Date(timeStamp).getDate(): new Date(timeStamp).getDate();
      let hh =new Date(timeStamp).getHours() < 10? "0" + new Date(timeStamp).getHours(): new Date(timeStamp).getHours();
      let mm =new Date(timeStamp).getMinutes() < 10? "0" + new Date(timeStamp).getMinutes(): new Date(timeStamp).getMinutes();
      this.nowTime = year + "年" + month + "月" + date +"日" ;
      console.log(this.nowTime);
    },
// 定时器函数
    nowTimes(){
      this.timeFormate(new Date());
      setInterval(this.nowTimes,30*1000);
    }
    },
    created() {
    this.nowTimes();
  },
  // 挂载完成时
  mounted(){
    this.nowTimes();
  },
        name: "index"
    }
</script>

<style scoped>
    .tap,.bader,.footer{
        background-color: aquamarine;
        border: 1px solid black;
    }
    .tap span{
        font-size: 30px;
        color: white;
    }
</style>
