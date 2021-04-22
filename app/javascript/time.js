function setclock(num){
  //時計が24時をこえないように
  let ret;
  if( num > 24 ) { ret = num - 24; }
  else { ret = num; }
  return ret;
}

function clock() {
  let time = new Date();
  let hour = setclock( time.getHours() );
  let minute = setclock( time.getMinutes() );
  let second = setclock( time.getSeconds() );
  let clock = "現在時刻は"+hour+":"+minute+":"+second;
  let eattime = "次の食事時間は"+(hour+16)+":"+minute+":"+second+"です";
  document.getElementById("realtime").innerHTML = clock;
bottom.addEventListener("click", () => {
  document.getElementById("nexteat").innerHTML = eattime;
 })
}
setInterval(clock, 1000);