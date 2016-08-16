// JavaScript Document



window.onload=function(){
	
//手风琴开始
function shouFQ(){
	var oDiv=document.getElementById('div1');
	var aDiv=oDiv.getElementsByTagName('div');
	for(var i=0;i<aDiv.length;i++){
		aDiv[i].style.left=i*40 + 'px';
	}

	for(var i=0;i<aDiv.length;i++){
		(function(index){
			aDiv[i].onmouseover= function(){
				for(var i=0;i<aDiv.length;i++){
					if(i<=index){
						move(aDiv[i],{left:i*40},{time:700})
					}else if(i>index){
						move(aDiv[i],{left:824+(i-1)*40},{time:700})
					}
				}
			}
		})(i);
	}
}
	
shouFQ();
//手风琴结束
}//window onload fn
