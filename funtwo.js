// 第二題
// var bmi =0;
function countbmi(h,w){
    var bmi = (w/(h/100*h/100)).toFixed(1)
    return Number(bmi);
  }
  console.log(countbmi(178,70));