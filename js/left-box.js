window.onload = function(){
	// var oLeftBox = document.getElementById('left-box')
	// var oIn = oLeftBox.querySelector('.login_in');
	// var oD = document.getElementById('box');
	// var oClose =oD.querySelector('.login_close');
	// oIn.onclick = function(){
	// 	oD.style.display = "block";
	// 	oD.style.transition = "1s all ease";
	// 	setTimeout(function(){
	// 		oD.style.opacity = '1';
	// 		oD.style.transform = "scale(1,1)";
	// 	},0)
	// }
	// oClose.onclick = function(){
	// 	oD.style.opacity = "0";
	// 	oD.style.transform = "scale(5,4)";
	// 	function end(){
	// 		oD.removeEventListener("transitionend",end,false);
	// 		oD.style.display = "none";
	// 	}
	// 	oD.addEventListener("transitionend",end,false);
	// }
	// canvas画圆
	var oC = document.getElementById('chart');
	var gd = oC.getContext('2d');
	var oOne = document.getElementById('first');
	var aSpan = oOne.getElementsByTagName('span');
	var cx = oC.width/2,
		cy = oC.height/2,
		r = 80;
	var lg = gd.createLinearGradient(0,0,cx*2,200);
	lg.addColorStop(0,'red');
	lg.addColorStop(1,'green');
	var arr=[];
	for(var i=0;i<aSpan.length;i++){
		if(i%2==0){
			arr.push(parseInt(aSpan[i].innerHTML));
		}
	}
	var sum = 0;
	for(var i=0;i<arr.length;i++){
		sum+=arr[i];
	}
	var aD = [];
	for(var i=0;i<arr.length;i++){
		aD[i] = arr[i]/sum*360;
	}
	var d = 0;

	for(var i=0;i<aD.length;i++){
		drawArc(gd,cx,cy,r,d,d+aD[i],getComputedStyle(aSpan[i*2].parentNode,false).backgroundColor);

		d+=aD[i];
	}
	gd.beginPath();
	gd.fillStyle='rgba(10,10,10,0.1)';
	gd.fillRect(0,0,cx*2,cy*2);
	gd.closePath();
	gd.beginPath();
	gd.shadowOffsetX = 2;
	gd.shadowOffsetY = 2;
	gd.shadowBlur = 1;
	gd.shadowColor = 'red';
	gd.font = '18px 微软雅黑';
	gd.fillStyle = lg;
	gd.fillText("总分配概览",cx-40,20)
// 圆运动
	var oBox=document.getElementById('js-box');
    var N=5;
    var R=oBox.offsetWidth/2;
    for(var i=0;i<N;i++){
        var oSpan=document.createElement('span');
        oBox.appendChild(oSpan);
    };
    var aSpan=oBox.children;
    var jsBoxH = getPos(oBox).top;
    var ibys = true;
    window.onscroll = function(){
    	winH = document.body.scrollTop+document.documentElement.clientHeight;
    	if(ibys){
		    if(jsBoxH<=(winH-50)){
		        for(var i=0;i<aSpan.length;i++){
	            	var a=360/N*i;
	                doMove(aSpan[i],a);
		        }
		    }else{
	        	ibys=false;
	        }
		    ibys=!ibys;
    	}

    	console.log(jsBoxH,winH);
	}
}