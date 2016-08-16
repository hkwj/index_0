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
	
//放大镜开始
function bigPic(){
	var oDiv1=document.getElementById("div1_pic");
	var oDiv2=document.getElementById("div2_pic");
	var oDiv3=document.getElementById("div3_pic");
	var oDiv4=document.getElementById("div4_pic");
	oDiv1.onmouseover=function(){
	oDiv3.style.display=oDiv2.style.display="block";
		
	}
	
	oDiv1.onmouseout=function(){
		oDiv3.style.display=oDiv2.style.display="none";
	}
	
	oDiv2.onmousedown=function(ev){
		var oEvt=ev||event;
		var disX=oEvt.clientX-oDiv2.offsetLeft;
		var disY=oEvt.clientY-oDiv2.offsetTop;
		document.onmousemove=function(ev){
			var oEvt=ev||event;
			var l=oEvt.clientX-disX;
			var t=oEvt.clientY-disY;
			if(l<0) l=0;
			if(l>oDiv1.offsetWidth-oDiv2.offsetWidth){
				l=oDiv1.offsetWidth-oDiv2.offsetWidth
			}
			if(t<0) t=0;
			if(t>oDiv1.offsetHeight-oDiv2.offsetHeight){
				t=oDiv1.offsetHeight-oDiv2.offsetHeight
			}
			oDiv2.style.left=l+"px";
			oDiv2.style.top=t+"px";
			oDiv4.style.left=oDiv2.offsetLeft/(oDiv1.offsetWidth-oDiv2.offsetWidth)*(oDiv3.offsetWidth-oDiv4.offsetWidth)+"px";
			oDiv4.style.top=oDiv2.offsetTop/(oDiv1.offsetHeight-oDiv2.offsetHeight)*(oDiv3.offsetHeight-oDiv4.offsetHeight)+"px";
			
			
			
		}
		document.onmouseup=function(){
			document.onmouseup=document.onmousemove=null;
			
		}
		return false;
		//ev.setCapture && ev.setCapture();
		
	}
	

};


bigPic();
//放大镜结束
	
//3d盒子开始
function threeD(){
	var oBox=document.querySelector("#cube");
	var x=0;
	var y=0;
	var iSpeedX=0;
	var iSpeedY=0;
	var lastX=0;
	var lastY=0;
	var timer=null;
	oBox.onmousedown=function(ev){
		clearInterval(timer);
		var disX=ev.pageX-y;
		var disY=ev.pageY-x;
		document.onmousemove=function(ev){
			x=ev.pageY-disY;
			y=ev.pageX-disX;
			oBox.style.WebkitTransform='perspective(800px) rotateX('+(-x/3)+'deg) rotateY('+(y/3)+'deg)';		
			oBox.style.MozTransform='perspective(800px) rotateX('+(-x/3)+'deg) rotateY('+(y/3)+'deg)';	
			oBox.style.MskitTransform='perspective(800px) rotateX('+(-x/3)+'deg) rotateY('+(y/3)+'deg)';	
			oBox.style.transform='perspective(800px) rotateX('+(-x/3)+'deg) rotateY('+(y/3)+'deg)';	
			iSpeedX=ev.pageX-lastX;
			iSpeedY=ev.pageY-lastY;
			lastX=ev.pageX;
			lastY=ev.pageY;
		};//move fn
		document.onmouseup=function(){
			document.onmousemove=document.onmouseup=null;
			clearInterval(timer);
			timer=setInterval(function(){
				iSpeedX*=0.8;
				iSpeedY*=0.8;
				x+=iSpeedY;
				y+=iSpeedX;
				oBox.style.WebkitTransform='perspective(800px) rotateX('+-x/3+'deg) rotateY('+y/3+'deg)';
				oBox.style.MozTransform='perspective(800px) rotateX('+-x/3+'deg) rotateY('+y/3+'deg)';
				oBox.style.MsTransform='perspective(800px) rotateX('+-x/3+'deg) rotateY('+y/3+'deg)';
				oBox.style.transform='perspective(800px) rotateX('+-x/3+'deg) rotateY('+y/3+'deg)';
				if(Math.abs(iSpeedX)<1){iSpeedX=0};
				if(Math.abs(iSpeedY)<1){iSpeedY=0};
				if(iSpeedX==0 && iSpeedY==0){
					clearInterval(timer);
				};
			},30)
		};//up fn
		return false;
	};//mousedown fn
};


