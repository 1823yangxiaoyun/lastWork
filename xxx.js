//顶部悬浮
window.onload=function(){
    		var cover=document.getElementsByClassName('box')[0];
    		window.onscroll=function(){
    			var st=document.documentElement.scrollTop || document.body.scrollTop;
    			if(st>180){
    				cover.style.position='fixed';
    			}
    			else{
    				cover.style.position='static';
    			}
    		}
    	}
//实现边栏样式
var bian1=document.getElementById('bian1');
 bian1.onmouseover=function(){
 	this.style="right:0px"
 }
 bian1.onmouseout=function(){
 	this.style="right:-90px"
 }
 var bian2=document.getElementById('bian2');
 bian2.onmouseover=function(){
 	this.style="right:0px"
 }
 bian2.onmouseout=function(){
 	this.style="right:-90px"
 }
 var bian3=document.getElementById('bian3');
 var bian32=document.getElementById('bian32');
 bian3.onmouseover=function(){
 	this.style="right:0px";
	 bian32.setAttribute('src','img/erwei.png');
	 bian32.setAttribute('style','padding-left:10px;');
 }
 bian3.onmouseout=function(){
 	 this.style="right:-90px";
 	 bian32.setAttribute('src','img/serwei.png');
	 bian32.setAttribute('style','padding:35px 0px 0px 10px;');

 }
 var bian4=document.getElementById('bian4');
 bian4.onmouseover=function(){
 	this.style="right:0px"
 }
 bian4.onmouseout=function(){
 	this.style="right:-83px"
 }
//动图
var b =document.getElementById("dao");
var d1 =document.getElementById("d1");
d1.setAttribute('src',"img/hot.gif");
//轮播
	var slider = document.getElementById('slider');
		var index = 1;
		var box = document.getElementById('lu');
		var left = document.getElementById('left');
		var right = document.getElementById('right');
		var oNavlist = document.getElementById('nav').children;
		function next(){
			index++;
			navChange();
			animate(slider,{left:-800*index},function(){
				if(index==7){
					slider.style.left = '-800px';
					index = 1;
				}
			})
		}
		var timer = setInterval(next,3000)
		function prev(){
			index--;
			navChange();
			animate(slider,{left:-800*index},function(){
				if(index==0){
					slider.style.left = '-4800px';
					index = 6;
				}
			})
		}

		//鼠标划上时，停止轮播，左右箭头淡入
		box.onmouseover = function(){
			clearInterval(timer);
			animate(left,{opacity:80});
			animate(right,{opacity:80});
		}	
		//鼠标划出时，开始轮播，左右箭头淡出
		box.onmouseout = function(){
			animate(left,{opacity:0})
			animate(right,{opacity:0})
			timer = setInterval(next, 3000);
    	}
		//点击左右箭头实现图片滑动
		right.onclick = next;
		left.onclick = prev;
		//点击小按钮，让图片滑动到对应的位置
		for(var i = 0;i<oNavlist.length;i++){
			oNavlist[i].idx = i;
			oNavlist[i].onclick = function(){
				index = this.idx + 1;
				animate(slider,{left:-800*index})
				navChange();
			}
		}
		//随着图片的滑动，小按钮的样式跟着改变
		function navChange(){
			for (var i = 0; i < oNavlist.length; i++) {
				oNavlist[i].className = '';
			};
			if(index==7){
				oNavlist[0].className = 'active';
			}else if(index==0){
				oNavlist[5].className = 'active';
			}else{
				oNavlist[index-1].className = 'active';			
			}
		}
		//animate
		function animate(obj,json,callback){
			clearInterval(obj.timer);
			obj.timer=setInterval(function(){
				var isStop=true;
				for(var attr in json){
					if(attr=="opacity"){
						var now=parseInt(getStyle(obj,attr)*100);//parseInt(getStyle(obj,attr)是初始值		
						//*100是为了透明值好算，透明值是0~1的小数。			
					}
					else{
						var now=parseInt(getStyle(obj,attr));
						//console.log(now);
					}
				    var speed=(json[attr]-now)/5;//json{left:500,top:500}
				    speed=speed>0?Math.ceil(speed):Math.floor(speed);//向上取整和向下取整
				    if(attr=="opacity"){
				    	obj.style[attr]=(now+speed)/100;//obj.style[attr]是遍历中的值
				    }
				    else{
				    	obj.style[attr]=now+speed+"px";
				    }
				    var current=now+speed;
				    if(json[attr]!==current){
				    	isStop=false;
				    }
				}
				if(isStop){
					clearInterval(obj.timer);
					callback&&callback();				
				}  
			},30);
		}
		function getStyle(obj,style){
        	if(getComputedStyle(obj)){
        		return getComputedStyle(obj)[style];//给某个元素附一个属性，style是属性，因为作为参数用[],否则用.
        	}
        	else{
        		obj.currentStylr[style];
        	}
        }

//生成下拉框旁边的钱数
var se=document.getElementById('se');
var money=document.getElementById('money');
money.innerHTML="￥"+10;
se.onclick=function(){
	var arr=se.options;
	var t=arr[se.selectedIndex].text;
	money.innerHTML="￥"+t;
}
//公告栏滚动效果
var ra2=document.getElementById("ra2");
var gong1=document.getElementById('gong1');
var gong2=document.getElementById('gong2');
 var speed =20;
 window.onload=function(){
 	gong2.innerHTML = gong1.innerHTML;
 	function Marquee(){if(ra2.scrollTop>=gong1.offsetHeight){
 		ra2.scrollTop=0;
 }
 else{
 	ra2.scrollTop=ra2.scrollTop+1;
 }
}
var MyMar=setInterval(Marquee,speed);
ra2.onmouseover=function(){clearInterval(MyMar)};
ra2.onmouseout=function(){MyMar=setInterval(Marquee,speed); };
}