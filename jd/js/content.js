// JavaScript Document

define(function(require,exports,module){
	var bbb=require('main');
	exports.abc=function(){
		function photo(){
			var oBox=document.getElementById('box');
			var oPrev=oBox.children[0];
			var oNext=oBox.children[1];
			var oI=oBox.children[2];
			var oUl=oBox.getElementsByTagName('ul')[0];
			var aLi=oUl.children;
			var oOl=oBox.getElementsByTagName('ol')[0];
			var aBtn=oOl.children;
			//澶嶅埗涓€浠�
			oUl.innerHTML+=oUl.innerHTML;
			oUl.style.width=aLi.length*aLi[0].offsetWidth+'px';
			var W=oUl.offsetWidth/2;
			var iNow=0;
	
			for(var i=0; i<aBtn.length; i++){
				(function(index){
					aBtn[i].onclick=function(){
						iNow=index+Math.floor(iNow/aBtn.length)*aBtn.length;
						tab();
						document.title=iNow;
					}
				})(i);
			}
			function tab(){
				for(var i=0; i<aBtn.length; i++){
					aBtn[i].className='';
				}
				if(iNow>0){
					aBtn[iNow%aBtn.length].className='active';
				}else{
					aBtn[(iNow%aBtn.length+aBtn.length)%aBtn.length].className='active';	
				}
				//oUl.style.left=-iNow*aLi[0].offsetWidth+'px';	
				startMove(oUl,-iNow*aLi[0].offsetWidth);
			}
			//鐐瑰嚮
			function remove(){
				iNow++;
				tab();
				document.title=iNow;
			}
			oNext.onclick=remove;
			oPrev.onclick=function(){
				iNow--;
				tab();
				document.title=iNow;
			};
			//鑷姩杞挱
			var timeCrotrol=null;
			clearInterval(timeCrotrol);	
			timeCrotrol=setInterval(remove,4000);
			oBox.onmouseover=function(){
				oPrev.style.display='block';
				oNext.style.display='block';
				clearInterval(timeCrotrol);	
			};
			oBox.onmouseout=function(){
				timeCrotrol=setInterval(remove,4000);	
				oPrev.style.display='none';
				oNext.style.display='none';
			};
			
			var left=0;
			function startMove(obj,iTarget){
				var count=Math.floor(1000/30);
				var start=left;
				var dis=iTarget-start;
				var n=0;
				clearInterval(obj.timer);
				obj.timer=setInterval(function(){
					n++;
					
					var a=1-n/count;
					left=start+dis*(1-Math.pow(a,3));
					
					if(left<0){
						obj.style.left=left%W+'px';	
					}else{
						obj.style.left=(left%W-W)%W+'px';		
					}
					
					if(n==count){
						clearInterval(obj.timer);	
					}
				},30);
			}
		}
		bbb.delay('div_cont1','div_page1');
		bbb.delay('div_cont2','div_page2');
		bbb.delay('div_cont3','div_page3');
		bbb.delay('div_cont4','div_page4');
		bbb.delay('div_cont5','div_page5');
		bbb.delay('div_cont6','div_page6');
		bbb.delay('div_cont7','div_page7');
		bbb.delay('div_cont8','div_page8');
		bbb.delay('div_cont9','div_page9');
		bbb.delay('div_cont10','div_page10');
		photo();
		function goods(id1){
			var oWare=document.getElementById(id1);
			var oAdd=bbb.getClass(oWare,'add')[0];
			var oReduce=bbb.getClass(oWare,'reduce')[0];
			var oUl_node=bbb.getClass(oWare,'contentTop_right_list')[0];
			var aLi_node=oUl_node.children;
			oAdd.onclick=function(){
				var oNewNode=aLi_node[0].cloneNode(true);
				oUl_node.appendChild(oNewNode);
			};
			oReduce.onclick=function(){
				if(aLi_node.length<2){
					alert('鍙墿1涓簡锛屽啀鍑忓氨娌℃湁浜�');
				}else{
					oUl_node.removeChild(aLi_node[aLi_node.length-1]);
				}
			};
		}
		goods('ware');
		goods('ware2');
	};
});