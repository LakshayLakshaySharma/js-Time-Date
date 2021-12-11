setInterval(function getTime(){
    let a = new Date();
    let date = a.toLocaleDateString();
    let time = a.getHours() + ":" + a.getMinutes() + ":"  + a.getSeconds();
    document.getElementById("p").innerHTML = time + "<br>" + date;
    },1000);