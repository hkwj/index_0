// JavaScript Document

window.onload=function(){
	//吸顶条开始

	var oTopBar1=document.getElementById('top_bar_1');
	window.onscroll=function(){
		var scrTop=document.documentElement.scrollTop||document.body.scrollTop;
		
		if(scrTop>=100){//变化的scroll与原始位置对比
			//吸	
			oTopBar1.style.position='fixed';
		}else{
			//不吸	
			oTopBar1.style.position='static';
		}
	};//吸顶条结束
	
	
//图片环
(function(){
	var oRingUl=document.querySelector(".ring_ul");
	var aRingUlLi=document.querySelectorAll(".ring_ul li");
	var bOk=false;
	for(var i=0;i<aRingUlLi.length;i++){
		aRingUlLi[i].style.WebkitTransition='1s all ease '+(11-i)+'ms';
		aRingUlLi[i].style.MozTransition='1s all ease '+(11-i)+'ms';
		aRingUlLi[i].style.MsTransition='1s all ease '+(11-i)+'ms';
		aRingUlLi[i].style.transition='1s all ease '+(11-i)+'ms';
		aRingUlLi[i].style.WebkitTransform='rotateY('+i*360/11+'deg) translateZ(350px)';
		aRingUlLi[i].style.MozTransform='rotateY('+i*360/11+'deg) translateZ(350px)';
		aRingUlLi[i].style.MsTransform='rotateY('+i*360/11+'deg) translateZ(350px)';
		aRingUlLi[i].style.transform='rotateY('+i*360/11+'deg) translateZ(350px)';
	}
function tranEnd(){
	aRingUlLi[0].removeEventListener('transitionend',tranEnd,false);
	bOk=true;
}

aRingUlLi[0].addEventListener('transitionend',tranEnd,false);
	var x=0;
	var y=0;
	var iSpeedX=0;
	var iSpeedY=0;
	var lastX=0;
	var lastY=0;
	var timer=null;
	oRingUl.onmousedown=function(ev){
		var oEvtRing=ev||event;
		if(!bOk)return;
		clearInterval(timer);
		var disX=oEvtRing.pageX-y;
		var disY=oEvtRing.pageY-x;
		document.onmousemove=function(ev){
			var oEvtRing=ev||event;
			x=oEvtRing.pageY-disY;
			y=oEvtRing.pageX-disX;
			oRingUl.style.WebkitTransform='perspective(800px) rotateX('+-x/5+'deg) rotateY('+y/5+'deg)';
			oRingUl.style.MozTransform='perspective(800px) rotateX('+-x/5+'deg) rotateY('+y/5+'deg)';
			oRingUl.style.MsTransform='perspective(800px) rotateX('+-x/5+'deg) rotateY('+y/5+'deg)';
			oRingUl.style.transform='perspective(800px) rotateX('+-x/5+'deg) rotateY('+y/5+'deg)';
			iSpeedX=oEvtRing.pageX - lastX;
			iSpeedY=oEvtRing.pageY - lastY;
			lastX=oEvtRing.pageX;
			lastY=oEvtRing.pageY;
		}
		document.onmouseup=function(){
			document.onmousemove=document.onmouseup=null;
			
			clearInterval(timer);
			timer = setInterval(function(){
				iSpeedX*=0.8;
				iSpeedY*=0.8;
				x+=iSpeedY;
				y+=iSpeedX;
				oRingUl.style.WebkitTransform='perspective(800px) rotateX('+-x/5+'deg) rotateY('+y/5+'deg)';
				oRingUl.style.MozTransform='perspective(800px) rotateX('+-x/5+'deg) rotateY('+y/5+'deg)';
				oRingUl.style.MsTransform='perspective(800px) rotateX('+-x/5+'deg) rotateY('+y/5+'deg)';
				oRingUl.style.transform='perspective(800px) rotateX('+-x/5+'deg) rotateY('+y/5+'deg)';
				if(Math.abs(iSpeedX)<1){iSpeedX=0};
				if(Math.abs(iSpeedY)<1){iSpeedY=0};
				if(iSpeedX==0 && iSpeedY==0){clearInterval(timer)};
			},30)
		}
		
		return false;
	};//ring fn
})()
function getStyle(obj,sName){
		return (obj.currentStyle||getComputedStyle(obj,false))[sName];	
	};//getStyle
	
	

//移动鼠标改变图片大小

(function(){
	var oScalePic=document.getElementById('scale_pic');
	var aImg=oScalePic.getElementsByTagName('img');
	
	oScalePic.onmousemove=function(ev){
		var oEvt=ev||event;
		for(var i=0;i<aImg.length;i++){
			var a=aImg[i].offsetLeft+aImg[i].offsetWidth/2-oEvt.pageX+80;	
			var b=aImg[i].offsetTop+oScalePic.offsetTop+aImg[i].offsetHeight/2-oEvt.pageY;
			
			var c=Math.sqrt(a*a+b*b);
			var dis=c;
			
			
			var scale = 1-dis/600;		//要的1---0	//计算
			
			if(scale<0.5)	scale=0.5;//限定
			
			aImg[i].style.width=130*scale+'px';//使用
		
		}
	};	
})()

//music 开始
function music(){
	var oMusicControl=document.getElementById("music_control");
	var oMusic=document.getElementById("music");
	var bSing=false;
	oMusicControl.onclick=function(){
		if(bSing==false){
			oMusic.src="music/xuanmu.mp3";
			bSing=true;
		} else{
			oMusic.src="";
			bSing=false;
		}
	}
}
	
	music();





}//window onload fn