threeD();
//3d盒子结束

//爆炸效果
function rnd(n,m){
	return Math.floor(Math.random()*(m-n)+n);
}
function expo(){
	var oExpoBox = document.getElementById('expo_box');
	var R = 4;
	var C = 7;
	for(var i=0;i<R;i++){
		for(var j=0;j<C;j++){
			var oS = document.createElement('span');
			oS.style.width = oExpoBox.offsetWidth/C+'px';
			oS.style.height = oExpoBox.offsetHeight/R+'px';
			oExpoBox.appendChild(oS);
			oS.style.left = j*oS.offsetWidth+'px';
			oS.style.top = i*oS.offsetHeight+'px';
			oS.style.backgroundPosition = -j*oS.offsetWidth+'px '+-i*oS.offsetHeight+'px';
		}
	}
	var aS = oExpoBox.children;
	var iNow = 0;
	var bOk = false;
	oExpoBox.onclick=function(){
		if(bOk)return;
		bOk = true;
		iNow++;
		for(var i=0;i<aS.length;i++){
			aS[i].style.WebkitTransition = '0.5s all ease';
			var x = (aS[i].offsetLeft+aS[i].offsetWidth/2)-oExpoBox.offsetWidth/2;
			var y = (aS[i].offsetTop+aS[i].offsetHeight/2)-oExpoBox.offsetHeight/2;
			aS[i].style.WebkitTransform = 'perspective(800px) translate('+x+'px,'+y+'px) rotateY('+rnd(-180,180)+'deg) rotateX('+rnd(-180,180)+'deg) scale('+rnd(1,1.5)+','+rnd(1,1.5)+')';
			aS[i].style.MozTransform = 'perspective(800px) translate('+x+'px,'+y+'px) rotateY('+rnd(-180,180)+'deg) rotateX('+rnd(-180,180)+'deg) scale('+rnd(1,1.5)+','+rnd(1,1.5)+')';
			aS[i].style.MsTransform = 'perspective(800px) translate('+x+'px,'+y+'px) rotateY('+rnd(-180,180)+'deg) rotateX('+rnd(-180,180)+'deg) scale('+rnd(1,1.5)+','+rnd(1,1.5)+')';
			aS[i].style.transform = 'perspective(800px) translate('+x+'px,'+y+'px) rotateY('+rnd(-180,180)+'deg) rotateX('+rnd(-180,180)+'deg) scale('+rnd(1,1.5)+','+rnd(1,1.5)+')';
			
			aS[i].style.opacity = 0;
		}
		function tranEnd(){
			aS[aS.length-1].removeEventListener('transitionend',tranEnd,false);
			for(var i=0;i<aS.length;i++){
				aS[i].style.WebkitTransition = 'none';
																		
				aS[i].style.backgroundImage = 'url(img/expo'+(iNow%3+1)+'.jpg)';
				
				aS[i].style.WebkitTransform = 'perspective(800px) translate(0px,0px) rotateY(0deg) rotateX(0deg) scale(1,1)';
				aS[i].style.MozTransform = 'perspective(800px) translate(0px,0px) rotateY(0deg) rotateX(0deg) scale(1,1)';
				aS[i].style.MsTransform = 'perspective(800px) translate(0px,0px) rotateY(0deg) rotateX(0deg) scale(1,1)';
				aS[i].style.transform = 'perspective(800px) translate(0px,0px) rotateY(0deg) rotateX(0deg) scale(1,1)';
				aS[i].style.opacity = 1;
			}													
			oExpoBox.style.backgroundImage = 'url(img/expo'+((iNow+1)%3+1)+'.jpg)';
			bOk = false;
		}
		aS[aS.length-1].addEventListener('transitionend',tranEnd,false);
	};
};


expo();




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
};
	
	music();






	
}//window onload 