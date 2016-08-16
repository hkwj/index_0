// JavaScript Document

define(function(require,exports,module){
	module.exports={
		getClass:function(oParent,sClass){
			var aChild=oParent.getElementsByTagName('*');
			var reg=new RegExp('\\b'+sClass+'\\b');
			var arr=[];
			for(var i=0;i<aChild.length;i++){
				if(reg.test(aChild[i].className)){
					arr.push(aChild[i])
				}	
			}
			return arr;
		},
		delay:function(id1,id2){
			var oDiv1 = document.getElementById(id1);
			var oDiv2 = document.getElementById(id2);
			var timer = null;
			oDiv1.onmouseover=oDiv2.onmouseover=function(){
				clearTimeout(timer);
				timer = setTimeout(function(){
					oDiv2.style.display='block';
					oDiv1.style.background='#f3f3f3';
				},140);
			};
			oDiv1.onmouseout=oDiv2.onmouseout=function(){
				clearTimeout(timer);
				timer = setTimeout(function(){
					oDiv2.style.display='none';
					oDiv1.style.background='';
				},140);
			};
		}	
	};
	
});