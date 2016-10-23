function d2a(n){
	return n*Math.PI/180;
}
function a2d(n){
    return n/180*Math.PI;
}
function rnd(n,m){
	return Math.floor(Math.random()*(m-n)+n);
}
// canvas画圆
function drawArc(gd,cx,cy,r,s,e,color){
		gd.beginPath();
		gd.moveTo(cx,cy);
		gd.arc(cx,cy,r,d2a(s-90),d2a(e-90),false);
		gd.fillStyle = color;
		gd.fill();
		gd.closePath();
	}
// 圆运动
function doMove(obj,iTarget,obja){
    clearInterval(obj.timer);
    var R=obj.parentNode.offsetWidth/2;
    var a=0;
    var start=obja || 0;
    var dis=iTarget-start;
    var time=2000;
    var count=Math.ceil(time/30);
    var n=0;

    obj.timer=setInterval(function(){
        n++;
        var a=1-n/count;
        var cur=start+dis*(1-a*a*a);
        var l=R+R*Math.sin(a2d(cur));
        var t=R-R*Math.cos(a2d(cur));
        obj.a=cur;
        obj.style.left=l+'px';
        obj.style.top=t+'px';
        if(n==count){
            clearInterval(obj.timer);
        }
    },30)
}
function backMove(obj,iTarget,obja){
    clearInterval(obj.timer);
    var R=obj.parentNode.offsetWidth/2;
    var a=0;
    var start=obja || 0;
    var dis=iTarget-start;
    var time=2000;
    var count=Math.ceil(time/30);
    var n=0;

    obj.timer=setInterval(function(){
        n++;
        var a=1-n/count;
        var cur=start+dis*(1-a*a*a);
        var l=R+R*Math.sin(a2d(cur));
        var t=R-R*Math.cos(a2d(cur));
        obj.a=cur;
        obj.style.left=l+'px';
        obj.style.top=t+'px';
        if(n==count){
            clearInterval(obj.timer);
        }
    },30)
}
function getPos(obj){
	var l = 0;
	var t = 0;
	while(obj){
		l+=obj.offsetLeft;
		t+=obj.offsetTop;
		obj = obj.offsetParent;
	}
	return {left:l, top:t};
}