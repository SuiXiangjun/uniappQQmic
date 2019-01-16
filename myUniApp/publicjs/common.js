const PubFuc = {
	//人数格式化 超过10000保留小数点一位显示w 不超过则显示原数
	peoNum:(count)=>{
		let peoCount = Number(count)
		if(peoCount){
			if(peoCount/10000>1){
				return (peoCount/10000).toFixed(1)+'万'
			}else{
				return peoCount
			}
		}else{
			return 0
		}
	},
	// 秒格式化化成00:00的格式
	secondFormact:(second)=>{
		var sec = second%60;
		var min = Math.floor(second/60);
		if(min.toString().length<2){
			min = '0'+min;
		}
		if(sec.toString().length<2){
			sec = '0'+sec;
		}
		return min+':'+sec
	}
}
export default PubFuc